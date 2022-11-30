import { useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels-4";

Chart.register(ChartDataLabels);
var chart: Chart;

const UpdateColor = (isDarkTheme) => {
  const textColor = isDarkTheme == `true` ? 'white' : 'black'
  chart.options.plugins = {
    title: {
      display: true,
      text: 'Case Execution Result',
      position: 'bottom',
      color: textColor
    },
    datalabels: {
      backgroundColor: function(context) {
        return context.dataset.backgroundColor;
      },
      borderColor: textColor,
      borderRadius: 25,
      borderWidth: 2,
      display: true,
      color: textColor,
      font: {
        weight: 'bold'
      },
      padding: 6,
    },
    legend: {
      labels: {
        color: textColor
      }
    }
  }
  chart.update();
};

function CardDoughnutChart({data}) {

  useEffect(() => {
    const labels = ["Pass", "Fail"]
    const failed_case = data.filter((key: any)=> key["case_result"] == 0);
    const passed_case = data.filter((key: any) => key["case_result"] == 1);
    const canvas = document.getElementById("myChart") as HTMLCanvasElement | null
    const ctx = canvas?.getContext("2d");
    const textColor = localStorage.getItem("isDarkTheme") == `true` ? 'white' : 'black';
    
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
						position: 'bottom',
						color:textColor
					},
					datalabels: {
						backgroundColor: function(context) {
							return context.dataset.backgroundColor;
						},
						borderColor: textColor,
						borderRadius: 25,
						borderWidth: 2,
						display: true,
						color: textColor,
						font: {
							weight: 'bold'
						},
						padding: 6,
					},
					legend: {
						labels: {
						  color: textColor,
						}
					},
        },
      }
    };
    chart = new Chart(ctx as CanvasRenderingContext2D, config as ChartConfiguration);
    return function cleanup() {
      chart.destroy();
    }
  }, [data]);
  return (
  <>
    <div className="relative flex flex-col min-w-0 break-words bg-mac-light-card dark:bg-mac-dark-card w-full mb-6 shadow-lg rounded">
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

export { UpdateColor, CardDoughnutChart };
