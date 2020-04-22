import React from 'react';
import clsx from 'clsx';
import history from '../../routing/history';
import { Divider, Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		item: {
			padding: theme.spacing(1, 2),
			[theme.breakpoints.up('sm')]: {
				padding: theme.spacing(2, 3),
			},
			'&:hover': {
				backgroundColor: 'rgba(255, 255, 255, 0.5)',
			},
		},
		icon: {
			textShadow: '1px 1px 1px black',
		},
		iconSelected: {
			color: theme.palette.secondary.dark,
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
	const iconClassName = clsx(classes.icon, { [classes.iconSelected]: selected });

	// internal widgets
	const Item = () => (
		<ListItem button key={id} onClick={() => {
			history.replace(path);
			onSelect && onSelect();
		}} className={classes.item}>
			<ListItemIcon>
				<Icon className={iconClassName}>{icon}</Icon>
			</ListItemIcon>
			<ListItemText primary={title}/>
		</ListItem>
	);
	const ItemWithDivider = () => (
		<>
			<Item/>
			<Divider/>
		</>
	);
	return delimiter ? <ItemWithDivider/> : <Item/>;
};

export default LeftDrawerItemWidget;
