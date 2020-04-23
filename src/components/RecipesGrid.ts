import DemeterXState from '../redux/DemeterXState';
import RecipesGrid, { RecipesGridProperties } from '../widgets/RecipesGrid';
import { connect } from 'react-redux';
import Recipe from '../model/Recipe';
import recipe from './recipeData';

let recipes: Recipe[] = [
	recipe, recipe, recipe, recipe, recipe, recipe, recipe,
];

recipes = recipes.map((recipe, index) => ({ ...recipe, id: index }));


const mapStateToProps = (state: DemeterXState, properties: Partial<RecipesGridProperties>) => {
	return {
		recipes
	}
};

export default connect(mapStateToProps)(RecipesGrid);
