import Chakra from "../assets/chakra.png";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import Figma from "../assets/figma.png";
import Photoshop from "../assets/photoshop.png";
import Python from "../assets/pyhton.png";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMui } from "react-icons/si";
import Sql from "../assets/sql.png";
import { TbBrandNextjs } from "react-icons/tb";
import Tp from "../assets/tp.png";
import { motion } from "framer-motion";

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

const Technologies = () => {
    return (
        <div id="technologies" className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4"
                >
                    <TbBrandNextjs className="text-7xl text-white-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4"
                >
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4"
                >
                    <SiExpress className="text-7xl text-white-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4 w-20 h-20"
                >
                    <img src={Tp} alt="typescript icon" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4 w-20 h-20"
                >
                    <img src={Figma} alt="figma icon" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4"
                >
                    <SiMongodb className="text-7xl text-green-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4 w-20 h-20"
                >
                    <img src={Sql} alt="sql icon" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4"
                >
                    <SiMui className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4 w-20 h-20"
                >
                    <img src={Chakra} alt="chakra icon" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4 w-20 h-20"
                >
                    <img src={Python} alt="python icon" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p=4 w-20 h-20"
                >
                    <img src={Photoshop} alt="photoshop icon" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
