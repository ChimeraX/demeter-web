import DemeterState from '../redux/state';
import RecipeCard, { RecipeCardProperties } from '../widgets/RecipeCard';
import recipe from './recipeData';
import { connect } from 'react-redux';

const mapStateToProps = (state: DemeterState, properties?: Partial<RecipeCardProperties>) => {
    return {
        recipe,
    };
};

const mapDispatchToProps = (dispatch: any, properties?: Partial<RecipeCardProperties>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
