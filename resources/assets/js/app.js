
export default {
    name: "App",
    data() {
        return {
            showBtnTop: null,
            modalAboutMe: false,
            message: 'Hello Vue!',

            menus: [
                /** dashboard menu */
                {
                    route: '/',
                    icon: 'fa fa-dashboard',
                    content: 'GENERAL.SideMenu.Dashboard.mainTitle',
                    visable: true,
                    licence: true,
                    name: 'dashboard',
                    children: null
                },
                /** auth menu */
                {
                    route: '/users',
                    icon: 'fa fa-users',
                    content: 'GENERAL.SideMenu.Auth.mainTitle',
                    visable: false,
                    licence: true,
                    name: 'auth.index',
                    children: [{
                        route: '/users',
                        icon: 'fa fa-Users',
                        content: 'GENERAL.SideMenu.Auth.users',
                        visable: false,
                        licence: false,
                        name: 'auth.users.index',
                        children: null
                    },
                    {
                        route: '/roles',
                        icon: 'fa fa-Users',
                        content: 'GENERAL.SideMenu.Auth.roles',
                        visable: false,
                        licence: false,
                        name: 'auth.roles.index',
                        children: null
                    },
                    {
                        route: '/permission',
                        icon: 'fa fa-Users',
                        content: 'GENERAL.SideMenu.Auth.permission',
                        visable: false,
                        licence: false,
                        name: 'auth.permission.index',
                        children: null
                    }]
                },
                /** stats menu */
                {
                    route: '/stats/home',
                    icon: 'fa fa-rocket ',
                    content: 'GENERAL.SideMenu.Stats.mainTitle',
                    visable: false,
                    licence: false,
                    name: 'call_stat_plus',
                    children: [
                        {
                            route: '/stats/home',
                            icon: 'fa fa-home',
                            name: 'stats.index',
                            content: 'GENERAL.SideMenu.Stats.home',
                        },
                        {
                            route: '/stats/distribution',
                            icon: 'fa fa-calendar-o',
                            name: 'stats.distribution',
                            content: 'GENERAL.SideMenu.Stats.distribution',
                        },
                        {
                            route: '/stats/answered',
                            icon: 'fa fa-microphone',
                            name: 'stats.answered',
                            content: 'GENERAL.SideMenu.Stats.answered',
                        },
                        {
                            route: '/stats/unAnswered',
                            icon: 'fa fa-microphone-slash',
                            name: 'stats.unAnswered',
                            content: 'GENERAL.SideMenu.Stats.unAnswered',
                        },
                        {
                            route: '/stats/operator',
                            icon: 'fa fa-users',
                            name: 'stats.operator',
                            content: 'GENERAL.SideMenu.Stats.operator',
                        },
                        {
                            route: '/stats/search',
                            icon: 'fa fa-search',
                            name: 'stats.search',
                            content: 'GENERAL.SideMenu.Stats.search',
                        },
                        // {
                        //     route: '/stats/realTime',
                        //     icon: 'fa fa-link',
                        // name: 'stats.realTime',
                        // content: 'GENERAL.SideMenu.Stats.realTime',
                        // },

                    ]
                },
                /** irrouting menu */
                {
                    route: '/irouting',
                    icon: 'fa fa-random ',
                    content: 'GENERAL.SideMenu.Irouting.mainTitle',
                    visable: false,
                    licence: false,
                    name: 'irouting',
                },
                /** automatic call menu */
                {
                    route: '/automatic-call',
                    icon: 'fa fa-phone',
                    content: 'GENERAL.SideMenu.AutomaticCall.mainTitle',
                    visable: false,
                    name: 'automatic_call',
                    children: [
                        {
                            route: '/automatic-call',
                            content: 'GENERAL.SideMenu.AutomaticCall.index',
                            visable: false,
                            licence: true,
                            name: 'survey',

                        }
                    ]
                },
                /** survey menu  */
                {
                    route: '/survey/dashboard/',
                    icon: 'fa fa-pencil-square-o  ',
                    content: 'GENERAL.SideMenu.Survey.mainTitle',
                    visable: false,
                    licence: false,
                    name: 'survey',
                    children: [
                        {
                            route: '/survey/dashboard/',
                            icon: 'fa fa-dashboard',
                            content: 'GENERAL.SideMenu.Survey.dashboard',
                            visable: false,
                            licence: true,
                            name: 'survey',

                        },
                        {
                            route: '/survey/core/survey/',
                            icon: 'fa fa-pencil-square-o ',
                            content: 'GENERAL.SideMenu.Survey.survey',
                            visable: false,
                            licence: false,
                            name: 'surveyChild.survey.index',

                        },
                        {
                            route: '/survey/operator',
                            icon: 'fa fa-headphones ',
                            content: 'GENERAL.SideMenu.Survey.operator',
                            visable: false,
                            licence: false,
                            name: 'surveyChild.operator',

                        },
                        {
                            route: '/survey/setting',
                            icon: 'fa fa-cogs ',
                            content: 'GENERAL.SideMenu.Survey.setting',
                            visable: false,
                            licence: false,
                            name: 'surveyChild.setting',

                        }
                    ]
                },
                /** number-formatter manu */
                {
                    route: '/number-formatter',
                    icon: 'fa fa-quote-right ',
                    content: 'GENERAL.SideMenu.NumberFormat.mainTitle',
                    visable: false,
                    licence: false,
                    name: 'number_formatter',
                },
                /** setting menu */
                {
                    route: '/setting',
                    icon: 'fa fa-cogs',
                    content: 'GENERAL.SideMenu.Setting.mainTitle',
                    visable: false,
                    licence: true,
                    name: 'setting',
                },
                /** voilp iran licence */
                {
                    route: '/licence',
                    icon: 'fa fa-shopping-cart',
                    content: 'GENERAL.SideMenu.Licence.mainTitle',
                    visable: false,
                    licence: true,
                    name: 'licence.index'
                },

            ],
            // object target and title div go id in top page
            anchors: {
                distribution: [{
                    title: 'detail',
                    id: '#detail'
                },
                {
                    title: 'waitByDate',
                    id: '#waitByDate'
                },
                {
                    title: 'waitByTime',
                    id: '#waitByTime'
                },
                {
                    title: 'chartAnswered',
                    id: '#chartAnswered'
                },
                {
                    title: 'chartTimeAnswered',
                    id: '#chartTimeAnswered'
                },
                {
                    title: 'chartDelayAnswered',
                    id: '#chartDelayAnswered'
                },
                {
                    title: 'answeredInWeek',
                    id: '#answeredInWeek'
                },
                {
                    title: 'chartAnsweredWeek',
                    id: '#chartAnsweredWeek'
                },
                {
                    title: 'chartTimeAnsweredWeek',
                    id: '#chartTimeAnsweredWeek'
                },
                {
                    title: 'answeredInMonth',
                    id: '#answeredInMonth'
                }],

                answered: [
                    {
                        title: 'detail',
                        id: '#detail'
                    },
                    {
                        title: 'answered',
                        id: '#answered'
                    },
                    {
                        title: 'service',
                        id: '#service'
                    },
                    {
                        title: 'queueAnswered',
                        id: '#queueAnswered'
                    },
                    {
                        title: 'hangUp',
                        id: '#hangUp'
                    },
                    {
                        title: 'answeredByCallLength',
                        id: '#answeredByCallLength'
                    },
                    {
                        title: 'answeredTransfer',
                        id: '#answeredTransfer'
                    },
                    {
                        title: 'answeredCallsDetail',
                        id: '#answeredCallsDetail'
                    }],
                unAnswered: [
                    {
                        title: 'detail',
                        id: '#detail'
                    },
                    {
                        title: 'hangUp',
                        id: '#hangUp'
                    },
                    {
                        title: 'queueUnAnswered',
                        id: '#queueUnAnswered'
                    },
                    {
                        title: 'unAnsweredCallsDetail',
                        id: '#unAnsweredCallsDetail'
                    }],
                operator: [
                    {
                        title: 'detail',
                        id: '#detail'
                    },
                    {
                        title: 'agent',
                        id: '#agent'
                    },
                    {
                        title: 'pause',
                        id: '#pause'
                    },
                    {
                        title: 'disposition',
                        id: '#disposition'
                    },
                    {
                        title: 'report',
                        id: '#report'
                    }]
            },
            permissionLoading: false
        }
    },
    methods: {
        refreshPage() {
            document.getElementById("refresh").click();
        },
        /** go to top page */
        goUp() {
            document.documentElement.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            document.body.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        // detect scroll for show btn go-top
        onScroll(e) {
            this.showBtnTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
        },
        /** active current side menu */
        showActiveMenu(currentPath = null) {
            if (!currentPath) return this.$router.push("/")

            let currentMenu;
            let ls = this;
            this.menus.map((menu, index) => {
                if (menu.route == currentPath)
                    currentMenu = index;
                ls.menus[index].visable = false;
            })
            this.menus[currentMenu].visable = true;
        },
        /** get list permission and set licence and permission */
        async setPermisson() {
            try {
                this.permissionLoading = true
                let req = await this.$axios({
                    url: "/permission/action",
                    data: {
                        method: 'getPermission'
                    }
                })

                /** set permission in localStorage for handle show and hide buttons*/
                localStorage.setItem('permission', JSON.stringify(req.data.permissions))

                let ls = this;
                this.menus.map((menu, index) => {
                    // set licence
                    try {
                        req.data.licence.map((activedLicence) => {
                            // set permission for root menu
                            if (menu.name == activedLicence.app) {
                                ls.menus[index].licence = true;
                            }
                        })
                    } catch (error) {
                        console.log('not actived licence');
                    }

                    // set permission true
                    let statusPermission = false
                    req.data.permissions.map((permission) => {
                        // set permission for root menu
                        if ((menu.name == permission.name) && menu.licence == true) {
                            ls.menus[index].licence = statusPermission = true;
                        }
                        // set permission for children
                        if (menu.children) {
                            menu.children.map((nestedMenu, nestedIndex) => {
                                if (nestedMenu.name == permission.name) {
                                    ls.menus[index].children[nestedIndex].licence = true;
                                }
                            })
                        }
                    })
                    // set permission false
                    if (!statusPermission) {
                        ls.menus[index].licence = false;
                    }
                })
            } catch (error) {
                console.log(error);
            }
            this.permissionLoading = false

            this.showActiveMenu();

        },
        /** submit log out  */
        async logOut() {
            try {
                await this.$axios({
                    url: 'auth/logout'
                })
                location.reload();
            } catch (error) {
                console.log(error);
            }
        },
        /** set language */
        setLang() {
            document.documentElement.lang = this.$i18n.locale = localStorage.getItem('lang');
        }
    },
    computed: {
        // return title and link of the navigation buttons on the top page
        showCurentAnchor() {
            return [null, null]

            try {
                let route = routes[this.general.route.slice(1) || '/'];
                let anchor = null;
                switch (route.name) {
                    case "distribution":
                        anchor = this.anchors.distribution;
                        break;
                    case "answered":
                        anchor = this.anchors.answered;
                        break;
                    case "unAnswered":
                        anchor = this.anchors.unAnswered;
                        break;
                    case "operator":
                        anchor = this.anchors.operator;
                        break;
                    default:
                        break;
                }
                return [anchor, route.name];
            } catch (error) {
                return [null, null]
            }
        }

    },
    mounted() {
        this.setPermisson()
        this.setLang()


        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })

        /** set drk and light theme */
        if (localStorage.getItem('theme')) {
            var element = document.body;
            element.classList.add(localStorage.getItem('theme'));
        }

        // detect scroll for show btn go-top
        window.addEventListener("scroll", this.onScroll)

    }
}