import React from "react";
import "./innerHome.css";
import InputField from "./InputField";
import appPage from "../assets/settingImg.svg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function InnerHome(props) {
  const [input, setInput] = useState("");
  const [api, setApi] = useState({});
  const fetchData = (input) =>
    axios
      .get("https://my-json-server.typicode.com/Prochnost55/mockJSONApi/appId")
      .then((response) => {
        setApi(response.data[input - 1]?.success);
        console.log(response.data[4 - 1]?.success, "test");
      });
  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <div className="main">
      <div className="header">
        <span>Adding live chat on your wordpress is as easy as it gets.</span>
      </div>
      <div className="description">
        <span>
          Leverage the chatbot & live chat to interact with your website
          visitors and customers 24/7 by following these steps:
        </span>
      </div>
      <div className="content">
        <div style={{ marginRight: "70px" }}>
          <ul>
            <li className="contentList">
              <a href="https://dashboard.kommunicate.io/login">Login</a> to your
              <span> kommunicate app and navigate to the </span>
              <a href="https://dashboard.kommunicate.io/settings/install">
                setting -&gt; install
              </a>{" "}
              <span>section and copy the APP_ID to update below</span>
            </li>
            <InputField
              value={input}
              placeholder="APP_ID"
              handleChange={(e) => {
                setInput(e.target.value);
              }}
              handleClick={() => {
                fetchData(input);
              }}
              valid={{
                ...(api === "true" ? (
                  <div className="validResponse">
                    <span>Changes saved successfully! </span>
                  </div>
                ) : (
                  <></>
                )),
              }}
              invalid={{
                ...(api === "false" ? (
                  <div className="invalidResponse">
                    <span>Invalid App ID</span>
                  </div>
                ) : (
                  <></>
                )),
              }}
              invalidResponse={{
                ...(api === "undefined" ? (
                  <div className="invalidResponse">
                    <span>Invalid App ID</span>
                  </div>
                ) : (
                  <></>
                )),
              }}
            />

            <li className="contentList">
              Voila! Live chat is now active on your website
            </li>
            <li className="contentList">
              open the website, refresh it and check out the chat plugin. You
              will find it in the bottom-right corner.
            </li>
            <li className="contentList">
              You might need to clear cache if your using any cache plugin to
              see your updates.
            </li>
          </ul>
        </div>
        <div>
          <img className="AppImg" alt="displayImg" src={appPage} />
        </div>
      </div>
    </div>
  );
}
