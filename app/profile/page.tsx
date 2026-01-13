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
} from "lucide-react";

export default function Profile() {
  const [userMode, setUserMode] = useState<"user" | "admin">("user");
  const [activeTab, setActiveTab] = useState<
    "overview" | "orders" | "settings"
  >("overview");
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
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
      value: "12",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Completed",
      value: "10",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Total Spent",
      value: "$3,847",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Rating",
      value: "4.9",
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
    <div className="w-full min-h-screen bg-gradient-to-b from-background via-background/95 to-background/80 py-8">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-transparent animate-blob"></div>
        <div className="blur-gradient absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-transparent animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground font-poppins">
              My Account
            </h1>
            <p className="text-foreground/70 mt-2">
              Welcome back, {user.fullName}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-foreground/70 hover:text-red-400 transition-all px-4 py-2 border border-white/20 rounded-xl hover:border-red-400/50 hover:bg-red-400/10"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline text-sm font-semibold">
              Logout
            </span>
          </button>
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

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-white/10">
          {[
            { id: "overview", label: "Overview", icon: User },
            { id: "orders", label: "Orders", icon: FileText },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-3 font-semibold transition-all text-sm ${
                  isActive
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Account Info */}
            <div className="glass p-6 rounded-2xl border border-white/10">
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
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-foreground/70 text-sm">
                    <MessageCircle size={16} />
                    WhatsApp
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {user.phone}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-foreground/70 text-sm">
                    <MapPin size={16} />
                    Location
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {user.city}, {user.country}
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

              <Link
                href="/contact"
                className="glass p-4 rounded-xl border border-white/10 hover:border-pink-400/50 hover:bg-pink-400/10 transition-all group"
              >
                <div className="text-2xl mb-2">💬</div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  Support
                </h4>
                <span className="text-pink-400 text-xs flex items-center gap-1">
                  Contact <ArrowRight size={12} />
                </span>
              </Link>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <div className="glass rounded-xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 text-left text-foreground/70 font-semibold">
                        Order ID
                      </th>
                      <th className="p-4 text-left text-foreground/70 font-semibold hidden sm:table-cell">
                        Service
                      </th>
                      <th className="p-4 text-left text-foreground/70 font-semibold hidden sm:table-cell">
                        Date
                      </th>
                      <th className="p-4 text-left text-foreground/70 font-semibold">
                        Status
                      </th>
                      <th className="p-4 text-left text-foreground/70 font-semibold">
                        Amount
                      </th>
                      <th className="p-4 text-left text-foreground/70 font-semibold">
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
                        <td className="p-4 text-foreground font-semibold">
                          {order.id}
                        </td>
                        <td className="p-4 text-foreground hidden sm:table-cell">
                          {order.service}
                        </td>
                        <td className="p-4 text-foreground/70 hidden sm:table-cell text-xs">
                          {order.date}
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold inline-block ${
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
                        <td className="p-4 text-foreground font-semibold text-sm">
                          {order.amount}
                        </td>
                        <td className="p-4">
                          <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs flex items-center gap-1">
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
        )}

        {activeTab === "settings" && (
          <div className="space-y-4">
            <div className="glass p-6 rounded-2xl border border-white/10">
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

            <div className="glass p-6 rounded-2xl border border-white/10">
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
                    className="flex-1 gradient-primary text-white py-2 rounded-lg font-semibold text-sm hover:shadow-glow transition-all"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 border border-white/20 text-foreground py-2 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
