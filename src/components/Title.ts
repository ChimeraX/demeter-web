import DemeterXState from '../redux/DemeterXState';
import { connect } from 'react-redux';
import Title, { TitleProperties } from '@chimerax/common-web/lib/widgets/Title';

const mapStateToProps = (state: DemeterXState, properties?: Partial<TitleProperties>) => {
    return {
        icon: 'restaurant_menu',
        text: 'Demeter-X',
    };
};

export default connect(mapStateToProps)(Title);
