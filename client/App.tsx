import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-1">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Index />
                </Layout>
              }
            />
            <Route
              path="/services/writing"
              element={
                <Layout>
                  <WritingServices />
                </Layout>
              }
            />
            <Route
              path="/services/writing/:slug"
              element={
                <Layout>
                  <ServiceDetail />
                </Layout>
              }
            />
            <Route
              path="/services/design"
              element={
                <Layout>
                  <DesignServices />
                </Layout>
              }
            />
            <Route
              path="/services/design/:slug"
              element={
                <Layout>
                  <ServiceDetail />
                </Layout>
              }
            />
            <Route
              path="/services/marketing"
              element={
                <Layout>
                  <MarketingServices />
                </Layout>
              }
            />
            <Route
              path="/services/marketing/:slug"
              element={
                <Layout>
                  <ServiceDetail />
                </Layout>
              }
            />
            <Route
              path="/services/development"
              element={
                <Layout>
                  <DevelopmentServices />
                </Layout>
              }
            />
            <Route
              path="/services/development/:slug"
              element={
                <Layout>
                  <ServiceDetail />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route
              path="*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
