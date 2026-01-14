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
  const [allOrders, setAllOrders] = useState<Order[]>([]);

  useEffect(() => {
    const orders = getOrders();
    setAllOrders(orders);
  }, []);

  const handleStatusChange = (
    orderId: string,
    newStatus: "pending" | "in_progress" | "completed",
  ) => {
    const updatedOrders = allOrders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order,
    );
    setAllOrders(updatedOrders);
    setSelectedOrder(null);
  };

  const filteredOrders = allOrders.filter(
    (order) => order.status === activeStatus,
  );

  const stats = {
    pending: allOrders.filter((o) => o.status === "pending").length,
    in_progress: allOrders.filter((o) => o.status === "in_progress").length,
    completed: allOrders.filter((o) => o.status === "completed").length,
    total: allOrders.length,
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
