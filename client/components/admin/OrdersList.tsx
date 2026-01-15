"use client";

import { useState } from "react";
import { Order } from "@/app/admin/orders/page";
import { ChevronDown, Download } from "lucide-react";
import { updateOrderStatus } from "@/lib/orderStorage";
import React from "react";

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
    <div className="overflow-x-auto">
      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left px-4 py-5 text-foreground/70 text-xs font-semibold uppercase tracking-wide">Order ID</th>
            <th className="text-left px-4 py-5 text-foreground/70 text-xs font-semibold uppercase tracking-wide">Customer Name</th>
            <th className="text-left px-4 py-5 text-foreground/70 text-xs font-semibold uppercase tracking-wide">Service Type</th>
            <th className="text-left px-4 py-5 text-foreground/70 text-xs font-semibold uppercase tracking-wide">Word Count</th>
            <th className="text-left px-4 py-5 text-foreground/70 text-xs font-semibold uppercase tracking-wide">Budget</th>
            <th className="text-left px-4 py-5 text-foreground/70 text-xs font-semibold uppercase tracking-wide">Deadline</th>
            <th className="text-left px-4 py-5 text-foreground/70 text-xs font-semibold uppercase tracking-wide">Status</th>
            <th className="text-center px-4 py-5 text-foreground/70 text-xs font-semibold uppercase tracking-wide">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const isExpanded = expandedOrderId === order.id;

            return (
              <React.Fragment key={order.id}>
                {/* Main Row */}
                <tr
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${
                    isExpanded ? "bg-white/5" : ""
                  }`}
                >
                  <td className="px-4 py-4 text-foreground font-mono text-sm">#{order.id.split("-").pop()}</td>
                  <td className="px-4 py-4 text-foreground text-sm">{order.fullName}</td>
                  <td className="px-4 py-4 text-foreground/80 text-sm">{order.service}</td>
                  <td className="px-4 py-4 text-foreground/80 text-sm">{order.wordCount.toLocaleString()}</td>
                  <td className="px-4 py-4 text-foreground text-sm">${order.price}</td>
                  <td className="px-4 py-4 text-foreground/80 text-sm">
                    {new Date(order.deadline).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "pending"
                          ? "bg-green-500/20 text-green-400"
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
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => toggleExpand(order.id)}
                      className="text-foreground/60 hover:text-foreground/80 transition-colors inline-flex items-center justify-center"
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  </td>
                </tr>

                {/* Expanded Details Row */}
                {isExpanded && (
                  <tr className="border-b border-white/10 bg-white/5">
                    <td colSpan={8} className="px-6 py-8">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <h3 className="text-lg font-semibold text-foreground">Order Details</h3>
                          <span className="text-xs font-medium text-foreground/60">
                            Order ID: {order.id}
                          </span>
                        </div>

                        {/* Customer Information Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wide mb-2">
                              Full Name
                            </p>
                            <p className="text-foreground text-sm font-medium">
                              {order.fullName}
                            </p>
                          </div>
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wide mb-2">
                              Email Address
                            </p>
                            <p className="text-foreground text-sm break-all">
                              {order.email}
                            </p>
                          </div>
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wide mb-2">
                              WhatsApp Number
                            </p>
                            <p className="text-foreground text-sm">
                              +1 (555) 000-0000
                            </p>
                          </div>
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wide mb-2">
                              Academic Level
                            </p>
                            <p className="text-foreground text-sm">
                              {order.academicLevel}
                            </p>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-white/10"></div>

                        {/* Service Information Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wide mb-2">
                              Service Type
                            </p>
                            <p className="text-foreground text-sm font-medium">
                              {order.service}
                            </p>
                          </div>
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wide mb-2">
                              Subject/Topic
                            </p>
                            <p className="text-foreground text-sm">
                              {order.subject}
                            </p>
                          </div>
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wide mb-2">
                              Word Count
                            </p>
                            <p className="text-foreground text-sm font-medium">
                              {order.wordCount.toLocaleString()} words
                            </p>
                          </div>
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wide mb-2">
                              Budget
                            </p>
                            <p className="text-foreground text-sm font-medium text-cyan-400">
                              ${order.price}
                            </p>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-white/10"></div>

                        {/* Assignment Details Section */}
                        <div>
                          <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wide mb-3">
                            Assignment Details
                          </p>
                          <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                            <p className="text-foreground/80 text-sm leading-relaxed">
                              {order.description}
                            </p>
                          </div>
                        </div>

                        {/* Attachments Section */}
                        {order.attachments && order.attachments.length > 0 && (
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wide mb-3">
                              Attached Files
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {order.attachments.map((file, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group"
                                >
                                  <span className="text-foreground text-sm truncate flex-1">
                                    {file}
                                  </span>
                                  <a
                                    href={`data:application/octet-stream;base64,${btoa('Sample file content')}`}
                                    download={file}
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors p-1.5 flex-shrink-0 group-hover:bg-white/5 rounded"
                                    title="Download file"
                                  >
                                    <Download size={16} />
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Action Buttons - Only for Pending Orders */}
                        {status === "pending" && (
                          <div className="border-t border-white/10 pt-6 flex gap-3 justify-end">
                            <button
                              onClick={() => handleApprove(order.id)}
                              className="px-6 py-2.5 rounded-lg bg-green-600 text-white font-medium text-sm hover:bg-green-700 transition-all shadow-lg hover:shadow-green-600/50"
                            >
                              ✓ Approve Order
                            </button>
                            <button
                              onClick={() => handleReject(order.id)}
                              className="px-6 py-2.5 rounded-lg border border-red-500/50 text-red-400 font-medium text-sm hover:bg-red-500/10 hover:border-red-500/80 transition-all"
                            >
                              ✕ Reject Order
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
