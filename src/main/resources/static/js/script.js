// Configuración de la API
const API_URL = 'http://localhost:8080/api/usuarios';

// Elementos del DOM
const usuarioForm = document.getElementById('usuarioForm');
const usuarioIdInput = document.getElementById('usuarioId');
const emailInput = document.getElementById('email');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const contraseñaInput = document.getElementById('contraseña');
const activoInput = document.getElementById('activo');
const btnLimpiar = document.getElementById('btnLimpiar');
const usuariosTableBody = document.getElementById('usuariosTableBody');
const alertaExito = document.getElementById('alertaExito');
const alertaError = document.getElementById('alertaError');
const alertaExitoMsg = document.getElementById('alertaExitoMsg');
const alertaErrorMsg = document.getElementById('alertaErrorMsg');
const formTitle = document.getElementById('formTitle');
const totalUsuarios = document.getElementById('totalUsuarios');
const sinResultados = document.getElementById('sinResultados');
const busqueda = document.getElementById('busqueda');
const filtroTodos = document.getElementById('filtroTodos');
const filtroActivos = document.getElementById('filtroActivos');
const filtroInactivos = document.getElementById('filtroInactivos');

// Modales
const modalConfirmar = new bootstrap.Modal(document.getElementById('modalConfirmar'));
const modalDetalles = new bootstrap.Modal(document.getElementById('modalDetalles'));
const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
const btnConfirmar = document.getElementById('btnConfirmar');

// Variables globales
let usuarios = [];
let usuarioAEditar = null;
let accionConfirmacion = null;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    cargarUsuarios();
    usuarioForm.addEventListener('submit', manejarSubmitForm);
    btnLimpiar.addEventListener('click', limpiarFormulario);
    btnConfirmar.addEventListener('click', ejecutarAccionConfirmada);
    filtroTodos.addEventListener('change', aplicarFiltros);
    filtroActivos.addEventListener('change', aplicarFiltros);
    filtroInactivos.addEventListener('change', aplicarFiltros);
    busqueda.addEventListener('input', aplicarFiltros);
});

/**
 * Cargar todos los usuarios desde la API
 */
async function cargarUsuarios() {
    try {
        mostrarCargando();
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Error al cargar usuarios');
        }

        usuarios = await response.json();
        aplicarFiltros();
        actualizarTotal();
    } catch (error) {
        console.error('Error:', error);
        mostrarError('Error al cargar los usuarios. Verifica que el servidor esté corriendo.');
        usuariosTableBody.innerHTML = '<tr><td colspan="6" class="text-center text-danger py-4"><i class="fas fa-exclamation-triangle"></i> Error al cargar usuarios</td></tr>';
    }
}

/**
 * Aplicar filtros y búsqueda a la tabla
 */
function aplicarFiltros() {
    let usuariosFiltrados = [...usuarios];

    // Filtrar por estado
    const filtroSeleccionado = document.querySelector('input[name="filtro"]:checked').value;

    if (filtroSeleccionado === 'activos') {
        usuariosFiltrados = usuariosFiltrados.filter(u => u.activo);
    } else if (filtroSeleccionado === 'inactivos') {
        usuariosFiltrados = usuariosFiltrados.filter(u => !u.activo);
    }

    // Filtrar por búsqueda
    const textoBusqueda = busqueda.value.toLowerCase();
    if (textoBusqueda) {
        usuariosFiltrados = usuariosFiltrados.filter(u =>
            u.email.toLowerCase().includes(textoBusqueda) ||
            u.nombre.toLowerCase().includes(textoBusqueda) ||
            u.apellido.toLowerCase().includes(textoBusqueda)
        );
    }

    renderizarTabla(usuariosFiltrados);
}

/**
 * Renderizar la tabla de usuarios
 */
function renderizarTabla(usuariosList) {
    if (usuariosList.length === 0) {
        usuariosTableBody.innerHTML = '';
        sinResultados.classList.remove('d-none');
        return;
    }

    sinResultados.classList.add('d-none');
    usuariosTableBody.innerHTML = usuariosList.map(usuario => `
        <tr>
            <td><strong>#${usuario.id}</strong></td>
            <td>${usuario.email}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>
                <span class="badge ${usuario.activo ? 'badge-activo' : 'badge-inactivo'}">
                    ${usuario.activo ? '<i class="fas fa-check"></i> Activo' : '<i class="fas fa-times"></i> Inactivo'}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-sm btn-info" onclick="mostrarDetalles(${usuario.id})" title="Ver detalles">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-warning" onclick="editarUsuario(${usuario.id})" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-secondary" onclick="cambiarEstado(${usuario.id}, ${!usuario.activo})" title="Cambiar estado">
                        <i class="fas fa-toggle-${usuario.activo ? 'on' : 'off'}"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="confirmarEliminar(${usuario.id})" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

/**
 * Manejar el envío del formulario
 */
async function manejarSubmitForm(e) {
    e.preventDefault();

    const datosUsuario = {
        email: emailInput.value,
        nombre: nombreInput.value,
        apellido: apellidoInput.value,
        contraseña: contraseñaInput.value,
        activo: activoInput.checked
    };

    try {
        let response;
        const usuarioId = usuarioIdInput.value;

        if (usuarioId) {
            // Actualizar usuario
            response = await fetch(`${API_URL}/${usuarioId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosUsuario)
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Error al actualizar usuario');
            }

            mostrarExito('Usuario actualizado correctamente');
        } else {
            // Crear usuario
            response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosUsuario)
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Error al crear usuario');
            }

            mostrarExito('Usuario creado correctamente');
        }

        limpiarFormulario();
        cargarUsuarios();
    } catch (error) {
        console.error('Error:', error);
        mostrarError(error.message);
    }
}

