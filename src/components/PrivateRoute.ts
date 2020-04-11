import DemeterState from '../redux/state';
import PrivateRoute, { PrivateRouteProperties } from '../widgets/PrivateRoute';
import { connect } from 'react-redux';

const mapStateToProps = (state: DemeterState, properties?: Partial<PrivateRouteProperties>) => {
    return {
        authenticated: true,
        redirect: '/login',
    };
};

const mapDispatchToProps = (dispatch: any, properties?: Partial<PrivateRouteProperties>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
