"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/app/common/component/loading";

const ListMemo = () => {
    const [memos, setMemos] = useState();
    const [isMounted, setIsMounted] = useState(true); // マウント状態を追跡

    if (memos) {
        console.log(memos.data)
    }

    useEffect(() => {
        const fetchData = async () => {
            const memos = await axios.get("http://127.0.0.1:8000/memos");
            if (isMounted) {
                setMemos(memos);
            }
        }
        fetchData();
        // クリーンアップ関数を返す
        return () => {
            // コンポーネントがアンマウントされたことを示すためのフラグを更新
            setIsMounted(false);
        };
    });

    return (
        <div>
            { !memos && <Loading text={"データ取得中..."}/> }

            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">メモ一覧</h1>

            <div className="flex flex-wrap justify-center gap-6 p-6 bg-gradient-to-br from-green-200 to-blue-300">
            {
                memos &&
                memos.data.map((memo, i) => (
                    <div className="memo-card w-64 p-4 bg-white rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
                        <div className="memo-id text-xs text-gray-500 mb-1">#{i + 1}</div>
                        <h2 className="memo-title text-lg font-semibold text-gray-800 mb-2">{memo.title}</h2>
                        <p className="memo-content text-gray-600">{memo.content}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ListMemo;