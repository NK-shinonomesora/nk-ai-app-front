
const Loading = ({ text }) => {
    return (
    <div id="loadingModal" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="spinner mx-auto"></div>
            <p className="mt-4 text-indigo-600 font-semibold">{text}</p>
        </div>
    </div>
    )
}

export default Loading;