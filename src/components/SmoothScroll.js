"use client";
import { useEffect } from "react";

const SmoothScroll = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const scroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return;
};
export default SmoothScroll;
