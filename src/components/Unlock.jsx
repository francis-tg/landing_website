import React from 'react'
import UnlockImg from "../img/undraw_access_account_re_8spm.svg"
import { Button, Heading } from '@radix-ui/themes'
function Unlock() {
  return (
		<div className='flex justify-center items-center flex-col p-5 mb-8'>
			<div className='flex items-center justify-center w-1/2 gap-12'>
				<img
					src={UnlockImg}
					alt=''
					className=' w-1/4'
				/>
				<div className=' '>
					<Heading className='mb-5'>
						The unseen of spending three years at pixelgrade
					</Heading>
					<p className='mb-5 text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
						nostrum quos, quasi nobis debitis corporis odio deleniti tenetur
						iste dolore sapiente minus itaque corrupti tempora doloribus tempore
						vitae cupiditate animi?
					</p>
					<Button
						size='4'
						className='mb-5'>
						Learn more
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Unlock