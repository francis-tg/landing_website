import React from 'react'
import {
	PiBuildingsLight,
	PiUsersThin,
	PiUsersThreeThin,
} from "react-icons/pi";
function Features() {
  return (
		<div className='flex flex-col justify-center items-center mt-12 py-10 px-12'>
			<div className='flex flex-col gap-3 w-[32%] mb-12 '>
				<h1 className='text-center text-4xl font-bold first-letter:text-green-500 leading-[4rem]'>
					Manage your entire community in a single system
				</h1>
				<p className='text-gray-500 text-center'>
					Who is nexcent suitable for?
				</p>
			</div>
			<div className='flex gap-12 justify-start items-center w-[70%] p-8'>
				<div className='w-full text-center flex gap-2 flex-col items-center justify-between'>
					<div className='relative'>
						<div className=' w-12 h-12 bg-green-100 rounded-tl-xl rounded-br-xl absolute top-0 -right-3 -z-10'></div>
						<PiUsersThin
							size={50}
							className='text-green-500 z-10'
						/>
					</div>
					<h1 className='text-xl font-bold'>Membership organisations</h1>
					<p className='text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						aperiam voluptas libero dignissimos et amet harum. Ad iusto hic
						commodi dignissimos omnis maxime? Eligendi ea, quis laborum id
						dolorem laboriosam?
					</p>
				</div>
				<div className='w-full text-center flex gap-2 flex-col items-center justify-between'>
					<div className='relative'>
						<div className=' w-12 h-12 bg-green-100 rounded-tl-xl rounded-br-xl absolute top-0 -right-3 -z-10'></div>
						<PiBuildingsLight
							size={50}
							className='text-green-500 z-10'
						/>
					</div>
					<h1 className='text-xl font-bold'>National Associations</h1>
					<p className='text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						aperiam voluptas libero dignissimos et amet harum. Ad iusto hic
						commodi dignissimos omnis maxime? Eligendi ea, quis laborum id
						dolorem laboriosam?
					</p>
				</div>
				<div className='w-full text-center flex gap-2 flex-col items-center justify-between'>
					<div className='relative'>
						<div className=' w-12 h-12 bg-green-100 rounded-tl-xl rounded-br-xl absolute top-0 -right-3 -z-10'></div>
						<PiUsersThreeThin
							size={50}
							className='text-green-500 z-10'
						/>
					</div>
					<h1 className='text-xl font-bold'>Clubs and Groups</h1>
					<p className='text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						aperiam voluptas libero dignissimos et amet harum. Ad iusto hic
						commodi dignissimos omnis maxime? Eligendi ea, quis laborum id
						dolorem laboriosam?
					</p>
				</div>
			</div>
		</div>
	);
}

export default Features