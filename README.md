# Portal del Alumno UMET — Diseño UI

Diseño profesional del login del portal de alumnos, construido con las tecnologías estándar actuales para interfaces web.

## Stack de diseño

| Tecnología | Uso |
|---|---|
| **Next.js 15** | Framework React para UI moderna |
| **React 19** | Componentes interactivos |
| **Tailwind CSS 3** | Sistema de diseño y estilos |
| **TypeScript** | Tipado y mantenibilidad |
| **Lucide React** | Iconografía profesional |
| **Google Fonts** | Inter + Plus Jakarta Sans |

## Vista previa

```bash
cd alumno-portal-ui
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

> Requiere [Node.js](https://nodejs.org/) instalado.

## Estructura

```
alumno-portal-ui/
├── app/
│   ├── layout.tsx      # Fuentes y metadata
│   ├── page.tsx        # Página principal
│   └── globals.css     # Tailwind base
├── components/
│   └── LoginPage.tsx   # Diseño completo del login
└── public/
    └── umet-logo.png   # Logo oficial UMET
```


También puedes usar **Ingresar como invitado** en el login.

## Secciones del portal

- Inicio (dashboard con estadísticas)
- Matrícula · Beneficios · Pagos · Calificaciones
- Horario · Tareas · Biblioteca · Documentos
- Mi Perfil · Configuración
