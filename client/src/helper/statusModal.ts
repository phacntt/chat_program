import { StatusButtonEmptyLayout } from "types/statusButtonEmptyLayout.type";

class StatusModalCreateAndJoinRoom {
  public typeButton: StatusButtonEmptyLayout;
  public setTypeButton: (typeButton: StatusButtonEmptyLayout) => void;
  public setIsModalCreateRoomOpen: (status: boolean) => void;
  public setIsModalJoinRoomOpen: (status: boolean) => void;

  constructor(
    typeButton: StatusButtonEmptyLayout,
    setTypeButton: (typeButton: StatusButtonEmptyLayout) => void,
    setIsModalCreateRoomOpen: (status: boolean) => void,
    setIsModalJoinRoomOpen: (status: boolean) => void
  ) {
    this.typeButton = typeButton;
    this.setTypeButton = setTypeButton;
    this.setIsModalCreateRoomOpen = setIsModalCreateRoomOpen;
    this.setIsModalJoinRoomOpen = setIsModalJoinRoomOpen;
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
    this.typeButton === StatusButtonEmptyLayout.Create
      ? this.setIsModalCreateRoomOpen(false)
      : this.setIsModalJoinRoomOpen(false);
  };

  public handleCancel = () => {
    this.typeButton === StatusButtonEmptyLayout.Create
      ? this.setIsModalCreateRoomOpen(false)
      : this.setIsModalJoinRoomOpen(false);
  };
}


export default StatusModalCreateAndJoinRoom;
