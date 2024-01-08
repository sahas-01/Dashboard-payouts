import React from 'react'

const HomeCard = ({heading,text}) => {
    return (
        <div className='bg-white text-black w-[590px] h-[118px] rounded-sm flex flex-col gap-4 p-[20px] shadow-sm'>
            <p className='text-[#4D4D4D] font-normal'>{heading}</p>
            <h1 className='font-medium text-[32px]'>{text}</h1>
        </div>
    )
}

export default HomeCard