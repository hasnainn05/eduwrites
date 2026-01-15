"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  MessageSquare,
  Settings,
  LogOut,
  Users,
  Star,
  FileText,
  Home,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

export function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Orders",
      href: "/admin/orders",
      icon: ShoppingBag,
    },
    {
      label: "Services",
      href: "/admin/services",
      icon: FileText,
    },
    {
      label: "Reviews",
      href: "/admin/reviews",
      icon: Star,
    },
    {
      label: "Live Chat",
      href: "/admin/live-chat",
      icon: MessageSquare,
    },
    {
      label: "Support Messages",
      href: "/admin/quote-requests",
      icon: MessageSquare,
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  const isActive = (href: string) => pathname === href;

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="p-4 md:p-6 border-b border-white/10">
        <Link href="/admin/dashboard" className="flex items-center gap-2 mb-2">
          <img src="/favicon.svg" alt="EduWrites Logo" className="w-9 h-9 flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-poppins">
            Admin
          </h2>
        </Link>
        <p className="text-xs text-foreground/50 ml-11">EduWrites</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-2 md:p-4 space-y-1 md:space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all text-sm md:text-base ${
                active
                  ? "bg-gradient-to-r from-indigo-600/30 to-cyan-500/30 border border-cyan-400/30 text-cyan-400"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/5"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-2 md:p-4 border-t border-white/10 space-y-2 md:space-y-3">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all text-sm md:text-base"
        >
          <Home size={20} />
          <span className="font-medium">Back to Site</span>
        </Link>
        <button
          onClick={() => {
            window.location.href = "/admin/login";
          }}
          className="w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all text-sm md:text-base"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-20 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-gradient-to-r from-indigo-600/30 to-cyan-500/30 border border-cyan-400/30 text-cyan-400 hover:text-cyan-300 transition-all"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - Desktop */}
      <div className="hidden md:flex w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-white/10 flex-col h-screen fixed left-0 top-0">
        <SidebarContent />
      </div>

      {/* Sidebar - Mobile */}
      <div
        className={`md:hidden fixed left-0 top-0 z-40 w-56 h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-white/10 flex flex-col transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </div>
    </>
  );
}
