import { FunctionComponent } from 'react';

// Định nghĩa một kiểu cho route
export type Route = {
    path: string;
    component: FunctionComponent;
    layout?: FunctionComponent | null;
};
