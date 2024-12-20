import Icon1 from '../assets/icon1.png';
import { TbWorld } from 'react-icons/tb';
import { IoLogoGithub } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Projects = () => {
	const projects = [
		{
			id: 1,
			image: Icon1,
			name: 'Orca',
			title: 'DeFi for people, not programs',
			description:
				'Trade, farm, and build on Solana’s most user-friendly concentrated liquidity AMM.',
			website: 'https://google.com/',
			github: 'https://github.com',
		},
		{
			id: 2,
			image: Icon1,
			name: 'Jupiter Aggregator',
			title: 'Built for smart traders who like money',
			description:
				'Jupiter offers a wide range of tokens in the Solana ecosystem.',
			website: 'https://google.com/',
			github: 'https://github.com',
		},
		{
			id: 3,
			image: Icon1,
			name: 'Solend',
			title: 'The bank of the future, for everyone.',
			description:
				'Trade, farm, and build on Solana’s most user-friendly concentrated liquidity AMM.',
			website: 'https://google.com/',
			github: 'https://github.com',
		},
		{
			id: 4,
			image: Icon1,
			name: 'Drift Protocol',
			title: 'Trade with leverage. Earn yield.',
			description:
				'All your assets cross-margined and a lightning fast experience.',
			website: 'https://google.com/',
			github: 'https://github.com',
		},
	];

	return (
		<>
			<div className='max-w-[840px] mx-auto my-[120px]'>
				<div className='flex md:items-center justify-between flex-col md:flex-row md:gap-0 gap-3'>
					<h1 className='md:text-[40px] text-3xl leading-none font-bold'>
						Top open source
						<br />
						projects under Ice Staking
					</h1>
					<button className='w-fit bg-[#CDEBFF] border-2 border-[#25ABE233] text-[#25ABE2] py-3 px-5 rounded-xl font-semibold text-sm'>
						Explore all
					</button>
				</div>
				<div className='grid grid-cols-2 gap-3 mt-10'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='col-span-full md:col-span-1 relative bg-white rounded-2xl p-6 border h-[267px]'
						>
							<div className='flex items-center border-b border-dashed pb-4'>
								<img src={project.image} alt='' />
								<div className='pl-4'>
									<h1>{project.name}</h1>
									<p>{project.title}</p>
								</div>
							</div>
							<div className='pt-4'>
								<p>{project.description}</p>
							</div>
							<div className='absolute bottom-5 flex items-center gap-3'>
								<Link to={project.website} target='_blank'>
									<div className='bg-[#0A2935] p-1 rounded-full cursor-pointer'>
										<TbWorld size={20} color='white' />
									</div>
								</Link>
								<Link to={project.github} target='_blank'>
									<div className='bg-[#0A2935] p-1 rounded-full cursor-pointer'>
										<IoLogoGithub size={20} color='white' />
									</div>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Projects;
