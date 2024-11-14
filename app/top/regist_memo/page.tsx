"use client"

import { useState } from "react";
import axios from "axios";

const RegistMemo = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [errorMessages, setErrorMessages] = useState();

    const changeTitle = (value: string) => {
        setTitle(value);
    }

    const changeContent = (value: string) => {
        setContent(value);
    }

    const registMemo = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/memo",
                { title, content }
            );
            setTitle("");
            setContent("");
        } catch(e) {
            let errorMessages = {};
            for(let i = 0; i < e.response.data.detail.length; i++) {
                const label = e.response.data.detail[i].loc[1];
                errorMessages = {...errorMessages, ...{[label]: e.response.data.detail[i].msg}};
            }
            setErrorMessages(errorMessages);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center -mt-12">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-2xl">
                {/* { isError && <ErrorMessage message={errorMessage} />} */}
                <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">メモ登録</h1>
                <div className="mb-6">
                    <label className="block text-gray-600 font-medium mb-2 text-lg">タイトル</label>
                    <input
                        type="text"
                        placeholder="タイトルを入力してください"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => changeTitle(e.target.value)}
                        value={title}
                    >
                    </input>
                    <p className="mt-1 text-base text-red-600">
                        {errorMessages && errorMessages['title']}
                    </p>
                </div>
                <div className="mb-8">
                    <label className="block text-gray-600 font-medium mb-2 text-lg">内容</label>
                    <textarea
                        id="content"
                        rows="6"
                        placeholder="メモの内容を入力してください"
                        className="w-full px-6 py-3 border border-gray-300 rounded-md text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => changeContent(e.target.value)}
                        value={content}
                    >
                    </textarea>
                    <p className="mt-1 text-base text-red-600">
                        {errorMessages && errorMessages['content']}
                    </p>
                </div>
                <button
                    onClick={() => registMemo()}
                    className="w-full py-3 bg-blue-500 text-white font-semibold text-lg rounded-md hover:bg-blue-600 transition-colors"
                >登録
                </button>
            </div>
        </div>
    )
}

export default RegistMemo;