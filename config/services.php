<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');