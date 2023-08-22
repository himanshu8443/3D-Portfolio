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

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className=" relative hero">
        <Navbar />
        <Hero  />
        <div className=" hidden lg:block ">
        <StarsCanvas />
        </div>
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
