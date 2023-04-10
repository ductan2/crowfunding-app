import React from 'react';
import PropTypes from 'prop-types'
export const CampHeading = ({ children, size='small' }) => {
    return (
        <h3
            className={`font-bold text-base  text-text1 ${
                size === 'big' ? 'text-xl' : 'text-base'
            }`}
        >
            {children}
        </h3>
    );
};
CampHeading.propTypes = {
   size: PropTypes.oneOf(['small', 'big'])
};
