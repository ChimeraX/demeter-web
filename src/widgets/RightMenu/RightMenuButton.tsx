import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconButton: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
            '&:focus': {
                backgroundColor: 'transparent',
            },
            '&:active': {
                backgroundColor: 'transparent',
            },
        },
    }),
);

export interface RightMenuButtonProperties {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    icon: string;
}

const RightMenuButton: React.FC<RightMenuButtonProperties> = (properties) => {
    const { onClick, icon } = properties;
    const classes = useStyles();
    return (
        <IconButton
            aria-haspopup="true"
            color="inherit"
            onClick={onClick}
            className={classes.iconButton}
            disableTouchRipple={true}
        >
            <Icon>{icon}</Icon>
        </IconButton>
    );
};

export default RightMenuButton;
