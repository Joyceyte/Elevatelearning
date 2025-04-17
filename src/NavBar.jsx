import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WaitlistPopup from "./components/WaitlistPopup";

function NavBarComponent() {
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return true;
    }
    return false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="bg-fuchsia-100">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="logo.jpg" className="h-8" alt="Cortexa Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cortexa
            </span>
          </Link>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col mt-12 md:p-0 mt-12 border border-gray-100 rounded-lg md:flex-row md:justify-center md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    isActivePath("/")
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                ></Link>
              </li>
              <li>
                <Link
                  to="/ourstory"
                  className="text-gray-800 dark:text-white font-medium hover:text-fuchsia-700 transition-colors"
                >
                  Our story
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-gray-800 dark:text-white font-medium hover:text-fuchsia-700 transition-colors"
                >
                  Join Waitlist
                </button>
              </li>
            </ul>
          </div>
        </div>
        <WaitlistPopup showModal={showModal} setShowModal={setShowModal} />
      </nav>
    </>
  );
}

export default NavBarComponent;
