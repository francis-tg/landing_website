import { Button } from '@radix-ui/themes';
import React from 'react'
import heroeImg from "../img/undraw_teaching_re_g7e3.svg";
function HeroContent() {
  return (
		<div className='py-24'>
			<div className='flex items-center justify-center mt-12 mx-12 gap-52'>
				<div>
					<div className='flex flex-col gap-3 mb-8'>
						<h1 className='text-7xl'>Lessons and insights</h1>
						<h3 className='text-7xl text-green-500'>from 8 years</h3>
						<p className='text-gray-500'>
							Where to gro your business as photographer: site or social media
						</p>
                  </div>
                  <Button className='cursor-pointer' size={"4"}>Register</Button>
              </div>
              <div>
                  <img src={heroeImg} className='w-96' alt="" />
              </div>
			</div>
		</div>
	);
}

export default HeroContent