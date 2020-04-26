import DemeterXState from '../redux/DemeterXState';
import { connect } from 'react-redux';
import ChimeraX, { ChimeraXProperties } from '../widgets/ChimeraX';
import * as endpoints from '../rest/endpoints';

const mapStateToProps = (state: DemeterXState, properties?: Partial<ChimeraXProperties>) => {
	return {};
};

const mapDispatchToProps = (dispatch: any, properties?: Partial<ChimeraXProperties>) => {
	return {
		onClick: () => window.location.href = endpoints.oauthURL,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChimeraX);
