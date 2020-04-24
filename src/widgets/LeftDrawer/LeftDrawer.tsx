import React, { useState } from 'react';
import combineClasses from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import LeftDrawerItemWidget, { LeftDrawerItem } from './LeftDrawerItem';
import DemeterXTheme from '../../theming/DemeterXTheme';
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme: DemeterXTheme) => {
	return createStyles({
		drawerBackground: {
			backgroundColor: theme.palette.primary.light,
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: 'nowrap',
		},
		drawerOpen: {
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		drawerClose: {
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			overflowX: 'hidden',
			width: theme.spacing(7) + 1,
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9) + 1,
			},
		},
		toolbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
		},
		paper: {
			boxShadow: 'black 0px 0px 5px',
		},
	});
});

export interface LeftDrawerProperties {
	open: boolean;
	items: LeftDrawerItem[];
}

const LeftDrawer: React.FC<LeftDrawerProperties> = (properties) => {
	// properties
	const { open, items } = properties;

	const path = useLocation().pathname;
	const selectedItem = items.find(item => item.path === path)?.id;

	// state
	const [selected, setSelected] = useState<string | undefined>(selectedItem);

	// css classes
	const classes = useStyles();
	const drawer = open ? classes.drawerOpen : classes.drawerClose;
	const drawerAll = combineClasses(classes.drawer, drawer);
	const paper = combineClasses(classes.paper, classes.drawerBackground, drawer);

	return (
		<Drawer variant="permanent" className={drawerAll} classes={{ paper }}>
			<div className={classes.toolbar}/>
			<List>
				{items.map((item) => (
					<LeftDrawerItemWidget
						key={item.id}
						id={item.id}
						icon={item.icon}
						title={item.title}
						onSelect={() => {
							setSelected(item.id);
						}}
						path={item.path}
						selected={selected === item.id}
						delimiter={item.delimiter}
					/>
				))}
			</List>
		</Drawer>
	);
};

export default LeftDrawer;
