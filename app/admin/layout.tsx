"use client";

import { Canvas3DWrapper } from "@/client/components/Canvas3DWrapper";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen admin-layout">
      <Canvas3DWrapper />
      {children}
    </div>
  );
}
