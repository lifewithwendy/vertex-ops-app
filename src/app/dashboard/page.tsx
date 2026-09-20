"use client";

import { useRouter } from "next/navigation";
import {
  Package,
  Truck,
  FileText,
  BarChart3,
  Users,
  Settings,
  Bell,
  TrendingUp,
  TrendingDown,
  ClipboardList,
  Activity,
  LogOut,
  ChevronRight,
  Search,
} from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const stats = [
  {
    label: "Active Orders",
    value: "1,284",
    change: "+12.5%",
    up: true,
    icon: Package,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    label: "In Transit",
    value: "348",
    change: "+4.2%",
    up: true,
    icon: Truck,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    label: "Pending Invoices",
    value: "72",
    change: "-3.1%",
    up: false,
    icon: FileText,
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    label: "Revenue (MTD)",
    value: "$284,920",
    change: "+18.7%",
    up: true,
    icon: BarChart3,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

const recentOrders = [
  { id: "ORD-9042", customer: "Apex Metals Pty Ltd", route: "SYD → MEL", status: "In Transit", statusColor: "bg-orange-100 text-orange-700" },
  { id: "ORD-9041", customer: "BlueStone Mining Co.", route: "BNE → ADL", status: "Delivered", statusColor: "bg-emerald-100 text-emerald-700" },
  { id: "ORD-9040", customer: "Pacific Freight Corp", route: "MEL → PER", status: "Processing", statusColor: "bg-blue-100 text-blue-700" },
  { id: "ORD-9039", customer: "Redline Logistics", route: "SYD → BNE", status: "Delivered", statusColor: "bg-emerald-100 text-emerald-700" },
  { id: "ORD-9038", customer: "Ironworks Industries", route: "ADL → SYD", status: "On Hold", statusColor: "bg-red-100 text-red-700" },
];

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "ops-auth=; path=/; max-age=0";
    router.push("/login");
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header right */}
          <div className="ml-auto flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-500">
              <Search className="w-4 h-4" />
            </button>
            <button className="relative p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-500">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-orange-500" />
            </button>
            <button
              onClick={handleLogout}
              id="logout-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-red-50 text-neutral-500 hover:text-red-600 transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Main content */}
        <div className="flex flex-1 flex-col gap-6 p-6">

          {/* Page heading */}
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900">
              Operations Overview
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Welcome back, Admin. Here&apos;s what&apos;s happening today.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              const TrendIcon = stat.up ? TrendingUp : TrendingDown;
              return (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className={`p-2.5 rounded-xl ${stat.bg}`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <span
                      className={`flex items-center gap-0.5 text-xs font-medium ${
                        stat.up ? "text-emerald-600" : "text-red-500"
                      }`}
                    >
                      <TrendIcon className="w-3 h-3" />
                      {stat.change}
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                    <p className="text-sm text-neutral-500 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">

            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-neutral-500" />
                  <h2 className="text-sm font-semibold text-neutral-800">Recent Orders</h2>
                </div>
                <button className="flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700 font-medium">
                  View all <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <div className="divide-y divide-neutral-50">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center px-5 py-3 hover:bg-neutral-50 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-medium text-neutral-500">{order.id}</span>
                        <span className="text-sm font-medium text-neutral-800 truncate">{order.customer}</span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-0.5">{order.route}</p>
                    </div>
                    <span className={`ml-4 px-2.5 py-0.5 rounded-full text-xs font-medium ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-neutral-100">
                <Activity className="w-4 h-4 text-neutral-500" />
                <h2 className="text-sm font-semibold text-neutral-800">Live Activity</h2>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { msg: "ORD-9042 departed SYD depot", time: "2 min ago", color: "bg-orange-400" },
                  { msg: "Invoice INV-4821 approved", time: "11 min ago", color: "bg-emerald-400" },
                  { msg: "New order from Apex Metals", time: "23 min ago", color: "bg-blue-400" },
                  { msg: "Driver assigned: J. Thompson", time: "35 min ago", color: "bg-violet-400" },
                  { msg: "ORD-9039 delivered to BNE", time: "1 hr ago", color: "bg-emerald-400" },
                  { msg: "Route optimised: MEL→PER", time: "2 hr ago", color: "bg-neutral-300" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${item.color}`} />
                    <div>
                      <p className="text-xs text-neutral-700 leading-snug">{item.msg}</p>
                      <p className="text-[10px] text-neutral-400 mt-0.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
