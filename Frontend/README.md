# Frontend - Sistema de Matrículas

Aplicación web con React y TypeScript para gestionar facultades y carreras universitarias.

## Tecnologías

React 19, TypeScript 5.9, Vite 7, Zustand 5, Tailwind CSS 3.4

## Pre-requisitos

- Node.js 18+
- npm 9+

## Instalación

> **Nota:** Si ejecutas el frontend sin Docker, crea un archivo `.env` en la carpeta `Frontend/` con `VITE_API_BASE_URL=http://localhost:8080/api/v1`

```bash
cd Frontend
npm install
npm run dev
```

Disponible en: `http://localhost:5173`

### Build para Producción

```bash
npm run build
npm run preview
```

## Estructura

```text
src/
├── features/
│   ├── carreras/          # Módulo de carreras
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── store/
│   │   └── CarrerasPage.tsx
│   └── facultades/        # Módulo de facultades
│       ├── components/
│       ├── hooks/
│       ├── store/
│       └── FacultadesPage.tsx
├── shared/
│   ├── components/        # Componentes reutilizables
│   ├── config/            # Configuración API
│   └── types/             # Tipos TypeScript
├── App.tsx
└── main.tsx
```

## Características

- Gestión de facultades y carreras (CRUD completo)
- Diseño responsive con Tailwind CSS
- Gestión de estado con Zustand
- Validaciones de formularios

## Scripts

```bash
npm run dev          # Desarrollo
npm run build        # Producción
npm run lint         # Linter
```

## Configuración API

Variable de entorno en `.env`:

```env
VITE_API_BASE_URL=http://localhost:8080/api/v1
```

## Docker

```bash
docker build -t matriculas-frontend .
docker run -p 5173:80 matriculas-frontend
```

## Troubleshooting

**Puerto en uso:** Cambia `server.port` en `vite.config.ts`

**Error de módulos:** Ejecuta `rm -rf node_modules && npm install`

---

[← Volver al README principal](../README.md)
