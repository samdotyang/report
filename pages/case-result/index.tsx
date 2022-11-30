import CardTable from "@components/Cards/CardTable";
import TestRun from "@components/TestRun";
import { prisma } from "database/prisma"

export async function getServerSideProps(context) {
  let { page } = context.query;
  const results = await prisma.automation_test_run_result.findMany({
    select: {
      build_version: true,
      start_time: true,   
      end_time: true,
      pass: true,
      fail: true,
    },
    orderBy: {
      id: "desc"
    },
    take: (parseInt(page) * 10),
    skip: ((parseInt(page) - 1) * 10)
  });
  const json_results = JSON.parse(JSON.stringify(results))
  return { props: { results: json_results } }
}

export default function Dashboard({results}) {

  if (results.length > 0) {
    return (
      <>
        <div className="flex justify-center flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <TestRun testruns={results}/>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-center flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">

          </div>
        </div>
      </>
    )
  }
}
