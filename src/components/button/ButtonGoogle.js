import React from 'react';

export const ButtonGoogle = ({text="Sign up with google"}) => {
    return (
        <button className="flex justify-center gap-3 font-semibold items-center mx-auto border border-strock w-full px-8 rounded-lg py-4">
            <img src="./google-icon.png" className="w-6 h-6" alt="" />
            <span className="text-text2 dark:text-white text-[16px]">
               {text}
            </span>
        </button>
    );
};
