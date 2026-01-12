'use client';

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Github, CheckCircle } from "lucide-react";

export default function Signup() {
  const [step, setStep] = useState<"form" | "verify" | "success">("form");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [verificationCode, setVerificationCode] = useState("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to Terms & Conditions");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep("verify");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep("success");
    } catch (err) {
      setError("Verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background to-background/80 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600 to-transparent"></div>
        <div className="blur-gradient absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-transparent"></div>
      </div>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent font-poppins">
              Ardelis
            </h1>
            <p className="text-foreground/60 text-sm mt-1">Join Our Community</p>
          </Link>
        </div>

        {step === "form" && (
          <div className="glass p-8 rounded-2xl mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2 font-poppins">
              Create Your Account
            </h2>
            <p className="text-foreground/70 text-sm mb-6">
              Join thousands of students achieving academic success
            </p>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-6">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-foreground/90 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50"
                  />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground/90 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-foreground/90 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    placeholder="••••••••"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-10 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-foreground/90 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50"
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleFormChange}
                    placeholder="••••••••"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-10 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer mt-4">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleFormChange}
                  className="w-4 h-4 rounded border-white/20 bg-white/10 accent-cyan-400 mt-0.5"
                />
                <span className="text-foreground/70 text-sm">
                  I agree to the{" "}
                  <Link href="#" className="text-cyan-400 hover:text-cyan-300">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-cyan-400 hover:text-cyan-300">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-glow transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-b from-background to-background/80 text-foreground/50">
                  Or sign up with
                </span>
              </div>
            </div>

            {/* Social Signup */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="border border-white/20 bg-white/5 hover:bg-white/10 rounded-lg py-2.5 font-medium text-foreground transition-all flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">Google</span>
              </button>
              <button
                type="button"
                className="border border-white/20 bg-white/5 hover:bg-white/10 rounded-lg py-2.5 font-medium text-foreground transition-all flex items-center justify-center gap-2"
              >
                <Github size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-foreground/70 text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        )}

        {step === "verify" && (
          <div className="glass p-8 rounded-2xl mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2 font-poppins">
              Verify Your Email
            </h2>
            <p className="text-foreground/70 text-sm mb-6">
              We've sent a verification code to {formData.email}
            </p>

            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground/90 mb-2">
                  Verification Code
                </label>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="000000"
                  maxLength={6}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-center text-2xl tracking-widest text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-glow transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify Email <ArrowRight size={18} />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setStep("form")}
                className="w-full border-2 border-white/20 text-foreground py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Back
              </button>
            </form>
          </div>
        )}

        {step === "success" && (
          <div className="glass p-8 rounded-2xl mb-6 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle size={32} className="text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-2 font-poppins">
              Welcome to Ardelis!
            </h2>
            <p className="text-foreground/70 text-sm mb-8">
              Your account has been successfully created. You can now place orders and access all our services.
            </p>

            <Link
              href="/login"
              className="w-full gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-glow transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Go to Login <ArrowRight size={18} />
            </Link>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="text-foreground/60 hover:text-foreground text-sm transition-colors inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
