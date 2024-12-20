import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<div className='h-full w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative bg-[#EFFAFF]'>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route index path='/' element={<Home />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
