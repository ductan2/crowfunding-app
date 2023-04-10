import React from 'react';

export const Heading = ({ children, number }) => {
    return (
        <h2 className="text-text1 text-lg font-semibold">
            {children}
            {number && (
                <span className="text-secondary font-semibold">
                    {' '}
                    {`(${number})`}
                </span>
            )}
        </h2>
    );
};
