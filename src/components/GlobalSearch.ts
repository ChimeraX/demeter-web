import DemeterState from '../redux/state';
import GlobalSearch, { GlobalSearchProperties } from '../widgets/GlobalSearch';
import { connect } from 'react-redux';

const mapStateToProps = (state: DemeterState, properties?: Partial<GlobalSearchProperties>) => {
    return {
        placeHolder: 'Search...',
    };
};

const mapDispatchToProps = (dispatch: any, properties?: Partial<GlobalSearchProperties>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSearch);
