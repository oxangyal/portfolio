import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    const handleButtonClick = (event) => {
        const src = event.target.getAttribute("data-src");
        window.open(src, "_blank");
    };

    return (
        <div id="projects" className="border-b border-neutral-900 pb-4">
            <h1 className="my-10 text-center text-4xl">Projects</h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 2 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 "
            >
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="pt-4 gap-5 mb-8 flex rounded-lg flex-wrap lg:justify-center"
                        // className="pt-4 border border-purple-300 rounded-lg shadow-xl gap-5 mb-8 flex flex-wrap lg:justify-center"
                        style={{
                            boxShadow: "0 0 10px 0 rgba(109, 66, 130, 0.5)",
                        }}
                    >
                        <div>
                            <div>
                                <p className="text-purple-400 mb-2 text-lg text-center">
                                    {project.title}
                                </p>

                                <div className="flex justify-center w-48">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="mb-1 rounded"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4 h-36">
                            {/* <h6 className="mb-2 font-semibold text-lg text-purple-400">
                                {project.title}
                            </h6> */}
                            <p className=" text-neutral-400 text-sm">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex gap-1 justify-center mb-2 w-full max-w-xl lg:w-3/4">
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

                        <div className="flex gap-10 justify-center mb-2">
                            <div>
                                <a
                                    href={project.web}
                                    className="text-purple-400 hover:text-purple-200"
                                >
                                    <p className="text-sm">Web</p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href={project.front}
                                    className="text-purple-400 hover:text-purple-200"
                                >
                                    <p className="text-sm">Front End</p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href={project.back}
                                    className="text-purple-400 hover:text-purple-200"
                                >
                                    <p className="text-sm">Back End</p>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
