import DemeterXState from '../redux/DemeterXState';
import UserWidget, { UserWidgetProperties } from '../widgets/UserWidget';
import { connect } from 'react-redux';

const image = 'https://ae01.alicdn.com/kf/HTB1SwWCcBKw3KVjSZFOq6yrDVXa4.jpg_q50.jpg';

const mapStateToProps = (state: DemeterXState, properties: Partial<UserWidgetProperties>) => {
	return {
		user: {
			id: 0,
			username: 'Tony Stark',
			firstName: 'Tony',
			lastName: 'Stark',
			email: 'IronMan@stark.industries',
			profilePicture: image,
			country: 'US',
			phoneNumber: '34242424543',
		},
	};
};

const mapDispatchToProps = (dispatch: any, properties: Partial<UserWidgetProperties>) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserWidget);
