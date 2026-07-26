# Waltercode Portfolio

Portfolio personal construido con **Astro**, **Tailwind CSS** y desplegado automáticamente en **GitHub Pages**.

## ✨ Características

- ✅ Astro 4.16.3 (framework moderno)
- ✅ Tailwind CSS 4.0.11 (estilos)
- ✅ TypeScript 5.7.3 (type safety)
- ✅ Motion 11.11.9 (animaciones)
- ✅ Resend 4.1.2 (envío de emails)
- ✅ GitHub Actions CI/CD
- ✅ GitHub Pages deployment automático
- ✅ Optimizado para rendimiento

## 🚀 Inicio Rápido

### Requisitos
- Node.js 20.18.0+
- npm 10+

### Instalación

```bash
# Clonar e instalar
git clone <repo-url>
cd waltercode-portfolio
npm ci

# Desarrollo local
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## 🌐 Acceso

- **Local Development**: http://localhost:3000
- **Production**: https://waltercode.github.io

## 📦 Scripts Disponibles

```bash
npm run dev       # Servidor de desarrollo con hot reload
npm run build     # Build para producción (genera ./dist)
npm run preview   # Preview del build estático
npm run check     # Verificar tipos con TypeScript
npm run astro     # CLI de Astro (create, sync, etc)
```

## 📋 Tech Stack

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| Astro | 4.16.3 | Framework SSG/SSR |
| Tailwind CSS | 4.0.11 | Styling |
| TypeScript | 5.7.3 | Type Safety |
| Vite | 5.4.11 | Build Tool |
| Motion | 11.11.9 | Animaciones |
| Resend | 4.1.2 | Email Service |
| Node.js | 20.18.0 | Runtime |

## 🚢 Deployment

### GitHub Pages (Automático)

El proyecto usa **GitHub Actions** para automatizar el deploy:

```yaml
Trigger: git push a main
  ↓
Build: npm ci → npm run build
  ↓
Type Check: npm run check
  ↓
Deploy: Push a GitHub Pages
  ↓
Live: https://waltercode.github.io (~2-3 min)
```

**Ver [DEPLOYMENT_SETUP.md](./DEPLOYMENT_SETUP.md) para configuración detallada.**

### Deployment Manual

```bash
# Local build
npm run build

# Ver preview
npm run preview

# Push a GitHub
git add .
git commit -m "mensaje"
git push origin main
```

## 📁 Estructura del Proyecto

```
.
├── src/
│   ├── pages/           # Rutas (.astro files)
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layouts base
│   └── styles/          # CSS global
├── public/              # Assets estáticos
├── dist/                # Output del build (generado)
│
├── astro.config.mjs     # Config de Astro
├── tsconfig.json        # Config de TypeScript
├── tailwind.config.js   # Config de Tailwind
├── .github/
│   ├── workflows/
│   │   └── deploy.yml   # CI/CD workflow
│   └── dependabot.yml   # Auto dependency updates
│
├── .npmrc               # Optimizaciones npm
├── .node-version        # Node version (20.18.0)
├── .prettierrc           # Code formatting
└── package.json         # Dependencias
```

## ⚙️ Configuración

### Astro Config (`astro.config.mjs`)
```javascript
{
  site: 'https://waltercode.github.io',
  base: '/',
  outDir: './dist',
  output: 'static'  // Para GitHub Pages
}
```

### GitHub Actions (`deploy.yml`)
- Trigger: Push a `main` o manual
- OS: Ubuntu Latest
- Node: 20.18.0 (desde `.node-version`)
- Steps: Checkout → Setup Node → Install → Type Check → Build → Deploy

### Dependabot (`.github/dependabot.yml`)
- Actualiza automáticamente dependencias
- Semanal (lunes 03:00 UTC)
- Solo updates producción + development

## 🐛 Troubleshooting

### ❌ Build falla localmente
```bash
# Limpiar e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ❌ Deploy no aparece en GitHub Pages
1. Espera 2-3 minutos
2. Verifica en **Settings** → **Pages** que sea `main` branch
3. Limpia cache del navegador
4. Checa logs en **Actions** tab

### ❌ Type errors
```bash
npm run check  # Ver errores de TypeScript
```

### ❌ Incompatibilidades de dependencias
```bash
npm ci --legacy-peer-deps
```

## 📊 Monitoreo

### GitHub Actions
1. Ve a **Actions** tab en GitHub
2. Selecciona el workflow más reciente
3. Expande **build** para ver logs detallados

### GitHub Pages
1. **Settings** → **Pages** para ver status
2. **Deployments** para historial completo

## 🔄 Actualizaciones de Dependencias

Las dependencias se actualizan automáticamente mediante:

1. **Dependabot** (automático): PRs semanales
2. **Manual**: `npm update` localmente
3. **Workflow CI**: Verifica en cada push

## 📝 Notas Importantes

- ⚠️ Este repositorio se publica como sitio de usuario, por lo que `base: '/'` es obligatorio.
- ⚠️ El `output: 'static'` es requerido para GitHub Pages
- ⚠️ Los links internos deben incluir el `base` path
- ✅ GitHub Actions copia automáticamente `./dist` a GitHub Pages

## 🤝 Flujo de Trabajo

### Desarrollo
```bash
git checkout -b feature/nombre
npm run dev
# hacer cambios
npm run check  # type check
```

### Commit
```bash
git add .
git commit -m "type(scope): descripción"
```

### Deploy
```bash
git push origin feature/nombre
# Abrir PR, merge a main, auto-deploy
```

## 📚 Recursos

- [Astro Docs](https://docs.astro.build)
- [Tailwind Docs](https://tailwindcss.com)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

## 📄 Licencia

Proyecto personal. Todos los derechos reservados.

---

**Última actualización**: 2026-06-16 | **Node**: 20.18.0 | **Astro**: 4.16.3

