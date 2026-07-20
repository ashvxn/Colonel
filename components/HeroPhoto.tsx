"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function HeroPhoto() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.1]);
  const captionOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <figure className="mst-hero-photo" ref={ref}>
      <motion.div style={{ position: "absolute", inset: 0, y, scale }}>
        <Image
          src="/images/image.png"
          alt="Major Sandeep Unnikrishnan, AC"
          fill
          priority
          sizes="100vw"
          className="mst-hero-photo-img"
        />
      </motion.div>
      <motion.figcaption className="mst-hero-caption" style={{ opacity: captionOpacity }}>
        <span>Maj. Sandeep Unnikrishnan, AC</span>
        <span>Operation Black Tornado &middot; 26/11 Mumbai</span>
      </motion.figcaption>
    </figure>
  );
}
