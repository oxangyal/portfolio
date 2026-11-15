import Chakra from "../assets/chakra.png";
import { FaNodeJs } from "react-icons/fa";
import Figma from "../assets/figma.png";
import Illustrator from "../assets/adobe-ai.png";
import Photoshop from "../assets/photoshop.png";
import Python from "../assets/pyhton.png";
import { RiReactjsLine } from "react-icons/ri";
import Ruby from "../assets/ruby.png";
import { SiDatabricks } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import Sql from "../assets/sql.png";
import { TbBrandNextjs } from "react-icons/tb";
import Tp from "../assets/tp.png";
import { motion } from "framer-motion";

// import { SiExpress } from "react-icons/si";







const iconVariants = (duration) => ({
    initial: { y: -5 },
    animate: {
        y: [6, -6],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const TOOLS = [
    { name: "React", Icon: RiReactjsLine, color: "text-cyan-400", duration: 3 },
    { name: "Next.js", Icon: TbBrandNextjs, color: "text-white", duration: 2 },
    { name: "Node.js", Icon: FaNodeJs, color: "text-green-500", duration: 4 },
    // { name: "Express", Icon: SiExpress, color: "text-white", duration: 6 },
    { name: "TypeScript", image: Tp, duration: 5 },
    { name: "Figma", image: Figma, duration: 4 },
    { name: "Photoshop", image: Photoshop, duration: 5 },
    {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        color: "text-[#4169E1]",
        duration: 5,
    },
    { name: "MongoDB", Icon: SiMongodb, color: "text-green-400", duration: 2 },
    { name: "MySQL", image: Sql, duration: 4 },

    { name: "Material UI", Icon: SiMui, color: "text-blue-500", duration: 6 },
    { name: "Chakra UI", image: Chakra, duration: 4 },
    { name: "Illustrator", image: Illustrator, duration: 4 },
    { name: "Python", image: Python, duration: 3 },
    {
        name: "Databricks",
        Icon: SiDatabricks,
        color: "text-[#FF3621]",
        duration: 5,
    },
    { name: "Ruby", image: Ruby, duration: 3 },
];

const Technologies = () => {
    return (
        <div id="technologies" className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Tools</h1>
            <ul className="flex flex-wrap items-center justify-center gap-3">
                {TOOLS.map(({ name, Icon, image, color, duration }) => (
                    <li key={name}>
                        <motion.div
                            variants={iconVariants(duration)}
                            initial="initial"
                            animate="animate"
                            tabIndex={0}
                            className="group relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border-4 border-neutral-800 p-1 transition-colors hover:border-purple-500/60 focus:outline-none focus-visible:border-purple-400"
                        >
                            {Icon ? (
                                <Icon
                                    aria-hidden="true"
                                    className={`text-5xl ${color}`}
                                />
                            ) : (
                                <img
                                    src={image}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-12 w-12 object-contain"
                                />
                            )}

                            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-neutral-700 bg-neutral-900 px-2.5 py-1 text-sm text-neutral-100 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus:opacity-100">
                                {name}
                            </span>
                        </motion.div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Technologies;
