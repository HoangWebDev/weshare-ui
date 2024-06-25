import React, { useState, useEffect, createContext, useReducer, ReactNode } from 'react';
import { initState, reducer } from '~/hooks/Reducer/reducers';
import { styleMenu } from '~/hooks/Reducer/actions';
import { PropChildren } from '~/types/Interface/responsiveInterface';

export const ResponsiveContext = createContext({
    responsive: false,
    openNav: false,
    toggleNav: () => {},
});

function ResponsiveProvider({ children }: PropChildren) {
    const [state, dispacth] = useReducer(reducer, initState);
    const [responsive, setResponsive] = useState(window.innerWidth < 768);
    const [openNav, setOpnNav] = useState(false);

    const toggleNav = () => {
        setOpnNav(!openNav);
        dispacth(styleMenu());
    };

    const responsiveMain = () => {
        const newNav = window.innerWidth < 768;
        setResponsive(newNav);
    };

    useEffect(() => {
        window.addEventListener('resize', responsiveMain);
        return () => window.removeEventListener('resize', responsiveMain);
    }, [responsiveMain]);

    const value = {
        responsive,
        openNav,
        toggleNav,
    };

    return <ResponsiveContext.Provider value={value}>{children}</ResponsiveContext.Provider>;
}

export default ResponsiveProvider;
