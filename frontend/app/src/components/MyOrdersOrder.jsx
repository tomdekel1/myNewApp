
function MyOrdersOrder(props) {
    const orderDate = new Date(props.time)

    return (
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full bg-gray-100 p-9 rounded-xl">
            <div className="pb-4 md:pb-8 w-full md:w-40">
                <img className="w-full hidden md:block" src="https://yac.co.il/wp-content/uploads/2018/07/%D7%91%D7%9C%D7%95%D7%9F-%D7%92%D7%96.jpg" alt="dress" />
                <img className="w-full md:hidden" src="https://yac.co.il/wp-content/uploads/2018/07/%D7%91%D7%9C%D7%95%D7%9F-%D7%92%D7%96.jpg" alt="dress" />
            </div>
            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">הזמנת גז</h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-sm dark:text-white leading-none text-gray-800 text-right font-black"><span className="dark:text-gray-400 text-gray-600 font-normal">בלונים גדולים:</span> {props.big} </p>
                        <p className="text-sm dark:text-white leading-none text-gray-800 text-right font-black"><span className="dark:text-gray-400 text-gray-600 font-normal">בלונים קטנים:</span> {props.small} </p>
                        <p className="text-sm dark:text-white leading-none text-gray-800 text-right font-black"><span className="dark:text-gray-400 text-gray-600 font-normal">שירות: </span> {props.service} </p>
                        <p className="text-sm dark:text-white leading-none text-gray-800 text-right font-black"><span className="dark:text-gray-400 text-gray-600 font-normal">בוצע: </span> {orderDate.toLocaleDateString()} </p>
                        {props.notes && <p className="text-sm dark:text-white leading-none text-gray-800 text-right font-bold"><span className="dark:text-gray-400 text-gray-600 font-normal">הערות: </span> {props.notes} </p>}
                    </div>
                </div>
                <div className="flex justify-between flex-wrap space-x-8 items-start w-full gap-2">
                    <div className="flex flex-col text-center">
                        <p>:תאריך משלוח</p><span className={["px-3 py-1 rounded-full text-xs font-medium border-2", props.orderStatus == "בתהליכי אישור" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"].filter(Boolean)
                            .join(" ")}>{props.orderStatus}</span></div>
                    <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                    <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">{props.paid}&#8362;</p>
                </div>
            </div>
        </div>
    )
}

export default MyOrdersOrder