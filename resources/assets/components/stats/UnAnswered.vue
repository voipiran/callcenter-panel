<template>
  <div id="unAnswered" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="unAnswered.details">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <!-- title -->
        <h3>{{ $t('STATS.UN_ANS.title') }}</h3>
        <!-- {{-- refresh btn --}} -->
        <div class="refresh-ctn">
          <div
            @click="
              unAnswered.details = null;
              resetTime();
              getData();
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
        <div class="col-12 col-md-6" v-if="unAnswered.details">
          <h5>{{ $t('STATS.UN_ANS.detail.title') }}</h5>
          <ul>
            <li>
              <span> {{ $t('STATS.UN_ANS.detail.unAnswered') }} : </span><b>{{ unAnswered.details.detail.count ? unAnswered.details.detail.count : 0 }} {{ $t('GENERAL.call') }}</b>
            </li>
            <li>
              <span> {{ $t('STATS.UN_ANS.detail.delay') }} : </span><b v-html="unAnswered.details.detail.time ? secondsToDay(unAnswered.details.detail.time / 1000 / unAnswered.details.detail.count) : '-'"></b>
            </li>
            <li>
              <span> {{ $t('STATS.UN_ANS.detail.num') }} : </span><b>{{ unAnswered.details.numInQueue ? parseInt(unAnswered.details.numInQueue.numInQueue) : 0 }} {{ $t('GENERAL.person') }}</b>
            </li>
            <li>
              <span> {{ $t('STATS.UN_ANS.detail.avgDelay') }} : </span><b v-html="unAnswered.details.detail.delay ? secondsToDay(unAnswered.details.detail.delay / unAnswered.details.detail.count) : 0"></b>
            </li>
          </ul>
        </div>
      </div>

      <!-- دلیل قطع شدن مکالمه  -->
      <div class="table-shadow row" v-if="unAnswered.hangUp.length" id="hangUp">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.UN_ANS.disconnection.GUIDE')">
              <p>{{ $t('STATS.UN_ANS.disconnection.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.UN_ANS.disconnection.title') }}</h5>
          </div>
          <div class="export">
            <div class="pdf" @click="tableExport('UnANSWERED_hangUp', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('UnANSWERED_hangUp', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('UnANSWERED_hangUp', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
        </div>

        <!--vue good table -->
        <div class="w-100" dir="ltr">
          <vue-good-table :columns="columnsHangUp" :rows="unAnswered.hangUp" :search-options="optionsTable">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'pCount'">
                <span dir="rtl">{{ props.row.count != '0' ? ((props.row.count * 100) / unAnswered.details.detail.count).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</span>
              </span>
              <span v-else-if="props.column.field == 'lable'">
                <th>{{ $t(`STATS.UN_ANS.disconnection.${props.row.lable}`) }}</th>
              </span>
              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- the page content for export -->
        <table class="mt-3" id="UnANSWERED_hangUp" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('STATS.UN_ANS.disconnection.event') }}</th>
              <th>{{ $t('STATS.UN_ANS.disconnection.received') }}</th>
              <th>{{ $t('STATS.UN_ANS.disconnection.pCount') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, indexTd) in unAnswered.hangUp" :key="indexTd">
              <th>{{ $t(`STATS.UN_ANS.disconnection.${td.lable}`) }}</th>

              <td>{{ td.count }} {{ $t('GENERAL.call') }}</td>
              <td>{{ td.count != '0' ? ((td.count * 100) / unAnswered.details.detail.count).toFixed(2) : 0 }} {{ $t('GENERAL.percentage') }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- تماس های بدون پاسخ  در صف -->
      <div class="table-shadow row" v-if="unAnswered.queueUnAnswered" id="queueUnAnswered">
        <!-- table -->
        <div class="col-12 col-md-6">
          <!-- title -->
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.UN_ANS.queue.GUIDE')">
              <p>{{ $t('STATS.UN_ANS.queue.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.UN_ANS.queue.title') }}</h5>
          </div>

          <!--vue good table -->
          <div class="w-100" dir="ltr">
            <vue-good-table :columns="columnsQueueUnAnswered" :rows="unAnswered.queueUnAnswered" :search-options="optionsTable">
              <!-- customize fields  -->
              <template #table-row="props">
                <span v-if="props.column.field == 'pCount'">
                  <span dir="rtl">{{ ((props.row.count * 100) / unAnswered.details.detail.count).toFixed(2) }} {{ $t('GENERAL.percentage') }}</span>
                </span>
                <span v-else>
                  {{ props.formattedRow[props.column.field] }}
                </span>
              </template>
            </vue-good-table>
          </div>
        </div>
        <!-- chart -->
        <div class="col-12 col-md-6">
          <barChart :data="unAnswered.queueUnAnswered"></barChart>
        </div>
      </div>

      <!--  نمودار میانگین زمان انتظار در ساعت -->
      <div class="table-shadow row" v-if="unAnswered.chartDelayAnswered" id="chartDelayAnswered">
        <div class="col-12">
          <!-- title -->
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.DIS.chartDelayAnswered.GUIDE')">
              <p>{{ $t('STATS.DIS.chartDelayAnswered.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.DIS.chartDelayAnswered.title') }}</h5>
          </div>
          <!-- chart -->
          <barChart :data="unAnswered.chartDelayAnswered" :convertTime="true" :customLabel="'Chart.avg'"></barChart>
        </div>
      </div>

      <!-- جزئیات تماس های پاسخ داده نشده -->
      <div class="table-shadow row" v-if="unAnswered.unAnsweredCallsDetail" id="unAnsweredCallsDetail">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.UN_ANS.ansDetail.GUIDE')">
              <p>{{ $t('STATS.UN_ANS.ansDetail.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.UN_ANS.ansDetail.title') }}</h5>
          </div>
          <div class="export" v-if="!isLoadingExport">
            <div class="pdf" @click="tableExport('UNANSWERED_answeredCallsDetail', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('UNANSWERED_answeredCallsDetail', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('UNANSWERED_answeredCallsDetail', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
          <div class="loader-wait-request mx-2" style="width: 20px; height: 20px" v-if="isLoadingExport"></div>
        </div>

        <!-- vue good table -->
        <div class="w-100" dir="ltr">
          <vue-good-table :columns="columnsUnAnsweredCallsDetail" :rows="unAnswered.unAnsweredCallsDetail" :search-options="optionsTable" :pagination-options="paginationOptions">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'time'">
                <span v-if="$i18n.locale == 'en'">{{ jdate(props.row.time, 'YYYY/MM/DD HH:mm') }}</span>
                <span v-else>{{ jdate(props.row.time, 'jYYYY/jMM/jDD HH:mm') }}</span>
              </span>

              <span v-else-if="props.column.field == 'hurs'">
                <span>{{ jdate(props.row.time, 'HH:mm') }}</span>
              </span>
              <span v-else-if="props.column.field == 'data1'">
                <span dir="rtl">{{ props.row.data1 }} </span>
              </span>
              <span v-else-if="props.column.field == 'data2'">
                <span dir="rtl">{{ props.row.data2 }} </span>
              </span>
              <span class="voice" v-else-if="props.column.field == 'voice'" @click="getVoice(props.row.voice)">
                <svg v-if="voiceLoading != props.row.voice && !props.row.file" xmlns="http://www.w3.org/2000/svg" width="16.015" height="15.003" viewBox="0 0 16.015 15.003" fill="gray">
                  <path
                    id="download"
                    d="M70.19,101.521a.46.46,0,0,0,.639,0l5.385-5.231a.431.431,0,0,0,0-.621l-1.071-1.04a.46.46,0,0,0-.639,0L71.956,97.1V90.439A.446.446,0,0,0,71.5,90H69.7a.446.446,0,0,0-.452.439v6.848l-2.735-2.658a.46.46,0,0,0-.639,0L64.8,95.669a.431.431,0,0,0,0,.621ZM76.293,99v3.78H64.722V99H62.5v4.893A1.11,1.11,0,0,0,63.613,105H77.4a1.111,1.111,0,0,0,1.113-1.111V99H76.293Z"
                    transform="translate(-62.5 -90)"
                  />
                </svg>
                <!-- loader -->
                <div v-else>
                  <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="voiceLoading == props.row.voice && !props.row.file">
                    <div class="loader-wait-request" style="height: 20px; width: 20px"></div>
                  </div>
                  <!-- if voice exist -->
                  <div v-if="props.row.file != 'empty' && voiceLoading != props.row.voice">
                    <audio controls>
                      <source :src="`monitor/${props.row.pathFile}/${props.row.file}`" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <!-- if not exist -->
                  <div v-if="props.row.file == 'empty' && voiceLoading != props.row.voice">
                    {{ $t('STATS.UN_ANS.ansDetail.NotVoice') }}
                  </div>
                </div>
              </span>
              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- table  for export-->
        <table class="mt-4" id="UNANSWERED_answeredCallsDetail" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('STATS.UN_ANS.ansDetail.duration') }}</th>
              <th>{{ $t('STATS.UN_ANS.ansDetail.queue') }}</th>
              <th>{{ $t('STATS.UN_ANS.ansDetail.agent') }}</th>
              <th>{{ $t('STATS.UN_ANS.ansDetail.event') }}</th>
              <th>{{ $t('STATS.UN_ANS.ansDetail.ringTime') }}</th>
              <th>{{ $t('STATS.UN_ANS.ansDetail.wait') }}</th>
              <th>{{ $t('STATS.UN_ANS.ansDetail.time') }}</th>
            </tr>
          </thead>
          <tbody>
            <!-- content -->
            <tr v-for="(td, index) in rowsExport" :key="index">
              <td v-if="$i18n.locale == 'en'">{{ jdate(td.time, 'YYYY/MM/DD') }}</td>
              <td v-else>{{ jdate(td.time, 'jYYYY/jMM/jDD') }}</td>
              <td>{{ td.queue }}</td>
              <td>{{ td.agent }}</td>
              <td>{{ td.event ? $t(`GENERAL.${td.event}`) : '' }}</td>
              <td>{{ jdate(td.time, 'HH:mm') }}</td>
              <td>{{ secondsToDay(td.data1, false, 'table') }}</td>
              <td>{{ secondsToDay(td.data2, false, 'table') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- loader -->
    <loader v-if="!unAnswered.details"></loader>
  </div>
</template>

<script>

/** import pinia homeStore*/
import { useHome } from '../../js/pinia/home'
import { useUnAnswered } from '../../js/pinia/unAnswered'
import { useGeneral } from '../../js/pinia/general'


// helper
import helper from '../../js/helper'
import pdfExport from '../../js/pdfExport'


// import chart
import barChart from '../chart/BarChart.vue'

// import vue good table
import { VueGoodTable } from 'vue-good-table-next';


export default {
  name: 'unAnswered',
  mixins: [helper, pdfExport],
  data() {
    return {
      isLoading: false,
      voiceLoading: false,

      isLoadingExport: false,
      rowsExport: null,

      page: 1,
      perPage: 10,
      totalRecords: 0,


      optionsTable: {
        enabled: true,
        placeholder: this.$t('GENERAL.searchFeild')
      },
      paginationOptions: {
        enabled: true,
        mode: 'records',
        perPage: 10,
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

      columnsHangUp: [
        {
          label: this.$t('STATS.UN_ANS.disconnection.pCount'),
          field: 'pCount',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.UN_ANS.disconnection.received'),
          field: 'count',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('STATS.UN_ANS.disconnection.event'),
          field: 'lable',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
      ],

      columnsQueueUnAnswered: [
        {
          label: this.$t('STATS.UN_ANS.queue.pCount'),
          field: 'pCount',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.UN_ANS.queue.received'),
          field: 'count',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('STATS.UN_ANS.queue.queue'),
          field: 'lable',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
      ],


      columnsUnAnsweredCallsDetail: [

        // {
        //   label: this.$t('STATS.UN_ANS.ansDetail.ringTime'),
        //   field: 'hurs',
        //   sortable: false,

        // },

        {
          label: this.$t('STATS.UN_ANS.ansDetail.StartPosition'),
          field: 'data2',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.UN_ANS.ansDetail.EndPosition'),
          field: 'data1',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.UN_ANS.ansDetail.event'),
          field: 'event',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.UN_ANS.ansDetail.phone'),
          field: 'phone',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.UN_ANS.ansDetail.queue'),
          field: 'queuename',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.UN_ANS.ansDetail.duration'),
          field: 'time',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        }
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
          'method': 'unAnswered_getData',
          'queues': queues,
          'agents': agents,
          'timeFilter': this.home.timeFilter,
          'toFilter': this.home.toFilter ? this.moment(this.home.toFilter + ' ' + this.home.toTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null,
          'fromFilter': this.home.fromFilter ? this.moment(this.home.fromFilter + ' ' + this.home.fromTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null,
        }
        let req = await this.$axios({
          url: '/stats/unAnsweredActions',
          data: data
        })
        /**start save req for show in page unAnswered */
        this.unAnswered.hangUp = req.data.hangUp
        this.unAnswered.details = req.data.details
        this.unAnswered.queueUnAnswered = req.data.qUnAnswered.map((item) => {
          return {
            lable: item.lable,
            count: parseInt(item.count)
          };
        })


        // <!--  نمودار میانگین زمان انتظار در ساعت -->
        let addAllHours = [];
        for (const hour of Array.from(Array(24).keys())) {
          let duplicate = false;
          req.data.waitByTime.map((item) => {
            if (item.hour == hour)
              duplicate = item;
          })

          if (!duplicate)
            addAllHours.push({
              data1Answered: 0,
              hour: hour.toString(),
            })
          else
            addAllHours.push(duplicate)
        }

        let chartDelayAnswered = addAllHours.map((item) => {
          return {
            'lable': item.hour,
            [this.$t('STATS.DIS.chartDelayAnswered.avgDelay')]: parseFloat(item.data1Answered)

          }
        })

        this.unAnswered.chartDelayAnswered = chartDelayAnswered

        /**end save req for show in page unAnswered */
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;

      this.unAnsweredCallsDetail();

    },

    /** Answered Calls Detail */
    async unAnsweredCallsDetail(pagination = null, exportRequest = false) {
      try {
        /** back to home component */
        if (!this.home.queues.length) return this.$router.push({ name: 'stats' })

        if (this.isLoading) return

        if (!exportRequest) {
          if (pagination == 'next') this.page++
          else if (pagination == 'back') this.page--
          else this.page = 1
        }

        if (this.page <= 1)
          this.page = 1;


        this.isLoading = true;


        let agents = []
        this.home.agents.map((item) => { return agents.push(item.code) })
        let queues = []
        this.home.queues.map((item) => { return queues.push(item.code) })


        let data = {
          'page': this.page,
          'perPage': this.perPage,
          'method': 'UnAnswered_getAnsweredCallsDetail',
          'queues': queues,
          'agents': agents,
          'timeFilter': this.home.timeFilter,
          'toFilter': this.home.toFilter ? this.moment(this.home.toFilter + ' ' + this.home.toTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null,
          'fromFilter': this.home.fromFilter ? this.moment(this.home.fromFilter + ' ' + this.home.fromTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null,
          'export': exportRequest

        }
        let req = await this.$axios({
          url: '/stats/unAnsweredActions',
          data: data
        })

        if (exportRequest)
          return this.rowsExport = req.data.data


        let report = await this.merge(req.data.data, req.data.mobile, 'callid');

        this.unAnswered.unAnsweredCallsDetail = report.map((item) => {
          return {
            agent: item.agent,
            data1: item.data1,
            data2: item.data2,
            data3: item.data3,
            phone: item.phone,
            event: this.$t(`GENERAL.${item.event}`),
            queuename: item.queuename,
            voice: `${item.callid}`,
            time: item.time,

          }
        })


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
  },
  components: {
    barChart,
    VueGoodTable
  },
  async mounted() {
    await this.getData()
  },
  setup() {
    const home = useHome()
    const unAnswered = useUnAnswered()
    const general = useGeneral()

    return {
      home,
      general,
      unAnswered
    }
  }
}
</script>

<style lang='scss'>
#unAnswered {
}
</style>