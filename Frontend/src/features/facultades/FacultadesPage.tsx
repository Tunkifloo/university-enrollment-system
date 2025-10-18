import { useState } from "react";
import { Plus } from "lucide-react";
import { useFacultades } from "./hooks/useFacultades";
import { useFacultadStore } from "./store/facultadStore";
import { FacultadList } from "./components/FacultadList";
import { FacultadForm } from "./components/FacultadForm";
import { Modal } from "../../shared/components/Modal";
import { Button } from "../../shared/components/Button";
import type { Facultad } from "../../shared/types";

export const FacultadesPage = () => {
  const { facultades, loading } = useFacultades();
  const { deleteFacultad } = useFacultadStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFacultad, setSelectedFacultad] = useState<
    Facultad | undefined
  >();

  const handleEdit = (facultad: Facultad) => {
    setSelectedFacultad(facultad);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setSelectedFacultad(undefined);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("¿Estás seguro de eliminar esta facultad?")) {
      await deleteFacultad(id);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFacultad(undefined);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Facultades</h1>
        <Button onClick={handleCreate}>
          <Plus size={20} className="mr-2" />
          Nueva Facultad
        </Button>
      </div>

      <FacultadList
        facultades={facultades}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedFacultad ? "Editar Facultad" : "Nueva Facultad"}
      >
        <FacultadForm facultad={selectedFacultad} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};
