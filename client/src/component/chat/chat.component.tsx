import { Avatar, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Reciver from "component/message/reciver/reciver.component";
import Sender from "component/message/sender/sender.component";
import React, { FC } from "react";

interface Props {
  reciver: string;
}

const ChatContents: FC<Props> = ({ reciver }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header
        style={{
          padding: "0px 24px",
          background: colorBgContainer,
          position: "fixed",
          top: 0,
          width: "234vh",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          size={"large"}
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
        />
        <span
          style={{
            padding: "0 24px 0 24px",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          {reciver}
        </span>
      </Header>
      <Content style={{ marginTop: "40px", zIndex: 1 }}>
        <div
          style={{
            padding: 24,
            background: "rgb(178 178 178)",
          }}
        >
          {
            // indicates very long content
            // Array.from({ length: 100 }, (_, index) => (
            //   <React.Fragment key={index}>
            //     {index % 20 === 0 && index ? <><Reciver/><br/><Sender/></> : "..."}
            //     <br />
            //   </React.Fragment>
            // ))
            <React.Fragment>
              <>
                <Reciver />
                <br />
                <Sender />
              </>
              <>
                <Reciver />
                <br />
                <Sender />
              </>
              <>
                <Reciver />
                <br />
                <Sender />
              </>
              <>
                <Reciver />
                <br />
                <Sender />
              </>
              <br />
            </React.Fragment>
          }
        </div>
      </Content>
    </>
  );
};

export default ChatContents;
