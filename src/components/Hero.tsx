import Solana from '../assets/solana.png';
import HeroImage from '../assets/hero2.png';

const Hero = () => {
	return (
		<>
			<div className='max-w-[900px] mx-auto pt-28'>
				<div className='flex items-center justify-between'>
					<div className='z-10'>
						<div
							className='w-fit flex items-center bg-[#F1F9FF1F] py-[6px] px-3 border-2 border-[#25ABE21F] font-bold text-sm rounded-[10px] mb-8'
							style={{ boxShadow: '#25ABE21F' }}
						>
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
									<img
										src={Solana}
										alt=''
										className='w-10 h-10'
									/>
									<span>Backed</span>
								</h1>
								<h1 className='md:mt-2 mt-0'>
									Infrastructure Funding
								</h1>
							</div>
							<p className='text-base font-medium text-[#0A2935] opacity-60 md:mt-4 mt-3'>
								Ice Staking is an initiative to help fund open
								source infrastructure on Solana
							</p>
						</div>
						<div className='flex items-center justify-between sm:w-[552px] bg-white py-2 px-[10px] border rounded-2xl mt-[60px]'>
							<div className='flex items-center'>
								<img src={Solana} alt='' className='w-8 h-8' />
								<input
									type='text'
									placeholder='Enter Amount'
									className='outline-none'
								/>
							</div>
							<select name='' id=''>
								<option value='Native Stack'>
									Native Stack
								</option>
								<option value='Native Stack'>
									Native Stack
								</option>
								<option value='Native Stack'>
									Native Stack
								</option>
							</select>
							<button className='w-[105px] bg-[#25ABE2] py-2 px-5 border-[3px] border-[#25ABE2B2] rounded-xl text-white text-base '>
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
