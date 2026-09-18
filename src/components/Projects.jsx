import { Link } from "react-router-dom";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div id="projects" className="border-b border-neutral-900 pb-4">
            <h1 className="my-10 text-center text-4xl">Projects</h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 2 }}
                className="flex flex-col gap-8"
            >
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row items-center lg:items-start gap-5 mb-8 p-4 rounded-lg"
                        style={{
                            boxShadow: "0 0 10px 0 rgba(109, 66, 130, 0.5)",
                        }}
                    >
                        <div className="flex justify-center lg:w-1/3 w-full">
                            <a
                                href={project.web}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="mb-1 rounded w-full lg:w-1/2 max-w-sm"
                                />
                            </a>
                        </div>
                        <div className="lg:w-2/3">
                            <p className="text-purple-400 mb-2 text-lg text-center lg:text-left">
                                {project.title}
                            </p>
                            <p className="text-neutral-300 text-sm mb-2 text-center lg:text-left">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center lg:justify-start mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-black-400 text-white h-5 px-1 text-sm"
                                        style={{
                                            boxShadow:
                                                "0 0 5px 0 rgba(255, 255, 255, 0.5)",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                                {project.web && (
                                    <div>
                                        <a
                                            href={project.web}
                                            className="text-purple-400 hover:text-purple-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <p className="text-sm">Web</p>
                                        </a>
                                    </div>
                                )}
                                {project.front && (
                                    <div>
                                        <a
                                            href={project.front}
                                            className="text-purple-400 hover:text-purple-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <p className="text-sm">Front End</p>
                                        </a>
                                    </div>
                                )}
                                {project.back && (
                                    <div>
                                        <a
                                            href={project.back}
                                            className="text-purple-400 hover:text-purple-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <p className="text-sm">Back End</p>
                                        </a>
                                    </div>
                                )}

                                {project.title === "AngelEye Photography" && (
                                    <div>
                                        <Link
                                            to="/angeleye-ux"
                                            onClick={() =>
                                                window.scrollTo(0, 0)
                                            }
                                            className="text-sm font-medium text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/80 px-3 py-1 rounded border border-purple-700 transition duration-200 inline-block"
                                            style={{
                                                boxShadow:
                                                    "0 0 8px rgba(168, 85, 247, 0.4)",
                                            }}
                                        >
                                            UX Case Study ✨
                                        </Link>
                                    </div>
                                )}
                                {project.title === "L'AMORE Restaurant" && (
                                    <div>
                                        <Link
                                            to="/lamore-ux"
                                            onClick={() =>
                                                window.scrollTo(0, 0)
                                            }
                                            className="text-sm font-medium text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/80 px-3 py-1 rounded border border-purple-700 transition duration-200 inline-block"
                                            style={{
                                                boxShadow:
                                                    "0 0 8px rgba(168, 85, 247, 0.4)",
                                            }}
                                        >
                                            UX Case Study ✨
                                        </Link>
                                    </div>
                                )}
                                {project.title === "AIRHub" && (
                                    <div>
                                        <Link
                                            to="/airhub-ux"
                                            onClick={() =>
                                                window.scrollTo(0, 0)
                                            }
                                            className="text-sm font-medium text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/80 px-3 py-1 rounded border border-purple-700 transition duration-200 inline-block"
                                            style={{
                                                boxShadow:
                                                    "0 0 8px rgba(168, 85, 247, 0.4)",
                                            }}
                                        >
                                            UX Case Study ✨
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
