import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="text-center py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Login
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12">
            Sign in to your account to manage your projects and orders.
          </p>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border-2 border-border p-12 max-w-md mx-auto">
            <div className="text-6xl mb-4">🔐</div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Login Page Coming Soon
            </h2>
            <p className="text-foreground/70 mb-8">
              We're building a comprehensive authentication system with email,
              Google, and Apple login options. Please check back soon!
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
