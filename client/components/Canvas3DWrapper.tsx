'use client';

import { usePathname } from 'next/navigation';
import { Canvas3D } from './Canvas3D';
import { Canvas3DMinimal } from './Canvas3DMinimal';

export function Canvas3DWrapper() {
  const pathname = usePathname();

  // Show 3D canvas on all pages except login and signup
  const showCanvas = !pathname.includes('/login') && !pathname.includes('/signup');

  if (!showCanvas) return null;

  // Use minimal elegant blur canvas on About page, regular canvas elsewhere
  const isAboutPage = pathname.includes('/about');

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none h-screen">
      {isAboutPage ? <Canvas3DMinimal /> : <Canvas3D />}
    </div>
  );
}
