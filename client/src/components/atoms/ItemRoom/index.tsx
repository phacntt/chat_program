import React, { FC, useEffect, useState } from 'react';
import { MenuListRoom } from './style';
import { MessageAction, MessageListMessagesByRoomId } from 'types/messageAction.types';
import { TypeMessage } from 'types/enum';
import { VariableLocal } from 'constant';

interface Props {
  items: any[];
  roomId: string;
  setRoom: (room: string) => void;
  setRoomId: (roomId: string) => void;
  sendMessage: (message: any) => void;
}

const ItemRooms: FC<Props> = ({ items, roomId, setRoom, setRoomId, sendMessage }) => {
  const [keyItem, setKeyItem] = useState<string[]>([]);

  const sendMessageRoomIdToServer = (roomId: string) => {
    const messageListMessageByRoomId: MessageListMessagesByRoomId = {
      roomId: roomId,
    };

    const message: MessageAction = {
      action: TypeMessage.ListMessages,
      data: messageListMessageByRoomId,
    };

    sendMessage(JSON.stringify(message));
  };

  useEffect(() => {
    setKeyItem([roomId]);
  }, [roomId]);

  return (
    <MenuListRoom
      theme="light"
      mode="inline"
      onClick={(key: any) => {
        for (let i = 0; i < items.length; i++) {
          if (key.key === items[i].key) {
            setRoom(items[i].label);
            setRoomId(key.key);
            sendMessageRoomIdToServer(key.key);
            localStorage.setItem(VariableLocal.currentRoom, key.key);
          }
        }
      }}
      items={items}
      defaultSelectedKeys={[roomId]}
    />
  );
};

export default ItemRooms;
