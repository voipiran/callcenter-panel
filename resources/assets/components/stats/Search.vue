<template>
  <div id="search">
    <notifications position="bottom left" :duration="5000" />
    <!-- content -->
    <div class="container-fluid" v-if="!isLoadingPgae">
      <!-- title page -->
      <h3 class="my-2">{{ $t('STATS.SEARCH.title') }}</h3>

      <!-- search box and table content-->
      <div class="table-shadow row" style="overflow: unset">
        <!-- table -->
        <div class="col-12">
          <!-- title -->
          <div class="d-flex justify-content-between align-items-center w-100">
            <div class="d-flex app">
              <div class="guide" v-if="$t('STATS.SEARCH.search.GUIDE')">
                <p>{{ $t('STATS.SEARCH.search.GUIDE') }}</p>
              </div>
              <h5 class="m-0">{{ $t('STATS.SEARCH.search.title') }}</h5>
            </div>
            <div class="d-flex align-items-center">
              <div class="export" v-if="!isLoadingExport">
                <div class="pdf" @click="getDataForExport('pdf')" :title="$t('GENERAL.pdfExport')"></div>
                <div class="excel" @click="getDataForExport('xls')" :title="$t('GENERAL.excelExport')"></div>
                <div class="csv" @click="getDataForExport('csv')" :title="$t('GENERAL.csvExport')"></div>
              </div>
              <div class="loader-wait-request mx-2" style="width: 20px; height: 20px" v-if="isLoadingExport"></div>
            </div>
          </div>

          <!-- content -->
          <table class="mt-4">
            <thead>
              <tr>
                <th>{{ $t('STATS.SEARCH.search.date') }}</th>
                <th>{{ $t('STATS.SEARCH.search.queue') }}</th>
                <th>{{ $t('STATS.SEARCH.search.agent') }}</th>
                <th>{{ $t('STATS.SEARCH.search.event') }}</th>
                <th>{{ $t('STATS.SEARCH.search.wait') }}</th>
                <th>{{ $t('STATS.SEARCH.search.time') }}</th>
                <th>{{ $t('STATS.SEARCH.search.number') }}</th>
                <th>{{ $t('STATS.SEARCH.search.callid') }}</th>
              </tr>
            </thead>
            <tbody>
              <!-- search and filter box -->
              <tr style="height: 20px">
                <td>
                  <div class="d-flex align-items-center">
                    <i class="fa fa-times remove-input" v-if="timeFilter || shortcutTimeFilter" @click="timeFilter = shortcutTimeFilter = labaleTimefilter = null"></i>
                    <input type="text" :value="labaleTimefilter" class="date w-100 text-center" />
                  </div>
                  <date-picker color="#5c659c" v-model="timeFilter" type="date" custom-input=".date " range clearable>
                    <!-- slot for "now-btn" -->
                    <template #now-btn="{ vm, color, goToday, lang }">
                      <VueMultiselect v-model="shortcutTimeFilter" :options="optionTimeFilter" label="lable" track-by="code" :placeholder="$t('GENERAL.select')" :showLabels="false" @close="submit()"> </VueMultiselect>
                    </template>
                  </date-picker>
                </td>
                <td dir="rlt">
                  <div class="d-flex align-items-center">
                    <VueMultiselect v-model="queuesSelected" :options="queuesAvailable" label="title" track-by="code" :placeholder="$t('GENERAL.select')" :showLabels="false" @close="submit()">
                      <template v-slot:noResult>
                        {{ $t('GENERAL.noResult') }}
                      </template>
                    </VueMultiselect>
                    <i
                      class="fa fa-times remove-input m-1"
                      v-if="queuesSelected"
                      @click="
                        queuesSelected = null;
                        submit();
                      "
                    ></i>
                  </div>
                </td>
                <td dir="rlt">
                  <div class="d-flex align-items-center">
                    <VueMultiselect v-model="agentsSelected" :options="agentsAvailable" label="title" track-by="code" :placeholder="$t('GENERAL.select')" :showLabels="false" @close="submit()">
                      <template v-slot:noResult>
                        {{ $t('GENERAL.noResult') }}
                      </template>
                    </VueMultiselect>
                    <i
                      class="fa fa-times remove-input m-1"
                      v-if="agentsSelected"
                      @click="
                        agentsSelected = null;
                        submit();
                      "
                    ></i>
                  </div>
                </td>
                <td dir="rlt">
                  <div class="d-flex align-items-center">
                    <VueMultiselect v-model="eventsSelected" :options="eventsAvailable" label="title" track-by="code" :placeholder="$t('GENERAL.select')" :showLabels="false" @close="submit()">
                      <template v-slot:noResult>
                        {{ $t('GENERAL.noResult') }}
                      </template>
                    </VueMultiselect>
                    <i
                      class="fa fa-times remove-input m-1"
                      v-if="eventsSelected"
                      @click="
                        eventsSelected = null;
                        submit();
                      "
                    ></i>
                  </div>
                </td>
                <td class="input-slider">
                  <slider v-model="delay" :height="8" track-color="#1e90ff5e" color="dodgerblue" :max="maxDelay" :min="minDelay" :tooltip="true" />
                  <div class="d-flex align-items-center" v-if="delay">
                    <i class="fa fa-times remove-input" @click="delay = null"></i>
                    <input class="w-100" :value="delay + ' ثانیه '" type="text" disabled />
                  </div>
                </td>
                <td class="input-slider">
                  <slider v-model="answered" :height="8" track-color="#1e90ff5e" color="dodgerblue" :max="maxAnswered" :min="minAnswered" :tooltip="true" />
                  <div class="d-flex align-items-center" v-if="answered">
                    <i class="fa fa-times remove-input" @click="answered = null"></i>
                    <input class="w-100" :value="answered + ' ثانیه '" type="text" disabled />
                  </div>
                </td>
                <td style="width: 100px"><input class="w-100 text-center" v-model="number" type="text" @keyup="delaySearch" @keydown.enter="submit()" /></td>
                <td style="width: 100px"><input class="w-100 text-center" v-model="callid" type="text" @keyup="delaySearch" @keydown.enter="submit()" /></td>
              </tr>
              <!-- content -->
            </tbody>
          </table>

          <!--vue good table -->
          <div class="w-100" dir="ltr" v-if="rows">
            <vue-good-table :columns="columns" :rows="rows" :search-options="optionsTable" :pagination-options="paginationOptions">
              <!-- customize fields  -->
              <template #table-row="props">
                <span v-if="props.column.field == 'time'">
                  <span v-if="$i18n.locale == 'en'" dir="rtl">{{ jdate(props.row.time, 'YYYY/MM/DD') }}</span>
                  <span v-else dir="rtl">{{ jdate(props.row.time, 'jYYYY/jMM/jDD') }}</span>
                </span>
                <span v-else-if="props.column.field == 'data1'">
                  <span dir="rtl">{{ secondsToDay(props.row.data1, false, 'table') }}</span>
                </span>

                <span v-else>
                  {{ props.formattedRow[props.column.field] }}
                </span>
              </template>
            </vue-good-table>
          </div>

          <!-- table for export -->
          <table class="mt-4" id="SEARCH_content" v-show="false">
            <thead>
              <tr>
                <th>{{ $t('STATS.SEARCH.search.date') }}</th>
                <th>{{ $t('STATS.SEARCH.search.queue') }}</th>
                <th>{{ $t('STATS.SEARCH.search.agent') }}</th>
                <th>{{ $t('STATS.SEARCH.search.event') }}</th>
                <th>{{ $t('STATS.SEARCH.search.wait') }}</th>
                <th>{{ $t('STATS.SEARCH.search.time') }}</th>
                <th>{{ $t('STATS.SEARCH.search.number') }}</th>
                <th>{{ $t('STATS.SEARCH.search.callid') }}</th>
              </tr>
            </thead>
            <tbody>
              <!-- content -->
              <tr v-for="(item, index) in rows" :key="index">
                <td>{{ jdate(item.time) }}</td>
                <td>{{ item.queuename }}</td>
                <td>{{ item.agent }}</td>
                <td>{{ item.event }}</td>
                <td>{{ item.data1 }}</td>
                <td>{{ item.data2 }}</td>
                <td>{{ item.data3 }}</td>
                <td>{{ item.callid }}</td>
              </tr>
            </tbody>
          </table>
          <!-- loader -->
          <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoading">
            <div class="loader-wait-request"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- loader -->
    <div class="loader-ctn d-flex align-items-center justify-content-center" style="height: 75vh" v-if="isLoadingPgae">
      <div class="loader-wait-request"></div>
    </div>
  </div>
