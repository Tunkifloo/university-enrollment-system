import { useState, useEffect } from "react";
import type { Carrera } from "../../../shared/types";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";
import { useCarrerasStore } from "../store/carreraStore";
import { useFacultadStore } from "../../facultades/store/facultadStore";

interface CarreraFormProps {
  carrera?: Carrera;
  onClose: () => void;
}

export const CarreraForm = ({ carrera, onClose }: CarreraFormProps) => {
  const { createCarrera, updateCarrera } = useCarrerasStore();
  const { facultades, fetchFacultades } = useFacultadStore();

  const [formData, setFormData] = useState({
    facultadId: 0,
    nombre: "",
    descripcion: "",
    duracionSemestres: 10,
    tituloOtorgado: "",
    activo: true,
  });

  useEffect(() => {
    fetchFacultades();
  }, [fetchFacultades]);

  useEffect(() => {
    if (carrera) {
      setFormData({
        facultadId: carrera.facultadId,
        nombre: carrera.nombre,
        descripcion: carrera.descripcion || "",
        duracionSemestres: carrera.duracionSemestres,
        tituloOtorgado: carrera.tituloOtorgado || "",
        activo: carrera.activo,
      });
    }
  }, [carrera]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (carrera) {
        await updateCarrera(carrera.carreraId, formData);
      } else {
        await createCarrera(formData);
      }
      onClose();
    } catch (error) {
      console.error("Error al guardar carrera:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Facultad <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.facultadId}
          onChange={(e) =>
            setFormData({ ...formData, facultadId: Number(e.target.value) })
          }
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={0}>Seleccione una facultad</option>
          {facultades
            .filter((f) => f.activo)
            .map((facultad) => (
              <option key={facultad.facultadId} value={facultad.facultadId}>
                {facultad.nombre}
              </option>
            ))}
        </select>
      </div>

      <Input
        label="Nombre"
        value={formData.nombre}
        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        placeholder="Ej: Ingeniería de Sistemas"
        required
      />

      <Input
        label="Descripción"
        value={formData.descripcion}
        onChange={(e) =>
          setFormData({ ...formData, descripcion: e.target.value })
        }
        placeholder="Descripción de la carrera"
        multiline
      />

      <Input
        label="Duración (semestres)"
        type="number"
        value={formData.duracionSemestres}
        onChange={(e) =>
          setFormData({
            ...formData,
            duracionSemestres: Number(e.target.value),
          })
        }
        required
      />

      <Input
        label="Título Otorgado"
        value={formData.tituloOtorgado}
        onChange={(e) =>
          setFormData({ ...formData, tituloOtorgado: e.target.value })
        }
        placeholder="Ej: Ingeniero de Sistemas"
      />

      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.activo}
            onChange={(e) =>
              setFormData({ ...formData, activo: e.target.checked })
            }
            className="w-4 h-4 text-blue-600"
          />
          <span className="text-sm font-medium text-gray-700">Activo</span>
        </label>
      </div>

      <div className="flex gap-3 justify-end">
        <Button variant="secondary" onClick={onClose} type="button">
          Cancelar
        </Button>
        <Button type="submit">
          {carrera ? "Actualizar" : "Crear"} Carrera
        </Button>
      </div>
    </form>
  );
};
