

const ClientError = ({ cause, message }) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
            <div className="text-center p-10 bg-white rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 max-w-md">
                <div className="text-indigo-500 text-6xl mb-4 animate-bounce">
                    <i className="fas fa-exclamation-circle"></i>
                </div>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{cause}</h1>
                <p className="text-gray-600 text-lg mb-6">{message}</p>
                <button
                    onClick={() => ''}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full font-semibold hover:from-blue-500 hover:to-indigo-500 transition transform hover:scale-105 focus:outline-none shadow-lg"
                >
                戻る
                </button>
            </div>
        </div>
    )
}

export default ClientError;