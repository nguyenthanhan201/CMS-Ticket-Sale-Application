import { useEffect, useState } from "react";
import "../assets/css/SiderBar.css";
import logo from "../assets/images/insight-05 1.png";

export default function SiderBar(): JSX.Element {
  const [ulActive, setUlActive] = useState(Object);
  // const ulActive = document.querySelector(".siderbar ul li.active");
  useEffect(() => {
    // const ulActive = document.querySelector(".siderbar ul li.active");
    setUlActive(document.querySelector(".siderbar-menu ul li.active"));
  },[ulActive])
  const allUl = document.querySelectorAll(".siderbar-menu ul li");
  // console.log(ulActive);
  allUl.forEach((item) => {
    item.addEventListener("click", () => {
      // console.log(ulActive);
      ulActive.classList.remove("active");
      item.classList.add("active");
    });
  });
  return (
    <>
      <div className="siderbar">
        <div className="siderbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="siderbar-menu">
          <ul>
            <li className="active">
              <a href="/#">
                <span className="icon">
                  <i className="fas fa-home"></i>
                </span>
                <span className="title">
                  <p>Trang chủ</p>
                </span>
              </a>
            </li>
            <li>
              <a href="/#">
                <span className="icon">
                  <i className="fas fa-ticket-alt"></i>
                </span>
                <span className="title">
                  <p>Quản lí vé</p>
                </span>
              </a>
            </li>
            <li>
              <a href="/#">
                <span className="icon">
                  <i className="fas fa-file-invoice"></i>
                </span>
                <span className="title">
                  <p>Đổi soát vé</p>
                </span>
              </a>
            </li>
            <li>
              <a href="/#">
                <span className="icon">
                  <i className="fas fa-cog"></i>
                </span>
                <span className="title">
                  <p>Cài đặt</p>
                </span>
              </a>
              <p className="text">Gói dịch vụ</p>
            </li>
          </ul>
        </div>
      </div>
      <p className="policy-text">Copy right &copy; 2020 Alta Software</p>
    </>
  );
}
