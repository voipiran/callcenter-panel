<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');