import { Input } from "antd";
import React, { FC } from "react";

interface Props {
    onChange: (e: any) => void;
    onKeyDown: (e: any) => void;
    username: string
}

const InputUsernameLogin: FC<Props> = ({onChange, onKeyDown, username}) => {
    return (
        <Input
        size="large"
        placeholder="Enter your username"
        allowClear
        onChange={onChange}
        type="text"
        onKeyDown={onKeyDown}
        value={username}
        maxLength={20}
      />
    );
}

export default InputUsernameLogin;