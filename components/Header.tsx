"use client";

import { useState, useRef } from "react";
import { Mail, MessageCircle, User, ChevronDown } from "lucide-react";
import Link from "next/link";
import { services, fieldsOfStudy, languages } from "@/lib/headerData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const navItems = [{ label: "Home", path: "/" }];

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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      {/* Main Header */}
      <div className="px-8 sm:px-12 lg:px-20 py-3 sm:py-3.5">
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
              <h1 className="text-[11px] sm:text-sm md:text-base lg:text-lg font-bold text-primary font-poppins leading-tight whitespace-nowrap">
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
                className="text-[10px] lg:text-[11px] font-medium text-foreground hover:text-primary transition-colors relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-[10px] lg:text-[11px] font-medium text-foreground hover:text-primary transition-colors relative whitespace-nowrap flex items-center gap-1 py-2">
                Services
                <ChevronDown
                  size={12}
                  className="transform group-hover:rotate-180 transition-transform"
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="absolute left-0 mt-0 w-max bg-white border border-border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 shadow-lg">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-[9px] lg:text-[10px] text-foreground hover:text-primary hover:bg-primary/5 transition-colors whitespace-nowrap"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Fields of Study Dropdown */}
            <div className="relative group">
              <button className="text-[10px] lg:text-[11px] font-medium text-foreground hover:text-primary transition-colors relative whitespace-nowrap flex items-center gap-1 py-2">
                Fields of Study
                <ChevronDown
                  size={12}
                  className="transform group-hover:rotate-180 transition-transform"
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="absolute left-0 mt-0 w-max bg-white border border-border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 shadow-lg max-w-xs">
                {fieldsOfStudy.map((field, idx) => (
                  <div
                    key={idx}
                    className="block w-full text-left px-4 py-2 text-[9px] lg:text-[10px] text-foreground whitespace-nowrap hover:text-primary hover:bg-primary/5"
                  >
                    <span className="mr-2">{field.icon}</span>
                    {field.category}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Dropdown */}
            <div className="relative group">
              <button className="text-[10px] lg:text-[11px] font-medium text-foreground hover:text-primary transition-colors relative whitespace-nowrap flex items-center gap-1 py-2">
                Languages
                <ChevronDown
                  size={12}
                  className="transform group-hover:rotate-180 transition-transform"
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="absolute left-0 mt-0 w-max bg-white border border-border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 shadow-lg">
                {languages.map((language, idx) => (
                  <div
                    key={idx}
                    className="block w-full text-left px-4 py-2 text-[9px] lg:text-[10px] text-foreground whitespace-nowrap hover:text-primary hover:bg-primary/5"
                  >
                    <span className="mr-2">{language.flag}</span>
                    {language.lang}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Navigation Items */}
            {footerNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-[10px] lg:text-[11px] font-medium text-foreground hover:text-primary transition-colors relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right: Contact Info and Profile */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
            <div className="hidden lg:flex flex-col gap-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-foreground/80 hover:text-primary transition-colors">
                <Mail size={14} />
                <a
                  href="mailto:info@eduwrites.com"
                  className="whitespace-nowrap font-medium"
                >
                  info@eduwrites.com
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <a
                  href="https://wa.me/13658291551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 whitespace-nowrap font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6915026,2.70220353 C15.6109264,0.601923981 12.8274885,-0.0151496222 10.0359931,0.474631765 C4.35075962,1.50643169 0.158778711,6.68682624 0.158778711,12.6347504 C0.158778711,14.9771989 0.829335265,17.2773751 2.09956832,19.2693085 L0.458915206,23.6584027 C-0.141274676,25.1393625 1.15238622,26.4330794 2.68349182,25.8270539 L7.12382899,24.1004129 C9.13890577,25.3505459 11.5274967,26.1122514 14.0316624,26.1122514 C19.7179763,26.1122514 24.4812229,22.0693725 25.4235604,16.5625909 C26.4613934,10.5218855 25.2839841,4.74742839 17.6915026,2.70220353 Z"
                      fill="#25D366"
                    />
                    <path
                      d="M8.84216312,5.82010152 C8.62526703,5.82010152 8.41397762,5.82010152 8.19705843,5.82010152 C6.64833154,5.82010152 5.22346281,6.62808671 4.33809519,7.99369285 C3.45361823,9.36016622 3.70913232,11.2139196 4.72928129,13.1069234 C5.7481832,15.0009778 7.59932033,17.2773751 10.6795903,19.0931408 C12.0472831,19.9006857 13.3816464,20.5163835 14.6147634,20.9302718 L14.6155869,20.9310203 C16.5919069,21.5884127 18.7225566,21.0605427 20.0913141,19.6919274 C20.7048055,19.0793276 21.2970764,18.2954916 21.2970764,17.3626206 C21.2970764,15.954179 20.3098416,14.8356208 19.089281,14.4693607 C18.7268197,14.3593108 18.3682916,14.2513001 18.0121451,14.1453288 L18.0113215,14.1445803 C17.0609779,13.8533848 16.0854108,13.5496844 15.3596726,14.2715584 C14.9206394,14.7076656 14.3297868,15.1384128 13.8899232,15.5751857 C13.5169003,15.9451739 12.981969,16.0593856 12.5391624,15.9010932 C11.0506155,15.3667019 9.04843817,13.8996074 8.05476124,12.2139196 C7.67159877,11.5982217 7.6486357,11.0686289 7.99265202,10.6878022 C8.48384544,10.1495752 9.04843817,9.52387237 9.46734066,9.07992648 C10.3476486,8.19325977 10.2839873,6.86031046 9.29115197,6.05075635 C8.89652934,5.77226871 8.87360628,5.82010152 8.84216312,5.82010152 Z"
                      fill="white"
                    />
                  </svg>
                  <span>+1 365 8291551</span>
                </a>
              </div>
            </div>

            {/* Auth Buttons and WhatsApp */}
            <div className="hidden sm:flex gap-1.5 items-center">
              <Link
                href="/login"
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all text-[9px] sm:text-[10px] font-medium hover:scale-105 whitespace-nowrap flex items-center gap-1.5"
              >
                <span>Login</span>
                <User size={11} />
              </Link>
              <Link
                href="/profile"
                className="p-1.5 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all hover:scale-105 flex-shrink-0"
                title="User Profile"
              >
                <User size={16} />
              </Link>
            </div>
          </div>

          {/* Mobile: Menu Button + Login (visible on small screens) */}
          <div className="md:hidden flex items-center gap-1">
            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/13658291551"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-[#25D366] text-white rounded-md hover:bg-[#20BA5B] transition-all flex-shrink-0"
              title="Chat on WhatsApp"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.197 1.613 6.033L0 24l6.266-1.997C8.203 23.462 10.064 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.96c-1.878 0-3.721-.471-5.385-1.372l-.386-.207-4.002 1.276 1.3-3.975-.248-.395C2.604 16.064 2.04 14.059 2.04 12c0-5.517 4.486-10 10-10s10 4.483 10 10-4.486 10-10 10z" />
                <path
                  fill="white"
                  d="M17.415 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
                />
              </svg>
            </a>

            {/* Mobile Login Button */}
            <Link
              href="/login"
              className="px-1.5 py-0.5 border-2 border-primary text-primary rounded-md hover:bg-primary/5 transition-all text-[8px] font-medium flex items-center gap-0.5 flex-shrink-0"
            >
              <span>Login</span>
              <User size={10} />
            </Link>

            <details
              className="group"
              ref={detailsRef}
              onToggle={(e) => setMenuOpen(e.currentTarget.open)}
            >
              <summary className="cursor-pointer text-foreground hover:text-primary transition-colors list-none flex-shrink-0">
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
              <div className="absolute top-full right-0 mt-1.5 bg-white border border-border rounded-lg p-1.5 space-y-0.5 min-w-max z-50 max-h-96 overflow-y-auto shadow-lg">
                {/* Navigation Links */}
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMenu}
                    className="block text-[9px] font-medium text-foreground hover:text-primary transition-colors py-0.5 px-1"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Divider */}
                <div className="border-t border-border my-0.5"></div>

                {/* Mobile Services Dropdown */}
                <details className="group">
                  <summary className="cursor-pointer block text-[9px] font-medium text-foreground hover:text-primary transition-colors py-0.5 px-1 list-none">
                    Services
                  </summary>
                  <div className="pl-3 space-y-0.5 mt-0.5">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        onClick={closeMenu}
                        className="block text-[8px] font-medium text-foreground hover:text-primary transition-colors py-0.5 px-1"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </details>

                {/* Mobile Fields of Study Dropdown */}
                <details className="group">
                  <summary className="cursor-pointer block text-[9px] font-medium text-foreground hover:text-primary transition-colors py-0.5 px-1 list-none">
                    Fields of Study
                  </summary>
                  <div className="pl-3 space-y-0.5 mt-0.5">
                    {fieldsOfStudy.map((field, idx) => (
                      <div
                        key={idx}
                        className="block w-full text-left text-[8px] font-medium text-foreground py-0.5 px-1"
                      >
                        <span className="mr-1">{field.icon}</span>
                        {field.category}
                      </div>
                    ))}
                  </div>
                </details>

                {/* Mobile Languages Dropdown */}
                <details className="group">
                  <summary className="cursor-pointer block text-[9px] font-medium text-foreground hover:text-primary transition-colors py-0.5 px-1 list-none">
                    Languages
                  </summary>
                  <div className="pl-3 space-y-0.5 mt-0.5">
                    {languages.map((language, idx) => (
                      <div
                        key={idx}
                        className="block w-full text-left text-[8px] font-medium text-foreground py-0.5 px-1"
                      >
                        <span className="mr-1">{language.flag}</span>
                        {language.lang}
                      </div>
                    ))}
                  </div>
                </details>

                {/* Mobile Footer Navigation Items */}
                {footerNavItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMenu}
                    className="block text-[9px] font-medium text-foreground hover:text-primary transition-colors py-0.5 px-1"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Divider */}
                <div className="border-t border-border my-0.5"></div>

                {/* Profile Icon for Mobile */}
                <Link
                  href="/profile"
                  onClick={closeMenu}
                  className="block w-full text-center px-1.5 py-0.5 border-2 border-primary text-primary rounded-md hover:bg-primary/5 transition-all text-[9px] font-medium flex items-center justify-center gap-1"
                  title="User Profile"
                >
                  <User size={14} />
                  <span>Profile</span>
                </Link>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
