import Icon from "@ant-design/icons";
import { Table } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";
import "../assets/css/TableTicket.css";

export default function TableTicket({ dataSource, columns }: any) {
  // const columns: any = [
  //   {
  //     title: "STT",
  //     dataIndex: "key",
  //     key: "key",
  //     align: "center",
  //     fixed: "left",
  //     render: (text: any) => <a>{text}</a>,
  //     responsive: ["sm"],
  //   },
  //   {
  //     title: "Booking code",
  //     dataIndex: "bookingCode",
  //     key: "name",
  //     fixed: "left",
  //     responsive: ["sm"],
  //   },
  //   {
  //     title: "Số vé",
  //     dataIndex: "soVe",
  //     key: "address",
  //     fixed: "left",
  //     responsive: ["sm"],
  //   },
  //   {
  //     title: "Tình trạng sử dụng",
  //     key: "tags",
  //     fixed: "left",
  //     dataIndex: "tags",
  //     render: (tags: any) => (
  //       <>
  //         {tags.map((tag: any) => {
  //           let color = tag === "Đã sử dụng" ? "geekblue" : "green";
  //           if (tag === "Hết hạn") {
  //             color = "volcano";
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               <svg
  //                 width="8"
  //                 height="9"
  //                 viewBox="0 0 8 9"
  //                 fill="none"
  //                 xmlns="http://www.w3.org/2000/svg"
  //               >
  //                 <circle cx="4" cy="4.5" r="4" fill={color} />
  //               </svg>
  //               {tag}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),
  //     responsive: ["sm"],
  //   },
  //   {
  //     title: "Ngày sử dụng",
  //     dataIndex: "ngaySuDung",
  //     key: "address",
  //     align: "right",
  //     fixed: "left",
  //     responsive: ["sm"],
  //   },
  //   {
  //     title: "Ngày xuất vé",
  //     dataIndex: "ngayXuatVe",
  //     key: "address",
  //     align: "right",
  //     fixed: "left",
  //     responsive: ["sm"],
  //   },
  //   {
  //     title: "Cổng check - in",
  //     dataIndex: "coCheckIn",
  //     key: "address",
  //     fixed: "left",
  //     responsive: ["sm"],
  //   },
  // ];

  // const data = [
  //   {
  //     key: "1",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Hết hạn"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "2",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Đã sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "3",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Chưa sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "4",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Chưa sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "5",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Chưa sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "6",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Chưa sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "7",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Chưa sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "8",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Chưa sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "9",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Chưa sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "10",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Chưa sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "11",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Chưa sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "12",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Chưa sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  //   {
  //     key: "13",
  //     bookingCode: "ALTFGHJU",
  //     soVe: "123456789034",
  //     tags: ["Chưa sử dụng"],
  //     ngaySuDung: "12/12/2020",
  //     ngayXuatVe: "12/12/2020",
  //     coCheckIn: "Cổng 1",
  //   },
  // ];

  function itemRender(current: number, type: string, originalElement: any) {
    if (type === "prev") {
      return (
        <button>
          <svg
            width="8"
            height="10"
            viewBox="0 0 8 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.3642 10C7.24552 10 7.12854 9.96609 7.02511 9.90002L0.297552 5.5521C0.112748 5.43212 -2.28363e-07 5.22433 -2.18558e-07 5.00002C-2.08753e-07 4.77572 0.112748 4.56793 0.297552 4.44795L7.02511 0.100029C7.22094 -0.0260359 7.46848 -0.0338606 7.67108 0.0817709C7.87454 0.196533 8 0.414755 8 0.652104L8 9.34794C8 9.58529 7.87454 9.80351 7.67108 9.91828C7.57529 9.97305 7.46932 10 7.3642 10Z"
              fill="#A5A8B1"
            />
          </svg>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <svg
            width="8"
            height="10"
            viewBox="0 0 8 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.635796 10C0.754477 10 0.871464 9.96609 0.974887 9.90002L7.70245 5.5521C7.88725 5.43212 8 5.22433 8 5.00002C8 4.77571 7.88725 4.56793 7.70245 4.44795L0.974886 0.100029C0.779061 -0.0260359 0.531525 -0.0338606 0.328918 0.0817709C0.125464 0.196533 1.81295e-08 0.414755 2.85044e-08 0.652104L4.08612e-07 9.34794C4.18986e-07 9.58529 0.125464 9.80351 0.328919 9.91828C0.424712 9.97305 0.530678 10 0.635796 10"
              fill="#A5A8B1"
            />
          </svg>
        </button>
      );
    }
    return originalElement;
  }
  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 12,
          itemRender: itemRender,
        }}
      >
      </Table>
    </div>
  );
}
