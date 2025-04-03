import { NavitemType } from "@/types";
import { Hierarchy2, Home, Logout, Setting2, Speedometer, User } from "iconsax-react";
import SideBarItem from "../SideBarItem/page";
import './style.scss'
const SideBar = () => {
  const navItems: NavitemType[] = [
    {
      name: "Over Viwe",
      link: "/", // Add link property as an example
      icon: <Speedometer color="#fff" size={24} />,
    },
    {
      name: "Inbunds",
      link: "/Inbons", // Add additional items as needed
      icon: <User color="#fff"size={24} />,
    },
    {
      name: "Panel Settings",
      link: "/profile", // Add additional items as needed
      icon: <Setting2 color="#fff"size={24} />,
    },
    {
      name: "Xray Configs",
      link: "/profile", // Add additional items as needed
      icon: <Hierarchy2 color="#fff"size={24} />,
    },
    {
      name: "Log Out",
      link: "/profile"   , // Add additional items as needed
      icon: <Logout color="#fff"size={24} />,
    },
  ];

  return (
    <div className=" sidebar flex-col items-center bg-[#111516] rounded-lg shadow-md h-[92vh]  py-5 lg:flex md:hidden sm:hidden border-2 border-slate-800">
      <h2 className="text-xl font-semibold mb-4">Navigation</h2>
      <ul className="space-y-2 mt-20">
        {navItems.length > 0 ? (
          navItems.map((item, key) => ( 
            <SideBarItem icon={item.icon} name={item.name} link={item.link}  />
          ))
        ) : (
          <li className="text-gray-500">No navigation items available.</li>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
