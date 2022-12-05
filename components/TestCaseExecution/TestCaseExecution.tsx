import CardTable from "@components/Cards/CardTable";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { v4 } from "uuid";

export interface TestCaseExecution {
  id: number,
  platform: string,
  feature: string,
  case_id: string,
  test_case_desc: string,
  exc_time: string,
  case_result: string,
}

interface TestCaseExecutionProps {
  TestCaseExecutions: TestCaseExecution[];
  ItemClicked: (event) => void;
}

export const TestCaseExecution = ({TestCaseExecutions, ItemClicked}: TestCaseExecutionProps) => {
  const [itemClicked, setItemClicked] = useState();
  const handleItemClick = (item) => {
    ItemClicked(item)
  }
  if (TestCaseExecutions.length > 0) { 
    return (
      <>
        <CardTable>
          <thead>
            <tr>
              <th className="text-black dark:text-white align-middle px-6 border border-black dark:border-white border-l-0 border-r-0 text-left">
                Platform
              </th>
              <th className="text-black dark:text-white align-middle px-6 border border-black dark:border-white border-l-0 border-r-0 text-left">
                Feature
              </th>
              <th className="text-black dark:text-white align-middle px-6 border border-black dark:border-white border-l-0 border-r-0 text-left">
                Case ID
              </th>
              <th className="text-black dark:text-white align-middle px-6 border border-black dark:border-white border-l-0 border-r-0 text-left">
                Desc
              </th>
              <th className="text-black dark:text-white align-middle px-6 border border-black dark:border-white border-l-0 border-r-0 text-left">
                Exc time.
              </th>
              <th className="text-black dark:text-white align-middle px-6 border border-black dark:border-white border-l-0 border-r-0 text-left">
                Result
              </th>
              {/* {Object.keys(TestCaseExecutions[0]).map( (key, index) => (
                <th key={index} className="text-black dark:text-white align-middle px-6 border border-black dark:border-white border-l-0 border-r-0 text-left">
                  {key}
                </th>
              ))} */}
            </tr>
          </thead>
            <tbody>
              {TestCaseExecutions.map( (execution: TestCaseExecution) =>
                <tr key={execution.id}>
                  <td className="text-black dark:text-white px-6 align-middle border-t-0 border-l-0 border-r-0 p-4">
                    {execution.platform}
                  </td>
                  <td className="text-black dark:text-white px-6 align-middle border-t-0 border-l-0 border-r-0 p-4">
                    {execution.feature}
                  </td>
                  <td className="text-black dark:text-white px-6 align-middle border-t-0 border-l-0 border-r-0 p-4">
                    {execution.case_id}
                  </td>
                  <td className="text-black dark:text-white px-6 align-middle border-t-0 border-l-0 border-r-0 p-4">
                    {execution.test_case_desc}
                  </td>
                  <td className="text-black dark:text-white px-6 align-middle border-t-0 border-l-0 border-r-0 p-4">
                    {execution.exc_time}s
                  </td>
                  <td className="text-black dark:text-white px-6 align-middle border-t-0 border-l-0 border-r-0 p-4">
                    {execution.case_result == "1" ? "Pass" : <button type="button" data-modal-toggle="defaultModal" onClick={() => {handleItemClick(execution)}}>Fail</button>}
                  </td>

                  {/* {Object.keys(execution).map( (key, _) => {
                    var val;
                    if (key == "case_result") {
                      val = execution[key]== "1" ? 
                      "Pass" : <button type="button" data-modal-toggle="defaultModal" onClick={() => {handleItemClick(execution)}}>Fail</button>
                    } else if (key == "exc_time") {
                      val = `${execution[key]}s`
                    } else {
                      val = execution[key]
                    }
                    return (
                      <td key={v4()} className="text-black dark:text-white px-6 align-middle border-t-0 border-l-0 border-r-0 p-4">
                        {val}
                      </td>
                    )
                  }
                  )} */}
                </tr>
              )}
            </tbody>
            <tfoot>
            </tfoot>
        </CardTable>
      </>
    )
  } else {
    return (
      <>
        <h4>No data to show</h4>
      </>
    )
  }
}