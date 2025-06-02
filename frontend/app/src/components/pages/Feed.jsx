// import BgVid from "../BgVid"
import Post from "../Post"
import '../../forest.css'
import { useEffect, useState } from "react"
import cardService from "../../services/cardsServices"

function Feed() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function getData() {
            const allCards = await cardService.getAllCards()
            setCards(allCards.data.reverse())
        }
        getData()
    }, [])


    return (
        <div className="feed-container">
            <div className="yt-light-bg dark:yt-dark-bg min-h-screen flex items-center justify-center p-4 flex-wrap gap-10 max-w-2xl m-auto text-amber-50 z-[50]">

                {cards.map(card => (
                    <Post
                        key={card._id}
                        _id={card._id}
                        userName={card.user_name}
                        subtitle={card.subtitle}
                        image={card.image.url}
                        alt={card.image.alt}
                        userImage={card.user_image}
                        likes={card.likes}
                        comments={card.comments}
                        time={Date.now() - card.createdAt}
                    />
                ))}

            </div>
            <div className="starfall">
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
                <div className="falling-star"></div>
            </div>

        </div>
    )
}

export default Feed