import React from 'react';
import RecipesGrid from '../components/RecipesGrid';
import CategoryList from '../components/CategoryList';
import PageTitle from '../widgets/PageTitle';

const DiscoverPage = () => {
	return (
		<section>
			<PageTitle title={'Discover new recipes'}/>
			<CategoryList/>
			<RecipesGrid/>
		</section>
	);
};

export default DiscoverPage;
