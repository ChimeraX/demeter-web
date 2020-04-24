import React from 'react';
import clsx from 'clsx';
import history from '../../routing/history';
import { Divider, Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DemeterXTheme from '../../theming/DemeterXTheme';

const useStyles = makeStyles((theme: DemeterXTheme) =>
	createStyles({
		item: {
			backgroundColor: theme.palette.primary.light,
			padding: theme.spacing(1, 2),
			[theme.breakpoints.up('sm')]: {
				padding: theme.spacing(2, 3),
			},
			'&:hover': {
				backgroundColor: theme.palette.primary.dark,
			},
		},
		icon: {
			color: 'inherit',
		},
		iconSelected: {
			color: theme.palette.secondary.light,
		},
		itemSelected: {
			backgroundColor: theme.palette.primary.dark,
		},
		divider: {
			backgroundColor: 'black',
		},
	}),
);

export interface LeftDrawerItem {
	id: string;
	icon: string;
	title: string;
	path: string;
	delimiter?: boolean;
}

export interface LeftDrawerItemProperties extends LeftDrawerItem {
	selected?: boolean;
	onSelect?: () => void;
}

const LeftDrawerItemWidget: React.FC<LeftDrawerItemProperties> = (properties) => {
	// properties
	const { id, icon, title, path, selected, onSelect, delimiter } = properties;

	// classes
	const classes = useStyles();
	const itemClassName = clsx(classes.item, { [classes.itemSelected]: selected });
	const iconClassName = clsx(classes.icon, { [classes.iconSelected]: selected });

	// internal widgets
	const Item = () => (
		<ListItem button key={id} onClick={() => {
			history.replace(path);
			onSelect && onSelect();
		}} className={itemClassName}>
			<ListItemIcon>
				<Icon className={iconClassName}>{icon}</Icon>
			</ListItemIcon>
			<ListItemText primary={title}/>
		</ListItem>
	);
	const ItemWithDivider = () => (
		<>
			<Item/>
			<Divider className={classes.divider}/>
		</>
	);
	return delimiter ? <ItemWithDivider/> : <Item/>;
};

export default LeftDrawerItemWidget;
