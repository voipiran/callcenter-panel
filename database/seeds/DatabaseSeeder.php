<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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


		$this->call('RoleSeeder');
		$this->call('PermisionSeeder');
		$this->call('UsersSeeder');
		$this->call('SetPermissionAdmin');

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
					'label' => 'داشبورد اصلی'
				],

				// auth permission
				[
					'name' => 'auth.index',
					'label' => 'احراز هویت'
				],
				// user
				[
					'name' => 'auth.users.index',
					'label' => 'مشاهده صفحه مدیریت کاربران'
				],
				[
					'name' => 'auth.users.add',
					'label' => 'افزودن کاربر جدید'
				],
				[
					'name' => 'auth.users.edit',
					'label' => 'ویرایش اطلاعات کاربران'
				],
				[
					'name' => 'auth.users.remove',
					'label' => 'حذف کاربران'
				],
				// roles
				[
					'name' => 'auth.roles.index',
					'label' => 'مشاهده صفحه مدیریت نقش ها'
				],
				[
					'name' => 'auth.roles.add',
					'label' => 'افزودن نقش جدید'
				],
				[
					'name' => 'auth.roles.edit',
					'label' => 'ویرایش نقش ها '
				],
				[
					'name' => 'auth.roles.remove',
					'label' => 'حذف نقش ها '
				],
				// permission
				[
					'name' => 'auth.permission.index',
					'label' => 'مشاهده صفحه مدیریت نقش ها'
				],
				[
					'name' => 'auth.permission.edit',
					'label' => 'ویرایش نقش ها '
				],

				// stats permission
				[
					'name' => 'call_stat_plus',
					'label' => ''
				],
				[
					'name' => 'stats.index',
					'label' => ''
				],
				[
					'name' => 'stats.distribution',
					'label' => ''
				],
				[
					'name' => 'stats.answered',
					'label' => ''
				],
				[
					'name' => 'stats.unAnswered',
					'label' => ''
				],
				[
					'name' => 'stats.operator',
					'label' => ''
				],
				[
					'name' => 'stats.search',
					'label' => ''
				],
				[
					'name' => 'stats.realTime',
					'label' => ''
				],

				// irouting permission
				[
					'name' => 'irouting',
					'label' => ''
				],
				[
					'name' => 'iroutings.edit',
					'label' => ''
				],


				// automatic-call permission
				[
					'name' => 'automatic_call',
					'label' => ''
				],
				[
					'name' => 'automatic_calls.add',
					'label' => ''
				],

				[
					'name' => 'automatic_calls.edit',
					'label' => ''
				],

				[
					'name' => 'automatic_calls.remove',
					'label' => ''
				],

				[
					'name' => 'automatic_calls.showList',
					'label' => ''
				],

				// survey permission
				[
					'name' => 'survey',
					'label' => ''
				],
				[
					'name' => 'surveyChild.survey.index',
					'label' => ''
				],
				[
					'name' => 'surveyChild.survey.edit',
					'label' => ''
				],
				[
					'name' => 'surveyChild.survey.remove',
					'label' => ''
				],
				[
					'name' => 'surveyChild.operator',
					'label' => ''
				],
				[
					'name' => 'surveyChild.setting',
					'label' => ''
				],

				// number-formatter permission
				[
					'name' => 'number_formatter',
					'label' => ''
				],

				// setting permission
				[
					'name' => 'setting',
					'label' => ''
				],

				// licence permission
				[
					'name' => 'licence.index',
					'label' => ''
				],
				[
					'name' => 'licence.add',
					'label' => ''
				],

				// voipiranMainSite permission
				[
					'name' => 'voipiranMainSite',
					'label' => ''
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
					'password' => $hashedPassword
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
