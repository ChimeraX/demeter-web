import React, { useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';
import Grow from '@chimerax/common-app/lib/widgets/Grow';
import GlobalSearch from '../components/GlobalSearch';
import Title from '../components/Title';
import LeftDrawer from './LeftDrawer';
import DemeterXTheme from '../theming/DemeterXTheme';
import UserWidget from '../components/UserWidget';

const useStyles = makeStyles((theme: DemeterXTheme) => {
	return createStyles({
		root: {
			display: 'flex',
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			backgroundColor: theme.palette.primary.dark,
		},
		menuButton: {
			marginRight: 36,
		},
		hide: {
			display: 'none',
		},
		toolbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
		},
		content: {
			flexGrow: 1,
			paddingTop: theme.spacing(8),
			paddingRight: theme.spacing(3),
			paddingLeft: theme.spacing(3),
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center center',
			backgroundAttachment: 'fixed',
			backgroundSize: 'cover',
			backgroundImage: 'url(\'./images/kitchen_background.jpg\')',
		},
	});
});

const Main: React.FC = (props) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};

	const OpenButton = () => {
		return (
			<IconButton
				onClick={toggleOpen}
				edge="start"
				className={clsx(classes.menuButton, {
					[classes.hide]: false,
				})}
			>
				<Icon>menu</Icon>
			</IconButton>
		);
	};

	return (
		<div className={classes.root}>
			<CssBaseline/>
			<AppBar
				position="fixed"
				className={classes.appBar}
			>
				<Toolbar>
					<OpenButton/>
					<Title/>
					<Grow/>
					<GlobalSearch/>
					<UserWidget/>
				</Toolbar>
			</AppBar>
			<LeftDrawer open={open}/>
			<main className={classes.content}>{props.children}</main>
		</div>
	);
};

export default Main;
