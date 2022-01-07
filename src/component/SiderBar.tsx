import { useState } from "react";
import "../assets/css/SiderBar.css";
import logo from "../assets/images/insight-05 1.png";

function SiderBar(): JSX.Element {
  const [toggleSate, setToggleState] = useState(1);

  const itemsSider = [
    {
      display: "Trang chủ",
      icon: "fas fa-home",
    },
    {
      display: "Quản lí vé",
      icon: "fas fa-ticket-alt",
    },
    {
      display: "Đổi soát vé",
      icon: "fas fa-file-invoice",
    },
    {
      display: "Cài đặt",
      icon: "fas fa-cog",
    },
  ];

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="siderbar">
        <div className="siderbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="siderbar-menu">
          <ul>
            {itemsSider.map((item, index) => (
              <li
                onClick={() => toggleTab(index)}
                className={toggleSate === index ? "active" : "null"}
              >
                <a href="/#">
                  <span className="icon">
                    <i className={item.icon}></i>
                  </span>
                  <span className="title">
                    <p>{item.display}</p>
                  </span>
                </a>
              </li>
            ))}
            <p className="text">Gói dịch vụ</p>
          </ul>
        </div>
      </div>
      <p className="policy-text">Copy right &copy; 2020 Alta Software</p>
    </>
  );
}

export default SiderBar;
