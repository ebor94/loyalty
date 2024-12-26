# Loyalty - Cerámica Italia

Sistema de fidelización para profesionales de Cerámica Italia.

## Tecnologías

- Vue 3
- TypeScript
- Tailwind CSS
- Vite

## Requisitos

- Node.js >= 20.9.0
- npm >= 10.0.0

## Instalación

```bash
git clone [https://github.com/ebor94/loyalty]
cd loyalty
npm install
```

## Desarrollo

```bash
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

## Estructura del Proyecto

```
loyalty/
├── src/
│   ├── views/
│   │   ├── ClientConfirmation.vue
│   │   ├── ProfessionalConfirmation.vue
│   │   └── ProfessionalDashboard.vue
│   ├── router/
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   └── App.vue
├── public/
│   └── assets/
└── package.json
```

## Características

- Confirmación de referidos por clientes
- Dashboard para profesionales
- Gestión de redenciones
- Historial de ventas
- Responsive design

## Rutas

- `/client/:id` - Confirmación del cliente
- `/professional/:id` - Confirmación del profesional
- `/dash-professional/:id` - Dashboard del profesional

