"use client";

import { useState, useRef } from "react";
import { Mail, MessageCircle, User, ChevronDown } from "lucide-react";
import Link from "next/link";
import { services, fieldsOfStudy, languages } from "@/lib/headerData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const navItems = [
    { label: "Home", path: "/" },
  ];

  const footerNavItems = [
    { label: "Contact Us", path: "/contact" },
    { label: "About Us", path: "/about" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-lg">
      {/* Main Header */}
      <div className="px-8 sm:px-12 lg:px-20 py-2 sm:py-2.5">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-1 sm:gap-2 md:gap-3">
          {/* Left: Logo and Branding */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-80 transition-opacity flex items-center gap-2 sm:gap-2.5 md:gap-3"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F360dd9d64b604bb58688c9e51710ce3e%2F118b262353ba4908905314ab922751d3?format=webp&width=800"
              alt="EduWrites Logo"
              className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-[11px] sm:text-sm md:text-base lg:text-lg font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent font-poppins leading-tight whitespace-nowrap">
                EduWrites
              </h1>
              <p className="text-foreground/60 text-[8px] sm:text-[9px] md:text-[10px] mt-0 font-medium whitespace-nowrap">
                Achieve Excellence
              </p>
            </div>
          </Link>

          {/* Center: Navigation Menu */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-[10px] lg:text-[11px] font-medium text-foreground/80 hover:text-cyan-400 transition-colors relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-[10px] lg:text-[11px] font-medium text-foreground/80 hover:text-cyan-400 transition-colors relative whitespace-nowrap flex items-center gap-1 py-2">
                Services
                <ChevronDown size={12} className="transform group-hover:rotate-180 transition-transform" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="absolute left-0 mt-0 w-max bg-black/95 backdrop-blur-md border border-white/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 shadow-glow">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-[9px] lg:text-[10px] text-foreground/80 hover:text-cyan-400 hover:bg-white/10 transition-colors whitespace-nowrap"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Fields of Study Dropdown */}
            <div className="relative group">
              <button className="text-[10px] lg:text-[11px] font-medium text-foreground/80 hover:text-cyan-400 transition-colors relative whitespace-nowrap flex items-center gap-1 py-2">
                Fields of Study
                <ChevronDown size={12} className="transform group-hover:rotate-180 transition-transform" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="absolute left-0 mt-0 w-max bg-black/95 backdrop-blur-md border border-white/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 shadow-glow max-w-xs">
                {fieldsOfStudy.map((field, idx) => (
                  <button
                    key={idx}
                    className="block w-full text-left px-4 py-2 text-[9px] lg:text-[10px] text-foreground/80 hover:text-cyan-400 hover:bg-white/10 transition-colors whitespace-nowrap"
                  >
                    <span className="mr-2">{field.icon}</span>
                    {field.category}
                  </button>
                ))}
              </div>
            </div>

            {/* Languages Dropdown */}
            <div className="relative group">
              <button className="text-[10px] lg:text-[11px] font-medium text-foreground/80 hover:text-cyan-400 transition-colors relative whitespace-nowrap flex items-center gap-1 py-2">
                Languages
                <ChevronDown size={12} className="transform group-hover:rotate-180 transition-transform" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="absolute left-0 mt-0 w-max bg-black/95 backdrop-blur-md border border-white/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 shadow-glow">
                {languages.map((language, idx) => (
                  <button
                    key={idx}
                    className="block w-full text-left px-4 py-2 text-[9px] lg:text-[10px] text-foreground/80 hover:text-cyan-400 hover:bg-white/10 transition-colors whitespace-nowrap"
                  >
                    <span className="mr-2">{language.flag}</span>
                    {language.lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Navigation Items */}
            {footerNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-[10px] lg:text-[11px] font-medium text-foreground/80 hover:text-cyan-400 transition-colors relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right: Contact Info and Profile */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
            <div className="hidden lg:flex flex-col gap-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-foreground/80 hover:text-cyan-400 transition-colors">
                <Mail size={14} />
                <a
                  href="mailto:info@eduwrites.com"
                  className="whitespace-nowrap font-medium"
                >
                  info@eduwrites.com
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-foreground/80 hover:text-green-400 transition-colors">
                <a
                  href="https://wa.me/13658291551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 whitespace-nowrap font-medium"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-green-500"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.197 1.613 6.033L0 24l6.266-1.997C8.203 23.462 10.064 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.96c-1.878 0-3.721-.471-5.385-1.372l-.386-.207-4.002 1.276 1.3-3.975-.248-.395C2.604 16.064 2.04 14.059 2.04 12c0-5.517 4.486-10 10-10s10 4.483 10 10-4.486 10-10 10z" />
                    <path
                      fill="white"
                      d="M17.415 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
                    />
                  </svg>
                  <span>+1 365 8291551</span>
                </a>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden sm:flex gap-1.5 items-center">
              <Link
                href="/login"
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 border border-cyan-400/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-foreground/80 rounded-none hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/20 hover:shadow-glow transition-all text-[9px] sm:text-[10px] font-medium animate-pulse-bounce transform hover:scale-105 whitespace-nowrap flex items-center gap-1.5"
              >
                <span>Login</span>
                <User size={11} className="text-foreground/80" />
              </Link>
              <Link
                href="/profile"
                className="p-0.5 sm:p-1 rounded-none glass border border-white/20 hover:border-cyan-400 hover:bg-white/20 hover:shadow-glow transition-all transform hover:scale-110 flex items-center justify-center animate-pulse-bounce flex-shrink-0"
                title="Profile"
              >
                <User size={12} className="text-foreground/80" />
              </Link>
            </div>
          </div>

          {/* Mobile: Menu Button + Login (visible on small screens) */}
          <div className="md:hidden flex items-center gap-1">
            {/* Mobile Login Button */}
            <Link
              href="/login"
              className="px-1.5 py-0.5 border border-cyan-400/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-foreground/80 rounded-none hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/20 hover:shadow-glow transition-all text-[8px] font-medium flex items-center gap-0.5 flex-shrink-0"
            >
              <span>Login</span>
              <User size={10} className="text-foreground/80" />
            </Link>
            {/* Mobile Profile Icon */}
            <Link
              href="/profile"
              className="p-0.5 rounded-none glass border border-white/20 hover:border-cyan-400 hover:bg-white/20 hover:shadow-glow transition-all flex items-center justify-center flex-shrink-0"
              title="Profile"
            >
              <User size={11} className="text-foreground/80" />
            </Link>

            <details
              className="group"
              ref={detailsRef}
              onToggle={(e) => setMenuOpen(e.currentTarget.open)}
            >
              <summary className="cursor-pointer text-foreground/80 hover:text-cyan-400 transition-colors list-none flex-shrink-0">
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
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
              <div className="absolute top-full right-0 mt-1.5 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg p-1.5 space-y-0.5 min-w-max z-50 max-h-96 overflow-y-auto">
                {/* Navigation Links */}
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMenu}
                    className="block text-[9px] font-medium text-white/90 hover:text-cyan-400 transition-colors py-0.5 px-1"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Divider */}
                <div className="border-t border-white/20 my-0.5"></div>

                {/* Mobile Services Dropdown */}
                <details className="group">
                  <summary className="cursor-pointer block text-[9px] font-medium text-white/90 hover:text-cyan-400 transition-colors py-0.5 px-1 list-none">
                    Services
                  </summary>
                  <div className="pl-3 space-y-0.5 mt-0.5">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        onClick={closeMenu}
                        className="block text-[8px] font-medium text-white/80 hover:text-cyan-400 transition-colors py-0.5 px-1"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </details>

                {/* Mobile Fields of Study Dropdown */}
                <details className="group">
                  <summary className="cursor-pointer block text-[9px] font-medium text-white/90 hover:text-cyan-400 transition-colors py-0.5 px-1 list-none">
                    Fields of Study
                  </summary>
                  <div className="pl-3 space-y-0.5 mt-0.5">
                    {fieldsOfStudy.map((field, idx) => (
                      <button
                        key={idx}
                        className="block w-full text-left text-[8px] font-medium text-white/80 hover:text-cyan-400 transition-colors py-0.5 px-1"
                      >
                        <span className="mr-1">{field.icon}</span>
                        {field.category}
                      </button>
                    ))}
                  </div>
                </details>

                {/* Mobile Languages Dropdown */}
                <details className="group">
                  <summary className="cursor-pointer block text-[9px] font-medium text-white/90 hover:text-cyan-400 transition-colors py-0.5 px-1 list-none">
                    Languages
                  </summary>
                  <div className="pl-3 space-y-0.5 mt-0.5">
                    {languages.map((language, idx) => (
                      <button
                        key={idx}
                        className="block w-full text-left text-[8px] font-medium text-white/80 hover:text-cyan-400 transition-colors py-0.5 px-1"
                      >
                        <span className="mr-1">{language.flag}</span>
                        {language.lang}
                      </button>
                    ))}
                  </div>
                </details>

                {/* Mobile Footer Navigation Items */}
                {footerNavItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMenu}
                    className="block text-[9px] font-medium text-white/90 hover:text-cyan-400 transition-colors py-0.5 px-1"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Divider */}
                <div className="border-t border-white/20 my-0.5"></div>

                {/* Sign Up Button for Mobile */}
                <Link
                  href="/signup"
                  onClick={closeMenu}
                  className="block w-full text-center px-1.5 py-0.5 border border-white/30 text-white/90 rounded-md hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all text-[9px] font-medium whitespace-nowrap"
                >
                  Sign Up
                </Link>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
