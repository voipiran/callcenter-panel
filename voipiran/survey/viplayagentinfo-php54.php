#!/usr/bin/php -q
<?php
  /* 
  +----------------------------------------------------------------------+
  | VOIPIRAN Survey Version 1.4                                        |
  | http://www.voipiran.io                                               |
  +----------------------------------------------------------------------+
  | Copyright (c) 2020 VOIPIRAN Solutions                                |
  +----------------------------------------------------------------------+
  | This is a Commercia Product, Please contact voipiran.io to purchase  |                                    |
  +----------------------------------------------------------------------+
*/
//$sound=operator;
//$sound=karshenas;
//$befarmaiid=befarmaiid;

require('phpagi.php');

$agi = new AGI();
$agi->answer();
/*Sound-Sufix*/
  
// Get Database Settings
$config = parse_ini_file('visurvey.ini', true);
$dbuser = $config['dbuser'];
$dbpass = $config['dbpass'];
$dbaddress = $config['dbaddress'];
$dbname = $config['dbname'];
$sound = $config['agentRole'];
$befarmaiid = $config['befarmaiidEnable'];

// Set Default Paths
$voicePath = "/var/www/html/survey/uploads/";

// Set Time Zone
date_default_timezone_set('Asia/Tehran');

/* Get QUEUE NAME */
$temp = $agi->get_variable("QUEUENUM");
$surveyLocation = $temp['data'];
$agi->Verbose('****VOIPIRAN****QUEUENUM:'.$surveyLocation);

/* Connect Database */
$con = mysqli_connect($dbaddress, $dbuser, $dbpass, $dbname);
mysqli_query($con, "SET character_set_results=utf8");
if (!$con) {
    $agi->Verbose('**VOIPIRAN**DB Not Connected');
    die('Could not connect: ' . mysqli_connect_error());
}
$agi->Verbose('****VOIPIRAN****DB Connected');

/* Get Survey Setting and find Queue properties */
$query = "SELECT * FROM settings WHERE survey_queue='$surveyLocation'";
$result = mysqli_query($con, $query);

if (!$result) {
    $agi->Verbose('**VOIPIRAN**DB Invalid Query:'.mysqli_error($con));
    die('Invalid query: ' . mysqli_error($con));
} else {
    $agi->Verbose('****VOIPIRAN****Query survey_queue OK');
    while ($row = mysqli_fetch_assoc($result)) {
        if ($row['survey_queue'] == $surveyLocation) {
            $surveypPlayagent = $row['survey_playagent'];
        }
    }
    mysqli_free_result($result);
}

$agi->Verbose('****VOIPIRAN DATABASE VARIABLES****');
$agi->Verbose('****VOIPIRAN****surveypPlayagent:'.$surveypPlayagent);

/* Get AgentNumber */
$temp = $agi->get_variable("CONNECTEDLINE(num)");
$agentNumber = $temp['data'];
$agi->Verbose('****VOIPIRAN****connectedline:'.$connectedline);
if ($agentNumber == NULL){
    /*$extension[1] is a Agent Number*/
    $res = $agi->get_variable('MEMBERINTERFACE');
    preg_match('/\/(.*?)\@/', $res['data'], $extension);
    $agentNumber = $extension[1];

    if(strpos($res['data'], 'SIP/') !== false){
        $aNumber = explode('/', $res['data']);
        $agentNumber = $aNumber[1];
    }
    
    if(strpos($res['data'], 'IAX2/') !== false){
        $aNumber = explode('/', $res['data']);
        $agentNumber = $aNumber[1];
    }
}

/* Check If Agent Number is Enabled */
if($surveypPlayagent == '1'){
    $agi->stream_file($voicePath . "agent-number-" . $sound);	
    $agi->set_variable("CHANNEL(language)", "pr");
    $agi->say_number($agentNumber);
    $agi->stream_file($voicePath . $befarmaiid);	
    $agi->exec('Wait', '0.5');			

/* Check If Agent Name is Enabled */
} elseif($surveypPlayagent == '2'){
    $agi->stream_file("custom/" . $agentNumber);
    $agi->stream_file($voicePath . $befarmaiid);	
    $agi->exec('Wait', '0.5');	
}
// Close DB Connection if There is no CustmerVoicePage

mysqli_close($con);
?>
