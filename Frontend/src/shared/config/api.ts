const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';

// Función helper para logging en desarrollo
const log = (message: string, data?: any) => {
  if (import.meta.env.VITE_ENABLE_LOGS === 'true') {
    console.log(`[API] ${message}`, data || '');
  }
};

// Función helper para manejar errores
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Error desconocido' }));
    throw new Error(error.message || `Error ${response.status}`);
  }
  return response.json();
};

export const api = {
  // Configuración base
  baseURL: API_BASE_URL,
  
  // Facultades
  facultades: {
    getAll: async () => {
      log('GET /facultades');
      return fetch(`${API_BASE_URL}/facultades`)
        .then(handleResponse);
    },
    
    getById: async (id: number) => {
      log(`GET /facultades/${id}`);
      return fetch(`${API_BASE_URL}/facultades/${id}`)
        .then(handleResponse);
    },
    
    create: async (data: any) => {
      log('POST /facultades', data);
      return fetch(`${API_BASE_URL}/facultades`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(handleResponse);
    },
    
    update: async (id: number, data: any) => {
      log(`PUT /facultades/${id}`, data);
      return fetch(`${API_BASE_URL}/facultades/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(handleResponse);
    },
    
    delete: async (id: number) => {
      log(`DELETE /facultades/${id}`);
      return fetch(`${API_BASE_URL}/facultades/${id}`, {
        method: 'DELETE'
      });
    }
  },
  
  // Carreras
  carreras: {
    getAll: async () => {
      log('GET /carreras');
      return fetch(`${API_BASE_URL}/carreras`)
        .then(handleResponse);
    },
    
    getById: async (id: number) => {
      log(`GET /carreras/${id}`);
      return fetch(`${API_BASE_URL}/carreras/${id}`)
        .then(handleResponse);
    },
    
    getByFacultad: async (facultadId: number) => {
      log(`GET /carreras/facultad/${facultadId}`);
      return fetch(`${API_BASE_URL}/carreras/facultad/${facultadId}`)
        .then(handleResponse);
    },
    
    create: async (data: any) => {
      log('POST /carreras', data);
      return fetch(`${API_BASE_URL}/carreras`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(handleResponse);
    },
    
    update: async (id: number, data: any) => {
      log(`PUT /carreras/${id}`, data);
      return fetch(`${API_BASE_URL}/carreras/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(handleResponse);
    },
    
    delete: async (id: number) => {
      log(`DELETE /carreras/${id}`);
      return fetch(`${API_BASE_URL}/carreras/${id}`, {
        method: 'DELETE'
      });
    }
  }
};

// Exportar información de configuración
export const config = {
  apiBaseURL: API_BASE_URL,
  appName: import.meta.env.VITE_APP_NAME || 'Sistema de Matrículas',
  appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
  appMode: import.meta.env.VITE_APP_MODE || 'development',
  enableLogs: import.meta.env.VITE_ENABLE_LOGS === 'true'
};