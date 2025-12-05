import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function DesignServices() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="text-center py-16">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
              🎨 Graphics & Design Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Graphics & Design Services
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12">
            Creative design solutions including logo design, poster & flyer
            design, t-shirt design, and app & website UI/UX design.
          </p>

          <div className="bg-white rounded-xl border-2 border-border p-12">
            <div className="text-6xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
              Our Graphics & Design Services page is being crafted with amazing
              design content. In the meantime, feel free to explore our other
              services or contact us directly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Return Home
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Chat with Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
