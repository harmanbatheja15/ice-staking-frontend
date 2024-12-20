import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { IoMdMenu } from 'react-icons/io';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

const walletButtonStyle = {
	backgroundColor: '#CDEBFF',
	borderWidth: '3px',
	borderColor: '#25ABE233',
	borderStyle: 'solid',
	color: '#25ABE2',
	paddingTop: '0.75rem', // py-3
	paddingBottom: '0.75rem', // py-3
	paddingLeft: '1.25rem', // px-5
	paddingRight: '1.25rem', // px-5
	borderRadius: '0.75rem', // rounded-xl
	fontWeight: '600', // font-semibold
	fontSize: '0.875rem', // text-sm
};

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { publicKey } = useWallet();

	const truncateText = (text: string, limit: number) => {
		if (text.length <= limit) return text;
		return text.slice(0, limit) + '...';
	};

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
					<WalletMultiButton
						style={walletButtonStyle}
						children={
							publicKey
								? truncateText(publicKey.toString(), 4) +
								  publicKey.toString().slice(-4)
								: 'Connect Wallet'
						}
					/>
				</ul>
				<button
					className='block md:hidden'
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					<IoMdMenu size={24} />
				</button>
			</nav>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 left-0 w-80 h-full bg-[#d5f0fb] z-50 border-r py-5 px-4 transition-transform duration-300 ease-in-out transform ${
					isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='flex flex-col h-full'>
					<div className='mb-10'>
						<img src={Logo} alt='' />
					</div>
					<ul className='flex-1 flex flex-col'>
						<div className='space-y-2'>
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
						<div className='pt-4'>
							<WalletMultiButton
								style={walletButtonStyle}
								children={
									publicKey
										? truncateText(
												publicKey.toString(),
												4
										  ) + publicKey.toString().slice(-4)
										: 'Connect Wallet'
								}
							/>
						</div>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
