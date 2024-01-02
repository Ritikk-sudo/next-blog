"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollAnim() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          height: 10,
          width: "100%",
          background: "#5e62f8",
          transformOrigin: "0%",
        }}
      />
     
    </>
  );
}
