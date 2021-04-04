import userConstant from '../constants/userConstants'

const initialState = {
    favList: [{
                    id:1,
                    name: 'Jeannine Musk',
                    avatar_url: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
                    subtitle: 'Software Ing'
                },
                {
                    id:2,
                    name: 'Martin Dupond',
                    avatar_url: 'https://i.pinimg.com/564x/17/56/8f/17568fcd478e0699067ca7b9a34c702f.jpg',
                    subtitle: 'FullStack Dev'
                },
                {
                    id:3,
                    name: 'Jeannine Musk',
                    avatar_url: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
                    subtitle: 'Software Ing'
                },
                {
                    id:4,
                    name: 'Martin Dupond',
                    avatar_url: 'https://i.pinimg.com/564x/17/56/8f/17568fcd478e0699067ca7b9a34c702f.jpg',
                    subtitle: 'FullStack Dev'
                },
                {
                    id:5,
                    name: 'Jeannine Musk',
                    avatar_url: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
                    subtitle: 'Software Ing'
                },
                {
                    id:6,
                    name: 'Martin Dupond',
                    avatar_url: 'https://i.pinimg.com/564x/17/56/8f/17568fcd478e0699067ca7b9a34c702f.jpg',
                    subtitle: 'FullStack Dev'
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