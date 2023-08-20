<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Prophecy\Call\Call;

class DatabaseVoipiran extends Command
{

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'voipiran:db';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'make the databases if not exists and the tables';

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function handle()
	{
		// Create database and tables 
		$this->voipiran();
		$this->voipiran_irouting();
		$this->voipiran_numberformatter();
		$this->voipiran_stats();
		$this->visurvey();

		$this->info("Databases created successfully!");
	}

	/** crate database voipiran */
	public function voipiran()
	{
		// create data base
		DB::statement("CREATE DATABASE IF NOT EXISTS voipiran");
	}


	/** crate database irouting */
	public function voipiran_irouting()
	{
		// create data base
		DB::statement("CREATE DATABASE IF NOT EXISTS voipiran_irouting");

		// Check if table already exists
		if (!Schema::connection('mysql5')->hasTable('settings')) {
			// Create the table
			DB::connection('mysql5')->statement('
			CREATE TABLE `settings` (
				`id` int(11) NOT NULL AUTO_INCREMENT,
				`route_name` varchar(30) NOT NULL,
				`route_name_title` varchar(30) NOT NULL,
				`route_desc` varchar(200) NOT NULL,
				`timespan` int(10) NOT NULL,
				`play_agent_num` varchar(1) NOT NULL,
				`prompt1` varchar(100) DEFAULT NULL,
				`prompt2` varchar(100) DEFAULT NULL,
				`prompt3` varchar(100) DEFAULT NULL,
				`accept_digit` varchar(1) DEFAULT NULL,
				`enable` tinyint(4) NOT NULL,
				`priority` int(11) NOT NULL,
				`agent_num_prefix` varchar(10) DEFAULT NULL,
				PRIMARY KEY (`id`)
			  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        ');
		}
	}

	/** crate database visurvey */
	public function visurvey()
	{
		// create data base
		DB::statement("CREATE DATABASE IF NOT EXISTS visurvey");

		// Check if table already exists
		if (!Schema::connection('mysql8_Survey')->hasTable('settings')) {
			// Create the table
			DB::connection('mysql8_Survey')->statement('
				CREATE TABLE `settings` (
					`id` int(11) NOT NULL AUTO_INCREMENT,
					`survey_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
					`survey_status` tinyint(4) DEFAULT NULL,
					`survey_voice` varchar(100) COLLATE utf8_persian_ci DEFAULT NULL,
					`survey_string` varchar(20) COLLATE utf8_persian_ci DEFAULT NULL,
					`survey_queue` varchar(20) COLLATE utf8_persian_ci DEFAULT NULL,
					`customer_voice_status` tinyint(4) DEFAULT NULL,
					`customer_voice_limit` tinyint(4) DEFAULT NULL,
					`survey_playagent` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
					`created_at` timestamp NULL DEFAULT NULL,
					`updated_at` timestamp NULL DEFAULT NULL,
					UNIQUE KEY `id` (`id`)
				) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;		
			
			');
		}

		// Check if table already exists
		if (!Schema::connection('mysql8_Survey')->hasTable('survey')) {
			// Create the table
			DB::connection('mysql8_Survey')->statement('
				
					CREATE TABLE `survey` (
						`id` int(11) NOT NULL AUTO_INCREMENT,
						`date_time` datetime DEFAULT NULL,
						`uniqueid` varchar(30) COLLATE utf8_persian_ci DEFAULT NULL,
						`agent_number` varchar(30) COLLATE utf8_persian_ci DEFAULT NULL,
						`agent_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
						`caller_number` varchar(30) COLLATE utf8_persian_ci DEFAULT NULL,
						`caller_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
						`survey_value` varchar(5) COLLATE utf8_persian_ci DEFAULT NULL,
						`survey_location` varchar(30) COLLATE utf8_persian_ci DEFAULT NULL,
						`customer_voice_path` varchar(300) COLLATE utf8_persian_ci DEFAULT NULL,
						`created_at` timestamp NULL DEFAULT NULL,
						`updated_at` timestamp NULL DEFAULT NULL,
						PRIMARY KEY (`id`)
					  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
				');
		}
	}

	/** crate database numberformatter */
	public function voipiran_numberformatter()
	{
		// create data base
		DB::statement("CREATE DATABASE IF NOT EXISTS voipiran_numberformatter");

		// Check if table already exists
		if (!Schema::connection('mysql6')->hasTable('settings')) {
			// Create the table
			DB::connection('mysql6')->statement('
			CREATE TABLE `settings` (
					`name` varchar(30) NOT NULL,
					`descrioption` varchar(100) NOT NULL,
					`enable` int(1) NOT NULL
				  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        ');
		}
	}

	/** crate database numberformatter */
	public function voipiran_stats()
	{
		// create data base
		DB::statement("CREATE DATABASE IF NOT EXISTS voipiran_stats");

		// Check if table queue_stats already exists
		if (!Schema::connection('mysql')->hasTable('queue_stats')) {
			// Create the table
			DB::connection('mysql')->statement('
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
        ');
		}

		if (!Schema::connection('mysql')->hasTable('qevent')) {
			// Create the table
			DB::connection('mysql')->statement('
			
			  CREATE TABLE `qevent` (
				`event_id` int(2) ,
				`event` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
				PRIMARY KEY (`event_id`)
			  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
        ');
		}
	}
}
