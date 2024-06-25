import Contact from '~/pages/Contact/Contact';
import Feed from '~/pages/Feed/Feed';
import Friend from '~/pages/Friend/Friend';
import Shop from '~/pages/Shop/Shop';
import Search from '~/pages/Search/Search';
import { Route } from '~/types/Types/typeRoute';

const publicRoutes: Route[] = [
    { path: '/', component: Feed },
    { path: '/feed', component: Feed },
    { path: '/friend', component: Friend },
    { path: '/shop', component: Shop },
    { path: '/contact', component: Contact },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
