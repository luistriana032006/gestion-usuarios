# 🚀 Guía Rápida - Gestión de Usuarios

Una guía paso a paso para empezar a usar la aplicación en 5 minutos.

## ⚡ Inicio Rápido (5 minutos)

### Paso 1: Compilar y Ejecutar

```bash
# Abre una terminal en el directorio del proyecto

# Compilar
./mvnw clean compile

# Ejecutar
./mvnw spring-boot:run
```

Espera a que veas:
```
[INFO] Tomcat started on port(s): 8080
```

### Paso 2: Abrir el Navegador

Abre tu navegador preferido y ve a:
```
http://localhost:8080
```

¡Verás la interfaz web cargada! 🎉

### Paso 3: Crear tu Primer Usuario

1. **Panel Izquierdo - Formulario:**
   - Email: `juan@example.com`
   - Nombre: `Juan`
   - Apellido: `Pérez`
   - Contraseña: `password123`
   - Activo: ✓ (seleccionado)

2. **Haz clic en "Guardar"**

3. **¡Listo!** Verás un mensaje de éxito y el usuario aparecerá en la tabla

## 📖 Usuarios Principales

### Panel Izquierdo - Formulario
```
┌─────────────────────────┐
│    Crear Usuario        │
├─────────────────────────┤
│ Email:        [-------] │
│ Nombre:       [-------] │
│ Apellido:     [-------] │
│ Contraseña:   [-------] │
│ □ Activo              │
│                         │
│  [Guardar] [Cancelar]  │
├─────────────────────────┤
│ ✓ Usuario creado       │
└─────────────────────────┘
```

### Panel Derecho - Tabla de Usuarios
```
┌────────────────────────────────────────────┐
│ Lista de Usuarios  [Todos] [Act] [Inac]   │
├────────────────────────────────────────────┤
│ Buscar: [Escribe para filtrar...]         │
├────────────────────────────────────────────┤
│ ID │ Email │ Nombre │ Estado │ Acciones   │
├────────────────────────────────────────────┤
│ 1  │ j.p.  │ Juan   │ Activo │ 👁 ✏ ⚪ 🗑 │
│ 2  │ m.g.  │ María  │ Act.   │ 👁 ✏ ⚪ 🗑 │
└────────────────────────────────────────────┘
```

## 🎯 Operaciones Comunes

### Crear Usuario
```
1. Completa el formulario
2. Haz clic en "Guardar"
3. Verás una notificación verde
4. El usuario aparece en la tabla
```

### Buscar Usuario
```
1. Usa el cuadro "Buscar"
2. Escribe email, nombre o apellido
3. La tabla se filtra en tiempo real
```

### Ver Detalles
```
1. Haz clic en el botón 👁 (ojo)
2. Se abrirá un modal con la información
3. Haz clic en "Cerrar"
```

### Editar Usuario
```
1. Haz clic en el botón ✏ (lápiz)
2. El formulario se rellena automáticamente
3. Cambia los datos
4. Haz clic en "Guardar"
```

### Cambiar Estado
```
1. Haz clic en el botón ⚪ (interruptor)
2. El usuario se activa o desactiva
3. Verás una notificación de confirmación
```

### Eliminar Usuario
```
1. Haz clic en el botón 🗑 (papelera)
2. Se abrirá un modal de confirmación
3. Haz clic en "Confirmar"
4. El usuario se eliminará permanentemente
```

## 🔍 Filtros

### Botones de Radio
- **Todos** - Muestra todos los usuarios
- **Activos** - Solo usuarios activos
- **Inactivos** - Solo usuarios inactivos

### Búsqueda
Filtra por:
- Email (completo o parcial)
- Nombre
- Apellido

## 📊 Información Útil

### Campos Requeridos
- ✅ Email (debe ser único)
- ✅ Nombre
- ✅ Apellido
- ✅ Contraseña

### Información Automática
- Fecha de creación (generada automáticamente)
- Fecha de última actualización (actualizada al modificar)
- Estado (por defecto: Activo)

## 🎨 Colores y Significados

| Color | Significado |
|-------|------------|
| 🟢 Verde | Éxito / Usuario Activo |
| 🔴 Rojo | Error / Usuario Inactivo |
| 🔵 Azul | Información / Primario |
| 🟡 Amarillo | Advertencia |

## 🐛 Problemas Comunes

### "Error al cargar usuarios"
- ✅ Verifica que el servidor está ejecutándose
- ✅ Comprueba que estés en `http://localhost:8080`

### "El email ya existe"
- ✅ Usa un email único
- ✅ O edita el usuario existente

### "No veo el usuario creado"
- ✅ Verifica que no hay filtro activo
- ✅ Borra el texto de búsqueda
- ✅ Recarga la página (F5)

## 🌐 Acceso a Bases de Datos (Opcional)

Si quieres ver los datos directamente:

1. Ve a: `http://localhost:8080/h2-console`
2. Ingresa:
   - **JDBC URL:** `jdbc:h2:mem:gestionndb`
   - **User Name:** `sa`
   - **Password:** (vacío)
3. Ejecuta:
   ```sql
   SELECT * FROM usuarios;
   ```

## 📝 Ejemplos de Datos

### Usuario 1
```
Email: juan.perez@empresa.com
Nombre: Juan
Apellido: Pérez
Contraseña: JuanPass123!
```

### Usuario 2
```
Email: maria.garcia@empresa.com
Nombre: María
Apellido: García
Contraseña: MariaPass456!
```

### Usuario 3
```
Email: carlos.lopez@empresa.com
Nombre: Carlos
Apellido: López
Contraseña: CarlosPass789!
```

## 🎓 Próximos Pasos

Una vez que domines lo básico:

1. **Crea varios usuarios** para practicar
2. **Prueba los filtros** (Todos, Activos, Inactivos)
3. **Busca usuarios** por email, nombre o apellido
4. **Edita usuarios** para cambiar su información
5. **Desactiva usuarios** sin eliminarlos
6. **Consulta la API** usando cURL o Postman

## 📚 Documentación Completa

Para más detalles:
- **[FRONTEND.md](./FRONTEND.md)** - Documentación del frontend
- **[ENDPOINTS.md](./ENDPOINTS.md)** - Documentación de la API
- **[EJEMPLOS.md](./EJEMPLOS.md)** - Ejemplos con cURL

## 🔗 URLs Importantes

| URL | Descripción |
|-----|------------|
| `http://localhost:8080` | Frontend web |
| `http://localhost:8080/api/usuarios` | API REST |
| `http://localhost:8080/h2-console` | Consola de BD |

## ✅ Checklist de Inicio

- [ ] Servidor ejecutándose (`./mvnw spring-boot:run`)
- [ ] Navegador abierto en `http://localhost:8080`
- [ ] Crear usuario de prueba
- [ ] Ver usuario en la tabla
- [ ] Buscar usuario
- [ ] Editar usuario
- [ ] Cambiar estado
- [ ] Ver detalles
- [ ] Crear otro usuario
- [ ] Practicar con filtros

## 🎉 ¡Listo!

Ya estás usando la aplicación de Gestión de Usuarios.

**¿Qué sigue?**
- Explora todas las funcionalidades
- Lee la documentación completa
- Prueba los endpoints con cURL/Postman
- ¡Disfruta desarrollando!

---

**Tiempo estimado:** 5 minutos ⏱️
**Dificultad:** ⭐ Muy Fácil
**Soporte:** Consulta [FRONTEND.md](./FRONTEND.md) o [ENDPOINTS.md](./ENDPOINTS.md)
