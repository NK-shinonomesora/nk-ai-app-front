const Modal = ({ backMethod, actionMethod }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
                <h2 className="text-xl font-semibold text-gray-800">本当に削除しますか？</h2>
                <p className="mt-2 text-gray-600">この操作は取り消せません。</p>
                <div className="mt-6 flex justify-center gap-4">
                    <button
                        onClick={() => backMethod(false)}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >戻る
                    </button>
                    <button
                        onClick={() => actionMethod()}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >削除
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;