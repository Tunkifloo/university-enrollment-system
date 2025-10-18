import { useState } from "react";
import { Layout } from "./shared/components/Layout";
import { FacultadesPage } from "./features/facultades/FacultadesPage";
import { CarrerasPage } from "./features/carreras/CarrerasPage";

function App() {
  const [activeTab, setActiveTab] = useState<"facultades" | "carreras">(
    "facultades"
  );

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === "facultades" ? <FacultadesPage /> : <CarrerasPage />}
    </Layout>
  );
}

export default App;
