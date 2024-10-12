
const MessageInput = ({ changeMessage, sendMessage }) => {
    return (
        <div className="flex justify-center mt-4">
            <div className="textarea-container w-11/12 max-w-lg mb-16">
                <textarea
                    className="w-full h-12 p-2 text-lg border-2 border-gray-300 rounded-lg resize-none overflow-hidden"
                    placeholder="Type here..."
                    onChange={(e) => changeMessage(e.target.value)}
                ></textarea>
                <button
                    className="send-btn bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                    onClick={() => sendMessage()}
                >
                Send</button>
            </div>
        </div>
    )
}

export default MessageInput;