import authConstant from '../constants/authConstants'

const initialState = {

};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        //LOGIN START
        case (authConstant.LOGIN_REQUEST):
            return {
                ...state,
                requesting: true,
                user: null,
                error: null,
            }
        case (authConstant.LOGIN_SUCCESS):
            return {
                ...state,
                requesting: false,
                user: action.data
            }
        case (authConstant.LOGIN_FAILURE):
            return {
                ...state,
                requesting: false,
                error: action.error
            }
        //LOGIN END
        //REGISTER START
        case (authConstant.REGISTER_REQUEST):
            return {
                ...state,
                requesting: true,
                user: null,
                error: null,
            }
        case (authConstant.REGISTER_SUCCESS):
            return {
                ...state,
                requesting: false,
                // user: action.data
            }
        case (authConstant.REGISTER_FAILURE):
            return {
                ...state,
                requesting: false,
                error: action.error
            }
        //REGISTER END
        default:
            return state;
    }
}