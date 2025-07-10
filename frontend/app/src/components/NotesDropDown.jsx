

function NotesDropDown(props) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-20">
            <input type="checkbox" id={props.notes} className="peer hidden" />
            <label htmlFor={props.notes} className="flex items-center justify-between p-1 bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-xs font-semibold">{props.notes == "" ? props.phone : "הערות"}</span>
                <svg className="w-3 h-3 transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </label>
            <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen text-wrap">
                <div className="p-2">
                    <p className="text-gray-700 leading-relaxed">{props.notes} {props.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default NotesDropDown