</template>

<script>

/** import pinia homeStore*/
import { useHome } from '../../js/pinia/home'
import { useSearch } from '../../js/pinia/search'
import { useGeneral } from '../../js/pinia/general'


// helper
import helper from '../../js/helper'
import pdfExport from '../../js/pdfExport'


// multi select
import VueMultiselect from 'vue-multiselect'

/**talkhabi datepicker */
import VuePersianDatetimePicker from 'vue3-persian-datetime-picker'

// slider
import slider from "vue3-slider"

// import vue good table
import { VueGoodTable } from 'vue-good-table-next';


export default {
  name: 'search',
  mixins: [helper, pdfExport],
  data() {
    return {
      isLoading: false,
      isLoadingExport: false,
      isLoadingPgae: false,

      queuesAvailable: [],
      queuesSelected: null,

      agentsAvailable: [],
      agentsSelected: null,

      eventsAvailable: [],
      eventsSelected: null,

      timeFilter: null,
      labaleTimefilter: null,
      shortcutTimeFilter: null,
      optionTimeFilter: [
        { code: 'today', lable: this.$t(`STATS.HOME.today`) },
        { code: 'yesterday', lable: this.$t(`STATS.HOME.yesterday`) },
        { code: 'lastWeek', lable: this.$t(`STATS.HOME.lastWeek`) },
        { code: 'currentWeek', lable: this.$t(`STATS.HOME.currentWeek`) },
        { code: 'currentMonth', lable: this.$t(`STATS.HOME.currentMonth`) },
        { code: 'last3Month', lable: this.$t(`STATS.HOME.last3Month`) },
      ],

      delay: null,
      minDelay: 0,
      maxDelay: 100,

      answered: null,
      minAnswered: 0,
      maxAnswered: 100,

      callid: null,
      number: null,

      rowsExport: null,
      rows: null,
      perPage: 10,
      page: 1,
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

      columns: [
        {
          label: this.$t('STATS.SEARCH.search.callid'),
          field: 'callid',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('STATS.SEARCH.search.number'),
          field: 'data3',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.SEARCH.search.time'),
          field: 'data2',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.SEARCH.search.wait'),
          field: 'data1',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },

        {
          label: this.$t('STATS.SEARCH.search.event'),
          field: 'event',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },

        {
          label: this.$t('STATS.SEARCH.search.agent'),
          field: 'agent',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.SEARCH.search.queue'),
          field: 'queuename',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('STATS.SEARCH.search.date'),
          field: 'time',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
          sortable: false,
        },
      ],


      /** delay timer */
      timer: null,

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
      try {

        this.isLoadingPgae = true
        let req = await this.$axios({
          url: '/stats/searchActions',
          data: {
            method: 'Search_getData'
          }
        })

        let queue = []
        req.data.queuesAvailable.map((item) => {
          if (item.descr != 'NONE')
            queue.push({ code: item.extension, title: `${item.descr} (${item.extension})` })
        })
        console.log(queue);
        this.queuesAvailable = queue
        // // get agent data
        let agent = []
        req.data.agentsAvailable.map((item) => {
          if (item.name != 'NONE')
            agent.push({ code: item.name, title: item.name })
        })
        this.agentsAvailable = agent

        let event = []
        req.data.eventsAvailable.map((item) => {
          if (item.event != 'NONE' && item.event != 'CONFIGRELOAD' && item.event != 'DID' && item.event != 'QUEUESTART')
            event.push({ code: item.event, title: this.$t(`GENERAL.${item.event}`) })
        })
        this.eventsAvailable = event

        this.maxDelay = parseInt(req.data.maxDelay)
        this.maxAnswered = parseInt(req.data.maxAnswered)

      } catch (error) {
        console.error(error);
      }
      this.isLoadingPgae = false

    },

    /** submit search
     * call this method after change any input or multi select and slider
     */
    async submit(pagination = null, exportRequest = false, firstLoad = false) {
      try {

        if (!exportRequest) {
          this.rows = null
          this.totalRecords = 0

          if (pagination == 'next') this.page++
          else if (pagination == 'back') this.page--
          else this.page = 1

          this.isLoading = true;
        }


        let fromFilter = this.timeFilter ? (this.timeFilter.length ? this.moment(this.timeFilter[0] + '00:00', 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null) : null;
        let fromFilterEndTime = this.timeFilter ? (this.timeFilter.length ? this.moment(this.timeFilter[0] + '23:59', 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null) : null;
        let toFilter = this.timeFilter ? this.timeFilter[1] ? (this.timeFilter.length ? this.moment(this.timeFilter[1] + '23:59', 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null) : fromFilterEndTime : null;

        if (firstLoad) {
          toFilter = this.home.toFilter ? this.moment(this.home.toFilter + ' ' + this.home.toTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null;
          fromFilter = this.home.fromFilter ? this.moment(this.home.fromFilter + ' ' + this.home.fromTime, 'jYYYY/jM/jD HH:mm', 'YYYY-MM-DD HH:mm') : null;
          if (!toFilter) return this.isLoading = false;
        }


        let data = {
          'method': 'Search_submit',
          'queues': this.queuesSelected ? this.queuesSelected.code : null,
          'agents': this.agentsSelected ? this.agentsSelected.code : null,
          'events': this.eventsSelected ? this.eventsSelected.code : null,
          'delay': this.delay,
          'answered': this.answered,
          'callid': this.callid,
          'number': this.number,
          'perPage': this.perPage,
          'page': this.page,
          'export': exportRequest,
          'fromFilter': fromFilter,
          'toFilter': toFilter,
          'timeFilter': this.shortcutTimeFilter
        }
        let req = await this.$axios({
          url: '/stats/searchActions',
          data: data
        })

        this.rows = req.data.data.map((item) => {
          return {
            agent: item.agent,
            callid: item.callid,
            data1: item.data1,
            data2: item.data2,
            data3: item.data3,
            event: this.$t(`GENERAL.${item.event}`),
            queuename: item.queuename,
            time: item.time,
          }
        })

        this.labaleTimefilter = req.data.time ? this.jdate(req.data.time[0], 'jYYYY/jMM/jDD') + ' ~ ' + this.jdate(req.data.time[1], 'jYYYY/jMM/jDD') : '';


      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    /** request export
     * @param1 is string for detect type file (pdf,scv,...)
     */
    async getDataForExport(kind) {
      try {
        this.isLoadingExport = true;
        await this.submit(null, true)
        this.tableExport('SEARCH_content', kind)
        this.isLoadingExport = false;

      } catch (error) {
        console.error(error);
      }
    },
    /** delay for call loadItems after type in input search */
    delaySearch() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.submit()
        clearTimeout(this.timer);
        this.timer = null;
      }, 800);
    }
  },
  components: {
    VueMultiselect,
    datePicker: VuePersianDatetimePicker,
    slider,
    VueGoodTable
  },
  mounted() {
    this.getData()
    this.submit(null, false, 'first load');
  },
  watch: {
    timeFilter() {
      this.submit()
    },
    delay() {
      this.delaySearch()
    },
    answered() {
      this.delaySearch()
    }
  },
  setup() {
    const home = useHome()
    const search = useSearch()
    const general = useGeneral()

    return {
      home,
      general,
      search
    }
  }
}
</script>

<style lang='scss'>
@import '~vue-multiselect/dist/vue-multiselect.css';
#search {
  .input-slider {
    width: 100px;
    input {
      padding: 0 !important;
      background: unset !important;
      text-align: center;
      border: none;
    }
  }
  .multiselect * {
    font-size: 12px !important;
  }
  .remove-input {
    cursor: pointer;
    color: red;
  }
}
</style>