import config from '~/config';
import { Route } from '~/types/Types/routeType';

import Contact from '~/pages/Contact/Contact';
import Feed from '~/pages/Feed/Feed';
import Friend from '~/pages/Friend/Friend';
import Shop from '~/pages/Shop/Shop';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import { LoginLayout, MainLayout } from '~/layouts';

//Các route không cần xác thưc
const publicRoutes: Route[] = [
    { path: config.routes.register, component: Register, layout: LoginLayout },
    { path: config.routes.login, component: Login, layout: LoginLayout },
];

//Đường route cần xác thực token
const privateRoutes: Route[] = [
    { path: config.routes.home, component: Feed, layout: MainLayout },
    { path: config.routes.feed, component: Feed, layout: MainLayout },
    { path: config.routes.friend, component: Friend, layout: MainLayout },
    { path: config.routes.shop, component: Shop, layout: MainLayout },
    { path: config.routes.contact, component: Contact, layout: MainLayout },
];

export { publicRoutes, privateRoutes };
