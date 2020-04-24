import React from 'react';
import RecipesGrid from '../components/RecipesGrid';
import CategoryList from '../components/CategoryList';
import Page from './Page';

const DiscoverPage = () => {
	return (
		<Page title="Discover new recipes">
			<CategoryList/>
			<RecipesGrid/>
		</Page>
	);
};

export default DiscoverPage;
