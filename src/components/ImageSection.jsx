import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const el = imageRef.current;

    gsap.fromTo(
      el,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%", // trigger earlier
          end: "bottom 60%",
          toggleActions: "play none none none",
          once: true, // animation happens only once
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // cleanup on unmount
    };
  }, []);

  return (
    <div ref={imageRef} className="h-full w-full">
      <img src="slider/ab1.webp" alt="" className="h-full w-full" />
    </div>
  );
};

export default ImageSection;
