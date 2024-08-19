<template>
  <div id="survey_edit">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <h3 class="my-2">{{ $t('SURVEY.Setting.Edit.title') }}</h3>

      <div class="table-shadow">
        <div class="d-flex">
          <div class="guide" v-if="$t('SURVEY.Setting.Edit.GUIDE')">
            <p>{{ $t('SURVEY.Setting.Edit.GUIDE') }}</p>
          </div>
          <h5 v-if="!id" class="m-0">{{ $t('SURVEY.Setting.Edit.titleAdd') }}</h5>
          <h5 v-if="id" class="m-0">{{ $t('SURVEY.Setting.Edit.titleEdit') }}</h5>
        </div>

        <!-- content -->
        <div class="row">
          <!-- survey_name -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Setting.survey_name') }}</div>
            <input type="text" class="form-control" v-model="survey_name" />
          </div>

          <!-- survey_status -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Setting.survey_status') }}</div>
            <VueMultiselect v-model="survey_status" :options="toggleOption" :placeholder="$t('GENERAL.CHOOSE_MULTISELECT')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>

          <!-- survey_string -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Setting.survey_string') }}</div>
            <input type="text" class="form-control" v-model="survey_string" />
          </div>

          <!-- customer_voice_limit -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Setting.customer_voice_limit') }}</div>
            <VueNumberInput v-model="customer_voice_limit" controls min="1"></VueNumberInput>
          </div>

          <!-- survey_playagent -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Setting.survey_playagent') }}</div>
            <VueMultiselect v-model="survey_playagent" :options="survey_playagentOption" :placeholder="$t('GENERAL.CHOOSE_MULTISELECT')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>

          <!-- multi select customer_voice_status -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('SURVEY.Setting.customer_voice_status') }}</div>
            <VueMultiselect v-model="customer_voice_status" :options="toggleOption" :placeholder="$t('GENERAL.CHOOSE_MULTISELECT')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>

          <!-- multi select Queue -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('AutomaticCall.INDEX.queue') }}</div>
            <VueMultiselect v-model="queue" :options="queueOption" :placeholder="$t('GENERAL.CHOOSE_MULTISELECT')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
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
              <label class="mx-3">{{ $t('SURVEY.Setting.Edit.file') }}</label>
              <file-pond :server="server" :acceptedFileTypes="acceptedFileTypes" name="promp1" ref="promp1" :label-idle="$t('GENERAL.CHOOSE_FILE')" v-bind:allow-multiple="false" :store-as-files="true" @processfiles="loadAudio()" />
            </div>
            <div>
              <button class="btn-submit" @click="setDefaultVoice()">
                {{ $t('SURVEY.Setting.Edit.btnDefaultVoice') }}
              </button>
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

// multi select
import VueMultiselect from 'vue-multiselect'

// import input number 
import VueNumberInput from "@chenfengyuan/vue-number-input";

/** vue file pond */
import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode
);

