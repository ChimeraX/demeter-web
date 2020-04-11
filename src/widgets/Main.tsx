import React, { useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';
import Grow from '@chimerax/common-app/lib/widgets/Grow';
import GlobalSearch from '../components/GlobalSearch';
import Title from '../components/Title';
import LeftDrawer from './LeftDrawer';
import history from '../routing/history';
import { blue, grey, red, yellow } from '@material-ui/core/colors';
import RightMenu from '../components/RightMenu';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

const items = [
    {
        icon: 'explore',
        title: 'Discover',
        onClick: () => history.replace('discover'),
        color: blue.A100,
    },
    {
        icon: 'favorite',
        title: 'Favorites',
        onClick: () => history.replace('favorites'),
        color: red.A100,
    },
    {
        icon: 'menu_book',
        title: 'Saved',
        onClick: () => history.replace('saved'),
        color: yellow.A100,
    },
    {
        icon: 'functions',
        title: 'Calculate',
        onClick: () => history.replace('calculator'),
        color: grey.A100,
    },
];

const Main: React.FC = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const OpenButton = () => {
        return (
            <IconButton
                onClick={handleOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                })}
            >
                <Icon>menu</Icon>
            </IconButton>
        );
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <OpenButton />
                    <Title />
                    <Grow />
                    <GlobalSearch />
                    <RightMenu />
                </Toolbar>
            </AppBar>
            <LeftDrawer title="Left drawer" open={open} onClose={handleClose} items={items} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
};

export default Main;
