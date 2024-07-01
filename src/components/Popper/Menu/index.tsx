/* eslint-disable @typescript-eslint/no-unused-vars */
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';
import { MenuProps } from '~/types/Interface/menuProp';
import MenuItem from './MenuItem';

function Menu({ children, items = [] }: MenuProps) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            return <MenuItem key={index} data={item} onClick={item.onClick} />;
        });
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={false}
            render={(attrs) => (
                <div tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        <div className="flex flex-col gap-x-1 bg-[#e5e5e5] text-sm text-neutral-500 font-semibold rounded p-2">
                            {renderItems()}
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
