import React, { FC } from "react";
import { Avatar, Card, CardProps, TabPaneProps } from "antd";
import { title } from "process";
import { MessageSender, ContentMessageSender } from "./style";

interface Props {
  content: string;
}

const Sender: FC<Props> = ({ content }) => {
  return (
    <React.Fragment>
      <MessageSender>
        <ContentMessageSender>{content}</ContentMessageSender>
      </MessageSender>
    </React.Fragment>
  );
};

export default Sender;
