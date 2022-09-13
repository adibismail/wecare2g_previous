-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 02, 2018 at 01:55 PM
-- Server version: 5.7.19
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wecare_v3`
--

-- --------------------------------------------------------

--
-- Table structure for table `alert`
--

DROP TABLE IF EXISTS `alert`;
CREATE TABLE IF NOT EXISTS `alert` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `trigger_id` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alert_status` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `alert`
--

INSERT INTO `alert` (`id`, `trigger_id`, `type`, `timestamp`, `alert_status`) VALUES
(3, '8308392961', 'Out of parameter', '2017-12-21T16:34:36.000Z', 'resolved'),
(66, '3923732182', 'Abnormal heart rate, current heart rate: 0', '2018-01-25T10:16:12Z', 'resolved'),
(67, '3923732182', 'Abnormal heart rate, current heart rate: 54', '2018-01-25T10:17:17Z', 'resolved'),
(68, '3923732182', 'Out of parameter', '2018-01-25T10:23:09.000Z', 'resolved'),
(69, '3923732182', 'Abnormal heart rate, current heart rate: 0', '2018-01-25T10:42:17Z', 'resolved'),
(70, '3923732182', 'Abnormal heart rate, current heart rate: 0', '2018-01-25T10:57:16Z', 'resolved'),
(71, '3923732182', 'Out of parameter', '2018-01-25T11:21:18.000Z', 'unsolved'),
(74, '3923731850', 'Out of parameter', '2018-01-11T09:12:02.000Z', 'unsolved');

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

DROP TABLE IF EXISTS `assignment`;
CREATE TABLE IF NOT EXISTS `assignment` (
  `company_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `assign_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(10) CHARACTER SET latin1 NOT NULL,
  `p_id` varchar(10) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`assign_id`),
  KEY `u_id` (`u_id`),
  KEY `p_id` (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`company_id`, `assign_id`, `u_id`, `p_id`) VALUES
