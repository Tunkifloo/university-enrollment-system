import { useState, useEffect } from "react";
import type { Facultad } from "../../../shared/types";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";
import { useFacultadStore } from "../store/facultadStore";

interface FacultadFormProps {
  facultad?: Facultad;
  onClose: () => void;
}

export const FacultadForm = ({ facultad, onClose }: FacultadFormProps) => {
  const { createFacultad, updateFacultad } = useFacultadStore();

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    ubicacion: "",
    decano: "",
    activo: true,
  });

  useEffect(() => {
    if (facultad) {
      setFormData({
        nombre: facultad.nombre,
        descripcion: facultad.descripcion || "",
        ubicacion: facultad.ubicacion || "",
        decano: facultad.decano || "",
        activo: facultad.activo,
      });
    }
  }, [facultad]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (facultad) {
        await updateFacultad(facultad.facultadId, formData);
      } else {
        await createFacultad(formData);
      }
      onClose();
    } catch (error) {
      console.error("Error al guardar facultad:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        value={formData.nombre}
        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        placeholder="Ej: Facultad de Ingeniería"
        required
      />

      <Input
        label="Descripción"
        value={formData.descripcion}
        onChange={(e) =>
          setFormData({ ...formData, descripcion: e.target.value })
        }
        placeholder="Descripción de la facultad"
        multiline
      />

      <Input
        label="Ubicación"
        value={formData.ubicacion}
        onChange={(e) =>
          setFormData({ ...formData, ubicacion: e.target.value })
        }
        placeholder="Ej: Pabellón A - Campus Principal"
      />

      <Input
        label="Decano"
        value={formData.decano}
        onChange={(e) => setFormData({ ...formData, decano: e.target.value })}
        placeholder="Ej: Dr. Juan Pérez"
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
          {facultad ? "Actualizar" : "Crear"} Facultad
        </Button>
      </div>
    </form>
  );
};
