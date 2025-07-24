import Heading from "../Heading";
import "../../services/usersServices"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
// import BgVid from "../BgVid";

export default function Home() {
    const { user } = useAuth()
    const navigate = useNavigate()

    function goToOrderPage(page) {
        if (user) {
            console.log(user)
            navigate(`${page}`)
            return
        }
        navigate("/signin")
    }

    return (
        <div className="bg-green-100 min-h-screen">
            <section className="bg-[url(https://img.freepik.com/free-photo/modern-kitchen-stove-natural-gas-burns-with-blue-flame-household-gas-consumption-close-up-selective-focus_166373-2376.jpg?ga=GA1.1.374246806.1750872302&semt=ais_items_boosted&w=740)] text-white h-[90vh] bg-no-repeat bg-cover bg-bottom py-10 md:py-10">

                <div className="flex pt-8 mb-8 items-center justify-center">
                    {/* contact info */}
                    <div className="flex-1 px-4">
                        {/* address */}
                        <div className="flex mb-3">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-600 text-white">
                                    {/* <!-- Heroicon name: globe-alt --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>

                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-sm leading-4 font-bold text-white">
                                    :מיקום החנות
                                </dt>
                                <dd className="mt-2 text-base text-white">
                                    קריית שמונה, החושן 8
                                </dd>
                            </div>
                        </div>
                        {/* phone */}
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-600 text-white">
                                    {/* <!-- Heroicon name: phone --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>

                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-sm leading-4 font-bold text-white">
                                    מס' טלפון
                                </dt>
                                <dd className="mt-2 text-base text-white">
                                    (04) 69-41958
                                </dd>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 text-4xl text-center">הבית של הגז בצפון</div>

                    <div className="flex-1">
                        <img className="m-auto w-[50%]" src="https://www.smartcut.co.il/wp-content/uploads/2024/10/doralon-gas-logo.png.webp" alt="dor gas logo" />
                    </div>
                </div>

                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-2xl md:text-6xl font-bold mb-4 animate-fade-in">הזמן גז בקלות ובמהירות</h1>
                    <p className="text-xl md:text-2xl mb-8 animate-fade-in animate-delay-1">הזמן עכשיו שירותי גז לביתך דרך האתר, ותהנה ממחיר מוזל, מעקב אחר הזמנה ועדכונים בזמן אמת</p>
                    {!user &&
                        <button onClick={() => navigate("/signin")} className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in animate-delay-2 animate-pulse-slow">
                            התחברות
                        </button>}
                </div>
            </section>
            {/* <Heading /> */}
            <section className="py-16 bg-yellow-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-green-400 animate-fade-in">הנמכרים ביותר</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Item 1 --> */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 hover-float animate-fade-in">
                            <img src="https://www.electrogas.co.il/GoopSitesFiles/65611/User/catalog_382997-l.jpg?638355710857230000" alt="paloma 20L gas heater" className="w-full h-48 object-contain transition duration-500 hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-red-600">paloma 20 מחמם מים</h3>
                                <p className="text-gray-600 mb-4">מחמם המים היפני והמפורסם שיהפוך כל מקלחת לחמאם טורקי בלי צורך להדליק את הדוד</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg">3899 - 4599&#8362;</span>
                                    <button onClick={() => goToOrderPage("/order-product")} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-110">
                                        הזמן עכשיו
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Item 2 --> */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 hover-float animate-fade-in animate-delay-1">
                            <img src="https://www.electra-power.co.il/wp-content/uploads/2024/11/131547_ax_1080x1080_1_1080-%C3%97-1080_2.jpg" alt="48kg gas can" className="w-full h-48 object-contain transition duration-500 hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-red-600">בלון גז 48 ק"ג</h3>
                                <p className="text-gray-600 mb-4">בלון גז גדול לבישול וחימום הבית כמו שרק גז יודע לעשות</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg">400 - 440&#8362;</span>
                                    <button onClick={() => goToOrderPage("gasCans")} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-110">
                                        הזמן עכשיו
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Item 3 --> */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 hover-float animate-fade-in animate-delay-2">
                            <img src="https://yac.co.il/wp-content/uploads/2018/07/%D7%91%D7%9C%D7%95%D7%9F-%D7%92%D7%96.jpg" alt="12kg gas can" className="w-full h-48 object-contain transition duration-500 hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-red-600">בלון גז 12 ק"ג</h3>
                                <p className="text-gray-600 mb-4">בלון גז קטן לבישול ביתי שהקוסקוס יוצא כמו של דודה עידית</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg">130-150&#8362;</span>
                                    <button onClick={() => goToOrderPage("gasCans")} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-110">
                                        הזמן עכשיו
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}