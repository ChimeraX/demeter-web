import React from 'react';
import RecipesGrid from '../widgets/RecipesGrid';
import CategoryList from '../components/CategoryList';

const DiscoverPage = () => {
	return (
		<section>
			<div>DiscoverPage</div>
			<CategoryList/>
			<RecipesGrid/>
		</section>
	);
};

export default DiscoverPage;
