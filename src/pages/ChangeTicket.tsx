import React, { useEffect, useState } from "react";
import "../assets/css/ChangeTicket.css";
import Buttion from "../component/Button";
import Button from "../component/Button";
import DatePiker from "../component/ButtonDatePicker";
import TableTicket from "../component/TableTicket";

export default function ChangeTicket() {
  const columns: any = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      align: "center",
      fixed: "left",
      render: (text: any) => <a>{text}</a>,
      responsive: ["sm"],
    },
    {
      title: "Số vé",
      dataIndex: "soVe",
      key: "soVe",
      fixed: "left",
      responsive: ["sm"],
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "ngaySuDung",
      key: "ngaySuDung",
      fixed: "left",
      responsive: ["sm"],
    },
    {
      title: "Tên loại vé",
      dataIndex: "tenLoaiVe",
      key: "tenLoaiVe",
      align: "left",
      fixed: "left",
      responsive: ["sm"],
    },
    {
      title: "Cổng check-in",
      dataIndex: "coCheckIn",
      key: "coCheckIn",
      align: "left",
      fixed: "left",
      responsive: ["sm"],
    },
    {
      title: "",
      dataIndex: "stateTicket",
      key: "stateTicket",
      align: "left",
      fixed: "left",
      responsive: ["sm"],
    },
  ];

  const data = [
    {
      key: "1",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Hết hạn"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "2",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Đã sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "3",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "4",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "5",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "6",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "7",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "8",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "9",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "10",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "11",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "12",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
    },
    {
      key: "13",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      tenLoaiVe: "vé cổng",
      stateTicket: "Chưa đổi soát",
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
  return (
    <div className="change-ticket">
      <div className="change-ticket-content">
        <h1>Đổi soát vé</h1>
        <div className="top-control">
          <div className="top-control-left">
            <form action="">
              <input type="text" placeholder="Tìm bằng số vé" />
              <i className="fas fa-search"></i>
            </form>
          </div>
          <div className="top-control-right">
            <Button class="btn-change">
              <span>Chốt đổi soát</span>
            </Button>
          </div>
        </div>
        <TableTicket dataSource={data} columns={columns} />
      </div>
      <div className="filter-ticket-content">
        <h1>Lọc vé</h1>
        <table>
          <tbody>
            <tr>
              <td style={{ verticalAlign: "top" }}>Tình trạng đổi soát</td>
              <td>
                <table className="child-table">
                  <tbody>
                    <tr>
                      <td>
                        <input type="radio" name="filter" defaultChecked/>
                      </td>
                      <td>Tất cả</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="radio" name="filter" />
                      </td>
                      <td>Đã đổi soát</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="radio" name="filter" />
                      </td>
                      <td>Chưa đổi soát</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>Loại vé</td>
              <td>Vé cổng</td>
            </tr>
            <tr>
              <td>Từ ngày</td>
              <td>
                <DatePiker
                  activeDate={state.dayStart}
                  setActiveDate={setDayStart}
                />
              </td>
            </tr>
            <tr>
              <td>Đến ngày</td>
              <td>
                <DatePiker
                  activeDate={state.dayStart}
                  setActiveDate={setDayStart}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Button class="btn-filter">
          Lọc
        </Button>
      </div>
    </div>
  );
}
