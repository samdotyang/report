import CardTable from "@components/Cards/CardTable";
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
}

export const TestCaseExecution = ({TestCaseExecutions}: TestCaseExecutionProps) => {
  if (TestCaseExecutions.length > 0) { 
  return (
      <>
        <CardTable>
          <thead>
            <tr>
              {Object.keys(TestCaseExecutions[0]).map( (key, index) => (
                <th key={index} className="text-black dark:text-white align-middle px-6 border border-black dark:border-white border-l-0 border-r-0 text-left">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
            <tbody>
              {TestCaseExecutions.map( (execution: TestCaseExecution) =>
                <tr key={execution.id}>
                  {Object.keys(execution).map( (key, _) => {
                    var val;
                    if (key == "case_result") {
                      val = execution[key]== "1" ? 
                      "Pass" : <button type="button" data-modal-toggle="defaultModal">Fail</button>
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
                  )}
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