import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { useAuth } from '../contexts/auth.context'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function ProfileDropDown() {
    const { user, logOut, getUserDetails } = useAuth()
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUserDetails(user._id)
            setUserDetails(response.data)
        }
        fetchData()
    }
        , [user._id, getUserDetails])

    return (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            {/* Profile dropdown */}
            <Menu as="div" className=" relative ml-3 cursor-pointer before:absolute before:bg-sky-200 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
                <div>
                    <MenuButton className=" relative flex text-sm border">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>

                        <a className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                            <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            {userDetails?.name}
                        </a>
                        {/* <img
                            alt=""
                            src={userImage}
                            className="size-8 rounded-full"
                        /> */}
                    </MenuButton>
                </div>
                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <MenuItem>
                        <a
                            href="/profile-settings"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                            Your Profile
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                            Settings
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            onClick={logOut}
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                            התנתק
                        </a>
                    </MenuItem>
                </MenuItems>
            </Menu >
        </div >
    )
}

export default ProfileDropDown