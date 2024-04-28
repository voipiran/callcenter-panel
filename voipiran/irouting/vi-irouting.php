#!/usr/bin/php -q
<?php

/*Set Defaut Paths*/
$voicePath = "/var/www/voipiran/irouting/storage/app/";
$timeout = "2000";

/*Set Time Zone*/
date_default_timezone_set('Asia/Tehran');

/*Get Mysql root Password*/
$config = parse_ini_file('/etc/issabel.conf', true, INI_SCANNER_RAW);
$rootpw = $config['mysqlrootpwd'];

$DBServer = "localhost";
$DBUser = "root";
$DBPassword = $rootpw;

require('phpagi.php');
error_reporting(E_ALL);
$agi = new AGI();
$agi->answer();
$agi->set_variable("CHANNEL(language)", "pr");
$agent_found=FALSE;

/*Get CallerID*/
$cid = $agi->get_variable("CALLERID(num)");
$cid = $cid['data'];

//Do not RUN on Call from another PBX
if(strlen($cid) <= 5){
	die();
	$agi->Verbose('*** vi-irouting.php: CLID is less than 6 **');

}

$con = mysql_connect($DBServer, $DBUser, $DBPassword);
if (!$con) {
	$agi->Verbose('*** vi-irouting.php: Database NOT CONNECTED **');
	die('Could not connect: ' . mysql_error());
}
$agi->Verbose('*** vi-irouting.php: Database is CONNECTED **');
/**Get Settings Parameter from Database**/
$query = "SELECT * FROM settings WHERE enable=TRUE ORDER BY priority ASC";
$result = mysql_db_query("voipiran_irouting", $query, $con);

/* Get Databse Row and Put in Array */
$fullData = array();
$priorityArray = array();
$routeArray = array();
$priority = "";
$timespan;
$accept_digit;
$agent_num_prefix;

$a = "";
$b = "";
$c = "";
$finalRoute = "";

while($row = mysql_fetch_array($result)){
    $fullData[] = $row;
	$priorityArray[] = $row["priority"];
}


//FIND DUPLICATE PRIORITY
if(count($priorityArray) !== count(array_unique($priorityArray))){
		foreach($fullData as $row){ 
			$priority = $row["priority"];
			if($priority == $row["priority"]) {
			$routeArray[] = $row["route_name"];

			$timespan = $row["timespan"]-1;
			$accept_digit = $row["accept_digit"];
			$agent_num_prefix = $row["agent_num_prefix"];
			if($agent_num_prefix =='_'){
					$agent_num_prefix ='';
			}
			$play_agent_num = $row["play_agent_num"];
			//$prompt1 = $row["prompt1"];
			$prompt1 = str_replace('.wav', '', $row["prompt1"]);
			//$prompt2 = $row["prompt2"];
			$prompt2 = str_replace('.wav', '', $row["prompt2"]);
			//$prompt3 = $row["prompt3"];
			$prompt3 = str_replace('.wav', '', $row["prompt3"]);
			}
		}
		/*Find Duplicate Route Names*/
		foreach($routeArray as $row){ 
			if($row=="last-mised-from") $a = "a";
			if($row=="last-talk-from") $b = "b";
			if($row=="last-talk-to") $c = "c";
		}

		$finalRoute = $a.$b.$c;
		$agi->Verbose('*** vi-irouting.php: Duplicate Found and Final Route is='.$finalRoute.' **');

		/* last-mised-from   last-talk-from*/
		if($finalRoute=="ab") {
			$agentNum = lastMisedFrom_lastTalkFrom();
			if ($agentNum) {
				$agi->Verbose('*** vi-irouting.php: last-mised-from   last-talk-from, Agent Number='.$agentNum.' **');
				askAndGo();
			}
		}
		/* last-mised-from   last-talk-to*/
		if($finalRoute=="ac") {
			$agentNum = lastMisedFrom_lastTalkTo();
			if ($agentNum) {
				$agi->Verbose('*** vi-irouting.php: last-talk-to, Agent Number='.$agentNum.' **');
				askAndGo();
			}
		}
		/* last-talk-from   last-talk-to*/
		if($finalRoute=="cb") {
			$agentNum = lastTalkFrom_lastTalkTo();
			if ($agentNum) {
				$agi->Verbose('*** vi-irouting.php: last-talk-to, Agent Number='.$agentNum.' **');
				askAndGo();
			}
		}
		
		/*last-mised-from last-talk-from last-talk-to*/
		if($finalRoute=="abc") {
			$agentNum = lastMisedFrom_lastTalkFrom_lastTalkTo();
			if ($agentNum) {
				$agi->Verbose('*** vi-irouting.php: last-talk-to, Agent Number='.$agentNum.' **');
				askAndGo();
			}

		}
		

		die();
	}




