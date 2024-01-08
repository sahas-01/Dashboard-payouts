import React from 'react'

const HomeCard = ({heading,text}) => {
    return (
        <div className='bg-white text-black w-3/4 h-[100px] rounded-sm'>
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    )
}

export default HomeCard