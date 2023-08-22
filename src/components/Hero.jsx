'use client'
import { motion } from "framer-motion";

import Image from "next/image";
import heroImg from "../assets/header.svg"
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] z-10  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-20 text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Himanshu</span><br/>
            <span className='text-white text-4xl md:text-6xl'>
            I am a{" "}
            </span>
         <TypeAnimation
            cursor={false}
            sequence={[
              "\"Full Stack Developer\"",
              1000,
              "\"Web Developer\"",
              1000,
              "\"UI/UX Designer\"",
              1000,
              "\"Backend Developer\"",
              1000,
            ]}
            wrapper="span"
            repeat={Infinity}
            repeatType="loop"
            className="text-secondary text-3xl md:text-7xl"
          />
          </h1>
        </div>
      </div>
      
      
      <Image src={heroImg} alt="hero" className="z-0 absolute bottom-0 right-0 animation" />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30 cursor-pointer'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
