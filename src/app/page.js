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
    <div className="relative z-0 bg-primary">
      <div className=" relative hero">
        <Navbar />
        <Hero  />
        <StarsCanvas />
      </div>

      <About />
      {/* <Experience /> */}
      {/* <Tech /> */}
      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
