import { TypeMessage } from 'types/enum';
import { MessageAction, MessageCreateRoom, MessageJoinRoom } from 'types/messageAction.types';
import { StatusButtonEmptyLayout } from 'types/statusButtonEmptyLayout.type';

export interface StatusModalCreateAndJoinRoom {
  showModal: (typeButton: StatusButtonEmptyLayout) => void;
  handleOk: (roomValue: string, typeButton: StatusButtonEmptyLayout) => void;
  handleCancel: (typeButton: StatusButtonEmptyLayout) => void;
}

export const statusModalCreateAndJoinRoom = (
  username: string,
  setTypeButton: (typeButton: StatusButtonEmptyLayout) => void,
  setIsModalCreateRoomOpen: (status: boolean) => void,
  setIsModalJoinRoomOpen: (status: boolean) => void,
  sendMessageToServer: (message: any) => void,
  setRoomId: (roomId: string) => void,
): StatusModalCreateAndJoinRoom => {
  const showModal = (typeButton: StatusButtonEmptyLayout) => {
    if (typeButton === StatusButtonEmptyLayout.Create && setIsModalCreateRoomOpen) {
      setTypeButton(StatusButtonEmptyLayout.Create);
      setIsModalCreateRoomOpen(true);
      return;
    }
    if (typeButton === StatusButtonEmptyLayout.Join && setIsModalJoinRoomOpen) {
      setTypeButton(StatusButtonEmptyLayout.Join);
      setIsModalJoinRoomOpen(true);
      return;
    }
  };
  const handleOk = (roomValue: string, typeButton: StatusButtonEmptyLayout) => {
    console.log('ROOM VALUE: ', roomValue);
    console.log(typeButton);
    if (roomValue) {
      if (typeButton === StatusButtonEmptyLayout.Create) {
        const messageCreateRoom: MessageCreateRoom = {
          roomName: roomValue,
          author: username,
        };

        const message: MessageAction = {
          action: TypeMessage.CreateRoom,
          data: messageCreateRoom,
        };

        sendMessageToServer(JSON.stringify(message));
        setIsModalCreateRoomOpen(false);
      } else {
        const messageJoinRoom: MessageJoinRoom = {
          roomId: roomValue,
          author: username,
        };

        const message: MessageAction = {
          action: TypeMessage.JoinRoom,
          data: messageJoinRoom,
        };

        sendMessageToServer(JSON.stringify(message));
        setIsModalJoinRoomOpen(false);
        setRoomId(roomValue);
      }
    }
  };

  const handleCancel = (typeButton: StatusButtonEmptyLayout) => {
    typeButton === StatusButtonEmptyLayout.Create ? setIsModalCreateRoomOpen(false) : setIsModalJoinRoomOpen(false);
  };

  return {
    showModal,
    handleOk,
    handleCancel,
  };
};
