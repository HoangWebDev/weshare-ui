import React from 'react';
import { PropChildren } from '~/types/Interface/responsiveInterface';

const LoginLayout: React.FC<PropChildren> = ({ children }) => {
    return <div>{children}</div>;
};

export default LoginLayout;
