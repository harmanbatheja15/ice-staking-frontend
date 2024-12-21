import ProjectsBg from '../assets/projectsBg.svg';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects.data';
import { CiSearch } from 'react-icons/ci';

const Projects = () => {
	const NoProjects = () => {
		return (
			<div className='relative mt-10'>
				<div className='absolute inset-0 flex items-center justify-center flex-col'>
					<h1 className='text-xl font-bold z-10 bg-gradient-to-b from-[#0A2935] via-[#25ABE2] bg-clip-text text-center mb-2'>
						Get started with Ice Staking!
					</h1>
					<p className='max-w-[410px] text-center text-base font-medium font-mono text-[#0A2935] opacity-60'>
						There are no projects built using Ice Staking yet, be
						the first one to build it!
					</p>
				</div>
				<img src={ProjectsBg} alt='' className='w-full h-full' />
			</div>
		);
	};

	return (
		<>
			<div className='max-w-[840px] mx-auto mt-[120px] lg:px-0 px-4'>
				<div className='md:gap-0 gap-3 mb-5'>
					<h1 className='text-[2.5rem] font-bold leading-10 bg-clip-text text-transparent bg-gradient-to-t from-[#25ABE2] via-[#0a2935] to-[#0A2935]'>
						Top open source
						<br />
						projects under Ice Staking
					</h1>
				</div>
				<div className='flex md:items-center justify-between md:flex-row flex-col gap-4'>
					<div className='md:max-w-[365px] md:w-[365px] w-full flex items-center bg-white border-[3px] border-[#25ABE233] py-3 px-5 rounded-xl'>
						<CiSearch size={20} />
						<input
							type='text'
							placeholder='Search'
							className='w-full ml-2 border-none outline-none text-sm text-[#0A2935] opacity-60 font-bold'
						/>
					</div>
					<div className='flex gap-3'>
						<div
							className={`py-2 px-5 border-2 border-[#25ABE2B2] rounded-xl cursor-pointer bg-gradient-to-t from-[#00ddff] to-[#25abe2] bg-[#CDEBFF]`}
						>
							<h1 className='text-white font-bold text-sm'>
								Latest
							</h1>
						</div>
						<div
							className={`bg-white py-2 px-5 border-2 border-[#FFFFFF29] rounded-xl cursor-pointer`}
						>
							<h1 className='text-[#25ABE2] font-bold text-sm'>
								Popular
							</h1>
						</div>
						<div
							className={`bg-white py-2 px-5 border-2 border-[#FFFFFF29] rounded-xl cursor-pointer`}
						>
							<h1 className='text-[#25ABE2] font-bold text-sm'>
								Trending
							</h1>
						</div>
					</div>
				</div>
				{projects?.length > 0 ? (
					<div className='grid grid-cols-2 gap-3 mt-10'>
						{projects.map((project, index) => (
							<ProjectCard project={project} key={index} />
						))}
					</div>
				) : (
					<NoProjects />
				)}
			</div>
		</>
	);
};

export default Projects;
