import {updateConstant, downloadUserConstant} from '../constants/userConstants'

const initialState = {
        subscriptions: 
            {
                package: [
                    {
                        type: 'Silver',
                        theme_color:'#b3b3b3',
                        title:'Silver',
                        info:['Unlimited likes', '+ 3 more favorite sluts'],
                        icon:'add-shopping-cart',
                        prize:14.99,
                        duration: {
                            progressive:false,
                            persistence:['month'],
                        }
                    },
                    {
                        type: 'Gold',
                        theme_color:'#FFD700',
                        title:'Gold',
                        info:['Unlimited likes', '+ 5 more favorite slots', '+ Profile highlight', '+ 1 more project'],
                        icon:'add-shopping-cart',
                        prize:34.99,
                        duration: {
                            progressive:false,
                            persistence:['month'],
                        }
                    },
                    {
                        type: 'Diamond',
                        theme_color:'#b9f2ff',
                        title:'Diamond',
                        info:['Unlimited likes', '+ Unlimited favorite slots', '+ Profile highlight','+ 1 project highlight', '+ 2 more projects'],
                        icon:'add-shopping-cart',
                        prize:54.99,
                        duration: {
                            progressive:false,
                            persistence:['month'],
                        }
                    },
                ],
                highlight: [{
                        type: 'Profile highlight',
                        theme_color:'#00cc00',
                        title:'More visibility for your profile ?',
                        info:['Don\'t wait any longer !', 'Let everyone see you !!!', 'Highlight your profile for: \na day / 3 days / a week / 3 weeks !'],
                        icon:'visibility',
                        prize:4.99,
                        duration: {
                            progressive:true,
                            persistence:['a day','3 days', 'a week', '3 weeks'],
                        }
                    },
                    {
                        type: 'Project highlight',
                        theme_color:'#e600ac',
                        title:'More visibility for your project ?',
                        info:['Highlight your project', 'Attract a maximum of profile NOW !!!','You can choose the duration of the highlight : \na day / 3 days / a week / 3 weeks !'],
                        icon:'trending-up',
                        prize:6.99,
                        duration: {
                            progressive:true,
                            persistence:['a day','3 days', 'a week', '3 weeks'],
                        }
                    },
                ],
                extension: [{
                        type: 'Project extension',
                        theme_color:'#4f9deb',
                        title:'More Projects ?',
                        info:['No longer be limited in your ambitions', 'Get one more dedicated space to your new project !'],
                        icon:'library-add',
                        prize:12.99,
                        duration: {
                            progressive:false,
                            persistence:['forever'],
                        }
                    },
                    {
                        type: 'Favorite extension',
                        theme_color:'#ffcc00',
                        title:'More Favories ?',
                        info:['Safely keep more interesting profiles', 'Extend your favorites list with 3 new slots !'],
                        icon:'star',
                        prize:14.99,
                        duration: {
                            progressive:false,
                            persistence:['forever'],
                        }
                    },
                    {
                        type: 'Like extension',
                        theme_color:'#FF1E1E',
                        title:'More likes ?',
                        info:['Like more interesting profiles', 'Extend your like list with 3 new slots !', 'Increase your chances of having a match !'],
                        icon:'favorite',
                        prize:6.99,
                        duration: {
                            progressive:false,
                            persistence:['forever'],
                        }
                    },
                ]
            },
        userData: {
            profile: {
                projects: [
                    'id_0',
                    'id_1',
                    'id_2',
                    'id_3',
                    'id_4',
                    'id_5',
                    'id_6',
                    'id_7',
                ],
                domains: [
                    'id_0',
                    'id_1',
                ],
            }
        },
        favList: [{
                    id:1,
                    name: 'Jeannine Musk',
                    avatar_url: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
                    connected:true,
                    subtitle: 'Software Ing'
                },
                {
                    id:2,
                    name: 'Martin Dupond',
                    avatar_url: 'https://i.pinimg.com/564x/17/56/8f/17568fcd478e0699067ca7b9a34c702f.jpg',
                    connected:false,
                    subtitle: 'FullStack Dev'
                },
                {
                    id:3,
                    name: 'Géraldine Lauzier',
                    avatar_url: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                    connected:false,
                    subtitle: 'Webdesigner'
                },
                {
                    id:4,
                    name: 'Grégoire Beaudouin',
                    avatar_url: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
                    connected:true,
                    subtitle: 'Community Manager'
                },
                {
                    id:5,
                    name: 'Sabine Paquin',
                    avatar_url: 'https://audit-controle-interne.com/wp-content/uploads/2019/03/avatar-user-teacher-312a499a08079a12-512x512.png',
                    connected:true,
                    subtitle: 'Data Analyst'
                },
                {
                    id:6,
                    name: 'Pierre Lachapelle',
                    avatar_url: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
                    connected:false,
                    subtitle: 'Admin System'
                },
                {
                    id:7,
                    name: 'George Cloney',
                    avatar_url: '',
                    connected:false,
                    subtitle: 'Breathing'
                },
            ],
};

export default function updateReducer(state = initialState, action) {
    switch (action.type) {
        //UPDATE START
        case (updateConstant.REQUEST):
            return {
                ...state,
                requesting: true,
                user: null,
                error: null,
            }
        case (updateConstant.SUCCESS):
            return {
                ...state,
                requesting: false,
                user: action.data
            }
        case (updateConstant.FAILURE):
            return {
                ...state,
                requesting: false,
                error: action.error
            }
        //UPDATE END
        //DOWNLOAD USER START
        case (downloadUserConstant.REQUEST):
            return {
                ...state,
                requesting: true,
                user: null,
                error: null,
            }
        case (downloadUserConstant.SUCCESS):
            return {
                ...state,
                requesting: false,
                user: action.data
            }
        case (downloadUserConstant.FAILURE):
            return {
                ...state,
                requesting: false,
                error: action.error
            }
        //DOWNLOAD USER END
        default:
            return state;
    }
}