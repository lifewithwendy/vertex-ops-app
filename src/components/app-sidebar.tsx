"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  Package,
  PieChart,
  Settings2,
  SquareTerminal,
  Truck,
  FileText,
  Users,
  ClipboardList,
  BarChart3,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Ops Admin",
    email: "admin@vertex.com",
    avatar: "",
  },
  teams: [
    {
      name: "Vertex Logistics",
      logo: GalleryVerticalEnd,
      plan: "Operations",
    },
  ],
  navMain: [
    {
      title: "Orders",
      url: "#",
      icon: Package,
      isActive: true,
      items: [
        { title: "All Orders", url: "#" },
        { title: "Pending", url: "#" },
        { title: "Completed", url: "#" },
      ],
    },
    {
      title: "Shipments",
      url: "#",
      icon: Truck,
      items: [
        { title: "In Transit", url: "#" },
        { title: "Scheduled", url: "#" },
        { title: "Delivered", url: "#" },
      ],
    },
    {
      title: "Invoices",
      url: "#",
      icon: FileText,
      items: [
        { title: "Unpaid", url: "#" },
        { title: "Paid", url: "#" },
        { title: "Overdue", url: "#" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
