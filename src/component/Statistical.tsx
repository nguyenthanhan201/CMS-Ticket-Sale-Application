import React from "react";
import "../assets/css/Statistical.css";
import ButtonDatePicker from "./ButtonDatePicker";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
// import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function Statistical(): JSX.Element {
  const labels = ["Vé đã sử dùng", "Vé chưa sử dụng"];

  const options: any = {
    plugins: {
      legend: { display: false },
      datalabels: {
        color: "#1E0D03",
        anchor: "end",
        align: "start",
        offset: -45,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 12,
        backgroundColor: "#ffffff",
        font: {
          size: "14",
          font: "Montserrat",
        },
        padding: 12,
        hoverInnerGlowWidth: 20,
        hoverInnerGlowColor: "rgba(146,151,164,.5)",
        hoverOuterGlowWidth: 20,
        hoverOuterGlowColor: "rgba(127,133,151,1)",
      },
      title: {
        display: true,
        text: "Gói sự kiện",
        color: "#1E0D03",
        font: { weight: "600", size: "18" },
        padding: {
          top: 0,
          bottom: 25,
        },
      },
      // onHover: function (evt: any, elements: any) {
      //   if (elements && elements.length) {
      //     const segment = elements[0];
      //     this.chart.update();
      //     const selectedIndex = segment["_index"];
      //     segment._model.outerRadius += 5;
      //   } else {
      //     if (segment) {
      //       segment._model.outerRadius -= 5;
      //     }
      //     const segment = null;
      //   }
      // },
    },
    // layout: { padding: { bottom: 100 } },
    responsive: true,
    // maintainAspectRatio: true,
  };

  const data: any = {
    type: "pie",
    labels,
    datasets: [
      {
        // plugins: [ChartDataLabels],
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
    shadowOffsetX: 5,
    shadowOffsetY: 5,
    shadowBlur: [5, 10, 15, 20, 25, 30, 0],
    // shadowColor: effectColors.shadows,
  };

  const options2: any = {
    plugins: {
      legend: { display: false },
      datalabels: {
        color: "#1E0D03",
        anchor: "end",
        align: "start",
        offset: -45,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 12,
        backgroundColor: "#ffffff",
        font: {
          size: "14",
          font: "Montserrat",
        },
        padding: 12,
      },
      title: {
        display: true,
        text: "Gói gia đình",
        color: "#1E0D03",
        font: { weight: "600", size: "18" },
        padding: {
          top: 0,
          bottom: 25,
        },
      },
    },
    // layout: { padding: { bottom: 100 } },
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
            {/* <ButtonDatePicker /> */}
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