('mdt_sandbox', 1, 'A002', 'KL001'),
('mdt_sandbox', 2, 'A001', 'PJ001'),
('mdt_sandbox', 3, 'A002', 'PJ002'),
('mdt_sandbox', 4, 'A003', 'PJ003'),
('mdt_sandbox', 5, 'A001', 'PJ004'),
('mdt_sandbox', 18, 'A001', 'TT001'),
('mdt_hongkong', 21, 'A006', 'PJ001'),
('mdt_hongkong', 22, 'A006', 'PJ002'),
('mdt_hongkong', 23, 'A006', 'PJ007'),
('mdt_hongkong', 24, 'A006', 'PJ008');

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
CREATE TABLE IF NOT EXISTS `device` (
  `dev_id` varchar(15) CHARACTER SET latin1 NOT NULL,
  `dev_data` text COLLATE utf8mb4_unicode_ci,
  `dev_common` text COLLATE utf8mb4_unicode_ci,
  `dev_location` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `dev_phone` varchar(15) CHARACTER SET latin1 DEFAULT NULL,
  `dev_battery` tinyint(4) NOT NULL DEFAULT '0',
  `dev_steps` text COLLATE utf8mb4_unicode_ci,
  `dev_heartrate` text COLLATE utf8mb4_unicode_ci,
  `dev_steps_curr` int(11) NOT NULL DEFAULT '0',
  `dev_heartrate_curr` int(11) NOT NULL DEFAULT '0',
  `dev_steps_days` text COLLATE utf8mb4_unicode_ci,
  `dev_steps_cummulative` int(11) DEFAULT '0',
  PRIMARY KEY (`dev_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`dev_id`, `dev_data`, `dev_common`, `dev_location`, `dev_phone`, `dev_battery`, `dev_steps`, `dev_heartrate`, `dev_steps_curr`, `dev_heartrate_curr`, `dev_steps_days`, `dev_steps_cummulative`) VALUES
('3923731850', '[{\"ap\": \"5\", \"mcc\": \"460\", \"mnc\": \"0\", \"wifi\": [{\"ssid\": \"quminghaonan\", \"mac_address\": \"b0:d5:9d:c6:c7:fc\", \"wifi_strength\": \"-61\"}, {\"ssid\": \"3gelec\", \"mac_address\": \"8:c0:21:1e:68:e1\", \"wifi_strength\": \"-64\"}, {\"ssid\": \"manguo123\", \"mac_address\": \"d4:ee:7:45:b3:be\", \"wifi_strength\": \"-67\"}, {\"ssid\": \"DIRECT-82-HP M477 LaserJet\", \"mac_address\": \"92:cd:b6:37:f8:82\", \"wifi_strength\": \"-67\"}, {\"ssid\": \"ChinaNet-m7ye\", \"mac_address\": \"38:e3:c5:86:8e:20\", \"wifi_strength\": \"-69\"}], \"bs_data\": [{\"bs_id\": \"5081\", \"bs_area\": \"9360\", \"bs_signal\": \"157\"}, {\"bs_id\": \"5082\", \"bs_area\": \"9360\", \"bs_signal\": \"125\"}, {\"bs_id\": \"4082\", \"bs_area\": \"9360\", \"bs_signal\": \"119\"}], \"bs_tower\": \"255\", \"position\": \"A\", \"bs_number\": \"3\"}, {\"ap\": \"5\", \"mcc\": \"460\", \"mnc\": \"0\", \"wifi\": [{\"ssid\": \"ChinaNet-m7ye\", \"mac_address\": \"38:e3:c5:86:8e:20\", \"wifi_strength\": \"-65\"}, {\"ssid\": \"ceshi\", \"mac_address\": \"a0:c5:f2:b0:74:d0\", \"wifi_strength\": \"-66\"}, {\"ssid\": \"quminghaonan\", \"mac_address\": \"b0:d5:9d:c6:c7:fc\", \"wifi_strength\": \"-67\"}, {\"ssid\": \"3gelec\", \"mac_address\": \"9c:37:f4:7:33:a1\", \"wifi_strength\": \"-69\"}, {\"ssid\": \"manguo123\", \"mac_address\": \"d4:ee:7:45:b3:be\", \"wifi_strength\": \"-70\"}], \"bs_data\": [{\"bs_id\": \"5081\", \"bs_area\": \"9360\", \"bs_signal\": \"157\"}, {\"bs_id\": \"5082\", \"bs_area\": \"9360\", \"bs_signal\": \"121\"}, {\"bs_id\": \"4151\", \"bs_area\": \"9360\", \"bs_signal\": \"119\"}], \"bs_tower\": \"255\", \"position\": \"A\", \"bs_number\": \"3\"}, {\"ap\": \"5\", \"mcc\": \"502\", \"mnc\": \"12\", \"wifi\": [{\"ssid\": \"mdtresearch@unifibiz\", \"mac_address\": \"6c:72:20:3d:28:54\", \"wifi_strength\": \"-62\"}, {\"ssid\": \"jatest\", \"mac_address\": \"9c:99:a0:4:d5:19\", \"wifi_strength\": \"-75\"}, {\"ssid\": \"IntegrationPoint\", \"mac_address\": \"4:18:d6:82:d5:6f\", \"wifi_strength\": \"-86\"}, {\"ssid\": \"IPMalaysiaGuest\", \"mac_address\": \"6:18:d6:82:d5:6f\", \"wifi_strength\": \"-86\"}, {\"ssid\": \"Sunway Pinnacle_Guest\", \"mac_address\": \"1c:1d:86:41:4:23\", \"wifi_strength\": \"-88\"}], \"bs_data\": [{\"bs_id\": \"5013\", \"bs_area\": \"2023\", \"bs_signal\": \"131\"}, {\"bs_id\": \"10041\", \"bs_area\": \"2023\", \"bs_signal\": \"127\"}, {\"bs_id\": \"5012\", \"bs_area\": \"2023\", \"bs_signal\": \"126\"}, {\"bs_id\": \"28482\", \"bs_area\": \"2189\", \"bs_signal\": \"124\"}, {\"bs_id\": \"24151\", \"bs_area\": \"2189\", \"bs_signal\": \"121\"}, {\"bs_id\": \"64537\", \"bs_area\": \"2023\", \"bs_signal\": \"121\"}, {\"bs_id\": \"64532\", \"bs_area\": \"2023\", \"bs_signal\": \"118\"}], \"bs_tower\": \"255\", \"position\": \"V\", \"bs_number\": \"7\"}]', '[{\"zone\": \"Not in zone\", \"floor\": \"-\", \"speed\": \"0.15\", \"altitude\": \"0.0\", \"geofence\": \"-\", \"latitude\": \"22.570690\", \"direction\": \"10.2\", \"longitude\": \"113.8619450\", \"timestamp\": \"2018-01-11T09:12:02.000Z\"}, {\"zone\": \"Not in zone\", \"floor\": \"-\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"-\", \"latitude\": \"22.570657\", \"direction\": \"312.4\", \"longitude\": \"113.8620250\", \"timestamp\": \"2018-01-11T10:16:01.000Z\"}, {\"zone\": \"TT001_15 Floor\", \"floor\": \"15\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"-\", \"latitude\": 3.069963491114094, \"direction\": \"0.0\", \"longitude\": 101.610252538366, \"timestamp\": \"2018-01-22T01:50:29.000Z\"}]', 'Jalan Pinnnacle, Pjs 9, 47500 Subang Jaya, Selangor, é©¬æ¥è¥¿äºš', NULL, 43, '[0, 0, 15]', NULL, 15, 0, '{\"2018-01-11\": 0, \"2018-01-22\": null}', NULL),
('3923732180', '[{\"ap\": \"5\", \"mcc\": \"502\", \"mnc\": \"16\", \"wifi\": [{\"ssid\": \"MDTGroup\", \"mac_address\": \"c8:60:0:e5:42:20\", \"wifi_strength\": \"-59\"}, {\"ssid\": \"W01_587F660A122C\", \"mac_address\": \"58:7f:66:a:12:2c\", \"wifi_strength\": \"-64\"}, {\"ssid\": \"mdtinno\", \"mac_address\": \"ec:8:6b:2b:c0:a8\", \"wifi_strength\": \"-66\"}, {\"ssid\": \"MDTGroup\", \"mac_address\": \"b0:c5:54:12:df:7c\", \"wifi_strength\": \"-82\"}, {\"ssid\": \"COSCO-GUEST\", \"mac_address\": \"88:5b:dd:b8:56:95\", \"wifi_strength\": \"-88\"}], \"bs_data\": [{\"bs_id\": \"11842\", \"bs_area\": \"21163\", \"bs_signal\": \"129\"}, {\"bs_id\": \"25021\", \"bs_area\": \"21091\", \"bs_signal\": \"127\"}, {\"bs_id\": \"20832\", \"bs_area\": \"21022\", \"bs_signal\": \"124\"}, {\"bs_id\": \"23061\", \"bs_area\": \"21022\", \"bs_signal\": \"123\"}, {\"bs_id\": \"13477\", \"bs_area\": \"21163\", \"bs_signal\": \"122\"}, {\"bs_id\": \"11841\", \"bs_area\": \"21163\", \"bs_signal\": \"118\"}, {\"bs_id\": \"26821\", \"bs_area\": \"21092\", \"bs_signal\": \"115\"}], \"bs_tower\": \"255\", \"position\": \"V\", \"bs_number\": \"7\"}]', '[{\"zone\": \"TT001_19 Floor\", \"floor\": \"19\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"TT001_2\", \"latitude\": 3.0699202561718075, \"direction\": \"0.0\", \"longitude\": 101.610214642116, \"timestamp\": \"2018-01-23T10:19:52.000Z\"}]', 'Jalan Pinnnacle, Pjs 9, 47500 Subang Jaya, Selangor, é©¬æ¥è¥¿äºš', NULL, 4, '321', NULL, 321, 0, '{\"2018-01-23\": 321}', 0),
('3923732182', '[{\"ap\": \"3\", \"mcc\": \"502\", \"mnc\": \"16\", \"wifi\": [{\"ssid\": \"mdtresearch@unifibiz\", \"mac_address\": \"6c:72:20:3d:28:54\", \"wifi_strength\": \"-61\"}, {\"ssid\": \"GWNET\", \"mac_address\": \"5c:a4:8a:dd:63:51\", \"wifi_strength\": \"-95\"}, {\"ssid\": \"Sunway Pinnacle_Guest\", \"mac_address\": \"5c:a4:8a:dd:63:53\", \"wifi_strength\": \"-97\"}], \"bs_data\": [{\"bs_id\": \"14048\", \"bs_area\": \"21162\", \"bs_signal\": \"132\"}], \"bs_tower\": \"0\", \"position\": \"V\", \"bs_number\": \"1\"}]', '[{\"zone\": \"TT001_15 Floor\", \"floor\": \"15\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"TT001_2\", \"latitude\": 3.0699683257287225, \"direction\": \"0.0\", \"longitude\": 101.61024142737008, \"timestamp\": \"2018-01-25T09:46:25.000Z\"}]', 'Jalan Pinnnacle, Pjs 9, 47500 Subang Jaya, Selangor, é©¬æ¥è¥¿äºš', NULL, 100, '12251', NULL, 12251, 0, '{\"2018-01-25\": 12251}', 0),
('3923732184', NULL, NULL, '', '', 0, NULL, NULL, 0, 0, NULL, 0),
('3923732186', NULL, NULL, '', '', 0, NULL, NULL, 0, 0, NULL, 0),
('3923732218', '[{\"ap\": \"5\", \"mcc\": \"460\", \"mnc\": \"0\", \"wifi\": [{\"ssid\": \"d05\", \"mac_address\": \"8:10:79:ef:c8:8d\", \"wifi_strength\": \"-50\"}, {\"ssid\": \"ChinaNet-Ynpy\", \"mac_address\": \"c8:f8:6d:87:13:d5\", \"wifi_strength\": \"-57\"}, {\"ssid\": \"u516cu5171u533au57dfWIFI\", \"mac_address\": \"0:22:aa:a1:26:98\", \"wifi_strength\": \"-58\"}, {\"ssid\": \"Netcore_E08433\", \"mac_address\": \"8:10:79:e0:84:33\", \"wifi_strength\": \"-68\"}, {\"ssid\": \"SETUP\", \"mac_address\": \"2e:17:f1:73:74:61\", \"wifi_strength\": \"-69\"}], \"bs_data\": [{\"bs_id\": \"3941\", \"bs_area\": \"10169\", \"bs_signal\": \"148\"}, {\"bs_id\": \"3952\", \"bs_area\": \"10169\", \"bs_signal\": \"151\"}, {\"bs_id\": \"4113\", \"bs_area\": \"10169\", \"bs_signal\": \"151\"}, {\"bs_id\": \"3943\", \"bs_area\": \"10169\", \"bs_signal\": \"146\"}, {\"bs_id\": \"3811\", \"bs_area\": \"10169\", \"bs_signal\": \"143\"}, {\"bs_id\": \"3813\", \"bs_area\": \"10169\", \"bs_signal\": \"142\"}, {\"bs_id\": \"3962\", \"bs_area\": \"10169\", \"bs_signal\": \"142\"}], \"bs_tower\": \"255\", \"position\": \"V\", \"bs_number\": \"7\"}, {\"ap\": \"5\", \"mcc\": \"460\", \"mnc\": \"0\", \"wifi\": [{\"ssid\": \"d05\", \"mac_address\": \"8:10:79:ef:c8:8d\", \"wifi_strength\": \"-59\"}, {\"ssid\": \"u516cu5171u533au57dfWIFI\", \"mac_address\": \"0:22:aa:a1:25:30\", \"wifi_strength\": \"-60\"}, {\"ssid\": \"ChinaNet-Ynpy\", \"mac_address\": \"c8:f8:6d:87:13:d5\", \"wifi_strength\": \"-61\"}, {\"ssid\": \"SETUP\", \"mac_address\": \"2e:17:f1:73:74:61\", \"wifi_strength\": \"-68\"}, {\"ssid\": \"SZREDLAC\", \"mac_address\": \"34:ce:0:6c:21:cb\", \"wifi_strength\": \"-72\"}], \"bs_data\": [{\"bs_id\": \"3811\", \"bs_area\": \"10169\", \"bs_signal\": \"139\"}, {\"bs_id\": \"4211\", \"bs_area\": \"10169\", \"bs_signal\": \"142\"}, {\"bs_id\": \"3943\", \"bs_area\": \"10169\", \"bs_signal\": \"142\"}, {\"bs_id\": \"3913\", \"bs_area\": \"10169\", \"bs_signal\": \"132\"}, {\"bs_id\": \"4212\", \"bs_area\": \"10169\", \"bs_signal\": \"132\"}, {\"bs_id\": \"3813\", \"bs_area\": \"10169\", \"bs_signal\": \"131\"}, {\"bs_id\": \"3962\", \"bs_area\": \"10169\", \"bs_signal\": \"131\"}], \"bs_tower\": \"1\", \"position\": \"V\", \"bs_number\": \"7\"}, {\"ap\": \"5\", \"mcc\": \"460\", \"mnc\": \"0\", \"wifi\": [{\"ssid\": \"d05\", \"mac_address\": \"8:10:79:ef:c8:8d\", \"wifi_strength\": \"-54\"}, {\"ssid\": \"ChinaNet-Ynpy\", \"mac_address\": \"c8:f8:6d:87:13:d5\", \"wifi_strength\": \"-64\"}, {\"ssid\": \"u516cu5171u533au57dfWIFI\", \"mac_address\": \"0:22:aa:a1:25:30\", \"wifi_strength\": \"-65\"}, {\"ssid\": \"b07\", \"mac_address\": \"8:10:79:e0:a4:95\", \"wifi_strength\": \"-65\"}, {\"ssid\": \"SETUP\", \"mac_address\": \"2e:17:f1:73:74:61\", \"wifi_strength\": \"-71\"}], \"bs_data\": [{\"bs_id\": \"3952\", \"bs_area\": \"10169\", \"bs_signal\": \"146\"}, {\"bs_id\": \"3943\", \"bs_area\": \"10169\", \"bs_signal\": \"142\"}, {\"bs_id\": \"4211\", \"bs_area\": \"10169\", \"bs_signal\": \"142\"}, {\"bs_id\": \"3941\", \"bs_area\": \"10169\", \"bs_signal\": \"137\"}, {\"bs_id\": \"4113\", \"bs_area\": \"10169\", \"bs_signal\": \"136\"}, {\"bs_id\": \"3962\", \"bs_area\": \"10169\", \"bs_signal\": \"134\"}, {\"bs_id\": \"4213\", \"bs_area\": \"10169\", \"bs_signal\": \"132\"}], \"bs_tower\": \"1\", \"position\": \"V\", \"bs_number\": \"7\"}, {\"ap\": \"5\", \"mcc\": \"460\", \"mnc\": \"0\", \"wifi\": [{\"ssid\": \"d05\", \"mac_address\": \"8:10:79:ef:c8:8d\", \"wifi_strength\": \"-51\"}, {\"ssid\": \"u516cu5171u533au57dfWIFI\", \"mac_address\": \"0:22:aa:a1:25:c0\", \"wifi_strength\": \"-59\"}, {\"ssid\": \"ChinaNet-Ynpy\", \"mac_address\": \"c8:f8:6d:87:13:d5\", \"wifi_strength\": \"-70\"}, {\"ssid\": \"b07\", \"mac_address\": \"8:10:79:e0:a4:95\", \"wifi_strength\": \"-72\"}, {\"ssid\": \"Netcore_E08433\", \"mac_address\": \"8:10:79:e0:84:33\", \"wifi_strength\": \"-74\"}], \"bs_data\": [{\"bs_id\": \"3952\", \"bs_area\": \"10169\", \"bs_signal\": \"145\"}, {\"bs_id\": \"3943\", \"bs_area\": \"10169\", \"bs_signal\": \"141\"}, {\"bs_id\": \"3962\", \"bs_area\": \"10169\", \"bs_signal\": \"140\"}, {\"bs_id\": \"4211\", \"bs_area\": \"10169\", \"bs_signal\": \"138\"}, {\"bs_id\": \"4213\", \"bs_area\": \"10169\", \"bs_signal\": \"136\"}, {\"bs_id\": \"4113\", \"bs_area\": \"10169\", \"bs_signal\": \"135\"}, {\"bs_id\": \"3941\", \"bs_area\": \"10169\", \"bs_signal\": \"135\"}], \"bs_tower\": \"255\", \"position\": \"V\", \"bs_number\": \"7\"}, {\"ap\": \"5\", \"mcc\": \"460\", \"mnc\": \"0\", \"wifi\": [{\"ssid\": \"d05\", \"mac_address\": \"8:10:79:ef:c8:8d\", \"wifi_strength\": \"-54\"}, {\"ssid\": \"ChinaNet-Ynpy\", \"mac_address\": \"c8:f8:6d:87:13:d5\", \"wifi_strength\": \"-62\"}, {\"ssid\": \"u516cu5171u533au57dfWIFI\", \"mac_address\": \"0:22:aa:a1:25:30\", \"wifi_strength\": \"-66\"}, {\"ssid\": \"b07\", \"mac_address\": \"8:10:79:e0:a4:95\", \"wifi_strength\": \"-66\"}, {\"ssid\": \"SETUP\", \"mac_address\": \"2e:17:f1:73:74:61\", \"wifi_strength\": \"-68\"}], \"bs_data\": [{\"bs_id\": \"3811\", \"bs_area\": \"10169\", \"bs_signal\": \"137\"}, {\"bs_id\": \"3943\", \"bs_area\": \"10169\", \"bs_signal\": \"151\"}, {\"bs_id\": \"3941\", \"bs_area\": \"10169\", \"bs_signal\": \"141\"}, {\"bs_id\": \"4113\", \"bs_area\": \"10169\", \"bs_signal\": \"138\"}, {\"bs_id\": \"3913\", \"bs_area\": \"10169\", \"bs_signal\": \"131\"}, {\"bs_id\": \"3813\", \"bs_area\": \"10169\", \"bs_signal\": \"130\"}, {\"bs_id\": \"3951\", \"bs_area\": \"10169\", \"bs_signal\": \"129\"}], \"bs_tower\": \"255\", \"position\": \"V\", \"bs_number\": \"7\"}, {\"ap\": \"5\", \"mcc\": \"460\", \"mnc\": \"0\", \"wifi\": [{\"ssid\": \"d05\", \"mac_address\": \"8:10:79:ef:c8:8d\", \"wifi_strength\": \"-57\"}, {\"ssid\": \"ChinaNet-Ynpy\", \"mac_address\": \"c8:f8:6d:87:13:d5\", \"wifi_strength\": \"-59\"}, {\"ssid\": \"u516cu5171u533au57dfWIFI\", \"mac_address\": \"0:22:aa:a1:25:c0\", \"wifi_strength\": \"-60\"}, {\"ssid\": \"b07\", \"mac_address\": \"8:10:79:e0:a4:95\", \"wifi_strength\": \"-69\"}, {\"ssid\": \"SETUP\", \"mac_address\": \"2e:17:f1:73:74:61\", \"wifi_strength\": \"-72\"}], \"bs_data\": [{\"bs_id\": \"3952\", \"bs_area\": \"10169\", \"bs_signal\": \"149\"}, {\"bs_id\": \"3943\", \"bs_area\": \"10169\", \"bs_signal\": \"150\"}, {\"bs_id\": \"4211\", \"bs_area\": \"10169\", \"bs_signal\": \"141\"}, {\"bs_id\": \"3811\", \"bs_area\": \"10169\", \"bs_signal\": \"139\"}, {\"bs_id\": \"3813\", \"bs_area\": \"10169\", \"bs_signal\": \"139\"}, {\"bs_id\": \"3951\", \"bs_area\": \"10169\", \"bs_signal\": \"138\"}, {\"bs_id\": \"3962\", \"bs_area\": \"10169\", \"bs_signal\": \"136\"}], \"bs_tower\": \"255\", \"position\": \"V\", \"bs_number\": \"7\"}]', '[{\"zone\": \"Not in zone\", \"floor\": \"-\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"-\", \"latitude\": 0, \"direction\": \"0.0\", \"longitude\": 0, \"timestamp\": \"2018-02-02T08:39:54.000Z\"}, {\"zone\": \"Not in zone\", \"floor\": \"-\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"-\", \"latitude\": 0, \"direction\": \"0.0\", \"longitude\": 0, \"timestamp\": \"2018-02-02T08:45:08.000Z\"}, {\"zone\": \"Not in zone\", \"floor\": \"-\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"-\", \"latitude\": 0, \"direction\": \"0.0\", \"longitude\": 0, \"timestamp\": \"2018-02-02T09:08:11.000Z\"}, {\"zone\": \"Not in zone\", \"floor\": \"-\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"-\", \"latitude\": 0, \"direction\": \"0.0\", \"longitude\": 0, \"timestamp\": \"2018-02-02T09:35:28.000Z\"}, {\"zone\": \"Not in zone\", \"floor\": \"-\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"-\", \"latitude\": 0, \"direction\": \"0.0\", \"longitude\": 0, \"timestamp\": \"2018-02-02T09:48:55.000Z\"}, {\"zone\": \"Not in zone\", \"floor\": \"-\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"-\", \"latitude\": 0, \"direction\": \"0.0\", \"longitude\": 0, \"timestamp\": \"2018-02-02T10:00:39.000Z\"}]', '', NULL, 86, '[0, 0, 0, 0, 0, 0]', NULL, 0, 0, '{\"2018-02-02\": 0}', 0),
('6209699634', NULL, NULL, '', NULL, 0, NULL, NULL, 0, 0, NULL, 0),
('8308392955', '[{\"ap\": \"1\", \"mcc\": \"502\", \"mnc\": \"16\", \"wifi\": [{\"ssid\": \"mdtresearch@unifibiz\", \"mac_address\": \"6c:72:20:3d:28:54\", \"wifi_strength\": \"-62\"}], \"bs_data\": [{\"bs_id\": \"14047\", \"bs_area\": \"21162\", \"bs_signal\": \"141\"}, {\"bs_id\": \"14048\", \"bs_area\": \"21162\", \"bs_signal\": \"136\"}, {\"bs_id\": \"24323\", \"bs_area\": \"21163\", \"bs_signal\": \"130\"}, {\"bs_id\": \"11842\", \"bs_area\": \"21163\", \"bs_signal\": \"126\"}], \"bs_tower\": \"1\", \"position\": \"V\", \"bs_number\": \"4\"}, {\"ap\": \"1\", \"mcc\": \"502\", \"mnc\": \"16\", \"wifi\": [{\"ssid\": \"mdtresearch@unifibiz\", \"mac_address\": \"6c:72:20:3d:28:54\", \"wifi_strength\": \"-76\"}], \"bs_data\": [{\"bs_id\": \"24233\", \"bs_area\": \"21162\", \"bs_signal\": \"133\"}], \"bs_tower\": \"3\", \"position\": \"V\", \"bs_number\": \"1\"}, {\"ap\": \"1\", \"mcc\": \"502\", \"mnc\": \"16\", \"wifi\": [{\"ssid\": \"mdtresearch@unifibiz\", \"mac_address\": \"6c:72:20:3d:28:54\", \"wifi_strength\": \"-76\"}], \"bs_data\": [{\"bs_id\": \"24233\", \"bs_area\": \"21162\", \"bs_signal\": \"133\"}], \"bs_tower\": \"3\", \"position\": \"V\", \"bs_number\": \"1\"}]', '[{\"zone\": \"TT001_15 Floor\", \"floor\": \"15\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"TT001_2\", \"latitude\": 3.0699683257287225, \"direction\": \"0.0\", \"longitude\": 101.61024142737008, \"timestamp\": \"2017-11-02T05:24:10.000Z\"}, {\"zone\": \"TT001_15 Floor\", \"floor\": \"15\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"-\", \"latitude\": 3.0699683257287225, \"direction\": \"0.0\", \"longitude\": 101.61024142737008, \"timestamp\": \"2017-12-05T10:10:36.000Z\"}, {\"zone\": \"TT001_15 Floor\", \"floor\": \"15\", \"speed\": \"0.00\", \"altitude\": \"0.0\", \"geofence\": \"-\", \"latitude\": 3.0699683257287225, \"direction\": \"0.0\", \"longitude\": 101.61024142737008, \"timestamp\": \"2017-12-05T10:10:36.000Z\"}]', 'Jalan Pinnnacle, Pjs 9, 47500 Subang Jaya, Selangor, é©¬æ¥è¥¿äºš', '', 100, '[3080, 3080, 3080]', NULL, 3080, 87, '{\"2017-12-05\": 3080}', 0),
('8308392956', NULL, NULL, '', '', 70, NULL, NULL, 2690, 40, NULL, 0),
('8308392957', '[{\"ap\": \"2\", \"mcc\": \"502\", \"mnc\": \"16\", \"wifi\": {\"ssid[0]\": \"mdtresearch@unifibiz\", \"ssid[1]\": \"Sunway Pinnacle_Guest\", \"strength[0]\": \"-62\", \"strength[1]\": \"-89\"}, \"battery\": \"60\", \"bs_data\": {\"bs_area[0]\": \"21162\", \"bs_area[1]\": \"21162\", \"bs_number[0]\": \"14047\", \"bs_number[1]\": \"14048\", \"bs_signal[0]\": \"140\", \"bs_signal[1]\": \"140\"}, \"bs_tower\": \"255\", \"base_number\": \"2\"}]', '[{\"zone\": \"Not in zone\", \"speed\": \"0.00\", \"steps\": \"2800\", \"altitude\": \"6.4\", \"latitude\": \"3.120145\", \"longitude\": \"101.603150\", \"timestamp\": \"2017-12-21T09:44:30.000Z\"}]', '', '', 72, '[]', '[]', 300, 70, NULL, 0),
('8308392958', '[{\"ap\": \"1\", \"mcc\": \"502\", \"mnc\": \"16\", \"wifi\": {\"ssid[0]\": \"mdtresearch@unifibiz\", \"strength[0]\": \"-64\"}, \"battery\": \"60\", \"bs_data\": {\"bs_area[0]\": \"21162\", \"bs_area[1]\": \"21162\", \"bs_number[0]\": \"14047\", \"bs_number[1]\": \"14048\", \"bs_signal[0]\": \"142\", \"bs_signal[1]\": \"137\"}, \"bs_tower\": \"1\", \"base_number\": \"2\"}]', '[{\"zone\": \"Not in zone\", \"speed\": \"0.00\", \"steps\": \"3103\", \"altitude\": \"2.6\", \"latitude\": \"3.102589\", \"direction\": \"0.00\", \"longitude\": \"101.599152\", \"timestamp\": \"2017-12-21T13:28:00.000Z\"}]', '', '', 55, '[]', '[]', 600, 80, NULL, 0),
('8308392959', '[{\"ap\": \"1\", \"mcc\": \"502\", \"mnc\": \"16\", \"wifi\": {\"ssid[0]\": \"mdtresearch@unifibiz\", \"strength[0]\": \"-70\"}, \"battery\": \"60\", \"bs_data\": {\"bs_area[0]\": \"21162\", \"bs_number[0]\": \"14048\", \"bs_signal[0]\": \"136\"}, \"bs_tower\": \"0\", \"base_number\": \"1\"}]', '[{\"zone\": \"Not in zone\", \"speed\": \"0.00\", \"steps\": \"2754\", \"altitude\": \"3.0\", \"latitude\": \"3.111211\", \"direction\": \"0.00\", \"longitude\": \"101.619133\", \"timestamp\": \"2017-12-21T09:44:30.000Z\"}]', '', '', 67, '[]', '[]', 900, 98, NULL, 0),
('8308392960', '[{\"ap\": \"2\", \"mcc\": \"502\", \"mnc\": \"16\", \"wifi\": {\"ssid[0]\": \"mdtresearch@unifibiz\", \"ssid[1]\": \"Sunway Pinnacle_Guest\", \"strength[0]\": \"-62\", \"strength[1]\": \"-89\"}, \"battery\": \"60\", \"bs_data\": {\"bs_area[0]\": \"21162\", \"bs_area[1]\": \"21162\", \"bs_number[0]\": \"14047\", \"bs_number[1]\": \"14048\", \"bs_signal[0]\": \"140\", \"bs_signal[1]\": \"140\"}, \"bs_tower\": \"255\", \"base_number\": \"2\"}]', '[{\"zone\": \"Not in zone\", \"speed\": \"0.00\", \"steps\": \"2754\", \"altitude\": \"3.0\", \"latitude\": \"3.111211\", \"direction\": \"0.00\", \"longitude\": \"101.619133\", \"timestamp\": \"2017-12-21T09:44:30.000Z\"}]', '', '', 80, '[]', '[]', 689, 112, NULL, 0),
('8308392961', '[{\"ap\": \"1\", \"mcc\": \"502\", \"mnc\": \"16\", \"wifi\": {\"ssid[0]\": \"mdtresearch@unifibiz\", \"ssid[1]\": \"GWNET\", \"ssid[2]\": \"Sunway Pinnacle_Guest\", \"strength[0]\": \"-61\", \"strength[1]\": \"-89\", \"strength[2]\": \"-90\"}, \"battery\": \"60\", \"bs_data\": {\"bs_area[0]\": \"21162\", \"bs_area[1]\": \"21162\", \"bs_area[2]\": \"21163\", \"bs_number[0]\": \"14047\", \"bs_number[1]\": \"14048\", \"bs_number[2]\": \"11842\", \"bs_signal[0]\": \"142\", \"bs_signal[1]\": \"139\", \"bs_signal[2]\": \"137\"}, \"bs_tower\": \"255\", \"base_number\": \"3\"}]', '[{\"zone\": \"Not in zone\", \"speed\": \"0.00\", \"steps\": \"2169\", \"altitude\": \"2.8\", \"latitude\": \"3.128180\", \"direction\": \"0.00\", \"longitude\": \"101.635810\", \"timestamp\": \"2017-12-21T13:28:00.000Z\"}]', '', '', 65, '[]', '[]', 4887, 90, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `geofence`
--

DROP TABLE IF EXISTS `geofence`;
CREATE TABLE IF NOT EXISTS `geofence` (
  `p_id` varchar(25) CHARACTER SET latin1 NOT NULL,
  `latlng` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `geofence_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`geofence_id`),
  KEY `p_id` (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `geofence`
--

INSERT INTO `geofence` (`p_id`, `latlng`, `geofence_id`) VALUES
('TT001', '[{\"lat\": 3.0702918594040605, \"lng\": 101.609845161438}, {\"lat\": 3.069681193398422, \"lng\": 101.609845161438}, {\"lat\": 3.069681193398422, \"lng\": 101.61058008670808}, {\"lat\": 3.070313286275115, \"lng\": 101.61055862903596}]', 2),
('TT001', '[{\"lat\": 3.069429427487471, \"lng\": 101.60941600799562}, {\"lat\": 3.0686419890426193, \"lng\": 101.60942137241364}, {\"lat\": 3.06860984868562, \"lng\": 101.6104406118393}, {\"lat\": 3.069445497653777, \"lng\": 101.61042988300323}]', 4),
('TT001', '[{\"lat\":3.176167436147481,\"lng\":101.68224334716798},{\"lat\":3.1682831124487127,\"lng\":101.67074203491212},{\"lat\":3.155599509242843,\"lng\":101.67074203491212},{\"lat\":3.15662791527788,\"lng\":101.68876647949219}]', 5);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `company_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `p_id` varchar(10) CHARACTER SET latin1 NOT NULL,
  `p_admin` varchar(10) CHARACTER SET latin1 NOT NULL,
  `p_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p_area` decimal(10,2) NOT NULL,
  `p_floor` smallint(6) NOT NULL,
  `p_photo` varchar(2083) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p_status` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p_injuries` int(11) NOT NULL,
  `p_latitude` double NOT NULL,
  `p_longitude` double NOT NULL,
  `p_location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p_start_date` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`p_id`,`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`company_id`, `p_id`, `p_admin`, `p_name`, `p_area`, `p_floor`, `p_photo`, `p_status`, `p_injuries`, `p_latitude`, `p_longitude`, `p_location`, `p_start_date`) VALUES
('mdt_sandbox', 'KL001', 'A002', 'Project 5', '101000.00', 12, 'https://preview.ibb.co/bzNbxm/Building_survey_figures.jpg', 'ended', 5, 3.168854, 101.652254, 'Mont Kiara, 50480 Kuala Lumpur', '2017-08-05T00:00:00Z'),
('mdt_sandbox', 'PJ001', 'A001', 'Project 1', '80000.00', 6, 'https://image.ibb.co/iPKiSm/i_Stock_000002350652_Small_el420744427270.jpg', 'ongoing', 1, 3.111212, 101.619136, 'Jalan SS2/27, Petaling Jaya', '2017-10-20T00:00:00Z'),
('mdt_sandbox', 'PJ002', 'A002', 'Project 2', '95000.00', 10, 'https://preview.ibb.co/gzBrDR/Advanced_diploma_building_construction.jpg', 'ongoing', 1, 3.119769, 101.602995, 'Jalan SS26/12, Petaling Jaya', '2017-11-05T00:00:00Z'),
('mdt_sandbox', 'PJ003', 'A003', 'Project 3', '45000.00', 20, 'https://preview.ibb.co/bXpBDR/21682698_10210911429608149_1375330558_o.png', 'ongoing', 0, 3.1036, 101.599181, 'Jalan SS6/5, Petaling Jaya', '2017-09-30T00:00:00Z'),
('mdt_sandbox', 'PJ004', 'A001', 'Project 4', '80000.00', 4, 'https://preview.ibb.co/foEytR/1.jpg', 'ongoing', 2, 3.128683, 101.635084, 'Jalan 17/29, Seksyen 17, Petaling Jaya', '2017-08-14T00:00:00Z'),
('mdt_sandbox', 'TT001', 'A001', 'Pinnacle', '1000.00', 30, 'http://mmdt2.ddns.net:8081/wecare/img/PnnacleSunway.jpg', 'ongoing', 0, 3.0700361, 101.6104627, 'Persiaran Lagoon, Bandar Sunway, 47500 Subang Jaya, Selangor, é©¬æ¥è¥¿äºš', '2018-01-17T10:06:19Z');

-- --------------------------------------------------------

--
-- Table structure for table `sos`
--

DROP TABLE IF EXISTS `sos`;
CREATE TABLE IF NOT EXISTS `sos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sos_status` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trigger_id` varchar(15) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sos`
--

INSERT INTO `sos` (`id`, `type`, `timestamp`, `sos_status`, `trigger_id`) VALUES
(1, 'SOS', '2017-11-13T10:33:45.000Z', 'resolved', '8308392959');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `company_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `u_id` varchar(10) CHARACTER SET latin1 NOT NULL,
  `u_name` varchar(50) CHARACTER SET latin1 NOT NULL,
  `u_age` int(11) NOT NULL,
  `u_contact` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `u_photo` varchar(2083) COLLATE utf8mb4_unicode_ci NOT NULL,
  `u_email` varchar(320) COLLATE utf8mb4_unicode_ci NOT NULL,
  `u_pw` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `u_position` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`u_id`,`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`company_id`, `u_id`, `u_name`, `u_age`, `u_contact`, `u_photo`, `u_email`, `u_pw`, `u_position`) VALUES
