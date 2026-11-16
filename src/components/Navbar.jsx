import {
    FaBars,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "../assets/logonew.png";

const NAV_ITEMS = [
    { id: "about", label: "About" },
    { id: "technologies", label: "Tools" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const Navbar = () => {
    const { pathname, hash } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname, hash]);

    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (event) => {
            if (event.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);

    const handleNavClick = (event, id) => {
        setIsOpen(false);
        if (pathname !== "/") return;
        const element = document.getElementById(id);
        if (!element) return;
        event.preventDefault();
        element.scrollIntoView();
        window.history.replaceState(null, "", `#${id}`);
    };

    const handleLogoClick = () => {
        setIsOpen(false);
        if (pathname === "/") {
            window.scrollTo({ top: 0 });
            window.history.replaceState(null, "", "/");
        }
    };

    const linkClass =
        "text-neutral-300 transition-colors hover:text-purple-300 focus:outline-none focus-visible:text-purple-300 focus-visible:underline";

    return (
        <header className="sticky top-0 z-50 -mx-8 mb-20 border-b border-neutral-900 bg-neutral-950/85 px-8 backdrop-blur">
            <nav
                aria-label="Main"
                className="flex items-center justify-between py-4"
            >
                <Link to="/" onClick={handleLogoClick} className="shrink-0">
                    <img
                        src={logo}
                        alt="Oxana — home"
                        className="mx-2 w-[90px] md:w-[110px]"
                    />
                </Link>

                <ul className="hidden md:flex gap-6 text-base">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={`/#${item.id}`}
                                onClick={(event) =>
                                    handleNavClick(event, item.id)
                                }
                                className={linkClass}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4 text-xl">
                    <a
                        href="https://www.linkedin.com/in/oxanamich/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition-colors hover:text-purple-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/oxangyal"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-colors hover:text-purple-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://instagram.com/angeleyelive"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="transition-colors hover:text-purple-300"
                    >
                        <FaInstagram />
                    </a>

                    <button
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        className="md:hidden -mr-2 p-2 text-neutral-200 transition-colors hover:text-purple-300"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden border-t border-neutral-900 pb-5 pt-2"
                >
                    <ul className="flex flex-col items-center">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={`/#${item.id}`}
                                    onClick={(event) =>
                                        handleNavClick(event, item.id)
                                    }
                                    className={`block px-6 py-3 text-center text-lg ${linkClass}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-3 flex justify-center">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-2 text-sm text-neutral-300 transition-colors hover:border-purple-400 hover:text-purple-300 focus:outline-none focus-visible:border-purple-400 focus-visible:text-purple-300"
                        >
                            <FaTimes aria-hidden="true" />
                            Close
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
