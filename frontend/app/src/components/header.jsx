/* eslint-disable react/prop-types */
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../contexts/auth.context'
import ProfileDropDown from './ProfileDropDown'
import { useEffect, useState } from 'react'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Feed', href: '/feed' },
    { name: 'Sign In', href: '/signin' },
    { name: 'Sign Up', href: '/signup' },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header(props) {

    const { user } = useAuth()
    console.log(user, "1")
    return (
        <div className=' bg-transparent'>
            <Disclosure as="nav" className="fixed">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img
                                    alt="Your Company"
                                    src="https://www.smartcut.co.il/wp-content/uploads/2024/10/doralon-gas-logo.png.webp"
                                    className="h-10 w-auto"
                                />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <NavLink
                                        key={"דף הבית"}
                                        to={"/"}
                                        className={({ isActive }) => {
                                            return 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 ' + (
                                                isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white'
                                            )
                                        }}
                                    >
                                        {"דף הבית"}
                                    </NavLink>
                                    <NavLink
                                        key={'מי אנחנו'}
                                        to={"/about"}
                                        className={({ isActive }) => {
                                            return 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 ' + (
                                                isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white'
                                            )
                                        }}
                                    >
                                        {'מי אנחנו'}
                                    </NavLink>
                                    <NavLink
                                        key={'מוצרים'}
                                        to={"/feed"}
                                        className={({ isActive }) => {
                                            return 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 ' + (
                                                isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white'
                                            )
                                        }}
                                    >
                                        {'מוצרים'}
                                    </NavLink>

                                    {user ? <NavLink
                                        key={'הזמנות שלי'}
                                        to={"/my-orders"}
                                        className={({ isActive }) => {
                                            return 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 ' + (
                                                isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white'
                                            )
                                        }}
                                    >
                                        {'הזמנות שלי'}
                                    </NavLink> : <>  <NavLink
                                        key={'התחברות'}
                                        to={"/signin"}
                                        className={({ isActive }) => {
                                            return 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 ' + (
                                                isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white'
                                            )
                                        }}
                                    >
                                        {'התחברות'}
                                    </NavLink>

                                        <NavLink
                                            key={'הרשמה'}
                                            to={"/signup"}
                                            className={({ isActive }) => {
                                                return 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 ' + (
                                                    isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white'
                                                )
                                            }}
                                        >
                                            {'הרשמה'}
                                        </NavLink>

                                    </>}
                                    {user && user.isAdmin == true ?
                                        <NavLink
                                            key={'ניהול הזמנות'}
                                            to={"/ordersCenter"}
                                            className={({ isActive }) => {
                                                return 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 ' + (
                                                    isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white'
                                                )
                                            }}
                                        >
                                            {'ניהול הזמנות'}
                                        </NavLink> : null}
                                </div>
                            </div>
                        </div>
                        {user ?
                            <ProfileDropDown /> : null}
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
            {props.children}
        </div>
    )
}
