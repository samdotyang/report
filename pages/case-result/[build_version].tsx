import CardBarChart from "@components/Cards/CardDoughnutChart";
import CardTable from "@components/Cards/CardTable";
import prisma from "@components/prisma";
import { v4 } from "uuid";

export default function Result(result) {
    result = result.res;
    return (
        <>
            <div className="flex flex-col flex-wrap justify-center items-center">
                <div className="w-full xl:w-8/12 2xl:w-8/12 mb-12 xl:mb-0 2xl:mb-0 px-4 pt-20">
                    <CardBarChart data={result}/>
                </div>
            </div>

            {/* Table data */}
            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:mb-0 px-4">
                    <CardTable>
                    <thead>
                            <tr>
                                {Object.keys(result[0]).map( (key, index) => (
                                    <th key={index} className="align-middle px-6 border border-l-0 border-r-0 text-left">
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {result.map( (d: any) =>
                                <tr key={d["id"]}>
                                    {Object.keys(d).map( (key, _) => {
                                        var val;
                                        if (key == "case_result") {
                                            val = d[key]== "1" ? "Pass" : "Fail"
                                        } else if (key == "exc_time") {
                                            val = `${d[key]}s`
                                        } else {
                                            val = d[key]
                                        }
                                        return (
                                            <td key={v4()} className="px-6 align-middle border-t-0 border-l-0 border-r-0 p-4">
                                                {val}
                                            </td>
                                        )
                                    }
                                    )}
                                </tr>
                            )}
                        </tbody>
                        <tfoot></tfoot>
                    </CardTable>
                </div>
            </div>
        </>
    )
}

async function fetch(build_version) {
    const result = await prisma.auto_execution_result.findMany({
        where: {
            build_version: {
                equals: build_version
            }
        },
        select: {
            id: true,
            platform: true,
            case_id: true,
            test_case_desc: true,
            exc_time: true,
            case_result: true,
        }
    });
    return result
}

async function loadResults() {
    const result = await prisma.auto_execution_result.findMany({
        select: {
            id: true,
            platform: true,
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


export async function getStaticProps(params) {
    const res = await fetch(parseFloat(params.params.build_version))
    return {
        props: { res },
    }
}
