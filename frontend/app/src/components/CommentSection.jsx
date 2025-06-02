import { useEffect, useState } from "react";
import cardService from '../services/cardsServices'
import ms from 'ms'

function CommentSection(props) {
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await cardService.getCard(props.postID);
            response.data.comments.reverse()
            setPost(response.data);

        }
        fetchData();

    }
        , [post.comments, props.postID])
    return (
        <div className="bg-white py-4">
            <div className="mx-auto max-w-xl sm:px-6 lg:px-3" style={{ height: "15rem" }}>

                <nav className="h-full overflow-y-auto" aria-label="Directory">

                    <div className="relative">
                        <div
                            className=" border-t border-b border-gray-200 bg-gray-50 px-1 py-1 text-sm font-medium text-gray-500">
                            <h3>comments ({post.comments?.length})</h3>
                        </div>
                        <ul role="list" className="relative z-0 divide-y divide-gray-200">

                            {post.comments?.map(comment => (
                                <li className="bg-white" key={comment.time}>
                                    <div
                                        className="relative flex items-center space-x-3 px-1 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={comment.userImage} alt="" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <a className="focus:outline-none">
                                                {/* Extend touch target to entire panel */}
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                <p className="inline text-sm font-medium text-gray-900">{comment.userName}</p>
                                                <span className="inline absolute right-3 text-xs text-gray-500">{ms(Date.now() - comment.time)} ago</span>
                                                <p className="truncate text-sm text-gray-500">{comment.text}</p>
                                            </a>
                                        </div>
                                    </div>
                                </li>))}
                            {/* 
                            <li className="bg-white">
                                <div
                                    className="relative flex items-center space-x-3 px-1 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <a href="#" className="focus:outline-none">
                                            {/* Extend touch target to entire panel  
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            <p className="text-sm font-medium text-gray-900">Hector Adams</p>
                                            <p className="truncate text-sm text-gray-500">VP, Marketing</p>
                                        </a>
                                    </div>
                                </div>
                            </li> */}

                            {/* <li className="bg-white">
                                <div
                                    className="relative flex items-center space-x-3 px-1 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <a href="#" className="focus:outline-none">
                                            {/* Extend touch target to entire panel  
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            <p className="text-sm font-medium text-gray-900">Blake Alexander</p>
                                            <p className="truncate text-sm text-gray-500">Account Coordinator</p>
                                        </a>
                                    </div>
                                </div>
                            </li> */}

                            {/* <li className="bg-white">
                                <div
                                    className="relative flex items-center space-x-3 px-1 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <a href="#" className="focus:outline-none">
                                            
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            <p className="text-sm font-medium text-gray-900">Fabricio Andrews</p>
                                            <p className="truncate text-sm text-gray-500">Senior Art Director</p>
                                        </a>
                                    </div>
                                </div>
                            </li> */}

                        </ul>
                    </div>




                </nav>

            </div>
        </div>
    )
}

export default CommentSection