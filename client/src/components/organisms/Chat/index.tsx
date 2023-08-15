import { Col, Row } from "antd";
import ChatBody from "components/molecules/ChatBody";
import ChatFooter from "components/molecules/ChatFooter";
import ChatHeader from "components/molecules/ChatHeader";
import React, { FC } from "react";

interface Props {
  reciver: string;
}

const ChatContents: FC<Props> = ({ reciver }) => {

  return (
    <>
      <Row>
        <Col>
          <ChatHeader reciver={reciver} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ChatBody/>
        </Col>
      </Row>
      <Row>
        <Col>
          <ChatFooter />
        </Col>
      </Row>
    </>
  );
};

export default ChatContents;
