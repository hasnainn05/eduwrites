"use client";

import { Mail, MessageCircle, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/#services" },
    { label: "Contact Us", path: "/contact" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-lg">
      {/* Main Header */}
      <div className="px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
        <div className="w-full flex items-center justify-between gap-3 sm:gap-4 md:gap-6">
          {/* Left: Logo and Branding */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent font-poppins">
              EduWrites
            </h1>
            <p className="text-foreground/60 text-xs mt-0.5 sm:mt-1 font-medium hidden sm:block">
              Academic Excellence
            </p>
          </Link>

          {/* Center: Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-xs lg:text-sm font-medium text-foreground/80 hover:text-cyan-400 transition-colors relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right: Contact Info and Profile */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-6 flex-shrink-0">
            <div className="hidden lg:flex flex-col items-end gap-1 text-xs">
              <div className="flex items-center gap-2 text-foreground/80 hover:text-cyan-400 transition-colors">
                <Mail size={14} />
                <a
                  href="mailto:info@eduwrites.com"
                  className="whitespace-nowrap font-medium"
                >
                  info@eduwrites.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 hover:text-green-400 transition-colors">
                <a
                  href="https://wa.me/12025550123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 whitespace-nowrap font-medium"
                >
                  <MessageCircle size={14} />
                  <span>+1 (202) 555-0123</span>
                </a>
              </div>
            </div>

            {/* Live Chat Button - click to open floating chat */}
            <button
              onClick={() => {
                const chatButton = document.querySelector(
                  '[title="Open Live Chat"]',
                ) as HTMLButtonElement;
                chatButton?.click();
              }}
              className="hidden sm:flex px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg glass border border-white/20 hover:border-cyan-400 hover:bg-white/20 hover:shadow-glow transition-all text-xs sm:text-sm font-medium text-foreground/80 items-center gap-1.5 sm:gap-2 group animate-pulse-bounce transform hover:scale-105"
              title="Start Chat"
            >
              <MessageCircle
                size={14}
                className="group-hover:text-cyan-400 transition-colors flex-shrink-0"
              />
              <span className="group-hover:text-cyan-400 transition-colors hidden md:inline">
                Live Chat
              </span>
            </button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex gap-2 sm:gap-3">
              <Link
                href="/signup"
                className="px-2.5 sm:px-4 py-1.5 sm:py-2 border border-white/20 text-foreground/80 rounded-lg hover:border-cyan-400 hover:text-cyan-400 hover:shadow-glow transition-all text-xs sm:text-sm font-medium animate-pulse-bounce transform hover:scale-105 whitespace-nowrap"
              >
                Sign Up
              </Link>
              <Link
                href="/profile"
                className="p-1.5 sm:p-2.5 rounded-full glass border border-white/20 hover:border-cyan-400 hover:bg-white/20 hover:shadow-glow transition-all transform hover:scale-110 flex items-center justify-center animate-pulse-bounce flex-shrink-0"
                title="Profile"
              >
                <User size={16} className="sm:w-5 sm:h-5 text-foreground/80" />
              </Link>
            </div>
          </div>

          {/* Mobile: Menu Button (visible on small screens) */}
          <div className="md:hidden">
            <details className="group">
              <summary className="cursor-pointer text-foreground/80 hover:text-cyan-400 transition-colors list-none flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <div className="absolute top-full right-0 mt-2 glass rounded-xl p-3 sm:p-4 space-y-2 min-w-max">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="block text-xs sm:text-sm font-medium text-foreground/80 hover:text-cyan-400 transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
