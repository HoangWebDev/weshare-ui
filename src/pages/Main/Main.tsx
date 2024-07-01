// Main.tsx
import React from 'react';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes';
import PrivateRoute from '~/features/PrivateRoute/PrivateRoute';

const Main = () => {
    return (
        <>
            <Routes>
                {/* Render các route công khai */}
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout || Fragment;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <route.component />
                                </Layout>
                            }
                        />
                    );
                })}

                {/* Render các route yêu cầu đăng nhập bằng PrivateRoute */}
                <Route element={<PrivateRoute />}>
                    {privateRoutes.map((route, index) => {
                        const Layout = route.layout || Fragment;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <route.component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Route>
            </Routes>
        </>
    );
};

export default Main;
