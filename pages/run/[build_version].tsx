import { useState } from "react";
import { CardDoughnutChart } from "@components/Cards/CardDoughnutChart";
import { prisma } from "database/prisma";
import TestCaseExecution from "@components/TestCaseExecution";
import Search from "@components/Search";
import { FailCaseModal } from "@components/Modal";

async function fetchWithBuildVersion(build_version) {
  const result = await prisma.auto_execution_result.findMany({
    where: {
      build_version: {
        equals: build_version
      }
    },
  });
  return result
}

async function loadResults() {
  const result = await prisma.auto_execution_result.findMany({
    select: {
      id: false,
      platform: true,
      feature: true,
      case_id: true,
      test_case_desc: true,
      exc_time: true,
      case_result: true,
      build_version: true,
    }
  });
  return result
}

export async function getStaticPaths() {
  const res = await loadResults()
  const paths = res.map ((result) => ({
    params: { build_version: result["build_version"].toString() },
  }));
  return { paths, fallback: false}
}

export async function getStaticProps({ params }) {
  let build_version = parseFloat(params.build_version)
  const res = await fetchWithBuildVersion(build_version)
  const results = JSON.parse(JSON.stringify(res))
  return {
    props: { results },
  }
}

export default function Result({results}) {
  const [filter, setFilter] = useState('');
  const [itemSelected, setItemSelected] = useState();
  const [showModal, setShowModal] = useState(false);

  results.sort((a,b) => {
    return a.case_result - b.case_result
  })

  const searchFilter = (array) => {
    return array.filter(
      (el) => el.case_id.includes(filter)
    )
  }

  const filtered = searchFilter(results);

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  const handleItemClick = (item) => {
    setItemSelected(item);
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className="flex flex-col flex-wrap justify-center items-center">
        <div className="w-full xl:w-8/12 2xl:w-8/12 mb-12 xl:mb-0 2xl:mb-0 px-4 pt-20">
          <CardDoughnutChart data={results}/>
        </div>
      </div>

      {/* Table data */}
      <div className="flex flex-wrap mt-4 bg-white dark:bg-mac-dark-background">
        <div className="w-full xl:mb-0 px-4">
          <div className="pb-4">
            <Search onChange={handleChange} type="search" placeholder="Search..."/>
          </div>
          <TestCaseExecution TestCaseExecutions={filtered} ItemClicked={handleItemClick}/>
        </div>
      </div>
      { itemSelected ?
        <FailCaseModal data={itemSelected} show={showModal} closeClicked={handleModalClose}/> :
        <div>

        </div>
      }
    </>
  )
}
