import userConstant from '../constants/userConstants'

const initialState = {
    usersProjects: [
        { 
            projectName: "Tassetee", 
            img: require("../../../../assets/coffee.png"), 
            projectName: "Tassetee", 
            domain: "Web",
            text: "You love coffee ? we love it too, join us and let's digitlize coffee",
            keyWords: [
                { 
                    key: 'Coffee' 
                }, 
                { 
                    key: 'WebDev' 
                }, 
                { 
                    key: 'Marketting' 
                }, 
            ] 
        },
        { 
            projectName: "Techeeth", 
            img: require("../../../../assets/teeth.png"), 
            projectName: "Techeeth", 
            domain: "Deep Learning", 
            text: "You love teethes ? we love it too, join us and let's digitlize teeths",
            keyWords: [
                { 
                    key: 'AI' 
                }, 
                { 
                    key: 'Deeplearning' 
                }, 
                { 
                    key: 'Software' 
                },
            ] 
        },
        { 
            projectName: "Autobots", 
            img: require("../../../../assets/auto.png"), 
            projectName: "Autobots", 
            domain: "Web Mobile AI",
            text: "You love cars ? we love it too, join us and let's digitlize cars arround the world",
            keyWords: [
                { 
                    key: 'NewTech' 
                }, 
                { 
                    key: 'Artificial intelligence' 
                },
            ] 
        },
        { 
            projectName: "Treelee", 
            img: require("../../../../assets/tree.jpg"), 
            projectName: "Treelee", 
            domain: "Web",
            text: "You love trees ? we too, join us and let's digitlize trees",
            keyWords: [
                { 
                    key: 'Web' 
                }, 
                { 
                    key: 'Future' 
                }, 
                { 
                    key: 'environment' 
                },
            ] 
        },
        { 
            projectName: "House care", 
            img: require("../../../../assets/house.png"), 
            projectName: "House", 
            domain: "Mobile",
            text: "You love your house ? we love it too, join us and let's digitlize your house",
            keyWords: [
                { 
                    key: 'Mobile' 
                }, 
                { 
                    key: 'Tech' 
                },
            ] 
        },
        { 
            projectName: "Todeliver", 
            img: require("../../../../assets/plane.png"), 
            projectName: "Todeliver", 
            domain: "Mobile",
            text: "You want deliver fast ? join us and let's deliver fast",
            keyWords: [
                { 
                    key: 'mobile' 
                }, 
                { 
                    key: 'mobile application' 
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