import { Input } from "antd";
import React, { FC } from "react";

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
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