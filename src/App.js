import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./style.css";
import { ReadData } from "./ReadData";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const ClickReadData = () => {
    navigate.push("/ReadData");
  };

  return (
    <html>
      <head>
        <title>Test</title>
        <style></style>
      </head>

      <body>
        <div
          class="container"
          style={{
            border: "3px solid black",
            padding: "10px",
            margin: "20px",
            width: "300px",
            height: "750px",
            float: "left",
            width: "20%",
          }}
        >
          <select
            name="node_id"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select"
          >
            <option value="node_id" selected>
              node_id
            </option>
          </select>

          <select
            name="node_guid"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select2"
          >
            <option value="node_guid" selected>
              node_guid
            </option>
          </select>

          <select
            name="node_category_name"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select3"
          >
            <option value="node_category_name" selected>
              node_category_name
            </option>
          </select>

          <select
            name="node_family_name"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select4"
          >
            <option value="node_family_name" selected>
              node_family_name
            </option>
          </select>

          <select
            name="link_id"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select-link"
          >
            <option value="link_id" selected>
              link_id
            </option>
          </select>

          <select
            name="link_guid"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select-link2"
          >
            <option value="link_guid" selected>
              link_guid
            </option>
          </select>

          <select
            name="start_node_id"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select-link3"
          >
            <option value="start_node_id" selected>
              start_node_id
            </option>
          </select>

          <select
            name="end_node_id"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select-link4"
          >
            <option value="end_node_id" selected>
              end_node_id
            </option>
          </select>

          <select
            name="start_node_guid"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select-link5"
          >
            <option value="start_node_guid" selected>
              start_node_guid
            </option>
          </select>

          <select
            name="end_node_guid"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select-link6"
          >
            <option value="end_node_guid" selected>
              end_node_guid
            </option>
          </select>

          <select
            name="link_category_name"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select-link7"
          >
            <option value="link_category_name" selected>
              link_category_name
            </option>
          </select>

          <select
            name="link_family_name"
            style={{
              width: "200px",
              height: "50px",
            }}
            class="custom-select-link8"
          >
            <option value="link_family_name" selected>
              link_family_name
            </option>
          </select>
        </div>

        <div
          style={{
            border: "3px solid black",
            padding: "10px",
            margin: "20px",
            width: "300px",
            height: "750px",
            float: "left",
            width: "1000px",
          }}
        ></div>
      </body>

      <br />

      <button
        style={{
          border: "3px solid black",
          padding: "5px",
          margin: "10px",
          width: "75px",
          height: "180px",
          float: "center",
          width: "250px",
        }}
        onClick={ClickReadData}
      >
        Read Data
      </button>
    </html>
  );
};

export default App;
