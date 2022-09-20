/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const RightSidebar = () => {

  const [showMore, setShowMore] = useState(false)

  return (
    <div className='my-5 w-[22rem]'>
        <div className='bg-white border rounded-lg w-[22rem]'>
          <h1 className='px-4 pt-3 font-semibold text-gray-700'>LinkedIn News</h1>
          <div>
            <div className='px-4 pt-2 hover:cursor-pointer hover:bg-[#ebebeb]'>
              <li className='flex-col text-sm font-medium text-gray-700'>
                NIT students land big offers
              </li>
              <span className='pl-6 text-xs text-gray-500'>22h ago • 2,780 readers</span>
            </div>
            <div className='px-4 pt-2 hover:cursor-pointer hover:bg-[#ebebeb]'>
              <li className='flex-col text-sm font-medium text-gray-700'>
              India’s most valuable brands
              </li>
              <span className='pl-6 text-xs text-gray-500'>22h ago • 692 readers</span>
            </div>
            <div className='px-4 pt-2 hover:cursor-pointer hover:bg-[#ebebeb]'>
              <li className='flex-col text-sm font-medium text-gray-700'>
                IIM-Bangalore takes first spot
              </li>
              <span className='pl-6 text-xs text-gray-500'>2d ago • 11,661 readers</span>
            </div>
            <div className='px-4 pt-2 hover:cursor-pointer hover:bg-[#ebebeb]'>
              <li className='flex-col text-sm font-medium text-gray-700'>
              Leverage Edu to hire 1,500
              </li>
              <span className='pl-6 text-xs text-gray-500'>33m ago • 40,549 readers</span>
            </div>
            <div className='px-4 pt-2 hover:cursor-pointer hover:bg-[#ebebeb]'>
              <li className='flex-col text-sm font-medium text-gray-700'>
              Young techies switching jobs more
              </li>
              <span className='pl-6 text-xs text-gray-500'>1d ago • 5,198 readers</span>
            </div>
          </div>
          <div className={showMore ? "" : "hidden"}>
            <div className='px-4 pt-2 hover:cursor-pointer hover:bg-[#ebebeb]'>
              <li className='flex-col text-sm font-medium text-gray-700'>
              Malls are back in business
              </li>
              <span className='pl-6 text-xs text-gray-500'>23h ago • 466 readers</span>
            </div>
            <div className='px-4 pt-2 hover:cursor-pointer hover:bg-[#ebebeb]'>
              <li className='flex-col text-sm font-medium text-gray-700'>
              Why it`s important to upskill in tech
              </li>
              <span className='pl-6 text-xs text-gray-500'>2d ago • 1,996 readers</span>
            </div>
            <div className='px-4 pt-2 hover:cursor-pointer hover:bg-[#ebebeb]'>
              <li className='flex-col text-sm font-medium text-gray-700'>
              Adobe to buy rival Figma for $20B
              </li>
              <span className='pl-6 text-xs text-gray-500'>14h ago • 16,190 readers</span>
            </div>
            <div className='px-4 pt-2 hover:cursor-pointer hover:bg-[#ebebeb]'>
              <li className='flex-col text-sm font-medium text-gray-700'>
              No-shows concern India Inc
              </li>
              <span className='pl-6 text-xs text-gray-500'>2d ago • 10,292 readers</span>
            </div>
            <div className='px-4 pt-2 hover:cursor-pointer hover:bg-[#ebebeb]'>
              <li className='flex-col text-sm font-medium text-gray-700'>
              Leverage Edu to hire 1,500
              </li>
              <span className='pl-6 text-xs text-gray-500'>22h ago • 2,780 readers</span>
            </div>
          </div>
          <div className='my-3 mx-7'>
            <button onClick={() => setShowMore(!showMore)} className='hover:bg-[#ebebeb] flex px-1 py-1 rounded-md text-sm font-medium text-gray-600'>
              {showMore ? (
                <>
                Show less
                <span><img className='h-4 mt-1 ml-1' src="up.png" alt="" /></span>
                </>
              ) : (
                <>
                Show more
                <span><img className='h-5' src="down.png" alt="" /></span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className='bg-white border rounded-lg w-[22rem] mt-2 sticky top-6'>
            <div className='flex justify-end mx-4 mt-2'>
              <h1 className='text-sm text-gray-600 mr-2'>Ad</h1>
              <button className=''>
                <img className='h-5' src="option.png" alt="" />
              </button>
            </div>
            <div className='mt-2'>
              <h1 className='text-xs text-gray-500 text-center'>You`ve got the skills, we`ve got the opportunities</h1>
              <div className='flex justify-center space-x-5 mt-4'>
                <img className='h-[4.5rem] rounded-full' src="img1.jpeg" alt="" />
                <button>
                <img className='h-[4.5rem]' src="aramco.jpg" alt="" />
                </button>
              </div>
            </div>
            <div className='my-5'>
              <h1 className='text-base text-gray-700 font-light text-center'>gagga, <span className='font-semibold text-gray-700'>aramco</span> is hiring!</h1>
              <div className='flex mt-5'>
                <button className='border border-blue-600 text-blue-700 font-semibold px-4 py-1 rounded-3xl mx-auto hover:bg-blue-50'>
                  Follow
                </button>
              </div>
            </div>
        </div>
        <div className='w-[22rem] mt-2 sticky top-[18rem]'>
          <div className='mx-[4rem] pt-5'>
              <div className='space-y-3'>
                <ul className='flex space-x-4 justify-center'>
                <li className='text-xs hover:text-blue-700 hover:underline hover:cursor-pointer'>About</li>
                <li className='text-xs hover:text-blue-700 hover:underline hover:cursor-pointer'>Accessibility</li>
                <li className='text-xs hover:text-blue-700 hover:underline hover:cursor-pointer'>Help Center</li>
                </ul>
                <ul className='flex space-x-4 justify-center'>
                <li className='text-xs hover:text-blue-700 hover:underline hover:cursor-pointer'>Privacy & Terms</li>
                <li className='text-xs hover:text-blue-700 hover:underline hover:cursor-pointer'>Ad Choices</li>
                </ul>
                <ul className='flex space-x-4 justify-center'>
                <li className='text-xs hover:text-blue-700 hover:underline hover:cursor-pointer'>Advertising</li>
                <li className='text-xs hover:text-blue-700 hover:underline hover:cursor-pointer'>Business Services</li>
                </ul>
                <ul className='flex space-x-4 justify-center'>
                <li className='text-xs hover:text-blue-700 hover:underline hover:cursor-pointer'>Get the LinkedIn app</li>
                <li className='text-xs hover:text-blue-700 hover:underline hover:cursor-pointer'>More</li>
                </ul>
              </div>
          </div>
          <div className='flex space-x-2 my-5 justify-center'>
            <img className='h-5' src="linkedin2.jpg" alt="" />
            <h1 className='text-xs'>LinkedIn Corporation © 2022</h1>
          </div>
        </div>
    </div>
  )
}

export default RightSidebar