import React from 'react'
import Image from 'next/image'
import BottomCardLogo from '../public/bottomcardlogo.svg';

const NavBottomCard = () => {
    return (
        <div className="bg-[#353C53] flex rounded-md mx-3 h-16">
            <Image src={BottomCardLogo} alt="Company Logo" className='px-[10px]' width={65} height={65} />
            <div className="flex flex-col gap-y-0.5">
                <h2 className="text-white/80 font-normal text-sm px-2.5 py-1.5 whitespace-nowrap">Available Credits</h2>
                <p className="text-white underline font-normal text-sm px-2.5 py-1 whitespace-nowrap">222.10</p>
            </div>
        </div>
    )
}

export default NavBottomCard