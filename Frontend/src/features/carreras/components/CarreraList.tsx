import type { Carrera } from "../../../shared/types";
import { CarreraCard } from "./CarreraCard";
import { Loading } from "../../../shared/components/Loading";

interface CarreraListProps {
  carreras: Carrera[];
  loading: boolean;
  onEdit: (carrera: Carrera) => void;
  onDelete: (id: number) => void;
}

export const CarreraList = ({
  carreras,
  loading,
  onEdit,
  onDelete,
}: CarreraListProps) => {
  if (loading) return <Loading />;

  if (carreras.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No hay carreras registradas</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {carreras.map((carrera) => (
        <CarreraCard
          key={carrera.carreraId}
          carrera={carrera}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
