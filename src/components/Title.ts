import DemeterState from '../redux/state';
import { connect } from 'react-redux';
import Title, { TitleProperties } from '../widgets/Title';

const mapStateToProps = (state: DemeterState, properties?: Partial<TitleProperties>) => {
    return {
        icon: 'eco',
        text: 'Demeter-X',
    };
};

export default connect(mapStateToProps)(Title);
