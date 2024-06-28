import React, { useEffect, useState, useRef } from 'react';
import * as searchService from '~/services/Search/searchService';
import { SearchIcon, CloseSearchIcon, SpinnerIcon } from '~/components/Icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import ListItem from '~/components/ListItem/ListItem';
import Tippy from '@tippyjs/react/headless';
import useDebounce from '~/hooks/useDebounce';

interface SearchResult {
    id_user: number;
    // Thêm các thuộc tính khác nếu cần
}

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
    const [showResult, setShowResult] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            try {
                setIsLoading(true);
                const result = await searchService.search(debounced);
                if (result.length > 0) setSearchResult(result);
                setIsLoading(false);
            } catch (error) {
                console.error(error); // Handle errors appropriately
                setIsLoading(false);
            }
        };

        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounced]);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <Tippy
            appendTo={document.body}
            visible={showResult && (searchResult.length > 0 || searchValue.trim().length > 0)}
            interactive
            placement="bottom"
            render={(attrs) => (
                <div className="w-[485px]" tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        <h4 className="w-full text-left text-[#928c8c]">Search Result</h4>
                        {searchResult?.length > 0 ? (
                            searchResult.map((result) => <ListItem key={result.id_user} data={result} />)
                        ) : (
                            <div className="text-center text-[#928c8c]">Không tìm thấy kết quả nào</div>
                        )}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className="text-left col-span-1 items-center gap-x-2.5 relative py-[10px] hidden md:flex">
                <button className="absolute left-1 p-1 z-10 border-none text-gray-500 w-6 h-6">
                    <SearchIcon />
                </button>
                <input
                    ref={inputRef}
                    placeholder="Search"
                    value={searchValue}
                    spellCheck={false}
                    onChange={handleChange}
                    className="w-full py-1 pr-1 pl-8 rounded-md outline-none bg-neutral-100 transition-shadow focus:shadow-sm focus:shadow-blue-700 hover:shadow-sm hover:shadow-blue-700"
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !isLoading && (
                    <button
                        onClick={handleClear}
                        className="absolute right-1 p-1 z-10 border-none text-gray-500 w-6 h-6"
                    >
                        <CloseSearchIcon className="text-gray-500" />
                    </button>
                )}
                {isLoading && (
                    <SpinnerIcon className="absolute right-1 p-1 z-10 border-none text-gray-500 w-6 h-6 animate-spin" />
                )}
            </div>
        </Tippy>
    );
}

export default Search;
