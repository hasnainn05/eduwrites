import { Mail, Phone, Menu } from "lucide-react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-sidebar-background border-b border-sidebar-border sticky top-0 z-20 w-full">
      {/* Main Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="w-full flex items-center justify-between gap-4 sm:gap-6">
          {/* Left: Menu Toggle and Logo */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <button
              onClick={onMenuToggle}
              className="md:hidden text-sidebar-primary hover:text-sidebar-accent transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sidebar-primary to-sidebar-accent bg-clip-text text-transparent">
                Ardelis Academic
              </h1>
              <p className="text-sidebar-foreground/60 text-xs mt-0.5">
                Academic Writing Services
              </p>
            </div>
          </div>

          {/* Center: Search Section (Hidden on mobile) */}
          <div className="hidden sm:flex flex-1 justify-center px-4">
            <SearchBar />
          </div>

          {/* Right: Contact Info (Stacked Vertically) */}
          <div className="hidden sm:flex flex-col items-end gap-1 text-sm flex-shrink-0">
            <div className="flex items-center gap-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors">
              <Mail size={16} />
              <a href="mailto:info@ardelis.com" className="whitespace-nowrap">info@ardelis.com</a>
            </div>
            <div className="flex items-center gap-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors">
              <Phone size={16} />
              <a href="tel:+1234567890" className="whitespace-nowrap">+1 (234) 567-890</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
