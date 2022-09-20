/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const LeftSidebar = () => {
  return (
    <>
    <div className='py-5'>
        <div className='w-[14rem] border rounded-lg bg-white'>
            <div className='bg-[#a0b4b7] h-[3.5rem] rounded-t-lg'></div>
            <button className='hover:underline decoration-blue-600'>
                <img className='h-[4rem] rounded-full mx-[5.25rem] -mt-[1.75rem]' src="img1.jpeg" alt="" />
                <h1 className='mt-5 font-semibold'>gagga singh</h1>
            </button>
            <p className='text-center text-xs text-gray-500 w-[14.80rem] px-5 mt-1 mb-4'>
                Student at Indira Gandhi National Open University
            </p>
            <hr />
            <div className='secondbox'>
                <ul className='py-3'>
                    <li className='hover:cursor-pointer hover:bg-[#ebebeb] py-1 px-4 flex justify-between'>
                        <span className=''>
                        <p className='text-xs text-gray-500'>Connections</p>
                        <h1 className='text-xs font-semibold text-gray-700'>Grow your network</h1>
                        </span>
                        <img className='h-5' src="man.png" alt="" />
                    </li>
                </ul>
            </div>
            <hr />
            <div className='thirdbox flex'>
                <button className='py-4 hover:cursor-pointer hover:bg-[#ebebeb] w-full'>
                    <p className='text-xs text-gray-400'>Access exclusive tools & insights</p>
                    <span>
                        <ul>
                            <li className='text-xs font-semibold underline hover:text-blue-700 hover:decoration-blue-700'>
                                Try Premium for free
                            </li>
                        </ul>
                    </span>
                </button>
            </div>
            <hr />
            <div className='fourthbox flex'>
                <button className='py-3 hover:cursor-pointer hover:bg-[#ebebeb] w-full flex px-3'>
                    <img className='h-7' src="saved.png" alt="" />
                    <span>
                        <ul>
                            <li className='text-sm font-medium text-gray-600'>
                                My items
                            </li>
                        </ul>
                    </span>
                </button>
            </div>
        </div>

        {/* seconde div fixed */}

        <div className='w-[14rem] border rounded-lg bg-white mt-2 sticky top-6'>
                <div className='my-3'>
                    <ul className='px-4 pt-1 space-y-4'>
                        <li className='text-xs font-medium text-blue-700 hover:underline hover:cursor-pointer'>Groups</li>
                        <li className='text-xs font-medium text-blue-700 hover:underline hover:cursor-pointer flex justify-between'>Events
                        <span><img className='h-3' src="plus.png" alt="" /></span>
                        </li>
                        <li className='text-xs font-medium text-blue-700 hover:underline hover:cursor-pointer'>Followed Hashtags</li>
                    </ul>
                </div>
                <hr />
                <div className='flex justify-center'>
                    <button className='bg-[#ebebeb] py-3 w-full hover:bg-white'>
                        Discover more
                    </button>
                </div>
        </div>
    </div>
    </>
  )
}
