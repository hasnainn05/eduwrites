"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  MapPin,
  Edit,
  LogOut,
  FileText,
  Clock,
  DollarSign,
  Settings,
  User,
  Eye,
  CheckCircle,
  ArrowRight,
  Star,
  ShieldAlert,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import SupportModal from "@/components/SupportModal";
import SupportChat from "@/components/SupportChat";
import { ProfileSidebar } from "@/client/components/ProfileSidebar";

export default function Profile() {
  const [userMode, setUserMode] = useState<"user" | "admin">("user");
  const [activeTab, setActiveTab] = useState<
    "overview" | "orders" | "chat" | "settings"
  >("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatMessages, setChatMessages] = useState<
    { id: number; user: string; message: string; timestamp: string }[]
  >([
    {
      id: 1,
      user: "support",
      message:
        "Hello! Welcome to EduWrites support. How can we assist you today?",
      timestamp: "10:00 AM",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const [user, setUser] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+1 (202) 555-0123",
    country: "United States",
    city: "New York",
    joinDate: "January 2024",
    avatar: "JD",
  });

  const [editData, setEditData] = useState(user);

  const orders = [
    {
      id: "#ORD-001",
      service: "Essay Writing",
      status: "Completed",
      amount: "$99",
      date: "Dec 20, 2024",
    },
    {
      id: "#ORD-002",
      service: "Research Paper",
      status: "In Progress",
      amount: "$249",
      date: "Dec 22, 2024",
    },
    {
      id: "#ORD-003",
      service: "Thesis Writing",
      status: "Pending",
      amount: "$2,999",
      date: "Dec 23, 2024",
    },
  ];

  const stats = [
    {
      label: "Total Orders",
      value: "0",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Completed",
      value: "0",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Total Spent",
      value: "$0.00",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Rating",
      value: "0.00",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const handleSaveProfile = () => {
    setUser(editData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        user: "customer",
        message: chatInput,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatInput("");

      // Simulate support response
      setTimeout(() => {
        const supportResponse = {
          id: chatMessages.length + 2,
          user: "support",
          message:
            "Thank you for your message. Our team will get back to you shortly!",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setChatMessages((prev) => [...prev, supportResponse]);
      }, 1000);
    }
  };

  // If user selected admin mode, redirect to admin dashboard
  if (userMode === "admin") {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mode Toggle */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setUserMode("user")}
              className="flex items-center gap-2 px-6 py-3 rounded-lg glass border border-white/20 text-foreground hover:bg-white/10 transition-all font-medium"
            >
              <User size={18} />
              Back to User Profile
            </button>
          </div>

          <div className="text-center py-20">
            <ShieldAlert className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Admin Access Required
            </h2>
            <p className="text-foreground/60 mb-6">
              Redirecting to admin panel...
            </p>
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Go to Admin Panel <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background via-background/95 to-background/80">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-transparent animate-blob"></div>
        <div className="blur-gradient absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-transparent animate-blob animation-delay-2000"></div>
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <ProfileSidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onLogout={handleLogout}
          userName={user.fullName}
        />

        {/* Main Content */}
        <div className="fixed left-0 right-0 top-0 bottom-0 ml-64 flex flex-col h-screen">
          <div className="flex-1 overflow-hidden pb-24">
            <div className="w-full h-full p-5 overflow-y-auto flex flex-col">
            {activeTab === "overview" && (
              <div className="flex-1 flex flex-col overflow-y-auto">
              <>
                {/* Mode Toggle */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex gap-2 p-1 glass rounded-lg border border-white/20">
                    <button
                      onClick={() => setUserMode("user")}
                      className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${
                        userMode === "user"
                          ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      <User size={16} className="inline mr-2" />
                      User
                    </button>
                    <button
                      onClick={() => setUserMode("admin")}
                      className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${
                        (userMode as string) === "admin"
                          ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      <ShieldAlert size={16} className="inline mr-2" />
                      Admin
                    </button>
                  </div>
                </div>

                {/* Header */}
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-foreground font-poppins">
                    My Account
                  </h1>
                  <p className="text-foreground/70 mt-2">
                    Welcome back, {user.fullName}
                  </p>
                </div>

                {/* Profile Card */}
            <div className="glass p-8 rounded-2xl border border-white/10 mb-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div className="flex gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                {user.avatar}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  {user.fullName}
                </h2>
                <p className="text-foreground/70 text-sm mb-3">{user.email}</p>
                <p className="text-foreground/60 text-xs">
                  Member since {user.joinDate}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="gradient-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-glow transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Edit size={16} />
              Edit
            </button>
          </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass p-5 rounded-xl border border-white/10 text-center hover:border-white/20 transition-all"
              >
                <div
                  className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${stat.color} mb-3`}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <p className="text-foreground/70 text-xs mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
            );
              })}
                </div>
              </>
              </div>
            )}

            {/* Tab Content */}
            {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Account Info */}
            <div className="glass p-6 rounded-2xl border border-white/10 w-full">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Account Information
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-foreground/70 text-sm">
                    <Mail size={16} />
                    Email
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {user.email}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-foreground/70 text-sm">
                    <Clock size={16} />
                    Member Since
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {user.joinDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/order"
                className="glass p-4 rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all group"
              >
                <div className="text-2xl mb-2">📝</div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  New Order
                </h4>
                <span className="text-cyan-400 text-xs flex items-center gap-1">
                  Order Now <ArrowRight size={12} />
                </span>
              </Link>

              <Link
                href="/#services"
                className="glass p-4 rounded-xl border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all group"
              >
                <div className="text-2xl mb-2">🎓</div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  Services
                </h4>
                <span className="text-purple-400 text-xs flex items-center gap-1">
                  View All <ArrowRight size={12} />
                </span>
              </Link>

              <button
                onClick={() => setIsSupportModalOpen(true)}
                className="glass p-4 rounded-xl border border-white/10 hover:border-pink-400/50 hover:bg-pink-400/10 transition-all group w-full text-left"
              >
                <div className="text-2xl mb-2">💬</div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  Support
                </h4>
                <span className="text-pink-400 text-xs flex items-center gap-1">
                  Contact <ArrowRight size={12} />
                </span>
              </button>
            </div>
          </div>
        )}

            {activeTab === "orders" && (
              <div className="glass rounded-2xl border border-white/10 overflow-hidden flex-1 flex flex-col">
              <div className="overflow-x-auto flex-1 p-6">
                <table className="w-full text-base">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 text-base">
                      <th className="p-5 text-left text-foreground/70 font-semibold text-base">
                        Order ID
                      </th>
                      <th className="p-5 text-left text-foreground/70 font-semibold hidden sm:table-cell text-base">
                        Service
                      </th>
                      <th className="p-5 text-left text-foreground/70 font-semibold hidden sm:table-cell text-base">
                        Date
                      </th>
                      <th className="p-5 text-left text-foreground/70 font-semibold text-base">
                        Status
                      </th>
                      <th className="p-5 text-left text-foreground/70 font-semibold text-base">
                        Amount
                      </th>
                      <th className="p-5 text-left text-foreground/70 font-semibold text-base">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-5 text-foreground font-semibold text-base">
                          {order.id}
                        </td>
                        <td className="p-5 text-foreground hidden sm:table-cell text-base">
                          {order.service}
                        </td>
                        <td className="p-5 text-foreground/70 hidden sm:table-cell text-sm">
                          {order.date}
                        </td>
                        <td className="p-5">
                          <span
                            className={`px-3 py-2 rounded-full text-sm font-semibold inline-block ${
                              order.status === "Completed"
                                ? "bg-green-500/30 text-green-300"
                                : order.status === "In Progress"
                                  ? "bg-blue-500/30 text-blue-300"
                                  : "bg-yellow-500/30 text-yellow-300"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="p-5 text-foreground font-semibold text-base">
                          {order.amount}
                        </td>
                        <td className="p-5">
                          <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm flex items-center gap-1">
                            <Eye size={14} />
                            <span className="hidden sm:inline">View</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
            )}

            {activeTab === "chat" && (
              <div className="glass rounded-2xl border border-white/10 overflow-hidden flex-1 flex flex-col p-6">
                <SupportChat />
              </div>
            )}

            {activeTab === "settings" && (
              <div className="glass rounded-2xl border border-white/10 overflow-hidden flex-1 flex flex-col p-6">
              <div className="space-y-4 overflow-y-auto">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Privacy & Security
              </h3>
              <div className="space-y-0">
                <div className="flex justify-between items-center py-4 border-b border-white/10 hover:bg-white/5 px-2 rounded transition-all">
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      Change Password
                    </p>
                    <p className="text-xs text-foreground/70">
                      Update your password
                    </p>
                  </div>
                  <button className="text-cyan-400 text-xs font-semibold">
                    Change
                  </button>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10 hover:bg-white/5 px-2 rounded transition-all">
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      Two-Factor Auth
                    </p>
                    <p className="text-xs text-foreground/70">
                      Add extra security
                    </p>
                  </div>
                  <button className="text-cyan-400 text-xs font-semibold">
                    Enable
                  </button>
                </div>
                <div className="flex justify-between items-center py-4 hover:bg-white/5 px-2 rounded transition-all">
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      Login History
                    </p>
                    <p className="text-xs text-foreground/70">
                      View recent activity
                    </p>
                  </div>
                  <button className="text-cyan-400 text-xs font-semibold">
                    View
                  </button>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/10 w-full">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Notifications
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 py-3 cursor-pointer hover:bg-white/5 px-2 rounded transition-all">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border-white/20 bg-white/10 accent-cyan-400"
                  />
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      Order Updates
                    </p>
                    <p className="text-xs text-foreground/70">
                      Get notified about order progress
                    </p>
                  </div>
                </label>
                <label className="flex items-center gap-3 py-3 cursor-pointer hover:bg-white/5 px-2 rounded transition-all">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/20 bg-white/10 accent-cyan-400"
                  />
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      Marketing
                    </p>
                    <p className="text-xs text-foreground/70">
                      Receive promotions and offers
                    </p>
                  </div>
                </label>
              </div>
                </div>
              </div>
            )}

            {/* Edit Profile Modal */}
            {isEditing && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="glass rounded-2xl p-8 max-w-md w-full border border-white/20">
              <h2 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                Edit Profile
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground/90 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={editData.fullName}
                    onChange={(e) =>
                      setEditData({ ...editData, fullName: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground/90 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) =>
                      setEditData({ ...editData, email: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground/90 mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={editData.phone}
                    onChange={(e) =>
                      setEditData({ ...editData, phone: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/90 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={editData.city}
                      onChange={(e) =>
                        setEditData({ ...editData, city: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/90 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={editData.country}
                      onChange={(e) =>
                        setEditData({ ...editData, country: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSaveProfile}
                    className="flex-1 gradient-primary text-white py-2 rounded-lg font-semibold text-sm hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-pulse-bounce"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 border border-white/20 text-foreground py-2 rounded-lg font-semibold text-sm hover:bg-white/10 hover:shadow-glow transition-all transform hover:scale-105 animate-pulse-bounce"
                  >
                    Cancel
                  </button>
                </div>
              </div>
                </div>
              </div>
            )}

            {/* Support Modal */}
            <SupportModal
              isOpen={isSupportModalOpen}
              onClose={() => setIsSupportModalOpen(false)}
            />
            </div>
          </div>

          {/* Custom Footer - Fixed at bottom */}
          <footer className="fixed bottom-0 left-0 right-0 ml-64 bg-sidebar-background border-t border-sidebar-border text-sidebar-foreground py-3 z-30">
              <div className="w-full pl-6 pr-0">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sidebar-foreground text-xs">Services</h4>
                    <ul className="space-y-1 text-xs text-sidebar-foreground/70">
                      <li><Link href="/services/essay" className="hover:text-sidebar-primary transition-colors">Essay Writing</Link></li>
                      <li><Link href="/services/research" className="hover:text-sidebar-primary transition-colors">Research Paper</Link></li>
                      <li><Link href="/services/thesis" className="hover:text-sidebar-primary transition-colors">Thesis Writing</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sidebar-foreground text-xs">Company</h4>
                    <ul className="space-y-1 text-xs text-sidebar-foreground/70">
                      <li><Link href="/about" className="hover:text-sidebar-primary transition-colors">About Us</Link></li>
                      <li><Link href="/#pricing" className="hover:text-sidebar-primary transition-colors">Pricing</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sidebar-foreground text-xs">Legal</h4>
                    <ul className="space-y-1 text-xs text-sidebar-foreground/70">
                      <li><Link href="/privacy" className="hover:text-sidebar-primary transition-colors">Privacy Policy</Link></li>
                      <li><Link href="/terms" className="hover:text-sidebar-primary transition-colors">Terms of Service</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-sidebar-border mt-2 pt-2 text-center text-xs text-sidebar-foreground/60">
                  <p>&copy; {new Date().getFullYear()} EduWrites. All rights reserved.</p>
                </div>
              </div>
            </footer>
        </div>
      </div>
    </div>
  );
}
