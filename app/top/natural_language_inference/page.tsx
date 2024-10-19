"use client"

import { useState } from "react";
import axios from "axios";
import MessageTwoInput from "@/app/common/component/message_two_input";
import ResultTable from "@/app/common/component/result_table";
import Loading from "@/app/common/component/loading";

const NaturalLanguageInference = () => {
    const [firstText, setFirstText] = useState<string>("");
    const [secondText, setSecondText] = useState<string>("");
    const [results, setResults] = useState<SentimentanalysisResult[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const changeFirstText = (value: string) => {
        setFirstText(value);
    }

    const changeSecondText = (value: string) => {
        setSecondText(value);
    }

    const sendText = async () => {
        setIsLoading(true);
        const response = await axios.post(
            "http://127.0.0.1:8000/natural_language_inference",
            { firstText, secondText }
        );
        setIsLoading(false);
        setFirstText("");
        setSecondText("");
        setResults(results.concat(response.data));
    }

    return (
        <div>
            { isLoading && <Loading />}
    
            <ResultTable
                title={"2つのテキストの論理関係予測結果"}
                results={results}
            />
    
            <MessageTwoInput
                changeFirstText={changeFirstText}
                changeSecondText={changeSecondText}
                sendText={sendText}
                firstText={firstText}
                secondText={secondText}
            />
        </div>
    )
}

export default NaturalLanguageInference;