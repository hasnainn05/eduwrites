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
  Lock,
  Bell,
  Shield,
  Trash2,
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

  if (userMode === "admin") {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-transparent animate-blob"></div>
        <div className="blur-gradient absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-transparent animate-blob animation-delay-2000"></div>
      </div>

      <div className="flex min-h-screen">
        <ProfileSidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onLogout={handleLogout}
          userName={user.fullName}
        />

        <div className="fixed left-80 right-0 top-16 bottom-0 flex flex-col overflow-hidden">
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
            <div className="w-full px-8 py-8 flex flex-col">

            {activeTab === "overview" && (
              <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="space-y-8">
                  {/* Page Header */}
                  <div>
                    <h1 className="text-3xl font-bold text-foreground font-poppins">
                      Dashboard
                    </h1>
                    <p className="text-foreground/60 mt-2">
                      Welcome back, {user.fullName}. Here's your account overview.
                    </p>
                  </div>

                  {/* Profile Hero Section */}
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between p-6 border border-white/10 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02]">
                    <div className="flex gap-6 items-start sm:items-center flex-1">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                        {user.avatar}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-foreground mb-1">
                          {user.fullName}
                        </h2>
                        <p className="text-foreground/60 text-sm mb-2">{user.email}</p>
                        <p className="text-foreground/50 text-xs">
                          Member since {user.joinDate}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="gradient-primary text-white px-6 py-2 rounded-lg font-semibold text-sm hover:shadow-glow transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                      <Edit size={16} />
                      Edit Profile
                    </button>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={index}
                          className="p-5 border border-white/10 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-white/20 hover:bg-white/[0.08] transition-all"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div
                              className={`inline-flex p-2.5 rounded-lg bg-gradient-to-r ${stat.color}`}
                            >
                              <Icon size={16} className="text-white" />
                            </div>
                          </div>
                          <p className="text-foreground/60 text-xs font-medium mb-1">
                            {stat.label}
                          </p>
                          <p className="text-2xl font-bold text-foreground">
                            {stat.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Account Information */}
                    <div className="lg:col-span-2 p-6 border border-white/10 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02]">
                      <h3 className="text-lg font-bold text-foreground mb-6">
                        Account Information
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                          <div className="flex items-center gap-3">
                            <Mail size={16} className="text-foreground/60" />
                            <div>
                              <p className="text-xs text-foreground/60 font-medium">
                                Email Address
                              </p>
                              <p className="text-sm font-medium text-foreground">
                                {user.email}
                              </p>
                            </div>
                          </div>
                          <button className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold">
                            Change
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/order"
                        className="p-4 border border-white/10 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:border-cyan-400/50 hover:bg-cyan-400/20 transition-all group"
                      >
                        <div className="text-2xl mb-2">📝</div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          New Order
                        </h4>
                        <p className="text-cyan-400 text-xs flex items-center gap-1">
                          Create <ArrowRight size={12} />
                        </p>
                      </Link>

                      <Link
                        href="/#services"
                        className="p-4 border border-white/10 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:border-purple-400/50 hover:bg-purple-400/20 transition-all group"
                      >
                        <div className="text-2xl mb-2">🎓</div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          Services
                        </h4>
                        <p className="text-purple-400 text-xs flex items-center gap-1">
                          View <ArrowRight size={12} />
                        </p>
                      </Link>

                      <button
                        onClick={() => setIsSupportModalOpen(true)}
                        className="p-4 border border-white/10 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 hover:border-pink-400/50 hover:bg-pink-400/20 transition-all group w-full text-left"
                      >
                        <div className="text-2xl mb-2">💬</div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          Support
                        </h4>
                        <p className="text-pink-400 text-xs flex items-center gap-1">
                          Contact <ArrowRight size={12} />
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <h1 className="text-3xl font-bold text-foreground font-poppins">
                      Order History
                    </h1>
                    <p className="text-foreground/60 mt-2">
                      Manage and track all your orders
                    </p>
                  </div>

                  {/* Table */}
                  <div className="border border-white/10 rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10 bg-white/5">
                            <th className="px-6 py-4 text-left text-foreground/60 font-semibold text-xs tracking-wider">
                              Order ID
                            </th>
                            <th className="px-6 py-4 text-left text-foreground/60 font-semibold text-xs tracking-wider hidden sm:table-cell">
                              Service
                            </th>
                            <th className="px-6 py-4 text-left text-foreground/60 font-semibold text-xs tracking-wider hidden sm:table-cell">
                              Date
                            </th>
                            <th className="px-6 py-4 text-left text-foreground/60 font-semibold text-xs tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-4 text-left text-foreground/60 font-semibold text-xs tracking-wider">
                              Amount
                            </th>
                            <th className="px-6 py-4 text-left text-foreground/60 font-semibold text-xs tracking-wider">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order, index) => (
                            <tr
                              key={index}
                              className="border-b border-white/10 hover:bg-white/[0.05] transition-colors"
                            >
                              <td className="px-6 py-4 text-foreground font-semibold text-xs">
                                {order.id}
                              </td>
                              <td className="px-6 py-4 text-foreground hidden sm:table-cell text-xs">
                                {order.service}
                              </td>
                              <td className="px-6 py-4 text-foreground/60 hidden sm:table-cell text-xs">
                                {order.date}
                              </td>
                              <td className="px-6 py-4">
                                <span
                                  className={`px-3 py-1.5 rounded-full text-xs font-semibold inline-block ${
                                    order.status === "Completed"
                                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                      : order.status === "In Progress"
                                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                        : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-foreground font-semibold text-xs">
                                {order.amount}
                              </td>
                              <td className="px-6 py-4">
                                <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs flex items-center gap-1.5 font-semibold">
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
                </div>
              </div>
            )}

            {activeTab === "chat" && (
              <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
                <SupportChat />
              </div>
            )}

            {activeTab === "settings" && (
              <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <h1 className="text-3xl font-bold text-foreground font-poppins">
                      Settings
                    </h1>
                    <p className="text-foreground/60 mt-2">
                      Manage your account preferences and security
                    </p>
                  </div>

                  {/* Security Section */}
                  <div className="p-6 border border-white/10 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02]">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield size={20} className="text-cyan-400" />
                      <h3 className="text-lg font-bold text-foreground">
                        Security & Privacy
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg hover:bg-white/[0.05] transition-all">
                        <div>
                          <p className="font-semibold text-foreground text-sm">
                            Change Password
                          </p>
                          <p className="text-xs text-foreground/60 mt-1">
                            Update your password regularly for security
                          </p>
                        </div>
                        <button className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold whitespace-nowrap px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition-all">
                          Change
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg hover:bg-white/[0.05] transition-all">
                        <div>
                          <p className="font-semibold text-foreground text-sm">
                            Two-Factor Authentication
                          </p>
                          <p className="text-xs text-foreground/60 mt-1">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <button className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold whitespace-nowrap px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition-all">
                          Enable
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg hover:bg-white/[0.05] transition-all">
                        <div>
                          <p className="font-semibold text-foreground text-sm">
                            Login History
                          </p>
                          <p className="text-xs text-foreground/60 mt-1">
                            View recent account activity
                          </p>
                        </div>
                        <button className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold whitespace-nowrap px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition-all">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Notifications Section */}
                  <div className="p-6 border border-white/10 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02]">
                    <div className="flex items-center gap-3 mb-6">
                      <Bell size={20} className="text-purple-400" />
                      <h3 className="text-lg font-bold text-foreground">
                        Notifications
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-4 border border-white/10 rounded-lg hover:bg-white/[0.05] cursor-pointer transition-all">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 rounded border-white/20 bg-white/10 accent-cyan-400"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm">
                            Order Updates
                          </p>
                          <p className="text-xs text-foreground/60 mt-0.5">
                            Get notified when your orders are updated
                          </p>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-4 border border-white/10 rounded-lg hover:bg-white/[0.05] cursor-pointer transition-all">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-white/20 bg-white/10 accent-cyan-400"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm">
                            Marketing Emails
                          </p>
                          <p className="text-xs text-foreground/60 mt-0.5">
                            Receive promotions and special offers
                          </p>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-4 border border-white/10 rounded-lg hover:bg-white/[0.05] cursor-pointer transition-all">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 rounded border-white/20 bg-white/10 accent-cyan-400"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm">
                            Support Messages
                          </p>
                          <p className="text-xs text-foreground/60 mt-0.5">
                            Get replies from our support team
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>


                  <div className="pb-4" />
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
                        Phone Number
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
                        Save Changes
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
