'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
} from 'lucide-react';

export function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      label: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
    },
    {
      label: 'Services',
      href: '/admin/services',
      icon: FileText,
    },
    {
      label: 'Reviews',
      href: '/admin/reviews',
      icon: Star,
    },
    {
      label: 'Live Chat',
      href: '/admin/live-chat',
      icon: MessageSquare,
    },
    {
      label: 'Quote Requests',
      href: '/admin/quote-requests',
      icon: MessageSquare,
    },
    {
      label: 'Settings',
      href: '/admin/settings',
      icon: Settings,
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-white/10 flex flex-col h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/admin/dashboard" className="block">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-poppins">
            Admin
          </h2>
          <p className="text-xs text-foreground/50 mt-1">Ardelis EduWrites</p>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                active
                  ? 'bg-gradient-to-r from-indigo-600/30 to-cyan-500/30 border border-cyan-400/30 text-cyan-400'
                  : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 space-y-3">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all"
        >
          <Home size={20} />
          <span className="text-sm font-medium">Back to Site</span>
        </Link>
        <button
          onClick={() => {
            // Logout logic will be added with auth
            window.location.href = '/admin/login';
          }}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
