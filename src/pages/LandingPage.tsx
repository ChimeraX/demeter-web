import React from 'react';
import Page from '@chimerax/common-web/lib/widgets/Page';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DemeterXTheme from '../theming/DemeterXTheme';
import {
	CssBaseline,
	Paper,
} from '@material-ui/core';
import Title from '../components/Title';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
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
			height: '150px',
			width: '400px',
			backgroundColor: '#c7c6c6',
			top: '25%',
			left: '10%',
			transform: 'translate(0%, -50%)',
			position: 'absolute',
			alignItems: 'center',
			textAlign: 'center',
			display: 'flex',
			borderRadius: '15px',
		},
		toolbar: {
			transform: 'scale(1.1)',
			borderRadius: '15px',
			backgroundColor: '#262821'
		},
		content: {
			flexGrow: 1,
			paddingTop: theme.spacing(8),
			paddingRight: theme.spacing(3),
			paddingLeft: theme.spacing(3),
		},
	});
});

const LandingPage = () => {
	const classes = useStyles();
	return (
		<Page>
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<CssBaseline/>
					<AppBar
						position="fixed"
						className={classes.toolbar}>
						<Toolbar>
							<Title/>
						</Toolbar>
					</AppBar>
					<div className={classes.content}>
						<ChimeraX/>
					</div>
				</Paper>
			</div>
		</Page>
	);
};

export default LandingPage;
