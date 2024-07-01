import { ReactElement } from "react"
import { PropChildren } from '~/types/Interface/childrenInterface';

interface MenuItemData {
    icon: JSX.Element;
    name: string;
    to?: string;
    onClick?: () => void
}

export interface MenuProps extends PropChildren {
    children: ReactElement;
    hideOnClick?: boolean;
    onChange?: () => void;
    items: MenuItemData[];
}

export interface MenuItemProps extends PropChildren {
    className?: string;
    data: MenuItemData;
    onClick?: () => void;
}