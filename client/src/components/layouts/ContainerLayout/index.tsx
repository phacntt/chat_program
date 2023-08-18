import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import ChatContents from "components/organisms/Chat";
import EmptyLayout from "components/layouts/EmptyLayout";
import ListRooms from "components/organisms/ListRooms";
import { ColEmpty } from "./style";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { Room } from "types/room.type";
import {
  MessageChat,
  MessageReceive,
} from "types/messageAction.types";
import { TypeMessage } from "types/enum";
import { VariableLocal } from "constant";

interface Props {
  username: string;
}

const ContainerLayout: React.FC<Props> = ({ username }) => {
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("");

  const [statusSelectRoom, setStatusSelectRoom] = useState(false);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [messages, setMessages] = useState<MessageChat[]>([]);
  const { sendMessage, lastMessage } = useWebSocket("ws://localhost:4000");

  const handleMessage = (event: any) => {
    const data: MessageReceive = JSON.parse(event.data);
    const currentRoom = localStorage.getItem(VariableLocal.currentRoom);
    switch (data.action) {
      case TypeMessage.ListRooms:
        setRooms(data.data);
        break;
      case TypeMessage.CreateRoom:
        setRooms(data.data);
        break;
      case TypeMessage.JoinRoom:
        setRooms(data.data);
        break;
      case TypeMessage.SendMessage:
        if (data.data.roomId === currentRoom) {
          messages.push(data.data);
          setMessages(data.data.messages);
        }
        break;
      case TypeMessage.ListMessages:
        setMessages(data.data);
        break;
      case TypeMessage.LeaveRoom:
        console.log("ROOM NE: ", data.data.rooms)
        setRooms(data.data.rooms);
        break;
      default:
        break;
    }
  };

  // Listen for changes in the lastMessage to handle received messages
  useEffect(() => {
    if (lastMessage !== null) {
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
            messages={messages!}
            author={username!}
            roomId={roomId}
            sendMessage={sendMessage}
            setRoomName={setRoomName}
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
