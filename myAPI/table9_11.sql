CREATE DATABASE IF NOT EXISTS EJOB;
USE EJOB;
SET FOREIGN_KEY_CHECKS = 0;
CREATE TABLE juegos(
id_juego INT NOT NULL AUTO_INCREMENT,
nombre_juego VARCHAR(40) NOT NULL,
tematica VARCHAR(150),
imagen VARCHAR(100),
PRIMARY KEY (id_juego)
);

CREATE TABLE empresas(
id_empresa INT NOT NULL AUTO_INCREMENT,
nombre_empresa VARCHAR(40) NOT NULL,
descripcion VARCHAR(150) NOT NULL,
imagen VARCHAR(100),
PRIMARY KEY (id_empresa)
);
CREATE TABLE usuarios(
id_usuario INT NOT NULL AUTO_INCREMENT,
nombre_usuario VARCHAR(40) NOT NULL,
apellido_usuario VARCHAR(40) NOT NULL,
apodo VARCHAR(40) NOT NULL,
contraseña VARCHAR(40) NOT NULL,
dni INT NOT NULL,
pais VARCHAR(40) NOT NULL,
localidad VARCHAR(40) NOT NULL,
telefono INT NOT NULL,
email VARCHAR(40) NOT NULL,
descripcion VARCHAR(150),
imagen VARCHAR(100),
createdAt DATETIME,
updatedAt DATETIME,
PRIMARY KEY (id_usuario)
);


CREATE TABLE comentarios(
id_comentario INT NOT NULL AUTO_INCREMENT,
id_usuario INT NOT NULL,
fecha DATETIME,
PRIMARY KEY (id_comentario),
CONSTRAINT fk_usuario_comentario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
CREATE TABLE juego_usuarios(
id_juego_usuario INT NOT NULL AUTO_INCREMENT,
id_usuario INT NOT NULL,
id_juego INT NOT NULL,
clasificacion_usuario VARCHAR(40) NOT NULL,
rol_de_juego VARCHAR(40) NOT NULL,
PRIMARY KEY(id_juego_usuario),
CONSTRAINT fk_usuario_juego FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
CONSTRAINT fk_juego_usuario FOREIGN KEY (id_juego) REFERENCES juegos(id_juego)
);

INSERT INTO usuarios (id_usuario, nombre_usuario, apellido_usuario, apodo, contraseña, dni, pais, localidad, telefono, email,  descripcion, imagen)
VALUES (1, "Lucas", "Medina", "Luquitas", "vamosboca", 44714049, "Argentina", "Capital Federal", 1123456789, "lucas@gmail.com", "hola123", "imagen")