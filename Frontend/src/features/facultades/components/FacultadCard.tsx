import { Pencil, Trash2, MapPin, User, BookOpen } from "lucide-react";
import type { Facultad } from "../../../shared/types";
import { Card } from "../../../shared/components/Card";

interface FacultadCardProps {
  facultad: Facultad;
  onEdit: (facultad: Facultad) => void;
  onDelete: (id: number) => void;
}

export const FacultadCard = ({
  facultad,
  onEdit,
  onDelete,
}: FacultadCardProps) => {
  return (
    <Card>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{facultad.nombre}</h3>
          <span
            className={`inline-block px-2 py-1 rounded text-xs mt-2 ${
              facultad.activo
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {facultad.activo ? "Activa" : "Inactiva"}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(facultad)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Pencil size={20} />
          </button>
          <button
            onClick={() => onDelete(facultad.facultadId)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      {facultad.descripcion && (
        <p className="text-gray-600 mb-4">{facultad.descripcion}</p>
      )}

      <div className="space-y-2 text-sm text-gray-700">
        {facultad.ubicacion && (
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-400" />
            <span>{facultad.ubicacion}</span>
          </div>
        )}
        {facultad.decano && (
          <div className="flex items-center gap-2">
            <User size={16} className="text-gray-400" />
            <span>{facultad.decano}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <BookOpen size={16} className="text-gray-400" />
          <span>{facultad.cantidadCarreras} carrera(s)</span>
        </div>
      </div>
    </Card>
  );
};
