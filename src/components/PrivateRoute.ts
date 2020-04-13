import DemeterXState from '../redux/DemeterXState';
import PrivateRoute, { PrivateRouteProperties } from '../widgets/PrivateRoute';
import { connect } from 'react-redux';

const mapStateToProps = (state: DemeterXState, properties?: Partial<PrivateRouteProperties>) => {
    return {
        authenticated: true,
        redirect: '/login',
    };
};

const mapDispatchToProps = (dispatch: any, properties?: Partial<PrivateRouteProperties>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
