<template>
  <div id="surveyOperatorChart" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <div>
          <!-- operator source -->
          <div class="d-flex" v-if="source == 'operator'">
            <div class="guide" v-if="$t('SURVEY.OperatorChart.GUIDE')">
              <p>{{ $t('SURVEY.OperatorChart.GUIDE') }}</p>
            </div>
            <h3 class="m-0">{{ $t('SURVEY.OperatorChart.title') }}</h3>
          </div>

          <!-- dashboard source -->
          <div class="d-flex" v-if="source == 'dashboard'">
            <div class="guide" v-if="$t('SURVEY.Dashboard.GUIDE')">
              <p>{{ $t('SURVEY.Dashboard.GUIDE') }}</p>
            </div>
            <h3 class="m-0">{{ $t('SURVEY.Dashboard.title') }}</h3>
          </div>
        </div>

        <!-- date picker -->
        <div>
          <div class="d-flex align-items-center">
            <input type="text" :value="labaleTimefilter" class="date w-100 text-center" />
          </div>

          <date-picker color="#5c659c" v-model="allDate" type="date" custom-input=".date " range clearable @change="setAllDate()">
            <!-- slot for "now-btn" -->
            <template #now-btn="{ vm, color, goToday, lang }">
              <VueMultiselect v-model="shortcutTimeFilter" :options="optionTimeFilter" label="lable" track-by="code" :placeholder="$t('GENERAL.select')" :showLabels="false" @close="setAllDate()"> </VueMultiselect>
            </template>
          </date-picker>
        </div>

        <!-- {{-- refresh btn --}} -->
        <div class="refresh-ctn">
          <div @click="getData()" class="refresh"></div>
        </div>
      </div>

      <!--  header content name and phone and location -->
      <div class="table-shadow d-flex justify-content-around" v-if="user && source == 'operator'">
        <div style="text-align: center">
          <div class="form-group">
            <label> {{ $t('SURVEY.OperatorChart.agent_name') }} : </label>
            <label> {{ user.agent_name }}</label>
          </div>
        </div>
        <div style="text-align: center">
          <div class="form-group">
            <label> {{ $t('SURVEY.OperatorChart.agent_number') }} : </label>
            <label> {{ user.agent_number }}</label>
          </div>
        </div>
        <div style="text-align: center">
          <div class="form-group">
            <label>{{ $t('SURVEY.OperatorChart.survey_location') }} : </label>
            <label> {{ user.survey_location }}</label>
          </div>
        </div>
      </div>

      <!-- 2 chart bar chart and pie chart activity Chart Of The Year -->
      <div class="table-shadow row m-0">
        <!--bar chart activity Chart Of The Year -->
        <div class="col-12 col-md-6">
          <!-- title and date-picker -->
          <div class="d-flex justify-content-between">
            <div class="guide" v-if="$t('SURVEY.OperatorChart.activityChartOfTheYearBar.GUIDE')">
              <p>{{ $t('SURVEY.OperatorChart.activityChartOfTheYearBar.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('SURVEY.OperatorChart.activityChartOfTheYearBar.title') }}</h5>
            <!-- date picker -->

            <date-picker
              disabled
              color="#5c659c"
              v-model="yearsActivityChartBar"
              :locale="getLocale"
              :locale-config="{
                fa: {
                  displayFormat: 'jYYYY',
                  lang: { label: 'شمسی' }
                },
                en: {
                  displayFormat: 'YYYY',
                  lang: { label: 'Gregorian' }
                }
              }"
              type="year"
              auto-submit
              @change="submitActivityChartOfTheYearBar()"
            ></date-picker>
          </div>
          <barChart :data="activityChartOfTheYearBar"></barChart>
        </div>

        <!-- pie chart activity Chart Of The Year -->
        <div class="col-12 col-md-6">
          <!-- title and date-picker -->
          <div class="d-flex justify-content-between">
            <div class="guide" v-if="$t('SURVEY.OperatorChart.activityChartOfTheYearPie.GUIDE')">
              <p>{{ $t('SURVEY.OperatorChart.activityChartOfTheYearPie.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('SURVEY.OperatorChart.activityChartOfTheYearPie.title') }}</h5>
            <!-- date picker -->
            <date-picker
              disabled
              color="#5c659c"
              v-model="yearsActivityChartPie"
              :locale="getLocale"
              :locale-config="{
                fa: {
                  displayFormat: 'jYYYY/jMM/jDD',
                  lang: { label: 'شمسی' }
                },
                en: {
                  displayFormat: 'YYYY/MM/DD',
                  lang: { label: 'Gregorian' }
                }
              }"
              type="date"
              range
              auto-submit
              @change="submitActivityChartOfTheYearPie()"
            ></date-picker>
          </div>
          <pie-chart v-if="activityChartOfTheYearPie" :data="activityChartOfTheYearPie"></pie-chart>
        </div>
      </div>

      <!-- area chart Operators' activity diagram on a monthly basis -->
      <div class="table-shadow">
        <!-- title and date-picker -->
        <div class="d-flex justify-content-between">
          <div class="guide" v-if="$t('SURVEY.OperatorChart.activityDiagramMonthlyBasis.GUIDE')">
            <p>{{ $t('SURVEY.OperatorChart.activityDiagramMonthlyBasis.GUIDE') }}</p>
          </div>
          <h5 class="m-0">{{ $t('SURVEY.OperatorChart.activityDiagramMonthlyBasis.title') }}</h5>
          <!-- date picker -->
          <date-picker
            disabled
            color="#5c659c"
            v-model="yearsActivityDiagramMonthlyBasis"
            :locale="getLocale"
            :locale-config="{
              fa: {
                displayFormat: 'jYYYY jMM',
                lang: { label: 'شمسی' }
              },
              en: {
                displayFormat: 'YYYY MM',
                lang: { label: 'Gregorian' }
              }
            }"
            type="year-month"
            auto-submit
            @change="submitActivityDiagramMonthlyBasis()"
          ></date-picker>
        </div>
        <areaChart v-if="activityDiagramMonthlyBasis" :data="activityDiagramMonthlyBasis"></areaChart>
      </div>

      <!--bar chart satisfaction Chart -->
      <div class="table-shadow">
        <!-- title and date-picker -->
        <div class="d-flex justify-content-between">
          <div class="guide" v-if="$t('SURVEY.OperatorChart.satisfactionChart.GUIDE')">
            <p>{{ $t('SURVEY.OperatorChart.satisfactionChart.GUIDE') }}</p>
          </div>
          <h5 class="mt-2">{{ $t('SURVEY.OperatorChart.satisfactionChart.title') }}</h5>

          <!-- date picker -->
          <date-picker
            disabled
            color="#5c659c"
            class="mt-2"
            v-model="yearsSatisfactionChart"
            :locale="getLocale"
            :locale-config="{
              fa: {
                displayFormat: 'jYYYY',
                lang: { label: 'شمسی' }
              },
              en: {
                displayFormat: 'YYYY',
                lang: { label: 'Gregorian' }
              }
            }"
            type="year"
            auto-submit
            @change="submitSatisfactionChart()"
          ></date-picker>

          <!-- multi select user list -->
          <div v-if="source == 'dashboard'" class="col-12 col-md-3 mt-2">
            <VueMultiselect v-model="user" :options="userOption" :placeholder="$t('GENERAL.CHOOSE_MULTISELECT')" label="lable" track-by="code" :showLabels="false" :allow-empty="false" @select="submitSatisfactionChart">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>
        </div>

        <barChart :data="satisfactionChart"></barChart>
      </div>
    </div>

    <!-- loader -->
    <loader v-if="isLoading"></loader>
  </div>
</template>

<script>

// helper
import helper from '../../js/helper'

// import vue good table
import { VueGoodTable } from 'vue-good-table-next';

/** import chart */
import barChart from '../chart/BarChart.vue'
import areaChart from '../chart/AreaChart.vue'
import pieChart from '../chart/PieChart.vue'


/**talkhabi datepicker */
import VuePersianDatetimePicker from 'vue3-persian-datetime-picker'
var moment = require('moment-jalaali')


// multi select
import VueMultiselect from 'vue-multiselect'


export default {
  name: 'surveyOperatorChart',
  mixins: [helper],
  props: {
    source: {
      type: String,
      default: 'operator'
    }
  },
  data() {
    return {
      isLoading: false,

      user: null,
      max_survey: null,

      allDate: null,
      labaleTimefilter: null,
      shortcutTimeFilter: null,
      optionTimeFilter: [
        { code: 'today', lable: this.$t(`STATS.HOME.today`) },
        { code: 'yesterday', lable: this.$t(`STATS.HOME.yesterday`) },
        { code: 'lastWeek', lable: this.$t(`STATS.HOME.lastWeek`) },
        { code: 'last1Month', lable: this.$t(`STATS.HOME.last1Month`) },
        { code: 'last3Month', lable: this.$t(`STATS.HOME.last3Month`) },
        { code: 'last1Years', lable: this.$t(`STATS.HOME.last1Years`) },
      ],

      activityChartOfTheYearBar: null,
      yearsActivityChartBar: null,

      activityChartOfTheYearPie: null,
      yearsActivityChartPie: null,

      satisfactionChart: [],
      yearsSatisfactionChart: null,

      activityDiagramMonthlyBasis: null,
      yearsActivityDiagramMonthlyBasis: null,

      userOption: [],

    }
  },
  methods: {
    async getData() {
      try {
        this.isLoading = true;
        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            page: this.source,
            method: 'mountPageOperatorchart',
            agent_number: this.$route.params.agentNumber,
          },
        })

        this.user = req.data.user
        this.max_survey = req.data.max_survey


      } catch (error) {
        console.log(error);
      }

      /** call functions get chart data */
      await this.setAllDate();

      // this.isLoading = false
    },
    /** نمودار فعالیت سال برای نمودار از نوع بار چارت*/
    async submitActivityChartOfTheYearBar(firstLoad = false) {
      try {

        this.isLoading = true;
        /** set default years */
        if (!this.yearsActivityChartBar) {
          let currentTime = new Date();
          this.yearsActivityChartBar = moment(currentTime.getFullYear(), 'YYYY').format('jYYYY');
        }

        let date = [];
        Array.from({ length: 12 }, (value, month) => {
          /** calc end of day every month */
          const endDay = moment.jDaysInMonth(`${this.yearsActivityChartBar}/${month + 1}`);
          date.push({
            startDate: moment(`${this.yearsActivityChartBar}/${month + 1}/01`, 'jYYYY/jMM/jDD').format('YYYY/MM/DD'),
            endDate: moment(`${this.yearsActivityChartBar}/${month + 1}/${endDay}`, 'jYYYY/jMM/jDD').format('YYYY/MM/DD')
          })
        })

        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            page: this.source,
            method: 'activityChartOfTheYearBar',
            agent_number: this.$route.params.agentNumber,
            dateRange: date
          },
        })

        let ls = this
        this.activityChartOfTheYearBar = [];

        req.data.activityChartOfTheYearBar.map((item, key) => {
          if (item) {
            ls.activityChartOfTheYearBar.push({
              'lable': ls.showMonth(key + 1),
              [this.$t('SURVEY.OperatorChart.activityChartOfTheYearBar.avg')]: item.average_survey * 1
            })
          }
          else {
            ls.activityChartOfTheYearBar.push({
              'lable': ls.showMonth(key + 1),
              [this.$t('SURVEY.OperatorChart.activityChartOfTheYearBar.avg')]: 0
            })
          }
        })

      } catch (error) {
        console.error(error);
      }
      if (!firstLoad)
        this.isLoading = false;
    },
    /** نمودار فعالیت سال برای نمودار از نوع پای چارت*/
    async submitActivityChartOfTheYearPie(firstLoad = false) {
      try {

        /** set default years */
        if (!this.yearsActivityChartPie) {
          let currentTime = new Date();
          let startDate = moment(currentTime.getFullYear(), 'YYYY').format('jYYYY') + "/01/01";
          let endDate = moment(currentTime.getFullYear(), 'YYYY').format('jYYYY') + "/12/29";
          this.yearsActivityChartPie = [startDate, endDate]
        }
        this.isLoading = true;
        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            page: this.source,
            method: 'activityChartOfTheYearPie',
            agent_number: this.$route.params.agentNumber,
            startDate: moment(this.yearsActivityChartPie[0], 'jYYYY/jMM/jDD').format('YYYY/MM/DD'),
            endDate: moment(this.yearsActivityChartPie[1], 'jYYYY/jMM/jDD').format('YYYY/MM/DD')
          },
        })
        let ls = this
        this.activityChartOfTheYearPie = [];
        let max_survey_string = this.max_survey ? this.max_survey[0].survey_string : []
        this.max_survey.map((item) => {
          if (item.survey_string > max_survey_string)
            max_survey_string = item.survey_string
        })

        Array.from({ length: max_survey_string.length }, (v, index) => {
          let available = false;
          req.data.activityChartOfTheYearPie.map((item, key) => {
            if (item.survey_value == index + 1) {
              available = true
              ls.activityChartOfTheYearPie.push({
                'lable': item.survey_value,
                'value': item.count_survey * 1
              })
            }
          })
          if (!available) {
            ls.activityChartOfTheYearPie.push({
              'lable': index + 1,
              'value': 0
            })
          }
        })



      } catch (error) {
        console.error(error);
      }
      if (!firstLoad)
        this.isLoading = false;
    },

    /** نمودار میزان رضایتمندی*/
    async submitSatisfactionChart(user = null) {
      try {
        this.isLoading = true;

        if (this.source == 'dashboard' && !user) await this.getUsersOption()

        if (user) this.user = user

        /** set default years */
        if (!this.yearsSatisfactionChart) {
          let currentTime = new Date();
          this.yearsSatisfactionChart = moment(currentTime.getFullYear(), 'YYYY').format('jYYYY');
        }

        /** calc range date */
        let date = [];
        Array.from({ length: 12 }, (value, month) => {
          /** calc end of day every month */
          const endDay = moment.jDaysInMonth(`${this.yearsSatisfactionChart}/${month + 1}`);
          date.push({
            startDate: moment(`${this.yearsSatisfactionChart}/${month + 1}/01`, 'jYYYY/jMM/jDD').format('YYYY/MM/DD'),
            endDate: moment(`${this.yearsSatisfactionChart}/${month + 1}/${endDay}`, 'jYYYY/jMM/jDD').format('YYYY/MM/DD')
          })
        })

        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            page: this.source,
            method: 'satisfactionChart',
            agent_number: this.source == 'operator' ? this.$route.params.agentNumber : this.user ? this.user.code : null,
            dateRange: date,

          },
        })


        let satisfactionChart = [];

        this.max_survey.map((queue) => {
          req.data.satisfactionChart.map((item, key) => {
            if (item && item.survey_location == queue.survey_queue) {
              item.satisfaction_percentage = ((item.average_survey * 100) / queue.survey_string.length).toFixed(0)
              item.month = key
              satisfactionChart.push(item)
            }
          })
        })

        console.log('satisfactionChart :', satisfactionChart);
        /** add missing month with ziro value */
        let ls = this
        this.satisfactionChart = [];

        Array.from({ length: 12 }, (value, month) => {
          let available = false
          satisfactionChart.map((item, key) => {
            if (month == item.month) {
              available = true
              ls.satisfactionChart.push({
                'lable': ls.showMonth(month + 1),
                [this.$t('SURVEY.OperatorChart.satisfactionChart.precentage')]: item.satisfaction_percentage * 1
              })
            }

          })
          if (!available) {
            ls.satisfactionChart.push({
              'lable': ls.showMonth(month + 1),
              [this.$t('SURVEY.OperatorChart.satisfactionChart.precentage')]: 0
            })
          }
        })

      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;
    },

    /** نمودار فعالیت اپراتورها به صورت ماهیانه*/
    async submitActivityDiagramMonthlyBasis(firstLoad = false) {
      try {
        this.isLoading = true;
        /** set default years */

        if (!this.yearsActivityDiagramMonthlyBasis) {
          let currentTime = new Date();
          this.yearsActivityDiagramMonthlyBasis = moment(currentTime.getFullYear() + '/' + (currentTime.getMonth() + 1), 'YYYY/MM').format('jYYYY/jMM');

        }
        /** calc end of day every month */
        const endDay = moment.jDaysInMonth(this.yearsActivityDiagramMonthlyBasis);

        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            page: this.source,
            method: 'activityDiagramMonthlyBasis',
            agent_number: this.$route.params.agentNumber,
            startDate: moment(`${this.yearsActivityDiagramMonthlyBasis}/01`, 'jYYYY/jMM/jDD').format('YYYY/MM/DD'),
            endDate: moment(`${this.yearsActivityDiagramMonthlyBasis}/${endDay}`, 'jYYYY/jMM/jDD').format('YYYY/MM/DD')
          },
        })

        /** convert miladi date to shamsi */
        let filterReq = req.data.activityDiagramMonthlyBasis.map((item) => {
          item.day = moment(item.date_time, 'YYYY/MM/DD').format('jDD')
          return item
        })
        console.log('filter date :', filterReq);

        /** add missing day with ziro value */
        let ls = this
        this.activityDiagramMonthlyBasis = [];
        Array.from({ length: 31 }, (value, newDay) => {
          let avalable = false;
          filterReq.map((item, key) => {
            if (item.day == newDay + 1) {
              avalable = true;
              ls.activityDiagramMonthlyBasis.push({
                'lable': ' ' + (newDay + 1),
                [this.$t('SURVEY.OperatorChart.activityDiagramMonthlyBasis.precentage')]: parseInt(item.average_survey)
              })
            }
          })

          if (!avalable)
            ls.activityDiagramMonthlyBasis.push({
              'lable': ' ' + (newDay + 1),
              [this.$t('SURVEY.OperatorChart.activityDiagramMonthlyBasis.precentage')]: 0

            })
        })
      } catch (error) {
        console.error(error);
      }
      if (!firstLoad)
        this.isLoading = false;
    },

    /** return labale month */
    showMonth(key) {
      let month = [this.$t('GENERAL.Season1'), this.$t('GENERAL.Season2'), this.$t('GENERAL.Season3'), this.$t('GENERAL.Season4'), this.$t('GENERAL.Season5'), this.$t('GENERAL.Season6'), this.$t('GENERAL.Season7'), this.$t('GENERAL.Season8'), this.$t('GENERAL.Season9'), this.$t('GENERAL.Season10'), this.$t('GENERAL.Season11'), this.$t('GENERAL.Season12')]
      return month[--key]
    },

    // get all users for show all users in component dashboard
    async getUsersOption() {
      try {
        let req = await this.$axios({
          url: '/survey/operator/action',
          data: { method: 'getUsersOption', page: 'dashboard' }
        })
        this.userOption = req.data.data.map((item) => {
          item.lable = item.name;
          item.code = item.extension;
          return item;
        })

        this.user = this.userOption[0]

      } catch (error) {
        console.error(error);
      }
    },

    /** get date via date-picker and set all chart date */
    async setAllDate() {

      if (this.shortcutTimeFilter) {
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1; // Add 1 because getMonth() returns a zero-based index
        let year = currentDate.getFullYear();
        let date;
        let dateFrom;
        let dateTo;
        switch (this.shortcutTimeFilter.code) {
          case 'today':
            date = moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('jYYYY/jMM/jDD');
            this.allDate = [date, date]
            break;
          case 'yesterday':
            let yesterday = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
            let yesterday_day = yesterday.getDate();
            let yesterday_month = yesterday.getMonth() + 1;
            let yesterday_year = yesterday.getFullYear();
            dateFrom = moment(`${yesterday_day}/${yesterday_month}/${yesterday_year}`, 'DD/MM/YYYY').format('jYYYY/jMM/jDD');
            dateTo = moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('jYYYY/jMM/jDD');
            this.allDate = [dateFrom, dateTo]
            break;
          case 'lastWeek':
            let lastWeak = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
            let lastWeak_day = lastWeak.getDate();
            let lastWeak_month = lastWeak.getMonth() + 1;
            let lastWeak_year = lastWeak.getFullYear();
            dateFrom = moment(`${lastWeak_day}/${lastWeak_month}/${lastWeak_year}`, 'DD/MM/YYYY').format('jYYYY/jMM/jDD');
            dateTo = moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('jYYYY/jMM/jDD');
            this.allDate = [dateFrom, dateTo]
            break;

          case 'last1Month':
            let last1Month = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
            let last1Month_day = last1Month.getDate();
            let last1Month_month = last1Month.getMonth() + 1;
            let last1Month_year = last1Month.getFullYear();
            dateFrom = moment(`${last1Month_day}/${last1Month_month}/${last1Month_year}`, 'DD/MM/YYYY').format('jYYYY/jMM/jDD');
            dateTo = moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('jYYYY/jMM/jDD');
            this.allDate = [dateFrom, dateTo]
            break;
          case 'last3Month':
            let last3Month = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate());
            let last3Month_day = last3Month.getDate();
            let last3Month_month = last3Month.getMonth() + 1;
            let last3Month_year = last3Month.getFullYear();
            dateFrom = moment(`${last3Month_day}/${last3Month_month}/${last3Month_year}`, 'DD/MM/YYYY').format('jYYYY/jMM/jDD');
            dateTo = moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('jYYYY/jMM/jDD');
            this.allDate = [dateFrom, dateTo]
            break;
          case 'last1Years':
            let last1Years = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
            let last1Years_day = last1Years.getDate();
            let last1Years_month = last1Years.getMonth() + 1;
            let last1Years_year = last1Years.getFullYear();
            dateFrom = moment(`${last1Years_day}/${last1Years_month}/${last1Years_year}`, 'DD/MM/YYYY').format('jYYYY/jMM/jDD');
            dateTo = moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('jYYYY/jMM/jDD');
            this.allDate = [dateFrom, dateTo]
            break;
          default:
            break;
        }

        console.log('allDate 2:', this.allDate);

      }
      if (!this.allDate) {
        let currentTime = new Date();
        let startDate = moment(currentTime.getFullYear(), 'YYYY').format('jYYYY') + "/01/01";
        let endDate = moment(currentTime.getFullYear(), 'YYYY').format('jYYYY') + "/12/29";
        this.allDate = [startDate, endDate]
      }

      this.shortcutTimeFilter = null;

      this.yearsActivityChartPie = this.allDate
      this.yearsActivityChartBar = this.allDate[0]
      this.yearsSatisfactionChart = this.allDate[0]
      this.yearsActivityDiagramMonthlyBasis = this.allDate[0]
      this.labaleTimefilter = this.allDate[0] + ' ~ ' + this.allDate[1];


      await this.submitActivityChartOfTheYearBar('firstLoad');
      await this.submitActivityChartOfTheYearPie('firstLoad');
      await this.submitActivityDiagramMonthlyBasis('firstLoad');
      await this.submitSatisfactionChart();
    }

  },
  computed: {
    /** get locale for date-picker */
    getLocale() {
      if (this.$i18n.locale == 'en')
        return 'en';
      return 'fa';
    }
  },
  components: {
    barChart,
    areaChart,
    pieChart,
    VueGoodTable,
    datePicker: VuePersianDatetimePicker,
    VueMultiselect
  },
  async mounted() {

    await this.getData();

  }
}
</script>

<style lang='scss'>
#surveyOperatorChart {
  .automatica-call-table {
    overflow: auto;
  }
  .range-date {
    display: flex;
    flex-direction: column;
  }
  .operate {
    display: flex;
  }
}
</style>