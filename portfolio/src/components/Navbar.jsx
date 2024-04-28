import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/initiallogo.png";

// import logo from "../assets/logo.jpg";
function scrollTo(id) {
    const element = document.querySelector(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-6">
            <div className="flex flex-shrink-0 items-center">
                <img
                    src={logo}
                    alt="logo"
                    mx-2
                    w-10
                    style={{ width: "120px" }}
                />
            </div>
            {/* <div className="flex justify-center gap-4">
                <div className="nav-item">
                    <button
                        className="nav-link"
                        onClick={() => scrollTo("#about")}
                    >
                        About
                    </button>
                </div>
                <div className="nav-item">
                    <button
                        className="nav-link"
                        onClick={() => scrollTo("#technologies")}
                    >
                        Technologies
                    </button>
                </div>
                <div className="nav-item">
                    <button
                        className="nav-link"
                        onClick={() => scrollTo("#experience")}
                    >
                        Experience
                    </button>
                </div>
                <div className="nav-item">
                    <button
                        className="nav-link"
                        onClick={() => scrollTo("#projects")}
                    >
                        Projects
                    </button>
                </div>
                <div className="nav-item">
                    <button
                        className="nav-link"
                        onClick={() => scrollTo("#contact")}
                    >
                        Contact
                    </button>
                </div> */}
            {/* </div> */}
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/oxanamich/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/oxangyal"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://instagram.com/angeleyelive"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
