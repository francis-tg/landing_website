import React from "react";
import {
	PiBuildingsLight,
	PiUsersThin,
	PiUsersThreeThin,
} from "react-icons/pi";

function Features() {
	return (
		<div className='flex flex-col justify-center items-center mt-12 py-10 px-4 lg:px-12'>
			<div className='flex  flex-col gap-3 w-full lg:w-[70%] text-center mb-12'>
				<h1 className='text-4xl font-bold first-letter:text-green-500 leading-[4rem]'>
					Manage your entire community in a single system
				</h1>
				<p className='text-gray-500'>Who is Nexcent suitable for?</p>
			</div>
			<div className='grid  grid-cols-1 lg:grid-cols-3 gap-8 w-full lg:w-[70%]'>
				<FeatureCard
					icon={
						<PiUsersThin
							size={50}
							className='text-green-500 z-10'
						/>
					}
					title='Membership organisations'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aperiam voluptas libero dignissimos et amet harum. Ad iusto hic commodi dignissimos omnis maxime? Eligendi ea, quis laborum id dolorem laboriosam?'
				/>
				<FeatureCard
					icon={
						<PiBuildingsLight
							size={50}
							className='text-green-500 z-10'
						/>
					}
					title='National Associations'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aperiam voluptas libero dignissimos et amet harum. Ad iusto hic commodi dignissimos omnis maxime? Eligendi ea, quis laborum id dolorem laboriosam?'
				/>
				<FeatureCard
					icon={
						<PiUsersThreeThin
							size={50}
							className='text-green-500 z-10'
						/>
					}
					title='Clubs and Groups'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aperiam voluptas libero dignissimos et amet harum. Ad iusto hic commodi dignissimos omnis maxime? Eligendi ea, quis laborum id dolorem laboriosam?'
				/>
			</div>
		</div>
	);
}

const FeatureCard = ({ icon, title, description }) => {
	return (
		<div className='hover:bg-green-400 duration-300 delay-200 hover:cursor-pointer hover:text-white hover-card-group flex flex-col items-center justify-between bg-gray-100 p-8 rounded-xl'>
			<div className='relative mb-3'>
				{icon}
				<div className='w-12 h-12 bg-green-100 rounded-tl-xl rounded-br-xl absolute top-0 -right-3 -z-10'></div>
			</div>
			<h1 className='text-xl font-bold'>{title}</h1>
			<p className='text-gray-500 text-center'>{description}</p>
		</div>
	);
};

export default Features;
