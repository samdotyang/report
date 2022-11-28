export default function CardTable({data}) {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-mac-card w-full mb-6 shadow-lg rounded">
                <div className="block w-full overflow-x-auto">
                    <table className="items-center md:table-auto w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                {Object.keys(data[0]).map( (key, _) => (
                                    <th key={key} className="align-middle px-6 border border-l-0 border-r-0 text-left">
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map( (d: any) =>
                                <tr key={d["id"]}>
                                    {Object.keys(d).map( (key, _) => {
                                        var val;
                                        if (key == "case_result") {
                                            val = d[key]== "1" ? "Pass" : "Fail"
                                        } else if (key == "exc_time") {
                                            val = `${d[key]}sec`
                                        } else {
                                            val = d[key]
                                        }
                                        return (
                                            <td key={d["id"]} className="px-6 align-middle border-t-0 border-l-0 border-r-0 p-4">
                                                {val}
                                            </td>
                                        )
                                    }
                                    )}
                                </tr>
                            )}
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}