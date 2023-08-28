import ModelSection from './components/ModelSection';

const data = [
	{
		id: 1,
		title: 'Model Y',
		imgUrl: '/src/assets/imgs/homepage-model-Y.jpeg',
		linkText: 'Explore Inventory',
		btns: ['Explore Inventory', 'Custom Order'],
	},
	{
		id: 2,
		title: 'Model S',
		imgUrl: '/src/assets/imgs/homepage-model-S.jpg',
		linkText: 'Explore Inventory',
		btns: ['Custom Order', 'Demo Drive'],
	},
	{
		id: 3,
		title: 'Model X',
		imgUrl: '/src/assets/imgs/homepage-model-X.jpeg',
		linkText: 'Explore Inventory',
		btns: ['Custom Order', 'Demo Drive'],
	},
	{
		id: 4,
		title: 'Solar Panels',
		imgUrl: '/src/assets/imgs/homepage-solar-panels.jpeg',
		linkText: 'Schedule a Virtual Consultation',
		btns: ['Order Now', 'Learn More'],
	},
	{
		id: 5,
		title: 'Solar Roof',
		imgUrl: '/src/assets/imgs/homepage-solar-roof.jpeg',
		linkText: 'Produce Clean Energy From Your Roof',
		btns: ['Order Now', 'Learn More'],
	},
	{
		id: 6,
		title: 'Powerwall',
		imgUrl: '/src/assets/imgs/homepage-powerwall.jpg',
		btns: ['Order Now', 'Learn More'],
	},
	{
		id: 7,
		title: 'Accessories',
		imgUrl: '/src/assets/imgs/homepage-accessories.jpg',
		btns: ['Shop Now'],
	},
];

export default function App() {
	return <ModelSection data={data} />;
}
