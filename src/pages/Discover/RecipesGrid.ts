import { connect } from 'react-redux';
import DemeterXState from '../../redux/DemeterXState';
import RecipesGrid, { RecipesGridProperties } from '../../widgets/RecipesGrid';
import Recipe from '../../model/Recipe';
import { fetchRecipeDetails, requestFavorite } from '../../redux/Discover';

const mapStateToProps = (state: DemeterXState, properties: Partial<RecipesGridProperties>) => {
	return {
		recipes: state.discover.recipes.items,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onFavorite: (recipe: Recipe) => {
			dispatch(requestFavorite(recipe.id));
		},
		onClick: (recipe: Recipe) => {
			dispatch(fetchRecipeDetails(recipe.id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesGrid);
