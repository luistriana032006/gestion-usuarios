# 👥 Gestión de Usuarios - API REST

Un CRUD completo para gestión de usuarios desarrollado con **Spring Boot 4.0.2** y **Java 21**.

## 🎯 Características Principales

- ✅ **CRUD Completo** - Crear, leer, actualizar y eliminar usuarios
- ✅ **REST API** - 8 endpoints perfectamente documentados
- ✅ **Validaciones** - Email único, campos requeridos
- ✅ **Timestamps** - Registro automático de fechas de creación y actualización
- ✅ **Base de Datos H2** - En memoria, ideal para desarrollo
- ✅ **CORS Habilitado** - Acepta solicitudes desde cualquier origen
- ✅ **Manejo de Errores** - Respuestas HTTP adecuadas con mensajes descriptivos

## 🚀 Inicio Rápido

### Requisitos
- Java 21 o superior
- Maven 3.6+
- Git (opcional)

### Compilar y Ejecutar

```bash
# Compilar el proyecto
./mvnw clean compile

# Ejecutar la aplicación
./mvnw spring-boot:run
```

La aplicación estará disponible en:
```
http://localhost:8080
```

## 📡 Endpoints Disponibles

### Base URL
```
http://localhost:8080/api/usuarios
```

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **GET** | `/` | Obtener todos los usuarios |
| **GET** | `/activos` | Obtener solo usuarios activos |
| **GET** | `/{id}` | Obtener usuario por ID |
| **GET** | `/email/{email}` | Obtener usuario por email |
| **POST** | `/` | Crear nuevo usuario |
| **PUT** | `/{id}` | Actualizar usuario |
| **PATCH** | `/{id}/estado` | Cambiar estado (activo/inactivo) |
| **DELETE** | `/{id}` | Eliminar usuario |

## 📋 Ejemplos de Uso

### Crear un usuario

```bash
curl -X POST http://localhost:8080/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan@example.com",
    "nombre": "Juan",
    "apellido": "Pérez",
    "contraseña": "password123"
  }'
```

### Obtener todos los usuarios

```bash
curl -X GET http://localhost:8080/api/usuarios
```

### Actualizar un usuario

```bash
curl -X PUT http://localhost:8080/api/usuarios/1 \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan.updated@example.com",
    "nombre": "Juan",
    "apellido": "García",
    "contraseña": "newpassword123",
    "activo": true
  }'
```

### Eliminar un usuario

```bash
curl -X DELETE http://localhost:8080/api/usuarios/1
```

## 🎨 Frontend Web

El proyecto incluye una **interfaz web moderna y responsiva** accesible en:
```
http://localhost:8080
```

### Características del Frontend:
- ✅ Formulario intuitivo para crear/editar usuarios
- ✅ Tabla dinámica con búsqueda en tiempo real
- ✅ Filtros por estado (Todos, Activos, Inactivos)
- ✅ Modales para confirmaciones y detalles
- ✅ Diseño responsivo (Desktop, Tablet, Móvil)
- ✅ Alertas visuales de éxito/error
- ✅ Iconos elegantes con Font Awesome

Para más información: **[FRONTEND.md](./FRONTEND.md)**

## 📚 Documentación Completa

Para una documentación más detallada, consulta:

- **[README_CRUD.md](./README_CRUD.md)** - Guía completa del proyecto
- **[FRONTEND.md](./FRONTEND.md)** - Documentación del frontend web
- **[ENDPOINTS.md](./ENDPOINTS.md)** - Documentación exhaustiva de todos los endpoints
- **[EJEMPLOS.md](./EJEMPLOS.md)** - Ejemplos prácticos en cURL, PowerShell y JavaScript

## 🗄️ Base de Datos

### Consola H2

Accede a la consola H2 en:
```
http://localhost:8080/h2-console
```

**Configuración:**
- **JDBC URL:** `jdbc:h2:mem:gestionndb`
- **User Name:** `sa`
- **Password:** (dejar en blanco)

### Estructura de la Tabla `usuarios`

```sql
CREATE TABLE usuarios (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  contraseña VARCHAR(255) NOT NULL,
  estado BOOLEAN DEFAULT true,
  fecha_creacion VARCHAR(50),
  fecha_actualizacion VARCHAR(50)
);
```

## 🏗️ Estructura del Proyecto

```
src/main/java/com/luistriana/gestion_usuarios/
├── model/
│   └── Usuario.java                 # Entidad JPA
├── repository/
│   └── UsuarioRepository.java       # Acceso a datos
├── service/
│   └── UsuarioService.java          # Lógica de negocio
├── controller/
│   └── UsuarioController.java       # Endpoints REST
└── GestionUsuariosApplication.java  # Clase principal
```

