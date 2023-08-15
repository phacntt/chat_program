import React, { FC, useState } from "react";
import { ContainerLogin } from "./style";
import InputUsernameLogin from "components/atoms/InputUsernameLogin";
import ButtonLogin from "components/atoms/ButtonLogin";

interface Props {
  handleUsername: (username: string | null) => void;
}

const LoginBody: FC<Props> = ({ handleUsername }) => {
  let [username, setUsername] = useState<string>("");
  const [contentInput, setContentInput] = useState("");

  const handleSaveusernameAndResetInput = (username: string) => {
    handleUsername(username);
    localStorage.setItem("username", username);
    setContentInput("");
  };

  const loginEnterButton = (e: any) => {
    if (e.key === "Enter" && contentInput !== "" && username !== "") {
      handleSaveusernameAndResetInput(username)
    }
  };

  const loginClickButton = (e: any) => {
    if (contentInput !== "") {
      handleSaveusernameAndResetInput(username)
    }
  };

  const handleChange = (e: any) => {
    setUsername(e.target.value);
    setContentInput(e.target.value);
  };

  return (
    <ContainerLogin>
      <InputUsernameLogin
        onChange={handleChange}
        onKeyDown={loginEnterButton}
        username={username}
      />
      <ButtonLogin onClick={loginClickButton} />
    </ContainerLogin>
  );
};

export default LoginBody;
