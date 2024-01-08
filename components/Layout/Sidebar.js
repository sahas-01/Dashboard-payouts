// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// import { SlHome } from 'react-icons/sl'
// import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs'
// import { FaTshirt, FaRedhat } from 'react-icons/fa'

// import logo from '@/img/logo.svg'

export default function Sidebar({ show, setter }) {
    const router = useRouter();

    // Define our base class
    const className = "transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route }) => {
        // Highlight menu item based on currently displayed route
        const colorClass = router.pathname === route ? "text-white" : "text-white/50 hover:text-white";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>
                <div className='text-white text-[14px] font-medium'>{name}</div>
            </Link>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}
        />
    )

    return (
        <>
            <div className={`${className}${appendClass} bg-[#1E2640] w-56`}>
                <div className="p-2 flex">
                    <Link href="/">
                        <h2 className="text-white">Nishyan</h2>
                        <p className="text-white underline">Visit Store!</p>
                        {/* <img src={logo.src} alt="Company Logo" width={300} height={300} /> */}
                    </Link>
                </div>
                <div className="flex flex-col">
                    <MenuItem
                        name="Home"
                        route="/"
                        // icon={<SlHome />}
                    />
                    <MenuItem
                        name="Orders"
                        route="/t-shirts"
                        // icon={<FaTshirt />}
                    />
                    <MenuItem
                        name="Products"
                        route="/hats"
                        // icon={<FaRedhat />}
                    />
                    <MenuItem
                        name="Delivery"
                        route="/about"
                        // icon={<BsInfoSquare />}
                    />
                    <MenuItem
                        name="Marketing"
                        route="/contact"
                        // icon={<BsEnvelopeAt />}
                    />
                    <MenuItem
                        name="Analytics"
                        route="/contact"
                        // icon={<BsEnvelopeAt />}
                    />
                    <MenuItem
                        name="Payments"
                        route="/"
                        // icon={<BsEnvelopeAt />}
                    />
                    <MenuItem
                        name="Tools"
                        route="/contact"
                        // icon={<BsEnvelopeAt />}
                    />
                    <MenuItem
                        name="Discounts"
                        route="/contact"
                        // icon={<BsEnvelopeAt />}
                    />
                    <MenuItem
                        name="Audience"
                        route="/contact"
                        // icon={<BsEnvelopeAt />}
                    />
                    <MenuItem
                        name="Appearance"
                        route="/contact"
                        // icon={<BsEnvelopeAt />}
                    />
                    <MenuItem
                        name="Plugins"
                        route="/contact"
                        // icon={<BsEnvelopeAt />}
                    />
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}