import { useReducer, useContext } from 'react';
import { reducer, initState } from '~/features/Reducer/reducers';
import { search, styleSearch, styleMenu } from '~/features/Reducer/actions';
import { ResponsiveContext } from '~/features/Provider/ResponsiveProvider';
import Search from '~/features/Search/Search';
import Profile from '~/features/Profile';
import Image from '~/components/Image';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, BookMarkIcon, PersonIcon } from '~/components/Icons';

//Reducer
function Header() {
    //Dùng useReducer thay useState
    const [state, dispatch] = useReducer(reducer, initState);
    const context = useContext(ResponsiveContext);
    const userProfile = Profile();

    //List items khi đăng nhập
    const LIST_ITEM = [
        {
            icon: <PersonIcon />,
            name: 'Cập nhật thông tin',
            to: '/update-profile',
        },
        {
            icon: <FontAwesomeIcon icon={faAngleDown} />,
            name: 'Đổi mật khẩu',
            to: '/change-password',
        },
        {
            icon: <FontAwesomeIcon icon={faAngleDown} />,
            name: 'Đăng xuất',
            onClick: () => {
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                window.location.reload();
            },
        },
    ];

    return (
        <header className="grid grid-cols-3 gap-4 px-5 gap-x-5 fixed inset-x-0 top-0 mx-auto bg-white z-10">
            <div className="col-span-1 items-center gap-x-2.5 py-[10px] hidden md:flex">
                <Image fallbackSrc={images.logo} alt="Logo" className="select-none w-8 h-8 rounded-md" />
                <h2 className="text-xl font-bold">WeShare</h2>
            </div>
            {/* Search */}
            <Search />
            <div className="col-span-1 items-center justify-end gap-x-2.5 py-[10px]  hidden md:flex">
                <BellIcon />
                <BookMarkIcon className="text-gray-500 rounded-md p-1 bg-gray-300" />
                <Menu items={LIST_ITEM}>
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <Image className="w-7 h-7 rounded-md" />
                        <h2 className="text-sm font-semibold">{userProfile.full_name}</h2>
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-500 rounded-md text-sm" />
                    </div>
                </Menu>
            </div>

            {/* Responsive */}

            <div className={context.responsive ? 'flex col-span-1 items-center gap-x-2.5 py-[10px]' : 'hidden'}>
                <img src={images.logo} alt="Logo" className="select-none w-8 h-8 rounded-md" />
                <div className="flex items-center md:hidden ">
                    <FontAwesomeIcon
                        onClick={() => {
                            dispatch(styleMenu());
                            context.toggleNav();
                        }}
                        icon={faBars}
                        className={
                            state.styleMenu
                                ? 'bg-main text-gray-50 cursor-pointer rounded-md text-xl p-[6px] '
                                : 'cursor-pointer text-gray-500 rounded-md text-xl p-[6px] bg-gray-300'
                        }
                    />
                </div>
                <FontAwesomeIcon
                    onClick={() => {
                        dispatch(search());
                        dispatch(styleSearch());
                    }}
                    icon={faMagnifyingGlass}
                    className={
                        state.styleSearch
                            ? 'bg-main text-gray-50 cursor-pointer rounded-md text-xl p-[6px]'
                            : 'cursor-pointer  text-gray-500 rounded-md text-xl p-[6px] bg-gray-300'
                    }
                />
            </div>
            <div
                className={context.responsive ? 'flex col-span-1 items-center gap-x-2.5 relative py-[10px]' : 'hidden'}
            >
                <input
                    // ref={inputSearch}
                    type="text"
                    className={
                        state.search
                            ? 'block w-full py-1 pr-1 pl-2 rounded-md outline-none bg-neutral-100 focus:shadow-sm focus:shadow-blue-700'
                            : 'hidden'
                    }
                />
            </div>
            <div
                className={
                    context.responsive ? 'flex col-span-1 items-center justify-end gap-x-2.5 py-[10px]' : 'hidden'
                }
            >
                <BellIcon className="cursor-pointer text-gray-500 rounded-md text-xl p-[6px] bg-gray-300" />
                <BookMarkIcon className="cursor-pointer text-gray-500 rounded-md text-xl p-[6px] bg-gray-300" />
                <PersonIcon className="cursor-pointer text-gray-500 rounded-md text-xl p-[6px] bg-gray-300 " />

                {/* <h2 className="account_text">Name</h2> */}
            </div>
        </header>
    );
}

export default Header;
