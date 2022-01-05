import "../assets/css/Statistical.css";
import Header from "./Header";
import { LineChart } from "./LineChart";
import PieChart from "./PieChart";

export default function Statistical(): JSX.Element {

  return (
    <>
      <div className="statistical">
        <Header />
        <div className="statistical-content">
          <h1>Thống kê</h1>
          <div className="line-chart">
            <div className="top-line-chart">
              <h4>Doanh thu</h4>
              <button>
                Tháng 4, 2021{" "}
                <span>
                  <i className="far fa-calendar"></i>
                </span>
              </button>
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
              <button>
                Tháng 4, 2021{" "}
                <span>
                  <i className="far fa-calendar"></i>
                </span>
              </button>
              <div className="wrapper-pie-chart">
                <PieChart />
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
      <div className="calender">
        gio
      </div>
    </>
  );
}
