export interface Facultad {
  facultadId: number;
  nombre: string;
  descripcion?: string;
  ubicacion?: string;
  decano?: string;
  fechaRegistro: string;
  activo: boolean;
  cantidadCarreras: number;
}

export interface Carrera {
  carreraId: number;
  facultadId: number;
  nombreFacultad: string;
  nombre: string;
  descripcion?: string;
  duracionSemestres: number;
  tituloOtorgado?: string;
  fechaRegistro: string;
  activo: boolean;
}
