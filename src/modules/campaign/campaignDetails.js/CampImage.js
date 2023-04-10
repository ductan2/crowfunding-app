import React from 'react';

export const CampImage = ({img,className}) => {
    return (
        <>
            <img
                src={img}
                alt=""
                className={`w-full h-full object-cover rounded-2xl ${className}`}
            />
        </>
    );
};
