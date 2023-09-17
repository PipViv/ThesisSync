CREATE DATABASE thesisSync_Test;

-- Cambia la secuencia para la columna id en Usuarios
CREATE SEQUENCE usuarios_id_seq;

-- Crear la tabla Usuarios
CREATE TABLE Usuarios (
    id INT DEFAULT nextval('usuarios_id_seq') PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    codigo_unicatolica INT NOT NULL,
    fecha_creacion DATE NOT NULL,
    rol_id INT NOT NULL,
    FOREIGN KEY (rol_id) REFERENCES Roles(id)
);

-- Crear la tabla Roles
CREATE TABLE Roles (
    id INT DEFAULT nextval('usuarios_id_seq') PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);


