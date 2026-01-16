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
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      scale={1.1}
      transitionSpeed={400}
      glareEnable={true}
      glareMaxOpacity={0.3}
      className={`${className}`}
    >
      {children}
    </Tilt>
  );
}
