<template>
  <div id="operator" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="operator.details">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <!-- title -->
        <h3>{{ $t('STATS.OPERATOR.title') }}</h3>
        <!-- {{-- refresh btn --}} -->
        <div class="refresh-ctn">
          <div
            @click="
              operator.details = null;
              resetTime();
              getData();
              getReport();
            "
            class="refresh"
          ></div>
        </div>
      </div>

      <!-- detail -->
      <div class="table-shadow detail row" id="detail">
        <!-- report detail -->
        <div class="col-12 col-md-6">
          <h5>
            {{ $t('GENERAL.report.title') }}
          </h5>
          <ul>
            <li>
              <span>{{ $t('GENERAL.report.queue') }} : </span><b>{{ home.queues ? showLable(home.queues) : $t('GENERAL.empty') }}</b>
            </li>
            <li>
              <span>{{ $t('GENERAL.report.fromFilter') }} : </span><b>{{ home.fromFilterFaLable ? home.fromFilterFaLable : $t('GENERAL.empty') }}</b>
            </li>
            <li>
              <span> {{ $t('GENERAL.report.toFilter') }} : </span><b>{{ home.toFilterFaLable ? home.toFilterFaLable : $t('GENERAL.empty') }}</b>
            </li>
            <li>
              <span> {{ $t('GENERAL.report.range') }} : </span><b>{{ home.timeFilter ? $t(`STATS.HOME.${home.timeFilter.code}`) : $t('GENERAL.empty') }}</b>
            </li>
          </ul>
        </div>
        <!-- call detail -->
        <div class="col-12 col-md-6" v-if="operator.details">
          <h5>{{ $t('STATS.OPERATOR.detail.title') }}</h5>
          <ul>
            <li>
              <span> {{ $t('STATS.OPERATOR.detail.Agents') }} : </span><b>{{ operator.details ? operator.details.length : 0 }} {{ $t('GENERAL.person') }}</b>
            </li>
            <li>
              <span> {{ $t('STATS.OPERATOR.detail.avgSession') }} : </span><b> {{ $t('STATS.OPERATOR.detail.undefine') }}</b>
            </li>
            <li>
              <span> {{ $t('STATS.OPERATOR.detail.shortestSession') }} : </span><b> {{ $t('STATS.OPERATOR.detail.undefine') }}</b>
            </li>
            <li>
              <span> {{ $t('STATS.OPERATOR.detail.longestSession') }} : </span><b> {{ $t('STATS.OPERATOR.detail.undefine') }}</b>
            </li>
          </ul>
        </div>
      </div>

      <!-- Agent Availability جزئیات وقفه -->
      <div class="table-shadow row" v-if="operator.agent" id="agent">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.OPERATOR.agent.GUIDE')">
              <p>{{ $t('STATS.OPERATOR.agent.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.OPERATOR.agent.title') }}</h5>
          </div>
          <div class="export">
            <div class="pdf" @click="tableExport('OPERATOR_agentAvailability', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('OPERATOR_agentAvailability', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('OPERATOR_agentAvailability', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
        </div>

        <div class="w-100" dir="ltr">
          <vue-good-table :columns="columnsAgentDetail" :rows="operator.disposition" :search-options="optionsTable">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'aht'">
                <span>{{ props.row.data2Answered ? (props.row.data2Answered / props.row.countAnswered).toFixed(2) : 0 }}</span>
              </span>
              <span v-else-if="props.column.field == 'idleTime'">
                <span dir="rtl" v-html="props.row.sessionTime ? secondsToDay(parseInt(props.row.sessionTime) / 1000 - (props.row.data2Answered ? parseInt(props.row.data2Answered) : 0), 'enter') : 0"></span>
              </span>
              <span v-else-if="props.column.field == 'data2Answered'">
                <span dir="rtl" v-html="props.row.data2Answered ? secondsToDay(props.row.data2Answered, 'enter') : 0"></span>
              </span>
              <span v-else-if="props.column.field == 'pauseTime'">
                <span dir="rtl" v-html="props.row.puseTime ? secondsToDay(parseInt(props.row.puseTime) / 1000, 'enter') : 0"></span>
              </span>
              <span v-else-if="props.column.field == 'sessionTime'">
                <span dir="rtl" v-html="props.row.sessionTime ? secondsToDay(props.row.sessionTime / 1000, 'enter') : 0"></span>
              </span>
              <span v-else-if="props.column.field == 'pSession'">
                <span>{{ props.row.data2Answered ? (props.row.sessionTime ? ((props.row.data2Answered * 100) / (parseInt(props.row.sessionTime) / 1000)).toFixed(2) : 0) : 0 }} {{ $t('GENERAL.percentage') }}</span>
              </span>
              <span v-else-if="props.column.field == 'countRingUnAnswered'">
                <span>{{ props.row.countRingUnAnswered ? props.row.countRingUnAnswered : 0 }}</span>
              </span>
              <span v-else-if="props.column.field == 'countReject'">
                <span>{{ props.row.countReject ? props.row.countReject : 0 }}</span>
              </span>
              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- the page content  for export-->
        <table class="mt-3" id="OPERATOR_agentAvailability" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('STATS.OPERATOR.agent.agent') }}</th>
              <th>{{ $t('STATS.OPERATOR.agent.answered') }}</th>
              <th>{{ $t('STATS.OPERATOR.agent.rejected') }}</th>
              <th>{{ $t('STATS.OPERATOR.agent.failed') }}</th>
              <th v-if="false">{{ $t('STATS.OPERATOR.agent.failedOut') }}</th>
              <th v-if="false">{{ $t('STATS.OPERATOR.agent.sessions') }}</th>
              <th>{{ $t('STATS.OPERATOR.agent.sessionTime') }}</th>
              <th>{{ $t('STATS.OPERATOR.agent.pSession') }}</th>
              <th>{{ $t('STATS.OPERATOR.agent.pauses') }}</th>
              <th>{{ $t('STATS.OPERATOR.agent.pauseTime') }}</th>
              <th>{{ $t('STATS.OPERATOR.agent.talkTime') }}</th>
              <th v-if="false">{{ $t('STATS.OPERATOR.agent.wrapupTime') }}</th>
              <th v-if="false">{{ $t('STATS.OPERATOR.agent.holdTime') }}</th>
              <th>{{ $t('STATS.OPERATOR.agent.idleTime') }}</th>
              <th>{{ $t('STATS.OPERATOR.agent.aht') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, indexTd) in operator.agent" :key="indexTd">
              <td>{{ td.agent ? td.agent : '' }}</td>
              <td>{{ td.countAnswered ? td.countAnswered : 0 }}</td>
              <td>{{ td.countReject ? td.countReject : 0 }}</td>
              <td>{{ td.countRingUnAnswered ? td.countRingUnAnswered : 0 }}</td>
              <td>{{ td.UnSuccessful ? td.UnSuccessful : 0 }}</td>
              <td v-if="false"></td>
              <td v-if="false">sessions</td>
              <td v-html="td.sessionTime ? secondsToDay(td.sessionTime / 1000, 'enter') : 0"></td>
              <td>{{ td.data2Answered ? (td.sessionTime ? ((td.data2Answered * 100) / (parseInt(td.sessionTime) / 1000)).toFixed(2) : 0) : 0 }} {{ $t('GENERAL.percentage') }}</td>
              <td>{{ td.puseCount ? td.puseCount : 0 }}</td>
              <td v-html="td.puseTime ? secondsToDay(parseInt(td.puseTime) / 1000, 'enter') : 0"></td>
              <td v-html="td.data2Answered ? secondsToDay(td.data2Answered, 'enter') : 0"></td>
              <td v-if="false">{{ td.name ? td.name : 0 }}</td>
              <td v-if="false">{{ td.name ? td.name : 0 }}</td>
              <td v-html="td.sessionTime ? secondsToDay(parseInt(td.sessionTime) / 1000 - (td.data2Answered ? parseInt(td.data2Answered) : 0), 'enter') : 0"></td>
              <td>{{ td.data2Answered ? (td.data2Answered / td.countAnswered).toFixed(2) : 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pause Detail -->
      <div class="table-shadow row" id="pause">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.OPERATOR.pause.GUIDE')">
              <p>{{ $t('STATS.OPERATOR.pause.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.OPERATOR.pause.title') }}</h5>
          </div>
          <div class="export">
            <div class="pdf" @click="tableExport('OPERATOR_pause', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('OPERATOR_pause', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('OPERATOR_pause', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
        </div>

        <div class="w-100" dir="ltr">
          <vue-good-table :columns="columnsAgent" :rows="operator.disposition" :search-options="optionsTable"> </vue-good-table>
        </div>

        <!-- the page content for export -->
        <table class="mt-3" id="OPERATOR_pause" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('STATS.OPERATOR.pause.agent') }}</th>
              <th>{{ $t('STATS.OPERATOR.pause.total') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, indexTd) in operator.agent" :key="indexTd">
              <td>{{ td.agent }}</td>
              <td>{{ td.puseCount ? td.puseCount : 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Call Disposition by Agent مدیریت تماس توسط کارشناس-->
      <div class="table-shadow row" v-if="operator.disposition" id="disposition">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.OPERATOR.answered.GUIDE')">
              <p>{{ $t('STATS.OPERATOR.answered.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.OPERATOR.answered.title') }}</h5>
          </div>
          <div class="export">
            <div class="pdf" @click="tableExport('OPERATOR_disposition', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('OPERATOR_disposition', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('OPERATOR_disposition', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
        </div>

        <div class="w-100" dir="ltr">
          <vue-good-table :columns="columnsDisposition" :rows="operator.disposition" :search-options="optionsTable"> </vue-good-table>
        </div>

        <!-- the page content for export  -->
        <table class="mt-3" id="OPERATOR_disposition" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('STATS.OPERATOR.answered.agent') }}</th>
              <th>{{ $t('STATS.OPERATOR.answered.completeByCaller') }}</th>
              <th>{{ $t('STATS.OPERATOR.answered.completeByAgent') }}</th>
              <th>{{ $t('STATS.OPERATOR.answered.transfer') }}</th>
              <th>{{ $t('STATS.OPERATOR.answered.failed') }}</th>
              <th>{{ $t('STATS.OPERATOR.answered.rejected') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, indexTd) in operator.disposition" :key="indexTd">
              <td>{{ td.agent }}</td>
              <td>{{ td.agent ? td.countCompleteCaller : 0 }}</td>
              <td>{{ td.countCompleteAgent ? td.countCompleteAgent : 0 }}</td>
              <td>{{ td.countTransfer ? td.countTransfer : 0 }}</td>
              <td>{{ td.countRingUnAnswered ? td.countRingUnAnswered : 0 }}</td>
              <td>{{ td.countReject ? td.countReject : 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Full Agent Report -->
      <div class="table-shadow row" id="report">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.OPERATOR.report.GUIDE')">
              <p>{{ $t('STATS.OPERATOR.report.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.OPERATOR.report.title') }}</h5>
          </div>
          <!-- export btn -->
          <div class="export" v-if="!isLoadingExport">
            <div class="pdf" @click="getDataForExport('OPERATOR_report', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="getDataForExport('OPERATOR_report', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="getDataForExport('OPERATOR_report', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
          <div class="loader-wait-request mx-2" style="width: 20px; height: 20px" v-if="isLoadingExport"></div>
        </div>

        <div v-if="operator.report" class="w-100" dir="ltr">
          <vue-good-table :columns="columnsFullReport" :rows="operator.report" :search-options="optionsTable" :pagination-options="paginationOptions">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'time'">
                <span v-if="$i18n.locale == 'en'">{{ jdate(props.row.time, 'YYYY/MM/DD HH:MM') }}</span>
                <span v-else>{{ jdate(props.row.time, 'jYYYY/jMM/jDD HH:MM') }}</span>
              </span>
              <span v-else-if="props.column.field == 'phone'">
                <span>{{ props.row.phone ? props.row.phone : '' }}</span>
              </span>
              <span v-else-if="props.column.field == 'duration'">
                <span dir="rtl" v-if="props.row.event == 'COMPLETECALLER' || props.row.event == 'COMPLETEAGENT '">{{ secondsToDay(props.row.data2, false, 'table') }}</span>
              </span>
              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- table export page content  -->
        <table class="mt-3" id="OPERATOR_report" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('STATS.OPERATOR.report.date') }}</th>
              <th>{{ $t('STATS.OPERATOR.report.queue') }}</th>
              <th>{{ $t('STATS.OPERATOR.report.agent') }}</th>
              <th>{{ $t('STATS.OPERATOR.report.event') }}</th>
              <th>{{ $t('STATS.OPERATOR.report.data1') }}</th>
              <th>{{ $t('STATS.OPERATOR.report.duration') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, index) in rowsExport" :key="index">
              <td v-if="$i18n.locale == 'fa'">{{ jdate(td.time) }}</td>
              <td v-else>{{ td.time }}</td>
              <td>{{ td.queue }}</td>
              <td>{{ td.agent }}</td>
              <td>{{ td.event ? $t(`GENERAL.${td.event}`) : '' }}</td>
              <td>{{ td.data1 }}</td>
              <td>{{ td.data1 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- loader -->
    <loader v-if="!operator.details"></loader>
  </div>
</template>

<script>

/** import pinia homeStore*/
import { useHome } from '../../js/pinia/home'
import { useOperator } from '../../js/pinia/operator'
import { useGeneral } from '../../js/pinia/general'


// helper
import helper from '../../js/helper'
import pdfExport from '../../js/pdfExport'


// import chart
import barChart from '../chart/BarChart.vue'

// import vue good table
import { VueGoodTable } from 'vue-good-table-next';


export default {
  name: 'operator',
  mixins: [helper, pdfExport],
  data() {
    return {
      isLoading: false,
      isLoadingExport: false,

      rowsExport: null,

      optionsTable: {
        enabled: true,
        placeholder: this.$t('GENERAL.searchFeild')
      },
      paginationOptions: {
        enabled: true,
        mode: 'records',
        perPage: 10,
        page: 1,
        position: 'bottom',
        perPageDropdown: [10, 25, 50, 100],
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

      columnsFullReport: [
        {
          label: this.$t('STATS.OPERATOR.report.callid'),
          field: 'callid',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.OPERATOR.report.duration'),
          field: 'duration',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.OPERATOR.report.data1'),
          field: 'phone',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },



        {
          label: this.$t('STATS.OPERATOR.report.event'),
          field: 'event',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.OPERATOR.report.agent'),
          field: 'agent',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.OPERATOR.report.queue'),
          field: 'queuename',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.OPERATOR.report.date'),
          field: 'time',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
      ],

      columnsDisposition: [

        {
          label: this.$t('STATS.OPERATOR.answered.rejected'),
          field: 'countReject',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('STATS.OPERATOR.answered.failed'),
          field: 'countRingUnAnswered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },

        {
          label: this.$t('STATS.OPERATOR.answered.transfer'),
          field: 'countTransfer',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },

        {
          label: this.$t('STATS.OPERATOR.answered.completeByAgent'),
          field: 'countCompleteAgent',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('STATS.OPERATOR.answered.completeByCaller'),
          field: 'countCompleteCaller',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('STATS.OPERATOR.answered.agent'),
          field: 'agent',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
      ],

      columnsAgent: [
        {
          label: this.$t('STATS.OPERATOR.pause.total'),
          field: 'puseCount',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.OPERATOR.pause.agent'),
          field: 'agent',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
      ],

      columnsAgentDetail: [

        {
          label: this.$t('STATS.OPERATOR.agent.aht'),
          field: 'aht',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.OPERATOR.agent.idleTime'),
          field: 'idleTime',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },

        {
          label: this.$t('STATS.OPERATOR.agent.talkTime'),
          field: 'data2Answered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },

        {
          label: this.$t('STATS.OPERATOR.agent.pauseTime'),
          field: 'pauseTime',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.OPERATOR.agent.pauses'),
          field: 'puseCount',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.OPERATOR.agent.pSession'),
          field: 'pSession',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.OPERATOR.agent.sessionTime'),
          field: 'sessionTime',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('STATS.OPERATOR.agent.UnSuccessful'),
          field: 'countUnSuccessful',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },

        {
          label: this.$t('STATS.OPERATOR.agent.failed'),
          field: 'countRingUnAnswered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },


        {
          label: this.$t('STATS.OPERATOR.agent.rejected'),
          field: 'countReject',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.OPERATOR.agent.answered'),
          field: 'countAnswered',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('STATS.OPERATOR.agent.agent'),
          field: 'agent',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
      ],



    }
  },
  methods: {
    /** show lable object */
    showLable(items) {
      let lable = ''
      items.map((item) => {
        lable += ', ' + item.title
      })
      return lable.substring(1)
    },

    /** search full agent report */
    async searchReport() {
      try {
        this.isLoading = true;

        let data = {
          'method': 'Operator_search',
          search: this.searchfullReport
        }

        let req = await this.$axios({
          url: '/stats/operatorActions',
          data: data
        })
        console.log(req);
      } catch (error) {
        console.error(error);
      }
    },

    /** get data from api */
    async getData() {
      /** back to home component */
      if (!this.home.queues.length) return this.$router.push({ name: 'stats' })

      try {
        this.isLoading = true;


        let agents = []
        this.home.agents.map((item) => { return agents.push(item.code) })
        let queues = []
        this.home.queues.map((item) => { return queues.push(item.code) })

        let data = {
          'method': 'Operator_getData',
          'queues': queues,
          'agents': agents,
          'timeFilter': this.home.timeFilter,
          'toFilter': this.home.toFilter ? this.moment(this.home.toFilter + ' ' + this.home.toTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null,
          'fromFilter': this.home.fromFilter ? this.moment(this.home.fromFilter + ' ' + this.home.fromTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null,
        }


        let req = await this.$axios({
          url: '/stats/operatorActions',
          data: data
        })

        /** start Agent Availability  */
        let time = req.data.time;
        /**  دسترس پذیری کارشناس  */
        let agentAvailability = req.data.agentAvailability
        let session = this.calcSession(agentAvailability.session, time.firstTime, time.lastTime);
        let puse = this.calcPuse(agentAvailability.puse, time.firstTime, time.lastTime);
        let mergeAgentDetail = await this.merge(agentAvailability.completeAgent, session, 'agent');
        mergeAgentDetail = await this.merge(agentAvailability.completeAgent, puse, 'agent');
        mergeAgentDetail = await this.merge(agentAvailability.completeAgent, agentAvailability.reject, 'agent');
        mergeAgentDetail = await this.merge(agentAvailability.completeAgent, agentAvailability.ringUnAnswered, 'agent');



        /** ناموفق یکتا */
        let UnSuccessful = await this.calcUnSuccessful(agentAvailability.unSuccessful);
        mergeAgentDetail = await this.merge(agentAvailability.completeAgent, UnSuccessful, 'agent');

        /** End Agent Availability  */


        /** start Call Disposition by Agent */
        /**  مدیریت تماس توسط کارشناس*/
        let disposition = req.data.disposition
        let mergeDisposition = await this.merge(disposition.completeAgent, disposition.completeCaller, 'agent');
        mergeDisposition = await this.merge(disposition.completeAgent, disposition.transfer, 'agent');
        mergeDisposition = await this.merge(disposition.completeAgent, mergeAgentDetail, 'agent');
        /** End Call Disposition by Agent */


        /**start save req for show in page operator */
        this.operator.details = req.data.details
        this.operator.disposition = mergeDisposition
        this.operator.agent = mergeAgentDetail

        /**end save req for show in page operator */

      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;
    },

    /** merge object with object  use for data waitByTime
       * @param 1 and 2 is object
       * @param 3 is string (name of Common feild )
       */
    merge(first, two, baseField) {
      try {

        const mergeByProperty = (target, source, prop) => {
          source.forEach(sourceElement => {
            let targetElement = target.find(targetElement => {
              return sourceElement[prop] === targetElement[prop];
            })
            targetElement ? Object.assign(targetElement, sourceElement) : target.push(sourceElement);
          })
        }
        mergeByProperty(first, two, baseField);
        return first

      } catch (error) {
        console.error(error);
      }
    },

    /** calc تماس های ناموفق یکتا
     * این بخش بر اساس کال ای دی گروه بندی شده و در این متد بر اساس نام اپراتور تعداد رکوردها نمایش داده می شود
     */
    calcUnSuccessful(objectUnSuccessful) {
      let unsuccessful = []
      this.home.agents.map((item) => {
        let count = 0;
        objectUnSuccessful.map((itemUnSuccessful) => {
          if (item.code == itemUnSuccessful.agent)
            count++;
          unsuccessful.push({
            'agent': item.code,
            'countUnSuccessful': count
          });
        })

      })

      return unsuccessful;

    },
    /** calc session time for any agent */
    calcSession(sessions, firstTime, lastTime) {
      try {

        if (!sessions.length) return [];

        let sessionsCalced = [];
        this.home.agents.map((agent) => {
          let time = 0;
          let start = 0;
          let end = 0;
          let count = 0;

          sessions.map((item) => {
            if (item.agent == agent.code) {

              if (item.event == "ADDMEMBER") {
                if (!start) {
                  start = item.time;
                  end = 0;
                  console.log('ADDMEMBER ', item.agent, ' : ', time, 'start : ', start)
                }
              }


              if (item.event == "REMOVEMEMBER") {
                console.log('REMOVEMEMBER check', item.agent, ' : ', '  end: ', end)

                if (!end) {
                  if (!count) {
                    start = firstTime;
                  }

                  end = item.time;
                  console.log('REMOVEMEMBER set', item.agent, ' : ', time, 'start : ', start, '  end: ', end)
                }

              }

              /** calc time */
              if (start && end) {
                count++;
                time += Math.abs(new Date(start) - new Date(end));
                console.log('calc session', item.agent, ' : ', time, 'start : ', start, '  end: ', end)
                start = end = 0;
              }

            }
          })
          /** محاسبه زمان برای حالتی که کاربردر صف وارد شده ولی خارج نشده */
          if (start) {
            end = lastTime;
            time += Math.abs(new Date(start) - new Date(end));
          }
          sessionsCalced.push({
            agent: agent.code,
            sessionTime: time,
          });

        })

        return sessionsCalced;
      } catch (error) {
        console.error(error);
      }
    },

    /** calc puse time for any agent */
    calcPuse(pauses, firstTime, lastTime) {
      try {
        if (!pauses.length) return [];

        let puseCalced = [];
        this.home.agents.map((agent) => {
          let time = 0;
          let dublicate = 0;
          let start = 0;
          let end = 0;
          let count = 0;
          let oldEvent;

          pauses.map((item) => {

            let newDate = new Date(item.time);
            let dateDublicate = `${newDate.getDate()}_${newDate.getHours()}:${newDate.getMinutes()}`

            if (item.agent == agent.code && (dublicate != dateDublicate || item.event != oldEvent)) {
              oldEvent = item.event;
              dublicate = `${newDate.getDate()}_${newDate.getHours()}:${newDate.getMinutes()}`

              if (item.event == "PAUSE" || item.event == "PAUSEَALL") {
                start = item.time;
                end = 0;
              }
              if (item.event == "UNPAUSE" || item.event == "UNPAUSEَALL") {
                if (!end) {
                  if (!count) {
                    start = firstTime;
                  }
                  end = item.time;
                }
              }

              /** calc time */
              if (start && end) {

                time += Math.abs(new Date(start) - new Date(end));
                start = end = 0;
                count++;
              }
            }
          })
          /** محاسبه زمان برای حالتی که کاربردر صف وارد شده ولی خارج نشده */
          if (start) {
            count++;
            end = lastTime;
            time += Math.abs(new Date(start) - new Date(end));
            console.log('step 3 ', item.agent, ' : ', time, 'start : ', start, '  end: ', end)

          }
          puseCalced.push({
            agent: agent.code,
            puseTime: time,
            puseCount: count
          });

        })

        return puseCalced;

      } catch (error) {
        console.error(error);
      }
    },

    /** report گزارش کامل کارشناس */
    async getReport(pagination = null, exportRequest = false) {
      try {
        /** back to home component */
        if (!this.home.queues.length) return this.$router.push({ name: 'stats' })

        if (this.isLoading) return

        if (!exportRequest) {
          if (pagination == 'next') this.paginationOptions.page++
          else if (pagination == 'back') this.paginationOptions.page--
          else this.paginationOptions.page = 1
        }

        if (this.paginationOptions.page <= 1)
          this.paginationOptions.page = 1;


        this.isLoading = true;


        let agents = []
        this.home.agents.map((item) => { return agents.push(item.code) })
        let queues = []
        this.home.queues.map((item) => { return queues.push(item.code) })


        let data = {
          'page': this.paginationOptions.page,
          'perPage': this.paginationOptions.perPage,
          'method': 'Operator_getAllReport',
          'queues': queues,
          'agents': agents,
          'timeFilter': this.home.timeFilter,
          'toFilter': this.home.toFilter ? this.moment(this.home.toFilter + ' ' + this.home.toTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null,
          'fromFilter': this.home.fromFilter ? this.moment(this.home.fromFilter + ' ' + this.home.fromTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null,
          'export': exportRequest

        }

        let req = await this.$axios({
          url: '/stats/operatorActions',
          data: data
        })
        if (exportRequest)
          return this.rowsExport = req.data.data
        this.totalRecords = req.data.allReport ? req.data.allReport.length : 0
        this.operator.report = req.data.allReport
        if (this.totalRecords > this.perPage)
          this.operator.report.pop();
        console.log(this.operator.report);
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;

    },

    /** request export
 * @param1 is string for detect type file (pdf,scv,...)
 */
    async getDataForExport(idTable, kind) {
      try {
        this.isLoadingExport = true;
        await this.getReport(null, true)
        this.tableExport(idTable, kind)
        this.isLoadingExport = false;

      } catch (error) {
        console.error(error);
      }
    },

  },
  components: {
    barChart,
    VueGoodTable
  },
  async mounted() {
    await this.getData()

    this.getReport()
  },
  setup() {
    const home = useHome()
    const operator = useOperator()
    const general = useGeneral()

    return {
      home,
      general,
      operator
    }
  }
}
</script>

<style lang='scss'>
@import '~vue-good-table-next/dist/vue-good-table-next.css';

#operator {
}
</style>