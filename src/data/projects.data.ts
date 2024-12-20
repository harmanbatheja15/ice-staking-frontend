import Icon1 from '../assets/icon1.png';

interface Project {
	id: number;
	image: string;
	name: string;
	title: string;
	description: string;
	website: string;
	github: string;
}

export const projects: Project[] = [
	{
		id: 1,
		image: Icon1,
		name: 'Orca',
		title: 'DeFi for people, not programs',
		description:
			'Trade, farm, and build on Solana’s most user-friendly concentrated liquidity AMM.',
		website: 'https://google.com/',
		github: 'https://github.com',
	},
	{
		id: 2,
		image: Icon1,
		name: 'Jupiter Aggregator',
		title: 'Built for smart traders who like money',
		description:
			'Jupiter offers a wide range of tokens in the Solana ecosystem.',
		website: 'https://google.com/',
		github: 'https://github.com',
	},
	{
		id: 3,
		image: Icon1,
		name: 'Solend',
		title: 'The bank of the future, for everyone.',
		description:
			'Trade, farm, and build on Solana’s most user-friendly concentrated liquidity AMM.',
		website: 'https://google.com/',
		github: 'https://github.com',
	},
	{
		id: 4,
		image: Icon1,
		name: 'Drift Protocol',
		title: 'Trade with leverage. Earn yield.',
		description:
			'All your assets cross-margined and a lightning fast experience.',
		website: 'https://google.com/',
		github: 'https://github.com',
	},
];
