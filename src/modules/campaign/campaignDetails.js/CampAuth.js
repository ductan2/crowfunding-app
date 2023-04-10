import PropTypes from 'prop-types';

const CampAuth = ({ img, author = 'Anonymous Author' }) => {
    return (
        <>
            <img
                src={img}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-xs">
                by <span className="text-text2 font-semibold  ">{author}</span>
            </p>
        </>
    );
};

CampAuth.propTypes = {
    img: PropTypes.string,
    author: PropTypes.string
};

export default CampAuth;
