import feather from "feather-icons";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router";
const Sidebar = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleDropdown = (id: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const cleanIconName = (icon: string) => icon.replace(/^[^-]+-/, "");
  useEffect(() => {
    feather.replace();
  }, [menuItems]);
  const location = useLocation();
  const { pathname } = location;

  return (
    <aside
      className={`lg:pl-[2.063rem] pe-[0.875rem]  ${
        isCollapsed ? "w-20 " : "w-full md:w-[17rem] 2xl:w-[21.625rem] "
      } bg-white transition-all duration-300 h-screen  flex flex-col`}
    >
      <nav className="pt-6">
        <div
          className={`hidden lg:flex gap-[10px] items-center mb-[1.563rem]  ${
            isCollapsed ? "justify-center " : ""
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="text-primary  flex items-center justify-center focus:outline-none"
          >
            <IoMenuOutline className={`text-primary text-4xl `} />
          </button>
          {!isCollapsed && <p className="text-2xl font-bold">Menu</p>}
        </div>
        {!isCollapsed && (
          <div className="flex lg:hidden  absolute top-4">
            <img
              src="/assets/images/logo.svg"
              className={`h-[3rem] w-[7.5rem] `}
              alt="Logo"
            />
          </div>
        )}

        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className={`py-[1.313rem] flex items-center w-full gap-[0.684rem] rounded-xl text-base hover:font-medium hover:text-primary ${
                      isCollapsed ? "justify-center" : "pl-8 hover:bg-skyblue"
                    }`}
                  >
                    <span className="w-8 h-8 text-primary flex items-center text-2xl">
                      <i data-feather={cleanIconName(item.icon)}></i>
                    </span>
                    {!isCollapsed && <span>{item.title}</span>}
                    {!isCollapsed && (
                      <span className="ml-auto pe-[1rem]">
                        {openDropdowns[item.id] ? (
                          <IoIosArrowForward />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </span>
                    )}
                  </button>

                  <ul
                    className={`transition-all duration-300 overflow-hidden ${
                      openDropdowns[item.id]
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.id} className="pl-12 py-2">
                        <Link
                          to={child.path}
                          className="flex gap-2 items-center py-2 pl-4 rounded-md text-gray-700 hover:bg-gray-200"
                        >
                          <FaArrowRight />
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`py-[1.313rem] flex items-center gap-[0.684rem] rounded-xl hover:font-medium hover:text-primary text-base ${
                    isCollapsed ? "justify-center" : "pl-8 hover:bg-skyblue"
                  }  ${
                    pathname === item.path
                      ? "bg-skyblue font-medium text-primary"
                      : ""
                  }`}
                >
                  <span
                    className={`w-8 h-8  flex items-center text-2xl  ${
                      pathname === item.path ? "text-yellow" : "text-primary"
                    }`}
                  >
                    <i data-feather={cleanIconName(item.icon)}></i>
                  </span>
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
