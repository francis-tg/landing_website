import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
		<nav className='flex justify-between items-center px-8 py-5'>
			<Link
				to={"/"}
				className='text-2xl font-bold'>
				Nexcent
			</Link>
			<div className='flex justify-center gap-5 items-center'>
				<Link to={"#/"}>Home</Link>
				<Link to={"#/"}>Service</Link>
				<Link to={"#/"}>Feature</Link>
				<Link to={"#/"}>Product</Link>
				<Link to={"#/"}>Testimonial</Link>
				<Link to={"#/"}>FAQ</Link>
			</div>
			<div className='flex justify-end gap-5 items-center'>
				<Link to={"/login"} className='text-green-500'>Login</Link>
				<Link to={"#/"} className='bg-green-500 px-5 py-1.5 text-white rounded-lg'>Sign up</Link>
			</div>
		</nav>
	);
}

export default Navbar