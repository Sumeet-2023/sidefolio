import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sumeet Mourya - Developer",
  description:
    "Sumeet Mourya is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-950"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pb-1 lg:pt-2 bg-gray-950 flex-1 overflow-y-auto">
          <div className="flex-1 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 min-h-screen lg:rounded-bl-xl lg:rounded-tl-xl border border-transparent lg:border-gray-700 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
