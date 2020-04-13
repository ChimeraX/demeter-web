import DemeterXState from '../redux/DemeterXState';
import RecipeCard, { RecipeCardProperties } from '../widgets/RecipeCard';
import recipe from './recipeData';
import { connect } from 'react-redux';

const mapStateToProps = (state: DemeterXState, properties?: Partial<RecipeCardProperties>) => {
    return {
        recipe,
    };
};

const mapDispatchToProps = (dispatch: any, properties?: Partial<RecipeCardProperties>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
