import { useReducer, useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faBookmark, faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import { reducer, initState } from '~/features/Reducer/reducers';
import { search, styleSearch, styleMenu } from '~/features/Reducer/actions';
import { ResponsiveContext } from '~/features/Provider/ResponsiveProvider';
import * as loginService from '~/services/Login/loginService';
import Search from '~/features/Search/Search';
import { BellIcon, BookMarkIcon, PersonIcon } from '~/components/Icons';
import logo from '~/assets/images/logo.jpg'; // Giả sử đây là đường dẫn đúng
import { jwtDecode } from 'jwt-decode';
import User from '~/models/User';

//Reducer
function Header() {
    //Dùng useReducer thay useState
    const [userProfile, setUserProfile] = useState<User>({});
    const [state, dispatch] = useReducer(reducer, initState);
    const context = useContext(ResponsiveContext);

    useEffect(() => {
        const token = localStorage.getItem('token'); // Lấy token từ localStorage
        if (token) {
            const decodedToken = jwtDecode<User>(token); // Giải mã token
            const idUser = decodedToken.id_user;
            if (idUser) {
                try {
                    loginService
                        .getUserProfile(idUser)
                        .then((result) => {
                            setUserProfile(result);
                        })
                        .catch((error) => {
                            console.error('Lỗi giải má user:', error);
                        });
                    console.log('Thông tin user:', decodedToken);
                } catch (error) {
                    console.error('Lỗi giải mã token:', error);
                }
            }
        } else {
            console.log('Không tìm thấy token trong localStorage');
        }
    }, []);

    return (
        <header className="grid grid-cols-3 gap-4 px-5 gap-x-5 fixed inset-x-0 top-0 mx-auto bg-white z-10">
            <div className="col-span-1 items-center gap-x-2.5 py-[10px] hidden md:flex">
                <img src={logo} alt="Logo" className="select-none w-8 h-8 rounded-md" />
                <h2 className="text-xl font-bold">WeShare</h2>
            </div>
            {/* Search */}
            <Search />
            <div className="col-span-1 items-center justify-end gap-x-2.5 py-[10px]  hidden md:flex">
                <BellIcon />
                <BookMarkIcon className="text-gray-500 rounded-md text-xl p-1 bg-gray-300" />
                <div className="flex items-center gap-x-2 cursor-pointer">
                    <PersonIcon className="text-gray-500 rounded-md text-xl p-1 bg-gray-300 " />
                    <h2 className="text-sm font-semibold">{userProfile.full_name}</h2>
                    <FontAwesomeIcon icon={faAngleDown} className="text-gray-500 rounded-md text-sm" />
                </div>
            </div>

            {/* Responsive */}

            <div className={context.responsive ? 'flex col-span-1 items-center gap-x-2.5 py-[10px]' : 'hidden'}>
                <img src={logo} alt="Logo" className="select-none w-8 h-8 rounded-md" />
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
                <FontAwesomeIcon
                    icon={faBell}
                    className="cursor-pointer text-gray-500 rounded-md text-xl p-[6px] bg-gray-300"
                />
                <FontAwesomeIcon
                    icon={faBookmark}
                    className="cursor-pointer text-gray-500 rounded-md text-xl p-[6px] bg-gray-300"
                />
                <FontAwesomeIcon
                    icon={faUser}
                    className="cursor-pointer text-gray-500 rounded-md text-xl p-[6px] bg-gray-300 "
                />

                {/* <h2 className="account_text">Name</h2> */}
            </div>
        </header>
    );
}

export default Header;
