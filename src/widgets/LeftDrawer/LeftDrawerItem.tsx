import { Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        item: {
            padding: theme.spacing(1, 2),
            [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(2, 3),
            },
        },
        icon: {
            '&:hover': {
                color: theme.palette.secondary.main,
            },
        },
    }),
);

export interface LeftDrawerItemProperties {
    icon: string;
    title: string;
    onClick: () => void;
    color: string;
}

const LeftDrawerItem: React.FC<LeftDrawerItemProperties> = (properties) => {
    const { icon, title, onClick, color } = properties;
    const classes = useStyles();
    return (
        <ListItem button key={title} onClick={onClick} className={classes.item}>
            <ListItemIcon>
                <Icon style={{ color, textShadow: '1px 1px 1px black' }}>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    );
};

export default LeftDrawerItem;
