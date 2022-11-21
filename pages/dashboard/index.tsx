import { useEffect, useRef } from "react";

import Sidebar from "../../components/sidebar/sidebar"
import Chart from "chart.js/auto"

export default function Dashboard({ data }: any) {
    const chartRef = useRef(null);
    const labels = ["Pass", "Failed"]
    const failed_case = data.filter((key: {})=> key["case_result"] == 0);
    const passed_case = data.filter((key: {}) => key["case_result"] == 1);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");
        
        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [failed_case.length, passed_case.length],
                    backgroundColor: ["green", "red"]
                }
            ]
        };
        const config = {
            type: 'doughnut',
            data: chartData,
        };
        const chart = new Chart(ctx, config);
        return function cleanup() {
            chart.destroy();
        }
    });

    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Test</button>
            List
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="test-gray-700 text-base">aaaaa</div>
                    <canvas className="inline-block" id="myChart" ref={chartRef} />
                </div>
            </div>

            <table className="md:table-fixed">
                <thead>
                    <tr>
                        {Object.keys(data[0]).map( (key, _) => (
                            <td>{key}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map( s =>
                        <tr key={s["id"]}>
                            {Object.keys(s).map( (key, index) => (
                                <td>{s[key]}</td>
                            ))}
                        </tr>
                    )}
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/case`);
    const data = await res.json();
    return { props: { data } }
}
