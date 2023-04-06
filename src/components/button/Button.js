import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { children, type = 'button', className, isLoading = false } = props;
    //  if (isLoading)
    //      return (
    //          <div className="w-5 h-5 rounded-full border-4 border-white border-r-transparent animate-spin"></div>
    //      );
    return (
        <button
            type={type}
            className={`py-4 text-base flex items-center justify-center font-semibold text-white ${className} w-full h-full rounded-xl mt-5 ${
                isLoading ? 'opacity-50' : ''
            }`}
        >
            {isLoading ? (
                <div className="w-6 h-6 rounded-full border-4 border-white border-r-transparent animate-spin"></div>
            ) : (
                children
            )}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    className: PropTypes.string,
    isLoading: PropTypes.bool
};

export default Button;
