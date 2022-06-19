import React, { useState } from "react";
import "./InputField.css";
import axios from "axios";

export default function InputField(props) {
  const { handleChange, placeholder, handleClick } = props;

  return (
    <div>
      <div className="InputDiv">
        <span>
          Enter your APP_ID to enable chat-based support in your Product
        </span>
        <div style={{ paddingTop: "18px" }}>
          <textarea
            onChange={handleChange}
            className="textField"
            placeholder={placeholder}
          ></textarea>
        </div>
        <div style={{ paddingTop: "18px" }}>
          <button onClick={handleClick} className="inpBtn">
            Save changes
          </button>
        </div>
        <div>{props.valid}</div>
        <div>{props.invalid}</div>
        <div>{props.invalidResponse}</div>
      </div>
    </div>
  );
}
