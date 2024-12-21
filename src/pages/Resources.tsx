import ResourceCard from '../components/ResourceCard';
import { resources } from '../data/resources.data';
import { CiSearch } from 'react-icons/ci';

const ResourcesSection = () => {
	return (
		<>
			<div className='max-w-[840px] mx-auto mt-[120px] lg:px-0 px-4'>
				<div className='md:gap-0 gap-3 mb-5'>
					<h1 className='text-[2.5rem] font-bold leading-10 bg-clip-text text-transparent bg-gradient-to-t from-[#25ABE2] via-[#0a2935] to-[#0A2935]'>
						Articles from the
						<br />
						Community
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
				<div className='flex items-center flex-wrap gap-3 mt-6'>
					{resources?.map((resource, index) => (
						<ResourceCard resource={resource} key={index} />
					))}
				</div>
			</div>
		</>
	);
};

export default ResourcesSection;