/*Continue if There are no Duplicate Routes */
foreach($fullData as $row){ 

	$timespan = $row["timespan"]-1;
	$accept_digit = $row["accept_digit"];
	$agent_num_prefix = $row["agent_num_prefix"];
	if($agent_num_prefix =='_'){
			$agent_num_prefix ='';
	}

	$play_agent_num = $row["play_agent_num"];
	//$prompt1 = $row["prompt1"];
	$prompt1 = str_replace('.wav', '', $row["prompt1"]);
	//$prompt2 = $row["prompt2"];
	$prompt2 = str_replace('.wav', '', $row["prompt2"]);
	//$prompt3 = $row["prompt3"];
	$prompt3 = str_replace('.wav', '', $row["prompt3"]);

	$agi->Verbose('*** vi-irouting.php: ROUTE NAME is: **'.$row["route_name"]);

	if ($row["route_name"] == 'last-talk-to') {
//$agi->Verbose('###last-talk-to');
	$agentNum = lastTalkTo();
		if ($agentNum) {
			$agi->Verbose('*** vi-irouting.php: last-talk-to, Agent Number='.$agentNum.' **');
			askAndGo();
			Break;
		}
	}
	if ($row["route_name"] == 'last-talk-from') {
	//$agi->Verbose('###last-talk-from');
	$agentNum = lastTalkFrom();
		if ($agentNum) {
			$agi->Verbose('*** vi-irouting.php: last-talk-from, Agent Number='.$agentNum.' **');
			askAndGo();
			Break;
		}
	}
	if ($row["route_name"] == 'last-mised-from') {
		$agentNum = lastMisedFrom();
		if ($agentNum) {
			$agi->Verbose('*** vi-irouting.php: last-mised-from, Agent Number='.$agentNum.' **');
			askAndGo();
			Break;
		}
	}
}
mysql_close($con);


function lastTalkTo()
{
	global $con;
	global $agi;
	global $cid;
	global $query;
	global $timespan;
	$agentNum ="";
	$query = "select * from cdr where src LIKE '" . $cid . "' and disposition='ANSWERED' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " order by calldate desc limit 1";
	//echo $query . " \n";
	$name = mysql_db_query("asteriskcdrdb", $query, $con);
	$row = mysql_fetch_array($name);
	$agentNum = $row[dst];
	
	return $agentNum;
 }


function lastTalkFrom()
{
	global $con;
	global $agi;
	global $cid;
	global $query;
	global $timespan;
	$agentNum ="";
	$query = "select * from cdr where dst LIKE '%" . $cid . "' and disposition='ANSWERED' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " order by calldate desc limit 1";
	//$agi->Verbose('*** vi-irouting.php: last-mised-from, ً,QUERY=**'.$query.'**');
	//echo $query . " \n";
	$name = mysql_db_query("asteriskcdrdb", $query, $con);
	$row = mysql_fetch_array($name);
	$agentNum = $row[cnum];
	
	return $agentNum;
 }


