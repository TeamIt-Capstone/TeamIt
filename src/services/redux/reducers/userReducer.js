import userConstant from '../constants/userConstants'

const initialState = {
    projects: [
        { 
            projectName: "Project 1", 
            img: require("../../../assets/icon.png"), 
            projectName: "project 1", 
            domain: "tech 1", 
            keyWords: [
                { 
                    key: 'a1' 
                }, 
                { 
                    key: 'a2' 
                }, 
                { 
                    key: 'a3' 
                }, 
                { 
                    key: 'a4' 
                },
            ] 
        },
        { 
            projectName: "Project 2", 
            img: require("../../../assets/icon.png"), 
            projectName: "project 2", 
            domain: "tech 2", 
            keyWords: [
                { 
                    key: 'b1' 
                }, 
                { 
                    key: 'b2' 
                }, 
                { 
                    key: 'b3' 
                },
            ] 
        },
        { 
            projectName: "Project 3", 
            img: require("../../../assets/icon.png"), 
            projectName: "project 3", 
            domain: "tech 1", 
            keyWords: [
                { 
                    key: 'c1' 
                }, 
                { 
                    key: 'c2' 
                }, 
                { 
                    key: 'c3' 
                }, 
                { 
                    key: 'c4' 
                }, 
                { 
                    key: 'c5' 
                },
            ] 
        },
        { 
            projectName: "Project 4", 
            img: require("../../../assets/icon.png"), 
            projectName: "project 4", 
            domain: "tech 1", 
            keyWords: [
                { 
                    key: 'd1' 
                }, 
                { 
                    key: 'd2' 
                }, 
                { 
                    key: 'd3' 
                },
            ] 
        },
        { 
            projectName: "Project 5", 
            img: require("../../../assets/icon.png"), 
            projectName: "project 5", 
            domain: "tech 1", 
            keyWords: [
                { 
                    key: 'e1' 
                }, 
                { 
                    key: 'e2' 
                },
            ] 
        },
        { 
            projectName: "Project 6", 
            img: require("../../../assets/icon.png"), 
            projectName: "project 6", 
            domain: "tech 1", 
            keyWords: [
                { 
                    key: 'f1' 
                }, 
                { 
                    key: 'f2' 
                }, 
                { 
                    key: 'f3' 
                }, 
                { 
                    key: 'f4' 
                }, 
                { 
                    key: 'f5' 
                },
            ] 
        },       
    ],
};

export default function updateReducer(state = initialState, action) {
    switch (action.type) {
        //UPDATE START
        case (userConstant.UPDATE_REQUEST):
            return {
                ...state,
                requesting: true,
                user: null,
                error: null,
            }
        case (userConstant.UPDATE_SUCCESS):
            return {
                ...state,
                requesting: false,
                user: action.data
            }
        case (userConstant.UPDATE_FAILURE):
            return {
                ...state,
                requesting: false,
                error: action.error
            }
        //UPDATE END
        default:
            return state;
    }
}