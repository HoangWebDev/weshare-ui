/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from '~/components/Image';
import * as postService from '~/services/Post/postService';
import PostModel from '~/models/Post';
import * as loginService from '~/services/Login/loginService';

import { ClosePostIcon, CommentIcon, HeartIcon, ShareIcon } from '~/components/Icons';
import { useQueries, useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import UserModel from '~/models/User';
import { useEffect, useState } from 'react';
import Comment from '~/features/Comment/Comment';

function Post() {
    //Open Comment Model theo id_posts, nếu null thì không mở binh luận
    const [openCommentId, setOpenCommentId] = useState<number | null>(null);

    //Get user của bài post
    const [user, setUser] = useState<Record<number, UserModel>>({});

    const postApi = async () => {
        try {
            const result = await postService.getPost();
            return result;
        } catch (error) {
            console.error('Error fetching posts:', error);
            return [];
        }
    };

    const userApiById = async (id: number) => {
        try {
            const result = await loginService.getUserProfile(id);
            return result;
        } catch (error) {
            console.error('Error fetching posts:', error);
            return [];
        }
    };

    const { isLoading: isLoadingPost, data: dataPost } = useQuery<PostModel[]>({
        queryKey: ['posts'],
        queryFn: postApi,
    });

    useEffect(() => {
        const fetchUsers = async () => {
            if (dataPost && dataPost.length > 0) {
                let usersData: Record<number, UserModel> = {};
                for (const post of dataPost) {
                    if (post.id_user && !usersData[post.id_user]) {
                        const userData = await userApiById(post.id_user);
                        usersData[post.id_user] = userData;
                    }
                }
                setUser(usersData);
            }
        };

        fetchUsers();
    }, [dataPost]); // Rerun effect khi postsData thay đổi

    // const handleDelete = () => {};

    // const handleLike = () => {};

    const handleComment = () => {};

    // const handleShare = () => {};

    // Hiển thị bình luận theo id_posts
    const toggleComment = (idPost: number) => {
        if (openCommentId === idPost) {
            // Nếu bình luận cho bài đăng này đã mở, đóng lại
            setOpenCommentId(null);
        } else {
            // Nếu không, mở bình luận cho bài đăng này
            setOpenCommentId(idPost);
        }
    };

    return (
        <div className="mx-0 mt-2 mb-5">
            {dataPost?.map((post) => (
                <div key={post.id_posts} className="bg-white rounded-lg mx-0 my-2 p-4">
                    <div className="flex justify-between items-start">
                        <Link to={''} className="flex items-center gap-x-2">
                            <Image src={user[post.id_user]?.picture_url} className="w-12 h-12 rounded-full" />
                            <div className="">
                                <h3 className="text-base font-semibold">
                                    {user[post.id_user]?.full_name || 'Không xác định'}
                                </h3>
                                <p className="text-xs text-gray-400 font-semibold">
                                    {post.created_at ? new Date(post.created_at).toLocaleDateString() : 'Ngày không rõ'}
                                </p>
                            </div>
                        </Link>
                        <button className="cursor-pointer">
                            <ClosePostIcon width="15" height="15" className="text-xs text-gray-500" />
                        </button>
                    </div>
                    <div className="text-sm mt-2 font-semibold text-left">{post.content}</div>
                    <div className="mt-2 w-full">
                        <Image
                            fallbackSrc="https://cppdeveloper.com/wp-content/uploads/2020/02/coder_at_work.jpg"
                            alt="Coder at work"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex items-center gap-x-2 mt-2">
                        <div className="cursor-pointer">
                            <span className="text-gray-500 text-xs flex items-center">
                                <HeartIcon width="15" height="15" className="text-gray-500 mr-1" />
                                10 Like
                            </span>
                        </div>
                        <div className="cursor-pointer">
                            <span
                                className="text-gray-500 text-xs flex items-center"
                                onClick={() => {
                                    post.id_posts && toggleComment(post.id_posts);
                                }}
                            >
                                <CommentIcon width="15" height="15" className="text-gray-500 mr-1" />
                                10 Comment
                            </span>
                        </div>
                        <div className="cursor-pointer">
                            <span className="text-gray-500 text-xs flex items-center">
                                <ShareIcon width="15" height="15" className="text-gray-500 mr-1" />
                                10 Share
                            </span>
                        </div>
                    </div>
                    {/* Chỉ mở bình luận nếu openCommentId bằng với id_posts */}
                    {openCommentId === post.id_posts && post.id_posts && (
                        <Comment
                            openComment={openCommentId !== null}
                            toggleComment={() => {
                                post.id_posts && toggleComment(post.id_posts);
                            }}
                            idPost={post.id_posts}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default Post;
