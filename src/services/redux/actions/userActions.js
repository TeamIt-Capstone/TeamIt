
import { updateConstant, downloadUserConstant } from "../constants/userConstants";
import UserRepository from "../../database/UserRepository"

const db = {
    user: new UserRepository(),
}

const userAction = {
    handleUpdate,
    handleDownloadUser,
};

const update = {
    request: () => {
        return {
            type: updateConstant.REQUEST,
        }
    },
    success: (data) => {
        return {
            type: updateConstant.SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: updateConstant.FAIL,
            error
        }
    }
}
function handleUpdate(user) {
    return (dispatch, getState) => {
        dispatch(update.request());
        
        console.log("update user: " + user?.profile?.username)
        // firebase -> update user
    }
}

const downloadUser = {
    request: () => {
        return {
            type: downloadUserConstant.REQUEST,
        }
    },
    success: (data) => {
        return {
            type: downloadUserConstant.SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: downloadUserConstant.FAIL,
            error
        }
    }
}

function handleDownloadUser(uid) {
    return (dispatch, getState) => {
        dispatch(downloadUser.request());
        db.user.getSingleUserById(uid).then(
            res => dispatch(downloadUser.success(res)),
            err => dispatch(downloadUser.failure(err))
        )
    }
}

export default userAction;