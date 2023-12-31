import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import { Provider } from "../../utils/Provider";
import Footer from "../../components/Footer";
import ScrollAnim from "@/src/components/ScrollAnim";
import React from "react";


const firaCode = Nunito({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Giri Dev",
  description: "A blogging website by Ritik, Giri Dev",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon.ico?v=4"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body
        className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}
      >
        <Provider>
        
          <Navbar />
          <main className="h-full mx-auto max-w-5xl px-6">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
