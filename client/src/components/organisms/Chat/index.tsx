import { Col, Row } from "antd";
import { ButtonLeaveChat } from "components/atoms/ButtonLeaveChat";
import ChatBody from "components/molecules/ChatBody";
import ChatHeader from "components/molecules/ChatHeader";
import React, { FC, useEffect, useState } from "react";
import { MessageChat } from "types/messageAction.types";
import { ButtonLeaveChatRoom } from "./style";
import UploadFileArea from "components/molecules/UploadFileArea";
import ChatFooter from "components/molecules/ChatFooter";

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
  const [messageChat, setMessageChat] = useState<MessageChat>();
  const [files, setFiles] = useState<File[]>([]);

  const messageFromInput = (value: MessageChat) => {
    setMessageChat(value);
  };

  const uploadFiles = async (files: File[]) => {
    const uploadPromises = files.map(async (file) => {
      const formData = new FormData();
      formData.append("files", file);

      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      return data;
    });

    const results = await Promise.all(uploadPromises);
    return results;
  }

  const handleFileChange = (info: any) => {
    setFiles(info.fileList.map((file: any) => file.originFileObj));
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
        <Col span={24}>
          <UploadFileArea handleFileChange={handleFileChange} files={files} setFiles={setFiles}/>
        </Col>
        <Col>
          {files.length != 0 ? (
            <ChatFooter
              contentMessageSend={messageFromInput}
              sendMessage={sendMessage}
              author={author}
              roomId={roomId}
              files={files}
              uploadFiles={uploadFiles}
            />
          ) : (
            <ChatFooter
              contentMessageSend={messageFromInput}
              sendMessage={sendMessage}
              author={author}
              roomId={roomId}
            />
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ChatContents;
