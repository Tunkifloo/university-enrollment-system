import type { Facultad } from "../../../shared/types";
import { FacultadCard } from "./FacultadCard";
import { Loading } from "../../../shared/components/Loading";

interface FacultadListProps {
  facultades: Facultad[];
  loading: boolean;
  onEdit: (facultad: Facultad) => void;
  onDelete: (id: number) => void;
}

export const FacultadList = ({
  facultades,
  loading,
  onEdit,
  onDelete,
}: FacultadListProps) => {
  if (loading) return <Loading />;

  if (facultades.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No hay facultades registradas</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {facultades.map((facultad) => (
        <FacultadCard
          key={facultad.facultadId}
          facultad={facultad}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
