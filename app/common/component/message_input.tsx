
const MessageInput = ({ changeMessage, sendMessage, text }) => {
    return (
        <div className="absolute bottom-0 left-0 right-0 text-center p-4">
            <div className="flex space-x-4 justify-center">
                <input
                    type="text"
                    placeholder="テキストを入力してください。"
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-8/12"
                    onChange={(e) => changeMessage(e.target.value)}
                    value={text}
                >
                </input>
                <button
                    className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={() => sendMessage()}
                >送信
                </button>
            </div>
        </div>
    )
}

export default MessageInput;