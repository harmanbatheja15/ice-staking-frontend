import { Link } from 'react-router-dom';
import Img1 from '../assets/resource1.png';
import ResourceCard from './ResourceCard';
import { resources } from '../data/resources.data';

const ResourcesSection = () => {
	return (
		<>
			<div className='max-w-[840px] mx-auto'>
				<div className='flex md:items-center justify-between flex-col md:flex-row gap-4'>
					<div className=''>
						<h1 className='text-[2.5rem] font-bold leading-10 bg-clip-text text-transparent bg-gradient-to-t from-[#25ABE2] via-[#0a2935] to-[#0A2935]'>
							Browse through
							<br />
							the latest resources
						</h1>
						<p className='text-[#0A2935] text-base font-medium opacity-60 font-mono'>
							The thoughts, ideas and advice you need to get
							started with Ice Staking
						</p>
						<Link to='/resources'>
							<button className='bg-[#CDEBFF] border-2 border-[#25ABE233] text-[#25ABE2] py-3 px-5 mt-5 rounded-xl font-semibold text-sm'>
								Read more
							</button>
						</Link>
					</div>
					<div className='w-full md:max-w-[272px] relative bg-white rounded-2xl md:block flex items-center cursor-pointer hover:shadow-lg transition-all duration-300 ease-out'>
						<div className='w-1/2 md:w-full aspect-square md:aspect-auto'>
							<img
								src={Img1}
								alt=''
								className='w-full h-full object-cover md:rounded-t-2xl rounded-l-2xl'
							/>
						</div>
						<div className='w-1/2 md:w-full p-6'>
							<p className='text-[#25ABE2] text-sm font-bold'>
								04 November 2024
							</p>
							<h1 className='text-[#0A2935] leading-6 text-xl font-bold mt-3'>
								Why is everyone obsessing over Solana?
							</h1>
						</div>
					</div>
				</div>
				<div className='flex items-center flex-wrap gap-3 mt-6'>
					{resources?.slice(0, 3)?.map((resource, index) => (
						<ResourceCard resource={resource} key={index} />
					))}
				</div>
			</div>
		</>
	);
};

export default ResourcesSection;
