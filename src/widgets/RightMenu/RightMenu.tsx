import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import RightMenuButton from './RightMenuButton';
import RightMenuButtonItem from './RightMenuButtonItem';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    }),
);

const buttons = [
    {
        onClick: () => alert('btn'),
        icon: 'account_circle',
    },
    {
        onClick: () => alert('btn'),
        icon: 'notifications',
    },
    {
        onClick: () => alert('btn'),
        icon: 'settings',
    },
];

const RightMenu: React.FC = () => {
    const classes = useStyles();

    const [anchor, setAnchor] = useState<(EventTarget & HTMLElement) | null>(null);

    const isMenuOpen = Boolean(anchor);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchor(null);
    };

    const renderMenu = (
        <Menu anchorEl={anchor} keepMounted open={isMenuOpen} onClose={handleMenuClose}>
            {buttons.map((button) => (
                <RightMenuButtonItem key={button.icon} {...button} />
            ))}
        </Menu>
    );

    const renderDesktopSection = (
        <div className={classes.sectionDesktop}>
            {buttons.map((button) => (
                <RightMenuButton key={button.icon} {...button} />
            ))}
        </div>
    );

    const renderMobileSection = (
        <div className={classes.sectionMobile}>
            <IconButton aria-label="show more" aria-haspopup="true" onClick={handleMenuOpen} color="inherit">
                <Icon>more_vert</Icon>
            </IconButton>
        </div>
    );

    return (
        <React.Fragment>
            {renderDesktopSection}
            {renderMobileSection}
            {renderMenu}
        </React.Fragment>
    );
};
export default RightMenu;
