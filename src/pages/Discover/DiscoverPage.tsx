import React from 'react';
import Page from '@chimerax/common-web/lib/widgets/Page';
import DemeterXState from '../../redux/DemeterXState';
import { connect } from 'react-redux';
import { fetchCategories, fetchRecipes } from '../../redux/Discover';
import CategoryList from './CategoryList';
import RecipesGrid from './RecipesGrid';

export interface DiscoverPageProperties {
	initialized?: boolean;
	initialize: () => void;
}

const DiscoverPage: React.FC<DiscoverPageProperties> = (properties) => {
	const {
		initialized,
		initialize,
	} = properties;
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
		...properties,
		initialized: state.discover.initialized,
	};
};

const mapDispatchToProps = (dispatch: any, properties: Partial<DiscoverPageProperties>) => {
	const { initialize } = properties;
	return {
		...properties,
		initialize: () => {
			initialize && initialize();
			dispatch(fetchCategories());
			dispatch(fetchRecipes());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage);
