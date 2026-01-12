'use client';

import { Mail, Phone, User, MessageCircle } from "lucide-react";
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
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="w-full flex items-center justify-between gap-6">
          {/* Left: Logo and Branding */}
          <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent font-poppins">
              Ardelis
            </h1>
            <p className="text-foreground/60 text-xs mt-1 font-medium">
              Academic Excellence
            </p>
          </Link>

          {/* Center: Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-sm font-medium text-foreground/80 hover:text-cyan-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right: Contact Info and Profile */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <div className="hidden sm:flex flex-col items-end gap-2 text-sm">
              <div className="flex items-center gap-2 text-foreground/80 hover:text-cyan-400 transition-colors">
                <Mail size={16} />
                <a href="mailto:info@ardelis.com" className="whitespace-nowrap font-medium">
                  info@ardelis.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 hover:text-purple-400 transition-colors">
                <Phone size={16} />
                <a href="tel:+1234567890" className="whitespace-nowrap font-medium">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Live Chat Button - click to open floating chat */}
            <button
              onClick={() => {
                // This will trigger the floating chat component
                const chatButton = document.querySelector('[title="Open Live Chat"]') as HTMLButtonElement;
                chatButton?.click();
              }}
              className="p-2.5 rounded-full glass border border-white/20 hover:border-purple-400 hover:bg-white/20 transition-all transform hover:scale-110 flex items-center justify-center hidden sm:flex"
              title="Start Chat"
            >
              <MessageCircle size={20} className="text-foreground/80" />
            </button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex gap-3">
              <Link
                href="/signup"
                className="px-4 py-2 border border-white/20 text-foreground/80 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all text-sm font-medium"
              >
                Sign Up
              </Link>
              <Link
                href="/profile"
                className="p-2.5 rounded-full glass border border-white/20 hover:border-cyan-400 hover:bg-white/20 transition-all transform hover:scale-110 flex items-center justify-center"
                title="Profile"
              >
                <User size={20} className="text-foreground/80" />
              </Link>
            </div>
          </div>

          {/* Mobile: Menu Button (visible on small screens) */}
          <div className="md:hidden">
            <details className="group">
              <summary className="cursor-pointer text-foreground/80 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <div className="absolute top-full right-0 mt-2 glass rounded-xl p-4 space-y-2 min-w-max">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="block text-sm font-medium text-foreground/80 hover:text-cyan-400 transition-colors py-2"
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
