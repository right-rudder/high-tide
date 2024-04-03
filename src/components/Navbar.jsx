import MobileNavbar from "./MobileNavbar";
import NavLink from "./NavLink";
import { navbarLinks } from "../data/navbarLinks.js";
import { useEffect, useState } from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaPhone } from "react-icons/fa";

const Navbar = ({ pathname }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState("");
  const [navBar, setNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMobile(() => !openMobile);
  };

  const handleMenuItemClick = (e) => {
    if (openSubmenu === e.target.id) {
      setOpenSubmenu("");
    } else {
      setOpenSubmenu(e.target.id);
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className="w-full h-0 sticky top-0 z-50">
      <div
        className={`${
          navBar || openMobile
            ? "bg-dark-blue/80 backdrop-blur border-dark-blue/80"
            : "bg-transparent border-white/20"
        } duration-300 border-b`}
      >
        <div className="mx-auto px-5 xl:px-12">
          <div
            className={`lg:h-24 relative flex h-20 items-center justify-between transition-all`}
            id="navbar"
          >
            <div className="flex flex-1 items-center justify-between">
              <a href="/">
                <img
                  src="src/assets/high-tide-aviation-logo-white.png"
                  alt="High Tide Aviation Logo"
                  className={`lg:h-20 h-14 w-auto transition-all`}
                  id="navbar-image"
                />
              </a>
              <div className="hidden lg:block">
                <div className="flex gap-5 xl:gap-10 items-center">
                  {navbarLinks.map((item) => (
                    <NavLink
                      key={item.name}
                      menuItem={item}
                      pathname={pathname}
                      toggled={item.name === openSubmenu}
                      onShow={handleMenuItemClick}
                    />
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-3 text-white border-l border-white/20 pl-10">
                <PiShoppingCartLight className="size-8 cursor-pointer hover:text-white/80 duration-300" />
                <div className="group border p-3 border-mustard-yellow rounded-full bg-mustard-yellow hover:bg-white hover:border-white duration-300 cursor-pointer">
                  <FaPhone className="size-4 group-hover:text-black duration-300" />
                </div>
                <div className="hidden xl:block">
                  <p className="text-sm text-white/80">Call Anytime</p>
                  <p className="font-medium">1-800-123-4567</p>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <button
                type="button"
                className="mobile-menu-button relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleHamburgerClick}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`${openMobile ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="x-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>

                <svg
                  className={`${openMobile ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="hamburger-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          openMobile ? "max-h-[36rem]" : "max-h-0"
        } overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden absolute w-full bg-black -z-10`}
        id="mobile-menu"
      >
        <div className="px-4 pb-3 pt-2 flex flex-col">
          <MobileNavbar pathname={pathname} />
          <a
            href="/discovery-flight"
            className={`cursor-pointer text-xl text-white py-3 hover:border-b-2 border-main-red whitespace-nowrap ${
              pathname === "/discovery-flight" ? "border-b-2" : ""
            }`}
          >
            Fly with Us
          </a>
          <a
            href="/enrollment"
            target="_blank"
            className="btn-red place-self-center mt-5"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
