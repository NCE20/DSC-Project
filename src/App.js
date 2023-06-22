import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./style.css";

const App = () => {
  const [nodeContent, setnodeContent] = useState("");
  const [linkContent, setlinkContent] = useState("");

  useEffect(() => {
    // 파일을 불러오는 비동기 함수
    const readFile = async () => {
      try {
        const noderesponse = await fetch("/data/node.txt"); // 첫 번째 파일 경로
        const nodetext = await noderesponse.text();

        const nodelines = nodetext.split("#");
        const filterednode = nodelines.join("\n");

        setnodeContent(filterednode);

        const linkresponse = await fetch("/data/link.txt"); // 두 번째 파일 경로
        const linktext = await linkresponse.text();

        const linklines = linktext.split("#");
        const filteredlink = linklines.join("\n");

        setlinkContent(filteredlink);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    };

    readFile();
  }, []);

  return (
    <html>
      <head>
        <title>Test</title>
        <style></style>
      </head>

      <body>
        <header>
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
        </header>
        <br />

        <footer>
          <div>
            <div>
              <h1>노드 데이터</h1>
              <pre>{nodeContent}</pre>
            </div>
            <div>
              <h1>링크 데이터</h1>
              <pre>{linkContent}</pre>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default App;
