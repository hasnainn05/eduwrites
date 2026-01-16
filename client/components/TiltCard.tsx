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
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      perspective={1000}
      scale={1.06}
      speed={400}
      transitionSpeed={400}
      glareEnable={true}
      glareMaxOpacity={0.25}
      style={{
        transformStyle: "preserve-3d",
        height: "100%",
      }}
    >
      <div
        className={className}
        style={{
          transformStyle: "preserve-3d",
          height: "100%",
        }}
      >
        {children}
      </div>
    </Tilt>
  );
}
