import { useState } from "react";
import TestRun from "@components/TestRun";
import { prisma } from "database/prisma";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const count = await prisma.automation_test_run_result.count()
  const pages = Math.ceil(count / 10)
  const { page } = context.query;
  const results = await prisma.automation_test_run_result.findMany({
    select: {
      build_version: true,
      start_time: true,   
      end_time: true,
      pass: true,
      fail: true,
    },
    orderBy: [
      {id: "desc"}
    ],
    take: 10,
    skip: (page - 1) * 10
  });
  const json_results = JSON.parse(JSON.stringify(results))
  return { props: { results: json_results, page_count: pages } }
}

export default function Run({results, page_count}) {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState(1);
  const TableWithData = ({ results, page_count }) => {
    const pageHandler = (e) => { 
      if (e.target.textContent === "Next") {
        if (pageIndex < page_count) {
          setPageIndex(pageIndex + 1);
        }
      } else if (e.target.textContent === "Previous") {
        if (pageIndex > 1) {
          setPageIndex(pageIndex - 1);
        }
      } else {
        if (pageIndex != e.target.textContent) {
          setPageIndex(parseInt(e.target.textContent!));
        }
      }
      
      if (pageIndex != e.target.textContent) {
        if (router.asPath.includes("?page")) {
          router.replace(`${router.asPath.split("?")[0]}?page=${pageIndex}`)
        } else {
          router.replace(`${router.asPath}?page=${pageIndex}`)
        }
      }
    }

    return (
      <>
        <div className="flex justify-center flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <TestRun testruns={results}/>
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px py-2">
                <li>
                  {/* <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a> */}
                  <button className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={pageHandler}>Previous</button>
                </li>
                {Array.from({ length: page_count }).map ((_, index) => 
                  <li key={index}>
                    <button className={`px-3 py-2 leading-tight text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ${(index + 1 == pageIndex) ? "dark:bg-gray-700" : "dark:bg-gray-800"} dark:border-gray-700 dark:text-white`} onClick={pageHandler}>{index+1}</button>
                    {/* <a href={`?page=${index+1}`} className={`px-3 py-2 leading-tight text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ${(index + 1 == pageIndex) ? "dark:bg-gray-700" : "dark:bg-gray-800"} dark:border-gray-700 dark:text-white`} onClick={pageHandler}>{index+1}</a> */}
                  </li>
                )}
                <li>
                  <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={pageHandler}>Next</button>
                  {/* <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a> */}
                </li>
              </ul>
            </nav>
          </div>        
        </div>
      </>
    )
  };

  const TableWithoutData = () => {
    return (
      <>
        <div className="flex justify-center flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          </div>
        </div>
      </>
    )
  };

  if (results.length > 0) {
    return <TableWithData results={results} page_count={page_count}/>
  }
  return  <TableWithoutData />
}
