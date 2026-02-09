package com.luistriana.gestion_usuarios.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String apellido;

    @Column(nullable = false)
    private String contraseña;

    @Column(name = "estado")
    private Boolean activo = true;

    @Column(name = "fecha_creacion")
    private String fechaCreacion;

    @Column(name = "fecha_actualizacion")
    private String fechaActualizacion;
}
