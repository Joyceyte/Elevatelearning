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
            className={`inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg md:hidden transition-colors
    ${
      isMenuOpen
        ? "text-fuchsia-700"
        : "text-gray-500 hover:text-fuchsia-700 dark:text-gray-400 dark:hover:text-fuchsia-700"
    }`}
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
            <ul className="absolute top-16 right-4 z-50 w-64 font-medium flex flex-col p-4 border border-gray-100 rounded-lg shadow-md bg-white md:static md:top-auto md:right-auto md:z-auto md:p-0 md:flex-row md:justify-center md:items-center md:space-x-8 rtl:space-x-reverse md:border-0 md:shadow-none md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="w-full md:w-auto">
                <Link
                  to="/ourstory"
                  className="block w-full md:w-auto px-4 py-2 text-gray-800 dark:text-white font-medium hover:text-fuchsia-700 transition-colors rounded-lg"
                >
                  Our story
                </Link>
              </li>
              <li className="w-full md:w-auto">
                <button
                  onClick={() => setShowModal(true)}
                  className="block w-full md:w-auto text-left md:text-center px-4 py-2 text-gray-800 dark:text-white font-medium hover:text-fuchsia-700 transition-colors rounded-lg"
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
