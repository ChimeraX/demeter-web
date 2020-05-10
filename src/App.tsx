import React from 'react';
import store from './redux/store';
import { Provider as StoreProvider } from 'react-redux';
import Routes from './routing/Routes';
import ThemedApp from './theming/ThemedApp';

const AppContainer = () => {
	return (
		<StoreProvider store={store}>
			<ThemedApp>
				<Routes/>
			</ThemedApp>
		</StoreProvider>
	);
};

export default AppContainer;

