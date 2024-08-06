"use client"
import React from 'react'

const LastStep = () => {
    return (
        <div>
            <h1 className='text-center text-lg md:text-2xl lg:text-[32px] font-semibold	mb-16 text-[#2C2C2C]'>Authentication</h1>

            <div className='flex md:w-[450px] lg:w-[600px] mx-auto flex-col'>
                <label className='mb-3 text-start font-semibold' htmlFor="Password">Password*</label>
                <input id='Password' placeholder='Enter your password' className=' px-3 py-4 w-full rounded-md border border-gray-300 outline-[#EF4887]' type="password" />
            </div>
            <div className='flex md:w-[450px] lg:w-[600px] mx-auto flex-col mt-8'>
                <label className='mb-3 text-start font-semibold' htmlFor="confirmPassword">Confirm password*</label>
                <input id='confirmPassword' placeholder='Confirm password' className=' px-3 py-4 w-full rounded-md border border-gray-300 outline-[#EF4887]' type="password" />
            </div>
            <div className='flex md:w-[450px] lg:w-[550px] mx-auto  mt-8'>
                <input id='accept' className='me-2  w-5 h-5 accent-[#EF4887] ' type="checkbox" />
                <label className='mb-3 text-start font-semibold select-none text-sm' htmlFor="accept">I have read and accept the <span className='underline text-[#6315DB]'>Privacy Policy</span> and <span className='underline text-[#6315DB]'>Terms of Service</span> </label>
            </div>


            <div className='flex justify-end'>
                <button className=' flex items-center text-base mt-10 hover:opacity-70 bg-[#6315DB] text-white px-10 py-3 rounded-lg font-medium '>
                    Confirm

                </button>
            </div>

        </div>
    )
}

export default LastStep
