import { connect } from 'react-redux';
import DemeterXState from '../../redux/DemeterXState';
import CategoryList, { CategoryListProperties } from '../../widgets/CategoryList';
import Category from '../../model/Category';
import { fetchCategories, fetchRecipes } from '../../redux/Discover';

const mapStateToProps = (state: DemeterXState, properties?: Partial<CategoryListProperties>) => {
    return {
        categories: state.discover.categories.items,
    };
};

const mapDispatchToProps = (dispatch: any, properties?: Partial<CategoryListProperties>) => {
    return {
        onClick: (category: Category) => {
            if (!category.childrenFetched) {
                dispatch(fetchCategories(category));
                category.childrenFetched = true;
            }
            dispatch(fetchRecipes(category, true));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
