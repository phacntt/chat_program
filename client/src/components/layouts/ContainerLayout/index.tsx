import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import ChatContents from "components/organisms/Chat";
import EmptyLayout from "components/layouts/EmptyLayout";
import ListRooms from "components/organisms/ListRooms";
import { ColEmpty } from "./style";

const ContainerLayout: React.FC = () => {
  const [roomName, setRoomName] = useState("");
  const [statusSelectRoom, setStatusSelectRoom] = useState(false);

  useEffect(() => {
    setStatusSelectRoom(!roomName ? false : true);
  }, [roomName]);

  const setKeyRoom = (value: any) => {
    console.log(value)
    setRoomName(value);
  };

  return (
    <Row>
      <Col span={4}>
        <ListRooms setRoom={setKeyRoom} />
      </Col>

      {statusSelectRoom ? (
        <Col span={20}>
          <ChatContents reciver={roomName}/>
        </Col>
      ) : (
        <ColEmpty span={20}>
          <EmptyLayout />
        </ColEmpty>
      )}
    </Row>
  );
};

export default ContainerLayout;
