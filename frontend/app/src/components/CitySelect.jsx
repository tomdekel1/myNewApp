
function CitySelect({ label, ...rest }) {

    return (
        <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">עיר/יישוב</h3>
            <span className="text-red-500 ms-1 inline">*</span>
            <label htmlFor="language" className="sr-only">Language</label>
            <div className="relative">
                <select id="language"{...rest} className="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md py-2 pl-3 pr-10 text-base text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm">
                    <option>קריית שמונה</option>
                    <option>בית הלל</option>
                    <option>עמיר</option>
                    <option>שדה נחמיה</option>
                    <option>כפר סאלד</option>
                    <option>יסוד המעלה</option>
                    <option>חצור</option>
                    <option>ראש פינה</option>
                    <option>מצוק עורבים</option>
                    <option>מרום גולן</option>
                    <option>אורטל</option>
                    <option>אלרום</option>
                    <option>שעל</option>
                    <option>מרגליות</option>
                    <option>רמות נפתלי</option>
                    <option>דישון</option>
                    <option>יפתח</option>
                    {/* if adding more cities, remember to update in backend routes/users.js array */}

                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    {/* <!-- Heroicon name: solid/chevron-down --> */}
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CitySelect