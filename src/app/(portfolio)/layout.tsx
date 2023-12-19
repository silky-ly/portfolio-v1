"use client";

import Cursor from "@/components/ui/Cursor";
import { Footer, Intro, Navbar } from "./_components";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="app">
      {/* <Intro /> */}
      <div className="app-layout">
        <Navbar />

        <div className="app-content">
          <Cursor />
          <div className="">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
