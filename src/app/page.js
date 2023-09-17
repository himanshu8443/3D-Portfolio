import {
  About,
  Contact,
  // Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "@/components";
import dynamic from "next/dynamic";

export default function Home() {
  const StarsCanvas = dynamic(() => import("@/components/canvas/Stars"));
  return (
    <div className="  ">
      <Navbar />
      <Hero />
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
