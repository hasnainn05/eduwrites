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
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1200}
      scale={1.08}
      transitionSpeed={300}
      trackOnWindow={true}
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor="rgba(255, 255, 255, 0.2)"
      className={`${className} pointer-events-auto`}
      style={{ pointerEvents: "auto" }}
    >
      <div style={{ pointerEvents: "auto" }}>{children}</div>
    </Tilt>
  );
}
