import ms from 'ms'
import { useAuth } from '../contexts/auth.context'
import { useEffect, useState } from 'react'
import cardService from '../services/cardsServices'
import CommentSection from './CommentSection'

function Post(props) {
    const { user, getUserDetails } = useAuth()
    const [like, setLike] = useState("none");
    const [likeCount, setLikeCount] = useState(props.likes.length);
    const [commentInput, setCommentInput] = useState("");
    const [commentSectionDisplay, setCommentSectionDisplay] = useState(false);

    const [userDetails, setUserDetails] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const response = await getUserDetails(user._id);
            setUserDetails(response.data);

            if (props.likes.includes(response.data._id)) {
                setLike("red")
            }
        }
        fetchData();

    }
        , [user._id, getUserDetails, props.likes])

    async function handleCommentSubmit() {
        const userName = userDetails.name;
        let obj = {
            "text": commentInput,
            "userID": user._id,
            "time": Date.now(),
            "userImage": userDetails.image,
            "userName": userName
        }
        let card = await cardService.commentOnCard(props._id, obj)
        setCommentInput("")
        setCommentSectionDisplay(true)
    }

    async function likeToggle() {
        const card = await cardService.likeCard(props._id)
        if (like == "red") {
            setLike("none");
            setLikeCount(likeCount => likeCount - 1)
        } else {
            setLike("red");
            setLikeCount(likeCount => likeCount + 1)
        }
        console.log(card)
    }
    return (

        <div
            className="bg-yt-light-card-bg dark:bg-yt-dark-card-bg border border-transparent sm:yt-light-border sm:dark:yt-dark-border rounded-none sm:rounded-xl shadow-sm max-w-xl w-full overflow-hidden">
            <div className="p-3 sm:p-4">

                {/* Post Header  */}
                <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                            src={props.userImage}
                            alt="Channel Avatar" />
                        <div className="text-sm min-w-0">
                            <div className="flex items-center space-x-1">
                                <a href="#"
                                    className="font-medium text-yt-light-text-primary dark:text-yt-dark-text-primary hover:underline truncate">
                                    {props.userName}
                                </a>
                                <svg className="w-3.5 h-3.5 yt-verified-badge flex-shrink-0" fill="currentColor" viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-xs text-yt-light-text-secondary dark:text-yt-dark-text-secondary">
                                {ms(props.time)} ago
                            </p>
                        </div>
                    </div>
                    <button aria-label="More options" className="text-yt-light-text-secondary dark:text-yt-dark-text-secondary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1.5 -mt-1 -mr-1.5">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                    </button>
                </div>

                {/* Post Content */}
                <div
                    className="text-sm text-yt-light-text-primary dark:text-yt-dark-text-primary mb-3 break-words whitespace-pre-wrap">
                    <p>{props.subtitle}</p>
                </div>

                {/* Media (Optional - Example Image)  */}
                <div className="mb-3 rounded-lg overflow-hidden">
                    <img src={props.image}
                        alt={props.alt} className="w-full object-cover" />
                </div>

                {/* Action Bar  */}
                <div className="flex items-center space-x-4 text-yt-light-text-secondary dark:text-yt-dark-text-secondary">
                    <div className="flex items-center space-x-1">
                        <button onClick={likeToggle} aria-label="Like this post" className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1.5">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill={like} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path xmlns="http://www.w3.org/2000/svg" d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                        <span className="text-xs font-medium">{likeCount}</span>
                    </div>
                    <button aria-label="View comments" className="flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1.5 px-2">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
                        <span className="text-xs font-medium">{props.comments.length}</span>
                    </button>
                    <button aria-label="Share this post" className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1.5 ml-auto">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>
                    </button>
                </div>
                {!commentSectionDisplay ?
                    props.comments.length >= 1 ?
                        <div className="px-1">
                            <a onClick={() => setCommentSectionDisplay(true)} className="text-sm text-gray-200 dark:text-gray-400 hover:underline cursor-pointer">
                                View all {props.comments.length} comments
                            </a>
                        </div>
                        : null

                    : <>
                        <a onClick={() => setCommentSectionDisplay(false)} className="text-sm text-gray-200 dark:text-gray-400 hover:underline cursor-pointer">
                            X close
                        </a>
                        <CommentSection postID={props._id} /> </>}
                {/* Add Comment Section  */}
                <div className="mt-4 pt-3 border-t yt-light-border dark:yt-dark-border flex items-center space-x-3">
                    <img className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        src={userDetails.image}
                        alt="Your Avatar" />
                    <input value={commentInput} onChange={(e) => setCommentInput(e.target.value)} className="text-sm text-yt-light-text-secondary dark:text-yt-dark-text-secondary flex-grow cursor-text"
                        placeholder={" Add a comment..."}
                    />
                    <button onClick={handleCommentSubmit} className="text-sm font-semibold text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 opacity-50">Post</button>


                </div>

            </div>
        </div>
    )
}

export default Post