import React, { FC, useState } from "react";
import { ContainerLogin } from "./style";
import InputUsernameLogin from "components/atoms/InputUsernameLogin";
import ButtonLogin from "components/atoms/ButtonLogin";
import { Modal, notification } from "antd";
import { NotificationType } from "types/notification.type";

interface Props {
  handleUsername: (username: string | null) => void;
}

const Login: FC<Props> = ({ handleUsername }) => {
  let [username, setUsername] = useState<string>("");
  const [contentInput, setContentInput] = useState("");
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (
    type: NotificationType,
    title: string,
    message: string
  ) => {
    api[type]({
      message: title,
      description: message,
    });
  };

  const handleSaveusernameAndResetInput = (username: string) => {
    handleUsername(username);
    localStorage.setItem("username", username);
    setContentInput("");
  };

  const loginEnterButton = (e: any) => {
    console.log(contentInput.length)
    if (contentInput.length > 20) {
      openNotificationWithIcon(
        "error",
        "Login Failer",
        "Username just 20 character"
      );
      return;
    }

    if (e.key === "Enter" && contentInput !== "" && username !== "") {
      handleSaveusernameAndResetInput(username);
      openNotificationWithIcon(
        "success",
        "Login Successfully",
        `Welcome ${username}`
      );
    }
  };

  const loginClickButton = (e: any) => {
    if (contentInput.length > 20) {
      openNotificationWithIcon(
        "error",
        "Login Failer",
        "Username just 20 character"
      );
      return;
    }

    if (contentInput !== "") {
      handleSaveusernameAndResetInput(username);
      openNotificationWithIcon(
        "success",
        "Login Successfully",
        `Welcome ${username}`
      );
    }
  };

  const handleChange = (e: any) => {
    setUsername(e.target.value);
    setContentInput(e.target.value);
  };

  return (
    <React.Fragment>
      <div>{contextHolder}</div>
      <ContainerLogin>
        <InputUsernameLogin
          onChange={handleChange}
          onKeyDown={loginEnterButton}
          username={username}
        />
        <ButtonLogin onClick={loginClickButton} />
      </ContainerLogin>
    </React.Fragment>
  );
};

export default Login;
