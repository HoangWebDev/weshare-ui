import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function ListItem() {
    return (
        <div className="flex justify-between items-center py-2 px-2 cursor-pointer hover:bg-[#16182308]">
            <div className="flex ml-3 gap-x-2">
                <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/438837307_1781505952357379_194462505574883281_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHf58-IXg5AcFm1NeuTouMD9X9exaY3IkP1f17FpjciQZU4YVm5k6tbyrPouUEZ4zTGhmIHabVMdnsPz1XZPIW&_nc_ohc=dCgvHCkOASkQ7kNvgGJZreP&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYAAkRrdmYxkggnv9qR1QjbhkcCTWruQwR_dXvmZUqCzqA&oe=667D69F1"
                    alt="Hoaa"
                />

                <p className="text-base font-semibold flex items-center">
                    <span>Nguyễn Văn A</span>
                </p>
            </div>
            <FontAwesomeIcon className="text-[#9fa1a6]" icon={faClose} />
        </div>
    );
}

export default ListItem;
