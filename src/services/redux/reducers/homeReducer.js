import {updateUsersListConstants} from '../constants/homeConstants';

const initialState = {

};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case updateUsersListConstants.REQUEST: 
            return {
                ...state,
                requesting: true,
            };
        case updateUsersListConstants.SUCCESS:
            return {
                ...state,
                requesting: false,
                usersList: action.data,
            };
        case updateUsersListConstants.FAILURE:
            return {
                ...state,
                requesting: false,
                error: action.error
            };
        default:
            return state;
    }
}