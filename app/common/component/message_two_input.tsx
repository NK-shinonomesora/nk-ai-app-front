
const MessageTwoInput = ({ changeFirstText, changeSecondText, sendText, firstText, secondText }) => {
    return (
        <div className="container mx-auto mt-4">
            <div className="flex space-x-4 justify-center">
            <input
                type="text"
                placeholder="1つ目のテキスト"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-96"
                onChange={(e) => changeFirstText(e.target.value)}
                value={firstText}
            >
            </input>
            <input
                type="text"
                placeholder="2つ目のテキスト"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-96"
                onChange={(e) => changeSecondText(e.target.value)}
                value={secondText}
            >
            </input>
            <button
                className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() => sendText()}
            >送信
            </button>
            </div>
        </div>
    )
}

export default MessageTwoInput;