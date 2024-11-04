"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/app/common/component/loading";

const SearchMemo = () => {
    const [memos, setMemos] = useState([]);
    const [keyword, setKeyword] = useState<string>("");

    const changeKeyword = (value: string) => {
        setKeyword(value);
    }

    const searchMemo = async () => {
        const response = await axios.get("http://127.0.0.1:8000/memo/search/", {
            params: {
                keyword: keyword
            }
        });
        setMemos(response.data.memos);
    }
 
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">メモ検索</h1>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="キーワードを入力してください。"
                            className="w-full py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => changeKeyword(e.target.value)}
                        />
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 transition duration-200"
                            onClick={() => searchMemo()}
                        >Search
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">検索結果</h2>
                    <ul>
                        {
                            memos.map((memo, i) => (
                                <li key={memo.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
                                    <div className="text-gray-600 text-sm">No: {i + 1}</div>
                                    <h3 className="text-lg font-medium text-gray-800">{memo.title}</h3>
                                    <p className="text-gray-700 mt-2">{memo.content}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SearchMemo;