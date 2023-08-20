import React, { FC, useState } from 'react';
import { ButtonLeaveRoomChat, TitleButtonLeaveRoomChat } from './style';
import { ExclamationCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { MessageAction, MessageLeaveRoom } from 'types/messageAction.types';
import { TypeMessage } from 'types/enum';

interface Props {
  sendMessage: (message: any) => void;
  setRoomName: (roomName: string) => void;
  roomId: string;
  username: string;
}

export const ButtonLeaveChat: FC<Props> = ({ sendMessage, setRoomName, roomId, username }) => {
  const [modal, contextHolder] = Modal.useModal();

  const handleClick = () => {
    setRoomName('');
    const messageListMessageByRoomId: MessageLeaveRoom = {
      roomId: roomId,
      author: username,
    };

    const message: MessageAction = {
      action: TypeMessage.LeaveRoom,
      data: messageListMessageByRoomId,
    };

    sendMessage(JSON.stringify(message));
  };

  const confirm = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure leave this room!',
      okText: 'Sure',
      cancelText: 'Cancel',
      onOk: handleClick,
    });
  };

  return (
    <React.Fragment>
      <ButtonLeaveRoomChat onClick={confirm}>
        <TitleButtonLeaveRoomChat className="title-button-leave-chat">Leave</TitleButtonLeaveRoomChat>
        <LogoutOutlined />
      </ButtonLeaveRoomChat>
      {contextHolder}
    </React.Fragment>
  );
};
