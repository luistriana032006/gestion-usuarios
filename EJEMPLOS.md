# Ejemplos de Uso - API CRUD de Usuarios

Esta guía contiene ejemplos prácticos para probar todos los endpoints de la API.

## Preparación

Asegúrate de que el servidor está corriendo:
```bash
./mvnw spring-boot:run
```

## Ejemplos cURL

### 1. Crear un nuevo usuario

```bash
curl -X POST http://localhost:8080/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan.perez@example.com",
    "nombre": "Juan",
    "apellido": "Pérez",
    "contraseña": "Juan123!",
    "activo": true
  }'
```

**Respuesta esperada:**
```json
{
  "id": 1,
  "email": "juan.perez@example.com",
  "nombre": "Juan",
  "apellido": "Pérez",
  "contraseña": "Juan123!",
  "activo": true,
  "fechaCreacion": "2026-02-08 19:30:00",
  "fechaActualizacion": "2026-02-08 19:30:00"
}
```

---

### 2. Crear otro usuario

```bash
curl -X POST http://localhost:8080/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "email": "maria.garcia@example.com",
    "nombre": "María",
    "apellido": "García",
    "contraseña": "Maria456!",
    "activo": true
  }'
```

---

### 3. Obtener todos los usuarios

```bash
curl -X GET http://localhost:8080/api/usuarios
```

**Respuesta esperada:**
```json
[
  {
    "id": 1,
    "email": "juan.perez@example.com",
    "nombre": "Juan",
    "apellido": "Pérez",
    "contraseña": "Juan123!",
    "activo": true,
    "fechaCreacion": "2026-02-08 19:30:00",
    "fechaActualizacion": "2026-02-08 19:30:00"
  },
  {
    "id": 2,
    "email": "maria.garcia@example.com",
    "nombre": "María",
    "apellido": "García",
    "contraseña": "Maria456!",
    "activo": true,
    "fechaCreacion": "2026-02-08 19:30:15",
    "fechaActualizacion": "2026-02-08 19:30:15"
  }
]
```

---

### 4. Obtener un usuario por ID

```bash
curl -X GET http://localhost:8080/api/usuarios/1
```

**Respuesta esperada:**
```json
{
  "id": 1,
  "email": "juan.perez@example.com",
  "nombre": "Juan",
  "apellido": "Pérez",
  "contraseña": "Juan123!",
  "activo": true,
  "fechaCreacion": "2026-02-08 19:30:00",
  "fechaActualizacion": "2026-02-08 19:30:00"
}
```

---

### 5. Obtener usuario por email

```bash
curl -X GET http://localhost:8080/api/usuarios/email/juan.perez@example.com
```

**Respuesta esperada:**
```json
{
  "id": 1,
  "email": "juan.perez@example.com",
  "nombre": "Juan",
  "apellido": "Pérez",
  "contraseña": "Juan123!",
  "activo": true,
  "fechaCreacion": "2026-02-08 19:30:00",
  "fechaActualizacion": "2026-02-08 19:30:00"
}
```

---

### 6. Obtener solo usuarios activos

```bash
curl -X GET http://localhost:8080/api/usuarios/activos
```

**Respuesta esperada:**
```json
[
  {
    "id": 1,
    "email": "juan.perez@example.com",
    "nombre": "Juan",
    "apellido": "Pérez",
    "contraseña": "Juan123!",
    "activo": true,
    "fechaCreacion": "2026-02-08 19:30:00",
    "fechaActualizacion": "2026-02-08 19:30:00"
  },
  {
    "id": 2,
    "email": "maria.garcia@example.com",
    "nombre": "María",
    "apellido": "García",
    "contraseña": "Maria456!",
    "activo": true,
    "fechaCreacion": "2026-02-08 19:30:15",
    "fechaActualizacion": "2026-02-08 19:30:15"
  }
]
```

---

### 7. Actualizar un usuario

```bash
curl -X PUT http://localhost:8080/api/usuarios/1 \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan.updated@example.com",
    "nombre": "Juan Carlos",
    "apellido": "Pérez García",
    "contraseña": "NuevaContraseña123!",
    "activo": true
  }'
```

**Respuesta esperada:**
```json
{
  "id": 1,
  "email": "juan.updated@example.com",
  "nombre": "Juan Carlos",
  "apellido": "Pérez García",
  "contraseña": "NuevaContraseña123!",
  "activo": true,
  "fechaCreacion": "2026-02-08 19:30:00",
  "fechaActualizacion": "2026-02-08 19:35:22"
}
```

---

### 8. Desactivar un usuario

```bash
curl -X PATCH http://localhost:8080/api/usuarios/2/estado \
  -H "Content-Type: application/json" \
  -d '{
    "activo": false
  }'
```

**Respuesta esperada:**
```json
{
  "id": 2,
  "email": "maria.garcia@example.com",
  "nombre": "María",
  "apellido": "García",
  "contraseña": "Maria456!",
  "activo": false,
  "fechaCreacion": "2026-02-08 19:30:15",
  "fechaActualizacion": "2026-02-08 19:36:00"
}
```

---

### 9. Reactivar un usuario

```bash
curl -X PATCH http://localhost:8080/api/usuarios/2/estado \
  -H "Content-Type: application/json" \
  -d '{
    "activo": true
  }'
```

---

### 10. Eliminar un usuario

```bash
curl -X DELETE http://localhost:8080/api/usuarios/2
```

