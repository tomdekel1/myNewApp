import { useEffect, useState } from "react"
import MyOrdersOrder from "../MyOrdersOrder"
import ordersService from "../../services/ordersServices"
import { useAuth } from "../../contexts/auth.context"
import ms from "ms"

function MyOrders() {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        async function getData() {
            const allOrders = await ordersService.getUserOrders(user._id)
            setOrders(allOrders.data.reverse())

        }
        getData()
        console.log(orders);
    }, [])
    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl pt-20 bg-green-200">
            {/* Page Header  */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 text-right pr-6">היסטוריית הזמנות</h1>
                <p className="text-gray-600 mt-2 text-right pr-6">צפו בהזמנות עבר ובסטטוס הזמנה קיימת</p>
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start items-start dark:bg-gray-800 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800 text-right w-[100%]">הזמנות</p>
                            {orders.map((order, i) => (
                                <MyOrdersOrder
                                    key={order._id}
                                    big={order.big}
                                    small={order.small}
                                    service={order.service}
                                    paid={order.paid}
                                    notes={order.notes}
                                    time={order.createdAt}
                                    city={order.city}
                                    id={order._id}
                                    orderStatus={order.orderStatus}
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyOrders