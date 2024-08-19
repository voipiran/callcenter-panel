<template>
  <div id="survey_edit">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <h3 class="my-2">{{ $t('SURVEY.Survey.Edit.title') }}</h3>

      <div class="table-shadow">
        <div class="d-flex">
          <div class="guide" v-if="$t('SURVEY.Survey.Edit.GUIDE')">
            <p>{{ $t('SURVEY.Survey.Edit.GUIDE') }}</p>
          </div>
          <h5 v-if="!id" class="m-0">{{ $t('SURVEY.Survey.Edit.titleAdd') }}</h5>
          <h5 v-if="id" class="m-0">{{ $t('SURVEY.Survey.Edit.titleEdit') }}</h5>
        </div>

        <!-- content -->
        <div class="row">
          <!-- uniqueid -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Survey.uniqueid') }}</div>
            <input type="text" class="form-control" v-model="uniqueid" />
          </div>

          <!-- time -->
          <div class="col-12 col-md-3 mt-2">
            <div class="mb-2">{{ $t('SURVEY.Survey.time') }}</div>
            <date-picker
              color="#5c659c"
              v-model="date_time"
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
              view="year"
              auto-submit
            ></date-picker>
          </div>

          <!-- agent_number -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Survey.agent_number') }}</div>
            <VueNumberInput v-model="agent_number" controls min="1"></VueNumberInput>
          </div>

          <!-- agent_name -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Survey.agent_name') }}</div>
            <input type="text" class="form-control" v-model="agent_name" />
          </div>

          <!-- caller_number -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Survey.caller_number') }}</div>
            <input type="text" class="form-control" v-model="caller_number" />
          </div>

          <!-- caller_name -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Survey.caller_name') }}</div>
            <input type="text" class="form-control" v-model="caller_name" />
          </div>

          <!-- multi select survey_value -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Survey.survey_value') }}</div>
            <VueMultiselect v-model="survey_value" :options="survey_valueOption" :placeholder="$t('SURVEY.Survey.Edit.survey_value')" :showLabels="false" :allow-empty="false">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>

          <!-- multi select Queue -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('AutomaticCall.INDEX.queue') }}</div>
            <VueMultiselect v-model="queue" :options="queueOption" :placeholder="$t('AutomaticCall.Index.queue')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>
        </div>

        <!-- btn action and file pond-->

        <div class="btns row my-5">
          <div class="col-6 col-md-3 mt-5">
            <button class="btn-submit" @click="submit()">
              <span v-if="!isLoadingSubmit"> {{ $t('GENERAL.btnSave') }}</span>
              <!-- loader -->
              <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoadingSubmit">
                <div class="loader-wait-request" style="width: 20px; height: 20px"></div>
              </div>
            </button>
          </div>
          <div class="col-6 col-md-3 mt-5">
            <button class="btn-warning" @click="$router.go(-1)">
              <span> {{ $t('GENERAL.btnBack') }}</span>
            </button>
          </div>
          <div class="col-12 col-md-6">
            <div>
              <label class="mx-3">{{ $t('SURVEY.Survey.Edit.file') }}</label>
              <file-pond :server="server" :acceptedFileTypes="acceptedFileTypes" name="promp1" ref="promp1" :label-idle="$t('GENERAL.CHOOSE_FILE')" v-bind:allow-multiple="false" :store-as-files="true" @processfiles="loadAudio()" />
            </div>
            <div>
              <audio controls :key="keyUpdateAudioPlayer">
                <source :src="file" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- loader -->
    <loader v-if="isLoading"></loader>
  </div>
</template>

<script>
import helper from '../../js/helper'

/**talkhabi datepicker */
import VuePersiandatetimePicker from 'vue3-persian-datetime-picker'

// multi select
import VueMultiselect from 'vue-multiselect'

// import input number 
import VueNumberInput from "@chenfengyuan/vue-number-input";

