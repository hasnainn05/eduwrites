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
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      hoverColor: "hover:border-orange-500/50",
    },
    {
      id: "in_progress",
      label: "In Progress",
      icon: Clock,
      count: stats.in_progress,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      hoverColor: "hover:border-yellow-500/50",
    },
    {
      id: "completed",
      label: "Completed",
      icon: CheckCircle,
      count: stats.completed,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      hoverColor: "hover:border-green-500/50",
    },
  ];

  return (
    <div className="border-b border-white/10 p-3 sm:p-6">
      <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
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
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg border transition-all text-sm sm:text-base ${
                isActive
                  ? `${tab.bgColor} ${tab.borderColor} border-opacity-100`
                  : `border-white/10 hover:border-white/20 text-foreground/70 hover:text-foreground`
              }`}
            >
              <Icon
                size={16}
                className={isActive ? tab.color : "text-foreground/50"}
              />
              <span
                className={`font-medium text-xs sm:text-sm ${isActive ? tab.color : ""}`}
              >
                {tab.label}
              </span>
              <span
                className={`ml-auto px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                  isActive
                    ? `${tab.bgColor} ${tab.color}`
                    : "bg-white/10 text-foreground/70"
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
