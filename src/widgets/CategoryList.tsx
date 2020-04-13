import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DemeterXTheme from '../theming/DemeterXTheme';
import { GridList, GridListTile, GridListTileBar, Icon, IconButton } from '@material-ui/core';
import Category from '../model/Category';

const boxShadow = (color: string, x: number, y: number, blur: number) => {
	const shadows = [
		`${color} ${x}px ${y}px ${blur}px`,
		// `${color} ${-x}px ${y}px ${blur}px`,
		// `${color} ${x}px ${-y}px ${blur}px`,
		// `${color} ${-x}px ${-y}px ${blur}px`,
	];
	return shadows.join(', ');
};

const useStyles = makeStyles((theme: DemeterXTheme) => {
	return createStyles({
		root: {
			display: 'flex',
		},
		scrollable: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			overflow: 'hidden',
		},
		gridList: {
			flexWrap: 'nowrap',
			transform: 'translateZ(0)',
		},
		image: {
			boxShadow: boxShadow('black', 1, 1, 1),
			borderRadius: theme.spacing(3),
		},
		gridTile: {
			margin: '10px',
		},
		title: {
			backgroundColor: 'transparent',
			textAlign: 'center',
		},
		button: {
			'&:hover': {
				backgroundColor: 'transparent',
			},
		},
	});
});

export interface CategoryListProperties {
	categories: Category[];
	onClick: (category: Category) => void;
}

const CategoryList = (properties: CategoryListProperties) => {
	const classes = useStyles();

	const { categories, onClick } = properties;

	const scrollRight = () => {
	};
	const scrollLeft = () => {
	};

	return (
		<div className={classes.root}>
			<IconButton onClick={scrollRight} className={classes.button}>
				<Icon>keyboard_arrow_left</Icon>
			</IconButton>
			<div className={classes.scrollable}>
				<GridList className={classes.gridList} cols={3}>
					{categories.map((category) => (
						<GridListTile className={classes.gridTile} key={category.id} onClick={() => onClick(category)}>
							<img className={classes.image} src={category.image} alt={category.name}/>
							<GridListTileBar className={classes.title} title={category.name}/>
						</GridListTile>
					))}
				</GridList>
			</div>
			<IconButton onClick={scrollLeft} className={classes.button}>
				<Icon>keyboard_arrow_right</Icon>
			</IconButton>
		</div>
	);
};

export default CategoryList;
