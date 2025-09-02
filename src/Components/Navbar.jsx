import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.getItem("theme");
        if (!localStorage.getItem("theme")) {
            localStorage.setItem("theme", theme);
        }
        else {
            localStorage.setItem("theme", theme);
        }
        // console.log(theme);


        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className="hover:text-blue-500">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className="hover:text-blue-500">
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="hover:text-blue-500">
                    Contact Us
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="bg-gray-100 dark:bg-gray-800 shadow w-full slab">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/">
                        <h1 className="text-xl font-bold text-blue-600 dark:text-white">
                            Chatify
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">{links}</ul>

                    {/* Theme Toggle Button with Tooltip */}
                    <div className="relative group">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                        >
                            {theme === "light" ? (
                                <Sun className="w-6 h-6 text-yellow-500" />
                            ) : (
                                <Moon className="w-6 h-6 text-gray-300" />
                            )}
                        </button>

                        {/* Tooltip */}
                        <span className="dosis absolute font-semibold -bottom-8 left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 rounded bg-black text-white opacity-0 group-hover:opacity-100 transition flex whitespace-nowrap">
                            {theme === "light" ? "Light Mode" : "Dark Mode"}
                        </span>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none cursor-pointer"
                        >
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <ul className="md:hidden flex flex-col space-y-4 px-4 pb-4 bg-white dark:bg-black dark:text-white shadow-md">
                    {links}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
