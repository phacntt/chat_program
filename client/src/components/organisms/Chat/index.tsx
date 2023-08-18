import { Col, Row } from "antd";
import { ButtonLeaveChat } from "components/atoms/ButtonLeaveChat";
import ChatBody from "components/molecules/ChatBody";
import ChatFooter from "components/molecules/ChatFooter";
import ChatHeader from "components/molecules/ChatHeader";
import React, { FC, useEffect, useState } from "react";
import { TypeMessage } from "types/enum";
import {
  MessageAction,
  MessageChat,
  MessageChatByRoom,
  MessageListMessagesByRoomId,
} from "types/messageAction.types";
import { ButtonLeaveChatRoom } from "./style";

interface Props {
  roomName: string;
  messages: MessageChat[];
  author: string;
  roomId: string;
  sendMessage: (message: any) => void;
  setRoomName: (roomName: string) => void;
}

const ChatContents: FC<Props> = ({
  roomName,
  messages,
  author,
  roomId,
  sendMessage,
  setRoomName,
}) => {
  const [message, setMessage] = useState<MessageChat>();

  const messageFromInput = (value: MessageChat) => {
    setMessage(value);
  };

  return (
    <React.Fragment>
      <Row>
        <Col span={20}>
          <ChatHeader reciver={roomName} roomId={roomId} />
        </Col>
        <Col span={4}>
          <ButtonLeaveChatRoom>
            <ButtonLeaveChat
              sendMessage={sendMessage}
              setRoomName={setRoomName}
              roomId={roomId}
              username={author}
            />
          </ButtonLeaveChatRoom>
        </Col>
      </Row>
      <Row>
        <Col>
          <ChatBody messages={messages} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ChatFooter
            contentMessageSend={messageFromInput}
            sendMessage={sendMessage}
            author={author}
            roomId={roomId}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ChatContents;
