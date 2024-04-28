import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div id="experience" className="border-b border-neutral-900 pb-4">
            <h1 className="my-10 text-center text-4xl">Experience</h1>
            <div className="flex justify-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="lg:w-full"
                >
                    {EXPERIENCES.map((experience, index) => (
                        <div
                            key={index}
                            className="mb-8 flex flex-wrap lg:justify-center"
                        >
                            {/* Year Column */}
                            {/* <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
                                {" "}
                                <p className="text-sm text-neutral-400 lg:text-center lg:pr-4">
                                    {experience.year}
                                </p>
                            </div> */}
                            {/* Role and Company Column */}
                            <div className="w-full lg:w-1/2">
                                <h6 className="mb-2 font-semibold text-center">
                                    {experience.role} -{" "}
                                    <span className="text-sm text-purple-300">
                                        {experience.company}
                                    </span>
                                </h6>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
