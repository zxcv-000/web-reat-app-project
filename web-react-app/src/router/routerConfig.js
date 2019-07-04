// import Home from '../components/home/Home';
// import Sort from '../components/sort/Sort'
// import SearchPage from '../components/searchPage/SearchPage';
// import Carts from '../components/carts/Carts'
// import PersonalCenter from '../components/personalCenter/PersonalCenter'
// import Register from '../components/authentication/register'
// import Login from '../components/authentication/Login'
// import MinuteGenre from '../components/sort/MinuteGenre'
// import Details from '../components/details/Details'
// import Describe from '../components/details/Describe'
// import Explain from '../components/details/Explain'
// import Specs from '../components/details/Specs'


const routes = [
    {
        path: '/home',
        component: 'home/Home',
        exact: true
    }, {
        path: '/sort',
        component: 'sort/Sort',
        routes: [
            {
                path: '/sort/:type',
                component: 'sort/MinuteGenre',
                exact: true
            }
        ]
    }, {
        path: '/searchPage',
        component: 'searchPage/SearchPage',
        exact: true
    }, {
        path: '/carts',
        component: 'carts/Carts',
        exact: true
    }, {
        path: '/personalCenter',
        component: 'personalCenter/PersonalCenter',
        exact: true
    }, {
        path: '/details/:id',
        component: 'details/Details',
        routes: [
            {
                path: '/details/:id/describe',
                component: 'details/Describe',
                exact: true
            }, {
                path: '/details/:id/explain',
                component: 'details/Explain',
                exact: true
            }, {
                path: '/details/:id/specs',
                component: 'details/Specs',
                exact: true
            },
        ]
    }, {
        path: '/register',
        component: 'authentication/register',
        exact: true
    }, {
        path: '/login',
        component: 'authentication/Login',
        exact: true
    }, {
        path: '/',
        component: 'home/Home',
        exact: true,
        aa:true
    },
];

export default routes;