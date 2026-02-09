# 🎨 Frontend - Gestión de Usuarios

Interfaz web completa y moderna para el CRUD de usuarios, construida con HTML5, CSS3 y JavaScript vanilla.

## 🎯 Características del Frontend

✅ **Interfaz responsiva** - Funciona en desktop, tablet y móvil
✅ **Formulario intuitivo** - Crear y editar usuarios fácilmente
✅ **Tabla dinámica** - Lista actualizable en tiempo real
✅ **Búsqueda y filtros** - Filtrar por estado y búsqueda por texto
✅ **Modales de confirmación** - Confirmación antes de eliminar
✅ **Alertas visuales** - Notificaciones de éxito/error
✅ **Diseño moderno** - Bootstrap 5 + estilos personalizados
✅ **Iconos elegantes** - Font Awesome 6

## 📁 Estructura de Archivos

```
src/main/resources/static/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos personalizados
└── js/
    └── script.js       # Lógica de la aplicación
```

## 🚀 Cómo Usar

### 1. Iniciar el Servidor

```bash
./mvnw spring-boot:run
```

### 2. Acceder al Frontend

Abre tu navegador en:
```
http://localhost:8080
```

Se cargará automáticamente el archivo `index.html`

## 📋 Funcionalidades

### 1. **Crear Usuario**

1. Completa el formulario en el panel izquierdo:
   - Email (único, requerido)
   - Nombre (requerido)
   - Apellido (requerido)
   - Contraseña (requerido)
   - Activo (checkbox, opcional)

2. Haz clic en "Guardar"

3. Verás una notificación de éxito y la tabla se actualizará

### 2. **Ver Usuarios**

La tabla en el panel derecho muestra:
- ID del usuario
- Email
- Nombre
- Apellido
- Estado (Activo/Inactivo)
- Botones de acción

### 3. **Buscar Usuarios**

Usa el cuadro de búsqueda para filtrar por:
- Email
- Nombre
- Apellido

La búsqueda es en tiempo real mientras escribes.

### 4. **Filtrar por Estado**

Usa los botones de radio en la parte superior de la tabla:
- **Todos** - Muestra todos los usuarios
- **Activos** - Muestra solo usuarios activos
- **Inactivos** - Muestra solo usuarios inactivos

### 5. **Ver Detalles**

Haz clic en el botón de ojo (👁️) para ver:
- ID
- Email
- Nombre
- Apellido
- Estado actual
- Fecha de creación

### 6. **Editar Usuario**

1. Haz clic en el botón de lápiz (✏️)
2. El formulario se rellena automáticamente
3. Cambia los datos que desees
4. Haz clic en "Guardar"

**Nota:** Puedes cambiar el email siempre que no esté en uso por otro usuario.

### 7. **Cambiar Estado**

Haz clic en el botón de interruptor (⚪) para:
- Activar usuarios inactivos
- Desactivar usuarios activos

El cambio es inmediato.

### 8. **Eliminar Usuario**

1. Haz clic en el botón de papelera (🗑️)
2. Se abrirá un modal de confirmación
3. Haz clic en "Confirmar" para eliminar
4. El usuario será eliminado permanentemente

## 🎨 Componentes de la Interfaz

### Panel Izquierdo: Formulario
- Entrada de datos
- Validación en el cliente
- Alertas de éxito/error
- Botones de guardar y cancelar

### Panel Derecho: Tabla de Usuarios
- Lista de todos los usuarios
- Búsqueda en tiempo real
- Filtros por estado
- Botones de acción

### Modales
- **Modal de Detalles** - Ver información completa del usuario
- **Modal de Confirmación** - Confirmar eliminación

### Alertas
- **Verde (Éxito)** - Operación completada
- **Roja (Error)** - Hubo un problema
- **Azul (Info)** - Información general

## 🎯 Flujo de Trabajo Típico

```
1. Abrir http://localhost:8080
   ↓
2. Ver lista de usuarios existentes
   ↓
3. Crear nuevo usuario (formulario a la izquierda)
   ↓
4. Buscar usuario (cuadro de búsqueda)
   ↓
5. Ver detalles (botón ojo)
   ↓
6. Editar usuario (botón lápiz)
   ↓
7. Cambiar estado (botón interruptor)
   ↓
8. Eliminar si es necesario (botón papelera + confirmación)
```

## 🔧 Configuración Técnica

### Tecnologías Usadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS
- **JavaScript Vanilla** - Sin dependencias (excepto Bootstrap)
- **Bootstrap 5** - Framework CSS
- **Font Awesome 6** - Iconos
- **Fetch API** - Comunicación con la API

### Colores

