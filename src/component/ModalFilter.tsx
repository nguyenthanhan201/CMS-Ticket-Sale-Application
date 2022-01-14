import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import "../assets/css/ModalFilter.css";
import Button from "./Button";
import DatePiker from "./ButtonDatePicker";
import InputCheckBox from "./InputCheckBox";

function ModalFilter({ isModalVisible, handleOk, handleCancel }: any) {
  const itemFilterDate = [
    {
      label: "Tất cả",
      defaultChecked: true,
    },
    {
      label: "Đã sử dụng",
    },
    {
      label: "Chưa sử dụng",
    },
    {
      label: "Hết hạn",
    },
  ];

  const itemFilterPort = [
    {
      label: "Tất cả",
      id: "checkbox-all",
      name: "checkbox-all",
    },
    {
      label: "Cổng 1",
      name: "checkboxs[]",
    },
    {
      label: "Cổng 2",
      name: "checkboxs[]",
    },
    {
      label: "Cổng 3",
      name: "checkboxs[]",
    },
    {
      label: "Cổng 4",
      name: "checkboxs[]",
    },
    {
      label: "Cổng 5",
      name: "checkboxs[]",
    },
  ];

  const [state, setState] = useState({
    dayStart: {
      activeDate: 0,
      activeMonth: 0,
      activeYear: 0,
    },
    dayEnd: {
      activeDate: 0,
      activeMonth: 0,
      activeYear: 0,
    },
    tinhTrang: 1,
    checkIn: ["c1"],
  });
  useEffect(() => {
    const d = new Date();
    setState({
      ...state,
      dayStart: {
        activeDate: d.getDate(),
        activeMonth: d.getMonth(),
        activeYear: d.getFullYear(),
      },
      dayEnd: {
        activeDate: d.getDate(),
        activeMonth: d.getMonth() + 1 > 11 ? 0 : d.getMonth() + 1,
        activeYear:
          d.getMonth() + 1 > 11 ? d.getFullYear() + 1 : d.getFullYear(),
      },
    });
  }, []);
  const setDayStart = (date: any, month: any, year: any) => {
    setState({
      ...state,
      dayStart: {
        activeDate: date,
        activeMonth: month,
        activeYear: year,
      },
    });
  };

  useEffect(() => {
    const checkbox_all = document.querySelector("#checkbox-all") as HTMLInputElement;
    const allItemCheckBox = document.querySelectorAll(
      "input[name='checkboxs[]']"
    );
    const checkCount = document.querySelectorAll(
      "input[name='checkboxs[]']"
    ).length;
    checkbox_all?.addEventListener("click", () => {
      const isCheckedAll = checkbox_all.checked;
      if (isCheckedAll) {
        allItemCheckBox.forEach((item: any) => {
          item.disabled = true;
          item.checked = false;
        });
      } else {
        allItemCheckBox.forEach((item: any) => {
          item.disabled = false;
          item.checked = false;
        });
      }
    });
    allItemCheckBox.forEach((item: any) => {
      item.addEventListener("click", () => {
        const checkCount2 = document.querySelectorAll(
          '[name="checkboxs[]"]:checked'
        ).length;
        if (checkCount2 >= checkCount) {
          checkbox_all.checked = true;
          allItemCheckBox.forEach((item: any) => {
            item.disabled = true;
            item.checked = false;
          });
        }
      });
    });
  });

  return (
    <div>
      <Modal
        title="Lọc vé"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-filter"
        footer={null}
      >
        <table>
          <tbody>
            <tr className="filter-date">
              <td className="txt">Từ ngày</td>
              <td className="txt">Đến ngày</td>
            </tr>
            <tr className="filter-date">
              <td>
                <DatePiker
                  activeDate={state.dayStart}
                  setActiveDate={setDayStart}
                />
              </td>
              <td>
                <DatePiker
                  activeDate={state.dayStart}
                  setActiveDate={setDayStart}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="filter-state">
          <div className="filter-state-title">Tình trạng sử dụng</div>
          <div className="filter-state-list-radio">
            {itemFilterDate.map((item: any, index: number) => (
              <div className="item" key={index}>
                <input type="radio" name="radio" defaultChecked={item.defaultChecked}/>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="filter-port">
          <div className="filter-port-title">Cổng Check - in</div>
          <div className="filter-port-list-check">
            {itemFilterPort.map((item: any, index: number) => (
              <div className="item" key={index}>
                {/* <input
                  type="checkbox"
                  name={item.name ? item.name : ""}
                  id={item.id ? item.id : ""}
                />
                <label htmlFor={item.id ? item.id : ""}>{item.label}</label> */}
                <InputCheckBox
                name={item.name ? item.name : ""}
                id={item.id ? item.id : ""}
                label={item.label}
                />
              </div>
            ))}
          </div>
        </div>
        <Button class="btn-filter" onClick={handleOk}>
          Lọc
        </Button>
      </Modal>
    </div>
  );
}

export default ModalFilter;
