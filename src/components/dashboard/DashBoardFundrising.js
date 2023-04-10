import React from 'react';
import useToggle from '../../hooks/useToggle';

const fundList = [
    {
        title: 'Tech & Innovation',
        content: [
            { text: 'Audio' },
            { text: 'Camera Gear' },
            { text: 'Education' },
            { text: 'Green Tech' },
            { text: 'Clothe & Wearables' },
            { text: 'Food & Beverage' },
            { text: 'Health & Fitness' },
            { text: 'Home' },
            { text: 'Phones & Accssories' },
            { text: 'Productivity' },
            { text: 'Transportation' },
            { text: 'Travel & Outdoors' }
        ]
    },
    {
        title: 'Creative Works',
        content: [
            { text: 'Art' },
            { text: 'Comics' },
            { text: 'Dance & Teather' },
            { text: 'Film' },
            { text: 'Photography' },
            { text: 'Music' },
            { text: 'Podcust, Blogs & Vlogs' },
            { text: 'Tablet Games' },
            { text: 'Video Games' },
            { text: 'Web Series' },
            { text: 'Architecture' }
        ]
    }
];

const DashBoardFundrising = () => {
    const { value: fundBoard, handleValue: handleFundBoard } = useToggle();
    return (
        <div className="flex select-none text-text4 relative items-center cursor-pointer" onClick={handleFundBoard}>
            <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16 2.293L11.707 6.586L7.707 2.586L0 10.293L1.414 11.707L7.707 5.414L11.707 9.414L17.414 3.707L19.707 6V0H13.707L16 2.293Z"
                    fill="#A2A2A8"
                />
            </svg>
            <span className="text-base text-text2 font-semibold mx-2">
                Fundrising for
            </span>
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
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
            {fundBoard && (
                <div className="fund-list w-full rounded-sm shadow-lg px-10 bg-white py-10 min-w-[900px] absolute bottom-[-100%] translate-y-[100%] right-[-100%]">
                    <div
                        className={`grid w-full  grid-cols-${fundList.length}`}
                    >
                        {fundList.map((item, index) => {
                            return (
                                <div className="w-full" key={index}>
                                    <h3 className="text-base font-semibold text-text1">
                                        {item.title}
                                    </h3>
                                    <ul className="grid grid-cols-2 mt-5">
                                        {item.content.map((item, index) => {
                                            return (
                                                <li
                                                    className="text-text2 py-1 text-sm"
                                                    key={100 + index}
                                                >
                                                    {item.text}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashBoardFundrising;
