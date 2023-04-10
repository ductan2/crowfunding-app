import DashBoardTopBar from '../components/dashboard/DashBoardTopBar';
import DashBoardSideBar from '../components/dashboard/DashBoardSideBar';

const LayoutDashBoard = ({ children }) => {
    return (
        <div className="p-10 bg-lite h-screen">
            {/* WARNING:overlay from component DashboarSearch */}
            {/* <div className="overlay fixed bg-black bg-opacity-20 inset-0"></div> */}
            <DashBoardTopBar></DashBoardTopBar>

            <div className="flex items-start gap-x-10">
                <DashBoardSideBar></DashBoardSideBar>
                <div className="ml-10 flex-1">{children}</div>
            </div>
        </div>
    );
};

export default LayoutDashBoard;
