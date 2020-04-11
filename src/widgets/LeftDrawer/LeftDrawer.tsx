import React from 'react';
import combineClasses from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Icon, List } from '@material-ui/core';
import Grow from '@chimerax/common-app/lib/widgets/Grow';
import LeftDrawerItem, { LeftDrawerItemProperties } from './LeftDrawerItem';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
);

export interface LeftDrawerProperties {
    title: string;
    open: boolean;
    onClose: () => void;
    items: LeftDrawerItemProperties[];
}

const LeftDrawer: React.FC<LeftDrawerProperties> = (properties) => {
    const classes = useStyles();
    const { title, open, onClose, items } = properties;
    const drawer = open ? classes.drawerOpen : classes.drawerClose;
    const drawerAll = combineClasses(classes.drawer, drawer);
    const paper = combineClasses(classes.paper, drawer);
    return (
        <Drawer variant="permanent" className={drawerAll} classes={{ paper }}>
            <div className={classes.toolbar}>
                <div>{title}</div>
                <Grow />
                <IconButton onClick={onClose}>
                    <Icon>chevron_left</Icon>
                </IconButton>
            </div>
            <Divider />
            <List>
                {items.map((item) => (
                    <LeftDrawerItem key={item.title} {...item} />
                ))}
            </List>
        </Drawer>
    );
};

export default LeftDrawer;
