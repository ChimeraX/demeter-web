import DemeterXState from '../redux/DemeterXState';
import { connect } from 'react-redux';
import UserWidget, { UserWidgetProperties } from '@chimerax/common-web/lib/widgets/UserWidget';

const mapStateToProps = (state: DemeterXState, properties: Partial<UserWidgetProperties>) => {
	return {
		user: state.user.user!!
	};
};

const mapDispatchToProps = (dispatch: any, properties: Partial<UserWidgetProperties>) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserWidget);
