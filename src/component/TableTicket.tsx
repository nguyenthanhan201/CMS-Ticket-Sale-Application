import { Table, Tag } from "antd";
import "antd/dist/antd.css";
import React from "react";
import "../assets/css/TableTicket.css";

export default function TableTicket() {
  const columns: any = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      align: "center",
      fixed: "left",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Booking code",
      dataIndex: "bookingCode",
      key: "name",
      fixed: "left",
    },
    {
      title: "Số vé",
      dataIndex: "soVe",
      key: "address",
      fixed: "left",
    },
    {
      title: "Tình trạng sử dụng",
      key: "tags",
      fixed: "left",
      dataIndex: "tags",
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag === 'Đã sử dụng' ? "geekblue" : "green";
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
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "ngaySuDung",
      key: "address",
      align: "right",
      fixed: "left",
    },
    {
      title: "Ngày xuất vé",
      dataIndex: "ngayXuatVe",
      key: "address",
      align: "right",
      fixed: "left",
    },
    {
      title: "Cổng check - in",
      dataIndex: "coCheckIn",
      key: "address",
      fixed: "left",
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
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"], pageSize: 12 }}
      />
    </div>
  );
}
