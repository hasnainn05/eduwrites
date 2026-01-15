"use client";

import { ReactNode } from "react";
import { AdminSidebar } from "@/client/components/AdminSidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur border-b border-white/10 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Admin Panel
            </h1>
            <p className="text-foreground/60 text-sm mt-1">
              Manage your platform
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-foreground/60">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1 overflow-hidden pt-24 md:pt-28">
        {/* Fixed Sidebar */}
        <div className="fixed left-0 top-24 md:top-28 bottom-0 z-30 w-64 hidden md:block bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-white/10 overflow-y-auto">
          <AdminSidebar />
        </div>

        {/* Mobile Sidebar */}
        <div className="md:hidden">
          <AdminSidebar />
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto md:ml-64">
          {children}
        </div>
      </div>
    </div>
  );
}
