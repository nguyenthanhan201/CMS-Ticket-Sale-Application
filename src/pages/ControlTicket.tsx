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
            <Button icon="fas fa-filter" class="btn-control">Lọc vé</Button>
            <Button class="btn-control"><span>Xuất file (.csv)</span></Button>
          </div>
        </div>
        <TableTicket/>
      </div>
    </div>
  );
}
