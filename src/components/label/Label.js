import React from 'react';

export const Label = (props) => {
    const { children,htmlfor } = props;
    return <label htmlFor={htmlfor} className="text-[14px] text-text2 inline-block font-semibold ">{children}</label>;
};
