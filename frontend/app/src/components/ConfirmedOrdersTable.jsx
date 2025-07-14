import { useState } from "react";
import ordersService from "../services/ordersServices"
import NotesDropDown from "./NotesDropDown"

function ConfirmedOrdersTable(props) {



    async function deliverOrder(id) {
        try {

            const confirmation = await ordersService.deliveredOrder(id)
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
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"><p>{props.orderStatus}</p></td>
            <td className="text-xs text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button
                    className="w-[10%] px-1 py-1 font-bold leading-6 capitalize duration-100 transform border-1 rounded-sm cursor-pointer bg-green-300 focus:bg-red-500 sm:w-auto sm:px-2 hover:shadow-lg hover:-translate-y-1"
                    onClick={() => deliverOrder(props.id)}>
                    בוצע
                </button>
                <button
                    className="w-[10%] px-1 py-1 font-bold leading-6 capitalize duration-100 transform border-1 rounded-sm cursor-pointer bg-red-500 focus:bg-red-500 sm:w-auto sm:px-2 hover:shadow-lg hover:-translate-y-1"
                    onClick={() => ordersService.deleteOrder(props.id)}>
                    מחק
                </button>
            </td>

        </tr>


    )
}

export default ConfirmedOrdersTable