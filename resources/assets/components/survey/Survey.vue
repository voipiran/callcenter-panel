<template>
  <div id="surveyCore" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <!-- title -->
        <h3>{{ $t('SURVEY.Survey.title') }}</h3>
        <!-- {{-- refresh btn --}} -->
        <div class="refresh-ctn">
          <div @click="getData()" class="refresh"></div>
        </div>
      </div>

      <!-- content-->
      <div class="table-shadow row" id="surveyCore">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('SURVEY.Survey.GUIDE')">
              <p>{{ $t('SURVEY.Survey.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('SURVEY.Survey.title') }}</h5>
          </div>
          <div class="export" v-if="!isLoadingExport">
            <div class="pdf" @click="tableExport('surveyCoreDetail', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('surveyCoreDetail', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('surveyCoreDetail', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
          <div class="loader-wait-request mx-2" style="width: 20px; height: 20px" v-if="isLoadingExport"></div>
        </div>

        <!-- vue good table -->
        <div class="automatica-call-table" dir="rtl">
          <vue-good-table :columns="columnsSurveyCore" :rows="surveyData" :search-options="optionsTable" :pagination-options="paginationOptions">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'time'">
                <span v-if="$i18n.locale == 'en'">{{ jdate(props.row.date_time, 'YYYY/MM/DD HH:mm') }}</span>
                <span v-else>{{ jdate(props.row.date_time, 'jYYYY/jMM/jDD HH:mm') }}</span>
              </span>

              <span v-else-if="props.column.field == 'operate'">
                <div v-if="isLoadingOperate != props.row.id" class="operate">
                  <!-- btn edit -->
                  <button v-show="setPermission('surveyChild.survey.edit')" class="btn-primary" @click="edit(props.row.id)" v-if="false">
                    <span> {{ $t('GENERAL.btnEdit') }}</span>
                  </button>
                  <!-- remove btn -->
                  <button v-show="setPermission('surveyChild.survey.remove')" class="btn-warning mx-2" @click="removeConfirm(props.row)">
                    <span> {{ $t('GENERAL.btnRemove') }}</span>
                  </button>
                </div>

                <!-- confirm remove-->
                <div v-if="isLoadingOperate == props.row.id">
                  <div class="d-flex align-items-center justify-content-center" v-if="!isLoadingRemove">
                    <button class="btn-submit mx-2" @click="remove(props.row)">
                      <span> {{ $t('GENERAL.btnRemove') }}</span>
                    </button>
                    <button class="btn-warning" @click="isLoadingOperate = null">
                      <span> {{ $t('GENERAL.btnCancel') }}</span>
                    </button>
                  </div>
                  <!-- loader -->
                  <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoadingRemove">
                    <div class="loader-wait-request" style="width: 20px; height: 20px"></div>
                  </div>
                </div>
              </span>

              <span v-else-if="props.column.field == 'customer_voice_path'">
                <span v-if="props.row.customer_voice_path">
                  <audio controls>
                    <source :src="filePathVoicesGenerator(props.row.customer_voice_path)" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </span>
                <span v-else>
                  <span>{{ $t('SURVEY.Survey.notMessage') }}</span>
                </span>
              </span>

              <span v-else-if="props.column.field == 'customer_message'">
                <span v-if="props.row.customer_message">
                  <audio controls>
                    <source :src="filePathSurveyGenerator(props.row.customer_message)" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </span>
                <span v-else>
                  <span>{{ $t('SURVEY.Survey.notMessage') }}</span>
                </span>
              </span>

              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- table for export-->
        <table class="mt-4" id="surveyCoreDetail" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('SURVEY.Survey.id') }}</th>
              <th>{{ $t('SURVEY.Survey.uniqueid') }}</th>
              <th>{{ $t('SURVEY.Survey.time') }}</th>
              <th>{{ $t('SURVEY.Survey.agent_number') }}</th>
              <th>{{ $t('SURVEY.Survey.agent_name') }}</th>
              <th>{{ $t('SURVEY.Survey.caller_number') }}</th>
              <th>{{ $t('SURVEY.Survey.caller_name') }}</th>
              <th>{{ $t('SURVEY.Survey.survey_value') }}</th>
            </tr>
          </thead>
          <tbody>
            <!-- content -->
            <tr v-for="(td, index) in rowsExport" :key="index">
              <td>{{ td.id }}</td>
              <td>{{ td.uniqueid }}</td>
              <td v-if="$i18n.locale == 'en'">{{ jdate(td.date_time, 'YYYY/MM/DD') }}</td>
              <td v-else>{{ jdate(td.date_time, 'jYYYY/jMM/jDD') }}</td>
              <td>{{ td.agent_number }}</td>
              <td>{{ td.agent_name }}</td>
              <td>{{ td.caller_number }}</td>
              <td>{{ td.caller_name }}</td>
              <td>{{ td.survey_value }}</td>
            </tr>
          </tbody>
        </table>
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

/** use for search date in vue-good-table */
var moment = require('moment-jalaali')

export default {
  name: 'surveyCore',
  mixins: [helper],
  data() {
    return {
      isLoading: false,
      isLoadingExport: false,

      isLoadingRemove: false,
      isLoadingOperate: false,

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

      columnsSurveyCore: [
        {
          label: this.$t('SURVEY.Survey.id'),
          field: 'id',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },

        {
          label: this.$t('SURVEY.Survey.uniqueid'),
          field: 'uniqueid',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('SURVEY.Survey.time'),
          field: 'time',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
            filterFn: function (currentDate, filterDate) {
              console.log('currentDate, filterDate :', currentDate, filterDate);
              return moment(filterDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD') == moment(currentDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD') || moment(filterDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD') == moment(currentDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
            }
          },
        },
        {
          label: this.$t('SURVEY.Survey.agent_number'),
          field: 'agent_number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },

        {
          label: this.$t('SURVEY.Survey.agent_name'),
          field: 'agent_name',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },

        {
          label: this.$t('SURVEY.Survey.caller_number'),
          field: 'caller_number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Survey.caller_name'),
          field: 'caller_name',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Survey.survey_value'),
          field: 'survey_value',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Survey.customer_message'),
          field: 'customer_voice_path',
        },

        {
          label: this.$t('SURVEY.Survey.customer_voice_path'),
          field: 'customer_message',
        },

        {
          label: this.$t('GENERAL.btnOperation'),
          field: 'operate',
          sortable: false
        },
      ],
      surveyData: [],
      rowsExport: [],
    }
  },

  methods: {
    /** get data from api */
    async getData() {
      try {
        this.isLoading = true;
        let req = await this.$axios({
          url: '/survey/core-survey/action',
          data: {
            method: 'getData'
          },
        })

        this.surveyData = req.data.data


        this.rowsExport = this.surveyData;
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;

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


        this.tableExport('surveyCoreDetail', type);

      } catch (error) {
        console.error(error);
      }
      this.isLoadingExport = false;

    },

    /** show swal for confirm remove card */
    async removeConfirm(row) {
      if (this.isLoadingOperate) return
      this.isLoadingOperate = row.id
    },
    /** remove row */
    async remove() {
      this.isLoadingRemove = true
      try {
        await this.$axios({
          url: '/survey/core-survey/action',
          data: {
            method: 'remove',
            id: this.isLoadingOperate
          },
        })

        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });
        await this.getData();
      } catch (error) {
        console.log(error);
      }
      this.isLoadingRemove = false;
      this.isLoadingOperate = null;
    },
    /** redirect for edit row */
    edit(id) {
      this.$router.push({ name: 'survey-core-survey-edit', params: { 'id': id } });
    },
    filePathSurveyGenerator(path) {
      return `${API}/${path}`
    },
    filePathVoicesGenerator(path) {
      return `${API}storage/survey/voices/${path}`
    }

  },

  components: {
    VueGoodTable
  },

  async mounted() {
    this.getData();
  }
}
</script>

<style lang='scss'>
#surveyCore {
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