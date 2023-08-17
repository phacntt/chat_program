import React, { FC } from "react";
import { Avatar, Card, CardProps, TabPaneProps } from "antd";
import { title } from "process";
import {
  MessageSender,
  ContentMessageSender,
  ContentFooterMessageSender,
} from "./style";

interface Props {
  content: string;
  timeSend: string;
}

const Sender: FC<Props> = ({ content, timeSend }) => {
  return (
    <React.Fragment>
      <MessageSender>
        {/* <ContentMessageSender>{content}</ContentMessageSender> */}
        <ContentMessageSender>
          {content}
          <ContentFooterMessageSender>{timeSend}</ContentFooterMessageSender>
        </ContentMessageSender>
      </MessageSender>
    </React.Fragment>
  );
};

export default Sender;
