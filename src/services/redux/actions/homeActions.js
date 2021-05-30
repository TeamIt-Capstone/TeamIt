import {updateUsersListConstants} from '../constants/homeConstants'
import UserRepository from "../../database/UserRepository"

const db = {
    user: new UserRepository(),
}

const homeActions = {
    handleUpdateUsersList,
};

const updateUsersList = {
    request: () => {
        return {
            type: updateUsersListConstants.REQUEST,
        }
    },
    success: (data) => {
        return {
            type: updateUsersListConstants.SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: updateUsersListConstants.FAILURE,
            error
        }
    }
}

function handleUpdateUsersList() {
    return (dispatch, getState) => {
        dispatch(updateUsersList.request());

        db.user.getAllUsers().then(
            res => dispatch(updateUsersList.success(res)),
            err => dispatch(updateUsersList.failure(err)),
        )
    }
}

export default homeActions;