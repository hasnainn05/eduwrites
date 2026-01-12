'use client';

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Edit, LogOut, FileText, Clock, DollarSign, Settings, User, Download, Eye, CheckCircle, ArrowRight, Star, TrendingUp, Award, Lock } from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "settings">("overview");
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
      daysAgo: "Delivered",
      quality: 4.8,
    },
    {
      id: "#ORD-002",
      service: "Research Paper",
      status: "In Progress",
      amount: "$249",
      date: "Dec 22, 2024",
      daysAgo: "50% complete",
      quality: null,
    },
    {
      id: "#ORD-003",
      service: "Thesis Writing",
      status: "Pending",
      amount: "$2,999",
      date: "Dec 23, 2024",
      daysAgo: "Awaiting approval",
      quality: null,
    },
  ];

  const stats = [
    { label: "Total Orders", value: "12", subtext: "+2 this month", icon: FileText, color: "from-blue-500 to-cyan-500", bg: "bg-blue-500/20" },
    { label: "Completed", value: "10", subtext: "83% success rate", icon: CheckCircle, color: "from-green-500 to-emerald-500", bg: "bg-green-500/20" },
    { label: "Total Spent", value: "$3,847", subtext: "Avg: $321", icon: DollarSign, color: "from-purple-500 to-pink-500", bg: "bg-purple-500/20" },
    { label: "Rating", value: "4.9", subtext: "Based on 10 reviews", icon: Star, color: "from-yellow-500 to-orange-500", bg: "bg-yellow-500/20" },
  ];

  const achievements = [
    { icon: Award, title: "Top Student", description: "Completed 10+ orders" },
    { icon: TrendingUp, title: "Consistent Quality", description: "Avg rating 4.8+" },
    { icon: User, title: "Verified Member", description: "Active since Jan 2024" },
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

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background via-background/95 to-background/80 py-8">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-transparent animate-blob"></div>
        <div className="blur-gradient absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-transparent animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Profile Header */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-3xl blur-2xl -z-5"></div>
          <div className="glass p-8 sm:p-12 rounded-3xl border border-white/20 backdrop-blur-xl">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-5xl font-bold text-foreground font-poppins mb-2">
                  {user.fullName}
                </h1>
                <p className="text-foreground/70 text-lg">Premium Member • Active since {user.joinDate}</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-foreground/70 hover:text-red-400 transition-all px-4 py-2 border border-white/20 rounded-xl hover:border-red-400/50 hover:bg-red-400/10"
              >
                <LogOut size={20} />
                <span className="hidden sm:inline font-semibold">Logout</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-5xl font-bold flex-shrink-0 shadow-2xl">
                  {user.avatar}
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white/30"></div>
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Email</p>
                    <p className="text-foreground font-semibold">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Phone</p>
                    <p className="text-foreground font-semibold">{user.phone}</p>
                  </div>
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Location</p>
                    <p className="text-foreground font-semibold">{user.city}, {user.country}</p>
                  </div>
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Member Status</p>
                    <p className="text-foreground font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Active
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-glow transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <Edit size={18} />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all transform hover:scale-105 group"
              >
                <div className={`inline-flex p-3 rounded-xl ${stat.bg} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>
                <p className="text-foreground/70 text-sm font-medium">{stat.label}</p>
                <p className="text-4xl font-bold text-foreground mt-2 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-foreground/50">{stat.subtext}</p>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="glass p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-cyan-400" />
                </div>
                <h4 className="text-foreground font-bold mb-2">{achievement.title}</h4>
                <p className="text-foreground/70 text-sm">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        {/* Navigation Tabs with Modern Design */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {[
            { id: "overview", label: "Dashboard", icon: User },
            { id: "orders", label: "My Orders", icon: FileText },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "glass border border-white/20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300"
                    : "text-foreground/70 hover:text-foreground hover:glass hover:border hover:border-white/10"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Profile Completion */}
            <div className="glass p-8 rounded-2xl border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-foreground font-poppins">
                  Profile Completion
                </h3>
                <span className="text-3xl font-bold text-cyan-400">85%</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/10">
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full w-[85%] animate-pulse"></div>
                </div>
              </div>
              <p className="text-sm text-foreground/70">
                Complete your profile to unlock premium features, better recommendations, and priority support
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Account Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="glass p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold text-foreground mb-8 font-poppins flex items-center gap-2">
                    <User size={24} className="text-cyan-400" />
                    Account Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10 hover:bg-white/5 px-4 py-2 rounded-lg transition-all">
                      <div className="flex items-center gap-3 text-foreground/70">
                        <Mail size={20} className="text-cyan-400/70" />
                        <span>Email Address</span>
                      </div>
                      <span className="text-foreground font-semibold">{user.email}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10 hover:bg-white/5 px-4 py-2 rounded-lg transition-all">
                      <div className="flex items-center gap-3 text-foreground/70">
                        <Phone size={20} className="text-cyan-400/70" />
                        <span>Phone Number</span>
                      </div>
                      <span className="text-foreground font-semibold">{user.phone}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10 hover:bg-white/5 px-4 py-2 rounded-lg transition-all">
                      <div className="flex items-center gap-3 text-foreground/70">
                        <MapPin size={20} className="text-cyan-400/70" />
                        <span>Location</span>
                      </div>
                      <span className="text-foreground font-semibold">
                        {user.city}, {user.country}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-4 hover:bg-white/5 px-4 rounded-lg transition-all">
                      <div className="flex items-center gap-3 text-foreground/70">
                        <Clock size={20} className="text-cyan-400/70" />
                        <span>Member Since</span>
                      </div>
                      <span className="text-foreground font-semibold">{user.joinDate}</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="glass p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold text-foreground mb-8 font-poppins flex items-center gap-2">
                    <TrendingUp size={24} className="text-cyan-400" />
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 pb-4 border-b border-white/10 hover:bg-white/5 p-3 rounded-lg transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText size={20} className="text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">Order #ORD-001 Completed</p>
                        <p className="text-sm text-foreground/60">Dec 20, 2024 at 2:30 PM</p>
                      </div>
                      <span className="text-cyan-400 text-xs font-bold px-3 py-1 bg-cyan-500/20 rounded-full">Delivered</span>
                    </div>
                    <div className="flex items-start gap-4 pb-4 border-b border-white/10 hover:bg-white/5 p-3 rounded-lg transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <User size={20} className="text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">Profile Updated</p>
                        <p className="text-sm text-foreground/60">Dec 15, 2024 at 10:15 AM</p>
                      </div>
                      <span className="text-purple-400 text-xs font-bold px-3 py-1 bg-purple-500/20 rounded-full">Updated</span>
                    </div>
                    <div className="flex items-start gap-4 hover:bg-white/5 p-3 rounded-lg transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={20} className="text-green-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">Account Created</p>
                        <p className="text-sm text-foreground/60">Jan 5, 2024 at 3:45 PM</p>
                      </div>
                      <span className="text-green-400 text-xs font-bold px-3 py-1 bg-green-500/20 rounded-full">Active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-foreground px-2">Quick Actions</h4>
                <Link
                  href="/order"
                  className="glass p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all group block"
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform inline-block">📝</div>
                  <h5 className="font-bold text-foreground mb-1">Place New Order</h5>
                  <p className="text-foreground/60 text-sm mb-4">Start a new assignment</p>
                  <span className="text-cyan-400 text-sm font-semibold flex items-center gap-1">
                    Order Now <ArrowRight size={14} />
                  </span>
                </Link>

                <Link
                  href="/#services"
                  className="glass p-6 rounded-2xl border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all group block"
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform inline-block">🎓</div>
                  <h5 className="font-bold text-foreground mb-1">Browse Services</h5>
                  <p className="text-foreground/60 text-sm mb-4">Explore all offerings</p>
                  <span className="text-purple-400 text-sm font-semibold flex items-center gap-1">
                    View More <ArrowRight size={14} />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="glass p-6 rounded-2xl border border-white/10 hover:border-pink-400/50 hover:bg-pink-400/10 transition-all group block"
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform inline-block">💬</div>
                  <h5 className="font-bold text-foreground mb-1">Contact Support</h5>
                  <p className="text-foreground/60 text-sm mb-4">Get instant help</p>
                  <span className="text-pink-400 text-sm font-semibold flex items-center gap-1">
                    Chat Now <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="space-y-6">
            <div className="glass rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-8 border-b border-white/10">
                <h3 className="text-2xl font-bold text-foreground font-poppins flex items-center gap-2">
                  <FileText size={24} className="text-cyan-400" />
                  Order History
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 text-left text-foreground/70 font-semibold text-sm">Order ID</th>
                      <th className="p-4 text-left text-foreground/70 font-semibold text-sm">Service</th>
                      <th className="p-4 text-left text-foreground/70 font-semibold text-sm hidden sm:table-cell">Date</th>
                      <th className="p-4 text-left text-foreground/70 font-semibold text-sm">Status</th>
                      <th className="p-4 text-left text-foreground/70 font-semibold text-sm">Amount</th>
                      <th className="p-4 text-left text-foreground/70 font-semibold text-sm">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-4 text-foreground font-bold text-sm">{order.id}</td>
                        <td className="p-4 text-foreground text-sm">{order.service}</td>
                        <td className="p-4 text-foreground/70 text-sm hidden sm:table-cell">{order.date}</td>
                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
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
                        <td className="p-4 text-foreground font-semibold text-sm">{order.amount}</td>
                        <td className="p-4">
                          <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 hover:bg-white/5 px-3 py-1 rounded-lg">
                            <Eye size={16} />
                            <span className="hidden sm:inline text-xs">View</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl border border-white/10 text-center">
                <p className="text-foreground/70 text-sm mb-2">Pending Orders</p>
                <p className="text-4xl font-bold text-yellow-400 mb-2">1</p>
                <p className="text-xs text-foreground/60">Awaiting approval</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10 text-center">
                <p className="text-foreground/70 text-sm mb-2">In Progress</p>
                <p className="text-4xl font-bold text-blue-400 mb-2">1</p>
                <p className="text-xs text-foreground/60">50% complete</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10 text-center">
                <p className="text-foreground/70 text-sm mb-2">Completed</p>
                <p className="text-4xl font-bold text-green-400 mb-2">10</p>
                <p className="text-xs text-foreground/60">All delivered</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-foreground mb-8 font-poppins flex items-center gap-2">
                <Lock size={24} className="text-pink-400" />
                Privacy & Security
              </h3>
              <div className="space-y-0">
                <div className="flex justify-between items-center py-6 px-4 border-b border-white/10 hover:bg-white/5 rounded-lg transition-all">
                  <div>
                    <p className="font-semibold text-foreground">Change Password</p>
                    <p className="text-sm text-foreground/70">Update your password regularly for security</p>
                  </div>
                  <button className="text-pink-400 hover:text-pink-300 px-4 py-2 rounded-lg hover:bg-white/10 transition-all font-semibold text-sm">
                    Change
                  </button>
                </div>
                <div className="flex justify-between items-center py-6 px-4 border-b border-white/10 hover:bg-white/5 rounded-lg transition-all">
                  <div>
                    <p className="font-semibold text-foreground">Two-Factor Authentication</p>
                    <p className="text-sm text-foreground/70">Add an extra layer of security to your account</p>
                  </div>
                  <button className="text-pink-400 hover:text-pink-300 px-4 py-2 rounded-lg hover:bg-white/10 transition-all font-semibold text-sm">
                    Enable
                  </button>
                </div>
                <div className="flex justify-between items-center py-6 px-4 hover:bg-white/5 rounded-lg transition-all">
                  <div>
                    <p className="font-semibold text-foreground">Login History</p>
                    <p className="text-sm text-foreground/70">View all your recent login activities</p>
                  </div>
                  <button className="text-pink-400 hover:text-pink-300 px-4 py-2 rounded-lg hover:bg-white/10 transition-all font-semibold text-sm">
                    View
                  </button>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-foreground mb-8 font-poppins flex items-center gap-2">
                <Settings size={24} className="text-cyan-400" />
                Notification Preferences
              </h3>
              <div className="space-y-0">
                <label className="flex items-center gap-4 py-6 px-4 border-b border-white/10 hover:bg-white/5 rounded-lg transition-all cursor-pointer group">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 rounded-lg border-white/20 bg-white/10 accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground group-hover:text-cyan-300">Email Notifications</p>
                    <p className="text-sm text-foreground/70">Get updates about your orders and account activity</p>
                  </div>
                </label>
                <label className="flex items-center gap-4 py-6 px-4 border-b border-white/10 hover:bg-white/5 rounded-lg transition-all cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-lg border-white/20 bg-white/10 accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground group-hover:text-cyan-300">Marketing Emails</p>
                    <p className="text-sm text-foreground/70">Receive promotions, new services, and exclusive offers</p>
                  </div>
                </label>
                <label className="flex items-center gap-4 py-6 px-4 hover:bg-white/5 rounded-lg transition-all cursor-pointer group">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 rounded-lg border-white/20 bg-white/10 accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground group-hover:text-cyan-300">Push Notifications</p>
                    <p className="text-sm text-foreground/70">Receive real-time alerts about order updates</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">Danger Zone</h3>
              <button className="w-full border-2 border-red-500/50 text-red-400 py-3 rounded-xl font-semibold hover:bg-red-500/20 transition-all">
                Delete Account
              </button>
              <p className="text-xs text-foreground/60 mt-3">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
            </div>
          </div>
        )}

        {/* Edit Profile Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
              <h2 className="text-3xl font-bold text-foreground mb-8 font-poppins">
                Edit Profile
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground/90 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={editData.fullName}
                    onChange={(e) =>
                      setEditData({ ...editData, fullName: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground/90 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) =>
                        setEditData({ ...editData, email: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground/90 mb-3">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) =>
                        setEditData({ ...editData, phone: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground/90 mb-3">
                      Country
                    </label>
                    <input
                      type="text"
                      value={editData.country}
                      onChange={(e) =>
                        setEditData({ ...editData, country: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground/90 mb-3">
                      City
                    </label>
                    <input
                      type="text"
                      value={editData.city}
                      onChange={(e) =>
                        setEditData({ ...editData, city: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-white/10">
                  <button
                    onClick={handleSaveProfile}
                    className="flex-1 gradient-primary text-white py-3 rounded-xl font-semibold hover:shadow-glow transition-all"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 border-2 border-white/20 text-foreground py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
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
