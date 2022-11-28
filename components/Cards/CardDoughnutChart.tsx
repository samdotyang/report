import { useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

export default function CardBarChart({data}: any) {
    useEffect(() => {
		const labels = ["Pass", "Fail"]
		const failed_case = data.filter((key: any)=> key["case_result"] == 0);
		const passed_case = data.filter((key: any) => key["case_result"] == 1);
		const canvas = document.getElementById("myChart") as HTMLCanvasElement | null
        const ctx = canvas?.getContext("2d");
        
        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: "Case",
                    data: [passed_case.length, failed_case.length],
                    backgroundColor: ["rgba(40, 196, 62, 0.8)", "red"]
                }
            ]
        };
        const config = {
            type: 'doughnut',
            data: chartData,
            options: {
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: 'Case Execution Result',
                    position: "bottom",
                  }
                }
            }
        };
        const chart = new Chart(ctx as CanvasRenderingContext2D, config as ChartConfiguration);
        return function cleanup() {
            chart.destroy();
        }
    }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-mac-card w-full mb-6 shadow-lg rounded">
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
