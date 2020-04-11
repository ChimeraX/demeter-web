import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import TestTitle from '../../src/components/Title';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Icon } from '@material-ui/core';

const defaultReducer = (state = null) => state;

const reducer = combineReducers({
    defaultReducer,
});

const store = createStore(reducer);

const Title = () => (
    <Provider store={store}>
        <TestTitle />
    </Provider>
);

describe('Title integration tests', () => {
    let title: ReactWrapper;

    beforeAll(() => {
        title = mount(<Title />);
    });

    it('should render with title and icon', () => {
        expect(
            title.contains(
                <div>
                    <Icon>eco</Icon>
                    'Demeter-X'
                </div>,
            ),
        );
    });
});
