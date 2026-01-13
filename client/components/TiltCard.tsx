"use client";

import Tilt from "react-parallax-tilt";
import React from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      perspective={1000}
      scale={1.05}
      transitionSpeed={400}
      className={`${className} pointer-events-auto`}
      style={{ pointerEvents: "auto" }}
    >
      <div style={{ pointerEvents: "auto" }}>{children}</div>
    </Tilt>
  );
}
