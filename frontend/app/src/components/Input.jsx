
function Input({ label, error, ...rest }) {
    return (
        <div>
            <label htmlFor={rest.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
                {rest.required && <span className="text-red-500 ms-1">*</span>}
            </label>
            <input
                {...rest}
                id={rest.name}
                className={["block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6", error && "is-invalid"]
                    .filter(Boolean)
                    .join(" ")} />
            <div className="text-red-500 text-xs italic">{error}</div>
        </div>
    )
}

export default Input