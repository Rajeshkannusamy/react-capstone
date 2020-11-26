import React from 'react';
import { mount } from 'enzyme';
import About from '../components/about';

describe('About page snapshot', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        wrapper = mount(<About {...props} />);
    });

    test('renders correctly', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});