"use client";

import { useState } from "react";
import { X, Send, MessageCircle, User, Mail, FileText } from "lucide-react";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground font-poppins">
                Contact Support
              </h2>
              <p className="text-sm text-foreground/70">
                Get help from our support team
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-foreground/80">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground/90 mb-2 flex items-center gap-2">
                  <User size={16} />
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/90 mb-2 flex items-center gap-2">
                  <Mail size={16} />
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground/90 mb-2 flex items-center gap-2">
                <MessageCircle size={16} />
                WhatsApp Number{" "}
                <span className="text-foreground/50">(Optional)</span>
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground/90 mb-2 flex items-center gap-2">
                <FileText size={16} />
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground/90 mb-2 flex items-center gap-2">
                <MessageCircle size={16} />
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Please describe your inquiry or issue..."
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full gradient-primary text-white py-4 rounded-xl font-bold hover:shadow-glow transition-all transform hover:scale-105 duration-300 flex items-center justify-center gap-2 animate-pulse-bounce"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
