import React from 'react';
import RecipesGrid from '../components/RecipesGrid';
import CategoryList from '../components/CategoryList';
import Page from '@chimerax/common-web/lib/widgets/Page';
import DemeterXState from '../redux/DemeterXState';
import { connect } from 'react-redux';
import { fetchCategories } from '../redux/Category';
import { fetchRecipes } from '../redux/Recipe';

export interface DiscoverPageProperties {
	initialized?: boolean;
	initialize: () => void;
}

const DiscoverPage: React.FC<DiscoverPageProperties> = (properties) => {
	const { initialized, initialize } = properties;
	if (!initialized) {
		initialize();
	}
	return (
		<Page title="Discover new recipes">
			<CategoryList/>
			<RecipesGrid/>
		</Page>
	);
};

const mapStateToProps = (state: DemeterXState, properties: Partial<DiscoverPageProperties>) => {
	return {
		initialized: state.recipe.initialized && state.category.initialized,
	};
};

const mapDispatchToProps = (dispatch: any, properties: Partial<DiscoverPageProperties>) => {
	return {
		initialize: () => {
			dispatch(fetchCategories());
			dispatch(fetchRecipes());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage);
