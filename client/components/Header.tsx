import { Mail, MessageCircle } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-sidebar-background border-b border-sidebar-border sticky top-0 z-20">
      {/* Contact Info Bar */}
      <div className="bg-sidebar-primary/10 border-b border-sidebar-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors">
              <Mail size={16} />
              <a href="mailto:info@ardelis.com">info@ardelis.com</a>
            </div>
            <div className="flex items-center gap-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors">
              <MessageCircle size={16} />
              <a href="https://wa.me/1234567890">+1 (234) 567-890</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Branding */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sidebar-primary to-sidebar-accent bg-clip-text text-transparent">
              Ardelis Digital
            </h1>
            <p className="text-sidebar-foreground/60 text-sm mt-1">
              Professional Digital Services
            </p>
          </div>

          {/* Search Section */}
          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}
