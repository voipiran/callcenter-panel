<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');