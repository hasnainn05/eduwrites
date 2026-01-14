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
            <div className="hidden lg:flex flex-col gap-1 text-xs">
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
                  href="https://wa.me/13658291551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 whitespace-nowrap font-medium"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-green-400"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.537 0-3.038.474-4.298 1.371-.636.391-1.217.874-1.715 1.438-.505.572-.944 1.194-1.309 1.863-1.018 1.931-1.557 4.18-1.557 6.571 0 2.348.487 4.589 1.39 6.648.431.968.973 1.883 1.604 2.724-1.053 2.04-2.622 3.921-4.628 5.403.559.152 1.118.174 1.682.056 1.696-.34 3.317-1.215 4.694-2.457 1.378 1.279 3.033 2.136 4.893 2.462.522.1 1.05.12 1.582-.035 2.054-1.505 3.601-3.406 4.632-5.448.888-1.98 1.344-4.154 1.344-6.409 0-2.391-.53-4.64-1.552-6.571-.365-.669-.801-1.291-1.307-1.863-.498-.564-1.079-1.047-1.715-1.438-1.24-.876-2.702-1.371-4.269-1.371h-.004z" />
                  </svg>
                  <span>+1 365 8291551</span>
                </a>
              </div>
            </div>

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
