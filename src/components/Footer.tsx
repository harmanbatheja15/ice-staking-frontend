import Logo from '../assets/logo.svg';
import FooterBrandTitle from './FooterBrandTitle';

const Footer = () => {
	return (
		<div>
			{/* Wave Effect */}
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#ffffff'
					fillOpacity='1'
					d='M0,192L34.3,202.7C68.6,213,137,235,206,229.3C274.3,224,343,192,411,181.3C480,171,549,181,617,186.7C685.7,192,754,192,823,213.3C891.4,235,960,277,1029,277.3C1097.1,277,1166,235,1234,224C1302.9,213,1371,235,1406,245.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
				></path>
			</svg>
			{/* Footer Content */}
			<footer className='bg-white'>
				<div className='px-5 pb-12 mx-auto max-w-[832px] lg:pb-16 md:px-0'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{/* About Us */}
						<div className='md:col-span-2 space-y-4'>
							<h3 className='text-sm font-semibold tracking-wider text-[#25ABE2] uppercase'>
								About Us
							</h3>
							<div className='w-[52px] h-[52px] bg-[#CDEBFF] rounded-xl flex items-center justify-center'>
								<img src={Logo} alt='' />
							</div>
							<p className='max-w-[16rem] mt-4 text-sm text-gray-500'>
								Ice Staking is an initiative to help fund open
								source infrastructure on Solana
							</p>
						</div>

						{/* Links and Socials */}
						<div className='md:col-span-1 grid grid-cols-4'>
							<div className='col-span-2'>
								<h3 className='text-sm font-semibold tracking-wider text-[#25ABE2] uppercase'>
									Links
								</h3>
								<ul role='list' className='mt-4 space-y-4'>
									<li>
										<a
											href='#'
											className='text-sm font-normal text-gray-500 hover:text-gray-900'
										>
											Gitbook
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-sm font-normal text-gray-500 hover:text-gray-900'
										>
											Sanctum
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-sm font-normal text-gray-500 hover:text-gray-900'
										>
											Statewizz
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-sm font-normal text-gray-500 hover:text-gray-900'
										>
											Solana Beach
										</a>
									</li>
								</ul>
							</div>

							<div className='col-span-2'>
								<h3 className='text-sm font-semibold tracking-wider text-[#25ABE2] uppercase'>
									Socials
								</h3>
								<ul role='list' className='mt-4 space-y-4'>
									<li>
										<a
											href='#'
											className='text-sm font-normal text-gray-500 hover:text-gray-900'
										>
											Twitter
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-sm font-normal text-gray-500 hover:text-gray-900'
										>
											Discord
										</a>
									</li>
									<li>
										<a
											href='#'
											className='text-sm font-normal text-gray-500 hover:text-gray-900'
										>
											Telegram
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* Footer Brand Title */}
				<div className='bg-white flex justify-center'>
					<FooterBrandTitle />
				</div>
			</footer>
		</div>
	);
};

export default Footer;