import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default {
  name: "survey_edit",
  mixins: [helper],

  data() {
    return {
      isLoading: false,
      isLoadingSubmit: false,

      id: null,
      uniqueid: null,
      date_time: null,
      agent_number: null,
      agent_name: null,
      caller_number: null,
      caller_name: null,

      survey_valueOption: [],
      survey_value: null,

      queueOption: [],
      queue: null,

      acceptedFileTypes: ["audio/wav"],
      file: null,
      server: {
        url: `${API}survey/uploads`,
        method: "POST",
        headers: {
          "X-CSRF-TOKEN": $('meta[name="token"]').attr("content"),
        },
        process: {
          ondata: (formdata) => {
            formdata.append("page", 'survey');
            formdata.append("id", this.$route.params.id);

            return formdata;
          },
        },
      },
      keyUpdateAudioPlayer: 0

    }
  },
  methods: {
    // submit edit and create
    async submit() {
      try {

        // validate
        if (!this.id || !this.uniqueid || !this.date_time || !this.agent_number || !this.agent_name || !this.caller_number || !this.caller_name || !this.survey_value || !this.queue) {
          return this.$notify({
            text: this.$t('GENERAL.FeildIsRequired'),
            type: 'warn'
          });
        }

        if (this.isLoadingSubmit) return
        this.isLoadingSubmit = true;

        let queue = this.queue ? this.queue.code : ""

        let date_time = this.date_time
        if (this.getLocale == 'fa') {
          date_time = this.moment(this.date_time, 'jYYYY/jM/jD', 'YYYY/MM/DD')
        }

        await this.$axios({
          url: '/survey/core-survey/action',
          data: {
            method: 'submitUpdate',
            id: this.id,
            uniqueid: this.uniqueid,
            date_time: date_time,
            agent_number: this.agent_number,
            agent_name: this.agent_name,
            caller_number: this.caller_number,
            caller_name: this.caller_name,
            survey_value: this.survey_value,
            queue: queue,
          }
        })

        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });

        this.$router.push({ name: 'survey-core-survey' });

      } catch (error) {
        console.log(error);
      }

      return this.isLoadingSubmit = false;

    },
    /** load data for edit */
    async getData() {
      try {
        this.isLoading = true;

        await this.getQueueOption();

        let req = await this.$axios({
          url: '/survey/core-survey/action',
          data: {
            method: 'findData',
            id: this.id
          }
        })

        /** set multi select survey range */
        this.survey_valueOption = Array.from({ length: 5 }, (v, index) => {
          return index + 1
        })


        this.uniqueid = req.data.data.uniqueid;
        this.agent_number = req.data.data.agent_number;
        this.agent_name = req.data.data.agent_name;
        this.caller_number = req.data.data.caller_number;
        this.caller_name = req.data.data.caller_name;
        this.survey_value = req.data.data.survey_value;


        let ls = this;
        this.queueOption.map((item) => {
          if (item.code == req.data.data.survey_location)
            ls.queue = item;
        })

        /** fit date time */
        this.date_time = req.data.data.date_time;
        if (this.$i18n.locale == 'fa') {
          this.date_time = this.moment(req.data.data.date_time, 'YYYY/M/D', 'jYYYY/jMM/jDD');
        }

        /** set file in audio player */
        if (req.data.data.customer_voice_path) {
          this.file = `${API}storage/survey/survey/${req.data.data.customer_voice_path}?new=${++this.keyUpdateAudioPlayer}`;
        }


      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;

    },

    // get data multiselect queue
    async getQueueOption() {
      try {
        let req = await this.$axios({
          url: '/survey/core-survey/action',
          data: { method: 'getQueueOption' }
        })
        let ls = this;
        req.data.queue.map((item) => {
          ls.queueOption.push({
            lable: `${item.descr} (${item.extension})`,
            code: item.extension
          })
        })
      } catch (error) {
        console.error(error);
      }
    },

    /** load audio uploaded and change component audio */
    loadAudio(index) {
      this.$notify({
        text: this.$t('GENERAL.NotifySubmitSuccess'),
        type: 'success'
      });
      this.file = `${API}storage/survey/survey/${this.id}.wav?new=${++this.keyUpdateAudioPlayer}`;
    },

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
    datePicker: VuePersiandatetimePicker,
    VueMultiselect,
    VueNumberInput,
    FilePond
  },
  async mounted() {
    this.id = this.$route.params.id;
    if (this.id) {
      this.getData()
    }
  }
}
</script>

<style lang="scss">
@import '~filepond/dist/filepond.min.css';
#survey_edit {
  .input {
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      padding: 0 5px;
    }
  }

  .filepond--wrapper * {
    cursor: pointer !important;
  }
  .filepond--drop-label {
    box-shadow: 3px 6px 13px #00000054;
    background: #e7e7e7;
  }
  .filepond--drop-label.filepond--drop-label label {
    font-size: 12px !important;
  }
}
</style>
