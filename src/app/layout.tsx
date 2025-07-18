import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VN Stock Advisor - Phân tích cổ phiếu Việt Nam bằng AI",
  description: "Ứng dụng phân tích cổ phiếu Việt Nam sử dụng trí tuệ nhân tạo, cung cấp phân tích kỹ thuật, cơ bản và vĩ mô để đưa ra khuyến nghị đầu tư.",
  keywords: "cổ phiếu, Việt Nam, phân tích, AI, đầu tư, chứng khoán, VN-Index, HOSE, HNX",
  openGraph: {
    title: "VN Stock Advisor",
    description: "Phân tích cổ phiếu Việt Nam bằng AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
      </body>
    </html>
  );
} 