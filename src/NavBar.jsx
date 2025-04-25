import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WaitlistPopup from "./components/WaitlistPopup";

function NavBarComponent() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const isActivePath = (path) => location.pathname === path;

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
     <nav className="bg-slate-50 px-4">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
     
    <span className="self-center text-2xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
  Elevate Learning
</span>

    </Link>

    <div className="flex space-x-4">
      <a href="#about" className="text-blue-700 hover:text-blue-500">About</a>
      <a href="#testimonials" className="text-blue-700 hover:text-blue-500">Testimonials</a>
      <a href="#pricing" className="text-blue-700 hover:text-blue-500">Pricing</a>
      <a href="#contact" className="text-blue-700 hover:text-blue-500">Contact</a>
    </div>
  </div>
</nav>


    </>
  );
}

export default NavBarComponent;
