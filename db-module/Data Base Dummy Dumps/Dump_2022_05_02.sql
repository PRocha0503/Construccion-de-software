CREATE DATABASE  IF NOT EXISTS `PAS_drummancer` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `PAS_drummancer`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: PAS_drummancer
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `game_id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `level_id` smallint unsigned NOT NULL,
  `score` int NOT NULL,
  `correct_number_of_notes` smallint NOT NULL,
  `date_played` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`game_id`),
  KEY `user_id` (`user_id`),
  KEY `level_id` (`level_id`),
  CONSTRAINT `game_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `game_ibfk_2` FOREIGN KEY (`level_id`) REFERENCES `level` (`level_number`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=200 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (1,25,16,5882,90,'2022-05-02 16:48:34'),(2,76,20,4692,176,'2022-05-02 16:48:34'),(3,61,3,7401,187,'2022-05-02 16:48:34'),(4,84,16,3300,60,'2022-05-02 16:48:34'),(5,47,8,8199,169,'2022-05-02 16:48:34'),(6,89,4,6805,90,'2022-05-02 16:48:34'),(7,75,8,5919,141,'2022-05-02 16:48:34'),(8,8,4,7687,139,'2022-05-02 16:48:34'),(9,92,15,3553,138,'2022-05-02 16:48:34'),(10,49,13,3665,73,'2022-05-02 16:48:34'),(11,17,3,3416,56,'2022-05-02 16:48:34'),(12,33,17,5782,113,'2022-05-02 16:48:34'),(13,75,3,5587,33,'2022-05-02 16:48:35'),(14,22,2,5137,67,'2022-05-02 16:48:35'),(15,51,4,7812,69,'2022-05-02 16:48:35'),(16,8,5,8065,85,'2022-05-02 16:48:35'),(17,10,16,4904,60,'2022-05-02 16:48:35'),(18,14,18,6603,120,'2022-05-02 16:48:35'),(19,76,3,6881,81,'2022-05-02 16:48:35'),(20,28,19,8098,62,'2022-05-02 16:48:35'),(21,7,8,3374,90,'2022-05-02 16:48:35'),(22,29,20,3842,134,'2022-05-02 16:48:35'),(23,99,9,8741,40,'2022-05-02 16:48:35'),(24,84,17,7629,122,'2022-05-02 16:48:35'),(25,1,6,8293,120,'2022-05-02 16:48:35'),(26,95,1,6534,59,'2022-05-02 16:48:35'),(27,71,12,9852,130,'2022-05-02 16:48:35'),(28,75,16,3978,54,'2022-05-02 16:48:35'),(29,94,7,5821,186,'2022-05-02 16:48:35'),(30,20,3,4422,155,'2022-05-02 16:48:35'),(31,55,7,5036,151,'2022-05-02 16:48:35'),(32,61,10,6585,46,'2022-05-02 16:48:35'),(33,44,16,6668,38,'2022-05-02 16:48:35'),(34,39,17,7197,175,'2022-05-02 16:48:35'),(35,45,5,9364,66,'2022-05-02 16:48:35'),(36,33,13,9113,61,'2022-05-02 16:48:35'),(37,21,11,5552,82,'2022-05-02 16:48:35'),(38,37,14,9880,31,'2022-05-02 16:48:35'),(39,51,7,8406,38,'2022-05-02 16:48:35'),(40,50,13,7016,158,'2022-05-02 16:48:35'),(41,59,6,7371,182,'2022-05-02 16:48:35'),(42,3,7,8741,103,'2022-05-02 16:48:35'),(43,83,4,8942,114,'2022-05-02 16:48:35'),(44,77,3,3743,159,'2022-05-02 16:48:35'),(45,65,2,6846,162,'2022-05-02 16:48:35'),(46,64,16,3557,49,'2022-05-02 16:48:35'),(47,74,20,8137,142,'2022-05-02 16:48:35'),(48,54,15,7891,79,'2022-05-02 16:48:35'),(49,58,3,4064,88,'2022-05-02 16:48:35'),(50,16,13,4503,140,'2022-05-02 16:48:36'),(51,41,1,3649,155,'2022-05-02 16:48:36'),(52,4,5,8800,84,'2022-05-02 16:48:36'),(53,61,3,8314,166,'2022-05-02 16:48:36'),(54,63,12,4633,51,'2022-05-02 16:48:36'),(55,60,14,5426,186,'2022-05-02 16:48:36'),(56,7,11,7893,169,'2022-05-02 16:48:36'),(57,17,16,6254,124,'2022-05-02 16:48:36'),(58,50,8,8939,176,'2022-05-02 16:48:36'),(59,44,18,8874,114,'2022-05-02 16:48:36'),(60,52,7,3625,70,'2022-05-02 16:48:36'),(61,90,12,9075,73,'2022-05-02 16:48:36'),(62,36,7,9786,98,'2022-05-02 16:48:36'),(63,11,11,5549,120,'2022-05-02 16:48:36'),(64,55,9,7531,31,'2022-05-02 16:48:36'),(65,24,7,7451,60,'2022-05-02 16:48:36'),(66,96,10,5864,81,'2022-05-02 16:48:36'),(67,69,16,6973,126,'2022-05-02 16:48:36'),(68,63,8,9008,188,'2022-05-02 16:48:36'),(69,23,15,9438,149,'2022-05-02 16:48:36'),(70,20,15,7482,199,'2022-05-02 16:48:36'),(71,2,3,9251,33,'2022-05-02 16:48:36'),(72,57,4,4586,177,'2022-05-02 16:48:36'),(73,24,12,8950,161,'2022-05-02 16:48:36'),(74,94,9,6428,102,'2022-05-02 16:48:36'),(75,91,14,3031,137,'2022-05-02 16:48:36'),(76,83,2,8682,130,'2022-05-02 16:48:36'),(77,27,13,8089,133,'2022-05-02 16:48:36'),(78,33,10,9600,185,'2022-05-02 16:48:36'),(79,78,13,7832,117,'2022-05-02 16:48:36'),(80,41,3,7468,40,'2022-05-02 16:48:36'),(81,76,16,9509,189,'2022-05-02 16:48:36'),(82,18,13,5354,103,'2022-05-02 16:48:36'),(83,80,11,4445,100,'2022-05-02 16:48:36'),(84,18,19,6905,67,'2022-05-02 16:48:36'),(85,70,8,3088,61,'2022-05-02 16:48:36'),(86,72,16,7446,94,'2022-05-02 16:48:36'),(87,7,12,5267,129,'2022-05-02 16:48:36'),(88,40,12,3687,115,'2022-05-02 16:48:36'),(89,15,15,3684,45,'2022-05-02 16:48:36'),(90,81,13,4270,93,'2022-05-02 16:48:37'),(91,47,5,5911,155,'2022-05-02 16:48:37'),(92,7,11,6889,133,'2022-05-02 16:48:37'),(93,53,11,6067,121,'2022-05-02 16:48:37'),(94,37,5,6814,195,'2022-05-02 16:48:37'),(95,73,3,3486,80,'2022-05-02 16:48:37'),(96,100,15,8129,40,'2022-05-02 16:48:37'),(97,67,10,4267,61,'2022-05-02 16:48:37'),(98,34,15,6487,118,'2022-05-02 16:48:37'),(99,11,11,4799,91,'2022-05-02 16:48:37'),(100,22,16,3098,160,'2022-05-02 16:48:37'),(101,15,4,4607,88,'2022-05-02 16:48:37'),(102,33,6,5765,176,'2022-05-02 16:48:37'),(103,84,19,4038,178,'2022-05-02 16:48:37'),(104,14,20,8825,46,'2022-05-02 16:48:37'),(105,69,8,9294,176,'2022-05-02 16:48:37'),(106,10,11,5247,116,'2022-05-02 16:48:37'),(107,80,12,7870,66,'2022-05-02 16:48:37'),(108,31,6,5610,136,'2022-05-02 16:48:37'),(109,33,2,8140,127,'2022-05-02 16:48:37'),(110,39,17,8053,101,'2022-05-02 16:48:37'),(111,64,9,6614,87,'2022-05-02 16:48:37'),(112,39,8,6883,156,'2022-05-02 16:48:37'),(113,38,2,6376,149,'2022-05-02 16:48:37'),(114,21,19,8426,148,'2022-05-02 16:48:37'),(115,2,7,3794,144,'2022-05-02 16:48:37'),(116,86,10,6508,99,'2022-05-02 16:48:37'),(117,79,18,9544,33,'2022-05-02 16:48:37'),(118,57,20,3621,133,'2022-05-02 16:48:37'),(119,6,15,8669,127,'2022-05-02 16:48:37'),(120,50,19,5193,119,'2022-05-02 16:48:37'),(121,90,12,7741,97,'2022-05-02 16:48:37'),(122,32,6,4965,67,'2022-05-02 16:48:37'),(123,31,1,8562,84,'2022-05-02 16:48:37'),(124,25,1,8924,78,'2022-05-02 16:48:37'),(125,89,12,7197,57,'2022-05-02 16:48:37'),(126,73,11,9458,200,'2022-05-02 16:48:38'),(127,49,17,9323,108,'2022-05-02 16:48:38'),(128,38,6,9320,110,'2022-05-02 16:48:38'),(129,40,13,4203,168,'2022-05-02 16:48:38'),(130,97,6,3147,198,'2022-05-02 16:48:38'),(131,50,16,6605,116,'2022-05-02 16:48:38'),(132,38,6,3539,151,'2022-05-02 16:48:38'),(133,77,9,4909,123,'2022-05-02 16:48:38'),(134,67,13,7839,60,'2022-05-02 16:48:38'),(135,86,1,9796,44,'2022-05-02 16:48:38'),(136,66,5,9804,200,'2022-05-02 16:48:38'),(137,100,10,4007,51,'2022-05-02 16:48:38'),(138,64,18,5596,59,'2022-05-02 16:48:38'),(139,6,10,3072,64,'2022-05-02 16:48:38'),(140,38,8,6310,102,'2022-05-02 16:48:38'),(141,91,9,7203,194,'2022-05-02 16:48:38'),(142,74,2,3679,146,'2022-05-02 16:48:38'),(143,100,1,3351,32,'2022-05-02 16:48:38'),(144,40,7,4536,155,'2022-05-02 16:48:38'),(145,29,18,8722,69,'2022-05-02 16:48:38'),(146,18,11,4447,78,'2022-05-02 16:48:38'),(147,63,4,3225,121,'2022-05-02 16:48:38'),(148,79,10,4702,90,'2022-05-02 16:48:38'),(149,74,12,7480,115,'2022-05-02 16:48:38'),(150,56,14,9437,93,'2022-05-02 16:48:38'),(151,35,4,4078,118,'2022-05-02 16:48:38'),(152,45,14,8355,77,'2022-05-02 16:48:38'),(153,70,12,4860,64,'2022-05-02 16:48:38'),(154,20,4,3287,118,'2022-05-02 16:48:38'),(155,95,12,9166,68,'2022-05-02 16:48:38'),(156,82,12,7960,180,'2022-05-02 16:48:38'),(157,31,14,9344,69,'2022-05-02 16:48:38'),(158,52,14,8779,142,'2022-05-02 16:48:38'),(159,48,15,4579,44,'2022-05-02 16:48:38'),(160,61,4,9250,125,'2022-05-02 16:48:38'),(161,69,12,8303,120,'2022-05-02 16:48:38'),(162,66,1,5557,77,'2022-05-02 16:48:38'),(163,85,12,6392,79,'2022-05-02 16:48:38'),(164,84,9,6344,197,'2022-05-02 16:48:38'),(165,38,5,8699,46,'2022-05-02 16:48:38'),(166,61,2,4364,108,'2022-05-02 16:48:38'),(167,53,19,8655,155,'2022-05-02 16:48:38'),(168,44,6,9928,135,'2022-05-02 16:48:38'),(169,39,14,3703,85,'2022-05-02 16:48:39'),(170,39,13,9075,164,'2022-05-02 16:48:39'),(171,53,10,4040,123,'2022-05-02 16:48:39'),(172,24,14,6602,111,'2022-05-02 16:48:39'),(173,12,16,6815,129,'2022-05-02 16:48:39'),(174,58,9,3633,80,'2022-05-02 16:48:39'),(175,24,20,4249,171,'2022-05-02 16:48:39'),(176,75,5,7548,158,'2022-05-02 16:48:39'),(177,93,17,6013,195,'2022-05-02 16:48:39'),(178,37,17,3598,35,'2022-05-02 16:48:39'),(179,74,13,6209,154,'2022-05-02 16:48:39'),(180,10,13,8444,188,'2022-05-02 16:48:39'),(181,13,6,7826,64,'2022-05-02 16:48:39'),(182,48,15,5317,129,'2022-05-02 16:48:39'),(183,98,16,8052,160,'2022-05-02 16:48:39'),(184,14,15,7259,82,'2022-05-02 16:48:39'),(185,53,5,9394,128,'2022-05-02 16:48:39'),(186,57,1,9568,138,'2022-05-02 16:48:39'),(187,5,13,7858,38,'2022-05-02 16:48:39'),(188,17,2,4794,59,'2022-05-02 16:48:39'),(189,33,11,8432,182,'2022-05-02 16:48:39'),(190,53,2,9788,41,'2022-05-02 16:48:39'),(191,34,6,9784,115,'2022-05-02 16:48:39'),(192,49,9,8818,176,'2022-05-02 16:48:39'),(193,94,14,5466,130,'2022-05-02 16:48:39'),(194,28,4,7763,172,'2022-05-02 16:48:39'),(195,80,14,9160,142,'2022-05-02 16:48:39'),(196,92,7,6467,74,'2022-05-02 16:48:39'),(197,68,18,5680,70,'2022-05-02 16:48:39'),(198,90,20,7173,154,'2022-05-02 16:48:39'),(199,91,18,3760,50,'2022-05-02 16:48:39');
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `level`
--

DROP TABLE IF EXISTS `level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `level` (
  `level_number` smallint unsigned NOT NULL AUTO_INCREMENT,
  `difficulty` smallint NOT NULL,
  `total_number_of_notes` smallint NOT NULL,
  `max_possible_score` int NOT NULL,
  PRIMARY KEY (`level_number`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `level`
--

LOCK TABLES `level` WRITE;
/*!40000 ALTER TABLE `level` DISABLE KEYS */;
INSERT INTO `level` VALUES (1,10,181,9084),(2,6,147,9342),(3,7,163,9865),(4,8,165,9337),(5,7,168,9915),(6,7,101,9101),(7,2,148,9079),(8,9,118,9680),(9,9,198,9350),(10,9,133,9506),(11,3,118,9355),(12,1,138,9581),(13,2,137,9080),(14,2,117,9305),(15,2,171,9016),(16,10,113,9555),(17,7,192,9858),(18,7,156,9570),(19,4,155,9651),(20,6,189,9006);
/*!40000 ALTER TABLE `level` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `upd_difficulty` BEFORE UPDATE ON `level` FOR EACH ROW BEGIN
           IF NEW.total_number_of_notes > 400 THEN
               SET NEW.difficulty = 3;
           ELSEIF NEW.total_number_of_notes > 200 THEN
               SET NEW.difficulty = 2;
			ELSE SET NEW.difficulty = 1;
           END IF;
       END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `upd_max_p_score` BEFORE UPDATE ON `level` FOR EACH ROW BEGIN
		SET NEW.max_possible_score = IF(NEW.total_number_of_notes > 50,
									IF(NEW.total_number_of_notes > 150,(250*50)+((NEW.total_number_of_notes-150)*3*50),50*50 +(NEW.total_number_of_notes-50)*2*50)
                                    ,NEW.total_number_of_notes * 50);
       END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary view structure for view `max_score_1`
--

DROP TABLE IF EXISTS `max_score_1`;
/*!50001 DROP VIEW IF EXISTS `max_score_1`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `max_score_1` AS SELECT 
 1 AS `username`,
 1 AS `score`,
 1 AS `level_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `max_score_2`
--

DROP TABLE IF EXISTS `max_score_2`;
/*!50001 DROP VIEW IF EXISTS `max_score_2`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `max_score_2` AS SELECT 
 1 AS `username`,
 1 AS `score`,
 1 AS `level_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `max_score_3`
--

DROP TABLE IF EXISTS `max_score_3`;
/*!50001 DROP VIEW IF EXISTS `max_score_3`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `max_score_3` AS SELECT 
 1 AS `username`,
 1 AS `score`,
 1 AS `date_played`,
 1 AS `level_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `class` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  `levels_unlocked` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `idx_class` (`class`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'miguel','jack','mkvsrqayhm',5),(2,'pablo','rob','txwlgfmmof',8),(3,'pablo','jean','wybowwkchf',1),(4,'luis','alanna','pgmzpgpqth',17),(5,'luis','opal','uzpzdkebpk',10),(6,'luis','maxine','bcqucoykbh',3),(7,'miguel','sandra','punrcaacfi',8),(8,'luis','ronald','blhjjggzjn',10),(9,'luis','ann','qaxcpmdnnm',18),(10,'miguel','marjorie','kpzecwdobh',1),(11,'luis','mayra','kwosaeudey',9),(12,'miguel','connie','wslqhacmdp',3),(13,'luis','giovanni','uxepxngyfw',15),(14,'pablo','augustine','pwqaodorku',18),(15,'pablo','katie','yizxryiyit',3),(16,'miguel','becky','zugcnudfsx',18),(17,'miguel','mildred','ztfjzzdjqr',4),(18,'luis','tony','jytuhyqeed',1),(19,'pablo','tracey','pldrvauyst',11),(20,'miguel','goldie','koynfqqhok',14),(21,'pablo','phillip','lwhvlarqir',1),(22,'luis','fransisca','xyyrgidjfe',11),(23,'pablo','carla','hsjjqztkzp',16),(24,'pablo','krista','lntxgrsfku',14),(25,'miguel','john','tjmejgpvaf',1),(26,'luis','maren','bkzctyikqm',5),(27,'pablo','roberts','kmqbrziabf',7),(28,'miguel','carol','fyvybzpvow',7),(29,'pablo','wanda','zaokfkaeig',15),(30,'pablo','timothy','rtpqpjbvtz',16),(31,'pablo','diana','vrffsglrrl',7),(32,'pablo','rosa','rtywnezmxp',1),(33,'luis','christina','gewlxnvjmc',10),(34,'luis','rodney','mihlraaorz',1),(35,'luis','vivian','szsajqyobr',16),(36,'miguel','dawn','zohcfdbrye',14),(37,'miguel','natalie','ddzqzapoba',11),(38,'pablo','nathan','drpuexfgrx',14),(39,'pablo','roberta','wvvxtlqkaj',12),(40,'pablo','lorraine','toicfarqva',14),(41,'miguel','theresa','imdcpcptgz',10),(42,'pablo','karen','lhhojjhsjs',4),(43,'luis','clint','voeovodsim',9),(44,'pablo','lamont','fjimpnnfaf',19),(45,'pablo','homer','swkfwcntmk',20),(46,'luis','ruth','ccgvbmfsef',2),(47,'luis','aida','ydmmrvyxme',19),(48,'luis','dianne','mtihnkyrme',14),(49,'miguel','katia','aqszyepwph',1),(50,'miguel','alfreda','fcymnbqprs',14),(51,'miguel','erika','hhrvhugekj',17),(52,'miguel','delia','uakjmvejtb',9),(53,'miguel','johnson','xthlwojnro',1),(54,'miguel','kim','mmvsgcnaoa',14),(55,'luis','randy','zkhetpgjqn',5),(56,'pablo','ruby','rzlwemgezv',8),(57,'luis','sandrana','ijxuquwbro',13),(58,'miguel','charles','vxveqqvlqx',9),(59,'luis','margaret','tdsyriurzd',14),(60,'luis','jerry','whmojbwcuy',5),(61,'pablo','beatrice','ddxmiwmsst',2),(62,'luis','doris','vobkivzucs',18),(63,'miguel','andrew','xuwmhjnvrs',11),(64,'luis','cassie','lkpjdlmbjn',11),(65,'luis','robertu','unqfedjozi',5),(66,'pablo','roberto','qfubibkkmq',1),(67,'miguel','jose','heefdysmfw',3),(68,'luis','sara','xxbjwakniw',20),(69,'pablo','theodore','ntunwrajmx',4),(70,'luis','curtis','equemrkzgx',15),(71,'luis','anthony','omegzimiwj',18),(72,'luis','james','qbpmuikakp',9),(73,'luis','matthew','xklrowrbee',7),(74,'pablo','zarah','ifnmpkncyf',1),(75,'miguel','minnie','nhmzlbvbup',15),(76,'pablo','theresana','cnlerglovz',2),(77,'pablo','johnnie','qkffswizzu',16),(78,'pablo','yoshiko','ojewwyokxu',10),(79,'miguel','larry','pyyceqviuc',9),(80,'luis','sarah','pknchgnkbi',11),(81,'miguel','lorraina','smojahokdl',19),(82,'miguel','helen','rombeuzzbo',7),(83,'luis','willian','mxqffwygza',7),(84,'luis','ryan','erzhotddbv',13),(85,'pablo','mary','bzejpmyhnw',3),(86,'miguel','brittney','vswkwjnrxo',1),(87,'miguel','cody','kojddmctnu',9),(88,'luis','selma','fnzqfhgqjy',6),(89,'pablo','william','gkvgqxwqcr',1),(90,'luis','theresy','dfubydbvgm',12),(91,'pablo','truth','rguhzeseju',15),(92,'pablo','tara','cocrvnhvar',9),(93,'pablo','oscar','wfexvpjiyt',13),(94,'miguel','stephen','ippqufstfm',6),(95,'miguel','jackie','snqypwtzsk',20),(96,'miguel','angel','wjhafxzyqg',20),(97,'luis','johnatan','ohbqneqltn',7),(98,'luis','johnny','pjxeetrnpq',19),(99,'miguel','jermaine','azvecvuywp',15),(100,'pablo','richard','vrvtgbrbxg',6);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'PAS_drummancer'
--

--
-- Dumping routines for database 'PAS_drummancer'
--
/*!50003 DROP PROCEDURE IF EXISTS `class_count` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `class_count`(IN teacher CHAR(25), OUT count INT)
BEGIN
         SELECT COUNT(*) INTO count FROM `user`
         WHERE class = teacher;
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `great_games` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `great_games`(IN level_number INT, OUT count INT)
BEGIN
         SELECT COUNT(*) INTO count FROM `game`
         INNER JOIN `level` ON game.level_id=level_number
         WHERE game.score > `level`.max_possible_score * 0.8;
       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `max_score_1`
--

/*!50001 DROP VIEW IF EXISTS `max_score_1`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `max_score_1` AS select `user`.`username` AS `username`,`game`.`score` AS `score`,`game`.`level_id` AS `level_id` from (`game` join `user` on((`game`.`user_id` = `user`.`id`))) where (`game`.`level_id` = 2) order by `game`.`score` desc limit 10 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `max_score_2`
--

/*!50001 DROP VIEW IF EXISTS `max_score_2`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `max_score_2` AS select `user`.`username` AS `username`,`game`.`score` AS `score`,`game`.`level_id` AS `level_id` from (`game` join `user` on((`game`.`user_id` = `user`.`id`))) where (`game`.`level_id` = 2) order by `game`.`score` desc limit 10 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `max_score_3`
--

/*!50001 DROP VIEW IF EXISTS `max_score_3`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `max_score_3` AS select `user`.`username` AS `username`,`game`.`score` AS `score`,`game`.`date_played` AS `date_played`,`game`.`level_id` AS `level_id` from (`game` join `user` on((`game`.`user_id` = `user`.`id`))) where (`game`.`level_id` = 3) order by `game`.`score` desc limit 10 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-02 11:51:16
