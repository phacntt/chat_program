import React, { FC } from 'react';
import { MessageSender, ContentMessageSender, ContentFooterMessageSender } from './style';
import { MessageChat } from 'types/messageAction.types';
import { TypeOfMessage } from 'types/enum';
import FileImage from 'components/atoms/FileImage';
import FileAnother from 'components/atoms/FileAnother';

interface Props {
  message: MessageChat;
}

const Sender: FC<Props> = ({ message }) => {
  return (
    <React.Fragment>
      <MessageSender>
        <ContentMessageSender>
          {message.typeOfMessage === TypeOfMessage.UploadFile ? (
            message.extendsion === 'image' ? (
              <FileImage urlImage={`http://localhost:4000/${message.content}`} />
            ) : (
              <FileAnother fileName={message.content} fileSize={message.fileSize!} />
            )
          ) : (
            message.content
          )}
          <ContentFooterMessageSender>{message.time}</ContentFooterMessageSender>
        </ContentMessageSender>
      </MessageSender>
    </React.Fragment>
  );
};

export default Sender;
