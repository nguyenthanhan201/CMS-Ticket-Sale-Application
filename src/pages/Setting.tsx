import { Table, Tag } from "antd";
import React from "react";
import "../assets/css/Setting.css";
import Button from "../component/Button";

export default function Setting() {
  const columns: any = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      align: "center",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Mã gói",
      dataIndex: "maGoi",
      key: "maGoi",
    },
    {
      title: "Tên gói vé",
      dataIndex: "tenGoi",
      key: "tenGoi",
    },
    {
      title: "Ngày áp dụng",
      dataIndex: ["ngaySuDung"],
      key: ["ngaySuDung"],
      align: "right",
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "ngaySuDung",
      key: "ngaySuDung",
      align: "right",
    },
    {
      title: "Giá vé (VND/Vé)",
      dataIndex: "giaVe",
      key: "giaVe",
      align: "right",
    },
    {
      title: "Giá Combo (VND/Combo)",
      dataIndex: "giaCombo",
      key: "giaCombo",
    },
    {
      title: "Tình Trạng",
      key: "tags",
      dataIndex: "tags",
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag === "Đã sử dụng" ? "geekblue" : "green";
            if (tag === "Tắt") {
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
    Table.EXPAND_COLUMN,
    {
      title: "",
      dataIndex: "capNhap",
      key: "capNhap",
    },
  ];

  const data = [
    {
      key: "1",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Tắt"],
      ngaySuDung: ["12/12/2020", "08:00:00"],
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      maGoi: "ALT20210201",
      giaVe: "100.000 VND",
      giaCombo: "200.000 VND",
      tenGoi: "Gói gia đình",
      capNhap: "Cập nhập",
    },
    {
      key: "2",
      bookingCode: "ALTFGHJU",
      soVe: "123456789034",
      tags: ["Đang hoạt động"],
      ngaySuDung: ["12/12/2020", "08:00:00"],
      ngayXuatVe: "12/12/2020",
      coCheckIn: "Cổng 1",
      maGoi: "ALT20210201",
      giaVe: "100.000 VND",
      giaCombo: "200.000 VND",
      tenGoi: "Gói gia đình",
      capNhap: "Cập nhập",
    },
  ];

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
    <div className="setting">
      <div className="setting-content">
        <h1>Danh sách gói vé</h1>
        <div className="top-control">
          <div className="top-control-left">
            <form action="">
              <input type="text" placeholder="Tìm kiếm bằng vé số" />
              <i className="fas fa-search"></i>
            </form>
          </div>
          <div className="top-control-right">
            <Button class="btn-control">
              <span>Xuất file (.csv)</span>
            </Button>
            <Button class="btn-add-package">
              <span>Thêm gói vé</span>
            </Button>
          </div>
        </div>
        <Table
          dataSource={data}
          columns={columns}
          expandable={{
            expandedRowRender: (record: any) => (
              <p style={{ margin: 0 }}>{record.bookingCode}</p>
            ),
            expandIcon: ({ expanded, onExpand, record }: any) =>
              expanded ? (
                // <MinusCircleTwoTone onClick={e => onExpand(record, e)} />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                    stroke="#FF993C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                    stroke="#FF993C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                // <PlusCircleTwoTone onClick={e => onExpand(record, e)} />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                    stroke="#FF993C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                    stroke="#FF993C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
          }}
          pagination={{
            position: ["bottomCenter"],
            pageSize: 12,
            itemRender: itemRender,
          }}
        />
      </div>
    </div>
  );
}
