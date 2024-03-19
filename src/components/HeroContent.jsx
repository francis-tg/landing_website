import { Button } from "@radix-ui/themes";
import React from "react";
import heroeImg from "../img/undraw_teaching_re_g7e3.svg";

function HeroContent() {
	return (
		<div className='py-24 mx-auto max-w-7xl'>
			<div className='flex flex-col lg:flex-row items-center justify-center mt-12 mx-12 lg:gap-52'>
				<div className='lg:w-1/2'>
					<div className='flex flex-col gap-3 mb-8'>
						<h1 className='text-4xl lg:text-7xl'>
							Lessons and insights
						</h1>
						<h3 className='text-4xl lg:text-7xl  text-green-500'>
							from 8 years
						</h3>
						<p className='text-gray-500 '>
							Where to grow your business as a photographer: site or social
							media
						</p>
					</div>
					<div className=''>
						<Button
							className='cursor-pointer'
							size={"4"}>
							Register
						</Button>
					</div>
				</div>
				<div className='lg:w-1/2'>
					<img
						src={heroeImg}
						className='w-full lg:w-96'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

export default HeroContent;
