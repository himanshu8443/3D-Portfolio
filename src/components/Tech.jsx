'use client'
import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { technologies } from "../constants/constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Tech</p>
        <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>Skills.</h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} title={technology.name} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
