import React from "react";

const ResultTable: React.FC<ResultTable> = ({ title, results }) => {
    return (
        <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">{title}</h1>
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="w-full bg-indigo-600 text-white text-left">
                                <th className="py-3 px-4 uppercase font-semibold text-sm">#</th>
                                <th className="py-3 px-4 uppercase font-semibold text-sm">Text</th>
                                <th className="py-3 px-4 uppercase font-semibold text-sm">Label</th>
                                <th className="py-3 px-4 uppercase font-semibold text-sm">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((data, i) => (
                                <tr key={i} className="hover:bg-gray-100 transition duration-300">
                                    <td className="py-4 px-6 border-b border-gray-200">{i + 1}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{data.text}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{data.label}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{data.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default ResultTable;