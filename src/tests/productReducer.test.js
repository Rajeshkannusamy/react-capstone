import ProductReducer from '../reducers/productReducer';
import * as types from '../actions/actionTypes';

describe('Testing product reducer', () => {
    
    let defaultState;

    beforeEach(() => {
        defaultState = [{
            "id": 8,
            "name": "scooty pep",
            "category": "Motor cycle",
            "manufacturer": "TVS",
            "price": 70000,
            "quantity": 3,
            "description": "The TVS Scooty is a brand of Scooters made by TVS Motors of India. It is marketed mainly to women, and in 2009 was the largest selling brand among scooters aimed specifically at women buyers, selling about 25,000 units per month, compared to about 60,000 per month for the overall top selling scooter in India",
            "image": "https://3.imimg.com/data3/HP/GC/MY-3535906/tvs-scooty-pep-500x500.jpg"
        }]
    });

    it('should return the initial state', () => {
        expect(ProductReducer(undefined, [])).toEqual([]);
    });

    it('should FETCH_ALL_PRODUCTS', () => {
        let action = {};
        action.type = types.FETCH_ALL_PRODUCTS;
        action.products = defaultState;
        expect(ProductReducer([], action)).toHaveLength(1);
    });

    it('should ADD_PRODUCT', () => {
        let action = {};
        action.type = 'ADD_PRODUCT';
        action.product = {
            "id": 9,
            "name": "TVS Sports",
            "category": "Motor cycle",
            "manufacturer": "TVS",
            "price": 84000,
            "quantity": 1,
            "description": "TVS Motor Company Limited is an Indian multinational motorcycle company headquartered at Chennai, India. It is the third largest motorcycle company in India with a revenue of over ₹20,000 crore in 2018–19.",
            "image": "https://cdn1.droom.in//uploads/category/TVS/20201017133516000000-6661557610645002241.jpg"
        };
        expect(ProductReducer(defaultState, action)).toHaveLength(2);
    });

    it('should DELETE_PRODUCT', () => {
        let action = {};
        action.type = types.DELETE_PRODUCT;
        action.index = 0;
        expect(ProductReducer(defaultState, action)).toHaveLength(0);
    });

});
