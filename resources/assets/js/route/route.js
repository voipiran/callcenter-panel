export const routes = [

    /** dashboard route */
    { name: 'main_page', path: '/', component: () => import("../../components/Dashboard.vue") },

    // setting route
    { name: 'stats_setting', path: '/setting', component: () => import("../../components/SettingComponent.vue"), },

    // about me route
    { name: 'about', path: '/about', component: () => import("../../components/About.vue"), },

    /** ---------------------------------- Start Route Users And roles ---------------------------------- */
    { name: 'users', path: '/users', component: () => import("../../components/auth/Users.vue"), },
    { name: 'users_create', path: '/users/create', component: () => import("../../components/auth/UsersEdit.vue"), },
    { name: 'users_edit', path: '/users/:id/edit', component: () => import("../../components/auth/UsersEdit.vue"), },

    { name: 'roles', path: '/roles', component: () => import("../../components/auth/Roles.vue"), },
    { name: 'roles_create', path: '/roles/create', component: () => import("../../components/auth/RolesEdit.vue"), },
    { name: 'roles_edit', path: '/roles/:id/edit', component: () => import("../../components/auth/RolesEdit.vue"), },

    { name: 'permission', path: '/permission', component: () => import("../../components/auth/Permission.vue"), },
    { name: 'permission_edit', path: '/permission/:id/edit', component: () => import("../../components/auth/PermissionEdit.vue"), },
    /** ---------------------------------- End Route Users ---------------------------------- */

    /** ---------------------------------- Start Route Stats ---------------------------------- */
    { name: 'stats', path: '/stats/home', component: () => import("../../components/stats/Home.vue"), },
    { name: 'stats_distribution', path: '/stats/distribution', component: () => import("../../components/stats/Distribution.vue"), },
    { name: 'stats_answered', path: '/stats/answered', component: () => import("../../components/stats/Answered.vue"), },
    { name: 'stats_unAnswered', path: '/stats/unAnswered', component: () => import("../../components/stats/UnAnswered.vue"), },
    { name: 'stats_operator', path: '/stats/operator', component: () => import("../../components/stats/Operator.vue"), },
    { name: 'stats_realTime', path: '/stats/realTime', component: () => import("../../components/stats/RealTime.vue"), },
    { name: 'stats_search', path: '/stats/search', component: () => import("../../components/stats/Search.vue"), },
    /** ---------------------------------- End Route Stats ---------------------------------- */

    /** ---------------------------------- Start Route Irouting ---------------------------------- */
    { name: 'irouting', path: '/irouting', component: () => import("../../components/irouting/Irouting.vue"), },
    { name: 'irouting_edit', path: '/irouting/:id/edit', component: () => import("../../components/irouting/EditIrouting.vue"), },
    /** ---------------------------------- End Route Irouting ---------------------------------- */

    /** ---------------------------------- Start Route Number-Formatter ---------------------------------- */
    { name: 'numberformatter', path: '/number-formatter', component: () => import("../../components/numberformatter/Numberformatter.vue"), },
    /** ---------------------------------- End Route Number-Formatter ---------------------------------- */

    /** ---------------------------------- Start Route Automatic Call ---------------------------------- */
    { name: 'automaticCall', path: '/automatic-call', component: () => import("../../components/automaticCall/Index.vue"), },
    { name: 'automatic-call-edit', path: '/automatic-call/:id/edit', component: () => import("../../components/automaticCall/AddAndEdit.vue"), },
    { name: 'automatic-call-add', path: '/automatic-call/create', component: () => import("../../components/automaticCall/AddAndEdit.vue"), },
    { name: 'automatic-call-list-call', path: '/automatic-call/:id/list-call', component: () => import("../../components/automaticCall/ListCall.vue"), },
    /** ---------------------------------- End Route Automatic Call ---------------------------------- */

    /** ---------------------------------- Start Route Survey ---------------------------------- */
    { name: 'survey-dashboard', path: '/survey/dashboard', component: () => import("../../components/survey/Dashboard.vue"), },
    { name: 'survey-operator', path: '/survey/operator', component: () => import("../../components/survey/Operator.vue"), },
    { name: 'survey-operator-chart', path: '/survey/operator/:agentNumber/chart/:location', component: () => import("../../components/survey/OperatorChart.vue"), },
    { name: 'survey-core-survey', path: '/survey/core/survey', component: () => import("../../components/survey/Survey.vue"), },
    { name: 'survey-core-survey-edit', path: '/survey/core/survey/:id/edit', component: () => import("../../components/survey/SurveyEdit.vue"), },
    { name: 'survey-setting', path: '/survey/setting', component: () => import("../../components/survey/Setting.vue"), },
    { name: 'survey-setting-edit', path: '/survey/setting/:id/edit', component: () => import("../../components/survey/SettingEdit.vue"), },
    { name: 'survey-setting-add', path: '/survey/setting/create', component: () => import("../../components/survey/SettingEdit.vue"), },
    /** ---------------------------------- End Route Survey ---------------------------------- */

    /** ---------------------------------- Start Route licence ---------------------------------- */
    { name: 'licence', path: '/licence', component: () => import("../../components/licence/Index.vue"), },
    { name: 'licence_create', path: '/licence/create', component: () => import("../../components/licence/LicenceCreate.vue"), },
    /** ---------------------------------- End Route licence ---------------------------------- */

]