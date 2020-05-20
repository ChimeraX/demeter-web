import { connect } from 'react-redux';
import DemeterXState from '../../redux/DemeterXState';
import RecipeDetails, { RecipeDetailsProperties } from '../../widgets/RecipeDetails/RecipeDetails';

const mapStateToProps = (state: DemeterXState, properties?: Partial<RecipeDetailsProperties>) => {
	return {
		open: false,
		contentProperties: {
			...properties?.contentProperties,
			recipe: undefined,
			iconProperties: {
				profilePicture: 'string',
				onClick: () => {
				},
			},
		},
	};
};

const mapDispatchToProps = (dispatch: any, properties?: Partial<RecipeDetailsProperties>) => {
	return {
		onClose: () => {

		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
