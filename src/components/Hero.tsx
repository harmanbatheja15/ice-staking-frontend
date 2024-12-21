import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { IoIosArrowDown } from 'react-icons/io';
import HeroImage from '../assets/hero2.png';
import Solana from '../assets/solana.svg';

const Hero = () => {
	const [selectedOption, setSelectedOption] =
		useState<string>('Native Stack');
	const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

	const Dropdown = () => {
		return (
			<div className='w-[200px] absolute top-8 sm:left-0 right-0 bg-white border border-[#ccc] rounded-xl'>
				<div
					className=''
					onClick={() => setIsDropdownVisible(!isDropdownVisible)}
				>
					<div
						className='cursor-pointer border-b p-3'
						onClick={() => setSelectedOption('Native Stack')}
					>
						<p>Native Stack</p>
					</div>
					<div
						className='cursor-pointer p-3'
						onClick={() => setSelectedOption('Liquid Stack')}
					>
						<p>Liquid Stack</p>
					</div>
				</div>
			</div>
		);
	};

	const handleClickAway = () => {
		setIsDropdownVisible(false);
	};

	return (
		<>
			<div className='max-w-[900px] mx-auto pt-28'>
				<div className='flex items-center justify-between'>
					<div className='z-10'>
						<div
							className='relative w-fit flex items-center !bg-[#F1F9FF1F] py-[6px] px-3 border-2 border-[#25ABE21F] font-bold text-sm rounded-[10px] mb-8'
							style={{ boxShadow: '#25ABE21F' }}
						>
							<div className='absolute -top-3 -right-2'>
								<svg
									width='265'
									height='22'
									viewBox='0 0 265 22'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M118.719 13.524C140.906 15.5861 151.255 7.19707 187.655 15.1371C191.544 15.9853 197.586 15.7829 200.997 14.7674C211.004 11.7885 220.861 10.8162 231.624 13.524C241.235 16.5572 244.873 6.74042 254.387 10.8162C254.519 10.778 257.175 13.5751 257.243 13.524C263.408 21.4492 255.313 24.5294 264.409 17.8234C267.683 14.5234 257.243 -0.700671 235.77 2.84197C217.271 5.89398 178.361 4.08185 163.052 1.60212C147.743 -0.877645 80.1267 1.60212 80.1267 1.60212L0 7.5L75.7022 11.8431C85.8893 12.8499 95.1173 11.3304 118.719 13.524Z'
										fill='white'
									/>
								</svg>
							</div>
							<div className='border-r-2 border-[#25ABE2] px-4'>
								$105M TVL
							</div>
							<div className='border-r-2 border-[#25ABE2] px-4'>
								5.2M SOL Staked
							</div>
							<div className='px-4'>12.7% APY</div>
						</div>
						<div className=''>
							<div className='font-bold md:text-[52px] text-3xl'>
								<h1 className='font-bold flex items-center leading-snug'>
									<span className='text-[#25ABE2]'>$SOL</span>
									<div className='bg-black rounded-full p-2 mx-1'>
										<img
											src={Solana}
											alt=''
											className='w-5 h-5'
										/>
									</div>
									<span>Backed</span>
								</h1>
								<h1 className='md:mt-2 mt-0'>
									Infrastructure Funding
								</h1>
							</div>
							<p className='text-base font-medium font-mono text-[#0A2935] opacity-60 md:mt-4 mt-3'>
								Ice Staking is an initiative to help fund open
								source infrastructure on Solana
							</p>
						</div>
						<div className='relative flex items-center justify-between sm:flex-row flex-col sm:w-[552px] bg-white py-2 px-[10px] rounded-2xl mt-[60px]'>
							<ClickAwayListener onClickAway={handleClickAway}>
								<div className='w-full flex justify-between'>
									<div className='w-full flex items-center'>
										<div className='bg-black rounded-full p-2 mr-2'>
											<img
												src={Solana}
												alt=''
												className='w-5 h-4'
											/>
										</div>
										<input
											type='number'
											placeholder='Enter Amount'
											className='w-full pr-2 outline-none'
										/>
									</div>
									<div className='relative flex items-center'>
										<div
											className='w-fit flex items-center justify-end cursor-pointer'
											onClick={() =>
												setIsDropdownVisible(
													!isDropdownVisible
												)
											}
										>
											<p className='whitespace-nowrap text-[#0A2935] text-base font-semibold pr-3'>
												{selectedOption}
											</p>
											<IoIosArrowDown size={16} />
										</div>
										{isDropdownVisible && <Dropdown />}
									</div>
								</div>
							</ClickAwayListener>
							<button className='sm:w-[105px] w-full py-2 px-5 sm:mt-0 mt-2 rounded-xl text-white text-base sm:ml-5 bg-gradient-to-t from-[#00ddff] to-[#25abe2] bg-[#CDEBFF] border-[3px] border-[#25ABE2B2] border-opacity-[70%] leading-[18px]'>
								Stake
							</button>
						</div>
					</div>
					<div className='lg:block hidden'>
						<img src={HeroImage} alt='' className='w-[800px]' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
