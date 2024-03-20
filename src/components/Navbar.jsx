import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as Portal from "@radix-ui/react-portal";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			if (window.pageYOffset > 200) {
				document
					.querySelector("nav")
					.classList.add("fixed","w-full","bg-white","shadow-lg")
				
			}
			if (window.pageYOffset <= 100) {
				document
					.querySelector("nav")
					.classList.remove("fixed", "w-full", "bg-white", "shadow-lg");
				
			}
		});
		
	},[])

	return (
		<nav className='flex duration-300 z-10 transition  justify-between items-center px-8 py-5'>
			<Link
				to={"/"}
				className='text-2xl font-bold'>
				Nexcent
			</Link>

			{/* Burger Icon for mobile */}
			<button
				type='button'
				className='lg:hidden text-gray-500 focus:outline-none'
				onClick={toggleMenu}>
				<HamburgerMenuIcon className='w-6 h-6' />
			</button>

			{/* Responsive menu */}
			{isOpen && (
				<Portal.Root>
					<div
						className='fixed inset-0 z-50 bg-gray-800 bg-opacity-50'
						onClick={toggleMenu}></div>
					<div className='fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg'>
						<div className='flex flex-col p-5 space-y-4'>
							<Link
								to={"#/"}
								onClick={toggleMenu}>
								Home
							</Link>
							<Link
								to={"#/"}
								onClick={toggleMenu}>
								Service
							</Link>
							<Link
								to={"#/"}
								onClick={toggleMenu}>
								Feature
							</Link>
							<Link
								to={"#/"}
								onClick={toggleMenu}>
								Product
							</Link>
							<Link
								to={"#/"}
								onClick={toggleMenu}>
								Testimonial
							</Link>
							<Link
								to={"#/"}
								onClick={toggleMenu}>
								FAQ
							</Link>
						</div>
					</div>
				</Portal.Root>
			)}

			<div className='hidden lg:flex justify-center gap-5 items-center'>
				<Link to={"/"}>Home</Link>
				<Link to={"#/"}>Service</Link>
				<Link to={"#/"}>Feature</Link>
				<Link to={"#/"}>Product</Link>
				<Link to={"#/"}>Testimonial</Link>
				<Link to={"#/"}>FAQ</Link>
			</div>

			<div className='hidden lg:flex justify-end gap-5 items-center'>
				<Link
					to={"/login"}
					className='text-green-500'>
					Login
				</Link>
				<Link
					to={"#/"}
					className='bg-green-500 px-5 py-1.5 text-white rounded-lg'>
					Sign up
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
