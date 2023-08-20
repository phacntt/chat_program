import { TypeMessage } from 'types/enum';
import { MessageAction, MessageCreateRoom, MessageJoinRoom } from 'types/messageAction.types';
import { StatusButtonEmptyLayout } from 'types/statusButtonEmptyLayout.type';

class StatusModalCreateAndJoinRoom {
  public typeButton: StatusButtonEmptyLayout;
  public username: string;
  public roomValue?: string;
  public setTypeButton: (typeButton: StatusButtonEmptyLayout) => void;
  public setIsModalCreateRoomOpen: (status: boolean) => void;
  public setIsModalJoinRoomOpen: (status: boolean) => void;
  public sendMessageToServer: (message: any) => void;
  public setRoomId: (roomId: string) => void;

  constructor(
    typeButton: StatusButtonEmptyLayout,
    username: string,
    setTypeButton: (typeButton: StatusButtonEmptyLayout) => void,
    setIsModalCreateRoomOpen: (status: boolean) => void,
    setIsModalJoinRoomOpen: (status: boolean) => void,
    sendMessageToServer: (message: any) => void,
    setRoomId: (roomId: string) => void,
  ) {
    this.typeButton = typeButton;
    this.username = username;
    this.setTypeButton = setTypeButton;
    this.setIsModalCreateRoomOpen = setIsModalCreateRoomOpen;
    this.setIsModalJoinRoomOpen = setIsModalJoinRoomOpen;
    this.sendMessageToServer = sendMessageToServer;
    this.setRoomId = setRoomId;
  }

  public showModal = (type: StatusButtonEmptyLayout) => {
    if (type === StatusButtonEmptyLayout.Create) {
      this.setTypeButton(StatusButtonEmptyLayout.Create);
      this.setIsModalCreateRoomOpen(true);
    } else {
      this.setTypeButton(StatusButtonEmptyLayout.Join);
      this.setIsModalJoinRoomOpen(true);
    }
  };

  public handleOk = () => {
    if (this.roomValue) {
      if (this.typeButton === StatusButtonEmptyLayout.Create) {
        const messageCreateRoom: MessageCreateRoom = {
          roomName: this.roomValue,
          author: this.username,
        };

        const message: MessageAction = {
          action: TypeMessage.CreateRoom,
          data: messageCreateRoom,
        };

        this.sendMessageToServer(JSON.stringify(message));
        this.setIsModalCreateRoomOpen(false);
      } else {
        const messageJoinRoom: MessageJoinRoom = {
          roomId: this.roomValue,
          author: this.username,
        };

        const message: MessageAction = {
          action: TypeMessage.JoinRoom,
          data: messageJoinRoom,
        };

        this.sendMessageToServer(JSON.stringify(message));
        this.setIsModalJoinRoomOpen(false);
        this.setRoomId(this.roomValue);
      }
    }
  };

  public handleCancel = () => {
    this.typeButton === StatusButtonEmptyLayout.Create ? this.setIsModalCreateRoomOpen(false) : this.setIsModalJoinRoomOpen(false);
  };
}

export default StatusModalCreateAndJoinRoom;
