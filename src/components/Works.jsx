'use client'
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { HiLink } from "react-icons/hi";
import { ImGithub } from "react-icons/im";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  features,
  live_link,
}) => {
  const refLiveLink = React.useRef(null);
  const refSourceCodeLink = React.useRef(null);
  const [positionLiveLink, setPositionLiveLink] = React.useState({ x: 0, y: 0 });
  const [positionSourceCodeLink, setPositionSourceCodeLink] = React.useState({ x: 0, y: 0 });

  const onMouseMoveLiveLink = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = refLiveLink.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPositionLiveLink({ x, y });
  };

  const onMouseMoveSourceCodeLink = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = refSourceCodeLink.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPositionSourceCodeLink({ x, y });
  };

  const onMouseLeave = () => {
    setPositionLiveLink({ x: 0, y: 0 });
    setPositionSourceCodeLink({ x: 0, y: 0 });
  };


  return (
    <div className='bg-tertiary bg-opacity-70 p-5 rounded-2xl gap-4'>
      <h3 className='text-white font-bold text-[28px] flex gap-2 items-center my-2 '>{name}<HiLink size={15} /></h3>
      <div className='lg:flex gap-10 lg:flex-row lg:justify-between lg:items-center'>
        <Tilt className=' lg:w-[90%] lg:h-[90%] w-full h-full'

        >
          <div className='relative cursor-pointer flex justify-between transition-all duration-500'>
            <img
              src={image.src}
              alt='project_image'
              className=' h-full w-full object-cover rounded-2xl'
            />
          </div>
        </Tilt>
        <div className='flex sm:flex lg:flex-col gap-8 mt-3'>
          <motion.div ref={refLiveLink} onMouseMove={onMouseMoveLiveLink} onMouseLeave={onMouseLeave}
            animate={{ x: positionLiveLink.x, y: positionLiveLink.y }}
            transition={{
              type: 'spring',
              stiffness: 130,
              damping: 50,
              mass: 0.1,
            }}>
            <button onClick={() => window.open(live_link, "_blank")} className=" text-gradient lg:w-[10%] flex justify-center">
              <p className=" font-semibold text-sm lg:text-[24px] hover:scale-105 transition-all duration-200 flex gap-2 items-center p-3 border-2 rounded-full border-secondary text-[#915EFF] ">
                <HiLink size={30} className=" " />
              </p>
            </button>
          </motion.div>
          <motion.div ref={refSourceCodeLink} onMouseMove={onMouseMoveSourceCodeLink} onMouseLeave={onMouseLeave}
            animate={{ x: positionSourceCodeLink.x, y: positionSourceCodeLink.y }}
            transition={{
              type: 'spring',
              stiffness: 130,
              damping: 50,
              mass: 0.1,
            }}>
            <button onClick={() => window.open(source_code_link, "_blank")} className=" text-gradient lg:w-[10%] flex justify-center">
              <p className="text-white font-semibold text-sm lg:text-[24px] hover:scale-105 transition-all duration-200 flex gap-2 items-center p-3 border-2 rounded-full border-secondary hover:bg-black ">
                <ImGithub size={30} className=" text-[#915EFF]" />
              </p>
            </button>
          </motion.div>
        </div>
      </div>

      <div>
        <div className='mt-5'>
          <p className='mt-2 text-gray-300 text-[19px] font-semibold mb-2'>{description}</p>
          <ul className=" list-disc text-sm text-gray-300 ml-3 h-0 overflow-hidden">
            {features.map((feature, index) => (
              <li key={index} className=" mb-2">{feature}</li>
            ))}
          </ul>
        </div>

        <div className='mt-4 flex flex-wrap gap-3'>
          {tags.map((tag) => (
            <p title={tag.name}
              key={`${name}-${tag.name}`}
              className={`text-[17px] font-semibold ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      < div className='relative'>
        <div>
          <p id="work" className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>

        <div className='w-full flex'>
          <motion.p
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
          <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
        </div>
      </div>

      <div className='mt-20 flex flex-col gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
