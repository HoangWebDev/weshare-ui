import React, { useState, useContext } from 'react';
import {
    faHouse,
    faUser,
    faCalendarDays,
    faTv,
    faImage,
    faShop,
    faFolder,
    faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import avatar from '~/assets/images/avatar.jpg'; // Giả sử đây là đường dẫn đúng
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResponsiveProvider, { ResponsiveContext } from '~/hooks/Provider/ResponsiveProvider';

function Nav() {
    const context = useContext(ResponsiveContext);
    const [menu, setMenu] = useState('feed');

    const handleMenu = (id: string) => {
        setMenu(id);
    };

    const getClass = (id: string) => {
        return `flex items-center gap-x-2 p-2 rounded w-full ${
            menu === id ? 'bg-main text-gray-50' : 'text-slate-400'
        }`;
    };

    return (
        <>
            <section className="w-60 fixed top-[60px] left-5 max-h-screen overflow-y-auto scrollbar hidden md:block">
                <div className="bg-white p-[15px] rounded-[5px] mb-[10px]">
                    <div className="bg-[#f5f5f5dd] rounded-[5px] p-[5px]">
                        <div className="flex items-center gap-x-2 justify-center">
                            <img src={avatar} className="rounded w-12 h-12" />
                            <div>
                                <h2 className="font-bold">Name</h2>
                                <span className="text-gray-400 text-xs">@huynhhoang</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-x-2 mt-[15px]">
                            <div>
                                <p className="text-sm font-bold">2.3k</p>
                                <span className="text-gray-400 text-xs">Followers</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold">1.2k</p>
                                <span className="text-gray-400 text-xs">Following</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold">1.2k</p>
                                <span className="text-gray-400 text-xs">Posts</span>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="bg-white p-4 rounded-[5px] mb-2">
                    <li>
                        <Link to="/feed" className={getClass('feed')} onClick={() => handleMenu('feed')}>
                            <FontAwesomeIcon className="text-sm p-1 rounded size-4" icon={faHouse} />
                            <p className="text-sm">Feed</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/friend" className={getClass('friend')} onClick={() => handleMenu('friend')}>
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faUser} />
                            <p className="text-sm">Friend</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/event" className={getClass('event')} onClick={() => handleMenu('event')}>
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faCalendarDays} />
                            <p className="text-sm">Event</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/watch" className={getClass('watch')} onClick={() => handleMenu('watch')}>
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faTv} />
                            <p className="text-sm">Watch</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/photos" className={getClass('photos')} onClick={() => handleMenu('photos')}>
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faImage} />
                            <p className="text-sm">Photos</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className={getClass('shop')} onClick={() => handleMenu('shop')}>
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faShop} />
                            <p className="text-sm">Shop</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/files" className={getClass('files')} onClick={() => handleMenu('files')}>
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faFolder} />
                            <p className="text-sm">Files</p>
                        </Link>
                    </li>
                    <hr />
                    <h2 className="text-left font-semibold p-2 text-gray-400">Pages You Like</h2>
                    <ul>
                        <li>
                            <a className="flex items-center gap-x-2 p-2 rounded text-slate-400 w-full" href="./">
                                <FontAwesomeIcon className="p-1 rounded text-slate-50 bg-main" icon={faLaptopCode} />
                                <p className="text-gray-950 font-semibold">Frontend Web</p>
                            </a>
                        </li>
                    </ul>
                </ul>
            </section>

            {/* Responsive */}

            <section
                className={context.responsive ? 'w-screen fixed top-[60px] max-h-screen scrollbar z-50' : 'hidden'}
            >
                <ul
                    className="block w-full bg-white rounded-[5px] p-2"
                    style={{ display: context.openNav ? 'block' : 'none' }}
                >
                    <li>
                        <Link
                            to="/feed"
                            className={getClass('feed')}
                            onClick={() => {
                                handleMenu('feed');
                                context.toggleNav();
                            }}
                        >
                            <FontAwesomeIcon className="text-sm p-1 rounded size-4" icon={faHouse} />
                            <p className="text-sm">Feed</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/friend"
                            className={getClass('friend')}
                            onClick={() => {
                                handleMenu('friend');
                                context.toggleNav();
                            }}
                        >
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faUser} />
                            <p className="text-sm">Friend</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/event"
                            className={getClass('event')}
                            onClick={() => {
                                handleMenu('event');
                                context.toggleNav();
                            }}
                        >
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faCalendarDays} />
                            <p className="text-sm">Event</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/watch"
                            className={getClass('watch')}
                            onClick={() => {
                                handleMenu('watch');
                                context.toggleNav();
                            }}
                        >
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faTv} />
                            <p className="text-sm">Watch</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/photos"
                            className={getClass('photos')}
                            onClick={() => {
                                handleMenu('photos');
                                context.toggleNav();
                            }}
                        >
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faImage} />
                            <p className="text-sm">Photos</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/shop"
                            className={getClass('shop')}
                            onClick={() => {
                                handleMenu('shop');
                                context.toggleNav();
                            }}
                        >
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faShop} />
                            <p className="text-sm">Shop</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/files"
                            className={getClass('files')}
                            onClick={() => {
                                handleMenu('files');
                                context.toggleNav();
                            }}
                        >
                            <FontAwesomeIcon className="text-sm p-1 rounded  size-4" icon={faFolder} />
                            <p className="text-sm">Files</p>
                        </Link>
                    </li>
                    <hr />
                    <h2 className="text-left font-semibold p-2 text-gray-400">Pages You Like</h2>
                    <ul>
                        <li>
                            <a className="flex items-center gap-x-2 p-2 rounded text-slate-400 w-full" href="./">
                                <FontAwesomeIcon className="p-1 rounded text-slate-50 bg-main" icon={faLaptopCode} />
                                <p className="text-gray-950 font-semibold">Frontend Web</p>
                            </a>
                        </li>
                    </ul>
                </ul>
                <div className="absolute top-0 left-0 right-0 -bottom-full pointer-events-none"></div>
            </section>
        </>
    );
}

export default Nav;
