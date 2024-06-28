import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
    const isAuthenticated = isLoggedIn();

    //Sử dụng Outlet để render các component trong privateRoute
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

// Hàm kiểm tra xem người dùng đã đăng nhập hay chưa
const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    //Kiểm tra cả 2 có tồn tại và khác null vs undefined
    if (!token || !role || role === 'null' || role === 'undefined') {
        return false;
    }

    // Kiểm tra thêm điều kiện role bằng 0
    if (role === '0') {
        return true;
    }

    return false;
};

export default PrivateRoute;
