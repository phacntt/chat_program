import React, { FC } from 'react';
import { Avatar } from 'antd';
import { MessageReciver, ContentMessageReciver, ContenHeaderReciver, ContenFooterReciver, ContentBodyReciver } from './style';
import { MessageChat } from 'types/messageAction.types';
import { TypeOfMessage } from 'types/enum';
import FileImage from 'components/atoms/FileImage';
import FileAnother from 'components/atoms/FileAnother';

interface Props {
  message: MessageChat;
}

const Reciver: FC<Props> = ({ message }) => {
  return (
    <React.Fragment>
      <MessageReciver>
        <div>
          <Avatar size={'large'} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
        </div>
        <ContentMessageReciver>
          <ContenHeaderReciver>{message.author}</ContenHeaderReciver>
          <ContentBodyReciver>
            {message.typeOfMessage === TypeOfMessage.UploadFile ? (
              message.extendsion === 'image' ? (
                <FileImage urlImage={`${process.env.REACT_APP_SERVER}/${message.content}`} />
              ) : (
                <FileAnother fileName={message.content} fileSize={message.fileSize!} />
              )
            ) : (
              message.content
            )}
          </ContentBodyReciver>
          <ContenFooterReciver>{message.time}</ContenFooterReciver>
        </ContentMessageReciver>
      </MessageReciver>
    </React.Fragment>
  );
};

export default Reciver;
