import Images from '~/assets/images/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faVideo, faImage, faPaperclip, faClose } from '@fortawesome/free-solid-svg-icons';
import { PostFormProps } from '~/types/Interface/formInterface';
import Button from '~/components/Button/Button';

function PostForm({ openPost, togglePostForm }: PostFormProps) {
    return (
        <>
            <div
                className={
                    openPost
                        ? 'w-9/12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-lg z-30 overflow-y-hidden'
                        : 'hidden'
                }
            >
                <div className="flex items-center gap-x-2 justify-between p-2">
                    <h3 className="text-md font-bold text-black">Create Posts</h3>
                    <FontAwesomeIcon
                        icon={faClose}
                        className="text-sm text-gray-500 cursor-pointer"
                        onClick={() => togglePostForm()}
                    />
                </div>
                <div className="flex items-center gap-x-2 p-2">
                    <img src={Images} alt="" className="w-12 h-12 rounded-full" />
                    <h3 className="text-sm font-semibold text-black">Username</h3>
                </div>

                <form className="w-full p-2 flex flex-col">
                    <textarea
                        placeholder="What's on your mind, Huỳnh Hoàng?"
                        className="border-none outline-none py-2 px-2 rounded-md bg-white text-gray-400 focus:shadow-sm focus:shadow-sky-400 transition-all duration-150"
                    />
                    <div className="flex items-center gap-x-5 my-2 p-2">
                        <FontAwesomeIcon icon={faCamera} className="text-md text-blue-500" />
                        <FontAwesomeIcon icon={faVideo} className="text-md text-red-500" />
                        <FontAwesomeIcon icon={faImage} className="text-md text-green-500" />
                        <FontAwesomeIcon icon={faPaperclip} className="text-md text-yellow-500" />
                    </div>
                    <Button className="w-full bg-gray-300 text-gray-400 py-2 px-2 rounded-md hover:bg-[blue] hover:text-white transition-all duration-300 font-semibold">
                        Posts
                    </Button>
                </form>
            </div>
            <div
                className={openPost ? 'fixed inset-0 bg-black opacity-50 z-20 overflow-y-hidden' : 'hidden'}
                onClick={() => togglePostForm()}
            ></div>
        </>
    );
}

export default PostForm;
