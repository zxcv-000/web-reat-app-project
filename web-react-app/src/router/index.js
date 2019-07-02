import Home from '../components/home/Home';
import Sort from '../components/sort/Sort'
import SearchPage from '../components/searchPage/SearchPage';
import Carts from '../components/carts/Carts'
import PersonalCenter from '../components/personalCenter/PersonalCenter'
import Register from '../components/authentication/register'
import Login from '../components/authentication/Login'
import MinuteGenre from '../components/sort/MinuteGenre'
import Details from '../components/details/Details'

const routes = [
    {
        path: '/home',
        component: Home,
        exact: true
    }, {
        path: '/sort',
        component: Sort,
        routes: [
            {
                path: '/sort/:type',
                component: MinuteGenre,
                exact: true
            }
        ]
    }, {
        path: '/searchPage',
        component: SearchPage,
        exact: true
    }, {
        path: '/carts',
        component: Carts,
        exact: true
    }, {
        path: '/personalCenter',
        component: PersonalCenter,
        exact: true
    }, {
        path: '/details/:id',
        component: Details,
        exact: true
    }, {
        path: '/register',
        component: Register,
        exact: true
    }, {
        path: '/login',
        component: Login,
        exact: true
    }, {
        path: '/',
        component: Home,
        exact: true
    },
];

export default routes;