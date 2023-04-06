import React from 'react';
import { Input } from '../input/Input';



export const Checkbox = ({
    children,
    isCheck,
    onClick = () => {},
    name = ''
}) => {
    return (
        <div className="flex justify-start items-center">
            <div
                className={`w-5 h-5 rounded-md flex items-center justify-center border text-white ${
                    isCheck ? 'bg-primary border-primary' : 'border-gray-500'
                }`}
                onClick={onClick}
            >
                <input name={name} type="checkbox" className="hidden"></input>
                <svg
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 4.5L4.33333 8L11 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <label onClick={onClick} className='font-medium flex-1 ml-5 text-text3 cursor-pointer'>{children}</label>
        </div>
    );
};
