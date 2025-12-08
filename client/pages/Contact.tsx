import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sidebar-primary hover:text-sidebar-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="text-center py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12">
            Contact us to discuss your project and find out how we can help your
            business grow.
          </p>

          <div className="bg-card rounded-xl border-2 border-sidebar-border p-12">
            <div className="text-6xl mb-4">📧</div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact Page Coming Soon
            </h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
              We're building a comprehensive contact form and inquiry system. In
              the meantime, you can reach us through live chat support or return
              to the home page to explore our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sidebar-primary to-sidebar-accent text-sidebar-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Return Home
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-sidebar-primary text-sidebar-primary px-8 py-3 rounded-lg font-semibold hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-colors"
              >
                Live Chat Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
