"use client"

import { useState } from "react";
import axios from "axios";
import MessageInput from "@/app/common/component/message_input";
import ResultTable from "@/app/common/component/result_table";
import Loading from "@/app/common/component/loading";

const DocumentClassification = () => {
    const [text, setText] = useState<string>("");
    const [results, setResults] = useState<SentimentanalysisResult[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const changeText = (value: string) => {
        setText(value);
    }

    const sendMessage = async () => {
        setIsLoading(true);
        const response = await axios.post("http://127.0.0.1:8000/document_classification", { text });
        setIsLoading(false);
        setText("");
        setResults(results.concat(response.data));
    }

    return (
        <div>
            { isLoading && <Loading />}

            <ResultTable
                title={"感情分析結果"}
                results={results}
            />

            {/* メッセージ入力欄 */}
            <MessageInput
                changeMessage={changeText}
                sendMessage={sendMessage}
                text={text}
            />
        </div>
    )
}

export default DocumentClassification;
