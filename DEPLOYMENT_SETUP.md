# 🚀 Configuración de Deploy - Astro + GitHub Pages

## ✅ Configuración Actual (Actualizada)

### 1. **Astro Config** (`astro.config.mjs`)
```javascript
- site: 'https://waltercode.github.io'
- base: '/'
- outDir: './dist'
- output: 'static' // Optimizado para GitHub Pages
- build.minify: 'terser' // Minificación de código
```

### 2. **Dependencias Actualizadas**
```json
{
  "astro": "^4.16.3",
  "tailwindcss": "^4.0.11",
  "@tailwindcss/vite": "^4.0.11",
  "vite": "^5.4.11",
  "motion": "^11.11.9",
  "resend": "^4.1.2",
  "typescript": "^5.7.3",
  "@astrojs/check": "^0.9.3"
}
```

### 3. **GitHub Actions Workflow Optimizado** (`.github/workflows/deploy.yml`)
- ✅ Node.js 20.18.0 (especificado en `.node-version`)
- ✅ Cache de npm automático
- ✅ Type checking antes del build
- ✅ Concurrency control (evita builds simultáneos)
- ✅ Artifact con retención de 1 día
- ✅ Deploy automático a GitHub Pages

### 4. **Archivos de Configuración**
- ✅ `.node-version` - Especifica Node v20.18.0
- ✅ `.npmrc` - Optimizaciones para npm ci
- ✅ `.prettierrc` - Formateo consistente de código
- ✅ `tsconfig.json` - Soporte TypeScript mejorado
- ✅ `.github/dependabot.yml` - Actualizaciones automáticas semanales
- ✅ `.gitignore` - Actualizado con mejores prácticas

### 5. **Permisos GitHub Pages**
El workflow tiene configurados:
- `contents: read` - Lectura del repositorio
- `pages: write` - Escritura en GitHub Pages
- `id-token: write` - Para deploy automático seguro

---

## 🚀 Cómo Hacer Deploy

### Opción 1: Automático (Recomendado)
```bash
git push origin main
```
El workflow se ejecuta automáticamente → Deploy en ~2-3 minutos

### Opción 2: Manual desde GitHub
1. Ve a **Actions** → **Deploy to GitHub Pages**
2. Haz clic en **Run workflow**

### Opción 3: Local para pruebas
```bash
npm run build      # Build local
npm run preview    # Ver preview del build
```

---

## 📋 Configuración Requerida en GitHub

### 1. **Branch Source para GitHub Pages**
Ve a: **Settings** → **Pages**
- ✅ Source: Deploy from a branch
- ✅ Branch: `main`
- ✅ Folder: `/ (root)`

### 2. **Permisos de Workflow**
Ve a: **Settings** → **Actions** → **General**
- ✅ Workflow permissions: **Read and write permissions**
- ✅ Allow GitHub Actions to create and approve pull requests: **Enabled**

### 3. **Dependabot** (Opcional pero recomendado)
Ve a: **Settings** → **Code security and analysis**
- ✅ Enable **Dependabot** para actualizaciones automáticas

---

## 📦 Scripts Disponibles

```bash
npm run dev       # Desarrollo local (http://localhost:3000)
npm run build     # Build para producción
npm run preview   # Preview del build estático
npm run check     # Type checking
npm run astro     # CLI de Astro
```

---

## 🔧 Cambios Realizados

### ✅ Eliminado
- `@astrojs/vercel` - No es necesario para GitHub Pages

### ✅ Actualizado
- Astro `4.16.0` → `4.16.3`
- Tailwind `4.0.0` → `4.0.11`
- Vite `5.4.0` → `5.4.11`
- Motion `11.0.0` → `11.11.9`
- Resend `3.0.0` → `4.1.2`
- TypeScript `^20.0.0` → `^5.7.3`

### ✅ Agregado
- TypeScript (dev dependency) para mejor type checking
- `@astrojs/check` para validación estática
- `.npmrc` para optimizaciones
- `.node-version` para consistencia
- `.prettierrc` para formateo
- Dependabot configuration

### ✅ Optimizaciones
- Build con minificación automática
- Output static (perfecto para GitHub Pages)
- Type checking en CI/CD
- Cache de dependencias en GitHub Actions
- Concurrency control en workflows

---

## 📊 Monitorear Deployments

### Estado en Tiempo Real
- **Actions Tab**: Ver logs del workflow
- **Deployments**: Settings → Deployments para historial completo
- **GitHub Pages**: `https://waltercode.github.io`

### Logs del Workflow
1. Ve a **Actions** en GitHub
2. Selecciona el workflow más reciente
3. Haz clic en **build** para ver detalles

---

## 🐛 Solución de Problemas

### ❌ Build falla
```bash
# Verificar localmente
npm ci --prefer-offline
npm run check
npm run build
```

### ❌ Deploy no aparece
1. Espera 1-2 minutos (GitHub Pages tarda)
2. Limpia cache del navegador: `Ctrl+Shift+Delete`
3. Verifica `DEPLOYMENT_STATUS` en GitHub

### ❌ 404 Not Found
- Asegúrate que el `base` en astro.config.mjs es `/`
- Los links internos deben incluir el base path

### ❌ Dependencias conflictivas
```bash
npm ci --legacy-peer-deps
```

---

## 🔄 Comandos Útiles

```bash
# Actualizar dependencias
npm update

# Instalar dependencias desde cero
npm ci

# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install

# Ver versión de Astro
npm list astro

# Check type errors
npm run check
```

---

## 📝 Notas Importantes

### GitHub Pages
- El `base: '/'` es obligatorio porque este repositorio corresponde a un sitio de usuario.
- Los archivos se sirven desde `./dist` automáticamente
- El dominio es `https://waltercode.github.io`

### Workflow
- Se ejecuta automáticamente en cada push a `main`
- Incluye type checking (`npm run check`) automático
- Los artifacts se limpian después de 1 día
- Concurrency evita múltiples deploys simultáneos

### Seguridad
- Solo deploy desde rama `main`
- Tokens OIDC automáticos (sin secrets expuestos)
- Dependabot revisa automáticamente vulnerabilidades

---

## 🎯 Próximos Pasos

1. **Instalar dependencias localmente**
   ```bash
   npm ci
   ```

2. **Probar build local**
   ```bash
   npm run build
   npm run preview
   ```

3. **Hacer push a GitHub**
   ```bash
   git add .
   git commit -m "chore: update dependencies and deploy config"
   git push origin main
   ```

4. **Verificar deployment**
   - Ve a **Actions** para ver el workflow
   - Luego a `https://waltercode.github.io`

---

**Última actualización**: 2026-06-16
