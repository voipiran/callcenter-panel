<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');