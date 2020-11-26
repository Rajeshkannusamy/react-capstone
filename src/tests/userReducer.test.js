import UserReducer from '../reducers/userReducer';
import * as types from '../actions/actionTypes';

describe('Testing user reducer', () => {
    
    let defaultState;

    beforeEach(() => {
        defaultState = [{
            "firstName": "Rajeshkans",
            "lastName": "K",
            "email": "rajeshkans@gmail.com",
            "password": "Password@123",
            "id": 2,
            "city": "Coimbatore",
            "mobile": "9965843081",
            "views": {
                "1": 1,
                "3": 4,
                "5": 2,
            }
        }]
    });

    it('should return the initial state', () => {
        expect(UserReducer(undefined, [])).toEqual([]);
    });

    it('should FETCH_ALL_USERS', () => {
        let action = {};
        action.type = types.FETCH_ALL_USERS;
        action.users = [action.user];
        expect(UserReducer([], action)).toHaveLength(1);
    });

    it('should update the user', () => {
        let action = {};
        action.type = types.UPDATE_SINGLE_USER;
        action.user = {...defaultState[0]};
        action.user.firstName = "Rajesh";
        let updatedUser = UserReducer(defaultState, action);
        expect(updatedUser[0].firstName).toEqual("Rajesh");
    });
});
