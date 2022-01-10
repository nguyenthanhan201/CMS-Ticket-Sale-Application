import React from "react";
import "../assets/css/ControlTicket.css";
import Button from "../component/Button";
import TableTicket from "../component/TableTicket";

export default function ControlTicket() {
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              Lọc vé
            </Button>
            <Button class="btn-control">
              <span>Xuất file (.csv)</span>
            </Button>
          </div>
        </div>
        <TableTicket />
      </div>
    </div>
  );
}
