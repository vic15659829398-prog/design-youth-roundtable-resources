import type { Metadata } from "next";
import "./globals.css";
import WebMcpTools from "@/components/webmcp-tools";

export const metadata: Metadata = {
  title: "设计青年资源共建计划",
  description: "设计青年圆桌派资源收集与内部跟进系统",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased"><WebMcpTools />{children}</body>
    </html>
  );
}
