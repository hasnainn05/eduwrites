import { Mail, Phone } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-sidebar-background border-b border-sidebar-border sticky top-0 z-20 w-full">
      {/* Main Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="w-full flex items-center justify-between gap-6">
          {/* Left: Logo and Branding */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sidebar-primary to-sidebar-accent bg-clip-text text-transparent">
              Ardelis Academic
            </h1>
            <p className="text-sidebar-foreground/60 text-xs mt-0.5">
              Academic Writing Services
            </p>
          </div>

          {/* Center: Search Section */}
          <div className="flex-1 flex justify-center px-4">
            <SearchBar />
          </div>

          {/* Right: Contact Info (Stacked Vertically) */}
          <div className="flex flex-col items-end gap-1 text-sm flex-shrink-0">
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
