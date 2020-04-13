import React, { useState } from 'react';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Icon, IconButton, InputBase } from '@material-ui/core';
import combineClasses from 'clsx';

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
    const classes = useStyles();
    const { placeHolder, onChange } = properties;

    const [open, setOpened] = useState(false);

    const openSearchBar = () => {
        console.log('hello');
        setOpened(true);
    };

    const SearchButton = () => (
        <div className={classes.search}>
            <IconButton onClick={openSearchBar}>
                <Icon>search</Icon>
            </IconButton>
        </div>
    );

    const SearchInput = () => (
        <div className={combineClasses(classes.search, classes.searchInput)}>
            <IconButton onClick={openSearchBar}>
                <Icon>search</Icon>
            </IconButton>
            <InputBase
                onChange={(event) => onChange && onChange(event.target.value)}
                placeholder={placeHolder}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );

    return open ? <SearchInput /> : <SearchButton />;
};

export default GlobalSearch;
