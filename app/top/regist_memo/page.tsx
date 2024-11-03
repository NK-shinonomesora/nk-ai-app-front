"use client"

import { useState } from "react";
import axios from "axios";

const RegistMemo = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const changeTitle = (value: string) => {
        setTitle(value);
    }

    const changeContent = (value: string) => {
        setContent(value);
    }

    const registMemo = async () => {
        const response = await axios.post(
            "http://127.0.0.1:8000/memo",
            { title, content }
        );
        console.log(response);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-blue-300">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">メモ登録</h2>
                <form>
                <input 
                    type="text" 
                    placeholder="タイトルを入力してください" 
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                    onChange={(e) => changeTitle(e.target.value)}
                ></input>
                <textarea 
                    placeholder="内容を入力してください" 
                    rows="6" 
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                    onChange={(e) => changeContent(e.target.value)}
                ></textarea>
                <button 
                    type="submit" 
                    className="w-full px-4 py-2 text-white bg-green-400 rounded hover:bg-blue-400 transition duration-300"
                    onClick={() => registMemo()}
                >
                    登録
                </button>
                </form>
            </div>
        </div>
    )
}

export default RegistMemo;