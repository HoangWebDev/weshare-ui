export interface openNavInterface {
    openNav?: boolean //Có thể có hoặc không
}

export interface responsiveInterface {
    responsive?: boolean
}

export interface HeaderProps extends responsiveInterface {
    toggleNav?: () => void
}