import { Col, Row } from 'antd';
import { ButtonLeaveChat } from 'components/atoms/ButtonLeaveChat';
import ChatBody from 'components/molecules/ChatBody';
import ChatHeader from 'components/molecules/ChatHeader';
import React, { FC, useEffect, useRef, useState } from 'react';
import { MessageChat } from 'types/messageAction.types';
import { ButtonLeaveChatRoom } from './style';
import UploadFileArea from 'components/molecules/UploadFileArea';
import ChatFooter from 'components/molecules/ChatFooter';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';

interface Props {
  roomName: string;
  messages: MessageChat[];
  author: string;
  roomId: string;
  sendMessage: (message: any) => void;
  setRoomName: (roomName: string) => void;
}

const ChatContents: FC<Props> = ({ roomName, messages, author, roomId, sendMessage, setRoomName }) => {
  const [messageChat, setMessageChat] = useState<MessageChat>();
  const [isChatComponent, setIsChatComponent] = useState<boolean>(true);
  const [files, setFiles] = useState<File[]>([]);

  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  const [resetKey, setResetKey] = useState<number>(0);

  const messageFromInput = (value: MessageChat) => {
    setMessageChat(value);
  };

  const uploadFiles = async (files: File[]) => {
    const uploadPromises = files.map(async file => {
      const formData = new FormData();
      formData.append('files', file);

      const response = await fetch(`${process.env.REACT_APP_SERVER}/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      return data;
    });

    const results = await Promise.all(uploadPromises);
    return results;
  };

  const clearFiles = () => {
    setFileList([]);
    setResetKey(prevKey => prevKey + 1);
  };

  const handleFileChange = (info: UploadChangeParam<UploadFile<any>>) => {
    setFileList(info.fileList);
    setFiles(info.fileList.map((file: any) => file.originFileObj));
  };

  useEffect(() => {
    setIsChatComponent(roomId ? true : false);
  }, [roomId]);

  return (
    <React.Fragment>
      <Row>
        <Col span={20}>
          <ChatHeader reciver={roomName} roomId={roomId} />
        </Col>
        <Col span={4}>
          <ButtonLeaveChatRoom>
            <ButtonLeaveChat sendMessage={sendMessage} setRoomName={setRoomName} roomId={roomId} username={author} />
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
          <UploadFileArea handleFileChange={handleFileChange} resetKey={resetKey} fileList={fileList} />
        </Col>
        <Col>
          {files.length !== 0 ? (
            <ChatFooter
              contentMessageSend={messageFromInput}
              sendMessage={sendMessage}
              author={author}
              roomId={roomId}
              files={files}
              uploadFiles={uploadFiles}
              clearFiles={clearFiles}
            />
          ) : (
            <ChatFooter contentMessageSend={messageFromInput} sendMessage={sendMessage} author={author} roomId={roomId} clearFiles={clearFiles} />
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ChatContents;
