import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import {
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiDotnet,
  SiExpress,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
  initial:{y:-10},
  animate:{y:[10,-10],
    transition:{
        delay:0.5,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
        duration:duration
    }
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className=" my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJsSquare className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-white-700" />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbApi className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRedux className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-white" />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDotnet className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
