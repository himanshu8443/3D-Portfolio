'use client'
import React from "react";

import { BallCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { technologies } from "../constants/constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";

const Tech = () => {
  return (
    <>
    <div className='relative'>
     <motion.div variants={textVariant()}>
        <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Tech</p>
        <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>Skills.</h2>
      </motion.div>
      <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
      </div>
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
