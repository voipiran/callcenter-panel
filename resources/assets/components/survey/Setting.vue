<template>
  <div id="surveySetting" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <!-- title -->
        <h3>{{ $t('SURVEY.Setting.title') }}</h3>
        <!-- {{-- refresh btn --}} -->
        <div class="refresh-ctn">
          <div @click="getData()" class="refresh"></div>
        </div>
      </div>

      <!-- content-->
      <div class="table-shadow row" id="surveySetting">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('SURVEY.Setting.GUIDE')">
              <p>{{ $t('SURVEY.Setting.GUIDE') }}</p>
            </div>
            <h5 class="m-0 p-2">{{ $t('SURVEY.Setting.title') }}</h5>
            <!-- btn add survey -->
            <button class="btn-submit mx-2" @click="submitAdd()">{{ $t('GENERAL.btnAdd') }}</button>
          </div>
          <div class="export" v-if="!isLoadingExport">
            <div class="pdf" @click="tableExport('surveySettingExport', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('surveySettingExport', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('surveySettingExport', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>
          <div class="loader-wait-request mx-2" style="width: 20px; height: 20px" v-if="isLoadingExport"></div>
        </div>

        <!-- vue good table -->
        <div class="automatica-call-table" dir="rtl">
          <vue-good-table :columns="columnsSurveySetting" :rows="surveyData" :search-options="optionsTable" :pagination-options="paginationOptions">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'time'">
                <span v-if="$i18n.locale == 'en'">{{ jdate(props.row.date_time, 'YYYY/MM/DD HH:mm') }}</span>
                <span v-else>{{ jdate(props.row.date_time, 'jYYYY/jMM/jDD HH:mm') }}</span>
              </span>

              <span v-else-if="props.column.field == 'operate'">
                <div v-if="isLoadingOperate != props.row.id" class="operate">
                  <!-- btn edit -->
                  <button class="btn-primary" @click="edit(props.row.id)">
                    <span> {{ $t('GENERAL.btnEdit') }}</span>
                  </button>
                  <!-- remove btn -->
                  <button class="btn-warning mx-2" @click="removeConfirm(props.row)">
                    <span> {{ $t('GENERAL.btnRemove') }}</span>
                  </button>
                </div>

                <!-- confirm remove-->
                <div v-if="isLoadingOperate == props.row.id">
                  <div class="d-flex align-items-center justify-content-center" v-if="!isLoadingRemove">
                    <button class="btn-submit" @click="remove(props.row)">
                      <span> {{ $t('GENERAL.btnRemove') }}</span>
                    </button>
                    <button class="btn-warning mx-2" @click="isLoadingOperate = null">
                      <span> {{ $t('GENERAL.btnCancel') }}</span>
                    </button>
                  </div>
                  <!-- loader -->
                  <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoadingRemove">
                    <div class="loader-wait-request" style="width: 20px; height: 20px"></div>
                  </div>
                </div>
              </span>

              <span v-else-if="props.column.field == 'survey_voice'">
                <span v-if="props.row.survey_voice">
                  <audio controls>
                    <source :src="filePathGenerator(props.row.survey_voice)" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </span>
                <span v-else>
                  <audio controls>
                    <source :src="filePathGenerator('survey-default.wav')" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <!-- <span>{{ $t('SURVEY.Survey.notMessage') }}</span> -->
                </span>
              </span>

              <span v-else-if="props.column.field == 'survey_playagent'">
                {{ showLablePlayAgent(props.row.survey_playagent) }}
              </span>

              <span v-else-if="props.column.field == 'survey_status'">
                {{ props.row.survey_status == '1' ? $t('SURVEY.Setting.active') : $t('SURVEY.Setting.passive') }}
              </span>

              <span v-else-if="props.column.field == 'customer_voice_status'">
                {{ props.row.customer_voice_status == '1' ? $t('SURVEY.Setting.active') : $t('SURVEY.Setting.passive') }}
              </span>

              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- table for export-->
        <table class="mt-4" id="surveySettingExport" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('SURVEY.Setting.id') }}</th>
              <th>{{ $t('SURVEY.Setting.survey_name') }}</th>
              <th>{{ $t('SURVEY.Setting.survey_status') }}</th>
              <th>{{ $t('SURVEY.Setting.survey_string') }}</th>
              <th>{{ $t('SURVEY.Setting.survey_queue') }}</th>
              <th>{{ $t('SURVEY.Setting.customer_voice_limit') }}</th>
              <th>{{ $t('SURVEY.Setting.survey_playagent') }}</th>
            </tr>
          </thead>
          <tbody>
            <!-- content -->
            <tr v-for="(td, index) in rowsExport" :key="index">
              <td>{{ td.id }}</td>
              <td>{{ td.survey_name }}</td>
              <td>{{ td.survey_status == '1' ? $t('SURVEY.Setting.active') : $t('SURVEY.Setting.passive') }}</td>
              <td>{{ td.survey_string }}</td>
              <td>{{ td.survey_queue }}</td>
              <td>{{ td.customer_voice_limit }}</td>
              <td>{{ td.survey_playagent == '1' ? $t('SURVEY.Setting.active') : $t('SURVEY.Setting.passive') }}</td>
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
import pdfExport from '../../js/pdfExport'


// import vue good table
import { VueGoodTable } from 'vue-good-table-next';


export default {
  name: 'surveySetting',
  mixins: [helper, pdfExport],
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

      columnsSurveySetting: [
        {
          label: this.$t('SURVEY.Setting.survey_queue'),
          field: 'survey_queue',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Setting.survey_name'),
          field: 'survey_name',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('SURVEY.Setting.survey_status'),
          field: 'survey_status',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Setting.survey_voice'),
          field: 'survey_voice',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Setting.survey_string'),
          field: 'survey_string',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Setting.customer_voice_status'),
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
          field: 'customer_voice_status'
        },
        {
          label: this.$t('SURVEY.Setting.customer_voice_limit'),
          field: 'customer_voice_limit',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Setting.survey_playagent'),
          field: 'survey_playagent',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('GENERAL.btnOperation'),
          field: 'operate',
          sortable: false
        },

        // {
        //   label: this.$t('SURVEY.Setting.id'),
        //   field: 'id',
        //   filterOptions: {
        //     enabled: true, // enable filter for this column
        //     trigger: 'enter', //only trigger on enter not on keyup 
        //   },

        // }
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
          url: '/survey/setting/action',
          data: {
            method: 'getData'
          },
        })

        this.rowsExport = this.surveyData = req.data.data



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
                survey_status: item.survey_status,
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


        this.tableExport('surveySetting', type);

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
          url: '/survey/setting/action',
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
      this.$router.push({ name: 'survey-setting-edit', params: { 'id': id } });
    },
    filePathGenerator(path) {
      return `${API}storage/survey/setting/${path}?new=${Math.random()}`

    },
    /** submit add survey */
    submitAdd() {
      this.$router.push({ name: 'survey-setting-add' });
    },
    /** show lable field play agent */
    showLablePlayAgent(key) {
      let label = '';
      switch (key) {
        case "0":
          label = this.$t('SURVEY.Setting.survey_playagent_label0')
          break;
        case "1":
          label = this.$t('SURVEY.Setting.survey_playagent_label1')
          break;
        case "2":
          label = this.$t('SURVEY.Setting.survey_playagent_label2')
          break;

      }
      return label
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
#surveySetting {
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