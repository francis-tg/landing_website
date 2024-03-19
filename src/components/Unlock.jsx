import React from "react";
import UnlockImg from "../img/undraw_access_account_re_8spm.svg";
import { Button, Heading } from "@radix-ui/themes";

function Unlock() {
	return (
		<div className='flex justify-center items-center flex-col p-5 mb-8'>
			<div className='flex flex-col lg:flex-row items-center justify-center lg:w-3/4 gap-12'>
				<img
					src={UnlockImg}
					alt=''
					className='w-1/2 lg:w-1/4 mb-8 lg:mb-0'
				/>
				<div className='w-full lg:w-1/2'>
					<Heading className='mb-5 text-center lg:text-left'>
						The unseen of spending three years at pixelgrade
					</Heading>
					<p className='mb-5 text-gray-500 text-center lg:text-left'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
						nostrum quos, quasi nobis debitis corporis odio deleniti tenetur
						iste dolore sapiente minus itaque corrupti tempora doloribus tempore
						vitae cupiditate animi?
					</p>
					<div className='flex justify-center lg:justify-start'>
						<Button size='4'>Learn more</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Unlock;
