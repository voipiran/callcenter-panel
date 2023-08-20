export default {
    /** ---------------------------------Start public -------------------------------------------- */

    /** GENERAL  */
    GENERAL: {
        NotifySubmitSuccess: 'mission accomplished ',

        // pagination and search table
        TODAY: "Today",
        YESTERDAY: "Yesterday",
        LAST_WEEK: "Last week",
        LAST_MONTH: "Last month",
        LAST_YEAR: "Last year",
        PLAY_AGENT_NUM: "Statement of agent number",
        ACCEPT_DIGIT: "Accept digit",
        PRIORITY: "Priority",
        AGENT_NUM_PERFIX: "Agent number",
        EDIT: "Edit",
        next: 'Next page',
        back: 'Previous page',
        firstPage: 'First page',
        LastPage: 'Last page',
        resetTime: 'The time period was changed to all hours of the day.',
        of: 'Of',
        all: 'All',
        page: 'Page',
        searchFeild: 'Search filed',
        rowsperpage: 'Rows perpage',

        /** list of Season */
        Season1: 'January',
        Season2: 'February',
        Season3: 'March',
        Season4: 'April',
        Season5: 'May',
        Season6: 'June',
        Season7: 'July',
        Season8: 'August',
        Season9: 'September',
        Season10: 'October',
        Season11: 'November',
        Season12: 'December',

        /** languge زبان */
        fa: 'Fa',
        en: 'En',
        message: 'Change language successfull',

        /** منوی اصلی */
        SideMenu: {
            Dashboard: {
                mainTitle: 'Dashboard',
            },
            Auth: {
                mainTitle: 'User management',
                users: 'User managemen',
                roles: 'Roles management',
                permission: 'Permission management',
            },
            Stats: {
                mainTitle: 'Call report',
                home: 'Filter selection',
                answered: 'Answered calls',
                unAnswered: 'Unanswered calls',
                distribution: 'Distribution',
                operator: 'Operator',
                search: 'Search',
                realTime: 'Real time',
            },
            Irouting: { mainTitle: 'Smart routing' },
            Setting: { mainTitle: 'Setting' },
            NumberFormat: { mainTitle: 'Modify the caller number' },
            AutomaticCall: {
                mainTitle: 'Automatic call',
                index: 'Campaign management'
            },
            Survey: {
                mainTitle: 'Survey',
                dashboard: 'Dashboard',
                survey: 'Survey report',
                operator: 'Operator report',
                setting: 'Setting',
            },
            Voipiran: {
                mainTitle: 'Voipiran'
            },
            Licence: {
                mainTitle: 'Licence management',
            }
        },

        /** tool tip export pdf, excel and csv */
        pdfExport: 'PD',
        excelExport: 'EXCE',
        csvExport: 'CS',

        FeildIsRequired: 'All fields are require',

        /** multi select option*/
        noResult: 'No results found',
        select: 'Please select',

        empty: 'Empty',

        day: 'Day ',
        hour: 'Hour',
        minute: 'Minute',
        secend: 'Second',

        percentage: 'Percentage',
        call: 'Call',
        person: 'Person',



        //  days of week
        Saturday: 'Saturday',
        Sunday: 'Sunday',
        Monday: 'Monday',
        Tuesday: 'Tuesday',
        Wednesday: 'Wednesday',
        Thursday: 'Thursday',
        Friday: 'Friday',
        /** Report information at the top of all pages on the right */
        report: {
            queue: 'Queue',
            title: 'Report information',
            fromFilter: 'Start date',
            toFilter: 'End date',
            range: 'Range of time',
        },

        /** event */
        ABANDON: 'Abandon',
        AGENTDUMP: 'Agentdump',
        AGENTLOGIN: 'Login agent',
        AGENTCALLBACKLOGIN: 'Entry of callback agent',
        AGENTLOGOFF: 'Logout agent',
        AGENTCALLBACKLOGOFF: 'Exit callback agent',
        COMPLETEAGENT: 'The end of the conversation by the agent',
        COMPLETECALLER: 'End of conversation by customer',
        CONFIGRELOAD: 'Load settings',
        CONNECT: 'Start conversation',
        ENTERQUEUE: 'Enter to queue',
        EXITWITHKEY: 'Exit by entering a number',
        EXITWITHTIMEOUT: 'Exit as soon as the waiting period ends',
        QUEUESTART: 'Start queue',
        SYSCOMPAT: 'SYSCOMPA',
        TRANSFER: 'Transfer conversation',
        PAUSE: 'Pause',
        UNPAUSE: 'Unpause',
        ADDMEMBER: 'Add agent',
        REMOVEMEMBER: 'Delete agent',
        RINGNOANSWER: 'Unresponsive',
        RINGCANCELED: 'Cancel ringing',

        /**THEME**/
        lightTheme: 'Light Theme',
        darkTheme: 'Dark Theme',
        orangeTheme: 'Orange Them',
        blueTheme: 'Blue Theme',

        // btns labale
        btnSave: 'Save',
        btnBack: 'Back',
        btnRemove: 'Remove',
        btnEdit: 'Edit',
        btnAdd: 'Add',
        btnCancel: 'Cancle',
        btnOperation: 'Operation',
        CHOOSE_FILE: "Choose file",
        CHOOSE_MULTISELECT: "Choose multiselect",

    },

    // The title and link of the navigation buttons on the top page
    ANCHORS: {
        distribution: {
            detail: 'Home',
            waitByDate: 'Distribution per day',
            waitByTime: 'Distribution per hour',
            chartAnswered: 'Distribution by hour/chart',
            chartTimeAnswered: 'Distribution of average conversation',
            chartDelayAnswered: 'Expected mean distribution',
            answeredInWeek: 'Distributed over the week',
            chartAnsweredWeek: 'Distribution on week/chart',
            chartTimeAnsweredWeek: 'Average conversation/weekday distribution',
            answeredInMonth: 'Distribution by month',
        },
        answered: {
            detail: 'Home',
            answered: 'Answered/agent',
            service: 'Response/service level',
            queueAnswered: 'Answer given on the queue',
            hangUp: 'The reason for the interruption of conversations',
            answeredByCallLength: 'Answered conversation duration',
            answeredTransfer: 'Broken calls',
            answeredCallsDetail: 'Answered/contact details',

        },
        unAnswered: {
            detail: 'Home',
            hangUp: 'No response/reason',
            queueUnAnswered: 'No response on queue',
            unAnsweredCallsDetail: 'No response/details '
        },
        operator: {
            detail: 'Home',
            agent: 'Expertise/availability',
            pause: 'Expert/interruption',
            disposition: 'Expert/call result',
            report: 'Expert/Contact Details',
        }

    },

    /** Setting PAGE */
    SETTING: {
        /** main titile */
        title: 'Setting',

        /** backup   */
        backup: {
            GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
            title: 'Backup',
            content: 'Click the export button to take a backup and delete old data',
            btn: 'Export '
        },
        /** lang   */
        lang: {
            GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
            title: 'Program language',
            content: 'Select language',
            btn: 'Change language '
        },

        theme: {
            content: 'Change the reporting theme to light or dark',
            title: 'Select theme',
            btn: 'Dark/light '
        },

    },
    /** ---------------------------------End public -------------------------------------------- */


    /** -----------------------------------------Start Stats translate ------------------------ */
    STATS: {

        /** HOME PAGE */
        HOME: {
            /** Available */
            available: 'Available',
            /** Selected */
            selected: 'Selected',
            /**Select queue */
            queueTitle: 'Select queue',


            /** queueGuide */
            queueGuide: 'Select the queues you want for reports.',
            // agentTitle 
            agentTitle: 'Select agent',
            /** agentGuide */
            agentGuide: 'By default, only the agents defined in the queues are displayed, if you select the show all option, the past agents who are not currently in the queue are also displayed for selection.',
            /** check box show all agent */
            showAllAgent: 'Show all',


            /** Select a time frame */
            shortCutTitle: 'Select a time frame',

            /** filter */
            today: 'Today',
            yesterday: 'Yesterda',
            currentWeek: "Current week",
            lastWeek: "Last week",
            inMonth: "In month",
            currentMonth: "Current month",

            last1Month: "Last one month",
            last3Month: "Last three month",
            last1Years: 'Last one years',
            /** time  */
            fromTime: "From time",
            toTime: "To time",
            /** date */
            fromFilter: "From filter",
            toFilter: 'To filte',


            // btn sub report 
            btnSubmit: 'Submit '
        },

        /** ANSWERED PAGE */
        ANS: {
            /** main titile */
            title: 'Report of answered calls',

            /**  title detail  */
            detail: {
                title: 'Answered calls',
                answered: 'Answered calls :',
                avgTime: 'Average call length :',
                time: 'The total duration of the conversation :',
                avgDelay: 'Average waiting time :',

            },
            /** Answered by Agent */
            agent: {
                GUIDE: 'Report details of calls answered by each agent',
                title: 'Calls answered by an agent',
                agent: 'Name of the agent',
                received: 'Number of conversations',
                completed: '',
                transferred: '',
                pCalls: 'The percentage of the number of conversations',
                time: 'Conversation duration',
                pTime: 'The percentage of conversation time',
                avgTime: 'Average conversation duration',
                ringTime: '',
                wait: 'Waiting time',
                avgWait: 'Average waiting time',
                maxWait: ''
            },
            /** Answered by Queue */
            queue: {
                GUIDE: 'Report',
                title: 'Calls answered by the queue',
                queue: 'Queue',
                received: 'Count',
                pCalls: 'The percentage of the number of conversations',
            },
            /** Service Level */
            service: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Service level',
                answered: 'Answered',
                count: 'Count',
                pCount: 'Response percentage',
                delta: 'Delta',
                lessThan: 'LessThan',
            },
            // Disconnection Cause
            disconnection: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'The reason for the conversation being interrupted',
                received: 'Count',
                event: 'Reason',
                pCount: 'Response percentage',
                hangUp: 'Interrupt the conversation by',
                agent: 'Agent',
                caller: 'Customer'
            },
            // Answered by Call Length
            byTime: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Answered calls based on conversation duration',
                duration: 'Conversation duration',
                received: 'Number of calls',
                completed: 'Answered',
                transferred: 'Transferred',
                pCount: 'Response percentage',
                time: 'Conversation duration',
                pTime: 'Conversation percentage',
                avgTime: 'Average conversation',
                wait: 'Waiting period',
                avgWait: 'Average Expectation',
                maxWait: 'Maximum expectation'
            },
            /** Transfers Calls */
            transfers: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Transferred calls',
                agent: 'Name of the agent',
                to: 'Transfer to',
                count: 'Count',
            },
            // Answered Calls Detail
            ansDetail: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Details of answered calls',
                duration: 'Date',
                queue: 'Queue',
                agent: 'Name of the agent',
                event: 'Event',
                ringTime: 'Call time',
                time: 'Conversation duration',
                wait: 'Waiting period',
                action: 'Operation',
                voice: 'Voice',
                phone: 'Customer number',
            },


        },

        /** UnAnswered PAGE */
        UN_ANS: {
            /** main titile */
            title: 'Report missed calls',

            /**  title details  */
            detail: {
                title: 'Unanswered calls',
                unAnswered: 'Number of unanswered',
                delay: 'Average waiting time before disconnection',
                num: 'Average turn when entering the queue',
                avgDelay: 'Average waiting time',
            },
            // Disconnection Cause
            disconnection: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Reason for disconnection',
                received: 'Count',
                event: 'Reason',
                pCount: 'Precentage',
                RINGCANCELED: 'Reason for disconnection',
                EXITWITHTIMEOUT: 'Queue time limit',
                EXITWITHKEY: 'Cancel by pressing the key',
                EXITEMPTY: 'Lack of agent',

            },
            //    Unanswered calls in queue 
            queue: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Unanswered calls in queue',
                received: 'Count',
                queue: 'Queue',
                pCount: 'Precentage',
            },
            //    call detail
            ansDetail: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Details of unanswered calls',
                duration: 'Date and time',
                queue: 'Queue',
                phone: 'Caller number',
                event: 'Event',
                EndPosition: 'Exit position',
                StartPosition: 'Position on arrival',
            },

        },

        /** DISTRIBUTION PAGE */
        DIS: {
            title: 'Call distribution statistics report',
            /** title detail  */
            detail: {
                title: 'Total',
                answered: 'Number of calls answered',
                unAnswered: 'Number of calls unanswered',
                login: 'Login agent',
                logout: 'Logout agent',
            },
            // waiting time
            wait: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Average talk and waiting time per day',
                data: 'Date',
                answered: 'Answered',
                pAnswered: 'Percentage of responses',
                unAnswered: "No Answer",
                pUnAnswered: 'Precentage of unanswered',
                avgTime: 'Average conversation duration',
                avgWait: 'Average waiting time',
                login: 'Login',
                logout: 'Logout',

            },
            // Dispersion of calls per hour 
            dispersion: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Dispersion of calls per hour',
                time: 'Hour',
                answered: 'Answered',
                pAnswered: 'Percentage of responses',
                unAnswered: "No answer",
                pUnAnswered: 'Precentage of unanswere',
                avgTime: 'Average conversation duration',
                avgWait: 'Average waiting time',
                login: 'Login',
                logout: 'Logout',
            },
            // 
            dispersionInWeek: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Dispersion of calls on weekdays',
                day: 'Day',
                answered: 'Answered',
                pAnswered: 'Percentage of responses',
                unAnswered: "No answer",
                pUnAnswered: 'Precentage of unanswered',
                avgTime: 'Average conversation duration',
                avgWait: 'Average waiting time',
                login: 'Login',
                logout: 'Logout',
            },
            // dispersionInMonth
            dispersionInMonth: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Dispersion of calls per month',
                month: 'Month',
                answered: 'Answered',
                pAnswered: 'Percentage of responses',
                unAnswered: "No answerd",
                pUnAnswered: 'Precentage of unanswered',
                avgTime: 'Average conversation duration',
                avgWait: 'Average waiting time',
                login: 'Login',
                logout: 'Logout',
            },
            // chartAnswered
            chartAnswered: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Answered / No answer per hour',
                answered: 'Answered',
                unAnswered: 'UnAnswered',
            },
            // chartTimeAnswered
            chartTimeAnswered: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Average talk time per hour',
                avgTime: 'Avarage of call time',
            },
            //  chartDelayAnswered
            chartDelayAnswered: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Average waiting time per hour',
                avgDelay: 'Average waiting time',
            },
            // chartAnsweredWeek
            chartAnsweredWeek: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Answering calls based on days of the week',
                count: 'Count',
            },
            //  chartTimeAnsweredWeek
            chartTimeAnsweredWeek: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'The average duration of the article based on the days of the week',
                avgAnswered: 'Average response time',
            },
        },

        /** OPERATOR PAGE */
        OPERATOR: {
            /** main titile */
            title: 'Agent',

            /**   */
            detail: {
                title: 'Total',
                Agents: 'Count of agent',
                avgSession: 'Average duration of attendanc',
                shortestSession: 'The shortest duration of attendanc',
                longestSession: 'The longest duration of attendanc',
                totalSession: 'Total attendanc',
                undefine: 'Unknown'
            },
            // Agent Availability
            agent: {
                GUIDE: 'General information about the availability and activities of agent',
                title: 'Agent availability',
                aht: 'AH',
                idleTime: 'Idle time',
                holdTime: 'Waiting time',
                wrapupTime: 'Summary time',
                talkTime: 'Conversation time',
                pauseTime: 'Pause time',
                pauses: 'Pause',
                pSession: 'Presence',
                sessionTime: 'ََAttendance time',
                sessions: 'Presence',
                failedOut: 'Defeate',
                failed: 'No answer',
                UnSuccessful: 'No single answer',
                rejected: 'Reject',
                failedUnique: 'No single answer',
                rejectedUnique: 'Reject single answer',
                answered: 'Answered',
                agent: 'Agent'
            },
            /** Pause Detail */
            pause: {
                GUIDE: 'Report the details of the interruptions take',
                title: 'Break details',
                agent: 'Agent',
                total: 'Total',
            },
            /** Call Disposition by Agent */
            answered: {
                GUIDE: 'Report based on the outcome of a conversation',
                title: 'Call management by an agent',
                agent: 'Agent',
                completeByCaller: 'End of call by customer',
                completeByAgent: 'End of call by agent',
                transfer: 'Transfer the conversation',
                failed: 'Unsuccessful',
                rejected: 'Reject',
                failedOut: 'Defeate',
            },
            // Full Agent Report
            report: {
                GUIDE: 'A complete report of all the events that happened to an agent',
                title: 'Full agent report',
                date: 'Date',
                data1: 'Data',
                queue: 'Queue',
                agent: 'Agent',
                event: 'Event',
                duration: 'Duration',
                callid: 'Call id',
            }
        },

        /** SEARCH PAGE */
        SEARCH: {
            /** main titile */
            title: 'Advanced search',
            /** box search */
            search: {
                GUIDE: "GUIDE",
                title: 'Search',
                date: 'Date',
                queue: 'Queue',
                agent: 'Agent',
                event: 'Event',
                wait: 'Waiting time',
                time: 'Conversation time',
                number: 'Number',
                callid: 'Call Id',
            }
        },
    },
    /** -----------------------------------------End Stats translate ------------------------ */

    /** -----------------------------------------start Irouting translate ------------------------ */
    IROUTING: {
        IROUTING: {
            TITLE: "Routing",
            ROUTE_NAME: "Route name",
            INTRODUCTION: "Introduction",
            TIMESPAN: "Timespan",
            STATUS: "Status",
            OPERATIONS: 'Operation',
            ENABLE: "Enable",
            DISABLE: "Disable",
            All_NUM: "All number",
        },
        EDIT_IROUTING: {
            EDIT: "Last call to the company",
            CURRENT_DAY: "Current day",
            A_WEEK: "A week",
            A_MONTH: "A month",
            A_YEAR: "A year",
            UNLIMITED: "UnLimited",
            ENTER_A_DAY: "Enter a day",
            PROMPT1: "Prompt1",
            PROMPT2: "Prompt2",
            PROMPT3: "Prompt3",
            INITIAL_SETTINGS: "Default file",
            BACK: "Back",
            WAIT: "Wait",
            MISSION_COMPLETE: "Mission Complete",
            THE_DAY_BEFORE: 'Yesterday',
            FORMAT_FILE: "The format of audio files should be wav, 8Khz, Mono, 16-Bit",
            FILE_UPLOADED: "Your file has been successfully uploaded",
        },
    },
    /** -----------------------------------------End Irouting translate ------------------------ */

    /** -----------------------------------------Start NumberFormat translate ------------------------ */
    NumberFormat: {
        GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
        title: 'Setting',
        DESCRIPTION: "Description",
        OPERATION: "Operation"
    },
    /** -----------------------------------------End NumberFormat translate ------------------------ */

    /** -----------------------------------------Start Automatic Call translate ------------------------ */
    AutomaticCall: {
        title: 'Automatic call',
        INDEX: {
            GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
            title: 'Manage created campaigns',
            estatus: 'Status',
            name: 'Name',
            rangeDate: 'Range of date',
            trunk: 'Trun',
            max_canales: 'Maximum simultaneous call',
            context: 'Context',
            queue: 'Queue',
            retries: 'Retries',
            operate: 'Setting',
            create: 'Create',
            listCall: 'List of number',
            purposeCall: 'Call destination',
            dialPlan: 'Dial plan',
            estatus: 'Status',
            eStatusLabel_I: 'Disable',
            eStatusLabel_A: 'Enable',
            eStatusLabel_T: 'Finished',
        },
        EditAdd: {
            GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
            title: 'Campaign setting',
            titleEdit: 'Campaign editing',
            titleAdd: 'Create a new campaign',
            purposeCall: 'Call destination',
            dialPlan: 'Dial plan',
            datetime_init: 'Start date',
            datetime_end: 'End date',
            daytime_init: 'Start time',
            daytime_end: 'End time',

        },
        ListCall: {
            GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
            title: 'Add contact number',
            typeFile: 'Specify the type of login information',
            subTitle: 'Adding the contact number list to the campaign',
            custom: 'Custom',
            csv: 'File CS',
            listUsersCustome: 'List of number',
            guidCustomListUset: 'Press enter after entering each number',
            listUsersCsv: 'CSV file containing phone number',
            guidCsvListUset: 'Enter the phone numbers in the first column of the csv file',
            errorUpload: 'The content of the CSV file is not correct'

        }
    },
    /** -----------------------------------------End Automatic Call translate ------------------------ */

    /** -----------------------------------------Start SURVEY translate ------------------------ */
    SURVEY: {
        title: 'Automatic call',
        Dashboard: {
            GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
            title: 'Dashboard',
        },
        OperatorChart: {
            GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
            title: 'Chart of operator',
            agent_name: 'Full name',
            agent_number: 'Agent number',
            survey_location: 'Queue number',
            activityChartOfTheYearBar: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Activity chart of the year',
                avg: 'Avarage',
            },
            activityChartOfTheYearPie: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Activity chart of the year',
                avg: 'Avarage',
            },
            satisfactionChart: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Satisfaction graph',
                precentage: 'Precentage',
            },
            activityDiagramMonthlyBasis: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Operator activity chart on a monthly basis',
                precentage: 'Precentage',
            }
        },
        Operator: {
            GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
            title: 'Operator',
            agent_number: 'Agent number',
            survey_location: 'Queue number',
            time: 'Date of Registration',
            average_survey: 'Poll average',
            total_survey: 'Poll sum',
            count_survey: 'Counter of survey',
            satisfaction_percentage: 'Satisfaction percentage',
        },
        Survey: {
            GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
            title: 'Survey',
            id: 'Id',
            uniqueid: 'Unique id',
            time: 'Date and time',
            agent_number: 'Operator number',
            agent_name: 'Operator name',
            caller_number: 'Caller number',
            caller_name: 'Name of the caller',
            survey_value: 'Survey amount',
            customer_voice_path: 'Conversational voice',
            customer_message: 'Customer message',

            notMessage: 'No content',
            Edit: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Survey',
                titleEdit: 'Edit survey',
                file: 'Audio file',
            }

        },
        Setting: {
            GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
            title: 'Setting',
            id: 'Id',
            survey_name: 'Survey name',
            survey_status: 'Status',
            survey_voice: 'Survey audio file',
            survey_string: 'Survey amount',
            survey_queue: 'Queue',
            customer_voice_status: 'Recording customer message',
            customer_voice_limit: 'Maximum score for message recording',
            survey_playagent: 'Expression of operator number',
            survey_playagent_label0: 'Disable',
            survey_playagent_label1: 'Operator number',
            survey_playagent_label2: 'Operator name',
            active: 'Enable',
            passive: 'Disable',
            Edit: {
                GUIDE: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi magni quasi quibusdam earum praesentium voluptatum',
                title: 'Setting',
                titleEdit: 'Edit',
                titleAdd: 'Create',
                file: 'Audio file',
                btnDefaultVoice: 'Default Voice',
                defaultVoice: 'Click the Save button to apply the changes'
            }
        }





    },
    /** -----------------------------------------End SURVEY translate ------------------------ */


    /** -----------------------------------------Start Auth translate ------------------------ */

    AUTH: {
        Users: {
            Index: {
                title: "Title",
                user_name: "Username",
                full_name: "Fullname",
                roles: "Role",
                created_at: "Created_at",
                password: "Password",
                email: "email",
                tel: "tel",
                mobile: "mobile",
                internal_tel: "internal tel",
                GUIDE: "Guide",
                repeatPassword: "Repeat password",
            },
            Edit: {
                title: "Title",
                titleAdd: "TitleAdd",
                titleEdit: "TitleEdit",
                GUIDE: "Guide",
                roles: "Roles",
                guideChangePassword: "Guide change password",
                errorRepeatPassword: "Error repeat password",
                ErrorPassword: "Password must not be less than eight characters",
                ErrorRepeatPassword: "Error repeat password",
            },
        },
        Roles: {
            Index: {
                title: "Title",
                id: "Id",
                name: "Name",
                created_at: "Created_at",
                GUIDE: "Guide",
            },
            Edit: {
                title: "Title",
                titleAdd: "Title add",
                titleEdit: "Title edit",
            }
        },
        Permission: {
            Index: {
                title: "Title",
                id: "Id",
                name: "Name",
                created_at: "Created_at",
                GUIDE: "Guide",
            },
            Edit: {
                title: "Title",
                titleAdd: "Title add",
                titleEdit: "Title edit",
            },
            ListPermission: {
                dashboard: "Dashboard",
                number_formatter: "Modify the caller number",
                setting: "Setting",
                survey: "Survey",
                irouting: "Irouting",
                automatic_call: "Automatic call",
                voipiranMainSite: "Voipiran mainsite",
                call_stat_plus: "Call report",
                iroutings: {
                    index: "Index",
                    edit: "Edit",

                },
                surveyChild: {
                    survey: {
                        index: "Index",
                        edit: "Edit",
                        remove: "Remove",
                    },
                    operator: "Operator",
                    setting: "Setting",
                },
                licence: {
                    index: "Index",
                    add: "Add",
                },
                auth: {
                    index: "Index",
                    users: {
                        index: "Index",
                        add: "Add",
                        edit: "Edit",
                        remove: "Remove",
                    },
                    roles: {
                        index: "Index",
                        remove: "Remove",
                        add: "Add",
                        edit: "Edit",
                    },
                    permission: {
                        index: "Index",
                        remove: "Remove",
                        add: "Add",
                        edit: "Edit",
                    },

                },
                stats: {
                    index: "Index",
                    distribution: "Distribution",
                    operator: "Operator",
                    answered: "Answered",
                    unAnswered: "UnAnswered",
                    search: "Search",
                    realTime: 'Real time',
                },
                automatic_calls: {
                    showList: "ShowList",
                    add: "Add",
                    remove: "Remove",
                    edit: "Edit",
                }
            }
        }
    },
    LICENCE: {
        Index: {
            title: "Title",
            app_name: "License name",
            GUIDE: "Guide",
            type: "Type",
            app_verions: "Version",
            created_at: "Created_att",
            fullLicence: 'Full',
            liteLicence: 'Litle',
            trialLicence: 'Trial',
        },
        Create: {
            title: "Title",
            titleAdd: "Title add",
            license: "License",
        }
    }
}