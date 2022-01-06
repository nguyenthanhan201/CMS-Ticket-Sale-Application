import "../assets/css/Statistical.css";
import Button1 from "./Button1";
import ButtonDatePicker from "./ButtonDatePicker";
import Header from "./Header";
import { LineChart } from "./LineChart";
import PieChart from "./PieChart";

export default function Statistical(): JSX.Element {
  const labels = ["Vé đã sử dùng", "Vé chưa sử dụng"];

  const options: any = {
    plugins: {
      legend: { display: false },
      datalabels: {
        display: true,
        formatter: (value: any, ctx: any) => {
          let sum = ctx.dataset._meta[0].total;
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          // console.log(value);
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
    maintainAspectRatio: true,
  };

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
  return (
    <div className="statistical">
      <Header />
      <div className="statistical-content">
        <h1>Thống kê</h1>
        <div className="line-chart">
          <div className="top-line-chart">
            <h4>Doanh thu</h4>
            <ButtonDatePicker />
          </div>
          <LineChart />
        </div>
        <div className="pie-chart">
          <div className="top-pie-chart">
            <p>Tổng doanh thu theo tuần</p>
            <h1>525.145.000</h1>
            <span>đồng</span>
          </div>
          <div className="content-pie-chart">
            <Button1 />
            <div className="wrapper-pie-chart">
              <PieChart data_add={data} option={options} />
            </div>
            <div className="wrapper-pie-chart">
              <PieChart data_add={data2} option={options2} />
            </div>
            <div className="pie-chart-infor">
              <div className="item">
                <div className="rectangle"></div>
                <p>Vé đã sử dụng</p>
              </div>
              <div className="item">
                <div className="rectangle"></div>
                <p>Vé chưa sử dụng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
