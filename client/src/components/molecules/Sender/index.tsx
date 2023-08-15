import React from "react";
import { Avatar, Card, CardProps, TabPaneProps } from "antd";
import { title } from "process";
import { MessageSender, ContentMessageSender } from "./style";

const Sender = () => {
  return (
    <>
      <MessageSender>
        <ContentMessageSender>Lorem ipsum dolor sit</ContentMessageSender>
      </MessageSender>
      <MessageSender>
        <ContentMessageSender>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
          exercitationem saepe, nulla fugiat nobis aliquid nesciunt, a
          laudantium repudiandae in id velit sint optio qui. Qui delectus
          repellat aperiam amet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
          exercitationem saepe, nulla fugiat nobis aliquid nesciunt, a
          laudantium repudiandae in id velit sint optio qui. Qui delectus
          repellat aperiam amet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
          exercitationem saepe, nulla fugiat nobis aliquid nesciunt, a
          laudantium repudiandae in id velit sint optio qui. Qui delectus
          repellat aperiam amet.
        </ContentMessageSender>
      </MessageSender>
    </>
  );
};

export default Sender;
