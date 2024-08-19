<template>
  <!-- {{-- modal setting for get queue and time --}} -->
  <section v-if="display" class="d-none" :class="{ 'd-block': display }">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" id="modalGetSetting">
          <!-- btns filter time report -->
          <!-- <div class="p-1">
            <div class="timeFilter row" :class="{ 'loading-Calc-Date': loadingCalcDate }">
              <div class="col-12" v-if="false">
                <h6>{{ $t('Modal.Setting.shortCutTitle') }}</h6>
                <ul style="overflow: auto" class="px-2">
                  <li
                    :class="{ active: timeFilter == '1' }"
                    @click="
                      timeFilter == '1' ? (timeFilter = null) : (timeFilter = '1');
                      setTimeDatePicker();
                    "
                  >
                    {{ $t('Modal.Setting.today') }}
                  </li>
                  <li
                    :class="{ active: timeFilter == '2' }"
                    @click="
                      timeFilter == '2' ? (timeFilter = null) : (timeFilter = '2');
                      setTimeDatePicker();
                    "
                  >
                    {{ $t('Modal.Setting.yesterday') }}
                  </li>
                  <li
                    :class="{ active: timeFilter == '7' }"
                    @click="
                      timeFilter == '7' ? (timeFilter = null) : (timeFilter = '7');
                      setTimeDatePicker();
                    "
                  >
                    {{ $t('Modal.Setting.currentWeek') }}
                  </li>
                  <li
                    :class="{ active: timeFilter == '14' }"
                    @click="
                      timeFilter == '14' ? (timeFilter = null) : (timeFilter = '14');
                      setTimeDatePicker();
                    "
                  >
                    {{ $t('Modal.Setting.lastWeek') }}
                  </li>
                  <li
                    :class="{ active: timeFilter == '30' }"
                    @click="
                      timeFilter == '30' ? (timeFilter = null) : (timeFilter = '30');
                      setTimeDatePicker();
                    "
                  >
                    {{ $t('Modal.Setting.inMonth') }}
                  </li>
                  <li
                    :class="{ active: timeFilter == '90' }"
                    @click="
                      timeFilter == '90' ? (timeFilter = null) : (timeFilter = '90');
                      setTimeDatePicker();
                    "
                  >
                    {{ $t('Modal.Setting.last3Month') }}
                  </li>
                  <li
                    :class="{ active: timeFilter == '360' }"
                    @click="
                      timeFilter == '360' ? (timeFilter = null) : (timeFilter = '360');
                      setTimeDatePicker();
                    "
                  >
                    {{ $t('Modal.Setting.currentYears') }}
                  </li>
                </ul>
              </div>
            </div>
          </div> -->

          <!-- content Queue and Agent-->
          <div class="row my-2 app">
            <!-- Queue -->
            <div class="col-12">
              <div class="select-box my-2">
                <!-- title -->
                <div class="d-flex">
                  <div class="guide" v-if="$t('Modal.Setting.queueGuide')">
                    <p>{{ $t('Modal.Setting.queueGuide') }}</p>
                  </div>
                  <h6 class="my-2">{{ $t('Modal.Setting.queueTitle') }}</h6>
                </div>
                <!-- content -->
                <div class="d-block d-sm-flex justify-content-center w-100 p-2">
                  <VueMultiselect v-model="queuesSelected" :options="allQueues" :placeholder="$t('Modal.Setting.queueTitle')" :showLabels="false" :allow-empty="false" label="title" track-by="code" multiple="true">
                    <template v-slot:noResult>
                      {{ $t('GENERAL.noResult') }}
                    </template>
                  </VueMultiselect>
                </div>
              </div>
            </div>
            <!-- Agents  -->
            <div class="col-12">
              <div class="select-box my-2">
                <!-- title -->
                <div class="d-flex">
                  <div class="guide" v-if="$t('Modal.Setting.agentGuide')">
                    <p>{{ $t('Modal.Setting.agentGuide') }}</p>
                  </div>
                  <h6 class="my-2">{{ $t('Modal.Setting.agentTitle') }}</h6>
                </div>
                <!-- content -->
                <div class="d-block d-sm-flex justify-content-center w-100 p-2">
                  <VueMultiselect v-model="agentsSelected" :options="allAgents" :placeholder="$t('Modal.Setting.agentTitle')" :showLabels="false" :allow-empty="false" label="title" track-by="code" multiple="true">
                    <template v-slot:noResult>
                      {{ $t('GENERAL.noResult') }}
                    </template>
                  </VueMultiselect>
                </div>
              </div>
            </div>

            <!-- time -->
            <div class="col-12">
              <div class="select-box my-2">
                <!-- title -->
                <div class="d-flex">
                  <div class="guide" v-if="$t('Modal.Setting.timeGuide')">
                    <p>{{ $t('Modal.Setting.timeGuide') }}</p>
                  </div>
                  <h6 class="my-2">{{ $t('Modal.Setting.time') }}</h6>
                </div>
                <!-- content -->
                <div class="d-block d-sm-flex justify-content-center w-100 p-2">
                  <!-- from date -->
                  <div class="date-holder w-100">
                    <date-picker
                      color="#5c659c"
                      v-model="fromFilter"
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
                    ></date-picker>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- btn submit -->
          <div class="submit m-2">
            <button class="btn-submit" @click="submit()">
              <span v-if="!isLoading"> {{ $t('Modal.Setting.btnSubmit') }}</span>
              <!-- loader -->
              <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoading">
                <div class="loader-wait-request" style="width: 20px; height: 20px"></div>
              </div>
            </button>
          </div>

          <!-- close -->
          <div class="modal-footer-content mt-3">
            <div class="close-dialog" @click="closeModal()">
              <svg width="20" height="20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="#9EABCD" />
                <rect x="25.3137" y="14" width="57" height="16" rx="3" transform="rotate(45 25.3137 14)" fill="#2C335E" />
                <rect x="65.6188" y="25.3135" width="57" height="16" rx="3" transform="rotate(135 65.6188 25.3135)" fill="#2C335E" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

