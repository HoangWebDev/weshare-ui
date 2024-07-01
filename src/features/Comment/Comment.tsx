/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from '~/components/Button/Button';
import Image from '~/components/Image';
import * as commentService from '~/services/Comment/commentService';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { CommentFormProps } from '~/types/Interface/formInterface';
import { useQuery } from '@tanstack/react-query';
import CommentModel from '~/models/Comment';
import { useEffect } from 'react';

function Comment({ openComment, toggleComment, idPost }: CommentFormProps) {
    const { isLoading, data } = useQuery({
        queryKey: ['comments', idPost],
        queryFn: async () => {
            const result = (await commentService.getCommentByIdPost(idPost)) as CommentModel[];
            return result;
        },
    });

    return (
        <>
            <div className={openComment ? 'mt-2' : 'hidden'}>
                <hr />
                <div className="mt-2">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        data?.map((comment) => (
                            <div key={comment.id_comment} className="flex gap-x-2 items-start my-2">
                                <Image className="w-8 h-8 rounded-full" alt="" />
                                <div className="flex flex-col">
                                    <div className="p-1 bg-neutral-500 rounded w-max">
                                        <div className="text-xs font-semibold text-white">{comment.id_user}</div>
                                        <div className="text-sm text-white">{comment.content}</div>
                                    </div>
                                    <div className="text-gray-500 text-xs">
                                        {comment.created_at
                                            ? new Date(comment.created_at).toLocaleDateString()
                                            : 'Ngày không rõ'}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                    <div className="flex gap-x-2">
                        <Image className="w-8 h-8 rounded-full" alt="" />
                        <form className="flex items-center p-1 bg-neutral-500 rounded">
                            <input
                                type="text"
                                className="border-none outline-none bg-transparent px-2 caret-white text-neutral-500"
                                placeholder="Write a comment..."
                            />
                            <Button>
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    className="bg-gray-300 text-gray-400 py-2 px-2 rounded-md hover:bg-[blue] hover:text-white transition-all duration-300 font-semibold"
                                />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comment;
