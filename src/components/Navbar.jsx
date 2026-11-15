import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logonew.png";

const NAV_ITEMS = [
    { id: "about", label: "About" },
    { id: "technologies", label: "Tools" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const Navbar = () => {
    const { pathname } = useLocation();

    const handleNavClick = (event, id) => {
        if (pathname !== "/") return;
        const element = document.getElementById(id);
        if (!element) return;
        event.preventDefault();
        element.scrollIntoView();
        window.history.replaceState(null, "", `#${id}`);
    };

    const handleLogoClick = () => {
        if (pathname === "/") {
            window.scrollTo({ top: 0 });
            window.history.replaceState(null, "", "/");
        }
    };

    return (
        <header className="sticky top-0 z-50 -mx-8 mb-20 border-b border-neutral-900 bg-neutral-950/85 px-8 backdrop-blur">
            <nav
                aria-label="Main"
                className="flex flex-wrap items-center justify-between gap-y-3 py-4"
            >
                <Link to="/" onClick={handleLogoClick} className="shrink-0">
                    <img
                        src={logo}
                        alt="Oxana — home"
                        className="mx-2"
                        style={{ width: "110px" }}
                    />
                </Link>

                <ul className="order-3 flex w-full gap-6 overflow-x-auto text-sm md:order-2 md:w-auto md:text-base">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.id} className="shrink-0">
                            <Link
                                to={`/#${item.id}`}
                                onClick={(event) =>
                                    handleNavClick(event, item.id)
                                }
                                className="text-neutral-300 transition-colors hover:text-purple-300 focus:outline-none focus-visible:text-purple-300 focus-visible:underline"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="order-2 flex items-center gap-4 text-xl md:order-3">
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
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
