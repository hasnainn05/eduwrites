import { Link } from "react-router-dom";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const regularLinks = [
    { label: "Home", path: "/" },
    { label: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { label: "Writing Services", path: "/services/writing" },
    { label: "Design Services", path: "/services/design" },
    { label: "Marketing Services", path: "/services/marketing" },
    { label: "IT & Development", path: "/services/development" },
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ardelis Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {regularLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                Services
                <ChevronDown size={18} />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
              <MessageCircle size={20} />
              Chat
            </button>
            <Link
              to="/login"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              to="/"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {regularLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Services Submenu */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full text-left font-medium text-foreground flex items-center justify-between hover:text-primary transition-colors"
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="space-y-1 pl-2 mt-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-2 py-1 text-sm text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors"
                        onClick={() => {
                          setIsMobileOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button className="w-full text-left block px-3 py-2 text-foreground hover:bg-muted rounded-md transition-colors flex items-center gap-2">
                <MessageCircle size={20} />
                Chat
              </button>
              <Link
                to="/login"
                className="block px-3 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/"
                className="block px-3 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-md font-medium"
                onClick={() => setIsMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
