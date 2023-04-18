import { IconDashBoard } from '../icon/iconSideBarDashBoard/IconDashBoard';
import { IconCampaign } from '../icon/iconSideBarDashBoard/IconCampaign';
import { IconPayment } from '../icon/iconSideBarDashBoard/IconPayment';
import { IconWithDraw } from '../icon/iconSideBarDashBoard/IconWithDraw';
import { IconProfile } from '../icon/iconSideBarDashBoard/IconProfile';
import { IconLogout } from '../icon/iconSideBarDashBoard/IconLogout';
import { IconLight } from '../icon/iconSideBarDashBoard/IconLight';
import { NavLink } from 'react-router-dom';
const sidebarLink = [
    {
        title: 'Dashboard',
        icon: <IconDashBoard></IconDashBoard>,
        url: '/'
    },
    {
        title: 'Campaign',
        icon: <IconCampaign></IconCampaign>,
        url: '/campaign'
    },
    {
        title: 'Payment',
        icon: <IconPayment></IconPayment>,
        url: '/payment'
    },
    {
        title: 'WithDraw',
        icon: <IconWithDraw></IconWithDraw>,
        url: '/withDraw'
    },
    {
        title: 'Profile',
        icon: <IconProfile></IconProfile>,
        url: '/profile'
    },
    {
        title: 'Logout',
        icon: <IconLogout></IconLogout>,
        url: '/logout',
        onClick: () => {}
    },
    { title: 'Light', icon: <IconLight></IconLight>,url:"/light"}
];
const navLinkClass = 'mt-5 first:mt-0 p-2 flex items-center justify-center ';
const DashBoardSideBar = () => {
    return (
        <div className="w-full  md:w-[76px] h-full flex-shrink-0 max-h-[733px] bg-white rounded-3xl flex flex-col shadow-sdprimary py-10 px-3 sidebar ">
            {sidebarLink.map((item, index) => {
                return (
                    <NavLink
                        to={item.url}
                        key={item.title}
                        className={({ isActive }) =>
                            isActive
                                ? `${navLinkClass} text-primary bg-primary bg-opacity-30 rounded-lg`
                                : `${navLinkClass} icon-color`
                        }
                    >
                        {item.icon}
                        <span className="text-sm text-text3 sm:hidden">
                            {item.title}
                        </span>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default DashBoardSideBar;
