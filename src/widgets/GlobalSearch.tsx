import React, { useState } from 'react';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Icon, IconButton, InputAdornment, InputBase } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			[theme.breakpoints.up('sm')]: {
				width: 'fit-content',
			},
		},
		searchInput: {
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
		},
	});
});

export interface GlobalSearchProperties {
	placeHolder: string;
	onChange?: (value: string) => void;
}

const GlobalSearch: React.FC<GlobalSearchProperties> = (properties) => {
	// properties
	const { placeHolder, onChange } = properties;

	// classes
	const classes = useStyles();

	// internal state
	const [open, setOpened] = useState(false);

	// handlers
	const openSearchBar = () => {
		setOpened(true);
	};

	const onValueChange = (value: string) => {
		onChange && onChange(value);
	};

	// internal widgets
	const SearchButton = () => (
		<div className={classes.search}>
			<IconButton onClick={openSearchBar}>
				<Icon>search</Icon>
			</IconButton>
		</div>
	);

	const CloseButton = () => (
		<InputAdornment
			position={'end'}
			component={IconButton}
			onClick={() => console.log('Hello')}>
			<Icon>close</Icon>
		</InputAdornment>
	);

	const SearchInput = () => (
		<div className={clsx(classes.search, classes.searchInput)}>
			<IconButton onClick={openSearchBar}>
				<Icon>search</Icon>
			</IconButton>
			<InputBase
				onChange={(event) => onValueChange(event.target.value)}
				placeholder={placeHolder}
				endAdornment={CloseButton}
			/>
		</div>
	);

	return open ? <SearchInput/> : <SearchButton/>;
};

export default GlobalSearch;
