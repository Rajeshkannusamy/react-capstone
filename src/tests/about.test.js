import React from 'react';
import { shallow , mount } from 'enzyme';
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

    test('Checking About page header', () => {
        const wrapper = shallow(<About/>);
        const header = wrapper.find('Card').first();
        const headerContent = header.text();
        //expect(header).to.have.lengthOf(4);
        expect(headerContent).toBe('About Bike Palace - The Place where we can able to find three top most brands of bikes both New bikes as well as old bike at differnt price');
    });

    test('Checking 4 cards in About page', () => {
        const wrapper = shallow(<About/>);
        const header = wrapper.find('Card');
        expect(header.length).toBe(4);
    });

});
