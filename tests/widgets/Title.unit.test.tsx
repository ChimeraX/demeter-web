import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Title, { TitleProperties } from '../../src/widgets/Title';

describe('Title unit tests', () => {
    let title: ReactWrapper;
    const properties: TitleProperties = {
        text: 'Hello world',
        icon: 'hello',
    };

    beforeAll(() => {
        title = mount(<Title {...properties} />);
    });

    it('should render with title and icon', () => {
        expect(title).toBeDefined();
    });
});
