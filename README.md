# Portfolio - Nestor Gutierrez

Portfolio profesional construido con Next.js 15, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Deploy en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages en `nekstoreo.github.io`.

### Configuración inicial:

1. **Crear el repositorio en GitHub:**
   ```bash
   # Crea un repositorio llamado 'nekstoreo.github.io' en tu cuenta de GitHub
   ```

2. **Conectar tu proyecto local:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/nekstoreo/nekstoreo.github.io.git
   git push -u origin main
   ```

3. **Configurar GitHub Pages:**
   - Ve a Settings > Pages en tu repositorio
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### Deploy automático:

El proyecto se despliega automáticamente cuando haces push a la rama `main` gracias a GitHub Actions.

### Deploy manual:

```bash
# Construir el proyecto
pnpm build

# O usar el script personalizado
pnpm deploy
```

## 🛠️ Desarrollo local

```bash
# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

# Construir para producción
pnpm build

# Servir build de producción
pnpm start
```

## 🎨 Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Componentes:** shadcn/ui
- **Animaciones:** Framer Motion
- **Deploy:** GitHub Pages
- **Package Manager:** pnpm

## 📁 Estructura del proyecto

```
src/
├── app/                 # App Router pages
├── components/          # Componentes React
│   ├── sections/       # Secciones del portfolio
│   └── ui/            # Componentes UI (shadcn)
├── hooks/              # Custom hooks
└── lib/                # Utilidades
```

## 🌟 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Animaciones suaves con Framer Motion
- ✅ Navegación lateral con scroll tracking
- ✅ Tema oscuro con acentos amber
- ✅ Optimizado para rendimiento
- ✅ Deploy automático en GitHub Pages

---

**URL del sitio:** [nekstoreo.github.io](https://nekstoreo.github.io)
