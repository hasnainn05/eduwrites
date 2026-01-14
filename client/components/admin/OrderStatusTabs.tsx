"use client";

import { CheckCircle, Clock, Package } from "lucide-react";

interface OrderStatusTabsProps {
  activeStatus: "pending" | "in_progress" | "completed";
  onStatusChange: (status: "pending" | "in_progress" | "completed") => void;
  stats: {
    pending: number;
    in_progress: number;
    completed: number;
  };
}

export function OrderStatusTabs({
  activeStatus,
  onStatusChange,
  stats,
}: OrderStatusTabsProps) {
  const tabs = [
    {
      id: "pending",
      label: "Pending Orders",
      icon: Package,
      count: stats.pending,
      color: "text-orange-400",
      borderColor: "border-orange-400",
    },
    {
      id: "in_progress",
      label: "In Progress",
      icon: Clock,
      count: stats.in_progress,
      color: "text-yellow-400",
      borderColor: "border-yellow-400",
    },
    {
      id: "completed",
      label: "Completed",
      icon: CheckCircle,
      count: stats.completed,
      color: "text-green-400",
      borderColor: "border-green-400",
    },
  ];

  return (
    <div className="border-b border-white/10">
      <div className="flex items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeStatus === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() =>
                onStatusChange(
                  tab.id as "pending" | "in_progress" | "completed",
                )
              }
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-4 sm:py-5 border-b-2 transition-all text-sm sm:text-base font-medium whitespace-nowrap ${
                isActive
                  ? `${tab.borderColor} ${tab.color}`
                  : "border-b-transparent text-foreground/60 hover:text-foreground/80"
              }`}
            >
              <Icon
                size={18}
                className={isActive ? tab.color : "text-foreground/50"}
              />
              <span>{tab.label}</span>
              <span
                className={`ml-1 px-2 py-0.5 rounded text-xs font-semibold ${
                  isActive
                    ? `${tab.color} bg-white/10`
                    : "bg-white/5 text-foreground/50"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
