"use client"

import { useState } from "react";
import axios from "axios";
import MessageInput from "../common/component/message_input";
import AutoGenerationMessage from "../common/component/auto_generation_message";

const Top = () => {
    const [message, setMessage] = useState<string>("");
    const [gptMessage, setGptMessage] = useState<string>("");

    const changeMessage = (value: string) => {
        setMessage(value);
    }

    const sendMessage = async () => {
        const response = await axios.post("http://127.0.0.1:8000/chat", { message });
        setGptMessage(response.data.message);
    }

    return (
        <div>
            <div className="bg-blue-200 p-4 h-1/6">
                <p>This is the top div. It is not scrollable.</p>
            </div>

            <AutoGenerationMessage
                gptMessage={gptMessage}
            />

            {/* メッセージ入力欄 */}
            <MessageInput
                changeMessage={changeMessage}
                sendMessage={sendMessage}
            />
        </div>
    )
}

export default Top;