/**talkhabi datepicker */
import VuePersianDatetimePicker from 'vue3-persian-datetime-picker'

/** import pinia */
import { useSurvey } from '../js/pinia/survey'

import helper from '../js/helper'

import VueMultiselect from 'vue-multiselect'

import moment from 'moment-jalaali';

export default {
  name: 'modalGetSetting',
  mixins: [helper],
  props: {
    display: {
      type: Boolean,
      default: false, // Set the default value to false
    }
    // Other props if needed
  },
  data() {
    return {
      loadingCalcDate: false,
      isLoading: false,
      allQueues: [],
      queuesSelected: [],

      allAgents: [],
      agentsSelected: [],
      showAllAgent: true,

      timeFilter: '360',

      toFilter: null,
      fromFilter: null,

      toTime: null,
      fromTime: null,

    }
  },
  methods: {
    /** get data from api */
    async getData(changeShowAllAgent = false) {
      try {
        await this.resetForm();

        if (changeShowAllAgent) {
          this.showAllAgent = !this.showAllAgent;
          this.survey.showAllAgent = this.showAllAgent;
        }

        if (this.isLoading) return
        this.isLoading = true;

        this.queuesSelected = this.agentsSelected = []
        let req = await this.$axios({
          url: '/survey/setting/action',
          data: {
            method: 'get_queue_in_survey',
            showAllAgent: this.showAllAgent
          }
        })

        // get queue data
        let queue = []
        // show only queue that define in setting survey else show all queue

        req.data.queue.map((item) => {
          if (item.descr != 'NONE')
            queue.push({ code: item.extension, title: `${item.descr} (${item.extension})` })
        })

        this.allQueues = this.queuesSelected = queue

        // get agent data
        let agent = []
        req.data.agent.map((item) => {
          if (item.name != 'NONE')
            agent.push({ code: item.extension, title: item.name })
        })
        this.allAgents = this.agentsSelected = agent

        this.setTimeDatePicker();

      } catch (error) {
        console.log(error);
      }

      this.isLoading = false;

    },
    /** submit btn show detail */
    async submit() {
      try {
        if (this.isLoading || this.loadingCalcDate) return
        if (!this.queuesSelected.length || !this.queuesSelected.length)
          return this.$notify({
            text: "حداقل یک مورد اپراتور و صف باید انتخاب شود",
            type: 'error'
          });

        /** set in store home */
        await this.syncHomeStoreViaThis()


        this.closeModal();
      } catch (error) {
        console.error(error);
      }

      this.survey.key++;
    },
    closeModal() {
      this.$emit('close-modal');
    },
    /** sync this data via pinia home store */
    syncThisViaHomeStore() {
      this.queuesSelected = this.survey.queuesSelected
      this.agentsSelected = this.survey.agentsSelected
      this.allQueues = this.survey.allQueues
      this.allAgents = this.survey.allAgents
      this.toFilter = this.survey.toFilter
      this.fromFilter = this.survey.fromFilter
      this.toTime = this.survey.toTime
      this.fromTime = this.survey.fromTime

      let timeFilter
      switch (this.survey.timeFilter ? this.survey.timeFilter.code : this.survey.timeFilter) {
        case 'today':
          /**today */
          timeFilter = '1'
          break;
        case 'yesterday':
          /**yesterday */
          timeFilter = '2'
          break;
        case 'lastWeek':
          /**last week */
          timeFilter = '14'
          break;
        case 'currentWeek':
          /**in week */
          timeFilter = '7'
          break;
        case 'currentMonth':
          /**in month */
          timeFilter = '30'
          break;
        case 'last3Month':
          timeFilter = '90'
          break;
        default:
          timeFilter = null
          break;
      }

      this.timeFilter = timeFilter
    },
    /** sync pinia home store via this data*/
    syncHomeStoreViaThis() {
      let timeFilter = null
      switch (this.timeFilter) {
        case '1':
          /**today */
          timeFilter = { code: 'today', lable: 'امروز' }
          break;
        case '2':
          /**yesterday */
          timeFilter = { code: 'yesterday', lable: 'دیروز' }
          break;
        case '14':
          /**last week */
          timeFilter = { code: 'lastWeek', lable: 'هفته گذشته' }
          break;
        case '7':
          /**in week */
          timeFilter = { code: 'currentWeek', lable: 'هفته جاری' }
          break;
        case '30':
          /**in month */
          timeFilter = { code: 'currentMonth', lable: 'ماه جاری' }
          break;
        case '90':
          timeFilter = { code: 'last3Month', lable: 'سه ماه گذشته' }
          break;
        default:
          timeFilter = null
          break;
      }
      this.survey.allQueues = this.allQueues
      this.survey.allAgents = this.allAgents
      this.survey.queuesSelected = this.queuesSelected
      this.survey.agentsSelected = this.agentsSelected
      this.survey.timeFilter = timeFilter
      this.survey.toTime = this.toTime
      this.survey.fromTime = this.fromTime
      this.survey.showAllAgent = this.showAllAgent
      this.survey.fromFilterFaLable = this.survey.fromFilter = this.fromFilter
      this.survey.toFilterFaLable = this.survey.toFilter = this.toFilter

      if (this.$i18n.locale == 'en') {
        this.survey.fromFilterFaLable = this.moment(this.survey.fromFilterFaLable, 'jYYYY/jM/jD', 'YYYY/MM/DD')
        this.survey.toFilterFaLable = this.moment(this.survey.toFilterFaLable, 'jYYYY/jM/jD', 'YYYY/MM/DD')
      }

    },

    /** set time date picker 
 * @param 1 is timeFilter number [1 for todat. 7 for week and etc]
 * */
    async setTimeDatePicker() {
      try {

        if (this.loadingCalcDate) return

        this.loadingCalcDate = true;

        let req = await this.$axios({
          url: '/stats/homeActions',
          data: {
            'method': 'Home_calcDateTime',
            'timeFilter': { code: 'currentYears', lable: 'سال جاری' },
            'toFilter': null,
            'fromFilter': null,
          }
        })

        // set date fa
        this.fromFilter = this.survey.toFilterFaLable = this.jdate(req.data.timeFilter[1], 'jYYYY')

        if (this.timeFilter == "360" && this.$i18n.locale == 'fa') {
          const now = moment();
          this.fromFilter = this.jdate(now.startOf('jYear').format('YYYY-MM-DD'), 'jYYYY')
        }

      } catch (error) {
        console.error(error);
      }

      this.loadingCalcDate = false;

    },

    /** reset all input and etc when refresh page click */
    async resetForm() {
      this.survey.queuesSelected = this.queuesSelected = [];
      this.survey.agentsSelected = this.agentsSelected = [];
      this.survey.allQueues = this.allQueues = [];
      this.survey.allAgents = this.allAgents = [];

      // this.survey.showAllAgent = this.showAllAgent = true;

      this.survey.timeFilter = this.timeFilter = null;

      this.survey.toTime = this.toTime = null;
      this.survey.fromTime = this.fromTime = null;

      this.survey.toFilter = this.toFilter = null;
      this.survey.fromFilter = this.fromFilter = null;
      this.survey.toFilterFaLable = this.toFilterFaLable = null;
      this.survey.fromFilterFaLable = this.fromFilterFaLable = null;
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
    datePicker: VuePersianDatetimePicker,
    VueMultiselect
  },
  mounted() {

    if (this.survey.queuesSelected.length) {
      this.syncThisViaHomeStore();
      this.setTimeDatePicker()
      return
    }
    this.getData()


  },
  setup() {
    const survey = useSurvey()
    return {
      survey,
    }
  }
}
</script>

<style scoped lang='scss'>
#modalGetSetting {
  overflow: auto;
  height: 550px;
  .btns {
    padding: 0 20px;
    svg {
      fill: dodgerblue;
      margin: 5px;
      border-radius: 50%;
      box-shadow: 0 3px 6px rgb(0 0 0 / 20%);
      padding: 2px;
    }
    .svg-single-right:hover,
    .svg-all-right:hover,
    .svg-single-left:hover,
    .svg-all-left:hover {
      cursor: pointer;
      fill: gray !important;
    }
    @media (max-width: 575.98px) {
      svg {
        transform: rotate(-90deg);
      }
    }
  }
  .select-box {
    // min-height: 280px;

    select {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
      border: none;
      padding: 6px;
      margin: 7px 0;
      option {
        margin: 5px 0;
        padding-right: 5px;
      }
    }
    .selected,
    .available {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .timeFilter {
    overflow: auto;
    ul {
      display: flex;
      padding: 0;
      background: #dedfe38a;
      padding: 12px;
      border-radius: 10px;
      li {
        cursor: pointer;
        padding: 5px 7px;
        // min-width: 100px;
        text-align: center;
        &:hover {
          font-weight: 700;
        }
      }
      .active {
        background: dodgerblue;
        border-radius: 7px;
        color: white;
      }
    }

    .date-picker {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }

  .show-all-agent {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      span {
        font-weight: bolder;
      }
    }
  }

  .loading-Calc-Date {
    * {
      pointer-events: none !important;
    }
  }
  .date-holder {
    font-size: 10px;
  }
}
</style>