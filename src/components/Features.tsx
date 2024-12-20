import Image1 from '../assets/img1.png';
import Image2 from '../assets/img2.png';
import Image3 from '../assets/img3.png';

const Features = () => {
	return (
		<>
			<div className='max-w-[840px] mx-auto my-[120px]'>
				<div className='flex md:items-center justify-between md:flex-row flex-col'>
					<h1 className='text-[2.5rem] font-bold leading-10 bg-clip-text text-transparent bg-gradient-to-t from-[#25ABE2] via-[#0a2935] to-[#0A2935]'>
						A safe & trusted staking solution
					</h1>
					<p className='text-[#0A2935] text-base font-medium opacity-60 font-mono'>
						Ice Staking has been helping 147,548 people stake on
						Solana for 2+ years
					</p>
				</div>
				<div className='flex items-center gap-3 mt-10 flex-col xs:flex-row'>
					<div className='relative'>
						<div className='absolute inset-0 p-5'>
							<h1 className='text-xl font-bold z-10 bg-gradient-to-b from-[#0A2935] via-[#25ABE2] bg-clip-text'>
								Secure & reliable backup
							</h1>
						</div>
						<img src={Image1} alt='' />
					</div>
					<div className='space-y-3'>
						<div className='relative'>
							<div className='absolute inset-0 p-5'>
								<h1 className='text-xl font-bold z-10 bg-gradient-to-b from-[#0A2935] via-[#25ABE2] bg-clip-text'>
									Powered by AMD Milan EPYC™ 9254
								</h1>
							</div>
							<img src={Image2} alt='' />
						</div>
						<div className='relative'>
							<div className='absolute inset-0 flex items-center pl-5'>
								<h1 className='text-xl font-bold leading-6 z-10 bg-gradient-to-b from-[#0A2935] via-[#25ABE2] bg-clip-text'>
									1.04 slots
									<br />
									Located in AMS
									<br />
									2.0.15 Solana Version
								</h1>
							</div>
							<img src={Image3} alt='' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
