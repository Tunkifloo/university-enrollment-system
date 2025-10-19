# Sistema de Matrículas Universitarias

Sistema full-stack para la gestión de matrículas académicas en instituciones de educación superior.

## Descripción

Aplicación web que permite gestionar facultades y carreras universitarias con una interfaz intuitiva y una API RESTful documentada.

## Tecnologías

**Backend:** Java 17, Spring Boot 3.5.6, PostgreSQL 16, Maven, Flyway, MapStruct

**Frontend:** React 19, TypeScript, Vite, Zustand, Tailwind CSS

**DevOps:** Docker, Docker Compose

## Pre-requisitos

### Opción 1: Docker (Recomendado)

- Docker Desktop 20.10+
- Docker Compose 2.0+

### Opción 2: Instalación Local

- Java JDK 17+, Maven 3.8+
- Node.js 18+, npm 9+
- PostgreSQL 16+

## Inicio Rápido con Docker

### 1. Clonar el repositorio
```bash
git clone https://github.com/Tunkifloo/university-enrollment-system.git
cd university-enrollment-system
```

### 2. Configurar variables de entorno

Copia el archivo `.env.example` a `.env` y ajusta los valores si es necesario.

### 3. Levantar todos los servicios

```bash
docker-compose up -d
```

### 4. Acceder a la aplicación

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8080/api/v1`
- Swagger UI: `http://localhost:8080/api/v1/swagger-ui.html`

**Comandos útiles:**

```bash
docker-compose logs -f              # Ver logs
docker-compose down                 # Detener servicios
docker-compose up -d --build        # Reconstruir y levantar
```

## Instalación Local

### 1. Base de Datos

Instalar PostgreSQL y crear la base de datos:
```bash
```sql
CREATE DATABASE matriculas_db;
```

### 2. Backend

```bash
cd Backend/API-matriculas
mvn clean install
mvn spring-boot:run
```

Disponible en: `http://localhost:8080/api/v1`

### 3. Frontend

```bash
cd Frontend
npm install
npm run dev
```

Disponible en: `http://localhost:5173`

## Endpoints de la API

### Facultades

**Base URL:** `http://localhost:8080/api/v1`

| Recurso | Métodos | Endpoints |
|---------|---------|-----------|
| Facultades | GET, POST, PUT, DELETE | `/facultades`, `/facultades/{id}` |
| Carreras | GET, POST, PUT, DELETE | `/carreras`, `/carreras/{id}`, `/carreras/facultad/{id}` |

**Documentación interactiva:** `http://localhost:8080/api/v1/swagger-ui.html`

## Estructura del Proyecto

```text
university-enrollment-system/
├── Backend/API-matriculas/
│   ├── src/main/java/.../
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── domain/
│   │   ├── dto/
│   │   └── config/
│   └── src/main/resources/
│       └── db/migration/
├── Frontend/src/
│   ├── features/
│   │   ├── carreras/
│   │   └── facultades/
│   └── shared/
│       ├── components/
│       ├── config/
│       └── types/
├── docker-compose.yml
└── .env
```

Ver READMEs específicos: [Backend](Backend/README.md) | [Frontend](Frontend/README.md)

## Licencia

MIT License - ver [LICENSE](LICENSE)

## Autor

[Tunkifloo](https://github.com/Tunkifloo)
