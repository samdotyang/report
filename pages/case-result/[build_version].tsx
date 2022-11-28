import CardBarChart from "@components/Cards/CardDoughnutChart";
import CardTable from "@components/Cards/CardTable";
import prisma from "@components/prisma";

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
                    <CardTable data={result}/>
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