| Color | Código | Uso |
|-------|--------|-----|
| Azul | #0d6efd | Primario |
| Verde | #198754 | Éxito/Activo |
| Rojo | #dc3545 | Peligro/Error |
| Amarillo | #ffc107 | Advertencia |
| Gris | #6c757d | Secundario |

### Puntos de Ruptura Responsivos

- **Desktop:** 992px+
- **Tablet:** 768px - 991px
- **Móvil:** menos de 768px

## 🐛 Resolución de Problemas

### "Error al cargar los usuarios"

**Causa:** El servidor no está corriendo
**Solución:** Inicia el servidor con `./mvnw spring-boot:run`

### "No aparece ningún usuario"

**Causa:** Base de datos vacía o filtro no apropiado
**Solución:**
1. Crea un nuevo usuario
2. Verifica el filtro seleccionado
3. Borra el texto de búsqueda

### "No puedo crear usuario con ese email"

**Causa:** El email ya existe
**Solución:** Usa un email único o edita el usuario existente

### "El formulario no responde"

**Causa:** Campos requeridos no completados
**Solución:**
1. Verifica que todos los campos tengan valor
2. Email debe ser un correo válido
3. Intenta refrescar la página (F5)

### "La tabla se ve mal en móvil"

**Solución:**
1. Gira el dispositivo a vista horizontal (landscape)
2. Usa el botón de detalles para ver información completa
3. El diseño es optimizado para pantallas pequeñas

## 📱 Uso en Móvil

El frontend es completamente responsivo:

- **Formulario:** Ocupa el ancho completo en móvil
- **Tabla:** Se adapta con botones compactos
- **Botones:** Aumentan de tamaño en móvil para facilitar el toque
- **Modales:** Se redimensionan automáticamente

## 🌐 Compatibilidad de Navegadores

| Navegador | Versión Mínima | Estado |
|-----------|----------------|--------|
| Chrome | 90+ | ✅ Soportado |
| Firefox | 88+ | ✅ Soportado |
| Safari | 14+ | ✅ Soportado |
| Edge | 90+ | ✅ Soportado |
| IE 11 | - | ❌ No soportado |

## 💡 Tips y Trucos

1. **Buscar mientras escribes** - La búsqueda es en tiempo real
2. **Filtros combinados** - Puedes buscar Y filtrar al mismo tiempo
3. **Tab entre campos** - Navega entre campos presionando Tab
4. **Enter en formulario** - Presiona Enter para enviar el formulario
5. **Deshacer edición** - Recarga la página si cometes un error grave

## 🔐 Seguridad

- ✅ CORS habilitado para solicitudes locales
- ✅ Validación en el cliente y servidor
- ✅ Mensajes de error descriptivos sin exponer detalles internos
- ✅ Confirmación antes de operaciones destructivas

## 📊 Estadísticas

El frontend muestra:
- **Total de usuarios:** En el pie de la tabla
- **Usuarios activos:** Filtrados al seleccionar "Activos"
- **Usuarios inactivos:** Filtrados al seleccionar "Inactivos"

## 🎨 Personalización

Puedes modificar los estilos en `css/style.css`:

```css
:root {
    --primary-color: #0d6efd;      /* Color principal */
    --secondary-color: #6c757d;    /* Color secundario */
    --success-color: #198754;      /* Color de éxito */
    --danger-color: #dc3545;       /* Color de peligro */
}
```

## 🚀 Mejoras Futuras

- [ ] Autenticación de usuarios
- [ ] Exportar usuarios a CSV/PDF
- [ ] Importar usuarios desde archivo
- [ ] Paginación en tabla
- [ ] Ordenamiento de columnas
- [ ] Temas oscuro/claro
- [ ] Gráficas de estadísticas
- [ ] Historial de cambios

## 📚 Estructura del Código JavaScript

```javascript
// API Configuration
const API_URL = 'http://localhost:8080/api/usuarios';

// DOM Elements
// ... variables para elementos del DOM

// Global Variables
let usuarios = [];
let accionConfirmacion = null;

// Functions
- cargarUsuarios()           // Obtener usuarios de la API
- aplicarFiltros()           // Filtrar y buscar
- renderizarTabla()          // Mostrar tabla actualizada
- manejarSubmitForm()        // Procesar formulario
- editarUsuario()            // Cargar datos en formulario
- eliminarUsuario()          // Eliminar de la API
- cambiarEstado()            // Cambiar estado
- mostrarExito()             // Notificación positiva
- mostrarError()             // Notificación de error
```

## 🎓 Aprendizaje

Este frontend es un excelente ejemplo para aprender:
- Fetch API y CORS
- Manipulación del DOM
- Event listeners
- Template literals
- Arrow functions
- Async/await
- Bootstrap 5
- Responsive design

---

**¡Disfruta usando el frontend!** 🎉

Para más información sobre la API, consulta [ENDPOINTS.md](./ENDPOINTS.md)
