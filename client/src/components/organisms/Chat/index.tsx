import { Col, Row, message } from "antd";
import { kMaxLength } from "buffer";
import ChatBody from "components/molecules/ChatBody";
import ChatFooter from "components/molecules/ChatFooter";
import ChatHeader from "components/molecules/ChatHeader";
import React, { FC, useEffect, useState } from "react";
import { TypeMessage } from "types/enum";
import { MessageAction, MessageChat, MessageListMessagesByRoomId } from "types/messageAction.types";

interface Props {
  roomName: string;
  messages: any[];
  author: string;
  roomId: string;
  sendMessage: (message: any) => void;
}

const ChatContents: FC<Props> = ({
  roomName,
  messages,
  author,
  roomId,
  sendMessage,
}) => {
  const [message, setMessage] = useState<MessageChat>();

  const messageFromInput = (value: MessageChat) => {
    setMessage(value);
  };

  useEffect(() => {
    const messageListMessageByRoomId: MessageListMessagesByRoomId = {
      roomId: roomId
    };

    const message: MessageAction = {
      action: TypeMessage.ListMessages,
      data: messageListMessageByRoomId,
    };

    sendMessage(JSON.stringify(message));
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <ChatHeader reciver={roomName} roomId={roomId}/>
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
