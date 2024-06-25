import { ReactNode } from "react"

export interface openNavInterface {
    openNav?: boolean //Có thể có hoặc không
}

export interface responsiveInterface {
    responsive?: boolean
}

export interface HeaderProps extends responsiveInterface {
    toggleNav?: () => void
}

export interface PropChildren {
    children: ReactNode,
    to?: string | null,
    href?: string | null,
    className?: string
    onClick?: () => void
}