## 🔧 Configuración

El archivo `application.properties` contiene:

```properties
spring.application.name=gestion-usuarios
server.port=8080

# H2 Database
spring.datasource.url=jdbc:h2:mem:gestionndb
spring.datasource.username=sa

# H2 Console
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# JPA Configuration
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
```

## 📦 Dependencias

Las dependencias principales incluyen:

- **spring-boot-starter-webmvc** - Web MVC framework
- **spring-boot-starter-data-jpa** - JPA y Hibernate
- **h2** - Base de datos H2
- **lombok** - Anotaciones reducidas
- **jakarta.persistence-api** - API JPA

## ✔️ Validaciones

El sistema implementa las siguientes validaciones:

- ✅ **Email Único** - No pueden existir dos usuarios con el mismo email
- ✅ **Campos Requeridos** - email, nombre, apellido y contraseña son obligatorios
- ✅ **ID Válido** - Se valida que el usuario existe antes de actualizar o eliminar
- ✅ **Estado Booleano** - En PATCH se valida que se envíe un boolean

## 📊 Códigos HTTP

La API retorna los siguientes códigos:

| Código | Significado |
|--------|------------|
| **200** | OK - Solicitud exitosa |
| **201** | Created - Recurso creado |
| **400** | Bad Request - Datos inválidos |
| **404** | Not Found - Recurso no encontrado |
| **500** | Internal Server Error - Error del servidor |

## 🛠️ Comandos Maven Útiles

```bash
# Compilar
./mvnw clean compile

# Ejecutar
./mvnw spring-boot:run

# Empaquetar
./mvnw clean package

# Limpiar
./mvnw clean

# Ejecutar tests
./mvnw test
```

## 🧪 Pruebas

### Con cURL
```bash
# Crear usuario
curl -X POST http://localhost:8080/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","nombre":"Test","apellido":"User","contraseña":"123"}'

# Obtener todos
curl http://localhost:8080/api/usuarios

# Obtener por ID
curl http://localhost:8080/api/usuarios/1
```

### Con Postman
1. Importa la colección desde los ejemplos en [EJEMPLOS.md](./EJEMPLOS.md)
2. Configura las variables de entorno
3. Ejecuta las solicitudes

### Con JavaScript/Fetch API
Ver ejemplos completos en [EJEMPLOS.md](./EJEMPLOS.md#ejemplos-en-javascript-nodejs-fetch)

## 📝 Modelo de Datos

### Usuario

```json
{
  "id": 1,
  "email": "juan@example.com",
  "nombre": "Juan",
  "apellido": "Pérez",
  "contraseña": "password123",
  "activo": true,
  "fechaCreacion": "2026-02-08 19:30:00",
  "fechaActualizacion": "2026-02-08 19:30:00"
}
```

## 🐛 Troubleshooting

### El email ya existe en el sistema
**Solución:** Usa un email único que no haya sido registrado previamente.

### Usuario no encontrado
**Solución:** Verifica que el ID proporcionado existe en la base de datos.

### Error de conexión a la base de datos
**Solución:** Asegúrate de que el servidor esté corriendo y verifica la configuración en `application.properties`.

### Puerto 8080 ya en uso
**Solución:** Cambia el puerto en `application.properties`:
```properties
server.port=8081
```

## 🚀 Próximas Mejoras

- [ ] Implementar autenticación con Spring Security
- [ ] Agregar validaciones adicionales (email válido, contraseña fuerte)
- [ ] Implementar paginación y ordenamiento
- [ ] Agregar búsqueda y filtros avanzados
- [ ] Migrar a base de datos persistente (MySQL/PostgreSQL)
- [ ] Implementar tests unitarios e integración
- [ ] Agregar documentación Swagger/OpenAPI
- [ ] Implementar DTOs para transferencia de datos

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT.

## 👤 Autor

Desarrollado como parte de los trabajos SENA - Gestión de Usuarios

---

## ¿Necesitas Ayuda?

1. **Documentación General** → Lee [README_CRUD.md](./README_CRUD.md)
2. **Documentación de Endpoints** → Consulta [ENDPOINTS.md](./ENDPOINTS.md)
3. **Ejemplos Prácticos** → Mira [EJEMPLOS.md](./EJEMPLOS.md)
4. **Consola H2** → Accede a `http://localhost:8080/h2-console`

---

**¡Listo para usar!** 🎉 Inicia el servidor con `./mvnw spring-boot:run` y comienza a usar la API.
