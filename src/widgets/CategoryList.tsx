import React, { useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Category from '../model/Category';
import { Icon, IconButton, useMediaQuery } from '@material-ui/core';
import DemeterXTheme from '../theming/DemeterXTheme';

const useStyles = makeStyles((theme: DemeterXTheme) => {
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
				height: '150px', width: '500px',
				borderRadius: '12px',
				margin: '0px 12px 0px',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				textAlign: 'center',
				userSelect: 'none',
				color: 'white',
				fontSize: '18px',
				fontFamily: 'cursive',
			},
			childTile: {
				animation: '$grow 0.5s ease',
			},
			button: {
				borderRadius: 0,
				backgroundColor: theme.palette.primary.dark,
				'&:hover': {
					backgroundColor: theme.palette.primary.light,
				},
			},
			inactiveButton: {
				backgroundColor: theme.palette.primary.main,
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

	const [index, setIndex] = useState(0);

	const theme = useTheme();
	const xs = useMediaQuery(theme.breakpoints.up('xs'));
	const sm = useMediaQuery(theme.breakpoints.up('sm'));
	const md = useMediaQuery(theme.breakpoints.up('md'));
	const lg = useMediaQuery(theme.breakpoints.up('lg'));

	const tileClass = (category: Category) => {
		let result = classes.tile;
		if (category.fromLastFetch) {
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
				return 2;
			case xs:
				return 2;
			default:
				return 4;
		}
	})();

	const scrollLeft = () => {
		if (index > 0) {
			setIndex(index - 1);
		}
	};
	const scrollRight = () => {
		if (index < categories.length - cols) {
			setIndex(index + 1);
		}
	};

	return (
		<div className={classes.root}>
			<IconButton onClick={scrollLeft} className={classes.button}>
				<Icon>keyboard_arrow_left</Icon>
			</IconButton>
			<table className={classes.scrollable}>
				<tbody>
					<tr>
						{categories.slice(index, index + cols).map((category) => (
							<td
								key={category.id}
								onClick={() => onClick(category)}
								className={tileClass(category)}
								style={{ backgroundImage: `url('${category.image}')` }}
							>{category.name}</td>
						))}
					</tr>
				</tbody>
			</table>
			<IconButton onClick={scrollRight} className={classes.button}>
				<Icon>keyboard_arrow_right</Icon>
			</IconButton>
		</div>
	);
};

export default CategoryList;
