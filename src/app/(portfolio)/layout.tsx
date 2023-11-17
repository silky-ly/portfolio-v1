import { Footer, Navbar } from "./_components";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="app">
      <div className="app-layout">
        <Navbar />

        <div className="app-content">
          <div className="">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
