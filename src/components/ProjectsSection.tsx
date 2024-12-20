import { Link } from 'react-router-dom';
import ProjectsBg from '../assets/projectsBg.svg';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects.data';

const ProjectsSection = () => {
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
			<div className='max-w-[840px] mx-auto my-[120px]'>
				<div className='flex md:items-center justify-between flex-col md:flex-row md:gap-0 gap-3'>
					<h1 className='text-[2.5rem] font-bold leading-10 bg-clip-text text-transparent bg-gradient-to-t from-[#25ABE2] via-[#0a2935] to-[#0A2935]'>
						Top open source
						<br />
						projects under Ice Staking
					</h1>
					<Link to='/projects'>
						<button className='w-fit bg-[#CDEBFF] border-2 border-[#25ABE233] text-[#25ABE2] py-3 px-5 rounded-xl font-semibold text-sm'>
							Explore all
						</button>
					</Link>
				</div>
				{projects?.length > 0 ? (
					<div className='grid grid-cols-2 gap-3 mt-10'>
						{projects.map((project, index) => (
							<ProjectCard project={project} index={index} />
						))}
					</div>
				) : (
					<NoProjects />
				)}
			</div>
		</>
	);
};

export default ProjectsSection;
