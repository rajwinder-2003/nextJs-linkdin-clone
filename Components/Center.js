import React from 'react'
import Post from './Post'
import TopCenter from './TopCenter'

const Center = () => {
  return (
    <div className='mx-4 my-5 w-[33rem]'>
        <TopCenter/>
        <hr className='my-4 to-blue-700' />
        <Post/>
    </div>
  )
}

export default Center