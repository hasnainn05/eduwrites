"use client";

import { useState } from "react";
import { ArrowRight, Upload, X } from "lucide-react";
import { saveOrder, generateOrderId } from "@/lib/orderStorage";
import type { Order } from "@/app/admin/orders/page";

interface OrderFormProps {
  preSelectedService?: string;
  onSuccess?: () => void;
}

export default function OrderForm({
  preSelectedService,
  onSuccess,
}: OrderFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    serviceType: preSelectedService || "essay",
    wordCount: "",
    deadline: "",
    budget: "",
    academicLevel: "undergraduate",
    assignmentDetails: "",
    attachments: null as File | null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const serviceTypes = [
    { value: "essay", label: "Essay Writing" },
    { value: "assignment", label: "Assignment Writing" },
    { value: "research", label: "Research Paper" },
    { value: "thesis", label: "Thesis & Dissertation" },
    { value: "proofreading", label: "Proofreading & Editing" },
    { value: "dissertation", label: "Dissertation Writing" },
  ];

  const academicLevels = [
    { value: "high-school", label: "High School" },
    { value: "undergraduate", label: "Undergraduate" },
    { value: "masters", label: "Master's Level" },
    { value: "phd", label: "PhD Level" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    if (name === "attachments") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData((prev) => ({ ...prev, attachments: file }));
      setFileName(file ? file.name : "");
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Order submitted:", formData);

    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        serviceType: preSelectedService || "essay",
        wordCount: "",
        deadline: "",
        budget: "",
        academicLevel: "undergraduate",
        assignmentDetails: "",
        attachments: null,
      });
      setFileName("");
      setIsSubmitted(false);
      onSuccess?.();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="glass p-12 rounded-2xl text-center">
        <div className="text-6xl mb-6">✓</div>
        <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
          Order Submitted Successfully!
        </h2>
        <p className="text-foreground/80 mb-6">
          Thank you for your order! We've received your request and will contact
          you shortly to confirm the details.
        </p>
        <div className="bg-white/10 rounded-lg p-4 text-left">
          <p className="text-sm text-foreground/70 mb-2">
            <span className="font-semibold">Order ID:</span>{" "}
            {Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <p className="text-sm text-foreground/70">
            <span className="font-semibold">Email:</span> {formData.email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information Section */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 font-poppins">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-foreground/90 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground/90 mb-2">
              Email Address *
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

          {/* WhatsApp Number */}
          <div>
            <label className="block text-sm font-medium text-foreground/90 mb-2">
              WhatsApp Number (Optional)
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Academic Level */}
          <div>
            <label className="block text-sm font-medium text-foreground/90 mb-2">
              Academic Level *
            </label>
            <select
              name="academicLevel"
              value={formData.academicLevel}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-400 transition-colors"
            >
              {academicLevels.map((level) => (
                <option
                  key={level.value}
                  value={level.value}
                  className="bg-slate-900"
                >
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <div className="border-t border-white/10 pt-6">
        <h2 className="text-2xl font-bold text-foreground mb-6 font-poppins">
          Service Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium text-foreground/90 mb-2">
              Service Type *
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-400 transition-colors"
            >
              {serviceTypes.map((service) => (
                <option
                  key={service.value}
                  value={service.value}
                  className="bg-slate-900"
                >
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          {/* Word Count */}
          <div>
            <label className="block text-sm font-medium text-foreground/90 mb-2">
              Word Count *
            </label>
            <input
              type="number"
              name="wordCount"
              value={formData.wordCount}
              onChange={handleChange}
              required
              placeholder="e.g., 5000"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm font-medium text-foreground/90 mb-2">
              Deadline *
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-foreground/90 mb-2">
              Budget ($) *
            </label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              placeholder="e.g., 100"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Assignment Details Section */}
      <div className="border-t border-white/10 pt-6">
        <h2 className="text-2xl font-bold text-foreground mb-6 font-poppins">
          Assignment Details
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground/90 mb-2">
              Assignment Details & Requirements *
            </label>
            <textarea
              name="assignmentDetails"
              value={formData.assignmentDetails}
              onChange={handleChange}
              required
              placeholder="Describe your assignment, requirements, guidelines, and any specific instructions..."
              rows={6}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-foreground/90 mb-2">
              Upload Files (Optional)
            </label>
            <div className="relative">
              <input
                type="file"
                name="attachments"
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="w-full bg-white/10 border-2 border-dashed border-white/20 rounded-lg px-4 py-6 text-center hover:border-cyan-400 transition-colors cursor-pointer">
                <Upload size={24} className="mx-auto mb-2 text-cyan-400" />
                <p className="text-sm font-medium text-foreground mb-1">
                  {fileName || "Click to upload or drag and drop"}
                </p>
                <p className="text-xs text-foreground/60">
                  PDF, DOC, DOCX, or TXT (Max 10MB)
                </p>
              </div>
            </div>
            {fileName && (
              <div className="mt-2 flex items-center gap-2 bg-white/10 p-2 rounded-lg">
                <span className="text-sm text-foreground flex-1">
                  {fileName}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, attachments: null }));
                    setFileName("");
                  }}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X size={16} className="text-foreground/70" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="border-t border-white/10 pt-6">
        <button
          type="submit"
          className="w-full gradient-primary text-white font-bold py-4 rounded-xl hover:shadow-glow transition-all transform hover:scale-105 duration-300 flex items-center justify-center gap-2 animate-pulse-bounce"
        >
          Submit Order <ArrowRight size={20} />
        </button>
      </div>
    </form>
  );
}
