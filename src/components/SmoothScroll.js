"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const SmoothScroll = () => {

    useEffect(() => {
        const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

return () => {
    lenis.destroy()
}
    }, []);

  return;
};

export default SmoothScroll;
