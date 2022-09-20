import React, { useState } from 'react'

const Post = () => {

	const data = [
		{"img":"post2.jpg", "id":"1"},
		{"img":"post1.jpg", "id":"2"},
		{"img":"post3.jpg", "id":"3"},
		{"img":"post4.png", "id":"4"},
		{"img":"post5.jpg", "id":"5"}
	]

	const [showmore, setShowmore] = useState(false)
	const [like, setLike] = useState(false)
	const [comment, setComment] = useState("")
	const [showCommentSection, setShowCommentSection] = useState(false)
	const [showComment, setShowComment] = useState(false)

	const handelPost = () => {
		setComment(comment)
		setShowComment(true)
	}

  return (
	<>
		{data.map((item) => (
			<div key={item.id} className='bg-white border rounded-lg w-[32rem] mx-auto my-4'>
			<div className='flex justify-between px-4 pt-1'>
				<div className='flex pt-1'>
						<button>
							<img className='h-10' src="linkedin.png" alt="" />
						</button>
					<div className='mx-2 hover:cursor-pointer'>
						<h1 className='text-sm font-medium hover:text-blue-700 hover:underline-offset-1 hover:underline hover:cursor-pointer decoration-1'>Linkedin</h1>
						<span className='text-xs'>Promoted</span>
					</div>
				</div>
	
				<div>
					<button className='hover:bg-[#ebebeb] rounded-full px-1 py-1'>
						<img className='h-6' src="option.png" alt="" />
					</button>
				</div>
	
			</div>
	
			<div className='px-4 pt-1'>
				<div className=''>
					<p className='text-sm'>
					It’s a diamond this time for Neeraj Chopra. The javelin ace has become the first sportsperson from India to win the coveted Diamond League Trophy, reports The Indian Express.
					<span className='ml-[14rem]'>
					<button onClick={() => setShowmore(!showmore)} className={showmore ? "hidden" : "text-sm text-gray-500"}>
						...see more
					</button>
					</span> 
					</p>
				</div>
				<div className={showmore ? "" : "hidden"}>
					<br />
					<p className='text-sm'>
					In the final at Zurich in the early hours of Friday, 24-year-old Chopra recorded a throw of 88.44 metres in his second attempt to land the title. In the last 13 months, he has won an Olympic gold medal, a silver at the World Championships and can now call himself a Diamond League Champion, the Press Trust of India reports. 
					</p>
					<br />
					<p className='text-sm'>
					Chopra won $30,000 in prize money and received a wild card for next year’s World Championships in Budapest. He had finished fourth in 2018 and seventh in 2017 at the Diamond League Finals. 
					</p>
					<br />
					<p className='text-sm'>
					The Diamond League is an elite track and field competition where athletes earn points in a championship style format to qualify for the grand finale. It is the most prestigious athletics meet outside the Olympics and World Championships, the report adds. 
					</p>
				</div>
			</div>
	
			<div className='pt-2'>
				<img src={item.img} alt="" />
				<div className='flex justify-between px-4 py-2'>
					<div className='flex'>
						<img className='h-5' src="like3.png" alt="" />
						<span className='text-xs ml-1'>{like ? 1 : 0}</span>
					</div>
					<div>
						<h1 className='text-xs'>
							0
							<span className='mx-1'>comments</span>
						</h1>
					</div>
				</div>
				<hr className='px-4' />
				<div className='py-1 px-2 flex justify-between'>
					<div>
						<button onClick={() => setLike(!like)} className='flex hover:bg-[#ebebeb] px-5 py-3 space-x-2 rounded-md'>
							{like ? (
								<img className='h-6' src="like2.png" alt="" />
							) : (
								<img className='h-6' src="like1.png" alt="" />
							)}
							<span className='text-sm text-gray-700 font-medium mt-1'>Like</span>
						</button>
					</div>
					<div>
						<button onClick={() => setShowCommentSection(!showCommentSection)} className='flex hover:bg-[#ebebeb] px-5 py-3 space-x-2 rounded-md'>
							<img className='h-6' src="comment.png" alt="" />
							<span className='text-sm text-gray-700 font-medium mt-1'>Comment</span>
						</button>
					</div>
					<div>
						<button className='flex hover:bg-[#ebebeb] px-5 py-3 space-x-2 rounded-md'>
							<img className='h-6' src="share.png" alt="" />
							<span className='text-sm text-gray-700 font-medium mt-1'>Share</span>
						</button>
					</div>
					<div>
						<button className='flex hover:bg-[#ebebeb] px-5 py-3 space-x-2 rounded-md'>
							<img className='h-6' src="send.png" alt="" />
							<span className='text-sm text-gray-700 font-medium mt-1'>Send</span>
						</button>
					</div>
				</div>
	
				{/* show comment section */}
	
				<div className={showCommentSection ? "" : "hidden"}>
					<div className='flex px-4'>
						<img className='h-10 rounded-full' src="img1.jpeg" alt="" />
						<input value={comment} className='border-2 outline-none border-gray-400 rounded-3xl w-full ml-2 px-2 text-sm' onChange={(e) => setComment(e.target.value)} type="text" placeholder='Add a comment...' />
					</div>
					<div className='px-16 py-4'>
						<button onClick={handelPost} className='text-sm bg-blue-700 text-white rounded-3xl px-4 font-medium py-1'>
							Post
						</button>
					</div>
	
					{/* comment section  */}
					<div className={showComment ? 'flex space-x-2 px-4 py-4' : 'hidden'}>
						<img className='h-10 rounded-full mt-2' src="img1.jpeg" alt="" />
						<div className='bg-[#ebebeb] w-full px-4 py-2 rounded-b-md rounded-r-md'>
							<h1 className='text-sm font-medium'>Gagga Singh</h1>
							<h1 className='mt-2'>{comment}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		))}
	</>
  )
}

export default Post