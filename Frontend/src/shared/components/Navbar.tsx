import { GraduationCap } from "lucide-react";

interface NavbarProps {
  activeTab: "facultades" | "carreras";
  onTabChange: (tab: "facultades" | "carreras") => void;
}

export const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <GraduationCap size={32} />
            <span className="text-xl font-bold">Sistema de Matrículas</span>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => onTabChange("facultades")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === "facultades" ? "bg-blue-700" : "hover:bg-blue-500"
              }`}
            >
              Facultades
            </button>
            <button
              onClick={() => onTabChange("carreras")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === "carreras" ? "bg-blue-700" : "hover:bg-blue-500"
              }`}
            >
              Carreras
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
