import React from "react";
import "./main.css";
import kommunicateLogo from "../assets/logo.svg";
import InnerHome from "./InnerHome";

export default function Main() {
  return (
    <div>
      <div className="container">
        <div>
          <img src={kommunicateLogo} alt="Logo" />
        </div>
        <InnerHome/>
      </div>
    </div>
  );
}
