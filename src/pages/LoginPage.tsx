import React from 'react';
import Page from '@chimerax/common-web/lib/widgets/Page';
import { useQuery } from '@chimerax/common-web/lib/util/hooks';
import { Redirect } from 'react-router-dom';
import DemeterXState from '../redux/DemeterXState';
import { fetchCategories, fetchRecipes } from '../redux/Discover';
import { DiscoverPageProperties } from './Discover/DiscoverPage';
import { connect } from 'react-redux';
import { doLogin, setCode } from '../redux/User';

function isValid(params: URLSearchParams) {
	return params.has('code');
}

interface LoginPageProperties {
	setCode: (code: string) => void;
}

const LoginPage = () => {

	const search = useQuery();

	if (!isValid(search)) {
		return (<Redirect to="/"/>);
	}

	const code = search.get('code')!!;
	setCode(code);
	return (
		<Page>Login</Page>
	);
};

const mapStateToProps = (state: DemeterXState) => ({});

const mapDispatchToProps = (dispatch: any) => ({
	setCode: (code: string) => {
		dispatch(setCode(code));
		dispatch(doLogin());
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
