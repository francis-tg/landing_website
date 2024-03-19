import React from 'react'
import {
	PiCreditCardLight,
	PiUsersThreeLight,
	PiUsersBold,
	PiHandTapBold,
} from "react-icons/pi";
function State() {
  return (
		<div className='bg-gray-200 p-8 flex justify-center items-center flex-col'>
			<div className='grid grid-cols-4 items-center gap-10'>
				<div className='col-span-2'>
					<h1 className='text-3xl font-bold'>
						Helping a local
						<p className='text-green-500'>Business reivent itself</p>
					</h1>
				</div>
				<div className=' grid grid-cols-2 gap-10'>
					<div className='flex gap-3 items-center'>
						<PiUsersBold
							size={40}
							className='text-green-500'
						/>
						<div>
							<div className='text-xl font-bold'>2.245.341</div>
							<p className='text-sm text-gray-500'>Members</p>
						</div>
					</div>
					<div className='flex gap-3 items-center'>
						<PiUsersThreeLight
							size={40}
							className='text-green-500'
						/>
						<div>
							<div className='text-xl font-bold'>2.245.341</div>
							<p className='text-sm text-gray-500'>Members</p>
						</div>
					</div>
					<div className='flex gap-3 items-center'>
						<PiHandTapBold
							size={40}
							className='text-green-500'
						/>
						<div>
							<div className='text-xl font-bold'>2.245.341</div>
							<p className='text-sm text-gray-500'>Members</p>
						</div>
					</div>
					<div className='flex gap-3 items-center'>
						<PiCreditCardLight
							size={40}
							className='text-green-500'
						/>
						<div>
							<div className='text-xl font-bold'>2.245.341</div>
							<p className='text-sm text-gray-500'>Members</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default State