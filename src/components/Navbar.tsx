import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<>
			<nav className='relative max-w-[840px] flex justify-between items-center mx-auto py-5 px-4'>
				<div>
					<img src={Logo} alt='' />
				</div>
				<ul className='hidden md:flex items-center space-x-5 text-[#0A2935] font-medium text-base'>
					<li>
						<Link to=''>Security</Link>
					</li>
					<li>
						<Link to=''>System</Link>
					</li>
					<Link to=''>
						<button className='bg-[#CDEBFF] border-[3px] border-[#25ABE233] text-[#25ABE2] py-3 px-5 rounded-xl font-semibold text-sm'>
							Connect Wallet
						</button>
					</Link>
				</ul>
				<button
					className='block md:hidden'
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					<IoMdMenu size={24} />
				</button>
			</nav>

			{/* Mobile Menu */}
			{/* {isMobileMenuOpen && ( */}
			<div
				className={`fixed top-0 left-0 w-80 h-screen bg-[#d5f0fb] z-50 border-r py-5 px-4 transition-transform duration-300 ease-in-out transform ${
					isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='flex flex-col h-full'>
					<div className='mb-10'>
						<img src={Logo} alt='' />
					</div>
					<ul className='flex-1 flex flex-col'>
						<div className='flex-1 space-y-2'>
							<li
								className={`transition-all duration-300 ease-in-out font-extrabold font-base rounded-lg py-3 px-3 bg-[#e2f7ff] cursor-pointer`}
							>
								Home
							</li>
							<li className='transition-all duration-300 ease-in-out font-extrabold font-base rounded-lg py-3 px-3 hover:bg-[#e2f7ff] cursor-pointer'>
								Security
							</li>
							<li className='transition-all duration-300 ease-in-out font-extrabold font-base rounded-lg py-3 px-3 hover:bg-[#e2f7ff] cursor-pointer'>
								System
							</li>
						</div>
						<div className='mt-auto pb-2'>
							<Link to=''>
								<button className='w-full bg-[#CDEBFF] border-[3px] border-[#25ABE233] text-[#25ABE2] py-3 px-5 rounded-xl font-semibold text-sm'>
									Connect Wallet
								</button>
							</Link>
						</div>
					</ul>
				</div>
			</div>
			{/* )} */}
		</>
	);
};

export default Navbar;
