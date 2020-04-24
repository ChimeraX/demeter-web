import React from 'react';
import LeftDrawerWidget from './LeftDrawer';
import { LeftDrawerItemProperties } from './LeftDrawerItem';

const items: LeftDrawerItemProperties[] = [
	{
		id: 'home',
		icon: 'home',
		title: 'Home',
		path: '/',

	},
	{
		id: 'explore',
		icon: 'explore',
		title: 'Discover',
		path: '/discover',
	},
	{
		id: 'favorites',
		icon: 'favorite',
		title: 'Favorites',
		path: '/favorites',
	},
	{
		id: 'saved',
		icon: 'menu_book',
		title: 'Saved',
		path: '/saved',
		delimiter: true,
	},
	{
		id: 'calculate',
		icon: 'functions',
		title: 'Calculate',
		path: '/calculator',
	},
];


const LeftDrawer: React.FC<{ open: boolean }> = (properties) => {
	const { open } = properties;
	return (
		<LeftDrawerWidget open={open} items={items}/>
	);
};

export default LeftDrawer;
