import DemeterState from '../redux/DemeterXState';
import { connect } from 'react-redux';
import Title, { TitleProperties } from '../widgets/Title';

const mapStateToProps = (state: DemeterState, properties?: Partial<TitleProperties>) => {
    return {
        icon: 'restaurant_menu',
        text: 'Demeter-X',
    };
};

export default connect(mapStateToProps)(Title);
