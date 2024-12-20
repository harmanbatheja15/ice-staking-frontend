import Img from '../assets/resource1.png';

const Resources = () => {
	const resources = [
		{
			id: 1,
			date: '11 August 2024',
			title: 'Should employers use psychometric tests in recruitment?',
			image: Img,
		},
		{
			id: 2,
			date: '04 November 2024',
			title: 'Why is everyone obsessing over Solana?',
			image: Img,
		},
		{
			id: 3,
			date: '05 May 2024',
			title: 'A comprehensive guide at understanding how we fund events and how to properly utilise the funds.',
			image: Img,
		},
	];

	const truncateText = (text: string, limit: number) => {
		if (text.length <= limit) return text;
		return text.slice(0, limit) + '...';
	};

	return (
		<>
			<div className='max-w-[840px] mx-auto'>
				<div className='flex md:items-center justify-between flex-col md:flex-row gap-4'>
					<div className=''>
						<h1 className='lg:text-[40px] text-3xl leading-none font-bold'>
							Browse through
							<br />
							the latest resources
						</h1>
						<p className='text-[#0A2935] text-base font-medium opacity-60'>
							The thoughts, ideas and advice you need to get
							started with Ice Staking
						</p>
						<button className='bg-[#CDEBFF] border-2 border-[#25ABE233] text-[#25ABE2] py-3 px-5 mt-5 rounded-xl font-semibold text-sm'>
							Read more
						</button>
					</div>
					<div className='w-full md:max-w-[272px] relative bg-white rounded-2xl md:block flex items-center'>
						<div className=''>
							<img
								src={Img}
								alt=''
								className='w-full md:rounded-t-2xl rounded-tl-2xl rounded-bl-2xl'
							/>
						</div>
						<div className='p-6 space-y-3'>
							<p className='text-[#25ABE2] text-sm font-bold'>
								04 November 2024
							</p>
							<h1 className='text-[#0A2935] leading-6 text-xl font-bold'>
								Why is everyone obsessing over Solana?
							</h1>
						</div>
					</div>
					{/* <div className='w-full relative bg-white rounded-2xl flex items-center'>
						<div className=''>
							<img
								src={Img}
								alt=''
								className='rounded-tl-2xl rounded-bl-2xl'
							/>
						</div>
						<div className='p-6 space-y-3'>
							<p className='text-[#25ABE2] text-sm font-bold'>
								04 November 2024
							</p>
							<h1 className='text-[#0A2935] leading-6 text-xl font-bold'>
								Why is everyone obsessing over Solana?
							</h1>
						</div>
					</div> */}
				</div>
				<div className='flex items-center flex-wrap gap-3 mt-6'>
					{resources?.map((resource, index) => (
						<div
							key={index}
							className='sm:max-w-[272px] w-full relative bg-white rounded-2xl'
						>
							<div className=''>
								<img
									src={resource.image}
									alt=''
									className='w-full rounded-t-2xl'
								/>
							</div>
							<div className='p-6 space-y-3'>
								<p className='text-[#25ABE2] text-sm font-bold'>
									{resource.date}
								</p>
								<h1 className='text-[#0A2935] leading-6 text-xl font-bold'>
									{truncateText(resource.title, 40)}
								</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Resources;
