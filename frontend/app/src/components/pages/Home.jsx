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
                <img className="m-auto w-[17%]" src="https://www.smartcut.co.il/wp-content/uploads/2024/10/doralon-gas-logo.png.webp" alt="dor gas logo" />
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">הזמן גז בקלות ובמהירות</h1>
                    <p className="text-xl md:text-2xl mb-8 animate-fade-in animate-delay-1">הזמן עכשיו שירותי גז לביתך דרך האתר, ותהנה ממחיר מוזל, מעקב אחר הזמנה ועדכונים בזמן אמת</p>
                    <button onClick={() => navigate("/signin")} className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in animate-delay-2 animate-pulse-slow">
                        התחברות
                    </button>
                </div>
            </section>
            {/* <Heading /> */}
            <section className="py-16 bg-yellow-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-green-400 animate-fade-in">הנמכרים ביותר</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Item 1 --> */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 hover-float animate-fade-in">
                            <img src="https://www.electrogas.co.il/GoopSitesFiles/65611/User/catalog_382997-l.jpg?638355710857230000" alt="classNameic Hotdog" className="w-full h-48 object-contain transition duration-500 hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-red-600">paloma 20 מחמם מים</h3>
                                <p className="text-gray-600 mb-4">מחמם המים היפני והמפורסם שיהפוך כל מקלחת לחמאם טורקי בלי צורך להדליק את הדוד</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg">4000&#8362;</span>
                                    <button onClick={() => goToOrderPage("paloma20")} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-110">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Item 2 --> */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 hover-float animate-fade-in animate-delay-1">
                            <img src="https://www.electra-power.co.il/wp-content/uploads/2024/11/131547_ax_1080x1080_1_1080-%C3%97-1080_2.jpg" alt="Chicago Dog" className="w-full h-48 object-contain transition duration-500 hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-red-600">בלון גז 48 ק"ג</h3>
                                <p className="text-gray-600 mb-4">בלון גז גדול לבישול וחימום הבית כמו שרק גז יודע לעשות</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg">400-440&#8362;</span>
                                    <button onClick={() => goToOrderPage("gasCans")} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-110">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Item 3 --> */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 hover-float animate-fade-in animate-delay-2">
                            <img src="https://yac.co.il/wp-content/uploads/2018/07/%D7%91%D7%9C%D7%95%D7%9F-%D7%92%D7%96.jpg" alt="Chili Cheese Dog" className="w-full h-48 object-contain transition duration-500 hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-red-600">בלון גז 12 ק"ג</h3>
                                <p className="text-gray-600 mb-4">בלון גז קטן לבישול ביתי שהקוסקוס יוצא כמו של דודה עידית</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg">130-150&#8362;</span>
                                    <button onClick={() => goToOrderPage("gasCans")} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-110">
                                        Add to Cart
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