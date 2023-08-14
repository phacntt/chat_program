import React, { useEffect, useState } from "react";
import { Button, Empty, Input, Layout } from "antd";
import Search from "antd/es/input/Search";
import ChatContents from "component/chat/chat.component";
import ListRooms from "component/lists/lists.component";

const App: React.FC = () => {
  const [room, setRoom] = useState("");
  const [messageSend, setMessageSend] = useState("");
  const [statusSelectRoom, setStatusSelectRoom] = useState(false);

  useEffect(() => {
    setStatusSelectRoom(!room ? false : true);
  }, [room]);

  const setKeyRoom = (value: any) => {
    setRoom(value.key);
  };

  const sendMessage = (e: any) => {
    if (e.key === "Enter") {
      console.log(messageSend);
      setMessageSend("");
    }
  };

  const sendMessageClickButton = (e: any) => {
    console.log(messageSend);
    setMessageSend("");
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setMessageSend(e.target.value);
  };

  return (
    <Layout hasSider>
      <ListRooms setRoom={setKeyRoom} />

      {statusSelectRoom ? (
        <>
          <Layout
            className="site-layout"
            style={{ overflow: "auto", height: "90vh", width: "100vh" }}
          >
            <ChatContents reciver={room} />
            <div
              style={{
                padding: "20px 0 20px 0",
                position: "fixed",
                right: 0,
                bottom: 0,
                width: "89%",
                display: "flex",
              }}
            >
              <Input
                size="large"
                placeholder="input search text"
                allowClear
                onChange={handleChange}
                type="text"
                onKeyDown={sendMessage}
                value={messageSend}
              />
              <Button
                size="large"
                onClick={sendMessageClickButton}
                type="primary"
              >
                Submit
              </Button>
            </div>
          </Layout>
        </>
      ) : (
        <Layout
          className="site-layout"
          style={{
            overflow: "auto",
            height: "90vh",
            width: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Empty />
        </Layout>
      )}
    </Layout>
  );
};

export default App;
