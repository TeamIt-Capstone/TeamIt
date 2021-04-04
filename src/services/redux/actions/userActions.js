
import updateConstant from "../constants/userConstants";

const userAction = {
    update,
};

const updateConst = {
    request: () => {
        return {
            type: updateConstant.UPDATE_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: updateConstant.UPDATE_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: updateConstant.UPDATE_FAIL,
            error
        }
    }
}
function update(user) {
    return (dispatch, getState) => {
        dispatch(updateConst.request());
        
        console.log("update user: " + user?.profile?.username)
        // firebase -> update user
    }
}

export default userAction;