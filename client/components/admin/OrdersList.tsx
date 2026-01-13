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
      <div className="p-12 text-center">
        <FileText className="w-12 h-12 text-foreground/30 mx-auto mb-4" />
        <p className="text-foreground/60">No {status} orders at the moment.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left px-6 py-4 text-foreground/70 font-semibold text-sm">Order ID</th>
            <th className="text-left px-6 py-4 text-foreground/70 font-semibold text-sm">Customer</th>
            <th className="text-left px-6 py-4 text-foreground/70 font-semibold text-sm">Service</th>
            <th className="text-left px-6 py-4 text-foreground/70 font-semibold text-sm">Deadline</th>
            <th className="text-left px-6 py-4 text-foreground/70 font-semibold text-sm">Words</th>
            <th className="text-left px-6 py-4 text-foreground/70 font-semibold text-sm">Price</th>
            <th className="text-left px-6 py-4 text-foreground/70 font-semibold text-sm">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="hover:bg-white/5 transition-colors group"
            >
              <td className="px-6 py-4 text-foreground font-mono text-sm font-semibold">
                {order.id}
              </td>
              <td className="px-6 py-4">
                <div>
                  <p className="text-foreground font-medium">{order.fullName}</p>
                  <p className="text-foreground/50 text-xs">{order.email}</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getServiceColor(
                    order.service
                  )} text-white`}
                >
                  {order.service}
                </span>
              </td>
              <td className="px-6 py-4 text-foreground/70 text-sm flex items-center gap-2">
                <Calendar size={16} className="text-foreground/50" />
                {new Date(order.deadline).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-foreground font-medium text-sm">
                {order.wordCount.toLocaleString()}
              </td>
              <td className="px-6 py-4 text-foreground font-semibold text-sm">
                ${order.price}
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onSelectOrder(order)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:border-cyan-500/30"
                >
                  <Eye size={16} />
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
