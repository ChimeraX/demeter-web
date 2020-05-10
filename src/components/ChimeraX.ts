import DemeterXState from '../redux/DemeterXState';
import oAuthConfig from '../rest/oAuthConfig';
import { connect } from 'react-redux';
import ChimeraX from '@chimerax/common-web/lib/widgets/ChimeraX';

const mapStateToProps = (state: DemeterXState) => {
	return {
		...oAuthConfig,
	};
};

export default connect(mapStateToProps)(ChimeraX);
