
import {
    updateConstant,
    downloadUserConstant,
    updateSeenConstants,
    updateMatchsConstants,
    updateFavoritesConstants
} from "../constants/userConstants";
import UserRepository from "../../database/UserRepository"

const db = {
    user: new UserRepository(),
}

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

const updateSeen = {
    request: () => {
        return {
            type: updateSeenConstants.REQUEST,
        }
    },
    success: (data) => {
        return {
            type: updateSeenConstants.SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: updateSeenConstants.FAIL,
            error
        }
    }
}

function handleUpdateSeen(uid, seenUid) {
    return (dispatch, getState) => {
        dispatch(updateSeen.request());
        const {user} = getState();
        const data = {
            seen: user.user.seen.concat(seenUid)
        }
        db.user.updateSingleUserById(uid, data).then(
            () => dispatch(updateSeen.success(seenUid)),
            err => dispatch(updateSeen.failure(err))
        )
    }
}

const updateMatchs = {
    request: () => {
        return {
            type: updateMatchsConstants.REQUEST,
        }
    },
    success: (data) => {
        return {
            type: updateMatchsConstants.SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: updateMatchsConstants.FAIL,
            error
        }
    }
}

function handleUpdateMatchs(uid, matchUid) {
    return (dispatch, getState) => {
        dispatch(updateMatchs.request());
        const {user} = getState();
        const match = {
            uid: matchUid,
            matched: false,
        }
        const data = {
            matchs: user.user.matchs.concat(match)
        }
        db.user.updateSingleUserById(uid, data).then(
            () => dispatch(updateMatchs.success(match)),
            err => dispatch(updateMatchs.failure(err))
        )
    }
}

const updateFavorites = {
    request: () => {
        return {
            type: updateFavoritesConstants.REQUEST,
        }
    },
    success: (data) => {
        return {
            type: updateFavoritesConstants.SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: updateFavoritesConstants.FAIL,
            error
        }
    }
}

function handleUpdateFavorites(uid, favoriteUid) {
    return (dispatch, getState) => {
        dispatch(updateFavorites.request());
        const {user} = getState();
        const data = {
            favorites: user.user.favorites.concat(favoriteUid)
        }
        db.user.updateSingleUserById(uid, data).then(
            () => dispatch(updateFavorites.success(favoriteUid)),
            err => dispatch(updateFavorites.failure(err))
        )
    }
}

const userAction = {
    handleUpdate,
    handleDownloadUser,
    handleUpdateSeen,
    handleUpdateMatchs,
    handleUpdateFavorites,
};

export default userAction;