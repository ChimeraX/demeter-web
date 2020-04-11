import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontSize: '32px',
            fontWeight: 'bold',
            fontFamily: 'Cinzel, serif',
        },
    }),
);

export interface TitleProperties {
    text: string;
    icon: string;
}

const Title: React.FC<TitleProperties> = (props) => {
    const { text, icon } = props;
    const classes = useStyles();
    return (
        <div className={classes.title}>
            <Icon>{icon}</Icon>
            {text}
        </div>
    );
};

export default Title;
