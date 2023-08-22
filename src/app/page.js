import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "@/components";
// import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className=" relative">
        <Navbar />
        <Hero  />
        <div className=" hidden">
        <StarsCanvas />
        </div>
      </div>
      
      <About />
      {/* <Experience /> */}
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
