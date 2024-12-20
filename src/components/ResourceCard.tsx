const ResourceCard = ({ resource, index }: any) => {
	const truncateText = (text: string, limit: number) => {
		if (text.length <= limit) return text;
		return text.slice(0, limit) + '...';
	};
	return (
		<>
			<div
				key={index}
				className='sm:max-w-[272px] w-full relative bg-white rounded-2xl cursor-pointer hover:shadow-lg transition-all duration-300 ease-out'
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
		</>
	);
};

export default ResourceCard;
