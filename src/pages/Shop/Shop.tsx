import { useContext } from 'react';
import { Link } from 'react-router-dom';
import iPhone14 from '~/assets/images/iphone14.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { ResponsiveContext } from '~/features/Provider/ResponsiveProvider';

function Shop() {
    const context = useContext(ResponsiveContext);

    return (
        <>
            <section className="w-custom fixed top-[60px] left-[16.25rem] max-h-[90vh] overflow-y-auto ml-[1rem] mr-[1rem] scrollbar hidden md:block">
                <h1 className="text-xl font-semibold text-left">Shop</h1>
                <div className="py-4">
                    <div className="ml-3 flex flex-wrap justify-start gap-3">
                        <Link to="/product" className="h-3/5 w-product rounded-lg bg-white text-center">
                            <div className="h-1/2 bg-slate-300 rounded-lg flex justify-center items-center">
                                <img src={iPhone14} alt="Friend 1" className="w-3/5 m-5 block rounded-lg" />
                            </div>
                            <div className="p-2">
                                <h2 className="text-xl text-left font-semibold">100.000VNĐ</h2>
                                <p className="text-base text-left text-gray-400">iPhone 14</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-2">
                                <div>
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xs mr-1" />
                                    <span className="text-gray-400 text-xs">4.5</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs">32 Sold</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product" className="h-3/5 w-product rounded-lg bg-white text-center">
                            <div className="h-1/2 bg-slate-300 rounded-lg flex justify-center items-center">
                                <img src={iPhone14} alt="Friend 1" className="w-3/5 m-5 block rounded-lg" />
                            </div>
                            <div className="p-2">
                                <h2 className="text-xl text-left font-semibold">100.000VNĐ</h2>
                                <p className="text-base text-left text-gray-400">iPhone 14</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-2">
                                <div>
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xs mr-1" />
                                    <span className="text-gray-400 text-xs">4.5</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs">32 Sold</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product" className="h-3/5 w-product rounded-lg bg-white text-center">
                            <div className="h-1/2 bg-slate-300 rounded-lg flex justify-center items-center">
                                <img src={iPhone14} alt="Friend 1" className="w-3/5 m-5 block rounded-lg" />
                            </div>
                            <div className="p-2">
                                <h2 className="text-xl text-left font-semibold">100.000VNĐ</h2>
                                <p className="text-base text-left text-gray-400">iPhone 14</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-2">
                                <div>
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xs mr-1" />
                                    <span className="text-gray-400 text-xs">4.5</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs">32 Sold</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product" className="h-3/5 w-product rounded-lg bg-white text-center">
                            <div className="h-1/2 bg-slate-300 rounded-lg flex justify-center items-center">
                                <img src={iPhone14} alt="Friend 1" className="w-3/5 m-5 block rounded-lg" />
                            </div>
                            <div className="p-2">
                                <h2 className="text-xl text-left font-semibold">100.000VNĐ</h2>
                                <p className="text-base text-left text-gray-400">iPhone 14</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-2">
                                <div>
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xs mr-1" />
                                    <span className="text-gray-400 text-xs">4.5</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs">32 Sold</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product" className="h-3/5 w-product rounded-lg bg-white text-center">
                            <div className="h-1/2 bg-slate-300 rounded-lg flex justify-center items-center">
                                <img src={iPhone14} alt="Friend 1" className="w-3/5 m-5 block rounded-lg" />
                            </div>
                            <div className="p-2">
                                <h2 className="text-xl text-left font-semibold">100.000VNĐ</h2>
                                <p className="text-base text-left text-gray-400">iPhone 14</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-2">
                                <div>
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xs mr-1" />
                                    <span className="text-gray-400 text-xs">4.5</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs">32 Sold</span>
                                </div>
                            </div>
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
                <div className="">
                    <div className="flex flex-wrap justify-start gap-3 mx-3">
                        <Link to="/product" className="h-3/5 w-productRes rounded-lg bg-white text-center">
                            <div className="h-1/2 bg-slate-300 rounded-lg flex justify-center items-center">
                                <img src={iPhone14} alt="Friend 1" className="w-3/5 m-5 block rounded-lg" />
                            </div>
                            <div className="p-2">
                                <h2 className="text-base text-left font-semibold">100.000VNĐ</h2>
                                <p className="text-sm text-left text-gray-400">iPhone 14</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-2">
                                <div>
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xs mr-1" />
                                    <span className="text-gray-400 text-xs">4.5</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs">32 Sold</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product" className="h-3/5 w-productRes rounded-lg bg-white text-center">
                            <div className="h-1/2 bg-slate-300 rounded-lg flex justify-center items-center">
                                <img src={iPhone14} alt="Friend 1" className="w-3/5 m-5 block rounded-lg" />
                            </div>
                            <div className="p-2">
                                <h2 className="text-base text-left font-semibold">100.000VNĐ</h2>
                                <p className="text-sm text-left text-gray-400">iPhone 14</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-2">
                                <div>
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xs mr-1" />
                                    <span className="text-gray-400 text-xs">4.5</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs">32 Sold</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product" className="h-3/5 w-productRes rounded-lg bg-white text-center">
                            <div className="h-1/2 bg-slate-300 rounded-lg flex justify-center items-center">
                                <img src={iPhone14} alt="Friend 1" className="w-3/5 m-5 block rounded-lg" />
                            </div>
                            <div className="p-2">
                                <h2 className="text-base text-left font-semibold">100.000VNĐ</h2>
                                <p className="text-sm text-left text-gray-400">iPhone 14</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-2">
                                <div>
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xs mr-1" />
                                    <span className="text-gray-400 text-xs">4.5</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs">32 Sold</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Shop;
