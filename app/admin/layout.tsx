"use client";

import { ReactNode, useState } from "react";
import { AdminSidebar } from "@/client/components/AdminSidebar";
import { Menu, X } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur border-b border-white/10 p-3 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-xl sm:text-3xl font-bold text-foreground">
              Admin
            </h1>
            <p className="text-foreground/60 text-xs sm:text-sm mt-0.5">
              Manage platform
            </p>
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-sm text-foreground/60">
              {new Date().toLocaleDateString()}
            </p>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <X size={20} className="text-foreground" />
            ) : (
              <Menu size={20} className="text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1 overflow-hidden pt-20 sm:pt-24 md:pt-28">
        {/* Fixed Sidebar - Desktop */}
        <div className="fixed left-0 top-20 sm:top-24 md:top-28 bottom-0 z-30 w-64 hidden md:block bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-white/10 overflow-y-auto">
          <AdminSidebar />
        </div>

        {/* Mobile Drawer Sidebar */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-20 md:hidden">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="absolute left-0 top-20 bottom-0 w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-white/10 overflow-y-auto">
              <AdminSidebar />
            </div>
          </div>
        )}

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto md:ml-64 w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
