import { Pencil, Trash2, Calendar, Award } from "lucide-react";
import type { Carrera } from "../../../shared/types";
import { Card } from "../../../shared/components/Card";

interface CarreraCardProps {
  carrera: Carrera;
  onEdit: (carrera: Carrera) => void;
  onDelete: (id: number) => void;
}

export const CarreraCard = ({
  carrera,
  onEdit,
  onDelete,
}: CarreraCardProps) => {
  return (
    <Card>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{carrera.nombre}</h3>
          <p className="text-sm text-gray-500 mt-1">{carrera.nombreFacultad}</p>
          <span
            className={`inline-block px-2 py-1 rounded text-xs mt-2 ${
              carrera.activo
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {carrera.activo ? "Activa" : "Inactiva"}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(carrera)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Pencil size={20} />
          </button>
          <button
            onClick={() => onDelete(carrera.carreraId)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      {carrera.descripcion && (
        <p className="text-gray-600 mb-4">{carrera.descripcion}</p>
      )}

      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-gray-400" />
          <span>{carrera.duracionSemestres} semestres</span>
        </div>
        {carrera.tituloOtorgado && (
          <div className="flex items-center gap-2">
            <Award size={16} className="text-gray-400" />
            <span>{carrera.tituloOtorgado}</span>
          </div>
        )}
      </div>
    </Card>
  );
};
