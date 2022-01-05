import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const labels = ["Vé đã sử dùng", "Vé chưa sử dụng"];

const options: any = {
  plugins: {
    legend: { display: false },
    datalabels: {
      formatter: (value: any, ctx: any) => {
        let sum = ctx.dataset._meta[0].total;
        let percentage = ((value * 100) / sum).toFixed(2) + "%";
        console.log(value);
        return percentage;
      },
      color: "#fff",
    },
    title: {
      display: true,
      text: "Gói gia đình",
      color: "#1E0D03",
      font: { weight: "600" },
      padding: {
        top: 0,
        bottom: 25,
      },
    },
  },
  layout: { padding: { bottom: 100 } },
  responsive: true,
};

// let customLabels = labels.map((label, index) => `${label}: ${data[index]}`);

const data: any = {
  type: "pie",
  labels,
  datasets: [
    {
      data: [13568, 56024],
      backgroundColor: ["rgba(255, 138, 72, 1)", "rgba(79, 117, 255, 1)"],
      borderColor: ["rgba(255, 138, 72, 1)", "rgba(79, 117, 255, 1)"],
      borderWidth: 1,
    },
    {
      backgroundColor: "white",
      borderColor: "white",
      color: "black",
    },
  ],
};

const options2: any = {
  plugins: {
    legend: { display: false },
    datalabels: {
      display: true,
      formatter: (value: any, ctx: any) => {
        let sum = ctx.dataset._meta[0].total;
        let percentage = ((value * 100) / sum).toFixed(2) + "%";
        console.log(value);
        return percentage;
      },
      color: "#fff",
    },
    title: {
      display: true,
      text: "Gói sự kiện",
      color: "#1E0D03",
      font: { weight: "600" },
      padding: {
        top: 0,
        bottom: 25,
      },
    },
  },
  layout: { padding: { bottom: 100 } },
  responsive: true,
};

const data2: any = {
  type: "pie",
  labels: labels,
  datasets: [
    {
      data: [13568, 56024],
      backgroundColor: ["rgba(255, 138, 72, 1)", "rgba(79, 117, 255, 1)"],
      borderColor: ["rgba(255, 138, 72, 1)", "rgba(79, 117, 255, 1)"],
      borderWidth: 1,
    },
    {
      backgroundColor: "white",
      borderColor: "white",
      color: "black",
    },
  ],
};

export default function PieChart(): JSX.Element {
  return (
    <>
      <Pie data={data} options={options}/>
      <Pie data={data2} options={options2} />
    </>
  );
}
