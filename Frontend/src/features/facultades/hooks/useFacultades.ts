import { useEffect } from "react";
import { useFacultadStore } from "../store/facultadStore";

export const useFacultades = () => {
  const { facultades, loading, error, fetchFacultades } = useFacultadStore();

  useEffect(() => {
    fetchFacultades();
  }, [fetchFacultades]);

  return { facultades, loading, error };
};
