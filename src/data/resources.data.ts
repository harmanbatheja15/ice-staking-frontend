import Img1 from '../assets/resource1.png';

interface Resource {
	id: number;
	date: string;
	title: string;
	image: string;
}

export const resources: Resource[] = [
	{
		id: 1,
		date: '11 August 2024',
		title: 'Should employers use psychometric tests in recruitment?',
		image: Img1,
	},
	{
		id: 2,
		date: '04 November 2024',
		title: 'Why is everyone obsessing over Solana?',
		image: Img1,
	},
	{
		id: 3,
		date: '05 May 2024',
		title: 'A comprehensive guide at understanding how we fund events and how to properly utilise the funds.',
		image: Img1,
	},
	{
		id: 4,
		date: '11 August 2024',
		title: 'Should employers use psychometric tests in recruitment?',
		image: Img1,
	},
	{
		id: 5,
		date: '04 November 2024',
		title: 'Why is everyone obsessing over Solana?',
		image: Img1,
	},
	{
		id: 6,
		date: '05 May 2024',
		title: 'A comprehensive guide at understanding how we fund events and how to properly utilise the funds.',
		image: Img1,
	},
];
