import { Tag } from "antd";
import React from "react";
import "../assets/css/ControlTicket.css";
import Button from "../component/Button";
import TableTicket from "../component/TableTicket";

export default function ControlTicket() {
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
      title: "Booking code",
      dataIndex: "bookingCode",
      key: "name",
      fixed: "left",
      responsive: ["sm"],
    },
    {
      title: "Số vé",
      dataIndex: "soVe",
      key: "address",
      fixed: "left",
      responsive: ["sm"],
    },
    {
      title: "Tình trạng sử dụng",
      key: "tags",
      fixed: "left",
      dataIndex: "tags",
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag === "Đã sử dụng" ? "geekblue" : "green";
            if (tag === "Hết hạn") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4.5" r="4" fill={color} />
                </svg>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
      responsive: ["sm"],
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "ngaySuDung",
      key: "address",
      align: "right",
      fixed: "left",
      responsive: ["sm"],
    },
    {
      title: "Ngày xuất vé",
      dataIndex: "ngayXuatVe",
      key: "address",
      align: "right",
      fixed: "left",
      responsive: ["sm"],
    },
    {
      title: "Cổng check - in",
      dataIndex: "coCheckIn",
      key: "address",
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
    },
    {
      key: "2",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Đã sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
    {
      key: "3",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
    {
      key: "4",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
    {
      key: "5",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
    {
      key: "6",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
    {
      key: "7",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
    {
      key: "8",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
    {
      key: "9",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
    {
      key: "10",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
    {
      key: "11",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
    {
      key: "12",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
    {
      key: "13",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Chưa sử dụng"],
      ngaySuDung: "12/12/2020",
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
    },
  ];
  return (
    <div className="control-ticket">
      <div className="control-ticket-content">
        <h1>Danh sách vé</h1>
        <div className="top-control">
          <div className="top-control-left">
            <form action="">
              <input type="text" placeholder="Tìm kiếm bằng vé số" />
              <i className="fas fa-search"></i>
            </form>
          </div>
          <div className="top-control-right">
            <Button class="btn-filter">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
                  stroke="#FF993C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              Lọc vé
            </Button>
            <Button class="btn-control">
              <span>Xuất file (.csv)</span>
            </Button>
          </div>
        </div>
        <TableTicket dataSource={data} columns={columns} />
      </div>
    </div>
  );
}
