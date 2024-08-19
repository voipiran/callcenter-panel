<template>
  <div id="surveyOperator" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <!-- title -->
        <h3>{{ $t('SURVEY.Operator.title') }}</h3>
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

      <!-- content-->
      <div class="table-shadow row" id="surveyOperator">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('SURVEY.Operator.GUIDE')">
              <p>{{ $t('SURVEY.Operator.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('SURVEY.Operator.title') }}</h5>
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
          <vue-good-table :columns="columnsSurveyOperator" :rows="surveyOperatorData" :search-options="optionsTable" :pagination-options="paginationOptions">
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

import modalGetSettingVue from '../modalGetSetting.vue';
import { useSurvey } from '../../js/pinia/survey';
import { computed, watch, getCurrentInstance } from 'vue';


// import vue good table
import { VueGoodTable } from 'vue-good-table-next';

export default {
  name: 'surveyOperator',
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

      columnsSurveyOperator: [
        {
          label: this.$t('GENERAL.btnOperation'),
          field: 'operate',
          sortable: false
        },
        {
          label: this.$t('SURVEY.Operator.satisfaction_percentage'),
          field: 'satisfaction_percentage',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Operator.count_survey'),
          field: 'count_survey',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Operator.total_survey'),
          field: 'total_survey',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Operator.average_survey'),
          field: 'average_survey',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('SURVEY.Operator.time'),
          field: 'time',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
            filterFn: function (currentDate, filterDate) {
              console.log('currentDate, filterDate :', currentDate, filterDate);
              return this.moment(filterDate, 'jYYYY/jMM/jDD', 'YYYY-MM-DD') == this.moment(currentDate, 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD') || this.moment(filterDate, 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD') == this.moment(currentDate, 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD');
            }
          },
        },
        {
          label: this.$t('SURVEY.Operator.survey_location'),
          field: 'survey_location',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('SURVEY.Operator.agent_number'),
          field: 'agent_number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        }
      ],
      surveyOperatorData: [],
      rowsExport: [],

      displayModalSetting: false,

    }
  },

  methods: {
    /** get data from api */
    async getData() {
      try {
        this.isLoading = true;
        let req = await this.$axios({
          url: '/survey/operator/action',
          data: {
            method: 'getData',
            date: this.surveyStore.fromFilter ? this.moment(this.surveyStore.fromFilter, 'jYYYY', 'YYYY') : null,
            queues: this.surveyStore.queuesSelected.length ? this.surveyStore.queuesSelected.map((item) => item.code) : null,
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

  components: {
    VueGoodTable,
    modalGetSettingVue
  },

  async mounted() {
    this.getData();
  },
  setup() {
    const surveyStore = useSurvey();

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
      ctx.getData();
    });


    return {
      surveyStore,
    };
  },
}
</script>

<style lang='scss'>
#surveyOperator {
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