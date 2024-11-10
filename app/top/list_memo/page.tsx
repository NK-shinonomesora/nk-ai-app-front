"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/app/common/component/loading";
import Link from 'next/link';
import {
    EyeIcon,
    TrashIcon
} from '@heroicons/react/24/outline';

const ListMemo = () => {
    const [memos, setMemos] = useState();
    const [isMounted, setIsMounted] = useState(true); // マウント状態を追跡

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

            <div className="max-w-2xl mx-auto mt-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">メモ一覧</h2>
                {
                    memos &&
                    memos.data.map((memo, i) => (
                        <div key={memo.id} className="bg-white shadow-md rounded-lg p-4 mb-4 transition-transform transform hover:-translate-y-1">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-gray-800">{memo.title}</h3>
                                <p className="text-sm text-gray-500">2024-11-09</p>
                            </div>
                            <p className="text-gray-600 mb-4">{memo.content}</p>
                            <div className="flex justify-end space-x-2">
                                <Link
                                    href={{
                                        pathname: '/top/detail_memo',
                                        query: { memo_id: memo.id },
                                    }}
                                >
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    >
                                        <EyeIcon className="w-6" />
                                    </button>
                                </Link>
                                    <button
                                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                                    >
                                        <TrashIcon className="w-6" />
                                    </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListMemo;