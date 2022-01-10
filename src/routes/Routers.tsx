import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../component/Header";
import SiderBar from "../component/SiderBar";
import ChangeTicket from "../pages/ChangeTicket";
import ControlTicket from "../pages/ControlTicket";
import Home from "../pages/Home";
import Setting from "../pages/Setting";

export default function Routers(): JSX.Element {
  return (
    <Router>
      <Header/>
      <SiderBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/changeticket" element={<ChangeTicket />} />
        <Route path="/controlticket" element={<ControlTicket />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </Router>
  );
}
