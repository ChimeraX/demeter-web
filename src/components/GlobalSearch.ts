import GlobalSearch, { GlobalSearchProperties } from '../widgets/GlobalSearch';
import { connect } from 'react-redux';
import DemeterXState from '../redux/DemeterXState';

const mapStateToProps = (state: DemeterXState, properties?: Partial<GlobalSearchProperties>) => {
    return {
        placeHolder: 'Search...',
    };
};

const mapDispatchToProps = (dispatch: any, properties?: Partial<GlobalSearchProperties>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSearch);
