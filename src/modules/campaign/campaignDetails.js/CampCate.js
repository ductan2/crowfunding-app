import React from 'react';
import { IconFolder } from '../../../components/icon/IconFolder';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
export const CampCate = ({ title = 'Empty', size="small" }) => {
    return (
        <Link
            to={'/'}
            className="flex gap-x-2 text-text3  text-[14px] leading-[18px] items-end my-3"
        >
            <IconFolder></IconFolder>
            <span className={`first-letter:uppercase ${size === 'small' ? 'text-xs' : 'text-base'}`}>
                {title}
            </span>
        </Link>
    );
};
CampCate.propTypes = {
    size: PropTypes.oneOf(['small', 'big'])
 };