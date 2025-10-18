import { useState } from "react";
import { Plus } from "lucide-react";
import { useCarreras } from "./hooks/useCarreras";
import { useCarrerasStore } from "./store/carreraStore";
import { CarreraList } from "./components/CarreraList";
import { CarreraForm } from "./components/CarreraForm";
import { Modal } from "../../shared/components/Modal";
import { Button } from "../../shared/components/Button";
import type { Carrera } from "../../shared/types";

export const CarrerasPage = () => {
  const { carreras, loading } = useCarreras();
  const { deleteCarrera } = useCarrerasStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState<Carrera | undefined>();

  const handleEdit = (carrera: Carrera) => {
    setSelectedCarrera(carrera);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setSelectedCarrera(undefined);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("¿Estás seguro de eliminar esta carrera?")) {
      await deleteCarrera(id);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCarrera(undefined);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Carreras</h1>
        <Button onClick={handleCreate}>
          <Plus size={20} className="mr-2" />
          Nueva Carrera
        </Button>
      </div>

      <CarreraList
        carreras={carreras}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedCarrera ? "Editar Carrera" : "Nueva Carrera"}
      >
        <CarreraForm carrera={selectedCarrera} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};
