import { useEffect } from "react";
import { useCarrerasStore } from "../store/carreraStore";

export const useCarreras = () => {
  const { carreras, loading, error, fetchCarreras } = useCarrerasStore();

  useEffect(() => {
    fetchCarreras();
  }, [fetchCarreras]);

  return { carreras, loading, error };
};
