"use client";

import { useState } from "react";
import { Order } from "@/app/admin/orders/page";
import { ChevronDown, Download } from "lucide-react";
import { updateOrderStatus } from "@/lib/orderStorage";

interface OrdersListProps {
  orders: Order[];
  status: "pending" | "in_progress" | "completed";
  onStatusChange?: (orderId: string, status: "pending" | "in_progress" | "completed") => void;
}

export function OrdersList({ orders, status, onStatusChange }: OrdersListProps) {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const toggleExpand = (orderId: string) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const handleApprove = (orderId: string) => {
    updateOrderStatus(orderId, "in_progress");
    onStatusChange?.(orderId, "in_progress");
    setExpandedOrderId(null);
  };

  const handleReject = (orderId: string) => {
    setExpandedOrderId(null);
  };

  if (orders.length === 0) {
    return (
      <div className="p-8 sm:p-12 text-center">
        <p className="text-foreground/60 text-sm sm:text-base">
          No orders in this status.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      {/* Table Header */}
      <div className="hidden lg:grid grid-cols-8 gap-4 items-center text-xs font-semibold text-foreground/60 pb-4 mb-4 border-b border-white/10 px-4">
        <div>Order ID</div>
        <div>Customer Name</div>
        <div>Service Type</div>
        <div>Word Count</div>
        <div>Budget</div>
        <div>Deadline</div>
        <div>Status</div>
        <div className="text-right">Action</div>
      </div>

      {/* Orders List */}
      <div className="space-y-2">
        {orders.map((order) => {
          const isExpanded = expandedOrderId === order.id;

          return (
            <div key={order.id} className="border-b border-white/10 last:border-b-0">
              {/* Collapsible Row */}
              <button
                onClick={() => toggleExpand(order.id)}
                className="w-full text-left hover:bg-white/5 transition-colors p-4 sm:p-4"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 items-center text-xs sm:text-sm">
                  <div className="font-mono font-semibold text-foreground truncate">
                    {order.id}
                  </div>
                  <div className="text-foreground truncate hidden sm:block">
                    {order.fullName}
                  </div>
                  <div className="text-foreground/70 truncate hidden lg:block text-xs">
                    {order.service}
                  </div>
                  <div className="text-foreground/70 hidden lg:block">
                    {(order.wordCount / 1000).toFixed(1)}k
                  </div>
                  <div className="text-foreground hidden lg:block">
                    ${order.price}
                  </div>
                  <div className="text-foreground/70 hidden lg:block text-xs">
                    {new Date(order.deadline).toLocaleDateString()}
                  </div>
                  <div className="flex items-center justify-between lg:justify-start">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        order.status === "pending"
                          ? "bg-orange-500/20 text-orange-400"
                          : order.status === "in_progress"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {order.status === "pending"
                        ? "Pending"
                        : order.status === "in_progress"
                          ? "In Progress"
                          : "Completed"}
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <ChevronDown
                      size={18}
                      className={`text-foreground/60 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
              </button>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="bg-white/5 border-t border-white/10 p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Customer Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div>
                      <p className="text-foreground/60 text-xs font-semibold mb-2">
                        Full Name:
                      </p>
                      <p className="text-foreground font-medium text-sm">
                        {order.fullName}
                      </p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-xs font-semibold mb-2">
                        Email Address:
                      </p>
                      <p className="text-foreground text-sm">
                        {order.email}
                      </p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-xs font-semibold mb-2">
                        WhatsApp Number (Optional):
                      </p>
                      <p className="text-foreground text-sm">
                        +1 (555) 000-0000
                      </p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-xs font-semibold mb-2">
                        Academic Level:
                      </p>
                      <p className="text-foreground text-sm">
                        {order.academicLevel}
                      </p>
                    </div>
                  </div>

                  {/* Assignment Details */}
                  <div className="mb-6">
                    <p className="text-foreground/60 text-xs font-semibold mb-2">
                      Service Type
                    </p>
                    <p className="text-foreground text-sm mb-4">
                      {order.service}
                    </p>
                    <p className="text-foreground/60 text-xs font-semibold mb-2">
                      Assignment Details
                    </p>
                    <p className="text-foreground/80 text-sm leading-relaxed bg-white/5 p-3 rounded-lg">
                      {order.description}
                    </p>
                  </div>

                  {/* Attachments */}
                  {order.attachments && order.attachments.length > 0 && (
                    <div className="mb-6">
                      <p className="text-foreground/60 text-xs font-semibold mb-3">
                        Attached Files
                      </p>
                      <div className="space-y-2">
                        {order.attachments.map((file, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 text-sm"
                          >
                            <span className="text-foreground truncate">
                              {file}
                            </span>
                            <button className="text-cyan-400 hover:text-cyan-300 transition-colors p-1 flex-shrink-0">
                              <Download size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons - Only for Pending Orders */}
                  {status === "pending" && (
                    <div className="flex gap-4 justify-center">
                      <button
                        onClick={() => handleApprove(order.id)}
                        className="px-8 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-all"
                      >
                        Approve Order
                      </button>
                      <button
                        onClick={() => handleReject(order.id)}
                        className="px-8 py-2.5 rounded-lg border border-red-500/50 text-red-400 font-medium text-sm hover:bg-red-500/10 transition-all"
                      >
                        Reject Order
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
