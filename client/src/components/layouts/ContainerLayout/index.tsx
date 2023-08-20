import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import ChatContents from 'components/organisms/Chat';
import EmptyLayout from 'components/layouts/EmptyLayout';
import ListRooms from 'components/organisms/ListRooms';
import { ColEmpty } from './style';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';
import { Room } from 'types/room.type';
import { MessageChat, MessageReceive } from 'types/messageAction.types';
import { TypeMessage } from 'types/enum';
import { VariableLocal } from 'constant';

interface Props {
  username: string;
}

const ContainerLayout: React.FC<Props> = ({ username }) => {
  console.log(process.env.REACT_APP_WEBSOCKET_SERVER);
  const [roomName, setRoomName] = useState('');
  const [roomId, setRoomId] = useState('');

  const [statusSelectRoom, setStatusSelectRoom] = useState(false);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [messages, setMessages] = useState<MessageChat[]>([]);

  const { sendMessage, lastMessage } = useWebSocket(process.env.REACT_APP_WEBSOCKET_SERVER as string);

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
        for (let room of data.data as Room[]) {
          if (room.roomId === roomId) {
            setRoomName(room.roomName);
          }
        }
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
        setRooms(data.data.rooms);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (lastMessage !== null) {
      handleMessage(lastMessage);
    }
  }, [lastMessage]);

  useEffect(() => {
    setStatusSelectRoom(!roomName ? false : true);
  }, [roomName, rooms]);

  const roomLabel = (value: string) => {
    setRoomName(value);
  };

  const idRoom = (value: string) => {
    setRoomId(value);
  };

  return (
    <Row>
      <Col span={4}>
        <ListRooms setRoom={roomLabel} setRoomId={idRoom} sendMessage={sendMessage} username={username!} rooms={rooms} roomId={roomId} />
      </Col>
      {statusSelectRoom ? (
        <Col span={20} style={{ borderLeft: '1px solid' }}>
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
          <EmptyLayout sendMessage={sendMessage} username={username!} setRoomId={setRoomId} roomId={roomId} />
        </ColEmpty>
      )}
    </Row>
  );
};

export default ContainerLayout;
