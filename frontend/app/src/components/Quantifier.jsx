
function Quantifier({ quantity, setQuantity, isService = 0 }) {

    function quantityControl(action) {
        if (action == "-" && quantity >= 1) (
            setQuantity(quantity => quantity - 1)
        )
        if (isService == 1 && quantity >= 1) {
            return
        }
        if (action == "+" && quantity != 10) (
            setQuantity(quantity => quantity + 1)
        )
    }
    return (
        <div className="inline-flex items-center mt-2">
            <button type="button" onClick={() => quantityControl("-")}
                className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                </svg>
            </button>
            <div
                className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                {quantity}
            </div>
            <button type="button"
                onClick={() => quantityControl("+")} className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </div>
    )
}

export default Quantifier