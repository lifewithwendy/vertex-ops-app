import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertex Ops | Dashboard",
  description: "Operations dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
