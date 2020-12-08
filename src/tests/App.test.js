import * as React from 'react';
import { shallow , mount } from 'enzyme';
import { helper } from '../helper';
import { MemoryRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { findByTestAtrr, testStore } from './Utils';
import App from '../App';
import Home from '../components/home';
import Header from '../components/header';
import About from '../components/about';
import AddProduct from '../components/addProduct';
import Profile from '../components/profile';



const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = mount(<Provider store={store} ><MemoryRouter><App /></MemoryRouter></Provider>);
    return wrapper;
};

describe('Header page snapshot', () => {

    const store = configureStore();
    let wrapper;
    let props;
    let pathMap;
    let state = {

        isLoggedIn: false,
        showModal: true,
        showSignin: true
    }
    beforeEach(() => {

        const initialState = {
            products: [
                {
                    "name": "Honda CBR",
                    "manufacturer": "Honda",
                    "quantity": "2",
                    "price": "130000",
                    "image": "https://images.carandbike.com/bike-images/large/honda/cbr-1000rr/honda-cbr-1000rr.jpg?v=16",
                    "description": "Powering the new 2018 Honda CBR250R is a 249.6cc, single cylinder, liquid-cooled engine mated to a six-speed transmission. The fuel injected mill is good for churning out respective power and torque outputs of 26.5 bhp and 22.9 Nm.",
                    "id": 1
                }
            ],
            users: [
                {
                    "firstName": "Rajesh",
                    "lastName": "K",
                    "email": "rajesh@gmail.com",
                    "password": "Password@123",
                    "id": 3,
                    "city": "Coimbatore",
                    "mobile": "9965843081",
                    "views": {
                      "1": 6,
                      "3": 2,
                      "4": 2
                    }
                }
            ]
        }
        wrapper = setUp(initialState);
        pathMap = wrapper.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});
    });

     test('renders corectly', () => {
         expect(wrapper.debug()).toMatchSnapshot();
     });

     test('Lazyloaded Home page is called', () => {
         console.log ("", typeof pathMap['/']);

         expect(pathMap['/']).toHaveProperty('_result');
         expect(pathMap['/']).toHaveProperty('_status');
     });

     test('Lazyloaded Add Product page is called', () => {
         console.log(pathMap['/add-product']);

         expect(pathMap['/add-product']).toHaveProperty('_result');
         expect(pathMap['/add-product']).toHaveProperty('_status');
     });

     test('Lazyloaded Profile page is called', () => {
        expect(pathMap['/profile']).toHaveProperty('_result');
        expect(pathMap['/profile']).toHaveProperty('_status');
     });

     test('Lazyloaded About page is called', () => {
        expect(pathMap['/about']).toHaveProperty('_result');
        expect(pathMap['/about']).toHaveProperty('_status');
        wrapper.unmount();
     });
});