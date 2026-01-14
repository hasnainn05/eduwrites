"use client";

import { useState, useEffect } from "react";
import { AdminSidebar } from "@/client/components/AdminSidebar";
import { OrderStatusTabs } from "@/client/components/admin/OrderStatusTabs";
import { OrdersList } from "@/client/components/admin/OrdersList";
import { OrderDetail } from "@/client/components/admin/OrderDetail";
import { Package } from "lucide-react";
import { getOrders } from "@/lib/orderStorage";

export interface Order {
  id: string;
  fullName: string;
  email: string;
  service: string;
  deadline: string;
  wordCount: number;
  academicLevel: string;
  subject: string;
  paperType: string;
  status: "pending" | "in_progress" | "completed";
  submittedDate: string;
  description: string;
  attachments?: string[];
  price?: number;
}

export default function AdminOrders() {
  const [activeStatus, setActiveStatus] = useState<
    "pending" | "in_progress" | "completed"
  >("pending");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const sampleOrders: Order[] = [
    {
      id: "ORD-001",
      fullName: "Alex Johnson",
      email: "alex.johnson@example.com",
      service: "Essay Writing",
      deadline: "2024-02-15",
      wordCount: 3000,
      academicLevel: "Undergraduate",
      subject: "Literature",
      paperType: "Research Paper",
      status: "pending",
      submittedDate: "2024-02-01",
      description:
        "Need a comprehensive essay on Shakespeare's impact on modern literature. Should include historical context and modern interpretations.",
      attachments: ["requirements.pdf"],
      price: 299,
    },
    {
      id: "ORD-002",
      fullName: "Sarah Chen",
      email: "sarah.chen@example.com",
      service: "Thesis Writing",
      deadline: "2024-03-20",
      wordCount: 10000,
      academicLevel: "Master's",
      subject: "Computer Science",
      paperType: "Thesis",
      status: "pending",
      submittedDate: "2024-02-03",
      description:
        "Machine Learning application in healthcare systems. Need comprehensive research and original insights.",
      attachments: ["outline.docx", "references.xlsx"],
      price: 899,
    },
    {
      id: "ORD-003",
      fullName: "Michael Rodriguez",
      email: "m.rodriguez@example.com",
      service: "Proofreading & Editing",
      deadline: "2024-02-10",
      wordCount: 5000,
      academicLevel: "PhD",
      subject: "Physics",
      paperType: "Journal Article",
      status: "pending",
      submittedDate: "2024-01-28",
      description:
        "Proofread and edit research paper before submission to peer-reviewed journal.",
      attachments: ["manuscript.pdf"],
      price: 199,
    },
    {
      id: "ORD-004",
      fullName: "Emily Thompson",
      email: "emily.t@example.com",
      service: "Assignment Help",
      deadline: "2024-02-08",
      wordCount: 2500,
      academicLevel: "High School",
      subject: "History",
      paperType: "Assignment",
      status: "pending",
      submittedDate: "2024-02-01",
      description:
        "Help with history assignment on World War II. Multiple sources required.",
      attachments: [],
      price: 149,
    },
    {
      id: "ORD-005",
      fullName: "David Park",
      email: "david.park@example.com",
      service: "Research Paper Writing",
      deadline: "2024-02-05",
      wordCount: 7500,
      academicLevel: "Undergraduate",
      subject: "Environmental Science",
      paperType: "Research Paper",
      status: "completed",
      submittedDate: "2024-01-20",
      description: "Completed research paper on climate change impacts.",
      attachments: ["completed_paper.pdf"],
      price: 499,
    },
    {
      id: "ORD-006",
      fullName: "Jessica Lee",
      email: "jessica.lee@example.com",
      service: "Dissertation Writing",
      deadline: "2024-01-25",
      wordCount: 15000,
      academicLevel: "PhD",
      subject: "Psychology",
      paperType: "Dissertation",
      status: "completed",
      submittedDate: "2024-01-10",
      description: "Completed PhD dissertation on behavioral psychology.",
      attachments: ["dissertation_final.pdf"],
      price: 1299,
    },
  ];

  const filteredOrders = sampleOrders.filter(
    (order) => order.status === activeStatus,
  );

  const stats = {
    pending: sampleOrders.filter((o) => o.status === "pending").length,
    in_progress: sampleOrders.filter((o) => o.status === "in_progress").length,
    completed: sampleOrders.filter((o) => o.status === "completed").length,
    total: sampleOrders.length,
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 md:ml-64 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur border-b border-white/10 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Order Management
              </h1>
              <p className="text-foreground/60 text-xs sm:text-sm mt-1">
                Manage all customer orders and view details
              </p>
            </div>
            <div className="text-right text-xs sm:text-sm">
              <p className="text-foreground/60">
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            <div className="glass p-3 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start sm:items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-foreground/70 text-xs sm:text-sm font-medium">
                    Total Orders
                  </p>
                  <h3 className="text-xl sm:text-3xl font-bold text-foreground mt-1 sm:mt-2">
                    {stats.total}
                  </h3>
                </div>
                <Package className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 opacity-50 flex-shrink-0" />
              </div>
            </div>
            <div className="glass p-3 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:bg-white/10">
              <div className="flex items-start sm:items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-foreground/70 text-xs sm:text-sm font-medium">
                    Pending Orders
                  </p>
                  <h3 className="text-xl sm:text-3xl font-bold text-orange-400 mt-1 sm:mt-2">
                    {stats.pending}
                  </h3>
                </div>
                <Package className="w-6 sm:w-8 h-6 sm:h-8 text-orange-400 opacity-50 flex-shrink-0" />
              </div>
            </div>
            <div className="glass p-3 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:bg-white/10">
              <div className="flex items-start sm:items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-foreground/70 text-xs sm:text-sm font-medium">
                    In Progress
                  </p>
                  <h3 className="text-xl sm:text-3xl font-bold text-yellow-400 mt-1 sm:mt-2">
                    {stats.in_progress}
                  </h3>
                </div>
                <Package className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 opacity-50 flex-shrink-0" />
              </div>
            </div>
            <div className="glass p-3 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start sm:items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-foreground/70 text-xs sm:text-sm font-medium">
                    Completed
                  </p>
                  <h3 className="text-xl sm:text-3xl font-bold text-green-400 mt-1 sm:mt-2">
                    {stats.completed}
                  </h3>
                </div>
                <Package className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 opacity-50 flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Orders Section */}
          <div className="glass rounded-2xl border border-white/10 overflow-hidden">
            {/* Tabs */}
            <OrderStatusTabs
              activeStatus={activeStatus}
              onStatusChange={setActiveStatus}
              stats={stats}
            />

            {/* Orders List */}
            {selectedOrder ? (
              <OrderDetail
                order={selectedOrder}
                onBack={() => setSelectedOrder(null)}
              />
            ) : (
              <OrdersList
                orders={filteredOrders}
                onSelectOrder={setSelectedOrder}
                status={activeStatus}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
