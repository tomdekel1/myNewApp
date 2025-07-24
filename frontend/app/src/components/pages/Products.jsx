import { useEffect, useState } from "react"
import cardService from "../../services/cardsServices"
import OrderNowBTN from "../OrderNowBTN"
import { useAuth } from "../../contexts/auth.context"
import { useNavigate } from "react-router-dom"

function Products() {
    const [cards, setCards] = useState([])
    const user = useAuth()
    const navigate = useNavigate()

    function goToOrderPage(page) {
        if (user) {
            console.log(user)
            navigate(`${page}`)
            return
        }
        navigate("/signin")
    }

    useEffect(() => {
        async function getData() {
            const allCards = await cardService.getAllCards()
            setCards(allCards.data.reverse())
        }
        getData()
    }, [])


    return (
        <div className="bg-green-200">
            <div className="text-center p-10 pt-20 bg-green-200">
                <h1 className="font-bold text-4xl mb-4">המוצרים שלנו</h1>
                <h1 className="text-3xl">מוצרי הגז המובילים והכי אמינים ובטיחותיים בענף</h1>
            </div>

            {/* ✅ Grid Section - Starts Here 👇  */}
            <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a>
                        <img src="https://www.electra-power.co.il/wp-content/uploads/2024/11/131547_ax_1080x1080_1_1080-%C3%97-1080_2.jpg" alt="48kg gas can" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">בלון גז 48 ק"ג</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">בלון גז גדול</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">420&#8362;</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">440&#8362;</p>
                                </del>
                                <div onClick={() => goToOrderPage('../gasCans')} className="ml-auto">
                                    <OrderNowBTN />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 1 - Ends Here  --> */}

                {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a>
                        <img src="https://yac.co.il/wp-content/uploads/2018/07/%D7%91%D7%9C%D7%95%D7%9F-%D7%92%D7%96.jpg" alt="12kg gas can" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">בלון גז 12 ק"ג</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">בלון גז קטן</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">140&#8362;</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">150&#8362;</p>
                                </del>
                                <div onClick={() => goToOrderPage('../gasCans')} className="ml-auto"><OrderNowBTN /></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 2- Ends Here  --> */}

                {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a>
                        <img src="https://www.electrogas.co.il/GoopSitesFiles/65611/User/catalog_382997-l.jpg?638355710857230000" alt="paloma 20L gas heater" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">מחמם מים 20ל' לדקה</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">paloma 20 מחמם מים</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">3899&#8362;</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">4500&#8362;</p>
                                </del>
                                <div onClick={() => goToOrderPage('../order-product')} className="ml-auto"><OrderNowBTN /></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 3 - Ends Here  --> */}

                {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a>
                        <img src="https://i0.wp.com/www.cwc.co.il/wp-content/uploads/2023/06/21930.jpg?w=539&ssl=1" alt="outdoor stove" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">כירת בישול מקצועית</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">כירת בישול שולחנית בוער יצוק</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">800&#8362;</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">1200&#8362;</p>
                                </del>
                                <div onClick={() => goToOrderPage('../order-product')} className="ml-auto"><OrderNowBTN /></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 4 - Ends Here  --> */}

                {/* <!--   ✅ Product card 5 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a>
                        <img src="https://www.electrogas.co.il/GoopSitesFiles/65611/User/catalog_690756-l.jpg?638010270816200000"
                            alt="gas dryer" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Rinnai 7KG מייבש כביסה</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">מייבש כביסה יפני 7 ק"ג</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">3799&#8362;</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">4099&#8362;</p>
                                </del>
                                <div onClick={() => goToOrderPage('../order-product')} className="ml-auto"><OrderNowBTN /></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 5 - Ends Here  --> */}

                {/* <!--   ✅ Product card 6 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a>
                        <img src="https://www.electrogas.co.il/GoopSitesFiles/65611/User/catalog_803828-l.jpg?637939891393000000"
                            alt="gas dryer" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Rinnai 9KG מייבש כביסה</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">מייבש כביסה יפני 9 ק"ג</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">4199&#8362;</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">4499&#8362;</p>
                                </del>
                                <div onClick={() => goToOrderPage('../order-product')} className="ml-auto"><OrderNowBTN /></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 6 - Ends Here  --> */}

            </section>

            {/* 🛑 Grid Section - Ends Here */}


            {/* footer */}
            <div className="text-center py-10 px-10">
                <h2 className="font-bold text-2xl md:text-4xl mb-4">Thanks to <a href="https://unsplash.com/@nixcreative"
                    className="underline font-black">Tyler Nix</a> for those AMAZING product images!</h2>
            </div>
        </div>
    )
}

export default Products