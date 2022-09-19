-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-09-2022 a las 02:31:40
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
-- Estructura de tabla para la tabla `cai`
--

CREATE TABLE `cai` (
  `id` int(11) NOT NULL,
  `cai` text NOT NULL,
  `desde` int(11) NOT NULL,
  `hasta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cai`
--

INSERT INTO `cai` (`id`, `cai`, `desde`, `hasta`) VALUES
(1, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F', 1, 500),
(2, 'ASS090-ASDFKJ-900203-RQ2JC0-239U20-K0', 501, 1000),
(3, 'ASLDFO-ASDFAS-DFA7SD-F4ASDF-7A5S4D-FA', 1001, 1500),
(4, 'AS6DF4-9A8SDF-4AS8DF-6A5S4D-F9ASDF-1A', 1501, 2000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `rtn` text NOT NULL,
  `correo` text DEFAULT NULL,
  `telefono` text DEFAULT NULL,
  `foto` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `rtn`, `correo`, `telefono`, `foto`) VALUES
(3, 'Manuel Henriquez', '0826-1997-003362', 'manuponce8@gmail.com', '97167289', NULL),
(4, 'Ivet Henriquez', '0826-1993-00252', 'ivdkasd@nada.com', '99887766', NULL),
(5, 'Omar Bustillo', '0801-1998-002256', 'obustillo@gmailcom', '9945-2266', NULL),
(6, 'Omar Fernandez', '0826-2000-002622', 'ofma@gmail.com', '99886655', NULL),
(7, 'Josselyn Henriquez', '0826-1994-00002', 'hjosselynmarieth@yahoo.com', '95329212', NULL),
(10, 'Gabriela Henriquez', '0826-2000-00352', 'gbyshp@gmail.com', '9988-5555', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE `estados` (
  `id` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `nombre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id`, `estado`, `nombre`) VALUES
(1, 1, 'Creada'),
(2, 1, 'Iniciada'),
(3, 1, 'Terminada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id` int(11) NOT NULL,
  `numero` text NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario` text NOT NULL,
  `estado` int(11) NOT NULL,
  `desde` text NOT NULL,
  `hasta` text NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `nombre_cliente` text NOT NULL,
  `rtn_cliente` text NOT NULL,
  `total_factura` double NOT NULL,
  `suelto_factura` double NOT NULL,
  `cai` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`id`, `numero`, `fecha`, `usuario`, `estado`, `desde`, `hasta`, `id_cliente`, `nombre_cliente`, `rtn_cliente`, `total_factura`, `suelto_factura`, `cai`) VALUES
(6, '001-001-01-00000001', '2022-06-02 06:18:33', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '0', 445, 355, ''),
(7, '001-001-01-00000002', '2022-06-02 06:20:01', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '0', 445, 355, ''),
(8, '001-001-01-00000003', '2022-06-02 06:20:38', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '0', 445, 355, ''),
(9, '001-001-01-00000004', '2022-06-01 23:02:40', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 3, 'Manuel Henriquez', '0826-1997-003362', 190, 310, ''),
(10, '001-001-01-00000005', '2022-06-01 23:07:52', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '0', 190, 10, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(11, '001-001-01-00000006', '2022-06-01 23:30:57', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 3, 'Manuel Henriquez', '0826-1997-003362', 1665, 35, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(12, '001-001-01-00000007', '2022-06-01 23:38:38', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '0', 760, 240, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(13, '001-001-01-00000008', '2022-06-01 23:44:04', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 3, 'Manuel Henriquez', '0826-1997-003362', 1190, 110, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(14, '001-001-01-00000009', '2022-06-02 01:26:21', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '0', 325, 175, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(15, '001-001-01-00000010', '2022-06-03 16:18:04', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '0', 295, 5, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(16, '001-001-01-00000011', '2022-06-03 16:44:11', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '0', 560, 40, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(17, '001-001-01-00000012', '2022-06-03 18:45:37', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 590, 110, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(18, '001-001-01-00000013', '2022-06-03 18:55:45', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 390, 110, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(19, '001-001-01-00000014', '2022-06-03 23:22:20', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 720, 180, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(20, '001-001-01-00000015', '2022-06-03 23:22:48', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 30, 0, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(21, '001-001-01-00000016', '2022-06-03 23:23:01', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 30, 0, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(22, '001-001-01-00000017', '2022-06-04 00:08:50', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 3, 'Manuel Henriquez', '0826-1997-003362', 295, 205, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(23, '001-001-01-00000018', '2022-06-04 00:09:28', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 365, 135, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(24, '001-001-01-00000019', '2022-06-04 00:20:08', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 3, 'Manuel Henriquez', '0826-1997-003362', 560, 40, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(25, '001-001-01-00000020', '2022-06-04 02:21:08', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 3, 'Manuel Henriquez', '0826-1997-003362', 555, 245, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(26, '001-001-01-00000021', '2022-06-04 18:59:45', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Ivet Henriquez', '0826-1993-00252', 515, 85, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(27, '001-001-01-00000022', '2022-06-05 14:52:09', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 3, 'Manuel Henriquez', '0826-1997-003362', 795, 205, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(28, '001-001-01-00000023', '2022-06-05 20:26:38', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 3, 'Manuel Henriquez', '0826-1997-003362', 620, 80, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(29, '001-001-01-00000024', '2022-06-08 19:38:12', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 435, 65, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(30, '001-001-01-00000025', '2022-06-08 21:42:03', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 325, 175, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(31, '001-001-01-00000026', '2022-06-08 21:42:28', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 370, 0, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(32, '001-001-01-00000027', '2022-06-08 21:44:08', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 30, 0, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(33, '001-001-01-00000028', '2022-06-08 21:47:25', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 190, 10, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(34, '001-001-01-00000029', '2022-06-09 17:14:53', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 455, 45, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(35, '001-001-01-00000030', '2022-06-09 23:18:00', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 3, 'Manuel Henriquez', '0826-1997-003362', 295, 105, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F'),
(36, '001-001-01-00000031', '2022-06-09 23:18:36', 'mhenriquez', 1, '001-001-01-00000001', '001-001-01-00000500', 0, 'Consumidor Final', '', 300, 0, 'CJAD9C-ASDCSD-C78SD9-FS4A8S-DC4SD8-5F');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura_detalle`
--

CREATE TABLE `factura_detalle` (
  `id` int(11) NOT NULL,
  `id_factura` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(50) NOT NULL,
  `precio_unitario` double NOT NULL,
  `precio_producto` double NOT NULL,
  `isv` double NOT NULL,
  `total` double NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `factura_detalle`
--

INSERT INTO `factura_detalle` (`id`, `id_factura`, `id_producto`, `nombre_producto`, `precio_unitario`, `precio_producto`, `isv`, `total`, `cantidad`) VALUES
(7, 6, 8, 'Coca cola', 25.5, 30, 0, 150, 0),
(8, 6, 13, '12 Alitas', 250.75, 295, 0, 295, 0),
(9, 7, 8, 'Coca cola', 25.5, 30, 0, 150, 0),
(10, 7, 13, '12 Alitas', 250.75, 295, 0, 295, 0),
(11, 8, 8, 'Coca cola', 25.5, 30, 0, 150, 0),
(12, 8, 13, '12 Alitas', 250.75, 295, 0, 295, 0),
(13, 9, 8, 'Coca cola', 25.5, 30, 0, 30, 0),
(14, 9, 9, 'Pescado Frito', 136, 160, 0, 160, 0),
(15, 10, 8, 'Coca cola', 25.5, 30, 0, 30, 0),
(16, 10, 9, 'Pescado Frito', 136, 160, 0, 160, 0),
(17, 11, 13, '12 Alitas', 250.75, 295, 0, 885, 0),
(18, 11, 8, 'Coca cola', 25.5, 30, 0, 90, 0),
(19, 11, 9, 'Pescado Frito', 136, 160, 0, 160, 0),
(20, 11, 7, 'Pizza', 225.25, 265, 0, 530, 0),
(21, 12, 8, 'Coca cola', 25.5, 30, 0, 30, 0),
(22, 12, 11, '6 Alitas ', 136, 160, 0, 640, 0),
(23, 12, 8, 'Coca cola', 25.5, 30, 0, 90, 0),
(24, 13, 10, 'Té lipton', 29.75, 35, 0, 70, 0),
(25, 13, 7, 'Pizza', 225.25, 265, 0, 530, 0),
(26, 13, 13, '12 Alitas', 250.75, 295, 0, 590, 0),
(27, 14, 8, 'Coca cola', 25.5, 30, 0, 60, 0),
(28, 14, 7, 'Pizza', 225.25, 265, 0, 265, 0),
(29, 15, 8, 'Coca cola', 25.5, 30, 0, 30, 0),
(30, 15, 7, 'Pizza', 225.25, 265, 0, 265, 0),
(31, 16, 8, 'Coca cola', 25.5, 30, 0, 30, 1),
(32, 16, 7, 'Pizza', 225.25, 265, 0, 530, 2),
(33, 17, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 265, 1),
(34, 17, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(35, 17, 13, '12 Alitas', 256.5217391304348, 295, 38.47826086956519, 295, 1),
(36, 18, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 60, 2),
(37, 18, 12, 'Cerveza Nacional ', 29.661016949152543, 35, 5.338983050847457, 35, 1),
(38, 18, 13, '12 Alitas', 256.5217391304348, 295, 38.47826086956519, 295, 1),
(39, 19, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(40, 19, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 530, 2),
(41, 19, 11, '6 Alitas ', 139.13043478260872, 160, 20.869565217391283, 160, 1),
(42, 20, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(43, 21, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(44, 22, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(45, 22, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 265, 1),
(46, 23, 12, 'Cerveza Nacional ', 29.661016949152543, 35, 5.338983050847457, 70, 2),
(47, 23, 13, '12 Alitas', 256.5217391304348, 295, 38.47826086956519, 295, 1),
(48, 24, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(49, 24, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 530, 2),
(50, 25, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 60, 2),
(51, 25, 9, 'Pescado Frito', 139.13043478260872, 160, 20.869565217391283, 160, 1),
(52, 25, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 265, 1),
(53, 25, 12, 'Cerveza Nacional ', 29.661016949152543, 35, 5.338983050847457, 70, 2),
(54, 26, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 90, 3),
(55, 26, 9, 'Pescado Frito', 139.13043478260872, 160, 20.869565217391283, 160, 1),
(56, 26, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 265, 1),
(57, 27, 10, 'Té lipton', 30.434782608695656, 35, 4.565217391304344, 105, 3),
(58, 27, 11, '6 Alitas ', 139.13043478260872, 160, 20.869565217391283, 160, 1),
(59, 27, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 530, 2),
(60, 28, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(61, 28, 13, '12 Alitas', 256.5217391304348, 295, 38.47826086956519, 590, 2),
(62, 29, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(63, 29, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 265, 1),
(64, 29, 12, 'Cerveza Nacional ', 29.661016949152543, 35, 5.338983050847457, 140, 4),
(65, 30, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 60, 2),
(66, 30, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 265, 1),
(67, 31, 10, 'Té lipton', 30.434782608695656, 35, 4.565217391304344, 105, 3),
(68, 31, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 265, 1),
(69, 32, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(70, 33, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(71, 33, 9, 'Pescado Frito', 139.13043478260872, 160, 20.869565217391283, 160, 1),
(72, 34, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(73, 34, 9, 'Pescado Frito', 139.13043478260872, 160, 20.869565217391283, 160, 1),
(74, 34, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 265, 1),
(75, 35, 8, 'Coca cola', 26.086956521739133, 30, 3.9130434782608674, 30, 1),
(76, 35, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 265, 1),
(77, 36, 7, 'Pizza', 230.43478260869566, 265, 34.565217391304344, 265, 1),
(78, 36, 10, 'Té lipton', 30.434782608695656, 35, 4.565217391304344, 35, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `impuestos`
--

CREATE TABLE `impuestos` (
  `id` int(11) NOT NULL,
  `impuesto` text NOT NULL,
  `porcentaje` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `impuestos`
--

INSERT INTO `impuestos` (`id`, `impuesto`, `porcentaje`) VALUES
(1, '15%', 15),
(2, '18%', 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informacion_empresa`
--

CREATE TABLE `informacion_empresa` (
  `id` int(11) NOT NULL,
  `nombre_empresa` text NOT NULL,
  `direccion` text NOT NULL,
  `rtn_empresa` text NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `local` int(11) NOT NULL,
  `emision` int(11) NOT NULL,
  `correlativo_factura` int(11) NOT NULL,
  `desde` int(11) NOT NULL,
  `hasta` int(11) NOT NULL,
  `correo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `informacion_empresa`
--

INSERT INTO `informacion_empresa` (`id`, `nombre_empresa`, `direccion`, `rtn_empresa`, `telefono`, `local`, `emision`, `correlativo_factura`, `desde`, `hasta`, `correo`) VALUES
(1, 'Route86 Restaurant', 'Valle de Ángeles', '0808-0808-000088', '97267664', 1, 1, 32, 0, 3000, 'nomelose1@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `descripcion` text NOT NULL,
  `precio` double NOT NULL,
  `imagen` blob DEFAULT NULL,
  `nombre_imagen` text DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `usuario` text NOT NULL,
  `estado` int(11) NOT NULL,
  `isv` int(11) NOT NULL,
  `ruta_imagen` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `nombre_imagen`, `fecha_creacion`, `usuario`, `estado`, `isv`, `ruta_imagen`) VALUES
(7, 'Pizza', 'Pizza de Pepperoni', 265, '', 'Pizza.png', '2022-05-22 11:55:26', 'mhenriquez', 1, 1, 'http://localhost/Restaurante/img/productos/Pizza.png'),
(8, 'Coca Cola', 'Refresco frío Coca Cola', 30, '', 'Coca Cola.png', '2022-05-22 12:10:22', 'mhenriquez', 1, 1, 'http://localhost/Restaurante/img/productos/Coca Cola.png'),
(9, 'Pescado Frito', 'Pescado frito empanizado', 160, '', 'Pescado Frito.png', '2022-05-23 09:19:51', 'mhenriquez', 1, 0, 'http://localhost/Restaurante/img/productos/Pescado Frito.png'),
(10, 'Té lipton', 'Té frío', 35, '', 'Té lipton.png', '2022-05-26 09:10:55', 'mhenriquez', 1, 1, 'http://localhost/Restaurante/img/productos/Té lipton.png'),
(11, '6 Alitas ', 'Orden de 6 Alitas', 160, '', '6 Alitas .png', '2022-05-26 09:11:29', 'mhenriquez', 1, 1, 'http://localhost/Restaurante/img/productos/6 Alitas .png'),
(12, 'Cerveza Nacional ', 'Cerveza nacional de la nación de Honduras', 35, 0x687474703a2f2f6c6f63616c686f73742f52657374617572616e74652f696d672f70726f647563746f732f43657276657a61204e6163696f6e616c202e706e67, 'Cerveza Nacional .png', '2022-05-26 09:12:11', 'mhenriquez', 1, 0, 'http://localhost/Restaurante/img/productos/Cerveza Nacional .png'),
(13, '12 Alitas', 'Orden de 12 alitas', 295, '', '12 Alitas.png', '2022-05-26 09:12:52', 'mhenriquez', 1, 1, 'http://localhost/Restaurante/img/productos/12 Alitas.png'),
(15, 'Hamburguesa', 'Hamburguesa con queso', 160, '', 'Hamburguesa.png', '2022-06-12 03:27:39', 'mhenriquez', 1, 1, 'http://localhost/Restaurante/img/productos/Hamburguesa.png'),
(20, 'Nachos', 'Nachos', 120, '', 'Nachos.png', '2022-06-12 03:45:43', 'mhenriquez', 1, 0, 'http://localhost/Restaurante/img/productos/Nachos.png'),
(21, 'prueba', '', 0, '', 'prueba.png', '2022-06-12 03:48:05', 'mhenriquez', 0, 0, NULL),
(27, 'Prueba de imagen', 'Esta es una prueba', 10, 0x687474703a2f2f6c6f63616c686f73742f52657374617572616e74652f696d672f70726f647563746f732f50727565626120646520696d6167656e2e706e67, 'Prueba de imagen.png', '2022-06-14 02:02:07', '', 1, 1, 'http://localhost/Restaurante/img/productos/Prueba de imagen.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarea`
--

CREATE TABLE `tarea` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `estado` int(11) NOT NULL,
  `descripcion` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tarea`
--

INSERT INTO `tarea` (`id`, `nombre`, `estado`, `descripcion`) VALUES
(1, 'Prueba 1', 1, 'Esta es una prueba para probar algo'),
(2, 'Prueba 2', 1, 'Esta es una prueba para probar algo'),
(3, 'Prueba 3', 1, 'Esta es una prueba para probar algo'),
(4, 'Prueba 4', 2, 'Esta es una prueba para probar algo'),
(5, 'Prueba 5', 3, 'Esta es una prueba para probar algo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_pago`
--

CREATE TABLE `tipo_pago` (
  `id` int(11) NOT NULL,
  `id_factura` int(11) NOT NULL,
  `tipo_pago` int(11) NOT NULL,
  `total_pago` double NOT NULL,
  `suelto` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_pago`
--

INSERT INTO `tipo_pago` (`id`, `id_factura`, `tipo_pago`, `total_pago`, `suelto`) VALUES
(0, 6, 1, 500, 355),
(0, 6, 2, 300, 0),
(0, 7, 1, 500, 355),
(0, 7, 2, 300, 0),
(0, 8, 1, 500, 355),
(0, 8, 2, 300, 0),
(0, 9, 1, 500, 310),
(0, 9, 2, 0, 0),
(0, 10, 1, 200, 10),
(0, 10, 2, 0, 0),
(0, 11, 1, 700, 35),
(0, 11, 2, 1000, 0),
(0, 12, 1, 1000, 240),
(0, 12, 2, 0, 0),
(0, 13, 1, 500, 110),
(0, 13, 2, 800, 0),
(0, 14, 1, 500, 175),
(0, 14, 2, 0, 0),
(0, 15, 1, 300, 5),
(0, 15, 2, 0, 0),
(0, 16, 1, 200, 40),
(0, 16, 2, 400, 0),
(0, 17, 1, 700, 110),
(0, 17, 2, 0, 0),
(0, 18, 1, 500, 110),
(0, 18, 2, 0, 0),
(0, 19, 1, 400, 180),
(0, 19, 2, 500, 0),
(0, 20, 1, 0, 0),
(0, 20, 2, 0, 0),
(0, 21, 1, 0, 0),
(0, 21, 2, 0, 0),
(0, 22, 1, 500, 205),
(0, 22, 2, 0, 0),
(0, 23, 1, 500, 135),
(0, 23, 2, 0, 0),
(0, 24, 1, 200, 40),
(0, 24, 2, 400, 0),
(0, 25, 1, 500, 245),
(0, 25, 2, 300, 0),
(0, 26, 1, 200, 85),
(0, 26, 2, 400, 0),
(0, 27, 1, 500, 205),
(0, 27, 2, 500, 0),
(0, 28, 1, 200, 80),
(0, 28, 2, 500, 0),
(0, 29, 1, 500, 65),
(0, 29, 2, 0, 0),
(0, 30, 1, 500, 175),
(0, 30, 2, 0, 0),
(0, 31, 1, 0, 0),
(0, 31, 2, 370, 0),
(0, 32, 1, 30, 0),
(0, 32, 2, 0, 0),
(0, 33, 1, 200, 10),
(0, 33, 2, 0, 0),
(0, 34, 1, 500, 45),
(0, 34, 2, 0, 0),
(0, 35, 1, 400, 105),
(0, 35, 2, 0, 0),
(0, 36, 1, 0, 0),
(0, 36, 2, 300, 0);

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usr_log`
--

CREATE TABLE `usr_log` (
  `usr_login` text NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `activo` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `usr_ip` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usr_log`
--

INSERT INTO `usr_log` (`usr_login`, `fecha`, `activo`, `id`, `usr_ip`) VALUES
('mhenriquez', '2022-05-21 15:47:32', 1, 1, NULL),
('mhenriquez', '2022-05-21 15:51:01', 1, 2, NULL),
('mhenriquez', '2022-05-21 15:51:41', 0, 3, NULL),
('mhenriquez', '2022-05-21 16:11:04', 0, 4, NULL),
('mhenriquez', '2022-05-21 16:11:21', 0, 5, NULL),
('mhenriquez', '2022-05-21 16:11:28', 1, 6, NULL),
('mhenriquez', '2022-05-21 16:12:00', 0, 7, NULL),
('mhenriquez', '2022-05-21 16:12:08', 1, 8, NULL),
('mhenriquez', '2022-05-21 16:14:50', 0, 9, NULL),
('mhenriquez', '2022-05-21 16:15:53', 1, 10, NULL),
('mhenriquez', '2022-05-21 16:19:41', 0, 11, NULL),
('mhenriquez', '2022-05-21 16:19:42', 1, 12, NULL),
('mhenriquez', '2022-05-21 16:25:52', 0, 13, NULL),
('mhenriquez', '2022-05-21 16:26:01', 1, 14, NULL),
('mhenriquez', '2022-05-21 16:30:50', 0, 15, NULL),
('mhenriquez', '2022-05-21 16:30:51', 1, 16, NULL),
('mhenriquez', '2022-05-21 16:39:49', 0, 17, NULL),
('mhenriquez', '2022-05-21 16:39:49', 1, 18, NULL),
('mhenriquez', '2022-05-21 16:39:53', 0, 19, NULL),
('', '2022-05-21 17:40:57', 0, 20, NULL),
('', '2022-05-21 17:41:18', 0, 21, NULL),
('mhenriquez', '2022-05-21 17:43:31', 1, 22, NULL),
('mhenriquez', '2022-05-21 17:43:34', 0, 23, NULL),
('mhenriquez', '2022-05-21 17:44:17', 0, 24, NULL),
('', '2022-05-21 17:44:58', 0, 25, NULL),
('mhenriquez', '2022-05-21 20:24:04', 1, 26, NULL),
('mhenriquez', '2022-05-21 20:24:48', 0, 27, NULL),
('mhenriquez', '2022-05-21 20:24:48', 1, 28, NULL),
('mhenriquez', '2022-05-21 20:25:04', 0, 29, NULL),
('', '2022-05-21 20:25:31', 0, 30, NULL),
('', '2022-05-21 20:25:59', 0, 31, NULL),
('mhenriquez', '2022-05-21 20:28:09', 1, 32, NULL),
('mhenriquez', '2022-05-21 22:39:26', 0, 33, NULL),
('mhenriquez', '2022-05-21 22:39:32', 1, 34, NULL),
('mhenriquez', '2022-05-21 22:44:12', 0, 35, NULL),
('mhenriquez', '2022-05-21 22:44:19', 1, 36, NULL),
('mhenriquez', '2022-05-21 22:47:02', 0, 37, NULL),
('mhenriquez', '2022-05-22 01:43:15', 1, 38, NULL),
('mhenriquez', '2022-05-22 03:02:26', 0, 39, NULL),
('mhenriquez', '2022-05-22 03:02:57', 1, 40, NULL),
('mhenriquez', '2022-05-22 03:51:12', 0, 41, NULL),
('mhenriquez', '2022-05-22 03:52:33', 1, 42, NULL),
('mhenriquez', '2022-05-22 03:53:11', 0, 43, NULL),
('mhenriquez', '2022-05-22 03:53:59', 1, 44, NULL),
('mhenriquez', '2022-05-22 04:14:51', 0, 45, NULL),
('mhenriquez', '2022-05-22 04:15:15', 1, 46, NULL),
('mhenriquez', '2022-05-22 04:15:24', 0, 47, NULL),
('mhenriquez', '2022-05-22 04:15:48', 1, 48, NULL),
('mhenriquez', '2022-05-22 04:19:36', 0, 49, NULL),
('mhenriquez', '2022-05-22 04:19:41', 1, 50, NULL),
('mhenriquez', '2022-05-22 04:23:52', 0, 51, NULL),
('mhenriquez', '2022-05-22 04:23:59', 1, 52, NULL),
('mhenriquez', '2022-05-22 04:24:00', 0, 53, NULL),
('mhenriquez', '2022-05-22 04:27:14', 1, 54, NULL),
('mhenriquez', '2022-05-22 04:27:26', 0, 55, NULL),
('mhenriquez', '2022-05-22 21:03:12', 1, 56, NULL),
('mhenriquez', '2022-05-22 21:08:36', 0, 57, NULL),
('mhenriquez', '2022-05-22 21:08:36', 1, 58, NULL),
('mhenriquez', '2022-05-22 21:22:14', 0, 59, NULL),
('mhenriquez', '2022-05-22 21:22:15', 1, 60, NULL),
('mhenriquez', '2022-05-22 21:44:00', 0, 61, NULL),
('mhenriquez', '2022-05-22 21:44:37', 1, 62, NULL),
('mhenriquez', '2022-05-22 21:45:18', 0, 63, NULL),
('mhenriquez', '2022-05-22 21:46:03', 1, 64, NULL),
('mhenriquez', '2022-05-22 21:46:30', 0, 65, NULL),
('mhenriquez', '2022-05-22 21:47:40', 1, 66, NULL),
('mhenriquez', '2022-05-22 21:48:23', 0, 67, NULL),
('mhenriquez', '2022-05-22 21:48:32', 1, 68, NULL),
('mhenriquez', '2022-05-22 21:48:53', 0, 69, NULL),
('mhenriquez', '2022-05-22 21:49:01', 1, 70, NULL),
('mhenriquez', '2022-05-22 21:49:26', 0, 71, NULL),
('mhenriquez', '2022-05-22 21:49:32', 1, 72, NULL),
('mhenriquez', '2022-05-22 21:51:10', 0, 73, NULL),
('mhenriquez', '2022-05-22 21:51:22', 1, 74, NULL),
('', '2022-05-22 21:58:14', 0, 75, NULL),
('mhenriquez', '2022-05-22 21:58:31', 0, 76, NULL),
('mhenriquez', '2022-05-22 21:58:31', 1, 77, NULL),
('mhenriquez', '2022-05-22 21:58:51', 0, 78, NULL),
('mhenriquez', '2022-05-22 21:58:51', 1, 79, NULL),
('mhenriquez', '2022-05-22 22:01:27', 0, 80, NULL),
('mhenriquez', '2022-05-22 22:08:04', 1, 81, '::1'),
('mhenriquez', '2022-05-22 22:12:03', 0, 82, '192.168.0.69'),
('mhenriquez', '2022-05-22 22:25:32', 0, 83, '192.168.0.69'),
('mhenriquez', '2022-05-22 22:12:24', 0, 84, '::1'),
('mhenriquez', '2022-05-22 22:12:24', 1, 85, '::1'),
('mhenriquez', '2022-05-22 22:14:49', 0, 86, NULL),
('mhenriquez', '2022-05-22 22:23:27', 0, 87, '::1'),
('mhenriquez', '2022-05-22 22:23:27', 0, 88, NULL),
('mhenriquez', '2022-05-22 22:23:27', 1, 89, '::1'),
('mhenriquez', '2022-05-22 22:25:32', 0, 90, NULL),
('mhenriquez', '2022-05-22 22:26:22', 0, 91, '::1'),
('mhenriquez', '2022-05-22 22:26:22', 0, 92, NULL),
('mhenriquez', '2022-05-22 22:29:43', 0, 93, '192.168.0.69'),
('mhenriquez', '2022-05-22 22:29:43', 0, 94, NULL),
('mhenriquez', '2022-05-22 22:30:05', 1, 95, '::1'),
('mhenriquez', '2022-05-22 22:30:17', 0, 96, NULL),
('mhenriquez', '2022-05-22 22:30:57', 1, 97, '::1'),
('mhenriquez', '2022-05-22 22:31:10', 0, 98, NULL),
('mhenriquez', '2022-05-22 22:33:01', 1, 99, '::1'),
('mhenriquez', '2022-05-22 22:46:38', 0, 100, '::1'),
('mhenriquez', '2022-05-22 22:46:56', 0, 101, '::1'),
('mhenriquez', '2022-05-22 22:46:56', 0, 102, '192.168.0.69'),
('mhenriquez', '2022-05-22 22:47:16', 0, 103, '192.168.0.69'),
('mhenriquez', '2022-05-22 22:47:16', 0, 104, '::1'),
('mhenriquez', '2022-05-22 22:48:43', 1, 105, '::1'),
('mhenriquez', '2022-05-22 22:50:38', 0, 106, '::1'),
('mhenriquez', '2022-05-22 22:50:38', 1, 107, '::1'),
('mhenriquez', '2022-05-22 22:52:01', 0, 108, '::1'),
('mhenriquez', '2022-05-22 22:52:01', 1, 109, '::1'),
('mhenriquez', '2022-05-22 22:52:31', 0, 110, '::1'),
('mhenriquez', '2022-05-22 22:52:32', 1, 111, '::1'),
('mhenriquez', '2022-05-22 22:52:33', 0, 112, '::1'),
('mhenriquez', '2022-05-22 22:54:26', 0, 113, '192.168.0.69'),
('mhenriquez', '2022-05-22 22:54:26', 0, 114, '::1'),
('mhenriquez', '2022-05-22 22:54:26', 0, 115, '192.168.0.69'),
('mhenriquez', '2022-05-22 22:54:40', 0, 116, '::1'),
('mhenriquez', '2022-05-22 22:54:40', 0, 117, '192.168.0.69'),
('mhenriquez', '2022-05-22 22:54:40', 0, 118, '::1'),
('mhenriquez', '2022-05-22 22:54:55', 0, 119, '192.168.0.69'),
('mhenriquez', '2022-05-22 22:54:55', 0, 120, '::1'),
('mhenriquez', '2022-05-22 22:54:55', 0, 121, '192.168.0.69'),
('mhenriquez', '2022-05-22 22:54:55', 1, 122, '::1'),
('mhenriquez', '2022-05-23 00:14:12', 0, 123, '::1'),
('mhenriquez', '2022-05-23 01:17:36', 0, 124, '::1'),
('mhenriquez', '2022-05-23 00:14:14', 0, 125, '::1'),
('mhenriquez', '2022-05-23 01:16:49', 0, 126, '::1'),
('mhenriquez', '2022-05-23 01:01:42', 0, 127, '::1'),
('admin', '2022-05-23 01:14:34', 1, 128, '::1'),
('admin', '2022-05-23 01:14:44', 0, 129, '::1'),
('admin', '2022-05-23 01:14:44', 1, 130, '::1'),
('admin', '2022-05-23 01:14:47', 0, 131, '::1'),
('admin', '2022-05-23 01:16:23', 1, 132, '::1'),
('admin', '2022-05-23 01:16:31', 0, 133, '::1'),
('mhenriquez', '2022-05-23 02:03:10', 0, 134, '192.168.0.16'),
('mhenriquez', '2022-05-23 01:16:49', 0, 135, '192.168.0.16'),
('mhenriquez', '2022-05-23 01:16:49', 0, 136, '::1'),
('mhenriquez', '2022-05-23 01:21:14', 0, 137, '192.168.0.16'),
('mhenriquez', '2022-05-23 01:17:36', 0, 138, '192.168.0.16'),
('mhenriquez', '2022-05-23 01:17:36', 0, 139, '::1'),
('mhenriquez', '2022-05-23 01:59:36', 0, 140, '192.168.0.69'),
('mhenriquez', '2022-05-23 01:21:14', 0, 141, '192.168.0.69'),
('mhenriquez', '2022-05-23 01:21:14', 0, 142, '192.168.0.16'),
('mhenriquez', '2022-05-23 01:21:43', 0, 143, '192.168.0.69'),
('mhenriquez', '2022-05-23 01:21:43', 0, 144, '::1'),
('mhenriquez', '2022-05-23 01:21:43', 0, 145, '192.168.0.69'),
('mhenriquez', '2022-05-23 01:21:43', 1, 146, '::1'),
('mhenriquez', '2022-05-23 01:59:36', 0, 147, '::1'),
('mhenriquez', '2022-05-23 01:59:36', 0, 148, '192.168.0.69'),
('mhenriquez', '2022-05-23 01:59:58', 1, 149, '::1'),
('mhenriquez', '2022-05-23 02:03:10', 0, 150, '::1'),
('mhenriquez', '2022-05-23 02:03:10', 0, 151, '192.168.0.16'),
('mhenriquez', '2022-05-24 00:46:59', 0, 152, '::1'),
('mhenriquez', '2022-05-24 00:46:59', 0, 153, '192.168.0.69'),
('mhenriquez', '2022-05-24 00:46:59', 0, 154, '::1'),
('mhenriquez', '2022-05-24 01:27:57', 0, 155, '192.168.0.69'),
('mhenriquez', '2022-05-24 01:27:57', 0, 156, '::1'),
('mhenriquez', '2022-05-24 01:27:57', 0, 157, '192.168.0.69'),
('mhenriquez', '2022-05-24 01:27:57', 1, 158, '::1'),
('mhenriquez', '2022-05-24 01:29:02', 0, 159, '::1'),
('', '2022-05-24 02:24:59', 0, 160, '192.168.0.69'),
('mhenriquez', '2022-05-24 16:53:41', 1, 161, '::1'),
('mhenriquez', '2022-05-24 20:56:18', 0, 162, '::1'),
('mhenriquez', '2022-05-24 20:56:18', 1, 163, '::1'),
('mhenriquez', '2022-05-25 01:32:24', 0, 164, '::1'),
('mhenriquez', '2022-05-25 15:48:46', 1, 165, '::1'),
('mhenriquez', '2022-05-25 17:51:44', 0, 166, '::1'),
('mhenriquez', '2022-05-25 18:06:23', 1, 167, '::1'),
('mhenriquez', '2022-05-26 01:09:06', 0, 168, '::1'),
('mhenriquez', '2022-05-26 01:10:10', 1, 169, '::1'),
('mhenriquez', '2022-05-26 01:26:43', 0, 170, '::1'),
('mhenriquez', '2022-05-26 01:39:17', 1, 171, '::1'),
('mhenriquez', '2022-05-26 01:40:17', 0, 172, '::1'),
('mhenriquez', '2022-05-26 02:28:04', 1, 173, '::1'),
('mhenriquez', '2022-05-26 02:53:58', 0, 174, '::1'),
('mhenriquez', '2022-05-26 16:45:10', 1, 175, '::1'),
('mhenriquez', '2022-05-26 16:45:34', 0, 176, '::1'),
('mhenriquez', '2022-05-26 16:46:31', 1, 177, '::1'),
('mhenriquez', '2022-05-26 16:46:53', 0, 178, '::1'),
('mhenriquez', '2022-05-26 17:04:52', 1, 179, '::1'),
('mhenriquez', '2022-05-26 17:06:35', 0, 180, '::1'),
('mhenriquez', '2022-05-26 17:06:35', 1, 181, '::1'),
('mhenriquez', '2022-05-26 17:11:49', 0, 182, '::1'),
('mhenriquez', '2022-05-26 17:11:49', 1, 183, '::1'),
('mhenriquez', '2022-05-26 17:12:21', 0, 184, '::1'),
('mhenriquez', '2022-05-26 17:14:07', 1, 185, '::1'),
('mhenriquez', '2022-05-26 17:14:19', 0, 186, '::1'),
('mhenriquez', '2022-05-26 17:14:34', 1, 187, '::1'),
('mhenriquez', '2022-05-26 20:36:07', 0, 188, '::1'),
('mhenriquez', '2022-05-26 20:37:18', 1, 189, '::1'),
('mhenriquez', '2022-05-26 20:58:17', 0, 190, '::1'),
('mhenriquez', '2022-05-26 23:31:56', 1, 191, '::1'),
('mhenriquez', '2022-05-26 23:52:11', 0, 192, '::1'),
('mhenriquez', '2022-05-31 17:10:00', 1, 193, '::1'),
('mhenriquez', '2022-05-31 23:46:50', 0, 194, '::1'),
('mhenriquez', '2022-05-31 23:49:37', 1, 195, '::1'),
('mhenriquez', '2022-06-01 00:36:09', 0, 196, '::1'),
('mhenriquez', '2022-06-01 01:13:23', 1, 197, '::1'),
('mhenriquez', '2022-06-01 01:16:27', 0, 198, '::1'),
('mhenriquez', '2022-06-01 05:26:35', 0, 199, '::1'),
('mhenriquez', '2022-06-01 01:50:01', 0, 200, '::1'),
('mhenriquez', '2022-06-01 20:59:00', 0, 201, '192.168.0.69'),
('mhenriquez', '2022-06-01 05:26:35', 0, 202, '192.168.0.69'),
('mhenriquez', '2022-06-01 05:26:35', 0, 203, '::1'),
('mhenriquez', '2022-06-01 23:39:00', 0, 204, '::1'),
('mhenriquez', '2022-06-01 20:59:00', 0, 205, '::1'),
('mhenriquez', '2022-06-01 20:59:00', 0, 206, '192.168.0.69'),
('mhenriquez', '2022-06-01 23:37:33', 0, 207, '::1'),
('mhenriquez', '2022-06-01 23:37:33', 0, 208, '192.168.0.69'),
('mhenriquez', '2022-06-01 23:37:33', 0, 209, '::1'),
('mhenriquez', '2022-06-02 01:25:57', 0, 210, '192.168.0.69'),
('mhenriquez', '2022-06-01 23:39:00', 0, 211, '192.168.0.69'),
('mhenriquez', '2022-06-01 23:39:00', 0, 212, '::1'),
('mhenriquez', '2022-06-01 23:39:20', 1, 213, '::1'),
('mhenriquez', '2022-06-02 01:25:57', 0, 214, '::1'),
('mhenriquez', '2022-06-02 01:25:57', 0, 215, '192.168.0.69'),
('mhenriquez', '2022-06-02 01:25:57', 1, 216, '::1'),
('mhenriquez', '2022-06-02 01:49:15', 0, 217, '::1'),
('mhenriquez', '2022-06-03 15:56:27', 1, 218, '::1'),
('mhenriquez', '2022-06-03 17:31:29', 0, 219, '::1'),
('mhenriquez', '2022-06-03 17:31:50', 1, 220, '::1'),
('mhenriquez', '2022-06-04 00:29:19', 0, 221, '::1'),
('mhenriquez', '2022-06-04 02:15:08', 1, 222, '::1'),
('mhenriquez', '2022-06-04 02:25:24', 0, 223, '::1'),
('mhenriquez', '2022-06-04 15:45:51', 1, 224, '::1'),
('mhenriquez', '2022-06-04 16:07:58', 0, 225, '::1'),
('mhenriquez', '2022-06-04 16:08:09', 1, 226, '::1'),
('mhenriquez', '2022-06-04 16:08:31', 0, 227, '::1'),
('mhenriquez', '2022-06-04 16:08:37', 1, 228, '::1'),
('mhenriquez', '2022-06-04 16:11:54', 0, 229, '::1'),
('mhenriquez', '2022-06-04 16:13:13', 1, 230, '::1'),
('mhenriquez', '2022-06-04 16:13:21', 0, 231, '::1'),
('mhenriquez', '2022-06-04 16:13:26', 1, 232, '::1'),
('mhenriquez', '2022-06-04 16:13:40', 0, 233, '::1'),
('mhenriquez', '2022-06-04 16:13:40', 1, 234, '::1'),
('mhenriquez', '2022-06-04 19:37:27', 0, 235, '::1'),
('mhenriquez', '2022-06-04 20:12:05', 1, 236, '::1'),
('mhenriquez', '2022-06-04 20:14:32', 0, 237, '::1'),
('mhenriquez', '2022-06-04 22:30:33', 1, 238, '::1'),
('mhenriquez', '2022-06-04 22:30:38', 0, 239, '::1'),
('mhenriquez', '2022-06-04 22:30:50', 1, 240, '::1'),
('mhenriquez', '2022-06-05 14:26:20', 0, 241, '::1'),
('mhenriquez', '2022-06-05 14:26:20', 1, 242, '::1'),
('mhenriquez', '2022-06-05 14:35:27', 0, 243, '::1'),
('mhenriquez', '2022-06-05 14:38:14', 1, 244, '::1'),
('mhenriquez', '2022-06-05 14:43:29', 0, 245, '::1'),
('mhenriquez', '2022-06-05 14:43:29', 1, 246, '::1'),
('mhenriquez', '2022-06-05 14:44:10', 0, 247, '::1'),
('mhenriquez', '2022-06-05 14:44:39', 1, 248, '::1'),
('mhenriquez', '2022-06-05 15:27:20', 0, 249, '::1'),
('mhenriquez', '2022-06-05 16:55:09', 1, 250, '::1'),
('mhenriquez', '2022-06-05 20:25:44', 0, 251, '::1'),
('mhenriquez', '2022-06-05 20:25:44', 1, 252, '::1'),
('mhenriquez', '2022-06-05 20:29:13', 0, 253, '::1'),
('mhenriquez', '2022-06-08 19:37:34', 1, 254, '::1'),
('mhenriquez', '2022-06-08 21:45:04', 0, 255, '::1'),
('mhenriquez', '2022-06-08 21:45:12', 1, 256, '::1'),
('mhenriquez', '2022-06-08 22:03:07', 0, 257, '::1'),
('mhenriquez', '2022-06-09 16:47:17', 1, 258, '::1'),
('mhenriquez', '2022-06-09 16:59:01', 0, 259, '::1'),
('mhenriquez', '2022-06-09 16:59:15', 1, 260, '::1'),
('mhenriquez', '2022-06-09 17:02:58', 0, 261, '::1'),
('mhenriquez', '2022-06-09 17:02:58', 1, 262, '::1'),
('mhenriquez', '2022-06-09 20:21:24', 0, 263, '::1'),
('mhenriquez', '2022-06-09 20:21:37', 1, 264, '::1'),
('mhenriquez', '2022-06-09 21:38:38', 0, 265, '::1'),
('mhenriquez', '2022-06-09 21:39:20', 1, 266, '::1'),
('mhenriquez', '2022-06-11 00:17:49', 0, 267, '::1'),
('mhenriquez', '2022-06-11 17:20:12', 1, 268, '::1'),
('mhenriquez', '2022-06-11 22:42:23', 0, 269, '::1'),
('', '2022-06-13 18:02:41', 0, 270, '::1'),
('mhenriquez', '2022-06-13 18:02:46', 1, 271, '::1'),
('mhenriquez', '2022-06-13 18:20:00', 0, 272, '::1'),
('mhenriquez', '2022-06-13 18:20:28', 1, 273, '::1'),
('mhenriquez', '2022-06-13 18:35:33', 0, 274, '::1'),
('mhenriquez', '2022-06-13 18:35:33', 1, 275, '::1'),
('mhenriquez', '2022-06-13 18:36:01', 0, 276, '::1'),
('mhenriquez', '2022-06-13 18:36:01', 1, 277, '::1'),
('mhenriquez', '2022-06-13 18:36:20', 0, 278, '::1'),
('mhenriquez', '2022-06-13 18:36:20', 1, 279, '::1'),
('mhenriquez', '2022-06-13 18:36:53', 0, 280, '::1'),
('mhenriquez', '2022-06-13 18:36:57', 1, 281, '::1'),
('mhenriquez', '2022-06-13 18:37:59', 0, 282, '::1'),
('mhenriquez', '2022-06-13 18:37:59', 1, 283, '::1'),
('mhenriquez', '2022-06-13 18:38:08', 0, 284, '::1'),
('mhenriquez', '2022-06-13 18:38:08', 1, 285, '::1'),
('mhenriquez', '2022-06-13 18:38:18', 0, 286, '::1'),
('mhenriquez', '2022-06-13 18:38:18', 1, 287, '::1'),
('mhenriquez', '2022-06-13 18:38:28', 0, 288, '::1'),
('mhenriquez', '2022-06-13 18:38:28', 1, 289, '::1'),
('mhenriquez', '2022-06-13 18:38:44', 0, 290, '::1'),
('mhenriquez', '2022-06-13 18:38:44', 1, 291, '::1'),
('mhenriquez', '2022-06-13 18:40:58', 0, 292, '::1'),
('mhenriquez', '2022-06-13 18:41:08', 1, 293, '::1'),
('mhenriquez', '2022-06-13 18:43:04', 0, 294, '::1'),
('mhenriquez', '2022-06-13 18:43:12', 1, 295, '::1'),
('mhenriquez', '2022-06-27 22:51:10', 0, 296, '::1'),
('mhenriquez', '2022-06-27 22:51:10', 1, 297, '::1'),
('mhenriquez', '2022-06-28 01:20:41', 0, 298, '::1'),
('mhenriquez', '2022-07-04 16:04:56', 1, 299, '::1'),
('mhenriquez', '2022-07-04 16:12:46', 0, 300, '::1'),
('mhenriquez', '2022-07-04 16:12:54', 1, 301, '::1'),
('mhenriquez', '2022-07-04 16:13:13', 0, 302, '::1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cai`
--
ALTER TABLE `cai`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `factura_detalle`
--
ALTER TABLE `factura_detalle`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `impuestos`
--
ALTER TABLE `impuestos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `informacion_empresa`
--
ALTER TABLE `informacion_empresa`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tarea`
--
ALTER TABLE `tarea`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`usuario`);

--
-- Indices de la tabla `usr_log`
--
ALTER TABLE `usr_log`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cai`
--
ALTER TABLE `cai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `estados`
--
ALTER TABLE `estados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `factura_detalle`
--
ALTER TABLE `factura_detalle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT de la tabla `impuestos`
--
ALTER TABLE `impuestos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `informacion_empresa`
--
ALTER TABLE `informacion_empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `tarea`
--
ALTER TABLE `tarea`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usr_log`
--
ALTER TABLE `usr_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=303;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
