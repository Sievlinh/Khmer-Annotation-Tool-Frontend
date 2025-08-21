import { NavLink, useNavigate } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaSortAmountUp } from "react-icons/fa";
import { MdOutlineUploadFile } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import Logo from "../assets/profiles/Logo.png";
const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");

  };

  const navigationItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "Feature", path: "/feature", icon: FaWandMagicSparkles },
    { name: "Annotate", path: "/annotate", icon: MdOutlineUploadFile },
    { name: "About", path: "/about", icon: RiErrorWarningLine },
  ];
  return (
    <div className="w-56 text-white flex flex-col h-screen ">
      <div className="p-6 bg-white bg-opacity-20 mb-6 flex items-center justify-center">
        <img
          src= {Logo}
          alt="Logo"
          className="object-contain"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-6 px-6 py-4 transition-all duration-200 font-cadt ${isActive
                  ? "bg-opacity-25 bg-[#ff3f34] shadow-lg "
                  : "text-[#12284c] hover:bg-opacity-10 hover:text-[#ff3f34] hover:bg-opacity-10"
                }`
              }
            >
              <Icon className="w-6 h-6" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;