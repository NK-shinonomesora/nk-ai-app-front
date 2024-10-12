
const AutoGenerationMessage = ({ gptMessage }) => {
    return (
        <div className="bg-green-200 p-4 h-96 overflow-y-scroll">
            <p>response is {gptMessage}</p>
        </div>
    )
}

export default AutoGenerationMessage;