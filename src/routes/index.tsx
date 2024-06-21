import Contact from '~/pages/Contact/Contact';
import Feed from '~/pages/Feed/Feed';
import Friend from '~/pages/Friend/Friend';
import Shop from '~/pages/Shop/Shop';
import Search from '~/pages/Search/Search';
import { FunctionComponent } from 'react';

// Định nghĩa một kiểu cho route
type Route = {
    path: string;
    component: FunctionComponent;
    layout?: FunctionComponent | null;
};

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
