
const ErrorMessage = ({ message }) => {
    return (
        <div className="flex items-center justify-center mb-4 animate-fadeIn">
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 rounded-lg shadow-lg max-w-md mx-auto">
                <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M6.938 4.938l-1.414 1.414M4.938 18.062l1.414 1.414M15.938 4.938l1.414 1.414M17.938 18.062l-1.414 1.414M21 12h-2m-4 0H9m-4 0H3"></path>
                    </svg>
                    {/* <h2 class="text-lg font-semibold">Error 404</h2> */}
                    <p className="mt-1">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorMessage;