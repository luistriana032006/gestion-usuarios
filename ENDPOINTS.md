# CRUD de Gestión de Usuarios - Documentación de Endpoints

## Base URL
```
http://localhost:8080/api/usuarios
```

## Endpoints Disponibles

### 1. Obtener todos los usuarios
**Método:** `GET`
**Endpoint:** `/`
**Descripción:** Retorna una lista de todos los usuarios en el sistema

**Ejemplo de request:**
```bash
curl -X GET http://localhost:8080/api/usuarios
```

**Respuesta (200 OK):**
```json
[
  {
    "id": 1,
    "email": "juan@example.com",
    "nombre": "Juan",
    "apellido": "Pérez",
    "contraseña": "password123",
    "activo": true,
    "fechaCreacion": "2026-02-08 19:20:00",
    "fechaActualizacion": "2026-02-08 19:20:00"
  }
]
```

---

### 2. Obtener usuarios activos
**Método:** `GET`
**Endpoint:** `/activos`
**Descripción:** Retorna solo los usuarios con estado activo

**Ejemplo de request:**
```bash
curl -X GET http://localhost:8080/api/usuarios/activos
```

**Respuesta (200 OK):**
```json
[
  {
    "id": 1,
    "email": "juan@example.com",
    "nombre": "Juan",
    "apellido": "Pérez",
    "contraseña": "password123",
    "activo": true,
    "fechaCreacion": "2026-02-08 19:20:00",
    "fechaActualizacion": "2026-02-08 19:20:00"
  }
]
```

---

### 3. Obtener un usuario por ID
**Método:** `GET`
**Endpoint:** `/{id}`
**Parámetros:**
- `id` (path parameter): ID del usuario

**Ejemplo de request:**
```bash
curl -X GET http://localhost:8080/api/usuarios/1
```

**Respuesta (200 OK):**
```json
{
  "id": 1,
  "email": "juan@example.com",
  "nombre": "Juan",
  "apellido": "Pérez",
  "contraseña": "password123",
  "activo": true,
  "fechaCreacion": "2026-02-08 19:20:00",
  "fechaActualizacion": "2026-02-08 19:20:00"
}
```

**Respuesta (404 Not Found):**
```json
{
  "mensaje": "Usuario no encontrado"
}
```

---

### 4. Obtener un usuario por email
**Método:** `GET`
**Endpoint:** `/email/{email}`
**Parámetros:**
- `email` (path parameter): Email del usuario

**Ejemplo de request:**
```bash
curl -X GET http://localhost:8080/api/usuarios/email/juan@example.com
```

**Respuesta (200 OK):**
```json
{
  "id": 1,
  "email": "juan@example.com",
  "nombre": "Juan",
  "apellido": "Pérez",
  "contraseña": "password123",
  "activo": true,
  "fechaCreacion": "2026-02-08 19:20:00",
  "fechaActualizacion": "2026-02-08 19:20:00"
}
```

**Respuesta (404 Not Found):**
```json
{
  "mensaje": "Usuario no encontrado"
}
```

---

### 5. Crear un nuevo usuario
**Método:** `POST`
**Endpoint:** `/`
**Content-Type:** `application/json`

**Body requerido:**
```json
{
  "email": "nuevo@example.com",
  "nombre": "Carlos",
  "apellido": "García",
  "contraseña": "password123",
  "activo": true
}
```

**Ejemplo de request:**
```bash
curl -X POST http://localhost:8080/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "email": "nuevo@example.com",
    "nombre": "Carlos",
    "apellido": "García",
    "contraseña": "password123",
    "activo": true
  }'
```

**Respuesta (201 Created):**
```json
{
  "id": 2,
  "email": "nuevo@example.com",
  "nombre": "Carlos",
  "apellido": "García",
  "contraseña": "password123",
  "activo": true,
  "fechaCreacion": "2026-02-08 19:21:00",
  "fechaActualizacion": "2026-02-08 19:21:00"
}
```

**Respuesta (400 Bad Request):**
```json
{
  "error": "El email ya existe en el sistema"
}
```

---

