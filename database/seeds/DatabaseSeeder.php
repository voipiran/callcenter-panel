<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;


class DatabaseSeeder extends Seeder
{

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{

		Model::unguard();


		$this->call('voipiran_callrequest');
		$this->call('RoleSeeder');
		$this->call('GroupPermissionSeeder');
		$this->call('PermisionSeeder');
		$this->call('UsersSeeder');
		$this->call('SetPermissionAdmin');
		$this->call('visurvey');

		Model::reguard();
	}
}


class RoleSeeder extends Seeder
{
	public function run()
	{
		DB::table('roles')->insert(
			[
				[
					'name' => 'مدیر',
					'created_at' => Carbon::now(),
				],
				[
					'name' => 'کاربر عادی',
					'created_at' => Carbon::now(),
				],
			]
		);
	}
}

class PermisionSeeder extends Seeder
{
	public function run()
	{
		DB::table('permisions')->insert(
			[
				// dashboard permission
				[
					'name' => 'dashboard',
					'label' => 'داشبورد اصلی',
					'group_id' => 1
				],
				// auth permission
				[
					'name' => 'auth.index',
					'label' => 'احراز هویت',
					'group_id' => 1
				],
				// user
				[
					'name' => 'auth.users.index',
					'label' => 'مشاهده صفحه مدیریت کاربران',
					'group_id' => 1
				],
				[
					'name' => 'auth.users.add',
					'label' => 'افزودن کاربر جدید',
					'group_id' => 1
				],
				[
					'name' => 'auth.users.edit',
					'label' => 'ویرایش اطلاعات کاربران',
					'group_id' => 1
				],
				[
					'name' => 'auth.users.remove',
					'label' => 'حذف کاربران',
					'group_id' => 1
				],
				// roles
				[
					'name' => 'auth.roles.index',
					'label' => 'مشاهده صفحه مدیریت نقش ها',
					'group_id' => 1
				],
				[
					'name' => 'auth.roles.add',
					'label' => 'افزودن نقش جدید',
					'group_id' => 1
				],
				[
					'name' => 'auth.roles.edit',
					'label' => 'ویرایش نقش ها ',
					'group_id' => 1
				],
				[
					'name' => 'auth.roles.remove',
					'label' => 'حذف نقش ها ',
					'group_id' => 1
				],
				// permission
				[
					'name' => 'auth.permission.index',
					'label' => 'مشاهده صفحه مدیریت نقش ها',
					'group_id' => 1
				],
				[
					'name' => 'auth.permission.edit',
					'label' => 'ویرایش نقش ها ',
					'group_id' => 1
				],

				// stats permission
				[
					'name' => 'call_stat_plus',
					'label' => '',
					'group_id' => 2
				],
				[
					'name' => 'stats.index',
					'label' => '',
					'group_id' => 2
				],
				[
					'name' => 'stats.distribution',
					'label' => '',
					'group_id' => 2
				],
				[
					'name' => 'stats.answered',
					'label' => '',
					'group_id' => 2
				],
				[
					'name' => 'stats.unAnswered',
					'label' => '',
					'group_id' => 2
				],
				[
					'name' => 'stats.operator',
					'label' => '',
					'group_id' => 2
				],
				[
					'name' => 'stats.search',
					'label' => '',
					'group_id' => 2
				],
				[
					'name' => 'stats.realTime',
					'label' => '',
					'group_id' => 2
				],

				// irouting permission
				[
					'name' => 'irouting',
					'label' => '',
					'group_id' => 3
				],
				[
					'name' => 'iroutings.edit',
					'label' => '',
					'group_id' => 3
				],


				// automatic-call permission
				[
					'name' => 'automatic_call',
					'label' => '',
					'group_id' => 5
				],
				[
					'name' => 'automatic_calls.add',
					'label' => '',
					'group_id' => 5
				],

				[
					'name' => 'automatic_calls.edit',
					'label' => '',
					'group_id' => 5
				],

				[
					'name' => 'automatic_calls.remove',
					'label' => '',
					'group_id' => 5
				],

				[
					'name' => 'automatic_calls.showList',
					'label' => '',
					'group_id' => 5
				],

				// survey permission
				[
					'name' => 'survey',
					'label' => '',
					'group_id' => 6
				],
				[
					'name' => 'surveyChild.survey.index',
					'label' => '',
					'group_id' => 6
				],
				[
					'name' => 'surveyChild.survey.edit',
					'label' => '',
					'group_id' => 6
				],
				[
					'name' => 'surveyChild.survey.remove',
					'label' => '',
					'group_id' => 6
				],
				[
					'name' => 'surveyChild.operator',
					'label' => '',
					'group_id' => 6
				],
				[
					'name' => 'surveyChild.setting',
					'label' => '',
					'group_id' => 6
				],

				// number-formatter permission
				[
					'name' => 'number_formatter',
					'label' => '',
					'group_id' => 1
				],

				// setting permission
				[
					'name' => 'setting',
					'label' => '',
					'group_id' => 1
				],

				// licence permission
				[
					'name' => 'licence.index',
					'label' => '',
					'group_id' => 1
				],
				[
					'name' => 'licence.add',
					'label' => '',
					'group_id' => 1
				],

				// voipiranMainSite permission
				[
					'name' => 'voipiranMainSite',
					'label' => '',
					'group_id' => 1
				],

				// call_request permission
				[
					'name' => 'callrequest',
					'label' => 'درخواست تماس',
					'group_id' => 4
				],
			]
		);
	}
}

