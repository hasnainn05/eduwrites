'use client';

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Edit, LogOut, FileText, Clock, DollarSign, Settings, User, Download, Eye, CheckCircle } from "lucide-react";

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
    },
    {
      id: "#ORD-002",
      service: "Research Paper",
      status: "In Progress",
      amount: "$249",
      date: "Dec 22, 2024",
      daysAgo: "50% complete",
    },
    {
      id: "#ORD-003",
      service: "Thesis Writing",
      status: "Pending",
      amount: "$2,999",
      date: "Dec 23, 2024",
      daysAgo: "Awaiting approval",
    },
  ];

  const stats = [
    { label: "Total Orders", value: "12", icon: FileText, color: "from-blue-500 to-cyan-500" },
    { label: "Completed", value: "10", icon: Clock, color: "from-green-500 to-emerald-500" },
    { label: "Total Spent", value: "$3,847", icon: DollarSign, color: "from-purple-500 to-pink-500" },
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
    <div className="w-full min-h-screen bg-gradient-to-b from-background to-background/80 py-12">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600 to-transparent"></div>
        <div className="blur-gradient absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground font-poppins mb-2">
              My Account
            </h1>
            <p className="text-foreground/70">Welcome back, {user.fullName}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-foreground/70 hover:text-red-400 transition-colors px-4 py-2 border border-white/20 rounded-lg hover:border-red-400"
          >
            <LogOut size={20} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>

        {/* Profile Header Card */}
        <div className="glass p-8 rounded-2xl mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              {user.avatar}
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-2 font-poppins">
                {user.fullName}
              </h2>
              <p className="text-foreground/70 mb-4">{user.email}</p>
              <p className="text-sm text-foreground/60">
                Member since {user.joinDate}
              </p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="gradient-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-glow transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Edit size={18} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                Edit Profile
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/90 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={editData.fullName}
                    onChange={(e) =>
                      setEditData({ ...editData, fullName: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/90 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) =>
                        setEditData({ ...editData, email: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/90 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) =>
                        setEditData({ ...editData, phone: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/90 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={editData.country}
                      onChange={(e) =>
                        setEditData({ ...editData, country: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/90 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={editData.city}
                      onChange={(e) =>
                        setEditData({ ...editData, city: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleSaveProfile}
                    className="flex-1 gradient-primary text-white py-2 rounded-lg font-semibold hover:shadow-glow transition-all"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 border-2 border-white/20 text-foreground py-2 rounded-lg font-semibold hover:bg-white/10 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                <p className="text-foreground/70 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground mt-2">
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
            { id: "orders", label: "My Orders", icon: FileText },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all border-b-2 ${
                  activeTab === tab.id
                    ? "text-cyan-400 border-cyan-400"
                    : "text-foreground/70 border-transparent hover:text-foreground"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Profile Completion */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">
                Profile Completion
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-foreground/70">Overall Progress</span>
                    <span className="text-sm font-bold text-cyan-400">85%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full w-[85%]"></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-foreground/60 mt-3">
                Complete your profile to unlock more features and better recommendations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Account Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="glass p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-6 font-poppins">
                    Account Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Mail size={18} />
                        Email
                      </div>
                      <span className="text-foreground">{user.email}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Phone size={18} />
                        Phone
                      </div>
                      <span className="text-foreground">{user.phone}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <MapPin size={18} />
                        Location
                      </div>
                      <span className="text-foreground">
                        {user.city}, {user.country}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-4">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Clock size={18} />
                        Member Since
                      </div>
                      <span className="text-foreground">{user.joinDate}</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="glass p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-6 font-poppins">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <FileText size={16} className="text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Order #ORD-001 Completed</p>
                        <p className="text-sm text-foreground/60">Dec 20, 2024 at 2:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Profile Updated</p>
                        <p className="text-sm text-foreground/60">Dec 15, 2024 at 10:15 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={16} className="text-green-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Account Created</p>
                        <p className="text-sm text-foreground/60">Jan 5, 2024 at 3:45 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <div className="glass p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer">
                  <h4 className="font-bold text-foreground mb-2">📝 Place New Order</h4>
                  <Link
                    href="/order"
                    className="text-cyan-400 text-sm hover:text-cyan-300 font-semibold"
                  >
                    Order Now →
                  </Link>
                </div>
                <div className="glass p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer">
                  <h4 className="font-bold text-foreground mb-2">🎓 Browse Services</h4>
                  <Link href="/#services" className="text-cyan-400 text-sm hover:text-cyan-300 font-semibold">
                    View Services →
                  </Link>
                </div>
                <div className="glass p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer">
                  <h4 className="font-bold text-foreground mb-2">💬 Contact Support</h4>
                  <Link href="/contact" className="text-cyan-400 text-sm hover:text-cyan-300 font-semibold">
                    Get Help →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-4 text-left text-foreground/70 font-semibold">Order ID</th>
                      <th className="p-4 text-left text-foreground/70 font-semibold">Service</th>
                      <th className="p-4 text-left text-foreground/70 font-semibold hidden sm:table-cell">
                        Date
                      </th>
                      <th className="p-4 text-left text-foreground/70 font-semibold">Status</th>
                      <th className="p-4 text-left text-foreground/70 font-semibold">Amount</th>
                      <th className="p-4 text-left text-foreground/70 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-4 text-foreground font-semibold">{order.id}</td>
                        <td className="p-4 text-foreground">{order.service}</td>
                        <td className="p-4 text-foreground/70 hidden sm:table-cell">{order.date}</td>
                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              order.status === "Completed"
                                ? "bg-green-500/20 text-green-300"
                                : order.status === "In Progress"
                                  ? "bg-blue-500/20 text-blue-300"
                                  : "bg-yellow-500/20 text-yellow-300"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="p-4 text-foreground font-semibold">{order.amount}</td>
                        <td className="p-4">
                          <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                            <Eye size={16} />
                            <span className="hidden sm:inline text-sm">View</span>
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
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6 font-poppins">
                Privacy & Security
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <div>
                    <p className="font-semibold text-foreground">Change Password</p>
                    <p className="text-sm text-foreground/70">Update your password regularly</p>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300">Change</button>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <div>
                    <p className="font-semibold text-foreground">Two-Factor Authentication</p>
                    <p className="text-sm text-foreground/70">Add extra security to your account</p>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300">Enable</button>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div>
                    <p className="font-semibold text-foreground">Login History</p>
                    <p className="text-sm text-foreground/70">View your recent login activities</p>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300">View</button>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6 font-poppins">
                Account Settings
              </h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 py-4 border-b border-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border-white/20 bg-white/10 accent-cyan-400"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Email Notifications</p>
                    <p className="text-sm text-foreground/70">Get updates about your orders</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 py-4 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/20 bg-white/10 accent-cyan-400"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Marketing Emails</p>
                    <p className="text-sm text-foreground/70">Receive promotions and offers</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
