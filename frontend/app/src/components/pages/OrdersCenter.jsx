import { useEffect, useState } from "react"
import OrdersTable from "../OrdersTable"
import ordersService from "../../services/ordersServices"
import ms from 'ms'
import CompletedOrders from "../completedOrders"
import ConfirmedOrdersTable from "../confirmedOrdersTable"

function OrdersCenter() {
    const [orders, setOrders] = useState([])
    const [confirmedOrders, setConfirmedOrders] = useState([])
    const [deletedDrders, setDeletedOrders] = useState([])
    const [orderTables, setorderTables] = useState("orders")


    useEffect(() => {
        async function getData() {
            const allOrders = await ordersService.getAllOrders()
            const allConfirmedOrders = await ordersService.getAllConfirmedOrders()
            const allDeletedDrders = await ordersService.getAllDeletedOrders()
            setOrders(allOrders.data.reverse())
            setConfirmedOrders(allConfirmedOrders.data.reverse())
            setDeletedOrders(allDeletedDrders.data.reverse())


        }
        getData()
    }, [])

    // dividing unhandeled orders into region based tables
    const ramatHagolanTable = [...orders.filter(order => order.region == "Ramat Hagolan")]
    const northTable = [...orders.filter(order => order.region == "north")]
    const southTable = [...orders.filter(order => order.region == "south")]
    const northMountainTable = [...orders.filter(order => order.region == "north Mountain")]
    const others = [...orders.filter(order => !order.region)]

    // dividing confirmed orders into region based tables
    const confirmedRamatHagolanTable = [...confirmedOrders.filter(order => order.region == "Ramat Hagolan")]
    const confirmedNorthTable = [...confirmedOrders.filter(order => order.region == "north")]
    const confirmedSouthTable = [...confirmedOrders.filter(order => order.region == "south")]
    const confirmedNorthMountainTable = [...confirmedOrders.filter(order => order.region == "north Mountain")]
    const confirmedOthers = [...confirmedOrders.filter(order => !order.region)]

    return (
        <div className="flex items-center justify-center min-h-screen bg-[url(https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover pt-20">
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            {/* filter buttons */}
                            <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row mb-5">

                                <button onClick={() => setorderTables("deleted")} className={["inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto", orderTables == "deleted" ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px" : " bg-gray-700 hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"].filter(Boolean)
                                    .join(" ")}>הזמנות שנמחקו</button>
                                <button onClick={() => setorderTables("confirmed")} className={["inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md", orderTables == "confirmed" ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px" : "bg-gray-700 shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"].filter(Boolean)
                                    .join(" ")}>הזמנות שאושרו</button>
                                <button onClick={() => setorderTables("orders")} className={["inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto", orderTables == "orders" ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px" : "bg-gray-700 hover:bg-gray-900 hover:text-white shadow-neutral-300 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"].filter(Boolean)
                                    .join(" ")}>הזמנות מחכות לאישור</button>
                            </div>

                            {orderTables == "orders" ? <> <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-right border-b-1 mb-2">הזמנות מחכות לאישור</div>
                                <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center">צפון</div>
                                <table className="min-w-full mt-3 mb-10">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שולם</th>
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
                                <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center">דרום</div>
                                <table className="min-w-full mt-3 mb-10">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שולם</th>
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
                                                phone={order.phone}
                                            />
                                        ))}</tbody>

                                </table>
                                <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center">רמה"ג</div>
                                <table className="min-w-full mt-3 mb-10">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שולם</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">אישור</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ramatHagolanTable.map((order, i) => (
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
                                <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center">הר צפוני</div>
                                <table className="min-w-full mt-3 mb-10">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שולם</th>
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
                                                phone={order.phone}
                                            />
                                        ))}</tbody>

                                </table>
                                <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center">שונות</div>
                                <table className="min-w-full mt-3 mb-10">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שולם</th>
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
                                                phone={order.phone}
                                            />
                                        ))}</tbody>
                                </table></>

                                : orderTables == "confirmed" ?
                                    <>
                                        <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-right border-b-1 mb-2">הזמנות שאושרו ולא סופקו</div>
                                        <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center">צפון</div>
                                        <table className="min-w-full mt-3 mb-10">
                                            <thead className="bg-white border-b">
                                                <tr>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שולם</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">אישור</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {confirmedNorthTable.map((order, i) => (
                                                    <ConfirmedOrdersTable
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
                                                        orderStatus={order.orderStatus}
                                                    />
                                                ))}</tbody>

                                        </table>
                                        <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center">דרום</div>
                                        <table className="min-w-full mt-3 mb-10">
                                            <thead className="bg-white border-b">
                                                <tr>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שולם</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">אישור</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {confirmedSouthTable.map((order, i) => (
                                                    <ConfirmedOrdersTable
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
                                                        orderStatus={order.orderStatus}
                                                    />
                                                ))}</tbody>

                                        </table>
                                        <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center">רמה"ג</div>
                                        <table className="min-w-full mt-3 mb-10">
                                            <thead className="bg-white border-b">
                                                <tr>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שולם</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">אישור</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {confirmedRamatHagolanTable.map((order, i) => (
                                                    <ConfirmedOrdersTable
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
                                                        orderStatus={order.orderStatus}
                                                    />
                                                ))}</tbody>

                                        </table>
                                        <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center">הר צפוני</div>
                                        <table className="min-w-full mt-3 mb-10">
                                            <thead className="bg-white border-b">
                                                <tr>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שולם</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">אישור</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {confirmedNorthMountainTable.map((order, i) => (
                                                    <ConfirmedOrdersTable
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
                                                        orderStatus={order.orderStatus}
                                                    />
                                                ))}</tbody>

                                        </table>
                                        <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-center">שונות</div>
                                        <table className="min-w-full mt-3 mb-10">
                                            <thead className="bg-white border-b">
                                                <tr>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שולם</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">אישור</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {confirmedOthers.map((order, i) => (
                                                    <ConfirmedOrdersTable
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
                                                        orderStatus={order.orderStatus}
                                                    />
                                                ))}</tbody>

                                        </table></>

                                    :

                                    <>
                                        <div htmlFor="table" className="font-bold text-3xl sm:text-4xl text-right border-b-1 mb-4">הזמנות שבוצעו\נמחקו</div>
                                        <table className="min-w-full mt-3 mb-10">
                                            <thead className="bg-white border-b">
                                                <tr>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שם הלקוח</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">יישוב</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">48kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">12kg</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שירות טכנאי</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">שולם</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">הערות</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">זמן ביצוע</th>
                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ת.סיפוק</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {deletedDrders.map((order, i) => (
                                                    <CompletedOrders
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
                                                        orderStatus={order.orderStatus}
                                                        phone={order.phone}
                                                    />
                                                ))}</tbody>

                                        </table> </>}
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default OrdersCenter