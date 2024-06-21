import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { MainLayout } from '~/components/Layout';
function Main() {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;

                // Kiểu cho Layout là một FunctionComponent nhận vào children
                let Layout: React.FunctionComponent<{ children: React.ReactNode }> = MainLayout;

                if (route.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment; // Sử dụng Fragment cho trường hợp không có layout
                }

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default Main;
