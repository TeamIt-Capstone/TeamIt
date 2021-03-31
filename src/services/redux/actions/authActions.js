import auth from "../../firebase/auth";
import authConstant from "../constants/authConstants";

const firebase_auth = new auth();

const authAction = {
    handleLogin,
    handleRegister
};

const login = {
    request: () => {
        return {
            type: authConstant.LOGIN_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: authConstant.LOGIN_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: authConstant.LOGIN_FAILURE,
            error
        }
    }
}

const register = {
    request: () => {
        return {
            type: authConstant.REGISTER_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: authConstant.REGISTER_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: authConstant.REGISTER_FAILURE,
            error
        }
    }
}

function handleLogin(email, password) {
    return (dispatch, getState) => {
        dispatch(login.request());
        firebase_auth.signIn(email, password).then(
            res => dispatch(login.success(res)),
            err => dispatch(login.failure(err))
        )
    }
}

function handleRegister(email, password) {
    return (dispatch, getState) => {
        dispatch(register.request);
        firebase_auth.register(email, password).then(
            res => dispatch(register.success(res)),
            err => dispatch(register.failure(err))
        );
    }
}

export default authAction;