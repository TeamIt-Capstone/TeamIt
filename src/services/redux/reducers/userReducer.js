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
                    name: 'Gérarldine Lauzier',
                    avatar_url: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                    subtitle: 'Webdesigner'
                },
                {
                    id:4,
                    name: 'Grégoire Beaudouin',
                    avatar_url: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
                    subtitle: 'Community Manager'
                },
                {
                    id:5,
                    name: 'Sabine Paquin',
                    avatar_url: 'https://audit-controle-interne.com/wp-content/uploads/2019/03/avatar-user-teacher-312a499a08079a12-512x512.png',
                    subtitle: 'Data Analyst'
                },
                {
                    id:6,
                    name: 'Pierre Lachapelle',
                    avatar_url: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
                    subtitle: 'Admin System'
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