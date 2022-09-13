-- MySQL dump 10.16  Distrib 10.2.17-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: wecare_v3
-- ------------------------------------------------------
-- Server version	10.2.17-MariaDB-10.2.17+maria~xenial

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `s_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_name` varchar(50) NOT NULL,
  `s_pw` varchar(32) NOT NULL,
  `company_id` varchar(100) NOT NULL,
  `s_email` varchar(50) NOT NULL,
  `s_contact` varchar(50) NOT NULL,
  `s_photo` varchar(255) NOT NULL,
  `access_level` int(11) NOT NULL DEFAULT 2,
  PRIMARY KEY (`s_id`,`company_id`),
  UNIQUE KEY `s_email` (`s_email`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (5,'Admin2','12345678','mdt_sandbox','admin1@gmail.com','0124567893','',2),(6,'test1','12346578','mdt_sandbox','test1@gmail.com','012-5186944','',2),(8,'Super','12345678','mdt_sandbox','super@gmail.com','01245689365','',2),(13,'HR','12345678','','hr@gmail.com','123456789','',2),(15,'newOne','12345678','mdt_sandbox','petronas@gmail.com','123456789','',2),(21,'Super2121','12345678','','superpetro@gmail.com','01245689365','',2),(24,'Super2122','12345678','','superpetro2122@gmail.com','01245689365','',2),(28,'Super22','12345678','','superpetronassi@gmail.com','01245689365','',2),(30,'Super95','12345678','','superpetrona@gmail.com','01245689365','',2),(34,'Super95','12345678','','superpetrona@qq.com','01245689365','',2),(35,'Super95','12345678','petronas','superpetrona@qq1.com','01245689365','',2),(36,'Shan','shan1234','shan1234','shan@mmdt.cc','019-3019463','http://mmdt.ddns.net:8081/wecare/img/2018-08-20_095232.jpg',2),(40,'Super95','12345678','petronas','superpetrona@qq2.com','01245689365','',2),(41,'Super95','12345678','petronas','superpetrona@qq3.com','01245689365','',2),(42,'Super95','12345678','mdt_sandbox','superpetrona@qq4.com','01245689365','',2),(46,'Super95','12345678','mdt_sandbox','superpetrona@qq5.com','01245689365','',2),(48,'Super95','12345678','mdt_sandbox','superpetrona@qq7.com','01245689365','',2),(50,'å¹¿å·žç”µä¿¡åŸºåœ°','12345678','GZ01','23f@qq.cn','189123456789','http://mmdt.ddns.net:8081/wecare/img/admin.ico',2);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alert`
--

DROP TABLE IF EXISTS `alert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alert` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `trigger_id` varchar(15) NOT NULL,
  `type` varchar(50) NOT NULL,
  `timestamp` varchar(25) NOT NULL,
  `alert_status` varchar(25) NOT NULL,
  `solve_time` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alert`
--

LOCK TABLES `alert` WRITE;
/*!40000 ALTER TABLE `alert` DISABLE KEYS */;
INSERT INTO `alert` VALUES (72,'3923732180','bat_crit','2018-01-23T10:19:52.000Z','unsolved',NULL),(73,'3923732182','geof_oob','2018-01-25T14:16:49.000Z','unsolved',NULL),(74,'3923732182','geof_cr,-,TT001_2','2018-02-01T01:59:04.000Z','unsolved',NULL),(85,'3923732218','geof_oob','2018-02-02T10:11:57.000Z','resolved',NULL),(134,'3923732224','geof_oob','2018-05-14T10:49:55.000Z','resolved',NULL),(137,'6209699633','geof_oob','2018-05-15T03:40:42.000Z','unsolved',NULL),(138,'6209699633','hr_abnormal,56','2018-05-15T03:40:54Z','unsolved',NULL),(139,'15052018','geof_oob','2018-01-17T03:01:35.000Z','resolved',NULL),(140,'6209699631','geof_oob','2018-04-18T17:50:17.000Z','unsolved',NULL),(144,'6209699630','geof_oob','2018-05-15T07:24:27.000Z','unsolved',NULL),(145,'6209699630','bat_crit','2018-05-17T06:24:39Z','unsolved',NULL),(146,'6209699630','bat_low','2018-05-16T13:42:56.000Z','unsolved',NULL),(147,'6209699630','hr_abnormal,116','2018-05-18T02:35:07Z','resolved',NULL),(148,'180518','geof_oob','2018-01-17T03:01:45.000Z','unsolved',NULL),(149,'6209699630','hr_abnormal,127','2018-05-18T03:23:21Z','resolved',NULL),(150,'6209699633','geof_cr,-,TT001_2','2018-05-15T03:40:54Z','unsolved',NULL),(151,'3923732219','geof_oob','2003-12-31T18:21:04.000Z','resolved',NULL),(152,'3923732219','hr_abnormal,102','2018-05-24T06:48:54Z','resolved',NULL),(153,'3923732224','bat_low','2018-05-24T07:31:41Z','resolved',NULL),(154,'3923732224','bat_crit','2018-05-24T07:28:14.000Z','resolved',NULL),(155,'3923732219','geof_oob','2018-05-25T01:59:35.000Z','resolved',NULL),(156,'3923732219','geof_cr,-,mdt_sandbox_TT001_2','2018-05-25T02:01:40.000Z','resolved',NULL),(157,'3923732219','bat_crit','2018-05-28T00:07:57Z','resolved',NULL),(158,'3923732219','hr_abnormal,53','2018-05-30T02:12:45Z','resolved',NULL),(159,'3923732219','geof_cr,mdt_sandbox_TT001_2,mdt_sandbox_TT001_4','2018-05-31T09:11:56.000Z','resolved',NULL),(160,'3923732224','hr_abnormal,106','2018-06-01T00:15:56Z','resolved',NULL),(161,'15062018','geof_oob','2018-04-10T03:42:06.000Z','unsolved',NULL),(164,'12345678','bat_low','2018-01-19T07:24:14.000Z','unsolved',NULL),(165,'12345678','geof_oob','2018-01-19T07:24:14.000Z','unsolved',NULL),(166,'3923732219','bat_low','2018-07-17T04:07:59Z','resolved',NULL),(167,'3923732219','geof_oob','2018-06-02T16:18:15.000Z','resolved',NULL),(168,'3923732219','bat_low','2018-07-17T04:21:55.000Z','resolved',NULL),(169,'3923732219','geof_oob','2018-07-17T04:21:55.000Z','resolved',NULL),(170,'3923732219','bat_crit','2018-07-17T04:26:23.000Z','resolved',NULL),(171,'3923732219','geof_cr,mdt_sandbox_TT001_2,mdt_sandbox_TT001_4','2018-07-17T06:20:42.000Z','resolved',NULL),(172,'3923732219','geof_oob','2018-07-18T01:28:54.000Z','resolved',NULL),(173,'3923732224','geof_oob','2018-07-18T09:42:55.000Z','resolved',NULL),(174,'3923732224','hr_abnormal,57','2018-07-18T09:45:33Z','resolved',NULL),(175,'3923732224','geof_oob','2018-07-19T08:37:22.000Z','resolved',NULL),(176,'3923732219','geof_oob','2018-07-19T08:39:01.000Z','unsolved',NULL),(177,'3923732219','geof_cr,mdt_sandbox_TT001_2,mdt_sandbox_TT001_4','2018-07-20T00:56:44.000Z','resolved',NULL),(178,'3923732219','hr_abnormal,52','2018-07-20T07:05:45Z','resolved',NULL),(179,'3923732219','hr_abnormal,101','2018-07-20T07:15:52Z','resolved',NULL),(180,'3923732219','hr_abnormal,47','2018-07-20T09:24:15Z','resolved',NULL),(181,'3923732224','bat_crit','2018-07-22T00:12:14Z','resolved',NULL),(182,'3923732224','bat_low','2018-07-21T11:07:01.000Z','unsolved',NULL),(183,'3923732219','bat_crit','2018-07-24T02:28:52Z','resolved',NULL),(184,'3923732219','geof_cr,-,mdt_sandbox_TT001_4','2018-07-24T05:40:28.000Z','resolved',NULL),(185,'3923732224','geof_cr,-,mdt_sandbox_TT001_4','2018-07-24T15:27:41.000Z','unsolved',NULL),(186,'3923732219','bat_low','2018-08-06T15:46:03.000Z','resolved',NULL),(187,'3923732224','hr_abnormal,104','2018-08-08T10:49:49Z','resolved',NULL),(188,'3923732219','hr_abnormal,54','2018-08-11T04:24:51Z','resolved',NULL),(189,'3923732219','hr_abnormal,57','2018-08-11T04:25:02Z','resolved',NULL),(190,'3923732219','hr_abnormal,105','2018-08-11T05:36:10Z','resolved',NULL),(191,'3923732219','hr_abnormal,106','2018-08-11T06:42:13Z','resolved',NULL),(192,'3923732219','hr_abnormal,50','2018-08-11T07:19:37Z','resolved',NULL),(193,'3923732219','hr_abnormal,120','2018-08-11T08:05:46Z','resolved',NULL),(194,'3923732219','hr_abnormal,43','2018-08-11T11:41:57Z','resolved',NULL),(195,'3923732218','geof_oob','2018-03-02T15:55:30.000Z','resolved',NULL),(196,'3923732218','bat_low','2018-03-09T04:35:12.000Z','resolved',NULL),(197,'3923732218','bat_crit','2018-03-09T16:34:17.000Z','resolved',NULL),(198,'3923732219','bat_low','2018-08-20T10:04:35Z','unsolved',NULL),(199,'3923732219','bat_crit','2018-08-20T10:22:10Z','unsolved',NULL),(200,'3923732224','bat_crit','2018-08-21T18:20:51Z','unsolved',NULL),(201,'3923732261','geof_oob','2003-12-31T16:03:28.000Z','unsolved',NULL),(202,'3923731850','geof_oob','2003-12-31T16:00:28.000Z','unsolved',NULL),(203,'3923731850','hr_abnormal,56','2018-08-24T03:43:03Z','unsolved',NULL),(204,'3918852734','geof_oob','2003-12-31T16:03:28.000Z','unsolved',NULL),(205,'3923732180','geof_oob','2003-12-31T19:15:06.000Z','unsolved',NULL),(206,'3923732182','bat_crit','2003-12-31T16:03:28.000Z','unsolved',NULL),(207,'3923732224','geof_oob','2018-08-16T01:10:51.000Z','unsolved',NULL),(208,'3923732182','bat_low','2018-09-02T09:02:00.000Z','unsolved',NULL),(209,'3923732218','geof_oob','2018-09-09T05:12:51.000Z','resolved',NULL),(210,'3923732218','geof_cr,-,mdt_sandbox_PJ001_28','2018-09-09T11:35:32.000Z','resolved',NULL),(211,'3923732218','geof_cr,mdt_sandbox_PJ001_28,mdt_sandbox_PJ001_29','2018-09-09T11:35:53.000Z','resolved',NULL),(212,'3923732218','geof_cr,mdt_sandbox_PJ001_29,mdt_sandbox_PJ001_28','2018-09-09T11:36:13.000Z','resolved',NULL),(213,'3923732218','geof_oob','2018-09-09T12:32:02.000Z','resolved',NULL),(214,'3923732218','geof_cr,-,mdt_sandbox_PJ001_28','2018-09-09T13:47:33.000Z','resolved',NULL),(215,'3923732218','geof_oob','2018-09-09T14:59:03.000Z','resolved','2018-09-09T19:22:21.588Z'),(216,'3923732218','geof_cr,-,mdt_sandbox_PJ001_28','2018-09-09T14:59:24.000Z','resolved','2018-09-09T18:30:43.181Z'),(217,'3923732218','hr_abnormal,39','2018-09-09T16:46:54Z','resolved','2018-09-09T18:30:43.181Z'),(218,'3923732218','bat_low','2018-09-10T16:20:16Z','unsolved',NULL),(219,'3923732218','geof_oob','2018-09-10T16:32:59.000Z','unsolved',NULL),(220,'3923732218','geof_cr,-,mdt_sandbox_PJ001_28','2018-09-10T16:44:51.000Z','unsolved',NULL);
/*!40000 ALTER TABLE `alert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignment`
--

DROP TABLE IF EXISTS `assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assignment` (
  `assign_id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` varchar(100) NOT NULL DEFAULT '',
  `u_id` varchar(10) NOT NULL,
  `p_id` varchar(10) NOT NULL,
  PRIMARY KEY (`assign_id`),
  KEY `u_id` (`u_id`),
  KEY `p_id` (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (1,'mdt_sandbox','A002','KL001'),(2,'mdt_sandbox','A001','PJ001'),(3,'mdt_sandbox','A002','PJ002'),(4,'mdt_sandbox','A003','PJ003'),(5,'mdt_sandbox','A001','PJ004'),(18,'mdt_sandbox','A001','TT001'),(21,'mdt_hongkong','A006','HK001'),(22,'mdt_jakarta','A005','JK001'),(23,'mdt_hongkong','A006','BMC001'),(24,'mdt_hongkong','A006','HK002'),(25,'mdt_hongkong','A006','MDT02'),(26,'mdt_sandbox','A001','PJ0088'),(27,'mdt_thailand','A007','Proj_Thai'),(28,'mdt_hongkong','A006','OWT01'),(29,'mdt_hongkong2','A10','OTW'),(30,'mdt_guangzhou','A10','GZ01'),(31,'mdt_sandbox','A001','UG234'),(33,'mdt_hongkong2','A10','PJ321'),(34,'mdt_hongkong2','A10','PJ322'),(35,'mdt_thailand','A007','PJtest'),(36,'mdt_sandbox','A001','G010101'),(37,'mdt_sandbox','A001','Test');
/*!40000 ALTER TABLE `assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `device` (
  `dev_id` varchar(15) NOT NULL,
  `dev_datetime` varchar(50) DEFAULT '',
  `dev_data` text DEFAULT NULL,
  `dev_common` text DEFAULT NULL,
  `dev_location` varchar(255) NOT NULL DEFAULT '',
  `dev_phone` varchar(15) DEFAULT NULL,
  `dev_battery` tinyint(4) NOT NULL DEFAULT 0,
  `dev_steps` text DEFAULT NULL,
  `dev_heartrate` text DEFAULT NULL,
  `dev_steps_curr` int(11) NOT NULL DEFAULT 0,
  `dev_heartrate_curr` int(11) NOT NULL DEFAULT 0,
  `dev_steps_days` text,
  `dev_steps_cummulative` int(11) DEFAULT 0,
  `dev_zone` text NOT NULL DEFAULT '',
  PRIMARY KEY (`dev_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device`
--

LOCK TABLES `device` WRITE;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
INSERT INTO `device` VALUES ('8308392961','','[{\"ap\": \"1\", \"mcc\": \"502\", \"mnc\": \"16\", \"wifi\": {\"ssid[0]\": \"mdtresearch@unifibiz\", \"ssid[1]\": \"GWNET\", \"ssid[2]\": \"Sunway Pinnacle_Guest\", \"strength[0]\": \"-61\", \"strength[1]\": \"-89\", \"strength[2]\": \"-90\"}, \"battery\": \"60\", \"bs_data\": {\"bs_area[0]\": \"21162\", \"bs_area[1]\": \"21162\", \"bs_area[2]\": \"21163\", \"bs_number[0]\": \"14047\", \"bs_number[1]\": \"14048\", \"bs_number[2]\": \"11842\", \"bs_signal[0]\": \"142\", \"bs_signal[1]\": \"139\", \"bs_signal[2]\": \"137\"}, \"bs_tower\": \"255\", \"base_number\": \"3\"}]','[{\"zone\": \"Not in zone\", \"speed\": \"0.00\", \"steps\": \"2169\", \"altitude\": \"2.8\", \"latitude\": \"3.128180\", \"direction\": \"0.00\", \"longitude\": \"101.635810\", \"timestamp\": \"2017-12-21T13:28:00.000Z\"}]','','',65,NULL,'[]',0,90,'',0,''),('8838383883','2018-09-08 18:31:01',NULL,NULL,'',NULL,0,NULL,NULL,0,0,'{}',0,''),('888888','2018-07-04 15:42:33',NULL,NULL,'',NULL,0,NULL,NULL,0,0,'{}',0,''),('892314561','2018-07-05 09:12:19',NULL,NULL,'',NULL,0,NULL,NULL,0,0,'{}',0,''),('8923156002','2018-07-04 18:19:03',NULL,NULL,'',NULL,0,NULL,NULL,0,0,'{}',0,''),('892315601','2018-07-04 17:47:38',NULL,NULL,'',NULL,0,NULL,NULL,0,0,'{}',0,''),('89780198234','2018-05-10 11:04:10',NULL,NULL,'',NULL,0,NULL,NULL,0,0,'',0,''),('8982348970','2018-04-24 11:41:24',NULL,NULL,'',NULL,0,NULL,NULL,0,0,'',0,''),('90852837','2018-09-07 19:52:15',NULL,NULL,'',NULL,0,NULL,NULL,0,0,'{}',0,''),('9172920189','2018-09-11 23:12:48',NULL,NULL,'',NULL,0,NULL,NULL,0,0,'{}',0,''),('927364739','2018-05-18 14:49:51',NULL,NULL,'',NULL,0,NULL,NULL,0,0,'',0,''),('98734502345','2018-04-24 11:20:42',NULL,NULL,'',NULL,0,NULL,NULL,0,0,'',0,'');
/*!40000 ALTER TABLE `device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `geofence`
--

DROP TABLE IF EXISTS `geofence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `geofence` (
  `company_id` varchar(100) NOT NULL DEFAULT '',
  `p_id` varchar(25) NOT NULL,
  `latlng` text NOT NULL,
  `geofence_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`geofence_id`),
  KEY `p_id` (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `geofence`
--

LOCK TABLES `geofence` WRITE;
/*!40000 ALTER TABLE `geofence` DISABLE KEYS */;
INSERT INTO `geofence` VALUES ('mdt_sandbox','TT001','[{\"lat\": 3.069429427487471, \"lng\": 101.60941600799562}, {\"lat\": 3.0686419890426193, \"lng\": 101.60942137241364}, {\"lat\": 3.06860984868562, \"lng\": 101.6104406118393}, {\"lat\": 3.069445497653777, \"lng\": 101.61042988300323}]',4),('mdt_sandbox','PJ001','[{\"lat\":3.111414586970428,\"lng\":101.61943498067558},{\"lat\":3.1109807095535746,\"lng\":101.61927941255271},{\"lat\":3.1110931963084214,\"lng\":101.62021282128993}]',5),('mdt_hongkong','BMC001','[{\"lat\":3.0573499508696464,\"lng\":101.79279863834383},{\"lat\":3.057060684571296,\"lng\":101.79282546043397},{\"lat\":3.057130322761367,\"lng\":101.79360866546632},{\"lat\":3.057408875476409,\"lng\":101.7935872077942}]',6),('mdt_sandbox','TT001','[{\"lat\":3.069143177609713,\"lng\":101.62136893719436},{\"lat\":3.0643221155218083,\"lng\":101.62503819912673},{\"lat\":3.068371809136415,\"lng\":101.62870746105911},{\"lat\":3.068564651306923,\"lng\":101.62877183407545},{\"lat\":3.07165012130176,\"lng\":101.6252313181758},{\"lat\":3.07165012130176,\"lng\":101.6252313181758},{\"lat\":3.071329890374045,\"lng\":101.62332108244301},{\"lat\":3.071329890374045,\"lng\":101.62332108244301},{\"lat\":3.069161005455214,\"lng\":101.62148620001972}]',9),('mdt_sandbox','PJ003','[{\"lat\":3.076409213622437,\"lng\":103.06343078613283},{\"lat\":3.0441828985946957,\"lng\":103.08917999267578},{\"lat\":3.0630388388758676,\"lng\":103.10428619384767}]',11),('mdt_hongkong2','OTW','[{\"lat\":22.3372211541192,\"lng\":114.20000184327365},{\"lat\":22.336650535799226,\"lng\":114.19992808252573},{\"lat\":22.336768381078365,\"lng\":114.20075956732038},{\"lat\":22.337233558839344,\"lng\":114.20075286179784},{\"lat\":22.3371839399521,\"lng\":114.2000621929765}]',18),('mdt_guangzhou','GZ01','[{\"lat\":23.138164632341322,\"lng\":113.328359015286},{\"lat\":23.1369930625185,\"lng\":113.32815784960987},{\"lat\":23.136956065409976,\"lng\":113.33098758012058},{\"lat\":23.13815230008071,\"lng\":113.33096746355298}]',19),('mdt_hongkong2','PJ322','[{\"lat\":3.136254732991515,\"lng\":101.62387493764982},{\"lat\":3.1353173654624906,\"lng\":101.62387493764982},{\"lat\":3.1353240609478163,\"lng\":101.62598047172652}]',21),('mdt_sandbox','TT001','[{\"lat\":3.1011313763761588,\"lng\":101.60876691341402},{\"lat\":3.1027811963046004,\"lng\":101.61599814891815},{\"lat\":3.0975317603275694,\"lng\":101.61599814891815},{\"lat\":3.0962461802008026,\"lng\":101.60923898220064}]',22),('mdt_sandbox','TT001','[{\"lat\":3.4075963286675566,\"lng\":101.52548231184484},{\"lat\":3.403209373069252,\"lng\":101.65292361751199},{\"lat\":3.308889180782493,\"lng\":101.64852915331721},{\"lat\":3.3374054178051074,\"lng\":101.52328491210939},{\"lat\":3.376888476007466,\"lng\":101.52328491210939}]',23),('mdt_sandbox','KL001','[{\"lat\":3.7980272447279226,\"lng\":102.56286637857558},{\"lat\":3.6731709959320016,\"lng\":102.57507344707847},{\"lat\":3.7279881000816166,\"lng\":102.70935086533429}]',24),('mdt_sandbox','PJ001','[{\"lat\":3.1121399196353714,\"lng\":101.61978051088228},{\"lat\":3.1115249255499036,\"lng\":101.61997905001047},{\"lat\":3.11179587551954,\"lng\":101.62027920596302}]',25),('mdt_sandbox','KL001','[{\"lat\":3.8010723040356797,\"lng\":102.33398443087938},{\"lat\":3.6122591369985053,\"lng\":102.30651861056688},{\"lat\":3.743214515641736,\"lng\":102.50793473795058}]',26),('mdt_sandbox','PJ001','[{\"lat\":3.129465076436991,\"lng\":101.6269251331687},{\"lat\":3.130024445368634,\"lng\":101.6250587347895},{\"lat\":3.1289645022958754,\"lng\":101.62524506449702},{\"lat\":3.1287686999898807,\"lng\":101.6267926990986}]',28);
/*!40000 ALTER TABLE `geofence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdtadmin`
--

DROP TABLE IF EXISTS `mdtadmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdtadmin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `company_id` varchar(100) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `pw` varchar(32) NOT NULL,
  `access_level` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdtadmin`
--

LOCK TABLES `mdtadmin` WRITE;
/*!40000 ALTER TABLE `mdtadmin` DISABLE KEYS */;
INSERT INTO `mdtadmin` VALUES (1,'mdt','','','mdt_sandbox','','MDTsuccess1868',1),(2,'mdtgz','','','mdt_guangzhou','','MDTsuccess1868',1);
/*!40000 ALTER TABLE `mdtadmin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `company_id` varchar(100) NOT NULL DEFAULT '',
  `p_id` varchar(10) NOT NULL,
  `p_admin` varchar(10) NOT NULL,
  `p_name` varchar(100) NOT NULL,
  `p_area` decimal(10,2) NOT NULL,
  `p_floor` smallint(6) NOT NULL,
  `p_photo` varchar(255) NOT NULL,
  `p_status` varchar(25) NOT NULL,
  `p_injuries` int(11) NOT NULL,
  `p_latitude` double NOT NULL,
  `p_longitude` double NOT NULL,
  `p_location` varchar(255) NOT NULL,
  `p_start_date` varchar(25) NOT NULL,
  PRIMARY KEY (`p_id`,`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES ('mdt_hongkong','BMC001','A006','Elderly Home',10000.00,2,'','ongoing',0,3.057234780038,101.79326249287,'18, Jalan Dayang 8/8, Bandar Mahkota Cheras, 43200 Batu 9 Cheras, Selangor, Malaysia','2018-03-01T08:44:00.000Z'),('mdt_guangzhou','GZ01','A10','å¹¿å·žç”µä¿¡å¤§åŽ¦',1000.00,30,'','ongoing',0,23.140340025365553,113.3234894648194,'å¹¿ä¸œçœå¹¿å·žå¸‚å¤©æ²³åŒºå¤©æ²³åŒ—å¹¿å·žç”µä¿¡å¤§åŽ¦ é‚®æ”¿ç¼–ç : 510610','2018-05-13T03:00:53.000Z'),('mdt_hongkong','HK001','A006','HongKong',10000.00,100,'http://mmdt.ddns.net:8081/wecare/img/5104226627001_5222689739001_5212887501001-vs.jpg','ongoing',0,22.3192011,114.1696121,'é¦™æ¸¯','2018-03-02T14:33:03.000Z'),('mdt_hongkong','HK002','A006','HK Elderly Home',100.00,6,'','ongoing',0,22.3563769,114.1250773,'é¦™æ¸¯è‘µæ¶Œè‘µè±è¡—33è™Ÿè¯è±å·¥æ¥­ä¸­å¿ƒ','2018-03-01T07:10:34.000Z'),('mdt_jakarta','JK001','A005','Jakarta',10000.00,100,'http://mmdt.ddns.net:8081/wecare/img/jakarta-main-image.jpg','ongoing',0,-6.17511,106.8650395,'å°åº¦å°¼è¥¿äºšå¤§é›…åŠ è¾¾','2018-03-02T14:33:03.000Z'),('mdt_sandbox','KL001','A002','Project 5',101000.00,12,'https://preview.ibb.co/bzNbxm/Building_survey_figures.jpg','ended',5,3.168854,101.652254,'Mont Kiara, 50480 Kuala Lumpur','2017-08-05T00:00:00Z'),('mdt_hongkong','MDT02','A006','MDTOffice',2000.00,15,'','ongoing',0,3.069974027542,101.61022894063,'Jalan Pinnnacle, Pjs 9, 47500 Subang Jaya, Selangor, Malaysia','2018-03-01T13:07:32.000Z'),('mdt_hongkong2','OTW','A10','ONEWORK TECHNOLOGY',20000.00,10,'','ongoing',0,22.3370071,114.2003192,'é¦™æ¸¯æ–°è’²å´—å…­åˆè¡—25-27è™Ÿå˜‰æ™‚å·¥å» å¤§å»ˆ','2018-05-14T03:00:53.000Z'),('mdt_hongkong2','OTW_HK','A11','ONEWORK TECH',1000.00,6,'','ongoing',0,22.3370071,114.2003192,'é¦™æ¸¯æ–°è’²å´—å…­åˆè¡—25-27è™Ÿå˜‰æ™‚å·¥å» å¤§å»ˆ','2018-05-14T01:05:54.000Z'),('mdt_hongkong','OWT01','A006','ONEWORK TECHNOLOGY',100.00,10,'','ongoing',0,22.3370071,114.2003192,'é¦™æ¸¯æ–°è’²å´—å…­åˆè¡—25-27è™Ÿå˜‰æ™‚å·¥å» å¤§å»ˆ','2018-05-14T01:40:20.000Z'),('mdt_sandbox','PJ001','A001','Project 1',80000.00,6,'https://image.ibb.co/iPKiSm/i_Stock_000002350652_Small_el420744427270.jpg','ongoing',1,3.111212,101.619136,'Jalan SS2/27, Petaling Jaya','2017-10-20T00:00:00Z'),('mdt_sandbox','PJ002','A002','Project 2',95000.00,10,'https://preview.ibb.co/gzBrDR/Advanced_diploma_building_construction.jpg','ongoing',1,3.119769,101.602995,'Jalan SS26/12, Petaling Jaya','2017-11-05T00:00:00Z'),('mdt_sandbox','PJ003','A003','Project 3',45000.00,20,'https://preview.ibb.co/bXpBDR/21682698_10210911429608149_1375330558_o.png','ongoing',0,3.1036,101.599181,'Jalan SS6/5, Petaling Jaya','2017-09-30T00:00:00Z'),('mdt_sandbox','PJ004','A001','Project 4',80000.00,4,'https://preview.ibb.co/foEytR/1.jpg','ongoing',2,3.128683,101.635084,'Jalan 17/29, Seksyen 17, Petaling Jaya','2017-08-14T00:00:00Z'),('mdt_sandbox','PJ0088','A001','Project 88ha',2.00,3,'','ongoing',0,3.8126318,103.3256204,'é©¬æ¥è¥¿äºšå½­äº¨','2018-03-07T03:51:14.000Z'),('mdt_hongkong2','PJ321','A10','Project 321',2000.00,5,'','ongoing',0,3.136021,101.6242589,'Damansara Utama, 47400 Petaling Jaya, Selangor, Malaysia','2018-05-15T03:04:21.000Z'),('mdt_hongkong2','PJ322','A10','Project 322',2000.00,4,'','ongoing',0,3.136021,101.6242589,'Damansara Utama, 47400 Petaling Jaya, Selangor, Malaysia','2018-05-08T03:04:21.000Z'),('mdt_thailand','Proj_Thai','A007','Proj_Thai',0.00,0,'http://mmdt.ddns.net:8081/wecare/img/220px-Waving_flag_of_Thailand_(1).jpg','ongoing',0,13.7563309,100.5017651,'æ³°å›½æ›¼è°·','2018-04-01T03:42:36.000Z'),('mdt_sandbox','Test','A001','å¹¿å·žç”µä¿¡å¤§åŽ¦',0.00,0,'https://preview.ibb.co/eU97n8/viktor_jakovlev_36799_unsplash.jpg','ongoing',0,3.0348833700421,101.65343038738,'Jln BK 5D/1D, 47180 Puchong, Selangor, Malaysia','2018-08-30T15:19:22.723Z'),('mdt_sandbox','TT001','A001','Pinnacle',1000.00,30,'http://mmdt.ddns.net:8081/wecare/img/PnnacleSunway.jpg','ongoing',0,3.0700361,101.6104627,'Persiaran Lagoon, Bandar Sunway, 47500 Subang Jaya, Selangor, é©¬æ¥è¥¿äºš','2018-01-17T10:06:19Z');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sos`
--

DROP TABLE IF EXISTS `sos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) NOT NULL,
  `timestamp` varchar(25) NOT NULL,
  `sos_status` varchar(25) NOT NULL,
  `trigger_id` varchar(15) NOT NULL,
  `amt` int(11) NOT NULL DEFAULT 1,
  `solve_time` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sos`
--

LOCK TABLES `sos` WRITE;
/*!40000 ALTER TABLE `sos` DISABLE KEYS */;
INSERT INTO `sos` VALUES (1,'SOS','2017-11-13T10:33:45.000Z','resolved','8308392959',1,NULL),(2,'SOS Button','2018-03-02T15:49:08.000Z','resolved','3923732218',1,NULL),(3,'SOS Button','2018-03-02T11:17:14.000Z','resolved','6209699633',1,NULL),(4,'SOS Button','2018-03-05T07:13:49.000Z','resolved','6209699633',1,NULL),(5,'SOS Button','2018-03-05T07:14:22.000Z','resolved','6209699633',1,NULL),(6,'SOS Button','2018-03-05T07:16:05.000Z','resolved','6209699633',1,NULL),(7,'SOS Button','2018-03-02T11:17:16.000Z','resolved','6209699630',1,NULL),(8,'SOS Button','2018-03-05T07:51:49.000Z','resolved','6209699630',1,NULL),(9,'SOS Button','2018-03-05T08:38:25.000Z','resolved','6209699631',1,NULL),(10,'SOS Button','2018-03-05T08:42:46.000Z','resolved','6209699632',1,NULL),(11,'SOS Button','2018-03-05T08:43:19.000Z','resolved','6209699630',1,NULL),(12,'SOS Button','2018-03-05T08:44:01.000Z','resolved','6209699630',1,NULL),(13,'SOS Button','2018-03-05T08:53:47.000Z','resolved','6209699630',1,NULL),(14,'SOS Button','2018-03-05T09:02:30.000Z','resolved','6209699630',1,NULL),(15,'SOS Button','2018-03-05T09:25:34.000Z','resolved','6209699633',1,NULL),(16,'SOS Button','2018-03-05T10:53:51.000Z','resolved','6209699633',1,NULL),(17,'SOS Button','2018-03-06T02:54:28.000Z','resolved','6209699633',1,NULL),(18,'SOS Button','2018-03-06T04:29:06.000Z','resolved','6209699633',1,NULL),(19,'SOS Button','2018-03-06T08:53:31.000Z','resolved','6209699631',1,NULL),(20,'SOS Button','2018-03-06T08:52:57.000Z','resolved','6209699633',1,NULL),(21,'SOS Button','2018-03-06T08:57:20.000Z','resolved','6209699633',1,NULL),(22,'SOS Button','2018-03-06T09:46:08.000Z','resolved','6209699631',1,NULL),(23,'SOS Button','2018-03-08T10:01:24.000Z','resolved','6209699631',1,NULL),(24,'SOS Button','2018-03-08T10:41:59.000Z','resolved','6209699633',1,NULL),(25,'SOS Button','2018-03-09T03:02:31.000Z','resolved','6209699631',1,NULL),(26,'SOS Button','2018-03-09T06:18:33.000Z','resolved','6209699631',1,NULL),(27,'SOS Button','2018-03-09T06:18:33.000Z','resolved','6209699631',1,NULL),(28,'SOS Button','2018-03-09T06:24:51.000Z','resolved','6209699631',1,NULL),(29,'SOS Button','2018-03-10T00:34:36.000Z','resolved','6209699634',1,NULL),(30,'SOS Button','2018-03-12T01:28:31.000Z','resolved','6209699633',1,NULL),(31,'SOS Button','2018-03-12T01:29:30.000Z','resolved','6209699631',1,NULL),(32,'SOS Button','2018-03-12T01:29:30.000Z','resolved','6209699631',1,NULL),(33,'SOS Button','2018-03-14T07:51:38.000Z','resolved','6209699633',1,NULL),(34,'SOS Button','2018-03-15T02:58:53.000Z','resolved','6209699631',1,NULL),(35,'SOS Button','2018-03-15T04:07:02.000Z','resolved','6209699631',1,NULL),(36,'SOS Button','2018-03-26T03:18:21.000Z','resolved','6209699633',1,NULL),(37,'SOS Button','2018-04-02T07:35:09.000Z','resolved','3919044067',1,NULL),(38,'SOS Button','2018-02-01T08:27:29.000Z','resolved','3919044067',1,NULL),(39,'SOS Button','2018-04-02T07:35:55.000Z','resolved','3919044067',1,NULL),(40,'SOS Button','2018-04-02T07:36:22.000Z','resolved','3919044067',1,NULL),(41,'SOS Button','2018-04-02T09:43:19.000Z','resolved','6209699633',1,NULL),(42,'SOS Button','2018-04-03T10:02:24.000Z','resolved','6209699633',1,NULL),(43,'SOS Button','2018-04-10T01:42:06.000Z','resolved','6209699633',1,NULL),(44,'SOS Button','2018-05-07T03:43:18.000Z','resolved','6209699633',1,NULL),(45,'SOS Button','2018-05-14T03:51:35.000Z','resolved','6209699633',1,NULL),(46,'SOS Button','2018-05-14T04:02:49.000Z','resolved','3923732224',1,NULL),(47,'SOS Button','2018-05-14T04:03:38.000Z','resolved','3923732224',1,NULL),(48,'SOS Button','2018-05-14T04:05:41.000Z','resolved','3923732224',1,NULL),(49,'SOS Button','2018-05-14T04:10:51.000Z','resolved','3923732224',1,NULL),(50,'SOS Button','2018-05-14T04:27:19.000Z','resolved','3923732224',1,NULL),(51,'SOS Button','2018-05-14T06:47:44.000Z','resolved','6209699635',1,NULL),(52,'SOS Button','2018-05-14T06:24:48.000Z','resolved','3923732224',1,NULL),(53,'SOS Button','2018-05-15T03:12:10.000Z','resolved','6209699635',1,NULL),(54,'SOS Button','2018-05-15T03:12:14.000Z','resolved','3923732224',1,NULL),(55,'SOS Button','2018-05-15T03:40:42.000Z','resolved','6209699633',1,NULL),(56,'SOS Button','2018-05-15T03:40:42.000Z','unsolved','6209699633',1,NULL),(57,'SOS Button','2018-05-15T06:44:40.000Z','resolved','6209699631',1,NULL),(58,'SOS Button','2018-05-15T06:47:26.000Z','unsolved','6209699631',1,NULL),(59,'SOS Button','2018-03-06T19:46:04.000Z','resolved','6209699630',1,NULL),(60,'SOS Button','2018-05-15T07:13:30.000Z','resolved','6209699630',1,NULL),(61,'SOS Button','2018-05-15T07:42:10.000Z','resolved','6209699630',1,NULL),(62,'SOS Button','2018-05-15T07:42:10.000Z','resolved','6209699630',1,NULL),(63,'SOS Button','2018-05-16T06:33:16.000Z','resolved','6209699630',1,NULL),(64,'SOS Button','2018-05-17T09:52:08.000Z','resolved','3923732224',1,NULL),(65,'SOS Button','2018-05-17T10:07:43.000Z','resolved','6209699630',1,NULL),(66,'SOS Button','2018-05-18T10:03:47.000Z','resolved','6209699630',1,NULL),(67,'SOS Button','2018-05-18T10:15:36.000Z','resolved','3923732224',1,NULL),(68,'SOS Button','2018-05-18T10:21:10.000Z','resolved','6209699630',1,NULL),(69,'SOS Button','2018-05-21T12:08:57.000Z','resolved','6209699630',1,NULL),(70,'SOS Button','2018-05-21T12:09:54.000Z','resolved','6209699630',1,NULL),(71,'SOS Button','2018-05-21T12:10:06.000Z','resolved','6209699630',1,NULL),(72,'SOS Button','2018-05-21T12:10:06.000Z','resolved','6209699630',1,NULL),(73,'SOS Button','2018-05-21T12:27:27.000Z','resolved','6209699630',1,NULL),(74,'SOS Button','2018-05-21T12:27:27.000Z','resolved','6209699630',1,NULL),(75,'SOS Button','2018-05-24T06:29:37.000Z','resolved','3923732219',1,NULL),(76,'SOS Button','2018-05-24T06:31:17.000Z','resolved','3923732219',1,NULL),(77,'SOS Button','2018-05-24T06:33:36.000Z','resolved','3923732219',1,NULL),(78,'SOS Button','2018-05-24T06:36:06.000Z','resolved','3923732219',1,NULL),(79,'SOS Button','2018-05-24T06:38:41.000Z','resolved','3923732219',1,NULL),(80,'SOS Button','2018-05-24T06:38:41.000Z','resolved','3923732219',1,NULL),(81,'SOS Button','2018-05-24T06:39:44.000Z','resolved','3923732219',1,NULL),(82,'SOS Button','2018-05-24T06:39:44.000Z','resolved','3923732219',1,NULL),(83,'SOS Button','2018-05-24T07:02:55.000Z','resolved','3923732224',1,NULL),(84,'SOS Button','2018-05-24T07:18:18.000Z','resolved','3923732224',1,NULL),(85,'SOS Button','2018-05-24T08:35:34.000Z','resolved','3923732224',1,NULL),(86,'SOS Button','2018-05-24T08:36:10.000Z','resolved','3923732224',1,NULL),(87,'SOS Button','2018-05-24T08:36:10.000Z','resolved','3923732224',1,NULL),(88,'SOS Button','2018-05-25T01:59:35.000Z','resolved','3923732219',1,NULL),(89,'SOS Button','2018-05-25T01:59:35.000Z','resolved','3923732219',1,NULL),(90,'SOS Button','2018-05-25T10:53:21.000Z','resolved','3923732219',1,NULL),(91,'SOS Button','2018-05-27T03:17:14.000Z','resolved','3923732224',1,NULL),(92,'SOS Button','2018-05-30T02:11:48.000Z','resolved','3923732219',1,NULL),(93,'SOS Button','2018-05-30T03:13:14.000Z','resolved','3923732219',1,NULL),(94,'SOS Button','2018-05-30T03:13:14.000Z','resolved','3923732219',1,NULL),(95,'SOS Button','2018-05-31T07:57:05.000Z','resolved','3923732219',1,NULL),(96,'SOS Button','2018-05-31T07:57:05.000Z','resolved','3923732219',1,NULL),(97,'SOS Button','2018-06-01T08:43:44.000Z','resolved','3923732224',1,NULL),(98,'SOS Button','2018-06-01T08:43:44.000Z','resolved','3923732224',1,NULL),(99,'SOS Button','2018-06-02T00:18:21.000Z','resolved','3923732224',1,NULL),(100,'SOS Button','2018-06-02T00:18:21.000Z','resolved','3923732224',1,NULL),(101,'SOS Button','2018-06-02T02:45:11.000Z','resolved','3923732224',1,NULL),(102,'SOS Button','2018-06-02T02:45:11.000Z','resolved','3923732224',1,NULL),(111,'SOS Button','2018-01-19T07:24:14.000Z','unsolved','12345678',1,NULL),(112,'SOS Button','2018-01-19T07:24:14.000Z','unsolved','12345678',2,NULL),(113,'SOS Button','2018-07-17T04:21:55.000Z','resolved','3923732219',1,NULL),(114,'SOS Button','2018-07-17T04:21:55.000Z','resolved','3923732219',2,NULL),(115,'SOS Button','2018-07-18T01:28:54.000Z','resolved','3923732219',1,NULL),(116,'SOS Button','2018-07-18T01:28:54.000Z','resolved','3923732219',2,NULL),(117,'SOS Button','2018-07-18T01:43:43.000Z','resolved','3923732219',1,NULL),(118,'SOS Button','2018-07-18T01:43:43.000Z','resolved','3923732219',2,NULL),(119,'SOS Button','2018-07-18T02:28:35.000Z','resolved','3923732219',3,NULL),(120,'SOS Button','2018-07-19T08:37:22.000Z','resolved','3923732224',1,NULL),(121,'SOS Button','2018-07-19T08:37:22.000Z','resolved','3923732224',2,NULL),(122,'SOS Button','2018-07-20T01:13:33.000Z','resolved','3923732219',1,NULL),(123,'SOS Button','2018-07-20T01:13:43.000Z','resolved','3923732219',2,NULL),(124,'SOS Button','2018-07-20T07:19:00.000Z','resolved','3923732219',1,NULL),(125,'SOS Button','2018-07-20T07:19:23.000Z','resolved','3923732219',2,NULL),(126,'SOS Button','2018-07-20T07:19:23.000Z','resolved','3923732219',1,NULL),(127,'SOS Button','2018-07-21T16:28:53.000Z','resolved','3923732219',2,NULL),(128,'SOS Button','2003-12-31T16:06:06.000Z','resolved','3923732219',3,NULL),(129,'SOS Button','2018-08-09T02:59:05.000Z','resolved','3923732224',1,NULL),(130,'SOS Button','2018-08-09T19:22:16.000Z','resolved','3923732224',2,NULL),(131,'SOS Button','2018-08-14T02:19:29.000Z','resolved','3923732219',4,NULL),(132,'SOS Button','2018-08-15T17:38:58.000Z','resolved','3923732218',1,NULL),(133,'SOS Button','2018-03-09T10:53:07.000Z','resolved','3923732218',2,NULL),(134,'SOS Button','2018-08-16T00:38:00.000Z','resolved','3923732218',1,NULL),(135,'SOS Button','2018-08-16T00:38:00.000Z','resolved','3923732218',2,NULL),(136,'SOS Button','2003-12-31T17:11:32.000Z','unsolved','3923732261',1,NULL),(137,'SOS Button','2003-12-31T17:17:24.000Z','unsolved','3923732261',2,NULL),(138,'SOS Button','2003-12-31T16:00:28.000Z','resolved','3923731850',1,NULL),(139,'SOS Button','2003-12-31T17:07:43.000Z','resolved','3923731850',2,NULL),(140,'SOS Button','2018-08-24T03:28:50.000Z','unsolved','3923731850',1,NULL),(141,'SOS Button','2018-08-24T03:28:50.000Z','unsolved','3923731850',2,NULL),(142,'SOS Button','2003-12-31T17:18:15.000Z','resolved','3918852734',1,''),(143,'SOS Button','2018-08-24T04:26:42.000Z','resolved','3918852734',2,'2018-09-10T06:59:27.949Z'),(144,'SOS Button','2003-12-31T19:17:31.000Z','resolved','3923732180',1,NULL),(145,'SOS Button','2018-08-24T06:25:01.000Z','unsolved','3923732180',2,NULL),(146,'SOS Button','2003-12-31T19:38:13.000Z','resolved','3923732182',1,NULL),(147,'SOS Button','2003-12-31T19:39:57.000Z','resolved','3923732182',2,NULL),(148,'SOS Button','2018-08-29T08:30:20.000Z','resolved','3923732219',1,NULL),(149,'SOS Button','2018-08-29T08:30:20.000Z','resolved','3923732219',2,NULL),(150,'SOS Button','2018-08-30T08:39:54.000Z','resolved','3923732182',1,NULL),(151,'SOS Button','2018-08-30T08:40:15.000Z','unsolved','3923732182',2,NULL),(152,'SOS Button','2018-08-30T08:43:49.000Z','unsolved','3923732182',3,NULL),(153,'SOS Button','2018-09-09T05:12:57.000Z','resolved','3923732218',1,NULL),(154,'SOS Button','2018-09-09T05:13:12.000Z','resolved','3923732218',2,NULL),(155,'SOS Button','2018-09-09T13:46:47.000Z','unsolved','3923732218',1,NULL),(156,'SOS Button','2018-09-09T13:48:01.000Z','resolved','3923732218',2,'2018-09-09T18:26:52.923Z'),(157,'SOS Button','2018-09-10T16:32:59.000Z','unsolved','3923732218',2,NULL);
/*!40000 ALTER TABLE `sos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `company_id` varchar(100) NOT NULL DEFAULT '',
  `u_id` varchar(10) NOT NULL,
  `u_name` varchar(50) NOT NULL,
  `u_dob` varchar(30) NOT NULL,
  `u_contact` varchar(50) NOT NULL,
  `u_photo` varchar(255) NOT NULL,
  `u_email` varchar(50) NOT NULL,
  `u_pw` varchar(32) NOT NULL,
  `u_position` varchar(50) NOT NULL,
  `u_blood` varchar(5) NOT NULL,
  `u_height` decimal(5,2) NOT NULL,
  `u_weight` decimal(5,2) NOT NULL,
  `u_emName` int(100) NOT NULL,
  `u_emContact` int(50) NOT NULL,
  `access_level` int(11) NOT NULL DEFAULT 3,
  `token` text DEFAULT NULL,
  PRIMARY KEY (`u_id`,`company_id`),
  UNIQUE KEY `u_email` (`u_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('mdt_sandbox','A001','Admin001','32','+60138958293','http://mmdt.ddns.net:8081/wecare/img/s-l300.jpg','admin001@gmail.com','123456','Site Supervisor','',0.00,0.00,0,0,3,'fGEfPtjdflM:APA91bHuchy5GxTb15ZreVu5YcScKYjoDHg8iCJGIjYhleNVUSTxUe3yMGFkztHd_rWEJVNE-_Zia6VCpZ1YGN95ASeZM3L-52ZbE3dKacCPA0qgQfQHTEgfbF9493SP0Oxlx-myGFmo'),('mdt_sandbox','A002','Admin003','38','+01135674578','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png','admin002@gmail.com','123456','Site Supervisor','',0.00,0.00,0,0,3,'fGEfPtjdflM:APA91bHuchy5GxTb15ZreVu5YcScKYjoDHg8iCJGIjYhleNVUSTxUe3yMGFkztHd_rWEJVNE-_Zia6VCpZ1YGN95ASeZM3L-52ZbE3dKacCPA0qgQfQHTEgfbF9493SP0Oxlx-myGFmo'),('mdt_sandbox','A003','Admin002','42','+60124456321','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png','admin003@gmail.com','123456','Site Supervisor','',0.00,0.00,0,0,3,''),('mdt_jakarta','A005','Jakarta','18','0161231234','http://mmdt.ddns.net:8081/wecare/img/user_2.png','jakarta@gmail.com','123456','Admin','',0.00,0.00,0,0,3,''),('mdt_hongkong','A006','HongKong','18','0161231214','http://mmdt.ddns.net:8081/wecare/img/Sample Face2.jpg','hongkong@gmail.com','123456','Admin','',0.00,0.00,0,0,3,''),('mdt_thailand','A007','Thailand','18','0161231214','http://mmdt.ddns.net:8081/wecare/img/Sample Face2.jpg','thailand@gmail.com','123456','Admin','',0.00,0.00,0,0,3,''),('mdt_guangzhou','A10','å°æ˜Ž','25','0121231255','http://mmdt.ddns.net:8081/wecare/img/Sample Face2.jpg','guangzhou@gmail.com','123456','ç®¡ç†å‘˜','',0.00,0.00,0,0,3,''),('mdt_sandbox','A12','Super','23','+601234567','','super@gmail.com','12345678','Administrator','',0.00,0.00,0,0,3,''),('mdt_sandbox','A14','noob','12','123456854','','gg@gmail.com','12345678','Administrator','',0.00,0.00,0,0,3,''),('mdt_sandbox','A15','123','39','01234567','','12345@qq.com','12345678','Administrator','',0.00,0.00,0,0,3,''),('mdt_sandbox','A7','gg','23','+601234382934','','newAdmin@gmail.com','12345678','Administrator','',0.00,0.00,0,0,3,'');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wifi`
--

DROP TABLE IF EXISTS `wifi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wifi` (
  `company_id` varchar(50) NOT NULL,
  `p_id` varchar(50) NOT NULL,
  `ssid` varchar(32) NOT NULL,
  `mac_id` varchar(48) NOT NULL,
  `zone_id` varchar(100) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  PRIMARY KEY (`mac_id`),
  KEY `zone_id` (`zone_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wifi`
--

LOCK TABLES `wifi` WRITE;
/*!40000 ALTER TABLE `wifi` DISABLE KEYS */;
INSERT INTO `wifi` VALUES ('mdt_hongkong','HK002','MDT_WeCare1','04:95:e6:22:14:f1','HK2',22.356465982392415,114.12494122982027),('mdt_guangzhou','GZ01','AP_B','14:4D:67:42:69:68','ç”µä¿¡åŸºåœ°_23æ¥¼_B',23.1376,113.32905),('mdt_guangzhou','GZ01','AP_A','14:4D:67:42:69:70','ç”µä¿¡åŸºåœ°_23æ¥¼_A',23.1376,113.32905),('mdt_sandbox','TT001','mdtresearch@unifibiz','6c:72:20:3d:28:54','TT001_15 Floor',3.0699683257287225,101.61024142737007),('mdt_sandbox','PJ001','WatchingEuuuu','7c:8b:ca:81:26:0b','CASA',3.12917093371074,101.62628182210031),('mdt_sandbox','TT001','COSCO-GUEST','88:5b:dd:b8:56:95','TT001_19 Floor',3.0699168890910835,101.61030113697053),('mdt_sandbox','TT001','MDTGroup','b0:c5:54:12:df:7c','TT001_19 Floor',3.0699383159696567,101.61024749279024),('mdt_sandbox','TT001','mdtinno','ec:8:6b:2b:c0:a8','TT001_19 Floor',3.069890105492266,101.61017239093782);
/*!40000 ALTER TABLE `wifi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `worker`
--

DROP TABLE IF EXISTS `worker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `worker` (
  `company_id` varchar(100) NOT NULL DEFAULT '',
  `w_id` varchar(10) NOT NULL,
  `w_name` varchar(100) NOT NULL,
  `w_photo` varchar(255) NOT NULL,
  `on_duty` tinyint(1) NOT NULL DEFAULT 0,
  `health_status` varchar(25) NOT NULL DEFAULT '',
  `w_height` decimal(5,2) NOT NULL,
  `w_weight` decimal(5,2) NOT NULL,
  `w_bloodtype` varchar(5) NOT NULL,
  `w_position` varchar(50) NOT NULL,
  `w_email` varchar(50) NOT NULL,
  `w_contact` varchar(50) NOT NULL,
  `w_age` int(11) NOT NULL,
  `dev_id` varchar(15) NOT NULL,
  `w_emName` varchar(100) NOT NULL,
  `w_emContact` varchar(50) NOT NULL,
  PRIMARY KEY (`w_id`,`company_id`),
  UNIQUE KEY `unique_index` (`dev_id`,`company_id`),
  KEY `dev_id` (`dev_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worker`
--

LOCK TABLES `worker` WRITE;
/*!40000 ALTER TABLE `worker` DISABLE KEYS */;
INSERT INTO `worker` VALUES ('mdt_sandbox','W004','Worker004','http://mmdt.ddns.net:8081/wecare/img/image.jpg',1,'OK',170.00,66.00,'B','User','worker004@gmail.com','+60188394800',30,'8308392958','PS','0111234567'),('mdt_sandbox','W006','Worker006','http://mmdt.ddns.net:8081/wecare/img/try.png',0,'OK',178.00,85.00,'AB','Worker','worker006@gmail.com','+60189898998',38,'8308392960','',''),('mdt_sandbox','W007','Worker007','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',1,'OK',174.00,83.00,'AB','Worker','worker007@gmail.com','+60122464432',39,'8308392961','',''),('mdt_guangzhou','W1','å¹¿å·ž1å·','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'Unhealthy',153.00,80.00,'A-','User','å¹¿å·ž1å·','15347444477',34,'7209699630','',''),('mdt_hongkong2','W1','HK_User01','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'OK',160.00,70.00,'A+','User','','60110817209',22,'3923732224','',''),('mdt_thailand','W1','User','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'OK',170.00,60.00,'A+','User','','01234567890',30,'3919044067','',''),('mdt_hongkong','W11','User001','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'Unhealthy',123.00,123.00,'A-','Worker','','+01234-234109',23,'6209699634','',''),('mdt_jakarta','W13','User003','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'OK',123.00,43.00,'A-','User','','+60239847032984',20,'6209699635','',''),('mdt_jakarta','W14','User004','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'Unhealthy',123.00,43.00,'B+','User','User004','+014-6654396',20,'6209699633','',''),('mdt_hongkong','W15','User005','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'OK',200.00,10.00,'B+','User','User005','+60213454',23,'6209699632','',''),('mdt_hongkong','W16','User16','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'OK',180.00,80.00,'O-','User','User16','+601140817209',31,'3923732224','',''),('mdt_sandbox','W16','Celcom','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',1,'OK',111.00,11.00,'A+','User','test@gmail.com','01140838727',27,'3923732218','Jason','123456845'),('mdt_hongkong','W17','OTW02','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'OK',180.00,70.00,'B-','User','OTW02','601140817209',25,'6209699635','',''),('mdt_sandbox','W19','sdfg','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',123.00,23.00,'A-','User','sdf@gmail.com','234523452',23,'15052018','',''),('mdt_guangzhou','W2','å¹¿å·ž2å·','http://mmdt.ddns.net:8081/wecare/img/2018-05-18_180512.jpg',0,'OK',180.00,15.00,'O+','User','å¹¿å·ž2å·','60129358072',34,'6209699630','',''),('mdt_hongkong2','W2','HK_User02','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'OK',188.00,90.00,'A-','User','','+601140800589',30,'6209699635','',''),('mdt_sandbox','W20','asdfasd','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',234.00,23.00,'A-','User','','2341234234',234,'23421323434','',''),('mdt_sandbox','W23','sadfads','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',231.00,34.00,'B+','User','','234234123423',23,'2342352345','',''),('mdt_sandbox','W24','hello','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',123.00,23.00,'B+','User','','23453534',23,'2342345234','',''),('mdt_sandbox','W25','asdfasd','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',123.00,23.00,'A-','User','','123423145',23,'34524352435','',''),('mdt_sandbox','W27','documentation','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',156.00,34.00,'B-','User','test@gmail.com','+60293482243',24,'98734502345','',''),('mdt_sandbox','W28','Mick','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',156.00,45.00,'A+','User','','+10138888888',24,'8982348970','',''),('mdt_sandbox','W29','tesat','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',123.00,34.00,'AB+','User','tesat@gmail.com','+9875902374',23,'1234123434','',''),('mdt_guangzhou','W3','GZ03','http://mmdt.ddns.net:8081/wecare/img/2018-05-18_180512.jpg',0,'OK',170.00,64.00,'AB-','User','','60129359082',20,'3923732224','',''),('mdt_hongkong2','W3','HK_User03','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'Unhealthy',158.00,50.00,'B-','User','HK_User03','+601140800590',33,'6209699633','',''),('mdt_sandbox','W30','newTest0510','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',145.00,20.00,'AB+','User','','+430895724',23,'89780198234','',''),('mdt_sandbox','W33','Test2','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',170.00,70.00,'A-','User','','01550135421',30,'3214565432','',''),('mdt_sandbox','W34','Usertest','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',185.00,65.00,'O','User','seow@gmail.com','0172883957',34,'927364739','',''),('mdt_sandbox','W35','FT Wong','http://mmdt.ddns.net:8081/wecare/img/cute-little-girl-spring-260nw-337904864 (1).jpg',0,'OK',180.00,60.00,'A-','PM','wong@mmdt.cc','01140817209',18,'3923732219','MDT Admin','0376102988'),('mdt_sandbox','W36','Dummy3','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',142.00,23.00,'B+','User','Dummy@gmail.com','+60123789238',25,'892315601','John Smith','+601612378239'),('mdt_sandbox','W37','Dummy7','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',142.00,23.00,'B+','User','Dummy@gmail.com','+60123789238',25,'892314561','John Smith5','+601612378239'),('mdt_sandbox','W38','Carmen Pan','http://mmdt.ddns.net:8081/wecare/img/12239489_10205160096178585_3376458653789194780_n.jpg',0,'OK',168.00,90.00,'A-','User','carmen@mmdt.cc','01140800589',48,'3923732224','MDT Pan','+60 17-285 1898'),('mdt_sandbox','W39','Stephanie','http://mmdt.ddns.net:8081/wecare/img/2018-08-24_110010.jpg',0,'',140.00,60.00,'AB-','User','fah@mmdt.cc','+0182210503',30,'6209699634','Office','0376102988'),('mdt_guangzhou','W4','æ¼”ç¤º1','http://mmdt.ddns.net:8081/wecare/img/admin.jpg',0,'Unhealthy',190.00,80.00,'AB-','User','23f@qq.cn','+8613060604707',30,'3923732182','å°å´','+8613360605070'),('mdt_hongkong2','W4','HK_User04','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'OK',177.00,80.00,'O-','User','','601240817209',27,'6209699631','',''),('mdt_sandbox','W40','PS Tan','http://mmdt.ddns.net:8081/wecare/img/2018-08-24_112337.jpg',0,'Unhealthy',170.00,70.00,'O-','User','tan@mmdt.cc','+60 17-309 8517',24,'3923731850','MDT ','+60376102988'),('mdt_sandbox','W41','Shan','http://mmdt.ddns.net:8081/wecare/img/2018-08-24_122010.jpg',0,'OK',180.00,80.00,'B+','User','shan@mmdt.cc','+60 19-301 9463',25,'3918852734','MDT','0376102988'),('mdt_sandbox','W42','Ultra Test with jwt','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',123.00,21.00,'A-','User','jwtTest@gmail.com','+0712893234',23,'812738903','test mother','+701298123'),('mdt_sandbox','W46','TestQ','https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png',0,'',177.00,75.00,'O','User','test@gmail.com','0172839575',35,'7294740839','Jason','01837t9e9e'),('mdt_sandbox','W47','test new','http://mmdt.ddns.net:8081/wecare/img/test new.jpeg',0,'',165.00,58.00,'AB','User','test@gmail.com','018262829',67,'9172920189','John','0181829292'),('mdt_guangzhou','W5','æ¼”ç¤º2','http://mmdt.ddns.net:8081/wecare/img/admin.jpg',0,'',160.00,80.00,'O+','User','23f@qq.cn','+8613058012808',33,'3923732180','å°åŽ','+60129359022');
/*!40000 ALTER TABLE `worker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workerassign`
--

DROP TABLE IF EXISTS `workerassign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `workerassign` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `w_id` varchar(10) CHARACTER SET utf8mb4 NOT NULL,
  `p_id` varchar(10) CHARACTER SET utf8mb4 NOT NULL,
  `company_id` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=290 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workerassign`
--

LOCK TABLES `workerassign` WRITE;
/*!40000 ALTER TABLE `workerassign` DISABLE KEYS */;
INSERT INTO `workerassign` VALUES (1,'W1','GZ01','mdt_guangzhou'),(2,'W2','GZ01','mdt_guangzhou'),(4,'W11','HK001','mdt_hongkong'),(5,'W15','HK001','mdt_hongkong'),(6,'W16','OWT01','mdt_hongkong'),(7,'W17','OWT01','mdt_hongkong'),(8,'W1','OTW','mdt_hongkong2'),(9,'W2','OTW','mdt_hongkong2'),(10,'W3','OTW','mdt_hongkong2'),(11,'W4','OTW','mdt_hongkong2'),(12,'W13','JK001','mdt_jakarta'),(13,'W14','JK001','mdt_jakarta'),(14,'W19','PJ002','mdt_sandbox'),(15,'W23','PJ002','mdt_sandbox'),(16,'W26','UG234','mdt_sandbox'),(17,'W33','PJ003','mdt_sandbox'),(18,'W34','TT001','mdt_sandbox'),(19,'W35','TT001','mdt_sandbox'),(22,'W006','PJ003','mdt_sandbox'),(23,'W1','Proj_Thai','mdt_thailand'),(24,'W33','PJ002','mdt_sandbox'),(25,'W34','PJ001','mdt_sandbox'),(29,'W38','TT001','mdt_sandbox'),(30,'w39','TT001','mdt_sandbox'),(32,'W40','TT001','mdt_sandbox'),(34,'W41','TT001','mdt_sandbox'),(35,'W4','GZ01','mdt_guangzhou'),(36,'W5','GZ01','mdt_guangzhou'),(38,'W19','PJ0088','mdt_sandbox'),(39,'W41','PJ0088','mdt_sandbox'),(40,'W16','PJ001','mdt_sandbox'),(44,'W42','TT001','mdt_sandbox'),(45,'W40','PJ002','mdt_sandbox'),(51,'W43','TT001','mdt_sandbox'),(246,'W46','PJ001','mdt_sandbox'),(248,'W24','PJ001','mdt_sandbox'),(256,'W16','TT001','mdt_sandbox'),(289,'W47','PJ001','mdt_sandbox');
/*!40000 ALTER TABLE `workerassign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zone`
--

DROP TABLE IF EXISTS `zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zone` (
  `company_id` varchar(100) NOT NULL,
  `zone_id` varchar(100) NOT NULL,
  `p_id` varchar(25) NOT NULL,
  `latlng` text NOT NULL,
  `level` varchar(25) NOT NULL,
  PRIMARY KEY (`company_id`,`zone_id`,`p_id`),
  KEY `p_id` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zone`
--

LOCK TABLES `zone` WRITE;
/*!40000 ALTER TABLE `zone` DISABLE KEYS */;
INSERT INTO `zone` VALUES ('mdt_guangzhou','ç”µä¿¡åŸºåœ°_23æ¥¼_A','GZ01','[{\"lat\": 23.139928018316986, \"lng\": 113.32324307877572},{\"lat\": 23.139956324332335, \"lng\": 113.32322658738123},{\"lat\": 23.140122056028698, \n\"lng\": 113.32332425750793},{\"lat\": 23.14011933911729, \"lng\": 113.3235248993151},{\"lat\": 23.14010367352067, \"lng\": 113.32359964493664},{\"lat\": 23.13991786360478, \"lng\": 113.32346503157171}]','23'),('mdt_guangzhou','ç”µä¿¡åŸºåœ°_23æ¥¼_B','GZ01','[{\"lat\": 23.140356712183145, \"lng\": 113.32327763317154},{\"lat\": 23.140198938817917, \"lng\": 113.32328257849441},{\"lat\": 23.140242968164827, \"lng\": 113.32356423139574},{\"lat\": 23.140396463796804, \"lng\": 113.32345164148138}]','23'),('mdt_hongkong','BMC001 - Elderly Home_BMC_Wifi1','BMC001','[{\"lat\":3.0574195890409266,\"lng\":101.79276645183565},{\"lat\":3.056974976023489,\"lng\":101.79279327392578},{\"lat\":3.0570660413553172,\"lng\":101.79368376731874},{\"lat\":3.0574838704257936,\"lng\":101.79366767406464}]','G'),('mdt_hongkong','HK2','HK002','[{\"lat\":22.356743809494784,\"lng\":114.12484467029573},{\"lat\":22.356505672012393,\"lng\":114.12457108497621},{\"lat\":22.35606908557075,\"lng\":114.12505388259888},{\"lat\":22.356307223799437,\"lng\":114.12535965442659}]','6'),('mdt_hongkong','MDT02 - MDTOffice_MDT02','MDT02','[{\"lat\":3.0702082945701585,\"lng\":101.60993099212646},{\"lat\":3.069754044832584,\"lng\":101.60998249057232},{\"lat\":3.0697754717144266,\"lng\":101.61049747470315},{\"lat\":3.0702211506611534,\"lng\":101.61045455935891}]','15'),('mdt_hongkong2','School','OTW','[{\"lat\":22.33716657333741,\"lng\":114.20156423002481},{\"lat\":22.336744812030506,\"lng\":114.20158434659245},{\"lat\":22.336751014411906,\"lng\":114.20217443257572},{\"lat\":22.33716657333741,\"lng\":114.20218113809827}]','1'),('mdt_jakarta','JK001 - Jakarta_Test','JK001','[{\"lat\":-6.174921207271867,\"lng\":106.86490952968597},{\"lat\":-6.175254538068961,\"lng\":106.86476871371269},{\"lat\":-6.175327870816158,\"lng\":106.8656136095524},{\"lat\":-6.17478787489428,\"lng\":106.8656672537327}]','15'),('mdt_sandbox','A','PJ001','[{\"lat\":3.111704256959702,\"lng\":101.61953184731831},{\"lat\":3.1114202225200294,\"lng\":101.61959275625124},{\"lat\":3.111515160970158,\"lng\":101.6198994775914}]','G'),('mdt_sandbox','B','PJ001','[{\"lat\":3.1121270025884864,\"lng\":101.6188593953848},{\"lat\":3.111141404913979,\"lng\":101.61853753030302},{\"lat\":3.1107985881155114,\"lng\":101.61935292184353},{\"lat\":3.1122769847625027,\"lng\":101.61946021020414}]','F'),('mdt_sandbox','CASA','PJ001','[{\"lat\":3.129914178530971,\"lng\":101.62497319746764},{\"lat\":3.1295953043468936,\"lng\":101.62697596941146},{\"lat\":3.1287160145587047,\"lng\":101.62685103714469},{\"lat\":3.1290172295615872,\"lng\":101.62512314971538}]','11'),('mdt_sandbox','Pinnacle 14floor','TT001','[{\"lat\":3.070074619364896,\"lng\":101.61106032785028},{\"lat\":3.0697773214242567,\"lng\":101.61108446773143},{\"lat\":3.0697773214242567,\"lng\":101.61163163837047},{\"lat\":3.070082654443214,\"lng\":101.61163968499751}]','14'),('mdt_sandbox','PJ002 - Project 2_w`','PJ002','[{\"lat\":3.120081384837014,\"lng\":101.60278382711115},{\"lat\":3.1201081671672353,\"lng\":101.60293939523402},{\"lat\":3.1197225015462395,\"lng\":101.60319152288142},{\"lat\":3.1196153721819706,\"lng\":101.60288575105369},{\"lat\":3.120129593030919,\"lng\":101.60274091176689}]','w'),('mdt_sandbox','PJ002_B','PJ002','[{\"lat\": 3.1193796875421307, \"lng\": 101.60269087180497}, {\"lat\": 3.118822614547038, \"lng\": 101.60254603251818}, {\"lat\": 3.1182762542075113, \"lng\": 101.6024816595018}, {\"lat\": 3.1178316666629455, \"lng\": 101.60246556624772}, {\"lat\": 3.117799527797028, \"lng\": 101.60308247432113}, {\"lat\": 3.118431591979978, \"lng\": 101.60313075408342}, {\"lat\": 3.118769049820427, \"lng\": 101.60313611850142}, {\"lat\": 3.1191332899076265, \"lng\": 101.60317903384566}, {\"lat\": 3.119411826359767, \"lng\": 101.60317903384566}]','3'),('mdt_sandbox','TT001_15 Floor','TT001','[{\"lat\": 3.0702007951972963, \"lng\": 101.60994708538055}, {\"lat\": 3.0697776143698947, \"lng\": 101.60995781421664}, {\"lat\": 3.069772257649485, \"lng\": 101.6104620695114}, {\"lat\": 3.0702007951972963, \"lng\": 101.61047816276552}]','15'),('mdt_sandbox','TT001_19 Floor','TT001','[{\"lat\": 3.0701900817607006, \"lng\": 101.60996502265334}, {\"lat\": 3.069804397971536, \"lng\": 101.60994892939928}, {\"lat\": 3.0697883278106377, \"lng\": 101.61042636260392}, {\"lat\": 3.070184725042364, \"lng\": 101.61050146445636}]','19');
/*!40000 ALTER TABLE `zone` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-13  8:07:41