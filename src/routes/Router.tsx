import React from "react";
import { Route, Routes } from "react-router-dom";
import ChangeTicket from "../pages/ChangeTicket";
import ControlTicket from "../pages/ControlTicket";
import Home from "../pages/Home";
import Setting from "../pages/Setting";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={Home}></Route>
      <Route path="/changeticket" element={ChangeTicket}></Route>
      <Route path="/controlticket" element={ControlTicket}></Route>
      <Route path="/setting" element={Setting}></Route>
    </Routes>
  );
}
