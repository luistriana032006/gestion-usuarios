package com.luistriana.gestion_usuarios.service;

import com.luistriana.gestion_usuarios.model.Usuario;
import com.luistriana.gestion_usuarios.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    /**
     * Obtener todos los usuarios
     */
    public List<Usuario> obtenerTodos() {
        return usuarioRepository.findAll();
    }

    /**
     * Obtener un usuario por ID
     */
    public Optional<Usuario> obtenerPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    /**
     * Obtener un usuario por email
     */
    public Optional<Usuario> obtenerPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    /**
     * Crear un nuevo usuario
     */
    public Usuario crear(Usuario usuario) {
        if (usuarioRepository.existsByEmail(usuario.getEmail())) {
            throw new IllegalArgumentException("El email ya existe en el sistema");
        }
        usuario.setFechaCreacion(LocalDateTime.now().format(formatter));
        usuario.setFechaActualizacion(LocalDateTime.now().format(formatter));
        return usuarioRepository.save(usuario);
    }

    /**
     * Actualizar un usuario existente
     */
    public Usuario actualizar(Long id, Usuario usuarioActualizado) {
        Optional<Usuario> usuarioExistente = usuarioRepository.findById(id);

        if (usuarioExistente.isEmpty()) {
            throw new IllegalArgumentException("Usuario no encontrado con ID: " + id);
        }

        Usuario usuario = usuarioExistente.get();

        // Validar que el email no esté en uso por otro usuario
        if (!usuario.getEmail().equals(usuarioActualizado.getEmail()) &&
            usuarioRepository.existsByEmail(usuarioActualizado.getEmail())) {
            throw new IllegalArgumentException("El email ya existe en el sistema");
        }

        usuario.setEmail(usuarioActualizado.getEmail());
        usuario.setNombre(usuarioActualizado.getNombre());
        usuario.setApellido(usuarioActualizado.getApellido());
        usuario.setContraseña(usuarioActualizado.getContraseña());
        usuario.setActivo(usuarioActualizado.getActivo());
        usuario.setFechaActualizacion(LocalDateTime.now().format(formatter));

        return usuarioRepository.save(usuario);
    }

    /**
     * Eliminar un usuario
     */
    public void eliminar(Long id) {
        if (!usuarioRepository.existsById(id)) {
            throw new IllegalArgumentException("Usuario no encontrado con ID: " + id);
        }
        usuarioRepository.deleteById(id);
    }

    /**
     * Cambiar estado de un usuario
     */
    public Usuario cambiarEstado(Long id, Boolean activo) {
        Optional<Usuario> usuarioExistente = usuarioRepository.findById(id);

        if (usuarioExistente.isEmpty()) {
            throw new IllegalArgumentException("Usuario no encontrado con ID: " + id);
        }

        Usuario usuario = usuarioExistente.get();
        usuario.setActivo(activo);
        usuario.setFechaActualizacion(LocalDateTime.now().format(formatter));

        return usuarioRepository.save(usuario);
    }

    /**
     * Obtener usuarios activos
     */
    public List<Usuario> obtenerActivos() {
        return usuarioRepository.findAll().stream()
                .filter(u -> u.getActivo() != null && u.getActivo())
                .toList();
    }
}
