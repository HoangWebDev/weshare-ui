import Button from '~/components/Button/Button';
import { MenuItemProps } from '~/types/Interface/menuProp';

function MenuItem({ className, data, onClick }: MenuItemProps) {
    return (
        <Button className={className} to={data.to} onClick={onClick}>
            {data.name}
        </Button>
    );
}

export default MenuItem;
