import { Content } from "antd/es/layout/layout";
import React from "react";
import Reciver from "../Reciver";
import Sender from "../Sender";

const ChatBody = () => {
  return (
    <Content
      style={{
        overflow: "auto",
        background: "rgb(178 178 178)",
        height: "80vh",
        flex: 1,
      }}
    >
      <div
        style={{
          padding: 24,
        }}
      >
        {
          <React.Fragment>
            <div>
              <Reciver />
              <br />
              <Sender />
            </div>
            <div>
              <Reciver />
              <br />
              <Sender />
              <Sender />
            </div>
            <br />
          </React.Fragment>
        }
      </div>
    </Content>
  );
};

export default ChatBody;