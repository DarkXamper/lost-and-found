import { Button } from "flowbite-react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { FaWpexplorer } from "react-icons/fa";

import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navList = [
  {
    name: "Home",
    path: "/",
    icon: "",
  },
  // {
  //   name: "Report Lost Item",
  //   link: "/report",
  // },
  // {
  //   name: "Search Found Items",
  //   link: "/search",
  // },
  {
    name: "Item List",
    path: "#",
    icon: <IoIosArrowDown className="w-4 h-4" />,
    subItems: [
      {
        name: "Create Listing",
        path: "/itemlist/createlisting",
        icon: <IoAdd className="w-6 h-6 text-gray-500 dark:text-white" />,
      },
      {
        name: "Explore Items",
        path: "/itemlist/explore",
        icon: (
          <FaWpexplorer className="w-6 h-6 text-gray-500 dark:text-white" />
        ),
      },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    icon: "",
  },
];

const Header = () => {
  const [toggleMode, setToggleMode] = useState(false);
  const [showSubItems, setShowSubItems] = useState(false);
  const handleMouseEnter = (itemName) => {
    if (itemName === "Item List") {
      setShowSubItems(true);
    } else {
      setShowSubItems(false);
    }
  };

  const handleMouseLeave = () => {
    setShowSubItems(false);
  };
  useEffect(() => {
    if (toggleMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleMode]);
  const handleToggleMode = () => {
    setToggleMode(!toggleMode);
  };

  return (
    <header className="sticky top-0 z-10 border-b-2 dark:border-gray-800 p-4 font-poppins bg-white dark:bg-[#0D121C] duration-300">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between relative">
        {/* logo */}
        <NavLink to="/">
          <div className="w-[100px] text-2xl md:text-4xl">
            <span className="dark:text-white">LO</span>
            <span className="text-orange-500">&F</span>
          </div>
        </NavLink>

        {/* search bar */}

        <div className="hidden md:flex items-center">
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 pe-12 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search here..."
                required
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-3">
                <button
                  type="submit"
                  className=" cursor-pointer hover:bg-gray-100 focus:bg-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-700 w-10 h-10 flex justify-center items-center rounded-full"
                >
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
              {/* <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button> */}
            </div>
          </form>
        </div>
        {/* navigation */}
        <div className="flex items-center gap-x-5">
          <div className="flex md:hidden items-center">
            <button
              type="submit"
              className=" cursor-pointer hover:bg-gray-100 focus:bg-gray-200 dark:focus:bg-slate-800 w-10 h-10 flex justify-center items-center rounded-full"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>

          <ul className="gap-x-6 lg:flex flex-row hidden">
            {navList.map((navItem, index) => (
              <Link to={navItem.path} key={index}>
                <li
                  className=" flex items-center gap-x-1 duration-150 hover:text-orange-500 list-none cursor-pointer text-sm font-medium text-[#343C3F] dark:text-white dark:hover:text-orange-500"
                  key={index}
                  onMouseEnter={() => handleMouseEnter(navItem.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {navItem.name}
                  {navItem.icon}
                  {navItem.subItems &&
                    showSubItems &&
                    navItem.name === "Item List" && (
                      <ul className="absolute top-2/4 mt-2 w-40 bg-white dark:bg-[#2c3437] shadow-lg rounded-lg py-2">
                        {navItem.subItems.map((subItem, subIndex) => (
                          <Link to={subItem.path} key={subIndex}>
                            <li
                              key={subIndex}
                              className="text-sm font-normal text-black dark:text-gray-200 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                            >
                              <div className="flex items-center gap-x-2">
                                {subItem.icon}
                                {subItem.name}
                                {console.log(subItem.name)}
                              </div>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                </li>
              </Link>
            ))}
          </ul>
          {/* Mode Toggle */}
          <div className="lg:border-l-2 lg:border-gray-300 dark:border-gray-600 lg:pl-4">
            {toggleMode ? (
              <MdOutlineLightMode
                className="text-2xl cursor-pointer dark:text-white dark:hover:text-orange-500 "
                onClick={handleToggleMode}
              />
            ) : (
              <MdOutlineDarkMode
                className="text-2xl cursor-pointer text-gray-400 hover:text-orange-500 "
                onClick={handleToggleMode}
              />
            )}
          </div>

          {/* <MdOutlineDarkMode className="text-2xl cursor-pointer text-zinc-500 hover:text-orange-500 duration-100" /> */}
          {/* <MdOutlineLightMode className="text-2xl cursor-pointer text-zinc-500 hover:text-orange-500 duration-100" /> */}
          {/* Sign In Button */}

          <NavLink to={"/signin"}>
            <Button
              outline
              gradientDuoTone="pinkToOrange"
              size="sm"
              className="whitespace-nowrap"
            >
              Sign In
            </Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