export default {
  name: "survey_edit",
  mixins: [helper],

  data() {
    return {
      isLoading: false,
      isLoadingSubmit: false,

      id: null,
      survey_name: null,
      survey_string: '12345',
      customer_voice_limit: 5,
      survey_voice: 'survey-default.wav',

      queueOption: [{
        lable: this.$t(`SURVEY.Survey.outbound`) + " ( 8055 )",
        code: "8055"
      },
      {
        lable: this.$t(`SURVEY.Survey.directExtension`) + " ( 8056 )",
        code: "8056"
      }],
      queue: {
        lable: this.$t(`SURVEY.Survey.outbound`) + " ( 8055 )",
        code: "8055"
      },

      toggleOption: [{
        lable: this.$t('SURVEY.Setting.active'),
        code: '1'
      },
      {
        lable: this.$t('SURVEY.Setting.passive'),
        code: '0'
      }
      ],
      survey_status: {
        lable: this.$t('SURVEY.Setting.active'),
        code: '1'
      },
      customer_voice_status: {
        lable: this.$t('SURVEY.Setting.passive'),
        code: '0'
      },

      survey_playagentOption: [
        {
          lable: this.$t('SURVEY.Setting.survey_playagent_label0'),
          code: '0'
        },
        {
          lable: this.$t('SURVEY.Setting.survey_playagent_label1'),
          code: '1'
        },
        {
          lable: this.$t('SURVEY.Setting.survey_playagent_label2'),
          code: '2'
        }

      ],
      survey_playagent: {
        lable: this.$t('SURVEY.Setting.survey_playagent_label0'),
        code: '0'
      },


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
            formdata.append("page", 'setting');
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
        if (!this.survey_name || !this.survey_status || !this.survey_string || !this.survey_playagent || !this.customer_voice_limit || !this.customer_voice_status || !this.queue) {
          return this.$notify({
            text: this.$t('GENERAL.FeildIsRequired'),
            type: 'warn'
          });
        }

        if (this.isLoadingSubmit) return
        this.isLoadingSubmit = true;

        let queue = this.queue ? this.queue.code : ""

        let voice = this.$refs.promp1.getFile();
        try {
          voice = voice.getFileEncodeBase64String();
        } catch (error) {
          voice = null;
        }


        let req = await this.$axios({
          url: '/survey/setting/action',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          data: {
            method: 'submitUpdate',
            id: this.id,
            survey_name: this.survey_name,
            survey_string: this.survey_string,
            customer_voice_limit: this.customer_voice_limit,
            queue: queue,

            survey_status: this.survey_status.code,
            survey_playagent: this.survey_playagent.code,
            customer_voice_status: this.customer_voice_status.code,
            survey_voice: this.survey_voice,
            voice: voice
          }
        })

        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });

        this.$router.push({ name: 'survey-setting' });

        // this.$router.push({ path: `/survey/setting/${req.data.id}/edit` });

      } catch (error) {
        console.log(error);
      }

      return this.isLoadingSubmit = false;

    },
    /** load data for edit */
    async getData() {
      try {
        this.isLoading = true;

        let req = await this.$axios({
          url: '/survey/setting/action',
          data: {
            method: 'findData',
            id: this.id
          }
        })


        this.survey_name = req.data.data.survey_name;
        this.survey_string = req.data.data.survey_string;
        this.customer_voice_limit = req.data.data.customer_voice_limit;
        this.survey_voice = req.data.data.survey_voice;



        let ls = this;
        this.queueOption.map((item) => {
          if (item.code == req.data.data.survey_queue)
            ls.queue = item;
        })

        /** ---------------- Start set toggle sattus */

        this.survey_playagentOption.map((item) => {
          if (item.code == req.data.data.survey_playagent)
            ls.survey_playagent = item;
        })


        this.survey_status = req.data.data.survey_status == "1" ? {
          lable: this.$t('SURVEY.Setting.active'),
          code: '1'
        } :
          {
            lable: this.$t('SURVEY.Setting.passive'),
            code: '0'
          };

        this.customer_voice_status = req.data.data.customer_voice_status == "1" ? {
          lable: this.$t('SURVEY.Setting.active'),
          code: '1'
        } :
          {
            lable: this.$t('SURVEY.Setting.passive'),
            code: '0'
          };

        /** ---------------- End set toggle sattus */



        /** set file in audio player */
        if (req.data.data.survey_voice) {
          this.file = `${API}storage/survey/setting/${req.data.data.survey_voice}?new=${++this.keyUpdateAudioPlayer}`;
        }
        else {
          this.file = `${API}storage/survey/setting/survey-default.wav?new=${++this.keyUpdateAudioPlayer}`;
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
        text: this.$t('SURVEY.Setting.Edit.defaultVoice'),
      });
      this.file = `${API}storage/survey/setting/${this.id}.wav?new=${++this.keyUpdateAudioPlayer}`;
    },

    /** submit btn set default voice */
    setDefaultVoice() {
      this.survey_voice = 'survey-default.wav';
      this.file = `${API}storage/survey/setting/survey-default.wav?new=${++this.keyUpdateAudioPlayer}`;
      this.$notify({
        text: this.$t('SURVEY.Setting.Edit.defaultVoice'),
      });
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
    VueMultiselect,
    VueNumberInput,
    FilePond,

  },
  async mounted() {

    this.file = `${API}storage/survey/setting/survey-default.wav?new=${++this.keyUpdateAudioPlayer}`;

    await this.getQueueOption();

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

.filepond--credits {
  display: none;
}
</style>
