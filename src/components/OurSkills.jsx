import React from "react";
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaPhp,
	FaPython,
	FaNodeJs,
} from "react-icons/fa6";

function OurSkills() {
	return (
		<div className='p-3'>
			<div className='flex flex-col justify-center items-center gap-3 py-5 mb-8'>
				<h1 className='text-center text-4xl font-bold'>Our Skills</h1>
				<p className='text-lg text-gray-500'>
					Our skills that are proved by our works
				</p>
			</div>
			<div className='flex flex-wrap justify-center items-center gap-8 lg:gap-24'>
				<FaHtml5 className='hover:text-amber-600 duration-300 cursor-pointer text-3xl lg:text-5xl' />
				<FaCss3 className='hover:text-blue-600 duration-300 cursor-pointer text-3xl lg:text-5xl' />
				<FaJs className='hover:text-yellow-400 duration-300 cursor-pointer text-3xl lg:text-5xl' />
				<FaPhp className='hover:text-blue-900 duration-300 cursor-pointer text-3xl lg:text-5xl' />
				<FaPython className='hover:text-yellow-500 duration-300 cursor-pointer text-3xl lg:text-5xl' />
				<FaNodeJs className='hover:text-green-500 duration-300 cursor-pointer text-3xl lg:text-5xl' />
			</div>
		</div>
	);
}

export default OurSkills;
