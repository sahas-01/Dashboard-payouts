// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import HomeIcon from '../../public/navicons/home-icon.svg';
import OrdersIcon from '../../public/navicons/orders-icon.svg';
import ProductsIcon from '../../public/navicons/products-icon.svg';
import DeliveryIcon from '../../public/navicons/delivery-icon.svg';
import MarketingIcon from '../../public/navicons/marketing-icon.svg';
import AnalyticsIcon from '../../public/navicons/analytics-icon.svg';
import PaymentsIcon from '../../public/navicons/payments-icon.svg';
import ToolsIcon from '../../public/navicons/tools-icon.svg';
import DiscountsIcon from '../../public/navicons/discounts-icon.svg';
import AudienceIcon from '../../public/navicons/audience-icon.svg';
import AppearanceIcon from '../../public/navicons/appearance-icon.svg';
import PluginsIcon from '../../public/navicons/plugins-icon.svg';
import DownArrowSideNav from '../../public/navicons/down-arrow-sidenav.svg';
import NavBottomCard from '../NavBottomCard';

export default function Sidebar({ show, setter }) {
    const router = useRouter();

    // Define our base class
    const className = "transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

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
            <div className={`${className}${appendClass} bg-[#1E2640] w-64`}>
                <div className="p-5 flex">
                    <Image src="/dukaan-nav.png" alt="Company Logo" width={55} height={55} />
                    <div className="flex flex-col pl-2 gap-y-[7px] gap-x-1">
                        <h2 className="text-white font-medium text-[15px]">Nishyan</h2>
                        <p className="text-white/80 underline font-normal text-[13px]">Visit Store!</p>
                    </div>
                    <Image src={DownArrowSideNav} alt="Down Arrow" width={18} height={18} className="ml-auto my-auto" />
                </div>
                <div className="flex flex-col">
                    <Link
                        href="/"
                        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={HomeIcon} alt="Home Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium'>Home</div>
                    </Link>
                    <Link
                        href="/orders"
                        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={OrdersIcon} alt="Orders Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium'>Orders</div>
                    </Link>
                    <Link
                        href="/products"
                        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={ProductsIcon} alt="Products Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium'>Products</div>
                    </Link>
                    <Link
                        href="/delivery"
                        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={DeliveryIcon} alt="Delivery Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium'>Delivery</div>
                    </Link>
                    <Link
                        href="/marketing"
                        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={MarketingIcon} alt="Marketing Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium'>Marketing</div>
                    </Link>
                    <Link
                        href="/analytics"
                        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={AnalyticsIcon} alt="Analytics Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium'>Analytics</div>
                    </Link>
                    <Link
                        href="/payments"
                        className={`flex [&>*]:my-auto text-md pl-4 py-3 bg-[#353C53] mx-2 rounded`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={PaymentsIcon} alt="Payments Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium px-1'>Payments</div>
                    </Link>
                    <Link
                        href="/tools"
                        className={`flex [&>*]:my-auto text-md pl-6 py-3`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={ToolsIcon} alt="Tools Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium pl-[5px]'>Tools</div>
                    </Link>
                    <Link
                        href="/discounts"
                        className={`flex [&>*]:my-auto text-md pl-6 py-3`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={DiscountsIcon} alt="Discounts Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium pl-[5px]'>Discounts</div>
                    </Link>
                    <Link
                        href="/audience"
                        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={AudienceIcon} alt="Audience Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium'>Audience</div>
                    </Link>
                    <Link
                        href="/appearance"
                        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={AppearanceIcon} alt="Appearance Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium'>Appearance</div>
                    </Link>
                    <Link
                        href="/plugins"
                        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 mb-[100px]`}
                    >
                        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                            <Image src={PluginsIcon} alt="Plugins Icon" width={18} height={18} />
                        </div>
                        <div className='text-white/80 text-[14px] font-medium'>Plugins</div>
                    </Link>
                    <div className="mt-10">
                        <NavBottomCard />
                    </div>
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}