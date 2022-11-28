import CardBarChart from "@components/Cards/CardDoughnutChart";

export default function Dashboard({ data }: any) {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardBarChart data={data}/>
                </div>
            </div>

            <div className="flex flex-wrap mt-4">
                <table className="md:table-auto border bg-slate-800">
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map( (key, _) => (
                                <th key={key} className="border">{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (s: any) =>
                            <tr key={s["id"]}>
                                {Object.keys(s).map( (key, index) => (
                                    key == "case_result" ? 
                                        <td className="border">
                                            {s[key]== "1" ? "Pass" : "Fail"}
                                        </td> :
                                        <td className="border">{s[key]}</td>
                                ))}
                            </tr>
                        )}
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`http://127.0.0.1:3000/api/case`);
    const data = await res.json();
    return { props: { data } }
}
