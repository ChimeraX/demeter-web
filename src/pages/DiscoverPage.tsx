import React from 'react';
import RecipesGrid from '../widgets/RecipesGrid';
import CategoryList from '../components/CategoryList';
import PageTitle from '../widgets/PageTitle';

const DiscoverPage = () => {
	return (
		<section>
			<PageTitle title={'DiscoverPage'}/>
			<CategoryList/>
			<RecipesGrid/>
		</section>
	);
};

export default DiscoverPage;
