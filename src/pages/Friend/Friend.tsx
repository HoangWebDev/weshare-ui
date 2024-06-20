import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Images from '~/assets/images/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResponsiveProvider, { ResponsiveContext } from '~/hooks/Provider/ResponsiveProvider';

function Friend() {
    const context = useContext(ResponsiveContext);

    return (
        <>
            <section className="w-custom fixed top-[60px] left-[16.25rem] max-h-[90vh] overflow-y-auto ml-[1rem] mr-[1rem] scrollbar hidden md:block">
                <h1 className="text-xl font-semibold text-left">Friends</h1>
                <div className="py-4">
                    <div className="ml-2 flex flex-wrap justify-start gap-2">
                        <Link
                            to="/friend/:id"
                            className="w-friend flex flex-col gap-y-2 p-2 rounded-lg bg-white text-center"
                        >
                            <img src={Images} alt="Friend 1" className="block rounded-lg" />
                            <h2 className="text-left font-semibold">Name</h2>
                            <button className="p-2 rounded bg-main text-white outline-none transition-all hover:bg-blue-600">
                                Thêm bạn
                            </button>
                            <button className="p-2 rounded bg-slate-400 text-white outline-none  transition-all hover:bg-blue-600 hover:border-none">
                                Xóa
                            </button>
                        </Link>
                        <Link
                            to="/friend/:id"
                            className="w-friend flex flex-col gap-y-2 p-2 rounded-lg bg-white text-center"
                        >
                            <img src={Images} alt="Friend 1" className="block rounded-lg" />
                            <h2 className="text-left font-semibold">Name</h2>
                            <button className="p-2 rounded bg-main text-white outline-none transition-all hover:bg-blue-600">
                                Thêm bạn
                            </button>
                            <button className="p-2 rounded bg-slate-400 text-white outline-none  transition-all hover:bg-blue-600 hover:border-none">
                                Xóa
                            </button>
                        </Link>
                        <Link
                            to="/friend/:id"
                            className="w-friend flex flex-col gap-y-2 p-2 rounded-lg bg-white text-center"
                        >
                            <img src={Images} alt="Friend 1" className="block rounded-lg" />
                            <h2 className="text-left font-semibold">Name</h2>
                            <button className="p-2 rounded bg-main text-white outline-none transition-all hover:bg-blue-600">
                                Thêm bạn
                            </button>
                            <button className="p-2 rounded bg-slate-400 text-white outline-none  transition-all hover:bg-blue-600 hover:border-none">
                                Xóa
                            </button>
                        </Link>
                        <Link
                            to="/friend/:id"
                            className="w-friend flex flex-col gap-y-2 p-2 rounded-lg bg-white text-center"
                        >
                            <img src={Images} alt="Friend 1" className="block rounded-lg" />
                            <h2 className="text-left font-semibold">Name</h2>
                            <button className="p-2 rounded bg-main text-white outline-none transition-all hover:bg-blue-600">
                                Thêm bạn
                            </button>
                            <button className="p-2 rounded bg-slate-400 text-white outline-none  transition-all hover:bg-blue-600 hover:border-none">
                                Xóa
                            </button>
                        </Link>
                        <Link
                            to="/friend/:id"
                            className="w-friend flex flex-col gap-y-2 p-2 rounded-lg bg-white text-center"
                        >
                            <img src={Images} alt="Friend 1" className="block rounded-lg" />
                            <h2 className="text-left font-semibold">Name</h2>
                            <button className="p-2 rounded bg-main text-white outline-none transition-all hover:bg-blue-600">
                                Thêm bạn
                            </button>
                            <button className="p-2 rounded bg-slate-400 text-white outline-none  transition-all hover:bg-blue-600 hover:border-none">
                                Xóa
                            </button>
                        </Link>
                        <Link
                            to="/friend/:id"
                            className="w-friend flex flex-col gap-y-2 p-2 rounded-lg bg-white text-center"
                        >
                            <img src={Images} alt="Friend 1" className="block rounded-lg" />
                            <h2 className="text-left font-semibold">Name</h2>
                            <button className="p-2 rounded bg-main text-white outline-none transition-all hover:bg-blue-600">
                                Thêm bạn
                            </button>
                            <button className="p-2 rounded bg-slate-400 text-white outline-none  transition-all hover:bg-blue-600 hover:border-none">
                                Xóa
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Responsive */}
            <section
                className={
                    context.responsive
                        ? 'w-responsive fixed top-[60px] max-h-[90vh] overflow-y-auto m-4 scrollbar'
                        : 'hidden'
                }
            >
                <div className="py-4">
                    <div className="ml-2 flex flex-wrap justify-start gap-2">
                        <Link
                            to="/friend/:id"
                            className="w-full flex items-center justify-around gap-x-2 p-2 rounded-lg bg-white text-center"
                        >
                            <img src={Images} alt="Friend 1" className="w-1/5 h-full block rounded-full" />
                            <div className="w-full">
                                <h2 className="mb-2 text-left text-base font-semibold">Name</h2>
                                <div className="flex gap-x-2">
                                    <button className="w-full p-2 rounded bg-main text-white outline-none transition-all hover:bg-blue-600">
                                        Thêm bạn
                                    </button>
                                    <button className="w-full p-2 rounded bg-slate-400 text-white outline-none  transition-all hover:bg-blue-600 hover:border-none">
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link
                            to="/friend/:id"
                            className="w-full flex items-center justify-around gap-x-2 p-2 rounded-lg bg-white text-center"
                        >
                            <img src={Images} alt="Friend 1" className="w-1/5 h-full block rounded-full" />
                            <div className="w-full">
                                <h2 className="mb-2 text-left text-base font-semibold">Name</h2>
                                <div className="flex gap-x-2">
                                    <button className="w-full p-2 rounded bg-main text-white outline-none transition-all hover:bg-blue-600">
                                        Thêm bạn
                                    </button>
                                    <button className="w-full p-2 rounded bg-slate-400 text-white outline-none  transition-all hover:bg-blue-600 hover:border-none">
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link
                            to="/friend/:id"
                            className="w-full flex items-center justify-around gap-x-2 p-2 rounded-lg bg-white text-center"
                        >
                            <img src={Images} alt="Friend 1" className="w-1/5 h-full block rounded-full" />
                            <div className="w-full">
                                <h2 className="mb-2 text-left text-base font-semibold">Name</h2>
                                <div className="flex gap-x-2">
                                    <button className="w-full p-2 rounded bg-main text-white outline-none transition-all hover:bg-blue-600">
                                        Thêm bạn
                                    </button>
                                    <button className="w-full p-2 rounded bg-slate-400 text-white outline-none  transition-all hover:bg-blue-600 hover:border-none">
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link
                            to="/friend/:id"
                            className="w-full flex items-center justify-around gap-x-2 p-2 rounded-lg bg-white text-center"
                        >
                            <img src={Images} alt="Friend 1" className="w-1/5 h-full block rounded-full" />
                            <div className="w-full">
                                <h2 className="mb-2 text-left text-base font-semibold">Name</h2>
                                <div className="flex gap-x-2">
                                    <button className="w-full p-2 rounded bg-main text-white outline-none transition-all hover:bg-blue-600">
                                        Thêm bạn
                                    </button>
                                    <button className="w-full p-2 rounded bg-slate-400 text-white outline-none  transition-all hover:bg-blue-600 hover:border-none">
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link
                            to="/friend/:id"
                            className="w-full flex items-center justify-around gap-x-2 p-2 rounded-lg bg-white text-center"
                        >
                            <img src={Images} alt="Friend 1" className="w-1/5 h-full block rounded-full" />
                            <div className="w-full">
                                <h2 className="mb-2 text-left text-base font-semibold">Name</h2>
                                <div className="flex gap-x-2">
                                    <button className="w-full p-2 rounded bg-main text-white outline-none transition-all hover:bg-blue-600">
                                        Thêm bạn
                                    </button>
                                    <button className="w-full p-2 rounded bg-slate-400 text-white outline-none  transition-all hover:bg-blue-600 hover:border-none">
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Friend;
