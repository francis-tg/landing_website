import React from "react";
import {
	PiCreditCardLight,
	PiUsersThreeLight,
	PiUsersBold,
	PiHandTapBold,
} from "react-icons/pi";

function State() {
	return (
		<div className='bg-gray-200 p-8 flex justify-center items-center flex-col'>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
				<div className='md:col-span-2'>
					<h1 className='text-3xl font-bold text-center md:text-left'>
						Helping a local
						<p className='text-green-500'>Business reinvent itself</p>
					</h1>
				</div>
				<div className='grid grid-cols-2 gap-10 md:col-span-2'>
					<StatItem
						icon={
							<PiUsersBold
								size={40}
								className='text-green-500'
							/>
						}
						value='2.245.341'
						label='Members'
					/>
					<StatItem
						icon={
							<PiUsersThreeLight
								size={40}
								className='text-green-500'
							/>
						}
						value='2.245.341'
						label='Members'
					/>
					<StatItem
						icon={
							<PiHandTapBold
								size={40}
								className='text-green-500'
							/>
						}
						value='2.245.341'
						label='Members'
					/>
					<StatItem
						icon={
							<PiCreditCardLight
								size={40}
								className='text-green-500'
							/>
						}
						value='2.245.341'
						label='Members'
					/>
				</div>
			</div>
		</div>
	);
}

function StatItem({ icon, value, label }) {
	return (
		<div className='flex gap-3 items-center'>
			{icon}
			<div>
				<div className='text-xl font-bold'>{value}</div>
				<p className='text-sm text-gray-500'>{label}</p>
			</div>
		</div>
	);
}

export default State;
