import ButtonSend from 'components/atoms/ButtonSend';
import InputChat from 'components/atoms/InputChat';
import React, { FC } from 'react';
import { useState } from 'react';
import { ContainerSendMessage } from './style';
import { MessageAction, MessageChat } from 'types/messageAction.types';
import { TypeMessage, TypeOfMessage } from 'types/enum';

interface Props {
  sendMessage: (message: any) => void;
  author: string;
  roomId: string;
  files?: File[];
  uploadFiles?: (files: File[]) => Promise<any[]>;
  clearFiles: () => void;
}

const ChatFooter: FC<Props> = ({ sendMessage, author, roomId, files, uploadFiles, clearFiles }) => {
  const [messageSend, setMessageSend] = useState<MessageChat>();
  const [contentInput, setContentInput] = useState('');

  const handleSendMessageToServer = async (type: TypeOfMessage) => {
    if (type === TypeOfMessage.UploadFile && files) {
      const uploadResults = await uploadFiles!(files);

      uploadResults.forEach(result => {
        if (result.status) {
          result.data.forEach((file: any) => {
            const messageSend: MessageChat = {
              author: author,
              content: file.path,
              roomId: roomId,
              typeOfMessage: TypeOfMessage.UploadFile,
              extendsion: file.mimetype.slice(0, file.mimetype.indexOf('/')),
              fileSize: file.size,
            };

            const message: MessageAction = {
              action: TypeMessage.SendMessage,
              data: messageSend,
            };

            sendMessage(JSON.stringify(message));
          });
        }
      });
    } else {
      const messageSend: MessageChat = {
        author: author,
        content: contentInput,
        roomId: roomId,
        typeOfMessage: TypeOfMessage.Text,
      };

      const message: MessageAction = {
        action: TypeMessage.SendMessage,
        data: messageSend,
      };

      sendMessage(JSON.stringify(message));
    }
  };

  const handleSendMessage = async (contentInput: string, files: File[]) => {
    if (contentInput === '') {
      if (files && files.length !== 0) {
        await handleSendMessageToServer(TypeOfMessage.UploadFile);
      }
    } else {
      await handleSendMessageToServer(TypeOfMessage.Text);
      setContentInput('');
    }
  };

  const sendMessages = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && messageSend?.content !== '') {
      await handleSendMessage(contentInput, files!);
    }
    await clearFiles();
  };

  const sendMessageClickButton = async () => {
    if (messageSend?.content !== '') {
      await handleSendMessage(contentInput, files!);
    }
    await clearFiles();
  };

  const handleChange = (e: any) => {
    setMessageSend(e.target.value);
    setContentInput(e.target.value);
  };

  return (
    <ContainerSendMessage>
      <InputChat handleChange={handleChange} sendMessage={sendMessages} messageSend={contentInput} />
      <ButtonSend sendMessageClickButton={sendMessageClickButton} />
    </ContainerSendMessage>
  );
};

export default ChatFooter;
