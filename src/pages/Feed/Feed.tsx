import React, { useState, useContext } from 'react';
import Images from '~/assets/images/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCamera, faVideo, faImage, faPaperclip, faClose } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import ResponsiveProvider, { ResponsiveContext } from '~/hooks/Provider/ResponsiveProvider';
import PostForm from '~/features/Post/PostForm';
import Contact from '~/pages/Contact/Contact';

function Feed() {
    const [openPost, setOpenPost] = useState(false);
    const context = useContext(ResponsiveContext);

    const togglePostForm = () => {
        setOpenPost(!openPost);
    };

    return (
        <>
            <section className="w-custom fixed top-[60px] left-[16.25rem] max-h-[90vh] overflow-y-auto ml-[1rem] mr-[1rem] scrollbar hidden md:block">
                <div className="flex items-center gap-x-2 p-4 bg-white rounded-lg">
                    <div className="relative text-center">
                        <img
                            src={Images}
                            alt="Avatar"
                            className="w-20 border-solid border-[3px] p-[2px] rounded-full"
                        />
                        <FontAwesomeIcon
                            icon={faPlusCircle}
                            className="absolute right-1/2 bottom-8 translate-x-1/2 translate-y-1/2 text-2xl text-[blue] z-10 p-[2px] bg-white"
                        />
                        <p className="text-xs font-semibold text-gray-400 mt-2">Tin của bạn</p>
                    </div>
                    <div className="relative text-center">
                        <img
                            src={Images}
                            alt="Avatar"
                            className="w-20 border-solid border-[3px] border-[#959393] p-[2px] rounded-full"
                        />
                        <p className="text-xs font-semibold text-gray-400 mt-2">Username</p>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-lg mt-2">
                    <div className="flex items-center gap-x-2">
                        <img src={Images} alt="Images" className="w-12 h-12 rounded-full" />
                        <button
                            className="w-full pl-5 text-left text-sm text-gray-400 cursor-pointer py-2 rounded-[10px] border-none outline-none bg-gray-200"
                            onClick={() => setOpenPost(!openPost)}
                        >
                            What's on your mind, Huỳnh Hoàng?
                        </button>
                        <PostForm openPost={openPost} togglePostForm={togglePostForm} />
                    </div>
                    <hr className="my-1" />
                    <div className="pt-2 flex justify-start gap-x-12">
                        <div className="flex gap-x-2 items-center">
                            <FontAwesomeIcon icon={faVideo} className="text-sm text-red-500" />
                            <p className="text-sm font-semibold text-gray-400">Live Video</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FontAwesomeIcon icon={faImage} className="text-sm text-green-500" />
                            <p className="text-sm font-semibold text-gray-400">Image/Video</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FontAwesomeIcon icon={faPaperclip} className="text-sm text-yellow-500" />
                            <p className="text-sm font-semibold text-gray-400">Attachment</p>
                        </div>
                    </div>
                </div>
                <div className="mx-0 mt-2 mb-5">
                    <div className="bg-white rounded-lg mx-0 my-2 p-4">
                        <div className="flex justify-between">
                            <a href="" className="flex items-center gap-x-2">
                                <img src={Images} alt="" className="w-12 h-12 rounded-full" />
                                <div className="">
                                    <h3 className="text-base font-semibold">Username</h3>
                                    <p className="text-xs text-gray-400 font-semibold">10/10/2024</p>
                                </div>
                            </a>
                            <div className="cursor-pointer p-2">
                                <FontAwesomeIcon icon={faClose} className="text-sm" />
                            </div>
                        </div>
                        <div className="text-sm mt-2 font-semibold text-left">Content</div>
                        <div className="mt-2 w-full">
                            <img src="" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex items-center gap-x-2">
                            <div className="cursor-pointer">
                                <span className="text-gray-500 text-xs">
                                    <FontAwesomeIcon icon={faHeart} className="text-gray-500 mr-1" />
                                    10 Like
                                </span>
                            </div>
                            <div className="cursor-pointer">
                                <span className="text-gray-500 text-xs">
                                    <FontAwesomeIcon icon={faComment} className="text-gray-500 mr-1" />
                                    10 Comment
                                </span>
                            </div>
                            <div className="cursor-pointer">
                                <span className="text-gray-500 text-xs">
                                    <FontAwesomeIcon icon={faShareFromSquare} className="text-gray-500 mr-1" />
                                    10 Share
                                </span>
                            </div>
                        </div>
                        <div className="model_comment hidden">
                            <hr />
                            <div className="model_comment--inner">
                                <div className="model_comment--main">
                                    <div>
                                        <img src="" alt="" />
                                        <div className="comment">
                                            <div className="comment-author">Username</div>
                                            <div className="comment-content">Comment</div>
                                            <div className="comment-date">Ngày Comment</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="model_comment--content">
                                    <img src="" alt="" />
                                    <form className="content">
                                        <input
                                            type="text"
                                            className="content--input"
                                            placeholder="Write a comment..."
                                        />
                                        <button className="content--btn" type="submit">
                                            Comment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
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
                <div className="flex items-center gap-x-2 p-4 bg-white rounded-lg">
                    <div className="relative text-center">
                        <img
                            src={Images}
                            alt="Avatar"
                            className="w-16 border-solid border-[3px] p-[2px] rounded-full"
                        />
                        <FontAwesomeIcon
                            icon={faPlusCircle}
                            className="absolute right-1/2 bottom-8 translate-x-1/2 translate-y-1/2 text-2xl text-[blue] z-10 p-[2px] bg-white"
                        />
                        <p className="text-xs font-semibold text-gray-400 mt-2">Tin của bạn</p>
                    </div>
                    <div className="relative text-center">
                        <img
                            src={Images}
                            alt="Avatar"
                            className="w-16 border-solid border-[3px] border-[#959393] p-[2px] rounded-full"
                        />
                        <p className="text-xs font-semibold text-gray-400 mt-2">Username</p>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-lg mt-2">
                    <div className="flex items-center gap-x-2">
                        <img src={Images} alt="Images" className="w-12 h-12 rounded-full" />
                        <button
                            className="w-full pl-5 text-left text-sm text-gray-400 cursor-pointer py-2 rounded-[10px] border-none outline-none bg-gray-200"
                            onClick={() => togglePostForm()}
                        >
                            What's on your mind, Huỳnh Hoàng?
                        </button>
                        <PostForm openPost={openPost} togglePostForm={togglePostForm} />
                    </div>
                    <hr className="my-1" />
                    <div className="pt-2 flex justify-start gap-x-4">
                        <div className="flex gap-x-2 items-center">
                            <FontAwesomeIcon icon={faVideo} className="text-sm text-red-500" />
                            <p className="text-sm font-semibold text-gray-400">Live Video</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FontAwesomeIcon icon={faImage} className="text-sm text-green-500" />
                            <p className="text-sm font-semibold text-gray-400">Image/Video</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FontAwesomeIcon icon={faPaperclip} className="text-sm text-yellow-500" />
                            <p className="text-sm font-semibold text-gray-400">Attachment</p>
                        </div>
                    </div>
                </div>
                <div className="mx-0 mt-2 mb-5">
                    <div className="bg-white rounded-lg mx-0 my-2 p-4">
                        <div className="flex justify-between">
                            <a href="" className="flex items-center gap-x-2">
                                <img src={Images} alt="" className="w-12 h-12 rounded-full" />
                                <div className="">
                                    <h3 className="text-base font-semibold">Username</h3>
                                    <p className="text-xs">10/10/2024</p>
                                </div>
                            </a>
                            <div className="cursor-pointer p-2">
                                <FontAwesomeIcon icon={faClose} className="text-sm" />
                            </div>
                        </div>
                        <div className="text-sm mt-2 text-gray-400 font-semibold text-left">Content</div>
                        <div className="mt-2 w-full">
                            <img src="" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex items-center gap-x-2">
                            <div className="cursor-pointer">
                                <span className="text-gray-500 text-xs">
                                    <FontAwesomeIcon icon={faHeart} className="text-gray-500 mr-1" />
                                    10 Like
                                </span>
                            </div>
                            <div className="cursor-pointer">
                                <span className="text-gray-500 text-xs">
                                    <FontAwesomeIcon icon={faComment} className="text-gray-500 mr-1" />
                                    10 Comment
                                </span>
                            </div>
                            <div className="cursor-pointer">
                                <span className="text-gray-500 text-xs">
                                    <FontAwesomeIcon icon={faShareFromSquare} className="text-gray-500 mr-1" />
                                    10 Share
                                </span>
                            </div>
                        </div>
                        <div className="model_comment hidden">
                            <hr />
                            <div className="model_comment--inner">
                                <div className="model_comment--main">
                                    <div>
                                        <img src="" alt="" />
                                        <div className="comment">
                                            <div className="comment-author">Username</div>
                                            <div className="comment-content">Comment</div>
                                            <div className="comment-date">Ngày Comment</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="model_comment--content">
                                    <img src="" alt="" />
                                    <form className="content">
                                        <input
                                            type="text"
                                            className="content--input"
                                            placeholder="Write a comment..."
                                        />
                                        <button className="content--btn" type="submit">
                                            Comment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}

export default Feed;
