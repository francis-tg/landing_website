import React from 'react'
import {FaHtml5,FaCss3,FaJs,FaPhp,FaPython,FaNodeJs} from "react-icons/fa6"

function OurSkills() {
  return (
		<div className='p-3'>
			<div className='flex flex-col justify-center items-center gap-3 py-5 mb-8'>
				<h1 className='text-center text-4xl font-bold'>Our Skills</h1>
				<p className='text-lg text-gray-500'>
					Our skills who is prouved by our works
				</p>
			</div>
			<div className='flex justify-center text-5xl text-gray-500 gap-24'>
				<FaHtml5 className='hover:text-amber-600 duration-300 cursor-pointer' />
				<FaCss3 className='hover:text-blue-600 duration-300 cursor-pointer' />
				<FaJs className='hover:text-yellow-400 duration-300 cursor-pointer' />
				<FaPhp className='hover:text-blue-900 duration-300 cursor-pointer' />
				<FaPython className='hover:text-yellow-500 duration-300 cursor-pointer' />
				<FaNodeJs className='hover:text-green-500 duration-300 cursor-pointer' />
			</div>
		</div>
	);
}

export default OurSkills