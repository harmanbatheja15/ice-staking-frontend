import { IoLogoGithub } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }: any) => {
	return (
		<>
			<div
				key={index}
				className='col-span-full md:col-span-1 relative bg-white rounded-2xl p-6 h-[267px]'
			>
				<div className='flex items-center border-b border-dashed pb-4'>
					<img src={project.image} alt='' />
					<div className='pl-4'>
						<h1>{project.name}</h1>
						<p>{project.title}</p>
					</div>
				</div>
				<div className='pt-4 font-mono'>
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
		</>
	);
};

export default ProjectCard;
