import { useState } from 'react';
import Button from '../button/Button';
import { IconClose } from '../icon/IconClose';

const DashBoardSearch = () => {
    const [searchFund, setSearchFund] = useState(false);
    return (
        <div className="relative w-full max-w-[460px]">
            <div className="flex items-center bg-white  shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] rounded-3xl">
                <div className="flex-1">
                    <input
                        type="text"
                        className=" pr-24 bg-transparent placeholder:text-text4 flex-1 w-full h-full p-4 "
                        placeholder="Do fundrise now"
                    />
                </div>
                <button className="flex flex-shrink-0 absolute right-3 rounded-3xl text-white text-[20px] top-[50%] translate-y-[-50%] items-center justify-center bg-primary px-5 py-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </div>
            {searchFund && (
                <div
                    className="search-results w-full lg:w-[850px] absolute top-full left-0 gap-y-5 z-50
             bg-white rounded-3xl translate-y-5 p-5"
                >
                    <div className="flex items-center justify-between">
                        <h4 className="text-text1 text-[14px]">
                            See all 10,124 fundraisier
                        </h4>
                        <div className="text-error bg-error bg-opacity-40 w-10 h-10 rounded-3xl flex items-center justify-center cursor-pointer">
                            <IconClose></IconClose>
                        </div>
                    </div>
                    <div className="my-6 ">
                        <div className="flex flex-col gap-y-5">
                            <SearchItem></SearchItem>
                            <SearchItem></SearchItem>
                            <SearchItem></SearchItem>
                            <SearchItem></SearchItem>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-sm text-text1 font-semibold mb-4">
                            Releted search
                        </h4>
                        <div className="text-sm text-text2 flex flex-col gap-y-2">
                            <p>
                                <strong>education</strong> fund
                            </p>
                            <p>funding </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
const SearchItem = () => {
    return (
        <div className="flex items-center gap-x-5 ">
            <div className="w-12 h-12">
                <img
                    src="https://images.unsplash.com/photo-1678532685164-e0b1071010dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                    className="rounded-xl object-cover w-full h-full"
                />
            </div>
            <div>
                <p className="text-[14px] text-sm text-text1">
                    <strong>Education</strong> fund for Durgham Family
                </p>
                <p className="text-text3 text-sm">By Durgham Family</p>
            </div>
        </div>
    );
};
export default DashBoardSearch;
