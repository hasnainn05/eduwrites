"use client";

import Link from "next/link";
import {
  User,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

interface ProfileSidebarProps {
  activeTab: "overview" | "orders" | "chat" | "settings";
  onTabChange: (tab: "overview" | "orders" | "chat" | "settings") => void;
  onLogout: () => void;
  userName: string;
}

export function ProfileSidebar({
  activeTab,
  onTabChange,
  onLogout,
  userName,
}: ProfileSidebarProps) {
  const navItems = [
    { id: "overview", label: "Profile", icon: User },
    { id: "orders", label: "Orders", icon: FileText },
    { id: "chat", label: "Support Chat", icon: MessageSquare },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-gradient-to-b from-slate-900/50 to-slate-900/30 border-r border-white/10 flex flex-col z-40">
      {/* Profile Info */}
      <div className="p-6 border-b border-white/10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl text-white text-xl font-bold mb-3">
            {userName.split(" ")[0][0]}
            {userName.split(" ")[1]?.[0] || ""}
          </div>
          <h3 className="text-foreground font-semibold text-sm mb-1">
            {userName}
          </h3>
          <p className="text-foreground/60 text-xs">User Account</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-3 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() =>
                onTabChange(item.id as "overview" | "orders" | "chat" | "settings")
              }
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600/30 to-cyan-500/30 text-cyan-400 border border-cyan-400/30"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/5 border border-transparent"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-3 border-t border-white/10">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm text-red-400 hover:bg-red-500/20 hover:border-red-500/30 border border-transparent"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
