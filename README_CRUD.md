# CRUD de Gestión de Usuarios - Spring Boot

Este proyecto implementa un CRUD (Create, Read, Update, Delete) completo para la gestión de usuarios utilizando Spring Boot 4.0.2 y Java 21.

## Características

✅ **CREATE:** Crear nuevos usuarios
✅ **READ:** Obtener usuarios por ID, email o listar todos
✅ **UPDATE:** Actualizar información de usuarios
✅ **DELETE:** Eliminar usuarios
✅ **PATCH:** Cambiar estado de activación de usuarios
✅ **Validación:** Email único en el sistema
✅ **Timestamps:** Fechas de creación y actualización automáticas
✅ **Base de datos:** H2 en memoria (fácil para desarrollo y pruebas)

## Estructura del Proyecto

```
src/main/java/com/luistriana/gestion_usuarios/
├── model/
│   └── Usuario.java                 # Entidad JPA
├── repository/
│   └── UsuarioRepository.java       # Interfaz de acceso a datos
├── service/
│   └── UsuarioService.java          # Lógica de negocio
├── controller/
│   └── UsuarioController.java       # Endpoints REST
└── GestionUsuariosApplication.java  # Clase principal
```

## Dependencias Principales

- **Spring Boot Starter Web:** Para crear la aplicación web REST
- **Spring Boot Starter Data JPA:** Para acceso a datos y ORM
- **H2 Database:** Base de datos embebida en memoria
- **Lombok:** Para anotaciones que generan código boilerplate
- **Jakarta Persistence API:** API estándar de persistencia

## Instalación y Ejecución

### Requisitos
- Java 21 o superior
- Maven 3.6+

### Compilar el proyecto
```bash
./mvnw clean compile
```

### Ejecutar la aplicación
```bash
./mvnw spring-boot:run
```

La aplicación se iniciará en `http://localhost:8080`

## Endpoints de la API

Ver el archivo [ENDPOINTS.md](./ENDPOINTS.md) para la documentación completa de todos los endpoints.

### Ejemplos rápidos

**Obtener todos los usuarios:**
```bash
curl -X GET http://localhost:8080/api/usuarios
```

**Crear un usuario:**
```bash
curl -X POST http://localhost:8080/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@example.com",
    "nombre": "Juan",
    "apellido": "Pérez",
    "contraseña": "password123"
  }'
```

**Actualizar un usuario:**
```bash
curl -X PUT http://localhost:8080/api/usuarios/1 \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@example.com",
    "nombre": "Juan",
    "apellido": "García",
    "contraseña": "newpassword123",
    "activo": true
  }'
```

**Eliminar un usuario:**
```bash
curl -X DELETE http://localhost:8080/api/usuarios/1
```

## Configuración

El archivo `application.properties` contiene la configuración:

```properties
spring.application.name=gestion-usuarios
server.port=8080

# H2 Database
spring.datasource.url=jdbc:h2:mem:gestionndb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa

# H2 Console
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# JPA Configuration
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
```

## Acceso a la Base de Datos

Puedes acceder a la consola H2 mientras el servidor está corriendo:

```
URL: http://localhost:8080/h2-console
JDBC URL: jdbc:h2:mem:gestionndb
User Name: sa
Password: (dejar en blanco)
```

## Modelo de Datos

### Tabla: usuarios

| Campo | Tipo | Restricciones |
|-------|------|---------------|
| id | BIGINT | PK, Auto-increment |
| email | VARCHAR | NOT NULL, UNIQUE |
| nombre | VARCHAR | NOT NULL |
| apellido | VARCHAR | NOT NULL |
| contraseña | VARCHAR | NOT NULL |
| estado | BOOLEAN | DEFAULT true |
| fecha_creacion | VARCHAR | Auto-generado |
| fecha_actualizacion | VARCHAR | Auto-generado |

## Validaciones

- ✅ Email único en todo el sistema
- ✅ Email y contraseña requeridos
- ✅ Nombre y apellido requeridos
- ✅ Validación de ID existente en operaciones de actualización y eliminación

## Códigos de Respuesta

| Código | Significado |
|--------|------------|
| 200 | Solicitud exitosa |
| 201 | Recurso creado |
| 400 | Solicitud inválida o violación de reglas de negocio |
| 404 | Recurso no encontrado |
| 500 | Error interno del servidor |

## Notas Importantes

1. **H2 en memoria:** La base de datos se reinicia cada vez que se inicia la aplicación (perfecta para desarrollo)
2. **Fechas:** Se registran automáticamente en formato `yyyy-MM-dd HH:mm:ss`
3. **CORS habilitado:** Los endpoints aceptan solicitudes desde cualquier origen
4. **Lombok:** Se utiliza para reducir código boilerplate en la entidad Usuario

## Futuras Mejoras Sugeridas

- [ ] Implementar autenticación y autorización
- [ ] Agregar validaciones adicionales (formato de email, contraseña fuerte)
- [ ] Implementar paginación en listados
- [ ] Agregar búsqueda y filtros avanzados
- [ ] Migrar a una base de datos persistente (MySQL, PostgreSQL)
- [ ] Implementar pruebas unitarias e integración
- [ ] Agregar documentación Swagger/OpenAPI
- [ ] Implementar caché para mejorar rendimiento

## Troubleshooting

**Error: "El email ya existe en el sistema"**
- Asegúrate de usar un email único que no haya sido registrado previamente

**Error: "Usuario no encontrado"**
- Verifica que el ID proporcionado existe en la base de datos

**Error de conexión a la base de datos**
- Asegúrate de que el servidor esté corriendo
- Verifica la configuración en `application.properties`

## Autor

Proyecto desarrollado como parte de los trabajos SENA - Gestion de Usuarios

## Licencia

MIT
