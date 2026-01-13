'use client';

import { usePathname } from 'next/navigation';
import { Canvas3D } from './Canvas3D';

export function Canvas3DWrapper() {
  const pathname = usePathname();

  // Show 3D canvas on all pages except login and signup
  const showCanvas = !pathname.includes('/login') && !pathname.includes('/signup');

  if (!showCanvas) return null;

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none h-screen">
      <Canvas3D />
    </div>
  );
}
