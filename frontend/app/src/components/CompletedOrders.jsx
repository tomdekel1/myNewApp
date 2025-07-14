import { useState } from "react";
import ordersService from "../services/ordersServices"
import NotesDropDown from "./NotesDropDown"

function CompletedOrders(props) {
    const date = new Date()
    const day = date.getDate().toString()
    const month = (date.getMonth() + 1).toString()

    function getDay(day) {
        const newDate = new Date()
        newDate.setDate(date.getDate() + day)
        return newDate.getDate()
    }
    function getMonth(day) {
        const newDate = new Date()
        newDate.setDate(date.getDate() + day)
        return newDate.getMonth() + 1
    }

    const [inputValue, setInputValue] = useState(day + "/" + month);

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value)
    };

    async function confirnOrderDate(id, value) {
        try {
            console.log(id);
            let obj = { orderStatus: value }

            const confirmation = await ordersService.confirmOrder(id, obj)
            console.log(confirmation);

        } catch (error) {
            console.log(error)
        }
    }



    // console.log(getMonth(25))

    return (


        <tr className="bg-white border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{props.amount}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.name}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.city}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.big}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.small}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.service}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.paid}</td>
            <td className="text-xs text-gray-900 font-light px-6 py-4 whitespace-nowrap"><NotesDropDown notes={props.notes} phone={props.phone} /></td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.time}</td>
            <td className="text-xs text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <p>{props.orderStatus}</p>
            </td>

        </tr>


    )
}

export default CompletedOrders