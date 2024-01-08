import React from 'react'

const TopNav = () => {
    return (
        <div className='flex bg-white justify-between my-2'>
            <div className='flex gap-2'>
                <h1>Payments</h1>
                <p>?</p>
                <p>How it works</p>
            </div>
            <input type="text" placeholder="Search features,tutorials,etc." className="border border-gray-300 rounded-md px-2 py-1 w-[200px] mr-2" />
            <div className="flex gap-1">
                <div className="rounded-xl bg-[#94a3b8] text-white px-4 py-1 rounded-md"></div>
                <div className="rounded-xl bg-[#94a3b8] text-white px-4 py-1 rounded-md"></div>
            </div>
        </div>
    )
}

export default TopNav