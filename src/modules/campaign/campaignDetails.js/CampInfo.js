import React from 'react';

export const CampInfo = ({ numb = '0', desc, size = 'small' }) => {
    return (
        <div className="flex flex-col gap-y-2">
            <h4
                className={`${
                    size === 'small' ? 'text-sm' : 'text-xl'
                } font-semibold text-text2`}
            >
                {numb}
            </h4>
            <span
                className={`${
                    size === 'small' ? 'text-xs' : 'text-base'
                } text-text4`}
            >
                {desc}
            </span>
        </div>
    );
};
