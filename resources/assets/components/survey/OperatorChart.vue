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
          <div class="svg-filter" title="filter">
            <!-- <input type="text" :value="labaleTimefilter" class="date w-100 text-center" /> -->
          </div>

          <date-picker color="#5c659c" v-model="allDate" type="date" custom-input=".date " range clearable @change="setAllDate()">
            <!-- slot for "now-btn" -->
            <template #now-btn="{ vm, color, goToday, lang }">
              <VueMultiselect v-model="shortcutTimeFilter" :options="optionTimeFilter" label="lable" track-by="code" :placeholder="$t('GENERAL.select')" :showLabels="false" @close="setAllDate()"> </VueMultiselect>
            </template>
          </date-picker>
        </div>

        <!-- {{-- refresh btn and filter --}} -->
        <div class="d-flex align-items-center">
          <!-- search -->
          <div style="cursor: pointer; margin: 0 20px; font-size: 12px" @click="displayModalSetting = true">
            <span style="background-color: #f1eded; color: white; padding: 7px 12px; border: 3px solid white; border-left: none">
              <svg xmlns="http://www.w3.org/2000/svg" width="25.002" height="25.002" viewBox="0 0 25.002 25.002">
                <path id="search-alt-2-svgrepo-com" d="M11,6a5,5,0,0,1,5,5m.659,5.655L21,21M19,11a8,8,0,1,1-8-8A8,8,0,0,1,19,11Z" transform="matrix(0.259, 0.966, -0.966, 0.259, 21.133, -2.449)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
            </span>
            <span style="background-color: black; color: white; padding: 7px 12px; border: 3px solid white">
              {{ $t('GENERAL.btnFilter') }}
            </span>
          </div>
          <!-- refresh -->
          <div class="refresh-ctn">
            <div @click="getData()" class="refresh"></div>
          </div>
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
      <!-- show queues -->
      <div class="table-shadow d-flex justify-content-around pb-0">
        نمایش اطلاعات
        <!-- show date -->
        <p v-if="yearsActivityChartBar">در بازه زمانی {{ yearsActivityChartBar }}</p>
        <!-- show queue -->
        <span> برای </span>
        <div style="text-align: center" v-for="(item, index) in selectedQueues" :key="index">
          <div class="form-group">
            <label>{{ $t('SURVEY.OperatorChart.survey_location') }} : </label>
            <label> {{ item.code }}</label>
          </div>
        </div>
        <span v-if="!queues.length">همه صف ها</span>
      </div>

      <!-- pie chart -->
      <div class="table-shadow d-flex flex-column align-items-center">
        <div class="d-flex justify-content-around px-3">
          <div class="guide" v-if="$t('SURVEY.OperatorChart.activityChartOfTheYearPie.GUIDE')">
            <p>{{ $t('SURVEY.OperatorChart.activityChartOfTheYearPie.GUIDE') }}</p>
          </div>
          <h5 class="m-0 mx-3">{{ $t('SURVEY.OperatorChart.activityChartOfTheYearPie.title') }}</h5>
          <!-- date picker -->
          <date-picker
            v-if="allDate"
            :min="allDate[0]"
            :max="allDate[1]"
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

        <pie-chart v-if="activityChartOfTheYearPie" :data="activityChartOfTheYearPie" :customLabel="true"></pie-chart>
      </div>

      <!-- hourtly chart -->
      <div class="table-shadow">
        <!-- bar chart ساعتی -->
        <div class="d-flex justify-content-around">
          <div class="guide" v-if="$t('SURVEY.OperatorChart.activityDiagramHourlyBasis.GUIDE')">
            <p>{{ $t('SURVEY.OperatorChart.activityDiagramHourlyBasis.GUIDE') }}</p>
          </div>
          <h5 class="m-0">{{ $t('SURVEY.OperatorChart.activityDiagramHourlyBasis.title') }}</h5>
          <!-- date picker -->
          <date-picker
            v-if="allDate"
            :min="allDate[0]"
            :max="allDate[1]"
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

        <barChart v-if="activityDiagramHourlyBasis" :data="activityDiagramHourlyBasis" :precision="1" :customLabel="'Chart.rank'"></barChart>
      </div>

      <!-- bar chart years -->
      <div class="table-shadow">
        <!--bar chart activity Chart Of The Year -->
        <!-- title and date-picker -->
        <div class="d-flex justify-content-center">
          <div class="guide" v-if="$t('SURVEY.OperatorChart.activityChartOfTheYearBar.GUIDE')">
            <p>{{ $t('SURVEY.OperatorChart.activityChartOfTheYearBar.GUIDE') }}</p>
          </div>
          <h5 class="m-0">{{ $t('SURVEY.OperatorChart.activityChartOfTheYearBar.title') }}</h5>
          <!-- date picker -->
          <date-picker
            v-if="allDate && false"
            :min="allDate[0]"
            :max="allDate[1]"
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
        <barChart :data="activityChartOfTheYearBar" :precision="1" :customLabel="'Chart.rank'"></barChart>
      </div>

      <!-- bar chart Operators' activity diagram on a monthly basis -->
      <div class="table-shadow">
        <!-- title and date-picker -->
        <div class="d-flex justify-content-between">
          <div class="guide" v-if="$t('SURVEY.OperatorChart.activityDiagramMonthlyBasis.GUIDE')">
            <p>{{ $t('SURVEY.OperatorChart.activityDiagramMonthlyBasis.GUIDE') }}</p>
          </div>
          <h5 class="m-0">{{ $t('SURVEY.OperatorChart.activityDiagramMonthlyBasis.title') }}</h5>
          <!-- date picker -->
          <date-picker v-if="allDate" color="#5c659c" v-model="yearsActivityDiagramMonthlyBasis" :locale="getLocale" type="month" auto-submit @change="submitActivityDiagramMonthlyBasis()"></date-picker>
        </div>
        <barChart v-if="activityDiagramMonthlyBasis" :data="activityDiagramMonthlyBasis" :precision="1" :customLabel="'Chart.rank'"></barChart>
      </div>

      <!--bar chart satisfaction Chart -->
      <div class="table-shadow">
        <!-- title and date-picker -->
        <div class="d-flex justify-content-center">
          <div class="guide" v-if="$t('SURVEY.OperatorChart.satisfactionChart.GUIDE')">
            <p>{{ $t('SURVEY.OperatorChart.satisfactionChart.GUIDE') }}</p>
          </div>
          <h5 class="mt-2">{{ $t('SURVEY.OperatorChart.satisfactionChart.title') }}</h5>

          <!-- date picker -->
          <date-picker
            v-if="allDate && false"
            :min="allDate[0]"
            :max="allDate[1]"
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
          <div v-if="source == 'dashboard' && agents.length >= 2" class="col-12 col-md-3 mt-2">
            <VueMultiselect v-model="user" :options="agents" :placeholder="$t('GENERAL.CHOOSE_MULTISELECT')" label="title" track-by="code" :showLabels="false" :allow-empty="false" @select="submitSatisfactionChart">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>
        </div>

        <barChart :data="satisfactionChart"></barChart>
      </div>

      <!-- Start کارشناسان برتر -->
      <!-- show only dashboard -->
      <div class="table-shadow mt-2" id="surveyOperator" v-if="source == 'dashboard'">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex justify-content-around w-100">
            <div class="guide" v-if="$t('SURVEY.Dashboard.best_agent.GUIDE')">
              <p>{{ $t('SURVEY.Dashboard.best_agent.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('SURVEY.Dashboard.best_agent.title') }}</h5>
            <!-- date picker -->
            <date-picker v-if="allDate" color="#5c659c" v-model="monthSurveyOperator" :locale="getLocale" type="month" auto-submit @change="getBestOperator()"></date-picker>
          </div>
          <div class="export" v-if="!isLoadingExport">
            <div class="pdf" @click="tableExport('surveyOperatorDetail', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('surveyOperatorDetail', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('surveyOperatorDetail', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
          <div class="loader-wait-request mx-2" style="width: 20px; height: 20px" v-if="isLoadingExport"></div>
        </div>

        <!-- vue good table -->
        <div class="automatica-call-table w-100" dir="ltr">
          <vue-good-table :columns="columnsSurveyOperator" :rows="surveyOperatorData" :pagination-options="paginationOptions">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'time'">
                <span v-if="$i18n.locale == 'en'">{{ jdate(props.row.date_time, 'YYYY/MM/DD HH:mm') }}</span>
                <span v-else>{{ jdate(props.row.date_time, 'jYYYY/jMM/jDD HH:mm') }}</span>
              </span>

              <span v-if="props.column.field == 'satisfaction_percentage'">
                <span>{{ props.row.satisfaction_percentage }} %</span>
              </span>

              <span v-else-if="props.column.field == 'operate'">
                <div v-if="isLoadingOperate != props.row.id" class="operate">
                  <!-- btn showChart -->
                  <button class="btn-submit" @click="showChart(props.row.survey_location, props.row.agent_number)">
                    <span
                      ><svg xmlns="http://www.w3.org/2000/svg" width="23.011" height="25.096" viewBox="0 0 43.011 45.096">
                        <path
                          id="chart-histogram-alt"
                          d="M65.975,9.335Q60.713,4.742,55.441.149c-.28-.244-.194-.257-.5.009L44.907,8.911l-.631.555.023.059h.248c1.8,0,3.6,0,5.407,0,.2,0,.271.018.23.253a25.911,25.911,0,0,1-.7,2.931,24.244,24.244,0,0,1-15.805,16.13,21.929,21.929,0,0,1-7.928.929c-.694-.045-1.38-.126-2.07-.225a.472.472,0,0,0-.564.555c.05.221.221.3.41.37a29.724,29.724,0,0,0,14.448,1.245,28.662,28.662,0,0,0,11.67-4.514A25.608,25.608,0,0,0,61.078,9.74c.032-.189.113-.23.293-.23,1.5.009,2.994,0,4.5,0,.081,0,.167.027.244-.032-.014-.077-.086-.108-.135-.149ZM62.435,27.99V11.021c0-.045,0-.095-.068-.1s-.086.032-.1.081a1,1,0,0,0-.023.113A27.016,27.016,0,0,1,56.929,22.38a.559.559,0,0,0-.126.361q.007,11.039,0,22.073c0,.2.063.244.253.244,1.691-.009,3.387,0,5.078,0,.338,0,.3.036.3-.3q.007-8.381,0-16.761Zm-8.428-2.422c-.09.072-.135.1-.176.14a28.848,28.848,0,0,1-5.285,3.806.309.309,0,0,0-.171.32q.007,7.488,0,14.976c0,.189.045.248.244.248q2.55-.014,5.1,0c.244,0,.293-.072.289-.3Q54,35.318,54,25.875v-.307h0Zm-8.424,5.7c0-.284,0-.284-.271-.171a30.43,30.43,0,0,1-5.123,1.614c-.176.041-.239.1-.239.289q.007,5.9,0,11.792c0,.2.045.262.257.262q2.564-.014,5.123,0c.212,0,.257-.059.257-.262-.009-2.255,0-4.509,0-6.764v-6.76ZM28.511,33.1a30.068,30.068,0,0,1-5.177-1.249c-.189-.068-.234-.027-.234.171q.007,3.193,0,6.385c0,2.119,0,4.243,0,6.363,0,.23.063.28.289.28q2.55-.014,5.1,0c.189,0,.253-.041.253-.244q-.007-5.722,0-11.44c-.009-.167-.05-.239-.23-.266Zm8.649.374c0-.18-.041-.244-.234-.221a29.437,29.437,0,0,1-5.159.171c-.207-.009-.244.059-.244.248q.007,5.567,0,11.134c0,.2.063.244.253.244,1.709,0,3.414-.009,5.123,0,.23,0,.262-.081.262-.28q-.007-2.807,0-5.614,0-2.834,0-5.682Z"
                          transform="translate(-23.1 0.038)"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </span>

              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- table for export-->
        <table class="mt-4" id="surveyOperatorDetail" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('SURVEY.Operator.agent_number') }}</th>
              <th>{{ $t('SURVEY.Operator.survey_location') }}</th>
              <th>{{ $t('SURVEY.Operator.time') }}</th>
              <th>{{ $t('SURVEY.Operator.average_survey') }}</th>
              <th>{{ $t('SURVEY.Operator.total_survey') }}</th>
              <th>{{ $t('SURVEY.Operator.count_survey') }}</th>
              <th>{{ $t('SURVEY.Operator.satisfaction_percentage') }}</th>
            </tr>
          </thead>
          <tbody>
            <!-- content -->
            <tr v-for="(td, index) in rowsExport" :key="index">
              <td>{{ td.agent_number }}</td>
              <td>{{ td.survey_location }}</td>
              <td v-if="$i18n.locale == 'en'">{{ jdate(td.date_time, 'YYYY/MM/DD') }}</td>
              <td v-else>{{ jdate(td.date_time, 'jYYYY/jMM/jDD') }}</td>
              <td>{{ td.average_survey }}</td>
              <td>{{ td.total_survey }}</td>
              <td>{{ td.count_survey }}</td>
              <td>{{ td.satisfaction_percentage }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- End کارشناسان برتر -->
    </div>

    <!-- loader -->
    <loader v-if="isLoading"></loader>

    <!-- Get settings such as time and queue -->
    <modalGetSettingVue :display="displayModalSetting" @close-modal="closeModal"></modalGetSettingVue>
  </div>
</template>

<script>

// helper
import helper from '../../js/helper'
import pdfExport from '../../js/pdfExport'


// import vue good table
import { VueGoodTable } from 'vue-good-table-next';

/** import chart */
import barChart from '../chart/BarChart.vue'
import pieChart from '../chart/PieChart.vue'


/**talkhabi datepicker */
import VuePersianDatetimePicker from 'vue3-persian-datetime-picker'
var moment = require('moment-jalaali')


// multi select
import VueMultiselect from 'vue-multiselect'
import modalGetSettingVue from '../modalGetSetting.vue';
import { useSurvey } from '../../js/pinia/survey';
import { computed, watch, getCurrentInstance } from 'vue';


export default {
  name: 'surveyOperatorChart',
  mixins: [helper, pdfExport],
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

      activityDiagramHourlyBasis: null,

      satisfactionChart: [],
      yearsSatisfactionChart: null,

      activityDiagramMonthlyBasis: null,
      yearsActivityDiagramMonthlyBasis: null,

      monthSurveyOperator: null,

      userOption: [],



      isLoadingExport: false,
      isLoadingOperate: false,
      page: 1,
      perPage: 5,
      totalRecords: 0,

      paginationOptions: {
        enabled: true,
        mode: 'records',
        perPage: 5,
        page: 1,
        position: 'bottom',
        perPageDropdown: [5, 10, 20, 30],
        dropdownAllowAll: false,
        firstLabel: this.$t('GENERAL.firstPage'),
        lastLabel: this.$t('GENERAL.LastPage'),
        nextLabel: this.$t('GENERAL.next'),
        prevLabel: this.$t('GENERAL.back'),
        rowsPerPageLabel: this.$t('GENERAL.rowsperpage'),
        ofLabel: this.$t('GENERAL.of'),
        pageLabel: this.$t('GENERAL.page'), // for 'pages' mode
        allLabel: this.$t('GENERAL.all'),
      },

      columnsSurveyOperator: [
        {
          label: this.$t('GENERAL.btnOperation'),
          field: 'operate',
          sortable: false
        },
        {
          label: this.$t('SURVEY.Operator.satisfaction_percentage'),
          field: 'satisfaction_percentage',
        },
        {
          label: this.$t('SURVEY.Operator.count_survey'),
          field: 'count_survey',
        },
        {
          label: this.$t('SURVEY.Operator.total_survey'),
          field: 'total_survey',
        },
        {
          label: this.$t('SURVEY.Operator.average_survey'),
          field: 'average_survey',
        },
        {
          label: this.$t('SURVEY.Operator.time'),
          field: 'time',
        },
        {
          label: this.$t('SURVEY.Operator.survey_location'),
          field: 'survey_location',

        },
        {
          label: this.$t('SURVEY.Operator.agent_number'),
          field: 'agent_number',

        }
      ],
      surveyOperatorData: [],
      rowsExport: [],

      displayModalSetting: false,
      selectedQueues: null

    }
  },
  methods: {
    async getData() {
      this.isLoading = true;

      try {
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
      this.isLoading = false;

      /** call functions get chart data */
      await this.setAllDate();

    },
    /** نمودار فعالیت سال برای نمودار از نوع بار چارت*/
    async submitActivityChartOfTheYearBar(firstLoad = false) {
      try {

        this.isLoading = true;
        /** set default years */
        if (!this.yearsActivityChartBar) {
          let currentTime = new Date();
          this.yearsActivityChartBar = moment(currentTime).format('jYYYY');
        }
        else {
          this.yearsActivityChartBar = this.yearsActivityChartBar.split("/")[0];
        }
        let date = [];
        Array.from({ length: 12 }, (value, month) => {
          /** calc end of day every month */
          const endDay = moment.jDaysInMonth(`${this.yearsActivityChartBar}/${month + 1}`);
          date.push({
            startDate: moment(`${this.yearsActivityChartBar}/${month + 1}/01 00:00:00`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY/MM/DD HH:mm:ss'),
            endDate: moment(`${this.yearsActivityChartBar}/${month + 1}/${endDay} 23:59:59`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY/MM/DD HH:mm:ss')
          })
        })

        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            page: this.source,
            method: 'activityChartOfTheYearBar',
            agent_number: this.$route.params.agentNumber,
            dateRange: date,
            queues: this.selectedQueues ? this.selectedQueues.map((item) => item.code) : null
          },
        })

        let ls = this
        this.activityChartOfTheYearBar = [];

        req.data.activityChartOfTheYearBar.map((item, key) => {
          if (item) {
            ls.activityChartOfTheYearBar.push({
              'lable': ls.showMonth(key + 1),
              [this.$t('SURVEY.OperatorChart.activityChartOfTheYearBar.avg')]: item.average_survey,
              "lable2": item.count_survey
            })
          }
          else {
            ls.activityChartOfTheYearBar.push({
              'lable': ls.showMonth(key + 1),
              [this.$t('SURVEY.OperatorChart.activityChartOfTheYearBar.avg')]: 0,
              "lable2": 0
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
          let startDate = moment(currentTime).format('jYYYY') + "/01/01 00:00:00";
          let endDate = moment(currentTime).format('jYYYY') + "/12/29 23:59:59";
          this.yearsActivityChartPie = [startDate, endDate]
        }
        this.isLoading = true;
        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            page: this.source,
            method: 'activityChartOfTheYearPie',
            agent_number: this.$route.params.agentNumber,
            startDate: moment(`${this.yearsActivityChartPie[0]} 00:00:00`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY/MM/DD HH:mm:ss'),
            endDate: moment(`${this.yearsActivityChartPie[1]} 23:59:59`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY/MM/DD HH:mm:ss'),
            queues: this.selectedQueues ? this.selectedQueues.map((item) => item.code) : null
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


        this.activityDiagramHourlyBasis = [];
        Array.from({ length: 24 }, (value, newHour) => {
          let avalable = false;
          req.data.activityDiagramHourlyBasis.map((item, key) => {
            if (item.hour == newHour + 1) {
              avalable = true;
              ls.activityDiagramHourlyBasis.push({
                'lable': (newHour + 1),
                [this.$t('SURVEY.OperatorChart.activityDiagramMonthlyBasis.precentage')]: parseInt(item.average_survey),
                "lable2": item.count_survey
              })
            }
          })
          if (!avalable)
            ls.activityDiagramHourlyBasis.push({
              'lable': (newHour + 1),
              [this.$t('SURVEY.OperatorChart.activityDiagramMonthlyBasis.precentage')]: 0,
              "lable2": 0
            })
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
          this.yearsSatisfactionChart = moment(currentTime).format('jYYYY');
        }
        else {
          this.yearsSatisfactionChart = this.yearsSatisfactionChart.split("/")[0];
        }

        /** calc range date */
        let date = [];
        Array.from({ length: 12 }, (value, month) => {
          /** calc end of day every month */
          const endDay = moment.jDaysInMonth(`${this.yearsSatisfactionChart}/${month + 1}`);

          date.push({
            startDate: moment(`${this.yearsSatisfactionChart}/${month + 1}/01 00:00:00`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY/MM/DD HH:mm:ss'),
            endDate: moment(`${this.yearsSatisfactionChart}/${month + 1}/${endDay} 23:59:59`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY/MM/DD HH:mm:ss')
          })
        })

        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            page: this.source,
            method: 'satisfactionChart',
            agent_number: this.source == 'operator' ? this.$route.params.agentNumber : this.user ? this.user.code : null,
            dateRange: date,
            queues: this.selectedQueues ? this.selectedQueues.map((item) => item.code) : null
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

        let currentTime = new Date();
        let date = moment(currentTime.getFullYear() + '/' + (currentTime.getMonth() + 1), 'YYYY/MM').format('jYYYY/jMM');
        if (this.yearsActivityDiagramMonthlyBasis) {
          date = moment(currentTime.getFullYear() + '/' + this.yearsActivityDiagramMonthlyBasis, 'YYYY/jMM').format('jYYYY/jMM');
        }

        /** calc end of day every month */
        const endDay = moment.jDaysInMonth(date);

        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            page: this.source,
            method: 'activityDiagramMonthlyBasis',
            agent_number: this.$route.params.agentNumber,
            startDate: moment(`${date}/01 00:00:00`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'),
            endDate: moment(`${date}/${endDay} 23:59:59`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'),
            queues: this.selectedQueues ? this.selectedQueues.map((item) => item.code) : null
          },
        })

        /** convert miladi date to shamsi */
        let filterReq = req.data.activityDiagramMonthlyBasis.map((item) => {
          item.day = moment(item.date_time, 'YYYY/MM/DD').format('jDD')
          return item
        })

        /** add missing day with ziro value */
        let format = this.$i18n.locale == 'en' ? "MM/DD" : "jMM/jDD";
        let ls = this
        this.activityDiagramMonthlyBasis = [];
        Array.from({ length: 31 }, (value, newDay) => {
          let avalable = false;
          filterReq.map((item, key) => {
            if (item.day == newDay + 1) {
              avalable = true;
              ls.activityDiagramMonthlyBasis.push({
                'lable': ' ' + moment(item.date_time, 'YYYY/MM/DD').format(format),
                [this.$t('SURVEY.OperatorChart.activityDiagramMonthlyBasis.precentage')]: parseInt(item.average_survey),
                "lable2": item.count_survey
              })
            }
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
          item.title = item.name;
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
      if (this.isLoading) return;


      this.selectedQueues = this.queues;
      if (this.fromFilter) {
        this.allDate = [this.fromFilter + "/01/01", this.fromFilter + "/12/29"]
      }
      if (!this.allDate) {
        let currentTime = new Date();
        let startDate = moment(currentTime).format('jYYYY') + "/01/01";
        let endDate = moment(currentTime).format('jYYYY') + "/12/29";
        this.allDate = [startDate, endDate]
      }

      this.shortcutTimeFilter = null;

      this.yearsActivityChartPie = this.allDate
      this.yearsActivityChartBar = this.allDate[0]
      this.yearsSatisfactionChart = this.allDate[0]

      let currentTime = new Date();
      this.yearsActivityDiagramMonthlyBasis = moment(currentTime.getFullYear() + '/' + (currentTime.getMonth() + 1), 'YYYY/MM').format('jMM');

      this.labaleTimefilter = this.allDate[0] + ' ~ ' + this.allDate[1];

      await this.submitActivityChartOfTheYearBar('firstLoad');
      await this.submitActivityChartOfTheYearPie('firstLoad');
      await this.submitActivityDiagramMonthlyBasis('firstLoad');
      // get data best operator
      if (this.source == 'dashboard') {
        await this.getBestOperator();
      }
      await this.submitSatisfactionChart(this.user);
    },

    // شروع کارشناس یرتر
    /** get data from api */
    async getBestOperator() {
      try {

        let currentTime = new Date();
        let dateDefaultStart = moment(currentTime.getFullYear() + '/01', 'YYYY/MM').format('jYYYY/jMM');
        let dateDefaultEnd = moment(currentTime.getFullYear() + '/12', 'YYYY/MM').format('jYYYY/jMM');
        /** calc end of day every month */
        let endDay = moment.jDaysInMonth(dateDefaultEnd);
        let start = moment(`${dateDefaultStart}/01 00:00:00`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
        let end = moment(`${dateDefaultEnd}/${endDay} 23:59:59`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');

        if (this.monthSurveyOperator) {
          dateDefaultStart = moment(currentTime.getFullYear() + '/' + this.monthSurveyOperator, 'YYYY/jMM').format('jYYYY/jMM');
          endDay = moment.jDaysInMonth(dateDefaultStart);
          start = moment(`${dateDefaultStart}/01 00:00:00`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
          end = moment(`${dateDefaultStart}/${endDay} 23:59:59`, 'jYYYY/jMM/jDD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
        }


        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            method: 'getData',
            startDate: start,
            endDate: end,
            queues: this.selectedQueues ? this.selectedQueues.map((item) => item.code) : null,
            users: this.surveyStore.agentsSelected.length ? this.surveyStore.agentsSelected.map((item) => item.code) : null
          },
        })

        this.surveyOperatorData = []
        let ls = this;
        // req.data.max_survey.map((queue) => {
        req.data.data.map((item) => {
          // if (item.survey_location == queue.survey_queue) {
          ls.surveyOperatorData.push({
            agent_number: item.agent_number,
            average_survey: item.average_survey,
            count_survey: item.count_survey,
            date_time: item.date_time,
            survey_location: item.survey_location,
            total_survey: item.total_survey,
            // satisfaction_percentage: ((item.average_survey * 100) / queue.survey_string.length).toFixed(0)
            satisfaction_percentage: ((item.average_survey * 100) / 5).toFixed(0)
          })
          // }
        })
        // })

        this.rowsExport = this.surveyOperatorData;
      } catch (error) {
        console.error(error);
      }

    },

    /** فعلا غیر فعال می باشد export action */
    async exportRequest(type = 'pdf') {

      if (this.isLoadingExport) return

      this.isLoadingExport = true;

      try {
        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            method: 'getData'
          },
        })

        this.rowsExport = []
        let ls = this;
        await req.data.max_survey.map((queue) => {
          req.data.data.map((item) => {
            if (item.survey_location == queue.survey_queue) {
              ls.rowsExport.push({
                agent_number: item.agent_number,
                average_survey: item.average_survey,
                count_survey: item.count_survey,
                date_time: item.date_time,
                survey_location: item.survey_location,
                total_survey: item.total_survey,
                satisfaction_percentage: ((item.average_survey * 100) / 5).toFixed(0)
              })
            }
          })
        })


        this.tableExport('surveyOperatorDetail', type);

      } catch (error) {
        console.error(error);
      }
      this.isLoadingExport = false;

    },

    /** redirect for showChart row */
    showChart(location, agentNumber) {
      this.$router.push({ name: 'survey-operator-chart', params: { 'location': location, 'agentNumber': agentNumber } });
    },

    // Update the display value in the parent component
    closeModal() {
      this.displayModalSetting = false;
    },

  },
  computed: {
    /** get locale for date-picker */
    getLocale() {
      if (this.$i18n.locale == 'en')
        return 'en';
      return 'fa';
    },
    agents() {
      return this.surveyStore.agentsSelected.length ? this.surveyStore.agentsSelected : this.userOption
    }
  },
  watch: {
    agents(value) {
      this.user = value.length ? value[0] : null
    }
  },
  components: {
    barChart,
    pieChart,
    VueGoodTable,
    datePicker: VuePersianDatetimePicker,
    VueMultiselect,
    modalGetSettingVue
  },
  async mounted() {
    await this.getData();
  },
  setup() {
    const surveyStore = useSurvey();

    const queues = computed(() => surveyStore.queuesSelected);
    const fromFilter = computed(() => surveyStore.fromFilter);
    const key = computed(() => surveyStore.key);

    // Access the current component instance
    const { ctx } = getCurrentInstance();

    // // Watch for changes in multiple properties
    // watch([queues, fromFilter], ([newQueues, newFromFilter], [oldQueues, oldFromFilter]) => {
    //   // Call your function with the updated values
    //   ctx.setAllDate();
    // });


    // Watch for changes in multiple properties
    watch([key], ([newKey], [oldKey]) => {
      // Call your function with the updated values
      ctx.setAllDate();
    });


    return {
      surveyStore,
      queues,
      fromFilter,
    };
  },
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
  .svg-filter {
    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>