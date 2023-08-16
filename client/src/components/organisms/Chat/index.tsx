import { Col, Row, message } from "antd";
import { kMaxLength } from "buffer";
import ChatBody from "components/molecules/ChatBody";
import ChatFooter from "components/molecules/ChatFooter";
import ChatHeader from "components/molecules/ChatHeader";
import React, { FC, useEffect, useState } from "react";
import { Message } from "types/message.types";

interface Props {
  reciver: string;
}

const ChatContents: FC<Props> = ({ reciver }) => {

  const [messages, setMessages] = useState<Message[]>([]);

  const messageFromInput = (value: Message) => {
    messages.push(value)
    setMessages([...messages])
  }

  useEffect(() => {
    setMessages([])
  }, [reciver])

  return (
    <React.Fragment>
      <Row>
        <Col>
          <ChatHeader reciver={reciver} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ChatBody messages={messages}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <ChatFooter contentMessageSend={messageFromInput}/>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ChatContents;
