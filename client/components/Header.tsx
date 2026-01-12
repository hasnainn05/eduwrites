import { Mail, Phone } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-lg">
      {/* Main Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="w-full flex items-center justify-between gap-6">
          {/* Left: Logo and Branding */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent font-poppins">
              Ardelis
            </h1>
            <p className="text-foreground/60 text-xs mt-1 font-medium">
              Academic Excellence
            </p>
          </div>

          {/* Center: Search Section */}
          <div className="flex-1 flex justify-center px-4">
            <SearchBar />
          </div>

          {/* Right: Contact Info (Stacked Vertically) */}
          <div className="flex flex-col items-end gap-2 text-sm flex-shrink-0">
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
        </div>
      </div>
    </header>
  );
}
