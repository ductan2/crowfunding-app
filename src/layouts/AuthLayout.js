import { Link } from 'react-router-dom';

const AuthLayout = (props) => {
    const { children, heading } = props;
    return (
        <div className="bg-lite w-full min-h-screen p-10 relative isolate">
            <img
                src="./Ellipse.png"
                className="absolute bottom-[-50%] w-full h-full right-0 left-0 z-[-1] pointer-events-none"
                alt="esclipt"
            />
            <Link to={'/'} className="mb-8 inline-block lg:mb-16">
                <img src="./logo.png" alt="" />
            </Link>
            <div className="bg-white shadow-xl rounded-lg px-5 py-8 lg:px-16 lg:py-12 max-w-[556px] mx-auto">
                <h1 className="text-[22px] font-semibold leading-7 lg:text-[18px] text-center">
                    {heading}
                </h1>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
