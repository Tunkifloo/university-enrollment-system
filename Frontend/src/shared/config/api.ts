const API_BASE_URL = 'http://localhost:8080/api/v1';

export const api = {
  // Facultades
  facultades: {
    getAll: () => fetch(`${API_BASE_URL}/facultades`).then(res => res.json()),
    getById: (id: number) => fetch(`${API_BASE_URL}/facultades/${id}`).then(res => res.json()),
    create: (data: any) => fetch(`${API_BASE_URL}/facultades`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    update: (id: number, data: any) => fetch(`${API_BASE_URL}/facultades/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    delete: (id: number) => fetch(`${API_BASE_URL}/facultades/${id}`, {
      method: 'DELETE'
    })
  },
  
  // Carreras
  carreras: {
    getAll: () => fetch(`${API_BASE_URL}/carreras`).then(res => res.json()),
    getById: (id: number) => fetch(`${API_BASE_URL}/carreras/${id}`).then(res => res.json()),
    getByFacultad: (facultadId: number) => 
      fetch(`${API_BASE_URL}/carreras/facultad/${facultadId}`).then(res => res.json()),
    create: (data: any) => fetch(`${API_BASE_URL}/carreras`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    update: (id: number, data: any) => fetch(`${API_BASE_URL}/carreras/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    delete: (id: number) => fetch(`${API_BASE_URL}/carreras/${id}`, {
      method: 'DELETE'
    })
  }
};