/**
 * Editar un usuario
 */
function editarUsuario(id) {
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        mostrarError('Usuario no encontrado');
        return;
    }

    usuarioIdInput.value = usuario.id;
    emailInput.value = usuario.email;
    nombreInput.value = usuario.nombre;
    apellidoInput.value = usuario.apellido;
    contraseñaInput.value = usuario.contraseña;
    activoInput.checked = usuario.activo;

    formTitle.innerHTML = '<i class="fas fa-user-edit"></i> Editar Usuario';
    btnLimpiar.style.display = 'block';
    emailInput.focus();

    // Scroll hacia el formulario
    document.querySelector('.card').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Limpiar el formulario
 */
function limpiarFormulario() {
    usuarioForm.reset();
    usuarioIdInput.value = '';
    formTitle.innerHTML = '<i class="fas fa-user-plus"></i> Crear Usuario';
    btnLimpiar.style.display = 'none';
    usuarioAEditar = null;
}

/**
 * Mostrar detalles de un usuario en modal
 */
function mostrarDetalles(id) {
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        mostrarError('Usuario no encontrado');
        return;
    }

    document.getElementById('detalleId').textContent = usuario.id;
    document.getElementById('detalleEmail').textContent = usuario.email;
    document.getElementById('detalleNombre').textContent = usuario.nombre;
    document.getElementById('detalleApellido').textContent = usuario.apellido;
    document.getElementById('detalleEstado').innerHTML = `
        <span class="badge ${usuario.activo ? 'badge-activo' : 'badge-inactivo'}">
            ${usuario.activo ? 'Activo' : 'Inactivo'}
        </span>
    `;
    document.getElementById('detalleFechaCreacion').textContent = usuario.fechaCreacion;

    modalDetalles.show();
}

/**
 * Confirmar eliminación de usuario
 */
function confirmarEliminar(id) {
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        mostrarError('Usuario no encontrado');
        return;
    }

    mensajeConfirmacion.innerHTML = `¿Está seguro que desea eliminar al usuario <strong>${usuario.email}</strong>? Esta acción no se puede deshacer.`;
    accionConfirmacion = () => eliminarUsuario(id);
    modalConfirmar.show();
}

/**
 * Eliminar un usuario
 */
async function eliminarUsuario(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Error al eliminar usuario');
        }

        mostrarExito('Usuario eliminado correctamente');
        cargarUsuarios();
    } catch (error) {
        console.error('Error:', error);
        mostrarError(error.message);
    }
}

/**
 * Cambiar estado de un usuario
 */
async function cambiarEstado(id, nuevoEstado) {
    try {
        const response = await fetch(`${API_URL}/${id}/estado`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ activo: nuevoEstado })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Error al cambiar estado');
        }

        const estadoTexto = nuevoEstado ? 'Activado' : 'Desactivado';
        mostrarExito(`Usuario ${estadoTexto} correctamente`);
        cargarUsuarios();
    } catch (error) {
        console.error('Error:', error);
        mostrarError(error.message);
    }
}

/**
 * Ejecutar acción confirmada en el modal
 */
function ejecutarAccionConfirmada() {
    if (accionConfirmacion) {
        accionConfirmacion();
        modalConfirmar.hide();
    }
}

/**
 * Mostrar alerta de éxito
 */
function mostrarExito(mensaje) {
    alertaExitoMsg.textContent = mensaje;
    alertaExito.classList.remove('d-none');
    alertaError.classList.add('d-none');

    setTimeout(() => {
        alertaExito.classList.add('d-none');
    }, 4000);
}

/**
 * Mostrar alerta de error
 */
function mostrarError(mensaje) {
    alertaErrorMsg.textContent = mensaje;
    alertaError.classList.remove('d-none');
    alertaExito.classList.add('d-none');

    setTimeout(() => {
        alertaError.classList.add('d-none');
    }, 5000);
}

/**
 * Mostrar estado de cargando
 */
function mostrarCargando() {
    usuariosTableBody.innerHTML = `
        <tr>
            <td colspan="6" class="text-center text-muted py-4">
                <i class="fas fa-spinner fa-spin"></i> Cargando usuarios...
            </td>
        </tr>
    `;
}

/**
 * Actualizar el total de usuarios
 */
function actualizarTotal() {
    totalUsuarios.textContent = usuarios.length;
}
