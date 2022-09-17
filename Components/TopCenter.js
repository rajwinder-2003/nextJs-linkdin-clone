/* eslint-disable @next/next/no-img-element */
import React from 'react'

const TopCenter = () => {
  return (
    <div className='bg-white border rounded-lg w-[32rem] mx-auto'>
        <div className='flex px-4 pt-4 space-x-2'>
            <img className='rounded-full h-12' src="img1.jpeg" alt="" />
            <button className='text-sm font-medium text-gray-500 border rounded-3xl w-full'>
            Talk to your network about your interests
            </button>
        </div>
        <div className='px-4 my-1'>
            <ul className='flex justify-between'>
                <li className='flex hover:bg-[#ebebeb] px-2 py-3 rounded-lg hover:cursor-pointer'>
                    <img className='h-6' src="photo.png" alt="" />
                    <span className='text-sm font-medium text-gray-500 ml-4 mt-1'>Photo</span>
                </li>
                <li className='flex hover:bg-[#ebebeb] px-2 py-3 rounded-lg hover:cursor-pointer'>
                    <img className='h-6 mt-1' src="video.png" alt="" />
                    <span className='text-sm font-medium text-gray-500 ml-4 mt-1'>Video</span>
                </li>
                <li className='flex hover:bg-[#ebebeb] px-2 py-3 rounded-lg hover:cursor-pointer'>
                    <img className='h-6' src="event.png" alt="" />
                    <span className='text-sm font-medium text-gray-500 ml-4 mt-1'>Event</span>
                </li>
                <li className='flex hover:bg-[#ebebeb] px-2 py-3 rounded-lg hover:cursor-pointer'>
                    <img className='h-5' src="artical.png" alt="" />
                    <span className='text-sm font-medium text-gray-500 ml-4 mt-1'>Write artical</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TopCenter