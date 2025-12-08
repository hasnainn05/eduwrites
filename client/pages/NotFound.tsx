import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-sidebar-background to-sidebar-background/80">
      <div className="text-center px-4">
        <div className="text-6xl font-bold bg-gradient-to-r from-sidebar-primary to-sidebar-accent bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-foreground/70 mb-8 max-w-md">
          Oops! It seems like the page you're looking for doesn't exist. Please
          check the URL and try again.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sidebar-primary to-sidebar-accent text-sidebar-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
