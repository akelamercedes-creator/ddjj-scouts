# 📋 Declaración Jurada de Salud — Scouts de Argentina

Formulario digital para completar y guardar la DDJJ de Salud en Google Drive.

## 🚀 Cómo publicar en GitHub Pages (una sola vez)

### Paso 1 — Crear el repositorio
1. Ir a [github.com](https://github.com) e iniciar sesión (o crear cuenta gratis)
2. Clic en **New repository**
3. Nombre: `ddjj-scouts` (o el que quieras)
4. Marcar **Public**
5. Clic en **Create repository**

### Paso 2 — Subir los archivos
1. En el repositorio recién creado, clic en **Add file → Upload files**
2. Subir **`index.html`** y **`Code.gs`**
3. Clic en **Commit changes**

### Paso 3 — Activar GitHub Pages
1. Ir a **Settings** (pestaña del repo)
2. En el menú izquierdo: **Pages**
3. En *Source*: seleccionar **Deploy from a branch**
4. Branch: **main** / carpeta: **/ (root)**
5. Clic en **Save**
6. Esperar ~2 minutos y tu URL será:
   `https://TU_USUARIO.github.io/ddjj-scouts/`

### Paso 4 — Actualizar el Apps Script (si es nuevo deploy)
Si es la primera vez o cambiaste el Code.gs:
1. Ir a [script.google.com](https://script.google.com) → abrir tu proyecto
2. Pegar el nuevo contenido de `Code.gs`
3. **Implementar → Gestionar implementaciones → ✏️ editar → Nueva versión → Implementar**
4. La URL del script no cambia

---

## ✨ Qué hace el formulario

- Completa la declaración jurada de salud interactiva
- Genera el PDF oficial con todos los datos
- **Sube automáticamente** a la carpeta *DDJJ SALUD 2026* en Google Drive
- Genera una **credencial scout** con QR que apunta directo al PDF en Drive
- Archivo nombrado automáticamente: `DNI_APELLIDO_NOMBRE_FECHAFIRMA.pdf`

## 📤 Compartir con los grupos

Una vez publicado, simplemente compartí la URL:
```
https://TU_USUARIO.github.io/ddjj-scouts/
```
Funciona en celular, tablet y computadora.

---
*Scouts de Argentina · Versión 01-25*