**Respuesta esperada:**
```json
{
  "mensaje": "Usuario eliminado correctamente"
}
```

---

### 11. Intentar obtener usuario eliminado (debe fallar)

```bash
curl -X GET http://localhost:8080/api/usuarios/2
```

**Respuesta esperada (404):**
```json
{
  "mensaje": "Usuario no encontrado"
}
```

---

## Ejemplos en PowerShell (Windows)

Si prefieres usar PowerShell en lugar de cURL:

### Crear usuario

```powershell
$body = @{
    email = "juan.perez@example.com"
    nombre = "Juan"
    apellido = "Pérez"
    contraseña = "Juan123!"
    activo = $true
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:8080/api/usuarios" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body
```

### Obtener todos

```powershell
Invoke-WebRequest -Uri "http://localhost:8080/api/usuarios" -Method GET
```

### Actualizar usuario

```powershell
$body = @{
    email = "juan.updated@example.com"
    nombre = "Juan Carlos"
    apellido = "Pérez García"
    contraseña = "NuevaContraseña123!"
    activo = $true
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:8080/api/usuarios/1" `
  -Method PUT `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body
```

### Eliminar usuario

```powershell
Invoke-WebRequest -Uri "http://localhost:8080/api/usuarios/1" -Method DELETE
```

---

## Ejemplos en JavaScript (Node.js/Fetch)

### Crear usuario

```javascript
const usuario = {
  email: "juan.perez@example.com",
  nombre: "Juan",
  apellido: "Pérez",
  contraseña: "Juan123!",
  activo: true
};

fetch('http://localhost:8080/api/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(usuario)
})
.then(response => response.json())
.then(data => console.log('Usuario creado:', data))
.catch(error => console.error('Error:', error));
```

### Obtener todos

```javascript
fetch('http://localhost:8080/api/usuarios')
  .then(response => response.json())
  .then(data => console.log('Usuarios:', data))
  .catch(error => console.error('Error:', error));
```

### Obtener usuario por ID

```javascript
fetch('http://localhost:8080/api/usuarios/1')
  .then(response => response.json())
  .then(data => console.log('Usuario:', data))
  .catch(error => console.error('Error:', error));
```

### Actualizar usuario

```javascript
const usuarioActualizado = {
  email: "juan.updated@example.com",
  nombre: "Juan Carlos",
  apellido: "Pérez García",
  contraseña: "NuevaContraseña123!",
  activo: true
};

fetch('http://localhost:8080/api/usuarios/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(usuarioActualizado)
})
.then(response => response.json())
.then(data => console.log('Usuario actualizado:', data))
.catch(error => console.error('Error:', error));
```

### Cambiar estado

```javascript
fetch('http://localhost:8080/api/usuarios/1/estado', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ activo: false })
})
.then(response => response.json())
.then(data => console.log('Estado cambiad:', data))
.catch(error => console.error('Error:', error));
```

### Eliminar usuario

```javascript
fetch('http://localhost:8080/api/usuarios/1', {
  method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log('Respuesta:', data))
.catch(error => console.error('Error:', error));
```

---

## Casos de Error

### Email duplicado

```bash
curl -X POST http://localhost:8080/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan.perez@example.com",
    "nombre": "Otro",
    "apellido": "Usuario",
    "contraseña": "password123"
  }'
```

**Respuesta esperada (400):**
```json
{
  "error": "El email ya existe en el sistema"
}
```

---

### Usuario no encontrado

```bash
curl -X GET http://localhost:8080/api/usuarios/999
```

**Respuesta esperada (404):**
```json
{
  "mensaje": "Usuario no encontrado"
}
```

---

### Actualización sin enviar campo 'activo'

```bash
curl -X PUT http://localhost:8080/api/usuarios/1 \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan@example.com",
    "nombre": "Juan",
    "apellido": "Pérez",
    "contraseña": "password123"
  }'
```

**Nota:** El campo activo es requerido en la actualización.

---

## Consola H2

Para ver los datos directamente en la base de datos:

1. Accede a: `http://localhost:8080/h2-console`
2. Ingresa:
   - **JDBC URL:** `jdbc:h2:mem:gestionndb`
   - **User Name:** `sa`
   - **Password:** (dejar en blanco)
3. Ejecuta consultas SQL:

```sql
SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE activo = true;

SELECT * FROM usuarios WHERE email LIKE '%example.com%';

SELECT COUNT(*) FROM usuarios;
```

---

## Tips y Recomendaciones

1. **Usa Postman o Insomnia** para una interfaz gráfica amigable
2. **Copia/pega los ejemplos** directamente en tu terminal
3. **Verifica la consola H2** para confirmar que los datos se están guardando
4. **Lee los mensajes de error** para entender qué validaciones fallaron
5. **Usa los códigos HTTP** para determinar si la solicitud fue exitosa o no

---

## Resumen de Operaciones

| Operación | Método | Endpoint | Status Esperado |
|-----------|--------|----------|-----------------|
| Crear usuario | POST | `/` | 201 |
| Obtener todos | GET | `/` | 200 |
| Obtener activos | GET | `/activos` | 200 |
| Obtener por ID | GET | `/{id}` | 200 |
| Obtener por email | GET | `/email/{email}` | 200 |
| Actualizar | PUT | `/{id}` | 200 |
| Cambiar estado | PATCH | `/{id}/estado` | 200 |
| Eliminar | DELETE | `/{id}` | 200 |
