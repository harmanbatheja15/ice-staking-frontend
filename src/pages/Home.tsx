import Hero from '../components/Hero';
import Features from '../components/Features';
import Projects from '../components/ProjectsSection';
import Resources from '../components/ResourcesSection';

const Home = () => {
	return (
		<>
			<div className='lg:px-0 px-4'>
				<Hero />
				<Features />
				<Projects />
				<Resources />
			</div>
		</>
	);
};

export default Home;
