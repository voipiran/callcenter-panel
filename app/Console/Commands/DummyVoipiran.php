<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class DummyVoipiran extends Command
{

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'voipiran:dummy';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'generate dummy data';

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function handle()
	{
		// Create database and tables 
		$ask = $this->ask('Your previous information will be deleted. do you continue? type yes to continue');
		if ($ask == 'yes') {
			$this->voipiran_irouting();
			$this->voipiran_numberformatter();
			$this->voipiran_stats();
			$this->visurvey();
			$this->info("Dummuy created successfully!");
		}
	}

	/** crate database irouting */
	public function voipiran_irouting()
	{
		// TRUNCATE TABLE
		DB::connection('mysql5')->statement('TRUNCATE TABLE settings');

		// Check if table already exists
		if (Schema::connection('mysql5')->hasTable('settings')) {
			// Create the table
			DB::connection('mysql5')->statement("
			INSERT INTO `settings` (`id`, `route_name`, `route_name_title`, `route_desc`, `timespan`, `play_agent_num`, `prompt1`, `prompt2`, `prompt3`, `accept_digit`, `enable`, `priority`, `agent_num_prefix`) VALUES
			(1,	'last-talk-to',	'آخرین مکالمه به شرکت',	'هدایت مشتری به کارشناس مربوطه در آخرین مکالمه انجام شده یه طرف شرکت.',	1,	'0',	'prompt-ltt-1.wav',	'prompt-ltt-2.wav',	'prompt-ltt-3.wav',	'1',	0,	30,	'_'),
			(2,	'last-talk-from',	'آخرین مکالمه از شرکت',	'هدایت مشتری به کارشناس مربوطه در آخرین مکالمه انجام شده از طرف شرکت.',	1,	'0',	'prompt-ltf-1.wav',	'prompt-ltf-2.wav',	'prompt-ltf-3.wav',	'1',	0,	20,	'_'),
			(3,	'last-mised-from',	'تماس از دست رفته',	'هدایت تماس گیرنده به کارشناس مربوطه در آخرین تماس از دست رفته از شرکت.',	1,	'0',	'prompt-lmf-1.wav',	'prompt-lmf-2.wav',	'prompt-lmf-3.wav',	'1',	0,	10,	'_');
        ");
		}
	}

	/** crate database visurvey */
	public function visurvey()
	{
		// TRUNCATE TABLE
		DB::connection('mysql8_Survey')->statement('TRUNCATE TABLE settings');

		// Check if table already exists
		if (Schema::connection('mysql8_Survey')->hasTable('settings')) {
			// Create the table
			DB::connection('mysql8_Survey')->statement("
				INSERT INTO `settings` (`id`, `survey_name`, `survey_status`, `survey_voice`, `survey_string`, `survey_queue`, `customer_voice_status`, `customer_voice_limit`, `survey_playagent`, `created_at`, `updated_at`) VALUES
				(62,	'صف 8001',	1,	'62.wav',	'12345',	'8001',	1,	5,	'0',	NULL,	NULL),
				(67,	'31 vsd3 21',	1,	'67.wav',	'12345',	'8001',	1,	5,	'0',	NULL,	NULL),
				(68,	'3213',	1,	'68.wav',	'12345',	'8001',	1,	5,	'0',	NULL,	NULL);
			");
		}
	}

	/** crate database numberformatter */
	public function voipiran_numberformatter()
	{
		// TRUNCATE TABLE
		DB::connection('mysql6')->statement('TRUNCATE TABLE settings');

		// Check if table already exists
		if (Schema::connection('mysql6')->hasTable('settings')) {
			// Create the table
			DB::connection('mysql6')->statement("
			INSERT INTO `settings` (`name`, `descrioption`, `enable`) VALUES
			('اصلاح کالر آی دی',	'اصلاح شماره تماس گیرنده به فرمت رایج مورد انتظار شماره تماس ها',	1);
        ");
		}
	}

	/** crate database numberformatter */
	public function voipiran_stats()
	{

		// TRUNCATE TABLE
		DB::connection('mysql')->statement('TRUNCATE TABLE queue_stats');
		DB::connection('mysql')->statement('TRUNCATE TABLE qevent');

		// Check if table queue_stats already exists
		if (Schema::connection('mysql')->hasTable('queue_stats')) {
			// Create the table
			DB::connection('mysql')->statement("
					
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
				(22,	'RINGCANCELED');
        ");
		}
	}
}
