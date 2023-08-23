'use client';
import {
  About,
  Contact,
  // Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "@/components";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const scroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <div className="  ">
        <Navbar />
        <Hero  />
        <div className="bg-primary relative z-[1] h-full ">
        <div className=" relative z-[1]">

      <About />
      {/* <Experience /> */}
      <div className=" overflow-hidden">
      <Tech />

      </div>
      <Works />
      {/* <Feedbacks /> */}
        <Contact />
        </div>
        <StarsCanvas />
        </div>

    </div>
  );
}
