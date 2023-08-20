-- Adminer 4.8.1 MySQL 5.5.68-MariaDB dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE DATABASE `voipiran_stats` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `voipiran_stats`;

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2022_10_11_153752_Settings',	1)
ON DUPLICATE KEY UPDATE `migration` = VALUES(`migration`), `batch` = VALUES(`batch`);

CREATE TABLE `qevent` (
  `event_id` int(2) NOT NULL DEFAULT '0',
  `event` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `qevent` (`event_id`, `event`) VALUES
(1,	'ABANDON'),
(2,	'AGENTDUMP'),
(3,	'AGENTLOGIN'),
(4,	'AGENTCALLBACKLOGIN'),
(5,	'AGENTLOGOFF'),
(6,	'AGENTCALLBACKLOGOFF'),
(7,	'COMPLETEAGENT'),
(8,	'COMPLETECALLER'),
(9,	'CONFIGRELOAD'),
(10,	'CONNECT'),
(11,	'ENTERQUEUE'),
(12,	'EXITWITHKEY'),
(13,	'EXITWITHTIMEOUT'),
(14,	'QUEUESTART'),
(15,	'SYSCOMPAT'),
(16,	'TRANSFER'),
(17,	'PAUSE'),
(18,	'UNPAUSE'),
(19,	'PAUSEALL'),
(20,	'UNPAUSEALL'),
(21,	'RINGNOANSWER'),
(22,	'RINGCANCELED')
ON DUPLICATE KEY UPDATE `event_id` = VALUES(`event_id`), `event` = VALUES(`event`);

CREATE TABLE `queue_stats` (
  `time` varchar(32) DEFAULT NULL,
  `callid` char(64) DEFAULT NULL,
  `queuename` char(64) DEFAULT NULL,
  `agent` char(64) DEFAULT NULL,
  `event` char(32) DEFAULT NULL,
  `data` char(64) DEFAULT NULL,
  `data1` char(64) DEFAULT NULL,
  `data2` char(64) DEFAULT NULL,
  `data3` char(64) DEFAULT NULL,
  `data4` char(64) DEFAULT NULL,
  `data5` char(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `settings` (
  `lang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dir` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `settings` (`lang`, `dir`) VALUES
('en',	'ltr')
ON DUPLICATE KEY UPDATE `lang` = VALUES(`lang`), `dir` = VALUES(`dir`);

-- 2022-10-28 05:35:02
