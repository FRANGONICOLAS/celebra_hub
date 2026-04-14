# Celebra Hub

Aplicación web React + TypeScript + Vite para gestión de invitaciones e invitados de eventos.

Esta fase está construida con datos mock, pero preparada para migrar a Supabase con cambios mínimos en UI.

## Funcionalidades implementadas

- Home de una sola página con branding Celebra Hub y acceso a iniciar sesión/registro.
- Pantalla Auth con tabs en rutas separadas:
  - /auth/login
  - /auth/register
- Acceso demo de 1 clic para entrar al sistema sin backend real.
- Panel de Invitaciones:
  - Búsqueda inteligente incremental.
  - Filtro por tipo de evento.
  - Botón crear invitación (modal).
  - Cards con nombre, tipo, fecha, host y estado (activa, borrador, inactiva).
  - Gestión por modal (editar diseño o borrar).
  - Vista de diseño con plantillas desde carpeta invitations.
- Panel de Invitados:
  - KPIs (total invitados, confirmados, pendientes, rechazados).
  - Búsqueda inteligente incremental.
  - Cards con invitado principal, acompañante, total invitados y estado.
  - Gestión en modal: adultos/niños, confirmación manual, cancelar/rechazar, marcar pendiente, reenviar invitación.
  - Crear invitado por modal.
  - Botón enviar invitaciones a todos.

## Arquitectura (Screaming Architecture)

Estructura por módulos de negocio:

- src/modules/users
- src/modules/events
- src/modules/guests
- src/modules/commons

Cada módulo contiene subcarpetas:

- components
- hooks
- types
- services

Además:

- src/invitations: plantillas visuales de invitación.
- src/api/supabaseClient.ts: cliente base de Supabase para integración posterior.

## Preparado para BD (Supabase)

El proyecto ya incluye:

- Tipos de capa BD (snake_case) y capa de dominio (camelCase).
- Contratos de repositorio:
  - src/modules/events/services/invitations.repository.ts
  - src/modules/guests/services/guests.repository.ts
- Implementación mock activa, reemplazable por implementación real de Supabase sin cambiar componentes.

Variables de entorno esperadas:

- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

Definidas en:

- .env.example

## Rutas principales

- /
- /auth/login
- /auth/register
- /panel/invitaciones
- /panel/invitaciones/:invitationId/diseno
- /panel/invitados

## Scripts

- npm run dev
- npm run build
- npm run preview

## Iniciar proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Copiar variables de entorno:

```bash
cp .env.example .env
```

3. Levantar entorno local:

```bash
npm run dev
```

## Nota de alcance

Actualmente no hay persistencia real ni autenticación real. Todo el flujo es mock para validar UX, estructura y reglas de negocio antes de conectar procesos y tablas reales.
