import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { PiInstagramLogo, PiFacebookLogo, PiYoutubeLogo } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Button, Heading, TextField } from "@radix-ui/themes";

function Footer() {
	return (
		<div className='bg-slate-800 p-10 text-white'>
			<div className='flex flex-col lg:flex-row gap-10 justify-around'>
				<div className='flex flex-col gap-5'>
					<Heading>Nexcent</Heading>
					<div className='text-gray-300'>
						<p>Copyright &copy; 2024 Cisco dev.</p>
						<p>All rights reserved</p>
					</div>

					<div className='flex gap-5 text-3xl'>
						<PiInstagramLogo className='bg-gray-500 p-1 rounded-xl' />
						<PiFacebookLogo className='bg-gray-500 p-1 rounded-xl' />
						<PiYoutubeLogo className='bg-gray-500 p-1 rounded-xl' />
					</div>
				</div>
				<div className='flex flex-col gap-3'>
					<Heading size={"4"}>Company</Heading>
					<div className='flex flex-col gap-2 text-gray-300'>
						<Link to={"#/"}>About Us</Link>
						<Link to={"#/"}>Blog</Link>
						<Link to={"#/"}>Contact Us</Link>
						<Link to={"#/"}>Pricing</Link>
						<Link to={"#/"}>Testimonials</Link>
					</div>
				</div>
				<div className='flex flex-col gap-3'>
					<Heading size={"4"}>Support</Heading>
					<div className='flex flex-col gap-2 text-gray-300'>
						<Link to={"#/"}>Help Center</Link>
						<Link to={"#/"}>Terms of Service</Link>
						<Link to={"#/"}>Legal</Link>
						<Link to={"#/"}>Privacy Policy</Link>
						<Link to={"#/"}>Status</Link>
					</div>
				</div>
				<div className='flex flex-col gap-3'>
					<Heading size={"4"}>Stay up to date</Heading>
					<div className='flex gap-2'>
						<TextField.Root>
							<TextField.Input
								size={"3"}
								placeholder='Enter your email'
							/>
							<TextField.Slot>
								<FaEnvelope />
							</TextField.Slot>
						</TextField.Root>
						<Button
							className='cursor-pointer'
							size={"3"}>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
