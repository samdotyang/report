import CardTable from "@components/Cards/CardTable";
import prisma from "@components/prisma"

export async function getServerSideProps() {
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
        }
    });
    const r = JSON.parse(JSON.stringify(results))
    return { props: { results: r } }
}

export default function Dashboard({results}) {
    return (
        <>
            <div className="flex justify-center flex-wrap mt-4">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardTable>
                        <thead>
                            <tr>
                                {Object.keys(results[0]).map( (key, _) => (
                                    <th key={key} className="align-middle px-6 border border-l-0 border-r-0 text-left">
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {results.map( (s: any) =>
                                <tr key={s["build_version"]}>
                                    {Object.keys(s).map( (key, _) => {
                                        let val;
                                        if (key == "build_version"){
                                            val = <a href={`case-result/${s[key]}`} className="font-medium dark:text-blue-500 hover:underline">{s[key]}</a>
                                        }

                                        else if (key.includes("time")) {
                                            let d = new Date(s[key])
                                            val = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
                                        } else {
                                            val = s[key]
                                        }   
                                            return (
                                                <td key={key} className="px-6 align-middle border-t-0 border-l-0 border-r-0 p-4">
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
                </div>
            </div>
        </>
    );
}
