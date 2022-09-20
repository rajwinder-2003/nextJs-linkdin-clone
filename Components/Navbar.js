/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    
    const [search, setSearch] = useState(false)

    const [searchValue, setSearchValue] = useState("")

    const handelFirst = () => {
        setSearchValue("#hiring")
    }

    const handelSecond = () => {
        setSearchValue("#jobadvice")
    }

    const handelThird = () => {
        setSearchValue("covid-19")
    }

    const handelFourth = () => {
        setSearchValue("great resignation")
    }

    const [showProfile, setShowProfile] = useState(false)

    const [showSidewar, setShowSidewar] = useState(false)

  return (
    <div>
        <div className='flex justify-between mx-28 bg-white'>
            <div className='flex space-x-3 py-2'>
               <img className='h-9' src="linkedin.png" alt="" />
               <div onClick={() => setSearch(!search)} className={search ? "bg-[#eef3f8] flex h-9 border-black border-2 rounded-[0.300rem]" : "bg-[#eef3f8] flex h-9"}>
               <span className=''><img className='h-3 mt-3 ml-4' src="search.png" alt="" /></span>
               <input value={searchValue} className={search ? "outline-none bg-[#eef3f8] text-sm font-light  h-8 ml-2 w-[20rem] rounded-md" : "outline-none bg-[#eef3f8] text-sm font-light  h-8 ml-2 w-52 rounded-md"} onChange={(e)=>setSearchValue(e.target.value)} type="search" placeholder='Search' />
               </div>
            </div>
            <div className='flex'>
                <ul className='flex space-x-8 pt-2 ml-4'>
                    <Link href='/'>
                    <li className='text-xs font-light text-center hover:cursor-pointer underline underline-offset-[5px] decoration-2 '><img className='h-6 mx-auto' src="home.png" alt="" /> Home</li>
                    </Link>
                    <Link href='/network'>
                    <li className='text-xs font-light text-center hover:cursor-pointer'><img className='h-6 mx-auto' src="network.png" alt="" /> My Network</li>
                    </Link>
                    <Link href='/jobs'>
                    <li className='text-xs font-light text-center hover:cursor-pointer'><img className='h-6 mx-auto' src="jobs.png" alt="" /> Jobs</li>
                    </Link>
                    <Link href="/message">
                    <li className='text-xs font-light text-center hover:cursor-pointer'><img className='h-6 mx-auto' src="message.png" alt="" /> Messaging</li>
                    </Link>
                    <Link href='/notification'>
                    <li className='text-xs font-light text-center hover:cursor-pointer'><img className='h-6 mx-auto' src="noti.png" alt="" /> Notifications</li>
                    </Link>
                    <button onClick={() => setShowProfile(!showProfile)} className=''>
                    <img className='h-6 rounded-xl mx-auto -mt-1' src="img1.jpeg" alt="" />
                    <span className='text-sm font-light -mt-5'>Me
                    </span>
                    </button>
                </ul>
                <div className='flex ml-4'>
                    <button onClick={() => setShowSidewar(!showSidewar)} className='mx-10 mt-1'>
                        <img className='h-6' src="menu.png" alt="" />
                        <span className='text-sm font-light flex -ml-2'>Work
                            <img className='h-5' src="drop.png" alt="" />
                        </span>
                    </button>
                    <h1 className='w-1/2 text-center text-[#eab555] text-sm underline mt-2 hover:cursor-pointer'>
                    Try Premium for free
                    </h1>
                </div>
            </div>
        </div>

            {/* searchbar suggestion */}
            <div className={search ? "mx-[10rem] bg-white w-[25.5rem] rounded-md absolute" : "hidden"}>
                <h1 className='px-3 pt-3'>Try searching for</h1>
                <ul className='space-y-1 mt-5 pb-5'>
                    <li onClick={handelFirst} className='flex px-3 hover:bg-[#ebebeb] py-3 hover:cursor-pointer'><span><img className='h-4 mt-1 mr-5' src="search.png" alt="" /></span>#hiring</li>
                    <li onClick={handelSecond} className='flex px-3 hover:bg-[#ebebeb] py-3 hover:cursor-pointer'><span><img className='h-4 mt-1 mr-5' src="search.png" alt="" /></span>#jobadvice</li>
                    <li onClick={handelThird} className='flex px-3 hover:bg-[#ebebeb] py-3 hover:cursor-pointer'><span><img className='h-4 mt-1 mr-5' src="search.png" alt="" /></span>covid-19</li>
                    <li onClick={handelFourth} className='flex px-3 hover:bg-[#ebebeb] py-3 hover:cursor-pointer'><span><img className='h-4 mt-1 mr-5' src="search.png" alt="" /></span>great resignation</li>
                </ul>
            </div>

            {/* show user profle */}
            <div className={showProfile ? "bg-white w-[18rem] rounded-lg ml-[45rem] absolute" : "hidden"}>
                <div className='px-2 py-2'>
                    <button className='flex'>
                        <img className='h-12 rounded-full mt-2' src="img1.jpeg" alt="" />
                        <div className='mx-1'>
                        <h1 className='text-start text-base font-semibold'>gagga singh</h1>
                        <p className='text-start w-48 text-sm'>Student at Indira Gandhi National Open University</p>
                        </div>
                    </button>
                    <button className='border-blue-600 border-[1px] w-full rounded-xl mt-1 text-blue-600 text-sm hover:bg-blue-200'>
                        View Profile
                    </button>
                </div>
                <hr />
                <div className='px-2 py-2'>
                    <h1 className='font-semibold'>Account</h1>
                    <ul className='space-y-3'>
                        <li></li>
                        <li className='text-base hover:cursor-pointer hover:underline font-semibold text-gray-500'>Try Premium for free</li>
                        <li className='text-sm hover:cursor-pointer hover:underline'>Settings & Privacy</li>
                        <li className='text-sm hover:cursor-pointer hover:underline'>Help</li>
                        <li className='text-sm hover:cursor-pointer hover:underline'>Language</li>
                    </ul>
                </div>
                <hr />
                <div className='px-2 py-2'>
                    <h1 className='font-semibold'>Manage</h1>
                    <ul className='space-y-3'>
                        <li></li>
                        <li className='text-sm hover:cursor-pointer hover:underline'>Posts & Activity</li>
                        <li className='text-sm hover:cursor-pointer hover:underline'>Jobs Posting Account</li>
                    </ul>
                </div>
                <hr />
                <div className='px-2 pt-1 pb-2'>
                    <ul className='space-y-2'>
                        <li></li>
                        <li className='text-sm hover:cursor-pointer hover:underline'>Sign Out</li>
                    </ul>
                </div>
            </div>

            {/* sidebar for Work */}
            <div className={showSidewar ? "flex justify-end" : "hidden"}>
                <div className='px-4 w-[25rem] rounded-xl shadow-2xl py-2 absolute bg-white'>
                    <nav className='flex justify-between bg-white sticky top-0'>
                        <div>
                            <ul className='my-2 px-2'>
                            <li className='text-xl font-semibold'>Work</li>
                            </ul>
                        </div>
                        <div className=''>
                            <button onClick={() => setShowSidewar(showSidewar == false)}>
                            <img className='h-4 my-4 px-2' src="close.png" alt="" />
                            </button>
                        </div>
                    </nav>
                    
                    <div className='border my-2 rounded-md'>
                        <h1 className='px-5 font-semibold py-4'>
                        Visit More LinkedIn Products
                        </h1>
                        <hr />
                        <div className='px-5 py-4'>
                            <div className='flex justify-between'>
                                <button>
                                    <div className='border rounded-md hover:shadow-xl'><p className='text-center text-xs px-1 py-3'>Ler</p></div>
                                    <span className='text-xs text-center'>Learning</span>
                                </button>
                                <button>
                                    <div className='border rounded-md hover:shadow-xl'><p className='text-center text-xs px-1 py-3'>Ins</p></div>
                                    <span className='text-xs text-center'>Insights</span>
                                </button>
                                <button>
                                    <div className='border rounded-md hover:shadow-xl'><p className='text-center text-xs px-1 py-3'>Pos</p></div>
                                    <span className='text-xs text-center'>Post a job</span>
                                </button>
                                <button>
                                    <div className='border rounded-md hover:shadow-xl'><p className='text-center text-xs px-1 py-3'>Adv</p></div>
                                    <span className='text-xs text-center'>Advertise</span>
                                </button>
                            </div>
                            <div className='flex justify-between mt-4'>
                                <button>
                                    <div className='border rounded-md hover:shadow-xl'><p className='text-center text-xs px-1 py-3'>Fin</p></div>
                                    <span className='text-xs text-center'>Find Leads</span>
                                </button>
                                <button>
                                    <div className='border rounded-md hover:shadow-xl'><p className='text-center text-xs px-1 py-3'>Gro</p></div>
                                    <span className='text-xs text-center'>Groups</span>
                                </button>
                                <button>
                                    <div className='border rounded-md hover:shadow-xl'><p className='text-center text-xs px-1 py-3'>Ser</p></div>
                                    <span className='text-xs text-center'>Services</span>
                                </button>
                                <button>
                                    <div className='border rounded-md hover:shadow-xl'><p className='text-center text-xs px-1 py-3'>Sal</p></div>
                                    <span className='text-xs text-center'>Salary</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border my-4 rounded-md'>
                        <h1 className='px-5 font-semibold py-4'>
                        LinkedIn Business Services
                        </h1>
                        <hr />
                        <div className='px-5 py-4'>
                            <div className='flex justify-between'>
                               <ul className='space-y-2'>
                                <li className='hover:cursor-pointer hover:underline decoration-blue-600'>
                                    <h1 className='text-sm font-semibold'>Talent Solutions</h1>
                                    <p className='text-xs'>Find, attract and recruit talent</p>
                                </li>
                                <li className='hover:cursor-pointer hover:underline decoration-blue-600'>
                                    <h1 className='text-sm font-semibold'>Sales Solutions</h1>
                                    <p className='text-xs'>Unlock sales opportunities</p>
                                </li>
                                <li className='hover:cursor-pointer hover:underline decoration-blue-600'>
                                    <h1 className='text-sm font-semibold'>Post a job for free</h1>
                                    <p className='text-xs'>Get your job in front of quality candidates</p>
                                </li>
                                <li className='hover:cursor-pointer hover:underline decoration-blue-600'>
                                    <h1 className='text-sm font-semibold'>Marketing Solutions</h1>
                                    <p className='text-xs'>Acquire customers and grow your business</p>
                                </li>
                                <li className='hover:cursor-pointer hover:underline decoration-blue-600'>
                                    <h1 className='text-sm font-semibold'>Learning Solutions</h1>
                                    <p className='text-xs'>Develop talent across your organization</p>
                                </li>
                               </ul>
                            </div>
                        </div>
                        <hr />
                        <ul>
                            <li className='hover:cursor-pointer hover:underline decoration-blue-600'>
                            <h1 className='px-5 font-semibold py-4'>
                            Create a Company Page +
                            </h1>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar