import Hero from '../components/Hero';
import Features from '../components/Features';
import Projects from '../components/ProjectsComp';
import Resources from '../components/Resources';

const Home = () => {
	return (
		<>
			<div className='lg:mx-0 px-4'>
				<Hero />
				<Features />
				<Projects />
				<Resources />
			</div>
		</>
	);
};

export default Home;
