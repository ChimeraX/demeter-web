import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Category from '../model/Category';
import { Icon, IconButton, useMediaQuery } from '@material-ui/core';
import DemeterXTheme from '../theming/DemeterXTheme';

const useStyles = makeStyles((theme: DemeterXTheme) => {
		console.log(theme.palette.secondary.main);
		return createStyles({
			root: {
				display: 'flex',
				backgroundColor: 'transparent',
			},
			scrollable: {
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around',
				overflow: 'auto',
				backgroundColor: 'transparent',
			},
			gridList: {
				flexWrap: 'nowrap',
				transform: 'translateZ(0)',
			},
			tile: {
				borderRadius: '12px',
				margin: '0px 12px 0px',
			},
			childTile: {
				animation: '$grow 0.5s ease',
			},
			title: {
				userSelect: 'none',
				color: 'white',
				fontSize: '18px',
				textAlign: 'center',
				fontFamily: 'cursive',
			},
			titleBar: {
				background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
			},
			button: {
				borderRadius: 0,
				backgroundColor: theme.palette.primary.dark,
				'&:hover': {
					backgroundColor: theme.palette.primary.light,
				},
			},
			'@keyframes grow': {
				'0%': { transform: 'scale(0.65)' },
				'100%': { transform: 'scale(1.0)' },
			},
		});
	},
);

export interface CategoryListProperties {
	categories: Category[];
	onClick: (category: Category) => void;
}

const CategoryList: React.FC<CategoryListProperties> = (properties) => {
	// properties
	const { categories, onClick } = properties;

	// classes
	const classes = useStyles();

	const theme = useTheme();
	const sm = useMediaQuery(theme.breakpoints.up('sm'));
	const md = useMediaQuery(theme.breakpoints.up('md'));
	const lg = useMediaQuery(theme.breakpoints.up('lg'));

	const tileClass = (category: Category) => {
		let result = classes.tile;
		if (category.lastFetched) {
			result = clsx(classes.tile, classes.childTile);
		}
		return result;
	};

	const cols = (() => {
		switch (true) {
			case lg:
				return 4;
			case md:
				return 3;
			case sm:
				return 3;
			default:
				return 4;
		}
	})();

	const scrollLeft = () => {
	};
	const scrollRight = () => {
	};

	return (
		<div className={classes.root}>
			<IconButton onClick={scrollLeft} className={classes.button}>
				<Icon>keyboard_arrow_left</Icon>
			</IconButton>
			<div className={classes.scrollable}>
				<GridList className={classes.gridList} cols={cols}>
					{categories.map((category) => (
						<GridListTile key={category.id}
						              classes={{ tile: tileClass(category) }}
						              onDrag={() => console.log('dragging')}
						              onClick={() => onClick(category)}>
							<img src={category.image} alt={category.name}/>
							<GridListTileBar
								title={category.name}
								classes={{
									root: classes.titleBar,
									title: classes.title,
								}}
							/>
						</GridListTile>
					))}
				</GridList>
			</div>
			<IconButton onClick={scrollRight} className={classes.button}>
				<Icon>keyboard_arrow_right</Icon>
			</IconButton>
		</div>
	);
};

export default CategoryList;
