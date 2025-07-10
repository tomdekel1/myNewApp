import { useEffect, useState } from "react"
import OrdersTable from "../OrdersTable"
import ordersService from "../../services/ordersServices"
import ms from 'ms'

function OrdersCenter() {
    const [orders, setOrders] = useState([])


    useEffect(() => {
        async function getData() {
            const allOrders = await ordersService.getAllOrders()
            setOrders(allOrders.data.reverse())


        }
        getData()
    }, [])

    const RamatHagolanTable = [...orders.filter(order => order.region == "Ramat Hagolan")]
    const northTable = [...orders.filter(order => order.region == "north")]
    const southTable = [...orders.filter(order => order.region == "south")]
    const northMountainTable = [...orders.filter(order => order.region == "north Mountain")]
    const others = [...orders.filter(order => !order.region)]
    console.log(others);
    return (
        <div className="flex items-center justify-center min-h-screen bg-[url(https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover pt-20">
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <label htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center ml-[43%]">צפון</label>
                            <table className="min-w-full mt-3 mb-10">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">תשלום</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">אישור</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {northTable.map((order, i) => (
                                        <OrdersTable
                                            name={order.user_name}
                                            key={order._id}
                                            big={order.big}
                                            small={order.small}
                                            service={order.service}
                                            paid={order.paid}
                                            notes={order.notes}
                                            time={ms(Date.now() - order.createdAt) + " ago"}
                                            city={order.city}
                                            amount={i + 1}
                                            id={order._id}
                                            phone={order.phone}
                                        />
                                    ))}</tbody>

                            </table>
                            <label htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center ml-[43%]">דרום</label>
                            <table className="min-w-full mt-3 mb-10">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">תשלום</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">אישור</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {southTable.map((order, i) => (
                                        <OrdersTable
                                            name={order.user_name}
                                            key={order._id}
                                            big={order.big}
                                            small={order.small}
                                            service={order.service}
                                            paid={order.paid}
                                            notes={order.notes}
                                            time={ms(Date.now() - order.createdAt) + " ago"}
                                            city={order.city}
                                            amount={i + 1}
                                            id={order._id}
                                        />
                                    ))}</tbody>

                            </table>
                            <label htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center ml-[43%]">רמה"ג</label>
                            <table className="min-w-full mt-3 mb-10">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">תשלום</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">אישור</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {RamatHagolanTable.map((order, i) => (
                                        <OrdersTable
                                            name={order.user_name}
                                            key={order._id}
                                            big={order.big}
                                            small={order.small}
                                            service={order.service}
                                            paid={order.paid}
                                            notes={order.notes}
                                            time={ms(Date.now() - order.createdAt) + " ago"}
                                            city={order.city}
                                            amount={i + 1}
                                            id={order._id}
                                        />
                                    ))}</tbody>

                            </table>
                            <label htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center ml-[43%]">הר צפוני</label>
                            <table className="min-w-full mt-3 mb-10">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">תשלום</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">אישור</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {northMountainTable.map((order, i) => (
                                        <OrdersTable
                                            name={order.user_name}
                                            key={order._id}
                                            big={order.big}
                                            small={order.small}
                                            service={order.service}
                                            paid={order.paid}
                                            notes={order.notes}
                                            time={ms(Date.now() - order.createdAt) + " ago"}
                                            city={order.city}
                                            amount={i + 1}
                                            id={order._id}
                                        />
                                    ))}</tbody>

                            </table>
                            <label htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center ml-[43%]">שונות</label>
                            <table className="min-w-full mt-3 mb-10">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">תשלום</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">אישור</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {others.map((order, i) => (
                                        <OrdersTable
                                            name={order.user_name}
                                            key={order._id}
                                            big={order.big}
                                            small={order.small}
                                            service={order.service}
                                            paid={order.paid}
                                            notes={order.notes}
                                            time={ms(Date.now() - order.createdAt) + " ago"}
                                            city={order.city}
                                            amount={i + 1}
                                            id={order._id}
                                        />
                                    ))}</tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default OrdersCenter