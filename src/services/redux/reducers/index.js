import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducer'
import userReducer from '../reducers/userReducer'
import homeReducer from '../reducers/homeReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    home: homeReducer,
})

export default rootReducer;