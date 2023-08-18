import React, { FC } from "react";
import { ChatInput } from "./style";

interface Props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sendMessage: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    messageSend: string
}

const InputChat: FC<Props> = ({handleChange, messageSend, sendMessage}) => {
    return (
        <ChatInput
        size="large"
        placeholder="Enter Text"
        allowClear
        onChange={handleChange}
        type="text"
        onKeyDown={sendMessage}
        value={messageSend}
      />
    );
}

export default InputChat;