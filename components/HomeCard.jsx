import React from 'react'

const HomeCard = ({heading,text}) => {
    return (
        <div className='bg-white text-black w-1/2 rounded-lg'>
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    )
}

export default HomeCard