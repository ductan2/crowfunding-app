import React from 'react';
import PropTypes from 'prop-types';
export const CampDesc = ({ children, size }) => {
    return (
        <p
            className={` text-text3 ${
                size === 'small' ? 'text-xs' : 'text-sm'
            }`}
        >
            {children}
        </p>
    );
};
CampDesc.propTypes = {
    size: PropTypes.oneOf(['small', 'big'])
};