function lastMisedFrom()
{
	global $con;
	global $agi;
	global $cid;
	global $query;
	global $timespan;
	$agentNum ="";
	//$query = "select * from cdr where dst LIKE '%" . $cid . "' and disposition='NO ANSWER' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " order by calldate desc limit 1";
	//and disposition='NO ANSWER' 
	$query="select * from cdr where (dst LIKE '%".$cid. "%' or src LIKE '%".$cid. "%') and lastapp='Dial' and calldate >= CURDATE() order by calldate desc limit 1";
	
	$name = mysql_db_query("asteriskcdrdb", $query, $con);
	$row = mysql_fetch_array($name);
	
	$disposition=$row[disposition];
	if($disposition == 'NO ANSWER'){
		$agentNum=$row[cnum];
	}
	//$agi->Verbose('*** vi-irouting.php: last-mised-from, ً,QUERY=**'.$query.'**');


	//$agentNum = $row[cnum];
	//$agi->Verbose('*** vi-irouting.php: last-mised-from, ً,agentNum=**'.$agentNum.'**');
	return $agentNum;
 }


 function lastTalkFrom_lastTalkTo()
{
	global $con;
	global $agi;
	global $cid;
	global $query;
	global $timespan;
	$agentNum ="";
	$query = "select * from cdr where src LIKE '" . $cid . "' and disposition='ANSWERED' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " UNION ALL select * from cdr where dst LIKE '%" . $cid . "' and disposition='ANSWERED' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " order by calldate desc limit 1";
	//echo $query . " \n";
	$name = mysql_db_query("asteriskcdrdb", $query, $con);
	$row = mysql_fetch_array($name);
	$agentNum = $row[dst];
	if($agentNum == $cid) $agentNum =$row[cnum];
	
	return $agentNum;
 }
 
 function lastMisedFrom_lastTalkTo()
 {
	 global $con;
	 global $agi;
	 global $cid;
	 global $query;
	 global $timespan;
	 $agentNum ="";
	 $query = "select * from cdr where src LIKE '" . $cid . "' and disposition='ANSWERED' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " UNION ALL select * from cdr where dst LIKE '%" . $cid . "' and disposition='NO ANSWER' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " order by calldate desc limit 1";

	 $name = mysql_db_query("asteriskcdrdb", $query, $con);
	 $row = mysql_fetch_array($name);
	 $agentNum = $row[dst];
	 if($agentNum == $cid) $agentNum =$row[cnum];
	 
	 return $agentNum;
  }

  function lastMisedFrom_lastTalkFrom()
  {
	  global $con;
	  global $agi;
	  global $cid;
	  global $query;
	  global $timespan;
	  $agentNum ="";
	  $query = "select * from cdr where dst LIKE '%" . $cid . "' and disposition='NO ANSWER' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " UNION ALL select * from cdr where dst LIKE '%" . $cid . "' and disposition='ANSWERED' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " order by calldate desc limit 1";
	  $agi->Verbose('*** vi-irouting.php: Query='.$query);
	  $name = mysql_db_query("asteriskcdrdb", $query, $con);
	  $row = mysql_fetch_array($name);
	  
	  $agentNum = $row[dst];
	 if($agentNum == $cid) $agentNum =$row[cnum];
	  
	  return $agentNum;
   }

   function lastMisedFrom_lastTalkFrom_lastTalkTo()
   {
	   global $con;
	   global $agi;
	   global $cid;
	   global $query;
	   global $timespan;
	   $agentNum ="";
	   $query = "select * from cdr where dst LIKE '%" . $cid . "' and disposition='NO ANSWER' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " UNION ALL select * from cdr where dst LIKE '%" . $cid . "' and disposition='ANSWERED' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " UNION ALL select * from cdr where src LIKE '" . $cid . "' and disposition='ANSWERED' and lastapp='Dial' and calldate >= CURDATE()-" . $timespan . " order by calldate desc limit 1";
  
	   $name = mysql_db_query("asteriskcdrdb", $query, $con);
	   $row = mysql_fetch_array($name);
	   $agentNum = $row[dst];
	   if($agentNum == $cid) $agentNum =$row[cnum];
	   
	   return $agentNum;
	}


/**CHECK last-talk-to-agent**/
function askAndGo()
{
	global $play_agent_num;
	global $voicePath;
	global $prompt1;
	global $prompt2;
	global $prompt3;
	global $agentNum;
	global $agi;
	global $accept_digit;
	global $agent_num_prefix;
	global $timeout;

			$agi-> stream_file('en/beep');
		/**CHECK Play agent number or NOT**/
		if ($play_agent_num) {

			$agi-> stream_file($voicePath.$prompt2);

			$agi->say_number($agentNum, '');
			$confirmtemp2 = $agi->get_data($voicePath . $prompt3, $timeout, 1);
			$confirm = $confirmtemp2['result'];
		} else {
			$confirmtemp3 = $agi->get_data($voicePath . $prompt1,$timeout,1);
			$confirm = $confirmtemp3['result'];
		}
 		
		/*If Accept Digits is d and Caller enter Nothing*/
		if ($confirm != NULL && $accept_digit=='d') {
			$agi->Verbose('*** vi-irouting.php: last-mised-from, Confirm, Accept='.$accept_digit.' **');
			$agi->Verbose('*** vi-irouting.php: َAgent_Number '.$agent_num_prefix . $agentNum.' **');
			$agi->exec_goto('from-internal-additional', $agent_num_prefix . $agentNum, '1');
		}


		if ($confirm == $accept_digit) {
			$agi->Verbose('*** vi-irouting.php: last-mised-from, Confirm, Accept='.$accept_digit.' **');
			$agi->Verbose('*** vi-irouting.php: َAgent_Number '.$agent_num_prefix . $agentNum.' **');
			$agi->exec_goto('from-internal-additional', $agent_num_prefix . $agentNum, '1');
		}
		die();

}



?>