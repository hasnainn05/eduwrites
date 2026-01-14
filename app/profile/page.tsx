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
        <div className="fixed left-80 right-0 top-16 bottom-0 flex flex-col overflow-hidden">
          {/* Mode Toggle - Fixed at Top Outside Scroll */}
          <div className="flex justify-center py-6 pt-8 bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm border-b border-white/10">
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

          <div className="flex-1 overflow-y-auto">
            <div className="w-full h-full px-8 py-6 flex flex-col">

            {activeTab === "overview" && (
              <div className="flex-1 flex flex-col overflow-y-auto">
              <>
                {/* Header */}
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-foreground font-poppins">
                    My Account
                  </h1>
                  <p className="text-foreground/70 mt-1 text-sm">
                    Welcome back, {user.fullName}
                  </p>
                </div>

                {/* Profile Card */}
            <div className="glass p-6 rounded-xl border border-white/10 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                {user.avatar}
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground mb-1">
                  {user.fullName}
                </h2>
                <p className="text-foreground/70 text-xs mb-2">{user.email}</p>
                <p className="text-foreground/60 text-xs">
                  Member since {user.joinDate}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="gradient-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-glow transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Edit size={14} />
              Edit
            </button>
          </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass p-4 rounded-lg border border-white/10 text-center hover:border-white/20 transition-all"
              >
                <div
                  className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${stat.color} mb-2`}
                >
                  <Icon size={14} className="text-white" />
                </div>
                <p className="text-foreground/70 text-xs mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-foreground">
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
          <div className="space-y-4">
            {/* Account Info */}
            <div className="glass p-5 rounded-xl border border-white/10 w-full">
              <h3 className="text-sm font-bold text-foreground mb-3">
                Account Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2 text-foreground/70 text-xs">
                    <Mail size={14} />
                    Email
                  </div>
                  <span className="text-foreground text-xs font-medium">
                    {user.email}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-foreground/70 text-xs">
                    <Clock size={14} />
                    Member Since
                  </div>
                  <span className="text-foreground text-xs font-medium">
                    {user.joinDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Link
                href="/order"
                className="glass p-3 rounded-lg border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all group"
              >
                <div className="text-xl mb-1">📝</div>
                <h4 className="font-semibold text-foreground text-xs mb-1">
                  New Order
                </h4>
                <span className="text-cyan-400 text-xs flex items-center gap-1">
                  Order Now <ArrowRight size={10} />
                </span>
              </Link>

              <Link
                href="/#services"
                className="glass p-3 rounded-lg border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all group"
              >
                <div className="text-xl mb-1">🎓</div>
                <h4 className="font-semibold text-foreground text-xs mb-1">
                  Services
                </h4>
                <span className="text-purple-400 text-xs flex items-center gap-1">
                  View All <ArrowRight size={10} />
                </span>
              </Link>

              <button
                onClick={() => setIsSupportModalOpen(true)}
                className="glass p-3 rounded-lg border border-white/10 hover:border-pink-400/50 hover:bg-pink-400/10 transition-all group w-full text-left"
              >
                <div className="text-xl mb-1">💬</div>
                <h4 className="font-semibold text-foreground text-xs mb-1">
                  Support
                </h4>
                <span className="text-pink-400 text-xs flex items-center gap-1">
                  Contact <ArrowRight size={10} />
                </span>
              </button>
            </div>
          </div>
        )}

            {activeTab === "orders" && (
              <div className="flex flex-col w-full h-full">
                <div className="overflow-x-auto flex-1 p-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="p-3 text-left text-foreground/70 font-semibold text-xs">
                          Order ID
                        </th>
                        <th className="p-3 text-left text-foreground/70 font-semibold hidden sm:table-cell text-xs">
                          Service
                        </th>
                        <th className="p-3 text-left text-foreground/70 font-semibold hidden sm:table-cell text-xs">
                          Date
                        </th>
                        <th className="p-3 text-left text-foreground/70 font-semibold text-xs">
                          Status
                        </th>
                        <th className="p-3 text-left text-foreground/70 font-semibold text-xs">
                          Amount
                        </th>
                        <th className="p-3 text-left text-foreground/70 font-semibold text-xs">
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
                          <td className="p-3 text-foreground font-semibold text-xs">
                            {order.id}
                          </td>
                          <td className="p-3 text-foreground hidden sm:table-cell text-xs">
                            {order.service}
                          </td>
                          <td className="p-3 text-foreground/70 hidden sm:table-cell text-xs">
                            {order.date}
                          </td>
                          <td className="p-3">
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
                          <td className="p-3 text-foreground font-semibold text-xs">
                            {order.amount}
                          </td>
                          <td className="p-3">
                            <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs flex items-center gap-1">
                              <Eye size={12} />
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
              <div className="flex justify-center items-start w-full min-h-full">
                <div className="w-full max-w-3xl mx-auto px-6 py-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-xl">
                    <SupportChat />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="flex justify-center items-start w-full min-h-full">
                <div className="w-full max-w-3xl mx-auto px-6 py-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-xl p-6">
                    <div className="space-y-3 overflow-y-auto flex-1">
                      <h3 className="text-sm font-bold text-foreground mb-3">
                        Privacy & Security
                      </h3>
                      <div className="space-y-0">
                        <div className="flex justify-between items-center py-3 border-b border-white/10 hover:bg-white/5 px-2 rounded transition-all">
                          <div>
                            <p className="font-medium text-foreground text-xs">
                              Change Password
                            </p>
                            <p className="text-xs text-foreground/70">
                              Update your password
                            </p>
                          </div>
                          <button className="text-cyan-400 text-xs font-semibold whitespace-nowrap">
                            Change
                          </button>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10 hover:bg-white/5 px-2 rounded transition-all">
                          <div>
                            <p className="font-medium text-foreground text-xs">
                              Two-Factor Auth
                            </p>
                            <p className="text-xs text-foreground/70">
                              Add extra security
                            </p>
                          </div>
                          <button className="text-cyan-400 text-xs font-semibold whitespace-nowrap">
                            Enable
                          </button>
                        </div>
                        <div className="flex justify-between items-center py-3 hover:bg-white/5 px-2 rounded transition-all">
                          <div>
                            <p className="font-medium text-foreground text-xs">
                              Login History
                            </p>
                            <p className="text-xs text-foreground/70">
                              View recent activity
                            </p>
                          </div>
                          <button className="text-cyan-400 text-xs font-semibold whitespace-nowrap">
                            View
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 mt-3">
                      <h3 className="text-sm font-bold text-foreground mb-3">
                        Notifications
                      </h3>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 py-2 cursor-pointer hover:bg-white/5 px-2 rounded transition-all">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-3 h-3 rounded border-white/20 bg-white/10 accent-cyan-400"
                          />
                          <div>
                            <p className="font-medium text-foreground text-xs">
                              Order Updates
                            </p>
                            <p className="text-xs text-foreground/70">
                              Get notified about order progress
                            </p>
                          </div>
                        </label>
                        <label className="flex items-center gap-2 py-2 cursor-pointer hover:bg-white/5 px-2 rounded transition-all">
                          <input
                            type="checkbox"
                            className="w-3 h-3 rounded border-white/20 bg-white/10 accent-cyan-400"
                          />
                          <div>
                            <p className="font-medium text-foreground text-xs">
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

        </div>
      </div>
    </div>
  );
}