### 6. Actualizar un usuario
**Método:** `PUT`
**Endpoint:** `/{id}`
**Content-Type:** `application/json`
**Parámetros:**
- `id` (path parameter): ID del usuario a actualizar

**Body requerido:**
```json
{
  "email": "actualizado@example.com",
  "nombre": "Juan",
  "apellido": "Pérez",
  "contraseña": "newpassword123",
  "activo": true
}
```

**Ejemplo de request:**
```bash
curl -X PUT http://localhost:8080/api/usuarios/1 \
  -H "Content-Type: application/json" \
  -d '{
    "email": "actualizado@example.com",
    "nombre": "Juan",
    "apellido": "Pérez",
    "contraseña": "newpassword123",
    "activo": true
  }'
```

**Respuesta (200 OK):**
```json
{
  "id": 1,
  "email": "actualizado@example.com",
  "nombre": "Juan",
  "apellido": "Pérez",
  "contraseña": "newpassword123",
  "activo": true,
  "fechaCreacion": "2026-02-08 19:20:00",
  "fechaActualizacion": "2026-02-08 19:21:30"
}
```

**Respuesta (404 Not Found):**
```json
{
  "error": "Usuario no encontrado con ID: 1"
}
```

**Respuesta (400 Bad Request):**
```json
{
  "error": "El email ya existe en el sistema"
}
```

---

### 7. Cambiar estado de un usuario
**Método:** `PATCH`
**Endpoint:** `/{id}/estado`
**Content-Type:** `application/json`
**Parámetros:**
- `id` (path parameter): ID del usuario

**Body requerido:**
```json
{
  "activo": false
}
```

**Ejemplo de request:**
```bash
curl -X PATCH http://localhost:8080/api/usuarios/1/estado \
  -H "Content-Type: application/json" \
  -d '{
    "activo": false
  }'
```

**Respuesta (200 OK):**
```json
{
  "id": 1,
  "email": "juan@example.com",
  "nombre": "Juan",
  "apellido": "Pérez",
  "contraseña": "password123",
  "activo": false,
  "fechaCreacion": "2026-02-08 19:20:00",
  "fechaActualizacion": "2026-02-08 19:22:00"
}
```

**Respuesta (404 Not Found):**
```json
{
  "error": "Usuario no encontrado con ID: 1"
}
```

**Respuesta (400 Bad Request):**
```json
{
  "error": "El campo 'activo' es requerido"
}
```

---

### 8. Eliminar un usuario
**Método:** `DELETE`
**Endpoint:** `/{id}`
**Parámetros:**
- `id` (path parameter): ID del usuario a eliminar

**Ejemplo de request:**
```bash
curl -X DELETE http://localhost:8080/api/usuarios/1
```

**Respuesta (200 OK):**
```json
{
  "mensaje": "Usuario eliminado correctamente"
}
```

**Respuesta (404 Not Found):**
```json
{
  "error": "Usuario no encontrado con ID: 1"
}
```

---

## Estructura de Datos de Usuario

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| id | Long | Auto-generado | ID único del usuario |
| email | String | Sí | Email único del usuario |
| nombre | String | Sí | Nombre del usuario |
| apellido | String | Sí | Apellido del usuario |
| contraseña | String | Sí | Contraseña del usuario |
| activo | Boolean | No | Estado del usuario (por defecto: true) |
| fechaCreacion | String | Auto-generada | Fecha de creación (yyyy-MM-dd HH:mm:ss) |
| fechaActualizacion | String | Auto-generada | Fecha de última actualización (yyyy-MM-dd HH:mm:ss) |

---

## Códigos de Respuesta HTTP

| Código | Descripción |
|--------|-------------|
| 200 | OK - Solicitud exitosa |
| 201 | Created - Recurso creado exitosamente |
| 400 | Bad Request - Solicitud inválida |
| 404 | Not Found - Recurso no encontrado |
| 500 | Internal Server Error - Error del servidor |

---

## Acceso a la Consola H2

Mientras el servidor está corriendo, puedes acceder a la consola H2 en:
```
http://localhost:8080/h2-console
```

**Configuración:**
- JDBC URL: `jdbc:h2:mem:gestionndb`
- User Name: `sa`
- Password: (dejar en blanco)
