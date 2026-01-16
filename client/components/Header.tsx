import { Mail, MessageCircle, User } from "lucide-react";
import { Link } from "react-router-dom";

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
      <div className="px-6 sm:px-8 lg:px-16 py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
          {/* Left: Logo and Branding */}
          <Link
            to="/"
            className="flex-shrink-0 hover:opacity-80 transition-opacity flex items-center gap-1 sm:gap-1.5"
          >
            <div>
              <h1 className="text-xs sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent font-poppins leading-tight">
                EduWrites
              </h1>
              <p className="text-foreground/60 text-[10px] sm:text-[11px] md:text-xs mt-0 font-medium">
                Achieve Academic Excellence
              </p>
            </div>
          </Link>

          {/* Center: Navigation Menu */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[10px] lg:text-xs font-medium text-foreground/80 hover:text-cyan-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right: Contact Info and Profile */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-shrink-0">
            <div className="hidden lg:flex flex-col gap-2 text-[10px]">
              <div className="flex items-center gap-1.5 text-foreground/80 hover:text-cyan-400 transition-colors">
                <Mail size={12} />
                <a
                  href="mailto:info@eduwrites.com"
                  className="whitespace-nowrap font-medium"
                >
                  info@eduwrites.com
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-foreground/80 hover:text-green-400 transition-colors">
                <a
                  href="https://wa.me/12025550123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 whitespace-nowrap font-medium"
                >
                  <MessageCircle size={12} />
                  <span>+1 (202) 555-0123</span>
                </a>
              </div>
            </div>

            {/* Profile Icon */}
            <Link
              to="/login"
              className="p-1 sm:p-1.5 rounded-full glass border border-white/20 hover:border-cyan-400 hover:bg-white/20 transition-all transform hover:scale-110 flex items-center justify-center flex-shrink-0"
              title="Profile"
            >
              <User size={13} className="text-foreground/80" />
            </Link>
          </div>

          {/* Mobile: Menu Button (visible on small screens) */}
          <div className="md:hidden">
            <details className="group">
              <summary className="cursor-pointer text-foreground/80 hover:text-cyan-400 transition-colors list-none flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
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
              <div className="absolute top-full right-0 mt-2 glass rounded-lg p-2 space-y-1 min-w-max">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-[10px] font-medium text-foreground/80 hover:text-cyan-400 transition-colors py-1"
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
