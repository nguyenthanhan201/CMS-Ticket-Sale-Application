import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];

const options: any = {
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      color: "rgba(136, 136, 136, 1)",
      stepSize: 40,
      min: 140,
      max: 260,
      ticks: {
        font: {
          size: 14,
        },
        align: "end",
        callback: function (value: any) {
          // console.log(value);
          if (value === 140 || value === 180 || value === 220 || value >= 260)
            return value + "tr               ";
        },
      },
      grid: {
        color: "#ece9f1",
      },
    },
    x: {
      ticks: {
        color: "rgba(136, 136, 136, 1)",
        font: {
          size: 14,
        },
        align: "start",
      },
      grid: {
        color: "white",
      },
    },
  },
  options: {
    plugins: {
      tooltip: {
        enabled: true,
      },
      datalabels: {
        formatter: (value: any, content: any) => {
          console.log(value);
          console.log(content);
          return value + "tr";
        },
      },
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      data: [143, 175, 180, 230, 215, 210, 182],
      label: "An",
      fill: true,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      tension: 0.8,
      pointRadius: 1,
      borderColor: "#fe9d44",
      lineTension: 0.3,
    },
  ],
};

export function LineChart(): JSX.Element {
  return <Line data={data} options={options} />;
}