class GroupPermissionSeeder extends Seeder
{
	public function run()
	{

		DB::table('group_permision')->insert(
			[
				[
					'id' => 1,
					'label' => 'اصلی',
					'name' => 'DB.group_permision.main',
					'created_at' => Carbon::now(),
				],
				[
					'id' => 2,
					'label' => 'گزارشات پیشرفته',
					'name' => 'DB.group_permision.stats',
					'created_at' => Carbon::now(),
				],
				[
					'id' => 3,
					'label' => 'مسیر یابی',
					'name' => 'DB.group_permision.iroutings',
					'created_at' => Carbon::now(),
				],
				[
					'id' => 4,
					'label' => 'درخواست تماس',
					'name' => 'DB.group_permision.callrequest',
					'created_at' => Carbon::now(),
				],
				[
					'id' => 5,
					'label' => 'تماس خودکار',
					'name' => 'DB.group_permision.automatic_calls',
					'created_at' => Carbon::now(),
				],
				[
					'id' => 6,
					'label' => 'نظر سنجی',
					'name' => 'DB.group_permision.survey',
					'created_at' => Carbon::now(),
				],

			]
		);
	}
}


class UsersSeeder extends Seeder
{
	public function run()
	{
		$password =  '123456';
		$hashedPassword = Hash::make($password);

		DB::table('users')->insert(
			[
				[
					'created_at' => Carbon::now(),
					'full_name' => 'admin',
					'role_id' => 1,
					'user_name' => 'admin',
					'tel' => '02133808080',
					'mobile' => '0912712789',
					'internal_tel' => '3235',
					'email' => 'admin@voipIran.com',
					'password' => $hashedPassword,
					'queues_available' => '["all"]'
				],
			]
		);
	}
}

class SetPermissionAdmin extends Seeder
{
	public function run()
	{
		$permissions = DB::table('permisions')->get();
		foreach ($permissions as $permission) {
			DB::table('role_permision')->insert(
				[
					[
						'role_id' => 1,
						'permision_id' => $permission->id,

					],
				]
			);
		}
	}
}

/** crate database voipiran_callrequest */
class voipiran_callrequest extends Seeder
{
	public function run()
	{
		// create data base
		DB::statement("CREATE DATABASE IF NOT EXISTS voipiran_callrequest");

		// Check if table queue_stats already exists
		if (!Schema::connection('mysql9_call_request')->hasTable('settings')) {
			// Create the table
			DB::connection('mysql9_call_request')->statement('
			CREATE TABLE `settings` (
				`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
				`enable` tinyint(1) NOT NULL,
				`trunk_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
				`outbound_prefix` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
				`callerid_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
				`callerid_number` int(11) NOT NULL,
				`dial_logging` tinyint(1) NOT NULL,
				PRIMARY KEY (`id`)
			  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
        ');
		}

		// TRUNCATE TABLE
		DB::connection('mysql9_call_request')->statement('TRUNCATE TABLE settings');

		// Check if table already exists
		if (Schema::connection('mysql9_call_request')->hasTable('settings')) {
			// Create the table
			DB::connection('mysql9_call_request')->statement("
			INSERT INTO `settings` (`id`, `enable`, `trunk_name`, `outbound_prefix`, `callerid_name`, `callerid_number`, `dial_logging`) VALUES (1,	0,	'SIP/TCI',	'9',	'MyCompany',	99009900,	0);
        ");
		}
	}
}

/** crate database visurvey */
class visurvey extends Seeder
{
	public function run()
	{
		// create data base
		DB::statement("CREATE DATABASE IF NOT EXISTS visurvey");

		if (Schema::connection('mysql8_Survey')->hasTable('settings')) {
			// Create the table
			DB::connection('mysql8_Survey')->statement("
			DROP TABLE IF EXISTS `settings`;
        ");
		}

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

		if (Schema::connection('mysql8_Survey')->hasTable('survey')) {
			// Create the table
			DB::connection('mysql8_Survey')->statement("
			DROP TABLE IF EXISTS `survey`;
        ");
		}

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
			`survey_route` varchar(30) COLLATE utf8_persian_ci DEFAULT NULL,
			`created_at` timestamp NULL DEFAULT NULL,
			`updated_at` timestamp NULL DEFAULT NULL,
			PRIMARY KEY (`id`)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
        ');
	}
}
