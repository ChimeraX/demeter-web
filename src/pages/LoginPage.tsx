import React from 'react';
import { useQuery } from '@chimerax/common-web/lib/util/hooks';
import { Redirect } from 'react-router-dom';
import DemeterXState from '../redux/DemeterXState';
import { connect } from 'react-redux';
import { doLogin } from '../redux/User';
import { CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DemeterXTheme from '../theming/DemeterXTheme';

function isValid(params: URLSearchParams) {
	return params.has('code');
}

const useStyles = makeStyles((theme: DemeterXTheme) => {
	return createStyles({
		root: {
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			position: 'absolute',
			alignItems: 'center',
			textAlign: 'center',
		},
	});
});

interface LoginPageProperties {
	setCode: (code: string) => void;
}

const LoginPage: React.FC<LoginPageProperties> = (properties) => {

	const { setCode } = properties;

	const search = useQuery();

	const classes = useStyles();

	if (!isValid(search)) {
		return (<Redirect to="/"/>);
	}

	const code = search.get('code')!!;
	setCode(code);

	return (
		<div className={classes.root}>
			<CircularProgress color={'secondary'}/>
		</div>
	);
};

const mapStateToProps = (state: DemeterXState) => ({});

const mapDispatchToProps = (dispatch: any) => ({
	setCode: (code: string) => {
		dispatch(doLogin(code));
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
