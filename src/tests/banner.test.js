import React from 'react';
import { shallow, mount } from 'enzyme';
import Banner from '../components/banner';

describe('Banner page snapshot', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        wrapper = mount(<Banner {...props} />);
    });
 
    test('renders correctly', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test('Checking 3 cards in Banner Page', () => {
        const wrapper = shallow(<Banner/>);
        const header = wrapper.find('img');
        console.log(header.length);
        header.forEach((node) => {
            expect(node.hasClass('d-block w-100 carousel-img-h')).toEqual(true);
        });
    });
});
