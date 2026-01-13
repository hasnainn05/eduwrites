"use client";

import { Order } from "@/app/admin/orders/page";
import { Eye, Calendar, FileText } from "lucide-react";

interface OrdersListProps {
  orders: Order[];
  onSelectOrder: (order: Order) => void;
  status: "new" | "pending" | "completed";
}

export function OrdersList({ orders, onSelectOrder, status }: OrdersListProps) {
  const getStatusColor = (statusType: string) => {
    switch (statusType) {
      case "new":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-white/10 text-foreground/70 border-white/20";
    }
  };

  const getServiceColor = (service: string) => {
    const colors: { [key: string]: string } = {
      "Essay Writing": "from-blue-500 to-cyan-500",
      "Research Paper Writing": "from-purple-500 to-pink-500",
      "Thesis Writing": "from-indigo-500 to-blue-500",
      "Dissertation Writing": "from-violet-500 to-purple-500",
      "Assignment Help": "from-green-500 to-emerald-500",
      "Proofreading & Editing": "from-amber-500 to-orange-500",
    };
    return colors[service] || "from-slate-500 to-slate-600";
  };

  if (orders.length === 0) {
    return (
      <div className="p-8 sm:p-12 text-center">
        <FileText className="w-10 sm:w-12 h-10 sm:h-12 text-foreground/30 mx-auto mb-4" />
        <p className="text-foreground/60 text-sm sm:text-base">
          No {status} orders at the moment.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Mobile: Card View */}
      <div className="md:hidden space-y-3 p-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="glass p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-foreground font-mono text-xs font-semibold">
                    {order.id}
                  </p>
                  <p className="text-foreground font-medium text-sm mt-1">
                    {order.fullName}
                  </p>
                  <p className="text-foreground/50 text-xs truncate">
                    {order.email}
                  </p>
                </div>
                <button
                  onClick={() => onSelectOrder(order)}
                  className="px-2 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-cyan-400 hover:text-cyan-300 text-xs font-medium flex-shrink-0"
                >
                  View
                </button>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${getServiceColor(
                    order.service,
                  )} text-white`}
                >
                  {order.service}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-foreground/60">Deadline</p>
                  <p className="text-foreground font-medium">
                    {new Date(order.deadline).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-foreground/60">Words</p>
                  <p className="text-foreground font-medium">
                    {(order.wordCount / 1000).toFixed(1)}k
                  </p>
                </div>
                <div>
                  <p className="text-foreground/60">Price</p>
                  <p className="text-cyan-400 font-semibold">${order.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left px-4 lg:px-6 py-4 text-foreground/70 font-semibold text-sm">
                Order ID
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-foreground/70 font-semibold text-sm">
                Customer
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-foreground/70 font-semibold text-sm">
                Service
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-foreground/70 font-semibold text-sm">
                Deadline
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-foreground/70 font-semibold text-sm">
                Words
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-foreground/70 font-semibold text-sm">
                Price
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-foreground/70 font-semibold text-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-white/5 transition-colors group text-sm"
              >
                <td className="px-4 lg:px-6 py-4 text-foreground font-mono text-xs lg:text-sm font-semibold">
                  {order.id}
                </td>
                <td className="px-4 lg:px-6 py-4">
                  <div>
                    <p className="text-foreground font-medium text-sm">
                      {order.fullName}
                    </p>
                    <p className="text-foreground/50 text-xs">{order.email}</p>
                  </div>
                </td>
                <td className="px-4 lg:px-6 py-4">
                  <span
                    className={`inline-block px-2 lg:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getServiceColor(
                      order.service,
                    )} text-white`}
                  >
                    {order.service}
                  </span>
                </td>
                <td className="px-4 lg:px-6 py-4 text-foreground/70 text-xs lg:text-sm flex items-center gap-2">
                  <Calendar
                    size={14}
                    className="text-foreground/50 flex-shrink-0"
                  />
                  {new Date(order.deadline).toLocaleDateString()}
                </td>
                <td className="px-4 lg:px-6 py-4 text-foreground font-medium text-xs lg:text-sm">
                  {(order.wordCount / 1000).toFixed(1)}k
                </td>
                <td className="px-4 lg:px-6 py-4 text-foreground font-semibold text-xs lg:text-sm">
                  ${order.price}
                </td>
                <td className="px-4 lg:px-6 py-4">
                  <button
                    onClick={() => onSelectOrder(order)}
                    className="inline-flex items-center gap-1 lg:gap-2 px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-cyan-400 hover:text-cyan-300 text-xs lg:text-sm font-medium group-hover:border-cyan-500/30 whitespace-nowrap"
                  >
                    <Eye size={14} />
                    <span className="hidden sm:inline">View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
