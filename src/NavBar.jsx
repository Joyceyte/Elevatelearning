import { Link, useLocation } from "react-router-dom";

function NavBarComponent() {
  const location = useLocation();  // This hook is used to check the current route.

  return (
    <nav className="bg-slate-50 px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* Logo Image */}
          <img src="/elogo.png" alt="Elevate Learning Logo" className="h-8 w-8" />

          {/* Text with Gradient */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
            Elevate Learning
          </span>
        </Link>

        <div className="flex space-x-4">
          {/* Only IB English link here */}
          <Link
            to="/ib-english"
            className={`text-blue-700 hover:text-blue-500 ${location.pathname === "/ib-english" ? "text-purple-700" : ""}`}
          >
            IB English
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBarComponent;
