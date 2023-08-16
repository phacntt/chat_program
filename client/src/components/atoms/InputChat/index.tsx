import { Input } from "antd";
import React, { FC } from "react";

interface Props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sendMessage: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    messageSend: string
}

const InputChat: FC<Props> = ({handleChange, messageSend, sendMessage}) => {
    return (
        <Input
        size="large"
        placeholder="input search text"
        allowClear
        onChange={handleChange}
        type="text"
        onKeyDown={sendMessage}
        value={messageSend}
      />
    );
}

export default InputChat;