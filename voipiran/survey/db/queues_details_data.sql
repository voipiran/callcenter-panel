-- MySQL dump 10.14  Distrib 5.5.68-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: asterisk
-- ------------------------------------------------------
-- Server version	5.5.68-MariaDB
--
-- Table structure for table `queues_details`
--

-- Setting time_zone to a valid value instead of NULL
SET time_zone = 'SYSTEM';

--
-- Dumping data for table `queues_config`
--
--
-- Dumping data for table `queues_details`
--


/*!40000 ALTER TABLE `queues_details` DISABLE KEYS */;
INSERT INTO `queues_details` VALUES ('8056','answered_elsewhere','0',0),('8056','penaltymemberslimit','0',0),('8056','timeoutpriority','app',0),('8056','autopauseunavail','no',0),('8056','autopausebusy','no',0),('8056','cron_schedule','never',0),('8056','skip_joinannounce','',0),('8056','timeoutrestart','no',0),('8056','memberdelay','0',0),('8056','servicelevel','60',0),('8056','autopausedelay','0',0),('8056','autopause','no',0),('8056','reportholdtime','no',0),('8056','ringinuse','yes',0),('8056','weight','0',0),('8056','autofill','no',0),('8056','eventmemberstatus','no',0),('8056','eventwhencalled','no',0),('8056','monitor-join','yes',0),('8056','monitor-format','',0),('8056','periodic-announce-frequency','0',0),('8056','queue-thankyou','',0),('8056','queue-callswaiting','silence/1',0),('8055','answered_elsewhere','0',0),('8056','maxlen','0',0),('8056','joinempty','yes',0),('8056','leavewhenempty','no',0),('8056','strategy','ringall',0),('8056','timeout','15',0),('8056','retry','5',0),('8056','wrapuptime','0',0),('8056','announce-frequency','0',0),('8056','announce-holdtime','no',0),('8056','announce-position','no',0),('8056','queue-youarenext','silence/1',0),('8056','queue-thereare','silence/1',0),('8055','penaltymemberslimit','0',0),('8055','timeoutpriority','app',0),('8055','autopauseunavail','no',0),('8055','autopausebusy','no',0),('8055','timeoutrestart','no',0),('8055','skip_joinannounce','',0),('8055','cron_schedule','never',0),('8055','memberdelay','0',0),('8055','servicelevel','60',0),('8055','autopausedelay','0',0),('8055','autopause','no',0),('8055','reportholdtime','no',0),('8055','ringinuse','yes',0),('8055','autofill','no',0),('8055','weight','0',0),('8055','eventmemberstatus','no',0),('8055','eventwhencalled','no',0),('8055','monitor-join','yes',0),('8055','monitor-format','',0),('8055','periodic-announce-frequency','0',0),('8055','queue-thankyou','',0),('8055','queue-callswaiting','silence/1',0),('8055','queue-thereare','silence/1',0),('8055','queue-youarenext','silence/1',0),('8055','announce-position','no',0),('8055','announce-holdtime','no',0),('8055','announce-frequency','0',0),('8055','wrapuptime','0',0),('8055','retry','5',0),('8055','timeout','15',0),('8055','strategy','ringall',0),('8055','leavewhenempty','no',0),('8055','joinempty','yes',0),('8055','maxlen','0',0);
/*!40000 ALTER TABLE `queues_details` ENABLE KEYS */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-15 13:26:33
