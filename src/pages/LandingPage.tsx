import React from 'react';
import Page from '@chimerax/common-web/lib/widgets/Page';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DemeterXTheme from '../theming/DemeterXTheme';
import { Avatar, Paper } from '@material-ui/core';
import Title from '../components/Title';
import ChimeraX from '../components/ChimeraX';

const useStyles = makeStyles((theme: DemeterXTheme) => {
	return createStyles({
		root: {
			backgroundImage: theme.landingImage,
			backgroundSize: 'cover',
			minHeight: '100vh',
			minWidth: '100vh',
		},
		paper: {
			height: '600px',
			width: '400px',
			backgroundColor: '#262821',
			top: '50%',
			left: '10%',
			transform: 'translate(0%, -50%)',
			position: 'absolute',
			alignItems: 'center',
			textAlign: 'center',
		},
	});
});

export interface LandingPageProperties {
	onRedirect: () => void;
}

const LandingPage = () => {
	const classes = useStyles();
	return (
		<Page>
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Title/>
					<ChimeraX/>
				</Paper>
			</div>
		</Page>
	);
};

export default LandingPage;
