import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon, CloseSearchIcon } from '~/components/Icons';

import { Wrapper as PopperWrapper } from '../../../Popper';
import ListItem from '~/components/ListItem/ListItem';
import Tippy from '@tippyjs/react/headless';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 1, 1, 1]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <Tippy
            visible={showResult && searchResult.length > 0}
            interactive
            placement="bottom"
            render={(attrs) => (
                <div className="w-[485px]" tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        <h4 className="w-full text-left text-[#928c8c]">Search Result</h4>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className="text-left col-span-1 flex items-center gap-x-2.5 relative py-[10px]  hidden md:flex">
                <button className="absolute left-1 p-1 z-10 border-none text-gray-500 w-6 h-6">
                    <SearchIcon />
                </button>
                <input
                    ref={inputRef}
                    placeholder="Search"
                    value={searchValue}
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="w-full py-1 pr-1 pl-8 rounded-md outline-none bg-neutral-100 transition-shadow focus:shadow-sm focus:shadow-blue-700 hover:shadow-sm hover:shadow-blue-700"
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button
                        onClick={handleClear}
                        className="absolute right-1 p-1 z-10 border-none text-gray-500 w-6 h-6"
                    >
                        <CloseSearchIcon className="text-gray-500" />
                    </button>
                )}
            </div>
        </Tippy>
    );
}

export default Search;
