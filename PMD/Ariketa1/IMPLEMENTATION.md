# 📚 Ariketa1 - Ikastetxea Project

Proyecto Angular completo con todas las funcionalidades requeridas para gestionar información de un colegio.

## ✨ Características Implementadas

### 1. **Estructura de Páginas (4 Rutas)**
- **Home** (`/` o `/home`) - Página principal con foto del colegio y descripción
- **Zerbitzuak** (`/zerbitzuak`) - Listado de servicios educativos
- **Ikasleak** (`/ikasleak`) - Tabla de alumnos con modal de detalles
- **Kontaktua** (`/kontaktua`) - Formulario de contacto con validación

### 2. **Página de Contacto**
- ✅ Información del colegio (dirección, teléfono, email)
- ✅ Formulario reactivo con 3 campos:
  - **Izena (Nombre)** - Requerido, mínimo 3 caracteres
  - **Zenbakia (Teléfono)** - Requerido, 9 dígitos mínimo
  - **Deskribapena/Zalantza (Mensaje)** - Requerido, mínimo 10 caracteres
- ✅ Validación en tiempo real
- ✅ Mensaje de confirmación: "[nombre], zure zalantza behar bezala bidali da"

### 3. **Página de Alumnos**
- ✅ Tabla con: ID, Nombre (Izena), Apellido (Abizena)
- ✅ Botón "Detaliak" que abre modal con:
  - Teléfono (Zenbakia)
  - Ciudad de origen (Jatorrizko Herria)
- ✅ Modal con animaciones suave
- ✅ Cierre haciendo click fuera del modal

### 4. **Servicio Web (web.ts)**
- ✅ `getAlumnos()` - Retorna lista de alumnos
- ✅ `getZerbitzuak()` - Retorna lista de servicios
- ✅ `enviarContacto()` - Procesa el formulario de contacto
- Datos almacenados en signals (estado reactivo)

### 5. **ng-content - Componente Card**
- ✅ Componente reutilizable `<app-card>`
- ✅ Proyecta contenido mediante ng-content
- ✅ Estilos de tarjeta con efectos hover

### 6. **Gestión de Rutas**
```typescript
- / → Home
- /home → Home
- /zerbitzuak → Servicios
- /ikasleak → Alumnos
- /kontaktua → Contacto
```

### 7. **Navegación**
- ✅ Barra de navegación sticky
- ✅ Enlaces activos resaltados
- ✅ Diseño responsivo
- ✅ Footer

## 📁 Estructura del Proyecto

```
src/app/
├── models/
│   ├── alumno.interface.ts
│   ├── kontaktua.interface.ts
│   └── zerbitzua.interface.ts
├── shared/
│   └── card/
│       ├── card.ts
│       ├── card.html
│       └── card.css
├── home/
│   ├── home.ts
│   ├── home.html
│   └── home.css
├── zerbitzuak/
│   ├── zerbitzuak.ts
│   ├── zerbitzuak.html
│   └── zerbitzuak.css
├── ikasleak/
│   ├── ikasleak.ts
│   ├── ikasleak.html
│   └── ikasleak.css
├── kontaktuak/
│   ├── kontaktuak.ts
│   ├── kontaktuak.html
│   └── kontaktuak.css
├── app.ts
├── app.html
├── app.css
├── app.routes.ts
├── web.ts (Servicio principal)
└── styles.css
```

## 🎨 Tecnologías Utilizadas

- **Angular v20+** (Standalone Components)
- **TypeScript** (Strict Mode)
- **Signals** (Gestión de estado reactivo)
- **Reactive Forms** (Validación de formularios)
- **RouterLink** (Enrutamiento)
- **CSS Moderno** (Flexbox, Grid, Gradientes)

## ✅ Best Practices Implementadas

- ✅ Componentes standalone
- ✅ `ChangeDetectionStrategy.OnPush` en todos los componentes
- ✅ Inyección de dependencias con `inject()`
- ✅ `input()` y `output()` functions (cuando sea necesario)
- ✅ Tipos estrictos (TypeScript strict)
- ✅ Validación de formularios reactivos
- ✅ Accesibilidad básica (ARIA labels, focus management)
- ✅ Código modular y reutilizable
- ✅ Estilos responsive

## 🚀 Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# El proyecto estará disponible en http://localhost:4200
```

## 📊 Datos de Prueba

### Alumnos
- Juan García (Bilbao)
- María López (Donostia)
- Aitor Martínez (Vitoria)
- Leire González (Gasteiz)

### Servicios
- Hezkuntza (Educación)
- Kirola (Deporte)
- Artea (Arte)
- Tekonologia (Tecnología)

## 🎯 Requisitos Completados

- ✅ 4 páginas/componentes con rutas
- ✅ Página de contacto con formulario validado
- ✅ Página de alumnos con modal interactivo
- ✅ Servicio centralizado (web.ts)
- ✅ ng-content para proyección de contenido
- ✅ Sistema de rutas configurado
- ✅ Navegación principal
- ✅ Estilos responsive
- ✅ Lógica reactiva con Signals

---

**Proyecto completado con todas las características requeridas** ✨
