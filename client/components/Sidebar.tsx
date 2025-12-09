import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Briefcase, Info, MessageSquare, User, ChevronDown, Mail } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Contact Us", path: "/contact", icon: Mail },
    { label: "About Us", path: "/#about", icon: Info },
  ];

  const serviceLinks = [
    { label: "Writing Services", path: "/services/writing" },
    { label: "Design Services", path: "/services/design" },
    { label: "Marketing Services", path: "/services/marketing" },
    { label: "IT & Development", path: "/services/development" },
  ];

  const isServiceActive = serviceLinks.some(
    (link) => location.pathname === link.path || location.pathname.startsWith(link.path)
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed md:hidden bottom-8 right-8 z-40 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-sidebar-background border-r border-sidebar-border transition-all duration-300 z-30 ${
          isOpen ? "w-64" : "w-64 max-md:translate-x-[-100%]"
        } md:translate-x-0 md:w-64 lg:w-72`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Logo Section */}
          <div className="p-6 border-b border-sidebar-border">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-lg text-sidebar-foreground hover:text-sidebar-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="bg-gradient-to-r from-sidebar-primary to-sidebar-accent bg-clip-text text-transparent">
                Ardelis
              </span>
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive(item.path)
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-border hover:text-sidebar-primary"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}

            {/* Services Submenu */}
            <div className="space-y-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isServiceActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-border hover:text-sidebar-primary"
                }`}
              >
                <Briefcase size={20} />
                <span className="font-medium flex-1 text-left">Services</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Services Links */}
              {isServicesOpen && (
                <div className="pl-4 space-y-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all text-sm ${
                        isActive(link.path)
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-border hover:text-sidebar-accent"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Footer Section - Live Chat and Profile */}
          <div className="p-4 border-t border-sidebar-border space-y-3">
            {/* Live Chat Option */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-sidebar-primary/40 to-sidebar-accent/40 text-sidebar-foreground hover:from-sidebar-primary/60 hover:to-sidebar-accent/60 transition-all font-medium">
              <MessageSquare size={20} />
              <span>Live Chat</span>
            </button>

            {/* Profile Section */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-muted text-sidebar-foreground hover:bg-muted/80 transition-all font-medium">
              <User size={20} />
              <span>My Profile</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
