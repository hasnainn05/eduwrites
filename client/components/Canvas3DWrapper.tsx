"use client";

import { usePathname } from "next/navigation";

export function Canvas3DWrapper() {
  const pathname = usePathname();

  // Show gradient background on all pages except login and signup
  const showBackground =
    !pathname.includes("/login") && !pathname.includes("/signup");

  if (!showBackground) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none h-screen">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background"></div>

      {/* Gradient Blobs */}
      <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-transparent rounded-full"></div>
      <div className="blur-gradient absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full animation-delay-2000"></div>
      <div className="blur-gradient absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-violet-600/30 to-transparent rounded-full animation-delay-4000"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </div>
  );
}
