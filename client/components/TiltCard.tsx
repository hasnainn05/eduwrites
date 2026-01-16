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
      scale={1.08}
      speed={600}
      glareEnable={true}
      glareMaxOpacity={0.25}
      glarePosition="bottom"
    >
      <div className={className}>{children}</div>
    </Tilt>
  );
}
