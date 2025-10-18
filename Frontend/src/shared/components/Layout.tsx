import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  activeTab: "facultades" | "carreras";
  onTabChange: (tab: "facultades" | "carreras") => void;
}

export const Layout = ({ children, activeTab, onTabChange }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} onTabChange={onTabChange} />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};
