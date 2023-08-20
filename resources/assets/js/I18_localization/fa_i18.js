export default {
    /** ---------------------------------Start public -------------------------------------------- */

    /** GENERAL  */
    GENERAL: {
        NotifySubmitSuccess: 'عملیات با موفقیت انجام شد ',

        // pagination and search table
        TODAY: "امروز",
        YESTERDAY: "دیروز",
        LAST_WEEK: "هفته گذشته",
        LAST_MONTH: "ماه گذشته",
        LAST_YEAR: "سال گذشته",
        PLAY_AGENT_NUM: "بیان شماره کارشناس",
        ACCEPT_DIGIT: "عدد مورد قبول",
        PRIORITY: "اولویت",
        AGENT_NUM_PERFIX: "پیش شماره کارشناس",
        EDIT: "ویرایش",
        next: ' صفحه بعد ',
        back: ' صفحه قبل ',
        firstPage: 'اولین صفحه',
        LastPage: 'آخرین صفحه',
        resetTime: 'بازه زمانی به تمام ساعات روز تغییر پیدا کرد.',
        of: 'از',
        all: 'همه',
        page: 'صفحه',
        searchFeild: 'جستجوی در جدول',
        rowsperpage: 'تعداد',

        /** list of Season */
        Season1: 'فروردین',
        Season2: 'اردیبهشت',
        Season3: 'خرداد',
        Season4: 'تیر',
        Season5: 'مرداد',
        Season6: 'شهریور',
        Season7: 'مهر',
        Season8: 'آبان',
        Season9: 'اذر',
        Season10: 'دی',
        Season11: 'بهمن',
        Season12: 'اسفند',

        /** languge زبان */
        fa: 'فارسی',
        en: 'انگلیسی',

        /** منوی اصلی */
        SideMenu: {
            Dashboard: {
                mainTitle: 'داشبورد',
            },
            Auth: {
                mainTitle: 'مدیریت کاربران',
                users: 'مدیریت کاربران',
                roles: 'مدیریت نقش ها',
                permission: 'مدیریت مجوزها',
            },
            Stats: {
                mainTitle: 'گزارش تماس',
                home: 'انتخاب فیلتر',
                answered: 'تماس های پاسخ داده شده',
                unAnswered: 'تماس های بدون پاسخ',
                distribution: 'امار توزیع تماس ها',
                operator: 'آمار کارشناس',
                search: 'جستجوی گزارشات',
                realTime: 'نمایش زنده',
            },
            Irouting: { mainTitle: 'مسیریابی هوشمند' },
            Setting: { mainTitle: 'تنظیمات' },
            NumberFormat: { mainTitle: 'اصلاح شماره تماس گیرنده' },
            AutomaticCall: {
                mainTitle: 'تماس خودکار',
                index: 'مدیریت کمپین'
            },
            Survey: {
                mainTitle: 'نظر سنجی ',
                dashboard: 'داشبورد',
                survey: 'گزارش نظرسنجی',
                operator: 'گزارش اپراتورها',
                setting: 'تنظیمات ',
            },
            Voipiran: {
                mainTitle: 'ویپ ایران'
            },
            Licence: {
                mainTitle: 'مدیریت لایسنس ها',
            }
        },

        /** tool tip export pdf, excel and csv */
        pdfExport: 'PDF',
        excelExport: 'EXCEL',
        csvExport: 'CSV',

        FeildIsRequired: 'تمام فیلدها الزامی می باشد',

        /** multi select option*/
        noResult: 'نتیجه ای یافت نشده',
        select: 'انتخاب کنید',

        empty: 'عدم مقدار دهی',

        day: ' روز ',
        hour: ' ساعت ',
        minute: ' دقیقه ',
        secend: ' ثانیه ',

        percentage: ' درصد ',
        call: ' تماس ',
        person: ' نفر ',



        // روزهای هفته
        Saturday: 'شنبه',
        Sunday: 'یک شنبه',
        Monday: 'دو شنبه',
        Tuesday: 'سه شنبه',
        Wednesday: 'چهار شنبه',
        Thursday: 'پنج شنبه',
        Friday: 'جمعه',
        /** گزارش اطلاعات در بالای تمام صفحات سمت راست */
        report: {
            queue: 'صف ',
            title: 'گزارش اطلاعات',
            fromFilter: ' تاریخ شروع',
            toFilter: ' تاریخ پایان',
            range: 'بازه زمانی',
        },

        /** event */
        ABANDON: 'از دست رفته',
        AGENTDUMP: 'AGENTDUMP',
        AGENTLOGIN: 'ورود کارشناس',
        AGENTCALLBACKLOGIN: 'ورود کارشناس کال بک',
        AGENTLOGOFF: 'خروج کارشناس',
        AGENTCALLBACKLOGOFF: 'خروج کارشناس کال بک',
        COMPLETEAGENT: 'پایان مکالمه توسط کارشناس',
        COMPLETECALLER: 'پایان مکالمه توسط مشتری',
        CONFIGRELOAD: 'بارگزاری تنظیمات',
        CONNECT: 'آغاز مکالمه',
        ENTERQUEUE: 'ورود به صف',
        EXITWITHKEY: 'خروج با وارد کردن عدد',
        EXITWITHTIMEOUT: 'خروج به محض پایان مهلت انتظار',
        QUEUESTART: 'شروع به کار صف',
        SYSCOMPAT: 'SYSCOMPAT',
        TRANSFER: 'انتقال مکالمه',
        PAUSE: 'شروع وقفه',
        UNPAUSE: 'پایان وقفه',
        ADDMEMBER: 'افزودن کارشناس',
        REMOVEMEMBER: 'حذف کارشناس',
        RINGNOANSWER: 'عدم پاسخگویی',
        RINGCANCELED: 'لغو زنگ خوردن',

        /**THEME**/
        lightTheme: 'پوسته روشن',
        darkTheme: 'پوسته تیره',
        orangeTheme: 'پوسته نارنجی',
        blueTheme: 'پوسته آبی',

        // btns labale
        btnSave: 'ذخیره ',
        btnBack: 'برگشت',
        btnRemove: 'حذف',
        btnEdit: 'ویرایش',
        btnAdd: 'افزودن',
        btnCancel: 'انصراف',
        btnOperation: 'عملیات',

        CHOOSE_FILE: "فایل مورد نظر را انتخاب کنید",
        CHOOSE_MULTISELECT: "انتخاب کنید",

    },

    // The title and link of the navigation buttons on the top page
    ANCHORS: {
        distribution: {
            detail: 'خانه',
            waitByDate: 'توزیع بر روز',
            waitByTime: 'توزیع بر ساعت',
            chartAnswered: 'توزیع بر ساعت/نمودار',
            chartTimeAnswered: 'توزیع میانگین مکالمه',
            chartDelayAnswered: 'توزیع میانگین انتظار',
            answeredInWeek: 'توزیع بر روی هفته',
            chartAnsweredWeek: 'توزیع بر روی هفته/نمودار',
            chartTimeAnsweredWeek: 'توزیع میانگین مکالمه/روز هفته',
            answeredInMonth: 'توزیع بر ماه',
        },
        answered: {
            detail: 'خانه',
            answered: 'پاسخ داده شده/کارشناس',
            service: 'پاسخ داده شده/سطح سرویس',
            queueAnswered: 'پاسخ داده شده بر صف',
            hangUp: 'دلیل قطع شدن مکالمات',
            answeredByCallLength: 'پاسخ داده شده مدت مکالمه',
            answeredTransfer: 'تماس های متقل شده',
            answeredCallsDetail: 'پاسخ داده شده/جزئیات تماس',

        },
        unAnswered: {
            detail: 'خانه',
            hangUp: 'بدون پاسخ/دلیل',
            queueUnAnswered: 'بدون پاسخ بر صف',
            unAnsweredCallsDetail: 'بدون پاسخ/جزئیات'
        },
        operator: {
            detail: 'خانه',
            agent: 'کارشناس/دسترسی پذیری',
            pause: 'کارشناس/وقفه',
            disposition: 'کارشناس/نتیجه تماس',
            report: 'کارشناس/جزئیات تماس',
        }

    },

    /** Setting PAGE */
    SETTING: {
        /** main titile */
        title: 'تنظیمات',

        /** backup   */
        backup: {
            GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
            title: 'نسخه پشتیبان',
            content: 'برای گرفتن نسخه پشتیبان و حذف داده های قدیمی بر روی دکمه گرفتن خروجی کلیک کنید ',
            btn: 'گرفتن خروجی'
        },
        /** lang   */
        lang: {
            GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
            title: 'زبان برنامه',
            content: 'انتخاب زبان',
            btn: ' تغییر زبان'
        },

        theme: {
            content: 'پوسته گزارشگیری را به روشن یا تاریک تغییر بدهید',
            title: 'انتخاب پوسته',
            btn: ' روشن/تیره'
        },

    },
    /** ---------------------------------End public -------------------------------------------- */


    /** -----------------------------------------Start Stats translate ------------------------ */
    STATS: {

        /** HOME PAGE */
        HOME: {
            /** موجود */
            available: ' موجود',
            /** انتخاب */
            selected: '  انتخاب شده',
            /**انتخاب صف */
            queueTitle: ' انتخاب صف',


            /** راهنما صف */
            queueGuide: 'صف های مورد نظر خود را برای اعمال گزارشات انتخاب کنید.',
            // انتخاب کارشناس 
            agentTitle: '  انتخاب کارشناس ',
            /** راهنمای کارشناس */
            agentGuide: 'به صورت پیش فرض فقط کارشناس های تعریف شده در صف ها نمایش داده می شود، در صورت انتخاب گزینه نمایش همه، کارشناس های گذشته که در اکنون در صف نیستند نیز برای انتخاب نمایش داده می شوند.',
            /** check box show all agent */
            showAllAgent: 'نمایش همه',


            /** بازه زمانی را انتخاب کنید */
            shortCutTitle: ' بازه زمانی را انتخاب کنید',

            /** filter */
            today: ' امروز',
            yesterday: ' دیروز',
            currentWeek: ' این هفته',
            lastWeek: ' هفته گذشته',
            inMonth: ' این ماه',
            currentMonth: 'ماه جاری',
            last1Month: ' یک ماه گذشته',
            last3Month: ' سه ماه گذشته',
            last1Years : ' سال گذشته', 
            /** زمان  */
            fromTime: ' زمان شروع',
            toTime: ' زمان پایان',
            /** تاریخ */
            fromFilter: ' تاریخ شروع',
            toFilter: ' تاریخ پایان',


            // دکمه نمایش گزارش 
            btnSubmit: ' نمایش گزارش '
        },

        /** ANSWERED PAGE */
        ANS: {
            /** main titile */
            title: 'گزارش تماس های پاسخ داده شده',

            /** عنوان جزئیات  */
            detail: {
                title: 'تماس های پاسخ داده شده',
                answered: 'تماس های پاسخ داده شده :',
                avgTime: 'میانگین طول تماس :',
                time: 'مجموع مدت مکالمه :',
                avgDelay: 'میانگین زمان انتظار :',

            },
            /** Answered by Agent */
            agent: {
                GUIDE: 'گزارش جزئیات تماس های پاسخ داده شده توسط هر کارشناس',
                title: ' تماس های پاسخ داده شده توسط کارشناس ',
                agent: ' نام کارشناس ',
                received: ' تعداد مکالمه ',
                completed: ' ',
                transferred: ' ',
                pCalls: ' درصد تعداد مکالمه ',
                time: ' مدت مکالمه ',
                pTime: ' درصد مدت مکالمه ',
                avgTime: ' میانگین مدت مکالمه ',
                ringTime: ' ',
                wait: ' زمان انتظار ',
                avgWait: ' میانگین زمان انتظار ',
                maxWait: ' '
            },
            /** Answered by Queue */
            queue: {
                GUIDE: 'گزارش ',
                title: 'تماس های پاسخ داده شده توسط صف',
                queue: 'صف',
                received: 'تعداد',
                pCalls: ' درصد تعداد مکالمه ',
            },
            /** Service Level */
            service: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'سطح سرویس',
                answered: 'پاسخ',
                count: 'تعداد',
                pCount: 'درصد پاسخ',
                delta: 'دلتا',
                lessThan: 'کمتر از',
            },
            // Disconnection Cause
            disconnection: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'دلیل قطع شدن مکالمه',
                received: 'تعداد',
                event: 'دلیل',
                pCount: 'درصد پاسخ',
                hangUp: 'قطع مکالمه توسط',
                agent: 'کارشناس',
                caller: 'مشتری'
            },
            // Answered by Call Length
            byTime: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'تماس های پاسخ داده شده بر اساس مدت مکالمه',
                duration: 'مدت مکالمه',
                received: 'تعداد تماس ها',
                completed: 'پاسخ داده شده',
                transferred: 'انتقال داده شده',
                pCount: 'درصد پاسخ',
                time: 'مدت مکالمه',
                pTime: 'درصد مکالمه',
                avgTime: 'میانگین مکالمه',
                wait: ' مدت انتظار',
                avgWait: 'میانگین انتظار',
                maxWait: 'حداکثر انتظار'
            },
            /** Transfers Calls */
            transfers: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'تماس های منتقل شده',
                agent: 'نام کارشناس',
                to: 'انتقال به',
                count: 'تعداد',
            },
            // Answered Calls Detail
            ansDetail: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'جزئیات تماس های پاسخ داده شده',
                duration: 'تاریخ ',
                queue: 'صف',
                agent: ' نام کارشناس',
                event: 'رویداد',
                ringTime: 'زمان زنگ زدن',
                time: 'مدت مکالمه',
                wait: ' مدت انتظار',
                action: ' عملیات ',
                voice: 'فایل صوتی مکالمه',
                phone: 'شماره مشتری',
            },


        },

        /** UnAnswered PAGE */
        UN_ANS: {
            /** main titile */
            title: 'گزارش تماس های بدون پاسخ',

            /** عنوان جزئیات  */
            detail: {
                title: 'تماس های بدون پاسخ',
                unAnswered: 'تعداد تماس بدون پاسخ',
                delay: ' میانگین مدت انتظار قبل از قطع تماس',
                num: 'میانگین نوبت هنگام ورود به صف',
                avgDelay: '  میانگین زمان انتظار ',
            },
            // Disconnection Cause
            disconnection: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'دلیل قطع شدن تماس',
                received: 'تعداد',
                event: 'دلیل',
                pCount: 'درصد ',
                RINGCANCELED: 'انصراف از سمت مشتری',
                EXITWITHTIMEOUT: 'محدودیت زمانی صف',
                EXITWITHKEY: 'انصراف با زدن کلید',
                EXITEMPTY: 'نبود کارشناس',

            },
            //    تماس های بدون پاسخ  در صف 
            queue: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'تماس های بدون پاسخ در صف',
                received: 'تعداد',
                queue: 'صف',
                pCount: 'درصد ',
            },
            //    جزئیات تماس
            ansDetail: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'جزئیات تماس های بدون پاسخ',
                duration: 'تاریخ و زمان',
                queue: 'صف',
                phone: 'شماره تماس گیرنده',
                event: 'رویداد',
                EndPosition: 'موقعیت هنگام خروج',
                StartPosition: 'موقعیت هنگام ورود',
            },

        },

        /** DISTRIBUTION PAGE */
        DIS: {
            title: 'گزارش آمار توزیع تماس ها',
            /** عنوان جزئیات  */
            detail: {
                title: 'مجموع',
                answered: ' تعداد تماس پاسخ داده شده:',
                unAnswered: 'تعداد تماس بدون پاسخ',
                login: 'ورود کارشناس',
                logout: 'خروج کارشناس',
            },
            // میانگین زمان انتظار در ساعت
            wait: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'میانگین زمان مکالمه و انتظار در روز',
                data: 'تاریخ',
                answered: 'پاسخ داده شده',
                pAnswered: ' درصد پاسخ داده شده',
                unAnswered: ' بدون پاسخ',
                pUnAnswered: ' درصد بدون پاسخ',
                avgTime: ' میانگین مدت مکالمه ',
                avgWait: ' میانگین زمان انتظار ',
                login: 'ورود ',
                logout: 'خروج ',

            },
            // پراکندگی تماس ها در ساعت
            dispersion: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'پراکندگی تماس ها در ساعت',
                time: 'ساعت',
                answered: 'پاسخ داده شده',
                pAnswered: ' درصد پاسخ داده شده',
                unAnswered: ' بدون پاسخ',
                pUnAnswered: ' درصد بدون پاسخ',
                avgTime: ' میانگین مدت مکالمه ',
                avgWait: ' میانگین زمان انتظار ',
                login: 'ورود ',
                logout: 'خروج ',
            },
            // پراکندگی تماس ها در روزهای هفته
            dispersionInWeek: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'پراکندگی تماس ها در روزهای هفته',
                day: 'روز',
                answered: 'پاسخ داده شده',
                pAnswered: ' درصد پاسخ داده شده',
                unAnswered: ' بدون پاسخ',
                pUnAnswered: ' درصد بدون پاسخ',
                avgTime: ' میانگین مدت مکالمه ',
                avgWait: ' میانگین زمان انتظار ',
                login: 'ورود ',
                logout: 'خروج ',
            },
            // پراکندگی تماس ها در ماه
            dispersionInMonth: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'پراکندگی تماس ها در ماه',
                month: 'ماه',
                answered: 'پاسخ داده شده',
                pAnswered: ' درصد پاسخ داده شده',
                unAnswered: ' بدون پاسخ',
                pUnAnswered: ' درصد بدون پاسخ',
                avgTime: ' میانگین مدت مکالمه ',
                avgWait: ' میانگین زمان انتظار ',
                login: 'ورود ',
                logout: 'خروج ',
            },
            //نمودار پاسخ داده شده / بدون پاسخ در ساعت
            chartAnswered: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'پاسخ داده شده / بدون پاسخ در ساعت',
                answered: 'پاسخ داده شده',
                unAnswered: 'پاسخ داده نشده',
            },
            // نمودار میانگین زمان صحبت در ساعت
            chartTimeAnswered: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'میانگین زمان صحبت در ساعت',
                avgTime: 'متوسط زمان صحبت',
            },
            // نمودار میانگین زمان انتظار در ساعت
            chartDelayAnswered: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'میانگین زمان انتظار در ساعت',
                avgDelay: 'متوسط زمان انتظار',
            },
            // نمودار پاسخ به تماس ها براساس روزهای هفته
            chartAnsweredWeek: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: ' پاسخ به تماس ها براساس روزهای هفته',
                count: 'تعداد',
            },
            //  نمودار میانگین مدت تماس براساس روزهای هفتهای هفته
            chartTimeAnsweredWeek: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'میانگین مدت مکاله بر اساس روز های هفته',
                avgAnswered: 'متوسط زمان پاسخگویی',
            },
        },

        /** OPERATOR PAGE */
        OPERATOR: {
            /** main titile */
            title: 'کارشناس ها',

            /** عنوان جزئیات  */
            detail: {
                title: 'مجموع',
                Agents: 'تعداد کارشناس',
                avgSession: 'میانگین مدت حضور',
                shortestSession: 'کوتاه ترین مدت حضور',
                longestSession: 'بیشترین میزان حضور',
                totalSession: 'جمع کل حضور',
                undefine: 'نا مشخص'
            },
            // Agent Availability
            agent: {
                GUIDE: 'اطلاعات کلی در خصوص میزان دسترسی پذیری و فعالیت کارشناس ها',
                title: 'دسترس پذیری کارشناس',
                aht: 'AHT',
                idleTime: 'زمان بیکاری',
                holdTime: 'زمان انتظار',
                wrapupTime: 'زمان جمع بندی',
                talkTime: 'زمان مکالمه',
                pauseTime: 'زمان وقفه',
                pauses: 'وقفه',
                pSession: '% حضور',
                sessionTime: 'زمان حضور',
                sessions: 'حضور',
                failedOut: 'شکست خورده',
                failed: 'بدون پاسخ',
                UnSuccessful: 'بدون پاسخ یکتا',
                rejected: 'رد تماس',
                failedUnique: 'بدون پاسخ یکتا',
                rejectedUnique: 'رد تماس یکتا',
                answered: 'پاسخ داده ',
                agent: 'کارشناس'
            },
            /** Pause Detail */
            pause: {
                GUIDE: 'گزارش جزئیات وقفعه های گرفته شده',
                title: 'جزئیات وقفه',
                agent: 'کارشناس',
                total: 'مجموع',
            },
            /** Call Disposition by Agent */
            answered: {
                GUIDE: 'گزارش بر اساس نتیجه یک مکالمه',
                title: 'مدیریت تماس توسط کارشناس',
                agent: 'کارشناس',
                completeByCaller: 'پایان تماس توسط مشتری',
                completeByAgent: 'پایان تماس توسط کارشناس',
                transfer: 'انتقال مکالمه',
                failed: 'ناموفق',
                rejected: 'رد تماس',
                failedOut: 'شکست خورده',
            },
            // Full Agent Report
            report: {
                GUIDE: 'گزارشی کامل از تمامی اتفاقاتی که برای یک کارشناس افتاده است.',
                title: 'گزارش کامل کارشناس',
                date: 'تاریخ',
                data1: 'داده',
                queue: 'صف',
                agent: 'کارشناس',
                event: 'رویداد',
                duration: 'مدت زمان',
                callid: 'callid',

            }
        },

        /** SEARCH PAGE */
        SEARCH: {
            /** main titile */
            title: 'جستجوی پیشرفته',
            /** box search */
            search: {
                GUIDE: "راهنمای جستجو",
                title: 'جستجو',
                date: 'تاریخ',
                queue: 'صف',
                agent: 'کارشناس',
                event: 'رویداد',
                wait: 'زمان انتظار',
                time: 'زمان مکالمه',
                number: 'شماره',
                callid: 'شناسه تماس',
            }
        },
    },
    /** -----------------------------------------End Stats translate ------------------------ */

    /** -----------------------------------------start Irouting translate ------------------------ */
    IROUTING: {
        IROUTING: {
            TITLE: "تنظیمات",
            ROUTE_NAME: "مسیریابی",
            INTRODUCTION: "معرفی",
            TIMESPAN: "بازه زمانی",
            STATUS: "وضعیت",
            OPERATIONS: 'عملیات',
            ENABLE: "فعال",
            DISABLE: "غیر فعال",
            All_NUM: "همه اعداد",
        },
        EDIT_IROUTING: {
            EDIT: "آخرین مکالمه به شرکت",
            CURRENT_DAY: "روز جاری",
            A_WEEK: "یک هفته",
            A_MONTH: "یک ماه",
            A_YEAR: "یک سال",
            UNLIMITED: "بدون محدودیت",
            ENTER_A_DAY: "لطفا روز مورد نظرتان را وارد نمایید",
            PROMPT1: "فایل صوتی یک",
            PROMPT2: "فایل صوتی دو-A",
            PROMPT3: "فایل صوتی دو-B",
            INITIAL_SETTINGS: "فایل پیش فرض",
            BACK: "بازگشت",
            WAIT: "منتظر بمانید",
            MISSION_COMPLETE: "عملیات با موفقیت انجام شد",
            THE_DAY_BEFORE: 'روز گذشته',
            FORMAT_FILE: "فرمت فایل های صوتی باید wav, 8Khz, Mono, 16-Bitباشد.",
            FILE_UPLOADED: "فایل شما با موفقیت اپلود شد"
        },
    },
    /** -----------------------------------------End Irouting translate ------------------------ */

    /** -----------------------------------------Start NumberFormat translate ------------------------ */
    NumberFormat: {
        GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
        title: 'تنظیمات',
        DESCRIPTION: "توضیحات",
        OPERATION: "عملیات"
    },
    /** -----------------------------------------End NumberFormat translate ------------------------ */

    /** -----------------------------------------Start Automatic Call translate ------------------------ */
    AutomaticCall: {
        title: 'تماس خودکار',
        INDEX: {
            GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
            title: 'مدیریت کمپین های ایجاد شده',
            estatus: 'وضعیت',
            name: 'نام',
            rangeDate: 'بازه زمانی',
            trunk: 'ترانک',
            max_canales: 'حداکثر تماس همزمان',
            context: 'کانتکست',
            queue: 'صف',
            retries: 'تعداد تلاش',
            operate: 'تنظیمات',
            create: 'افزودن',
            listCall: 'لیست شماره ها',
            purposeCall: 'مقصد تماس',
            dialPlan: 'دیال پلن',
            estatus: 'وضعیت',
            eStatusLabel_I: 'غیر فعال',
            eStatusLabel_A: 'فعال',
            eStatusLabel_T: 'پایان یافته',
        },
        EditAdd: {
            GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
            title: 'تنظیمات کمپین',
            titleEdit: 'ویرایش کمپین',
            titleAdd: 'ایجاد کمپین جدید',
            purposeCall: 'مقصد تماس',
            dialPlan: 'دیال پلن',
            datetime_init: 'تاریخ شروع',
            datetime_end: 'تاریخ پایان',
            daytime_init: 'زمان شروع',
            daytime_end: 'زمان پایان',

        },
        ListCall: {
            GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
            title: 'افزودن شماره تماس',
            typeFile: 'نوع ورود اطلاعات را مشخص نمائید',
            subTitle: 'افزودن لیست شماره تماس های مخاطبین به کمپین',
            custom: 'وارد کردن دستی',
            csv: 'فایل CSV',
            listUsersCustome: 'لیست شماره ها',
            guidCustomListUset: 'بعد از وارد نمودن هر شماره یک Enter بزنید',
            listUsersCsv: 'فایل CSV حاوی شماره تلفن ها',
            guidCsvListUset: 'شماره تلفن ها را در ستون اول فایل CSV وارد نمائید ',
            errorUpload: 'محتوای فایل CSV صحیح نمی باشد'

        }
    },
    /** -----------------------------------------End Automatic Call translate ------------------------ */

    /** -----------------------------------------Start SURVEY translate ------------------------ */
    SURVEY: {
        title: 'تماس خودکار',
        Dashboard: {
            GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
            title: 'داشبورد',
        },
        OperatorChart: {
            GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
            title: 'نمودار اپراتور ',
            agent_name: 'نام کارشناس',
            agent_number: 'شماره اپراتور ',
            survey_location: 'شماره صف ',
            activityChartOfTheYearBar: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'نمودار فعالیت سال ',
                avg: 'میانگین',
            },
            activityChartOfTheYearPie: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'نمودار فعالیت سال ',
                avg: 'میانگین',
            },
            satisfactionChart: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'نمودار میزان رضایتمندی',
                precentage: 'درصد',
            },
            activityDiagramMonthlyBasis: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'نمودار فعالیت اپراتورها به صورت ماهیانه',
                precentage: 'درصد',
            }
        },
        Operator: {
            GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
            title: 'اپراتوها',
            agent_number: 'شماره اپراتور',
            survey_location: 'شماره صف',
            time: 'تاریخ آخرین نظر',
            average_survey: 'میانگین نظرسنجی',
            total_survey: 'جمع نظرسنجی',
            count_survey: 'تعداد نظرسنجی',
            satisfaction_percentage: 'درصد رضایتمندی',
        },
        Survey: {
            GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
            title: 'نظرسنجی',
            id: 'شناسه',
            uniqueid: 'شناسه یکتا',
            time: 'تاریخ و زمان',
            agent_number: 'شماره اپراتور',
            agent_name: 'نام کارشناس',
            caller_number: 'شماره تماس گیرنده',
            caller_name: 'نام تماس گیرنده',
            survey_value: 'مقدار نظرسنجی',
            customer_voice_path: 'صدای مکالمه',
            customer_message: ' پیام مشتری',
            notMessage: 'بدون محتوا',
            Edit: {
                GUIDE: 'لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'نظرسنجی',
                titleEdit: 'ویرایش نظرسنجی',
                file: 'فایل صوتی',
            }

        },
        Setting: {
            GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
            title: 'تنظیمات',
            id: 'شناسه',
            survey_name: 'نام نظرسنجی',
            survey_status: 'وضعیت',
            survey_voice: 'فایل صوتی نظرسنجی',
            survey_string: 'مقدار نظرسنجی',
            survey_queue: 'صف',
            customer_voice_status: 'ضبط پیام مشتری',
            customer_voice_limit: 'سقف امتیاز برای ضبط پیام',
            survey_playagent: 'بیان شماره اپراتور',
            survey_playagent_label0: 'غیرفعال',
            survey_playagent_label1: 'شماره اپراتور',
            survey_playagent_label2: 'نام اپراتور',
            active: 'فعال',
            passive: 'غیر فعال',
            Edit: {
                GUIDE: '  لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد',
                title: 'تنظیمات',
                titleEdit: 'ویرایش',
                titleAdd: 'افزودن',
                file: 'فایل صوتی',
                btnDefaultVoice: 'فایل پیش فرض',
                defaultVoice: 'برای اعمال تغیییرات بر روی دکمه ذخیره کلیک کنید'
            }
        }





    },
    /** -----------------------------------------End SURVEY translate ------------------------ */


    /** -----------------------------------------Start Auth translate ------------------------ */

    AUTH: {
        Users: {
            Index: {
                GUIDE: "لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد",
                title: "مدیریت کاربران",
                user_name: "نام کاربری",
                full_name: "نام و نام خانوادگی",
                roles: "نقش",
                created_at: "تاریخ ایجاد",
                password: "رمز عبور",
                repeatPassword: "تکرار رمز عبور",
                email: "آدرس ایمیل",
                tel: "تلفن",
                mobile: "شماره همراه",
                internal_tel: "شماره داخلی",
            },
            Edit: {
                title: "مدیریت کاربران",
                titleAdd: "افزودن کاربر",
                titleEdit: "ویرایش کاربر",
                GUIDE: "لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد",
                roles: "نقش",
                guideChangePassword: "درصورتی که قصد تغییر رمز را دارید رمز مورد نظر را وارد نمایید",
                errorRepeatPassword: "رمز عبور با تکرار رمز عبور مغایرت دارد",
                ErrorPassword: "رمز عبور نباید از هشت کاراکتر کمتر باشد",
                ErrorRepeatPassword: "تکرار رمز عبور نباید از هشت کاراکتر کمتر باشد ",
            },
        },
        Roles: {
            Index: {
                title: "مدیریت نقش ها",
                id: "شناسه",
                name: "نام",
                created_at: "تاریخ ایجاد ",
                GUIDE: "لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد"
            },
            Edit: {
                title: "مدیریت نقش ها",
                titleAdd: "افزودن نقش",
                titleEdit: "ویرایش نقش"
            }
        },
        Permission: {
            Index: {
                title: "مدیریت مجوز ها",
                id: "شناسه",
                name: "نام",
                created_at: "تاریخ ایجاد ",
                GUIDE: "لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد"
            },
            Edit: {
                title: "مدیریت مجوز ها",
                titleAdd: "افزودن مجوز",
                titleEdit: "ویرایش مجوز"
            },
            ListPermission: {
                dashboard: "داشبورد",
                number_formatter: "اصلاح شماره تماس گیرنده",
                setting: "تنظیمات",
                survey: "نظرسنجی",
                irouting: "مسیریابی هوشمند",
                automatic_call: "تماس های خودکار",
                voipiranMainSite: "لینک ویپ ایران",
                call_stat_plus: "گزارش تماس ها",
                iroutings: {
                    index: "مسیریابی هوشمند",
                    edit: "ویرایش مسیریابی هوشمند",

                },
                surveyChild: {
                    survey: {
                        index: "گزارش نظرسنجی",
                        edit: "ویرایش  گزارش نظرسنجی",
                        remove: "حذف  گزارش نظرسنجی"
                    },
                    operator: "گزارش اپراتورها",
                    setting: "تنظیمات نظرسنجی"
                },
                licence: {
                    index: "مدیریت لایسنس ها",
                    add: "افزودن لایسنس"
                },
                auth: {
                    index: "نمایش کاربران-مجوزها-نقش ها",
                    users: {
                        index: "مدیریت کاربران",
                        add: "افزودن کاربر",
                        edit: "ویرایش کاربر",
                        remove: "حذف کاربر"
                    },
                    roles: {
                        index: "مدیریت نقش ها",
                        remove: "حذف نقش",
                        add: "افزودن نقش",
                        edit: "ویرایش نقش"
                    },
                    permission: {
                        index: "مدیریت مجوز ها",
                        remove: "حذف مجوز ",
                        add: "افزودن مجوز ",
                        edit: "ویرایش مجوز "
                    },

                },
                stats: {
                    index: "گزارش تماس",
                    distribution: "آمار توزیع تماس",
                    operator: "آمار کارشناس",
                    answered: "تماس های پاسخ داده شده",
                    unAnswered: "تماس های بدون پاسخ",
                    search: "جستجوی گزارشات",
                    realTime: 'نمایش زنده',
                },
                automatic_calls: {
                    showList: "لیست شماره ها",
                    add: "افزودن تماس",
                    remove: "حذف تماس ",
                    edit: "ویرایش تماس"
                }
            }
        }
    },
    LICENCE: {
        Index: {
            title: "مدیریت لایسنس ها",
            app_name: "نام لایسنس",
            GUIDE: "لورم ایپسوم یا طرح‌نما فیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن می باشد",
            type: "نوع لایسنس",
            app_verions: "ورژن",
            created_at: "تاریخ ایجاد",
            fullLicence: 'Full',
            liteLicence: 'Litle',
            trialLicence: 'Trial',
        },
        Create: {
            title: "مدیریت لایسنس ها",
            titleAdd: "افزودن لایسنس",
            license: "کد لایسنس"
        }
    }
}