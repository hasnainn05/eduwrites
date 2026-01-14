"use client";

import { useState } from "react";
import { Order } from "@/app/admin/orders/page";
import { ChevronDown } from "lucide-react";
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
            <th className="text-left px-4 py-4 text-foreground/70 text-sm font-semibold">Order ID</th>
            <th className="text-left px-4 py-4 text-foreground/70 text-sm font-semibold">Customer Name</th>
            <th className="text-left px-4 py-4 text-foreground/70 text-sm font-semibold">Service Type</th>
            <th className="text-left px-4 py-4 text-foreground/70 text-sm font-semibold">Word Count</th>
            <th className="text-left px-4 py-4 text-foreground/70 text-sm font-semibold">Budget</th>
            <th className="text-left px-4 py-4 text-foreground/70 text-sm font-semibold">Deadline</th>
            <th className="text-left px-4 py-4 text-foreground/70 text-sm font-semibold">Status</th>
            <th className="text-center px-4 py-4 text-foreground/70 text-sm font-semibold">Action</th>
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
                    <td colSpan={8} className="px-6 py-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Customer Details */}
                        <div className="space-y-4">
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold mb-1">
                              Full Name:
                            </p>
                            <p className="text-foreground text-sm font-medium">
                              {order.fullName}
                            </p>
                          </div>
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold mb-1">
                              Email Address:
                            </p>
                            <p className="text-foreground text-sm">
                              {order.email}
                            </p>
                          </div>
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold mb-1">
                              WhatsApp Number (Optional):
                            </p>
                            <p className="text-foreground text-sm">
                              +1 (555) 000-0000
                            </p>
                          </div>
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold mb-1">
                              Academic Level:
                            </p>
                            <p className="text-foreground text-sm">
                              {order.academicLevel}
                            </p>
                          </div>
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold mb-1">
                              Service Type:
                            </p>
                            <p className="text-foreground text-sm">
                              {order.service}
                            </p>
                          </div>
                          <div>
                            <p className="text-foreground/60 text-xs font-semibold mb-1">
                              Subject/Topic:
                            </p>
                            <p className="text-foreground text-sm">
                              {order.subject}
                            </p>
                          </div>
                        </div>

                        {/* Right Column - Assignment Details & Buttons */}
                        <div className="space-y-4 flex flex-col">
                          <div className="flex-1">
                            <p className="text-foreground/60 text-xs font-semibold mb-2">
                              Assignment Details:
                            </p>
                            <p className="text-foreground/80 text-sm leading-relaxed bg-white/5 p-3 rounded-lg">
                              {order.description}
                            </p>
                          </div>

                          {/* Attachments */}
                          {order.attachments && order.attachments.length > 0 && (
                            <div>
                              <p className="text-foreground/60 text-xs font-semibold mb-2">
                                Attached Files:
                              </p>
                              <div className="space-y-2">
                                {order.attachments.map((file, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-between p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10"
                                  >
                                    <span className="text-foreground text-sm truncate">
                                      {file}
                                    </span>
                                    <a
                                      href={`data:application/octet-stream;base64,${btoa('Sample file content')}`}
                                      download={file}
                                      className="text-cyan-400 hover:text-cyan-300 transition-colors p-1 flex-shrink-0"
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
                            <div className="flex gap-3 justify-end pt-4">
                              <button
                                onClick={() => handleApprove(order.id)}
                                className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-all"
                              >
                                Approve Order
                              </button>
                              <button
                                onClick={() => handleReject(order.id)}
                                className="px-6 py-2 rounded-lg border border-red-500/50 text-red-400 font-medium text-sm hover:bg-red-500/10 transition-all"
                              >
                                Reject Order
                              </button>
                            </div>
                          )}
                        </div>
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
