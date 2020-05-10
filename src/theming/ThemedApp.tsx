import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import DemeterXTheme from './DemeterXTheme';
import DemeterXState from '../redux/DemeterXState';
import greenTheme from './greenTheme';

interface ThemedAppProperties {
    theme: DemeterXTheme
}

const ThemedApp: React.FC<ThemedAppProperties> = (properties) => {
    const { theme, children } = properties;
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

const mapStateToProps = (state: DemeterXState) => {
    return {
        theme: greenTheme,
    };
};

export default connect(mapStateToProps)(ThemedApp);
