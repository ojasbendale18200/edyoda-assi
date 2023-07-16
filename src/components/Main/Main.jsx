import React from "react";
import "./Main.css";
import Info from "../infomation/Info";
import Plans from "../Plans/Plans";

function Main() {
  return (
    <div className="main__container">
      <Info />
      <Plans />
    </div>
  );
}

export default Main;
