import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import ChatContents from "components/organisms/Chat";
import EmptyLayout from "components/layouts/EmptyLayout";
import ListRooms from "components/organisms/ListRooms";
import { ColEmpty } from "./style";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { Room } from "types/room.type";
import { MessageChat, MessageReceive } from "types/messageAction.types";
import { TypeMessage } from "types/enum";

interface Props {
  username: string;
}

const ContainerLayout: React.FC<Props> = ({ username }) => {
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("");

  const [statusSelectRoom, setStatusSelectRoom] = useState(false);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [messages, setMessages] = useState<MessageChat[]>([]);
  const { sendMessage, lastMessage } = useWebSocket("ws://localhost:4000"); // Replace with your server URL

  const handleMessage = (event: any) => {
    const data: MessageReceive = JSON.parse(event.data);
    console.log("CO VO DAY KHONG");

    switch (data.action) {
      case TypeMessage.ListRooms:
        console.log(data.data);
        setRooms(data.data);
        break;
      case TypeMessage.CreateRoom:
        setRooms(data.data);
        break;
      case TypeMessage.JoinRoom:
        console.log("MESSAGE: ", data.data)
        setRooms(data.data);
        break;
      case TypeMessage.SendMessage:
        console.log("ACTION");
        messages.push(data.data)
        setMessages(data.data);
        break;
      case TypeMessage.ListMessages:
        console.log("RESET")
        setMessages(data.data);
        break;
      default:
        break;
    }

    console.log(data);
  };

  // Listen for changes in the lastMessage to handle received messages
  useEffect(() => {
    if (lastMessage !== null) {
      console.log("LAM ON VO DAY CAI")
      handleMessage(lastMessage);
    }
  }, [lastMessage]);

  useEffect(() => {
    setStatusSelectRoom(!roomName ? false : true);
  }, [roomName]);

  const roomLabel = (value: any) => {
    setRoomName(value);
  };

  const idRoom = (value: any) => {
    setRoomId(value);
  };

  return (
    <Row>
      <Col span={4}>
        <ListRooms
          setRoom={roomLabel}
          setRoomId={idRoom}
          sendMessage={sendMessage}
          username={username!}
          rooms={rooms}
          roomId={roomId}
        />
      </Col>

      {statusSelectRoom ? (
        <Col span={20}>
          <ChatContents
            roomName={roomName}
            messages={messages}
            author={username!}
            roomId={roomId}
            sendMessage={sendMessage}
          />
        </Col>
      ) : (
        <ColEmpty span={20}>
          <EmptyLayout sendMessage={sendMessage} username={username!} />
        </ColEmpty>
      )}
    </Row>
  );
};

export default ContainerLayout;
