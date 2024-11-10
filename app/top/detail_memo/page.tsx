"use client"

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailMemo = () => {
    const searchParams = useSearchParams();
    const memoId = searchParams.get("memo_id");
    const [memo, setMemo] = useState();
    const [isMounted, setIsMounted] = useState(true); // マウント状態を追跡

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://127.0.0.1:8000/memo/detail/", {
                params: {
                    memo_id: memoId
                }
            });
            if (isMounted) {
                setMemo(response.data.memo);
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
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{memo && memo.title}</h2>
            <p className="text-sm text-gray-500 mb-6">{memo && memo.created_at}</p>
            <div className="text-gray-700 leading-relaxed mb-8">
                <p>{memo && memo.content}</p>
            </div>
            <div className="flex justify-end">
                <button
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={() => ''}
                >
                Back
                </button>
            </div>
        </div>
    )
}

export default DetailMemo;