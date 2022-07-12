-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-07-2022 a las 21:14:12
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mhenriquez`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `usuario` varchar(50) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `id` int(255) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `tipo_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`usuario`, `contrasena`, `correo`, `nombre`, `id`, `activo`, `tipo_usuario`) VALUES
('admin', '3cc31cd246149aec68079241e71e98f6', 'admin@admin.com', 'Admin', NULL, 1, 1),
('admin2', '3cc31cd246149aec68079241e71e98f6', 'admin2@admin.com', 'Admin2', NULL, 1, 1),
('mariethhenriquez', '3cc31cd246149aec68079241e71e98f6', 'hjosselynmarieth@yahoo.com', 'Josselyn Marieth', NULL, 0, 0),
('mhenriquez', '3cc31cd246149aec68079241e71e98f6', 'mhenriquez@r86.hn', 'Manuel Henriquez', 1, 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
