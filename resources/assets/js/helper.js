/**momentTimeZonejs, jalaliMoment */
var moment_ = require('moment-jalaali')

import loader from "../components/loader.vue"

export default {
    methods: {
        /**format numbers */
        numberWithCommas(x) {
            if (!x) return 0
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        },
        /**new jdate 
         * @param miladi UTC date time
        */
        jdate(date, format = null) {
            if (!date)
                return ''

            if (format) return moment_(date, 'YYYY-M-D HH:mm:ss').format(format)
            return moment_(date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jMM/jDD HH:mm')
        },
        miladiDate(currentDate, filterDate, format = null) {

            console.log('miladiDate :', currentDate, ' - ', filterDate);
            if (!date)
                return ''


            return moment_(filterDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD') == moment_(currentDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
        },
        /** convert secend to day hours and minute */
        secondsToDay(seconds, enter = false, kind = false) {
            seconds = Number(seconds);

            if (!seconds) return 0 + this.$t("GENERAL.secend");

            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);

            var dDisplay = d > 0 ? d + (d == 1 ? this.$t("GENERAL.day") : this.$t("GENERAL.day")) : "";
            var hDisplay = h > 0 ? h + (h == 1 ? this.$t("GENERAL.hour") : this.$t("GENERAL.hour")) : "";
            var mDisplay = m > 0 ? m + (m == 1 ? this.$t("GENERAL.minute") : this.$t("GENERAL.minute")) : "";
            var sDisplay = s > 0 ? s + (s == 1 ? this.$t("GENERAL.secend") : this.$t("GENERAL.secend")) : "";

            if (enter)
                return (dDisplay ? dDisplay + '<br>' : '') + (hDisplay ? hDisplay + '<br>' : '') + (mDisplay ? mDisplay + '<br>' : '') + sDisplay;
            return dDisplay + hDisplay + mDisplay + sDisplay;
        },
        resetTime() {
            this.$notify({
                text: this.$t('GENERAL.resetTime'),
            });
            this.home.fromTime = "00:00"
            this.home.toTime = '23:59'
        },
        /** set permission */
        setPermission(target) {
            try {
                // return false;
                let permissions = JSON.parse(localStorage.getItem('permission'));
                if (!permissions)
                    return location.reload();

                let status = false
                permissions.map((permission) => {
                    if (target == permission.name)
                        status = true
                })
                return status

            } catch (error) {
                console.error(error);
                return false;
            }
        },
        /**new jdate 
         * @param miladi UTC date time
        */
        moment(date, format_input, format_output) {
            if (!date)
                return ''

            if (format_input)
                return moment_(date, format_input).format(format_output)
            return moment_(date).format(format_output)
        },
    },
    components: {
        loader
    },
}