('mdt_sandbox', 'A001', 'Admin001', 33, '+60138958293', 'http://mmdt2.ddns.net:8081/wecare/img/admin001.png', 'admin001@gmail.com', '123456', 'Site Supervisor'),
('mdt_sandbox', 'A002', 'Admin003', 38, '+01135674578', 'https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png', 'admin002@gmail.com', '123456', 'Site Supervisor'),
('mdt_sandbox', 'A003', 'Admin002', 42, '+60124456321', 'https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png', 'admin003@gmail.com', '123456', 'Site Supervisor'),
('mdt_jakarta', 'A005', 'Jakarta', 18, '0161231234', '', 'jakarta@gmail.com', '123456', 'Admin'),
('mdt_hongkong', 'A006', 'HongKong', 18, '0161231214', 'http://mmdt2.ddns.net:8081/wecare/img/cute.png', 'hongkong@gmail.com', '123456', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `wifi`
--

DROP TABLE IF EXISTS `wifi`;
CREATE TABLE IF NOT EXISTS `wifi` (
  `ssid` varchar(32) CHARACTER SET latin1 NOT NULL,
  `mac_id` varchar(48) CHARACTER SET latin1 NOT NULL,
  `zone_id` varchar(25) CHARACTER SET latin1 NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  PRIMARY KEY (`mac_id`),
  KEY `zone_id` (`zone_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wifi`
--

INSERT INTO `wifi` (`ssid`, `mac_id`, `zone_id`, `lat`, `lng`) VALUES
('GWNET', '1c:1d:86:41:11:81', 'TT001_15 Floor', 3.0698954622120906, 101.61021530628206),
('INTEGRATION POINT', '4:18:d6:82:d5:6f', 'TT001_15 Floor', 3.0699503685886738, 101.61028269678357),
('mdtresearch@unifibiz', '6c:72:20:3d:28:54', 'TT001_15 Floor', 3.0699683257287225, 101.61024142737007),
('hehe', '80:26:89:b1:93:f8', 'PJ002_B', 3.1183833837082133, 101.6029143333435),
('COSCO-GUEST', '88:5b:dd:b8:56:95', 'TT001_19 Floor', 3.0699168890910835, 101.61030113697053),
('MDTGroup', 'b0:c5:54:12:df:7c', 'TT001_19 Floor', 3.0699383159696567, 101.61024749279024),
('MDTGroup', 'c8:60:0:e5:42:20', 'TT001_19 Floor', 3.0699383159696567, 101.61020994186403),
('mdtinno', 'ec:8:6b:2b:c0:a8', 'TT001_19 Floor', 3.069890105492266, 101.61017239093782);

-- --------------------------------------------------------

--
-- Table structure for table `worker`
--

DROP TABLE IF EXISTS `worker`;
CREATE TABLE IF NOT EXISTS `worker` (
  `company_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `w_id` varchar(10) CHARACTER SET latin1 NOT NULL,
  `w_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `w_photo` varchar(2083) COLLATE utf8mb4_unicode_ci NOT NULL,
  `on_duty` tinyint(1) NOT NULL DEFAULT '0',
  `health_status` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `w_height` decimal(5,2) NOT NULL,
  `w_weight` decimal(5,2) NOT NULL,
  `w_bloodtype` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `w_position` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `w_email` varchar(320) COLLATE utf8mb4_unicode_ci NOT NULL,
  `w_contact` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `w_age` int(11) NOT NULL,
  `dev_id` varchar(15) CHARACTER SET latin1 NOT NULL,
  `p_id` varchar(10) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`w_id`,`company_id`),
  KEY `p_id` (`p_id`),
  KEY `dev_id` (`dev_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `worker`
--

INSERT INTO `worker` (`company_id`, `w_id`, `w_name`, `w_photo`, `on_duty`, `health_status`, `w_height`, `w_weight`, `w_bloodtype`, `w_position`, `w_email`, `w_contact`, `w_age`, `dev_id`, `p_id`) VALUES
('mdt_sandbox', 'W001', 'Worker001', 'https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png', 0, 'OK', '172.00', '73.00', 'A', 'Worker', 'worker001@gmail.com', '+60161234567', 30, '8308392955', 'PJ002'),
('mdt_sandbox', 'W002', 'Worker002', 'https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png', 1, 'OK', '175.00', '80.00', 'O', 'Worker', 'worker002@gmail.com', '+60142222222', 44, '8308392956', 'PJ002'),
('mdt_sandbox', 'W003', 'Worker003', 'https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png', 0, 'OK', '172.00', '80.00', 'O', 'Worker', 'worker003@gmail.com', '+60148869584', 24, '8308392957', 'PJ001'),
('mdt_sandbox', 'W004', 'Worker004', 'https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png', 1, 'OK', '170.00', '66.00', 'B', 'Worker', 'worker004@gmail.com', '+60188394853', 22, '8308392958', 'PJ003'),
('mdt_sandbox', 'W005', 'Worker005', 'https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png', 1, 'OK', '175.00', '75.00', 'B', 'Worker', 'worker005@gmail.com', '+60123456789', 28, '8308392959', 'PJ001'),
('mdt_sandbox', 'W006', 'Worker006', 'https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png', 0, 'OK', '178.00', '85.00', 'AB', 'Worker', 'worker006@gmail.com', '+60189898998', 38, '8308392960', 'PJ003'),
('mdt_sandbox', 'W007', 'Worker007', 'https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png', 1, 'OK', '174.00', '83.00', 'AB', 'Worker', 'worker007@gmail.com', '+60122464432', 39, '8308392961', 'PJ004'),
('mdt_sandbox', 'W09', 'Watcher', 'http://ewic.org/wp-content/themes/ewic/images/Construction%20Worker.png', 1, 'Unhealthy', '167.00', '63.00', 'AB', 'Worker', '', '0143670439', 22, '3923732182', 'TT001'),
('mdt_sandbox', 'W10', 'Wong', 'http://themecanon.net/themes/worker-builders/wp-content/uploads/sites/27/2015/02/builder-man2.png', 1, 'Unhealthy', '1.00', '11.00', 'A+', 'Worker', '', '123456789', 1, '3923732180', 'TT001');

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

DROP TABLE IF EXISTS `zone`;
CREATE TABLE IF NOT EXISTS `zone` (
  `zone_id` varchar(25) CHARACTER SET latin1 NOT NULL,
  `p_id` varchar(25) CHARACTER SET latin1 NOT NULL,
  `latlng` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(25) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`zone_id`),
  KEY `p_id` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `zone`
--

INSERT INTO `zone` (`zone_id`, `p_id`, `latlng`, `level`) VALUES
('PJ002_B', 'PJ002', '[{\"lat\": 3.1193796875421307, \"lng\": 101.60269087180497}, {\"lat\": 3.118822614547038, \"lng\": 101.60254603251818}, {\"lat\": 3.1182762542075113, \"lng\": 101.6024816595018}, {\"lat\": 3.1178316666629455, \"lng\": 101.60246556624772}, {\"lat\": 3.117799527797028, \"lng\": 101.60308247432113}, {\"lat\": 3.118431591979978, \"lng\": 101.60313075408342}, {\"lat\": 3.118769049820427, \"lng\": 101.60313611850142}, {\"lat\": 3.1191332899076265, \"lng\": 101.60317903384566}, {\"lat\": 3.119411826359767, \"lng\": 101.60317903384566}]', '3'),
('TT001_15 Floor', 'TT001', '[{\"lat\": 3.0702007951972963, \"lng\": 101.60994708538055}, {\"lat\": 3.0697776143698947, \"lng\": 101.60995781421664}, {\"lat\": 3.069772257649485, \"lng\": 101.6104620695114}, {\"lat\": 3.0702007951972963, \"lng\": 101.61047816276552}]', '15'),
('TT001_19 Floor', 'TT001', '[{\"lat\": 3.0701900817607006, \"lng\": 101.60996502265334}, {\"lat\": 3.069804397971536, \"lng\": 101.60994892939928}, {\"lat\": 3.0697883278106377, \"lng\": 101.61042636260392}, {\"lat\": 3.070184725042364, \"lng\": 101.61050146445636}]', '19');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
