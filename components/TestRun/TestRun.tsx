import CardTable from "@components/Cards/CardTable";

export interface TestRun{
  id: number,
  build_version: number,
  start_time: string,
  end_time: string,
  pass: number,
  fail: number
}

interface TestRunProps {
  testruns: TestRun[];
}

export const TestRun = ({testruns}: TestRunProps) => {
  return (
    <>
      <CardTable>
        <thead>
          <tr>
            {Object.keys(testruns[0]).map( (key, _) => (
              <th key={key} className="text-black dark:text-white align-middle px-6 border border-l-0 border-r-0 text-left">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {testruns.map( (run: TestRun) =>
            <tr key={run.build_version}>
              {Object.keys(run).map( (key, _) => {
                let val;
                if (key == "build_version"){
                  val = <a href={`/run/${run[key]}`} className="font-medium dark:text-blue-500 hover:underline">{run[key]}</a>
                }
                else if (key.includes("time")) {
                  let date = new Date(run[key])
                  val = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
                } else {
                  val = run[key]
                }   
                  return (
                    <td key={key} className="text-black dark:text-white px-6 align-middle border-t-0 border-l-0 border-r-0 p-4">
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
}