import { useState } from "react";
import ordersService from "../services/ordersServices"
import NotesDropDown from "./NotesDropDown"

function OrdersTable(props) {
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
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"><select value={inputValue} onChange={handleChange} className="block w-[100%] text-sm font-medium transition duration-75 border border-gray-800 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none" >
                <option>{day + "/" + month}</option>
                <option>{getDay(1) + "/" + getMonth(1)}</option>
                <option>{getDay(2) + "/" + getMonth(2)}</option>
                <option>{getDay(3) + "/" + getMonth(3)}</option>
                <option>{getDay(4) + "/" + getMonth(4)}</option>
                <option>{getDay(5) + "/" + getMonth(5)}</option>
            </select></td>
            <td className="text-xs text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button
                    className="w-[10%] px-1 py-1 font-bold leading-6 capitalize duration-100 transform border-1 rounded-sm cursor-pointer bg-green-300 focus:bg-red-500 sm:w-auto sm:px-2 hover:shadow-lg hover:-translate-y-1"
                    onClick={() => confirnOrderDate(props.id, inputValue)}>
                    אישור
                </button></td>

        </tr>


    )
}

export default OrdersTable

{/* <input type="text" value={day + "/" + month} className="w-[50%] text-xs" /> */ }