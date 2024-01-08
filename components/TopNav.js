import React from 'react'
import HelpIcon from '../public/navicons/Help.svg';
import SearchIcon from '../public/navicons/search.svg';
import Image from 'next/image';
import ContactIcon from '../public/navicons/contact-icon.svg';
import DownIconTopNav from '../public/navicons/down-icon-topnav.svg';

const TopNav = () => {
    return (
        <div className='flex bg-white justify-between mb-2 py-[12px] px-[32px]'>
            <div className='flex gap-2 items-center'>
                <h1 className='text-[#1A181E] font-normal text-[15px] mx-1.5'>Payments</h1>
                <Image src={HelpIcon} alt="Help Icon" width={14} height={14} />
                <p className='text-[#4D4D4D] font-normal text-xs'>How it works</p>
            </div>
            <div className='flex bg-[#F2F2F2] items-center gap-x-2 rounded-md w-[400px] px-[16px] py-[9px]'>
                <Image src={SearchIcon} alt="Search Icon" width={14} height={14} />
                <input type="text" placeholder="Search features,tutorials,etc..." className="text-[#808080] w-full bg-[#F2F2F2] focus:border-none overflow-hidden outline-none whitespace-nowrap" />
            </div>
            <div className="flex gap-1 mx-1">
                <div className="rounded-3xl bg-[#E6E6E6] text-white px-2.5 rounded-md">
                    <Image src={ContactIcon} alt="Contact Icon" className='py-2 px-0.5 w-[20px] h-full' />
                </div>
                <div className="rounded-3xl bg-[#E6E6E6] text-white px-2.5 rounded-md">
                    <Image src={DownIconTopNav} alt="Down Icon Top Nav" className='py-2 px-0.5 w-[20px] h-full' />
                </div>
            </div>
        </div>
    )
}

export default TopNav