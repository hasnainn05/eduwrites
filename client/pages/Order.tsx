import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Order() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "essay",
    wordCount: "",
    deadline: "",
    budget: "",
    academicLevel: "undergraduate",
    assignmentDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    { value: "essay", label: "Essay Writing" },
    { value: "assignment", label: "Assignment Writing" },
    { value: "research", label: "Research Paper" },
    { value: "thesis", label: "Thesis & Dissertation" },
    { value: "proofreading", label: "Proofreading & Editing" },
  ];

  const academicLevels = [
    { value: "high-school", label: "High School" },
    { value: "undergraduate", label: "Undergraduate" },
    { value: "masters", label: "Master's Level" },
    { value: "phd", label: "PhD Level" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Log form data
    console.log("Order submitted:", formData);

    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceType: "essay",
        wordCount: "",
        deadline: "",
        budget: "",
        academicLevel: "undergraduate",
        assignmentDetails: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass p-12 rounded-2xl max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle size={32} className="text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
            Order Submitted!
          </h2>

          <p className="text-foreground/80 mb-6">
            Thank you for your order! We've received your request and will contact you shortly to confirm the details.
          </p>

          <div className="bg-white/10 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-foreground/70 mb-2">
              <span className="font-semibold">Order ID:</span> {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <p className="text-sm text-foreground/70">
              <span className="font-semibold">Email:</span> {formData.email}
            </p>
          </div>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all transform hover:scale-105"
          >
            Back to Home <ArrowRight size={20} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600 to-transparent"></div>
        <div className="blur-gradient absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-transparent"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-poppins">
            Place Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Order</span>
          </h1>
          <p className="text-lg text-foreground/70">
            Fill in your details and we'll get started on your academic work right away
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass p-8 sm:p-12 rounded-2xl space-y-6">
          {/* Personal Information Section */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 font-poppins">Personal Information</h2>
            
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

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground/90 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
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
                    <option key={level.value} value={level.value} className="bg-slate-900">
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Service Details Section */}
          <div className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-poppins">Service Details</h2>
            
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
                    <option key={service.value} value={service.value} className="bg-slate-900">
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
            <h2 className="text-2xl font-bold text-foreground mb-6 font-poppins">Assignment Details</h2>
            
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
          </div>

          {/* Submit Button */}
          <div className="border-t border-white/10 pt-6">
            <button
              type="submit"
              className="w-full gradient-primary text-white font-bold py-4 rounded-xl hover:shadow-glow transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Submit Order <ArrowRight size={20} />
            </button>
            <p className="text-center text-sm text-foreground/60 mt-4">
              * Required fields. We'll contact you within 1 hour to confirm your order.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
