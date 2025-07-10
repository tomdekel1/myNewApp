import { useState } from "react"
import Quantifier from "../Quantifier"
// import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import ordersService from "../../services/ordersServices";
import { useAuth } from "../../contexts/auth.context";
import { Navigate } from "react-router-dom";

function OrderGas() {
    const [serverError, setServerError] = useState("");
    const navigate = useNavigate();
    const { user } = useAuth()

    const [bigCanQuantity, setbigCanQuantity] = useState(0)
    const [smallCanQuantity, setSmallCanQuantity] = useState(0)
    const [technicianQuantity, setTechnicianQuantity] = useState(0)
    const [inputValue, setInputValue] = useState('');

    const bigCanPrice = 440;
    const smallCanPrice = 140;
    const technicianPrice = 250;

    const bigCanTotal = bigCanPrice * bigCanQuantity;
    const smallCanTotal = smallCanPrice * smallCanQuantity;
    const technicianTotal = technicianPrice * technicianQuantity;

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        console.log('Form submitted with value:', inputValue);
        try {
            const res = await ordersService.createOrder({
                "big": JSON.stringify(bigCanQuantity),
                "small": JSON.stringify(smallCanQuantity),
                "service": JSON.stringify(technicianQuantity),
                "paid": JSON.stringify(bigCanTotal + smallCanTotal + technicianTotal),
                "notes": inputValue

            });
            console.log(res)
            navigate('/signin')
        } catch (err) {
            console.log(err)
            if (err.response?.status === 400) {
                setServerError(err.response.data)
            }
        }
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };


    if (!user) {
        return <Navigate to="/" />
    }



    return (
        <div className="flex items-center justify-center h-screen bg-[url(https://www.chargriller.com/cdn/shop/collections/Dual_Fuel_Grills_PLP_-_Comp_1_-_Option_1.jpg?v=1703178167&width=1070)] bg-cover">
            <form onSubmit={handleSubmit} className="overflow-x-auto">
                <table className="w-full bg-white shadow-md  border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="border-b">
                            <th className="px-6 py-4 text-center text-gray-600 font-medium">שם המוצר</th>
                            <th className="px-6 py-4 text-center text-gray-600 font-medium">מחיר</th>
                            <th className="px-6 py-4 text-center text-gray-600 font-medium">כמות</th>
                            <th className="px-6 py-4 text-center text-gray-600 font-medium">סה"כ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-6 py-4 flex items-center gap-4">
                                <img src="https://www.electra-power.co.il/wp-content/uploads/2024/11/131547_ax_1080x1080_1_1080-%C3%97-1080_2.jpg" alt="Product" className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="text-gray-800 font-medium">בלון גז גדול</p>
                                    <span className="text-green-500 text-sm">48kg</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">{bigCanPrice}&#8362;</td>
                            <td className="px-6 py-4"><Quantifier quantity={bigCanQuantity} setQuantity={setbigCanQuantity} /></td>
                            <td className="px-6 py-4 font-semibold text-gray-900">{bigCanTotal}&#8362;</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 flex items-center gap-4">
                                <img src="https://yac.co.il/wp-content/uploads/2018/07/%D7%91%D7%9C%D7%95%D7%9F-%D7%92%D7%96.jpg" alt="Product" className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="text-gray-800 font-medium">בלון גז קטן</p>
                                    <span className="text-green-500 text-sm">12kg</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">{smallCanPrice}&#8362;</td>
                            <td className="px-6 py-4"><Quantifier quantity={smallCanQuantity} setQuantity={setSmallCanQuantity} /></td>
                            <td className="px-6 py-4 font-semibold text-gray-900">{smallCanTotal}&#8362;</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 flex items-center gap-4">
                                <img src="https://atinstitute.ca/wp-content/uploads/2019/12/Screen-Shot-2019-12-20-at-5.00.03-PM-1568x1174.png" alt="Product" className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="text-gray-800 font-medium">הזמנת שירות טכנאי</p>
                                    <span className="text-green-500 text-sm">לא כולל עלות חלקים</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">{technicianPrice}&#8362;</td>
                            <td className="px-6 py-4"><Quantifier quantity={technicianQuantity} setQuantity={setTechnicianQuantity} isService={1} /></td>
                            <td className="px-6 py-4 font-semibold text-gray-900">{technicianTotal}&#8362;</td>
                        </tr>
                        {/* order now */}
                        <tr>
                            <td className="px-6 py-4 flex items-center gap-4">
                                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 rounded-lg shadow-md transition">
                                    בצע הזמנה
                                </button>
                            </td>


                            <td className="px-6 py-4">
                                <div className="bg-white rounded-lg">
                                    <div className="relative bg-inherit">
                                        <textarea maxLength="40" type="text" value={inputValue} onChange={handleChange} className="text-xs peer bg-transparent h-11 w-40 rounded-lg text-gray-700 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-yellow-500 focus:outline-none focus:border-rose-600" placeholder="Type inside me" /><label htmlFor="username" className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-green-500 peer-focus:text-sm transition-all">הערות להזמנה</label>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">{bigCanTotal + smallCanTotal + technicianTotal}&#8362;</td>
                        </tr>
                    </tbody>
                </table>
                {serverError && <div className='text-red-500'>{serverError}</div>}
            </form>
        </div>
    )
}

export default OrderGas