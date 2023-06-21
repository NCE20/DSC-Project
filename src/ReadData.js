import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ReadData() {
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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate.push("/new-page");
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>App.js 돌아가기</button>

        <h1>노드 데이터</h1>
        <pre>{nodeContent}</pre>
      </div>
      <div>
        <h1>링크 데이터</h1>
        <pre>{linkContent}</pre>
      </div>
    </div>
  );
}

export default ReadData;
