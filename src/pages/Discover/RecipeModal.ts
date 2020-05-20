import { connect } from 'react-redux';
import DemeterXState from '../../redux/DemeterXState';
import RecipeModal from '../../widgets/RecipeModal';
import Recipe from '../../model/Recipe';

const mapStateToProps = (state: DemeterXState) => {
	const focused = state.discover.recipes.focused;
	console.log(focused);
	return {
		recipe: focused
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onFavorite: () => {}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeModal);
