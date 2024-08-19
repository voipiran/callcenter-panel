<template>
  <div id="automaticCall_edit_add">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <h3 class="my-2">{{ $t('AutomaticCall.EditAdd.title') }}</h3>

      <div class="table-shadow">
        <div class="d-flex">
          <div class="guide" v-if="$t('AutomaticCall.EditAdd.GUIDE')">
            <p>{{ $t('AutomaticCall.EditAdd.GUIDE') }}</p>
          </div>
          <h5 v-if="!id" class="m-0">{{ $t('AutomaticCall.EditAdd.titleAdd') }}</h5>
          <h5 v-if="id" class="m-0">{{ $t('AutomaticCall.EditAdd.titleEdit') }}</h5>
        </div>

        <!-- content -->
        <div class="row">
          <!-- name -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('AutomaticCall.INDEX.name') }}</div>
            <input type="text" class="form-control" v-model="name" />
          </div>

          <!-- stastus -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('AutomaticCall.INDEX.estatus') }}</div>
            <VueMultiselect v-model="estatus" :options="estatusOption" :placeholder="$t('GENERAL.CHOOSE_MULTISELECT')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>

          <!-- multi select trunk -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('AutomaticCall.INDEX.trunk') }}</div>
            <VueMultiselect v-model="trunk" :options="trunkOption" :placeholder="$t('GENERAL.CHOOSE_MULTISELECT')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>

          <!-- number input max_canales -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('AutomaticCall.INDEX.max_canales') }}</div>
            <VueNumberInput v-model="max_canales" controls max="9999" min="0"></VueNumberInput>
          </div>
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('AutomaticCall.INDEX.context') }}</div>
            <input type="text" class="form-control" v-model="context" />
          </div>

          <!-- multi select purposeCall -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('AutomaticCall.INDEX.purposeCall') }}</div>
            <VueMultiselect v-model="purposeCall" :options="purposeCallOption" :placeholder="$t('AutomaticCall.EditAdd.purposeCall')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>

          <!-- multi select Queue -->
          <div v-if="purposeCall.code == 'Queue'" class="col-12 col-md-3 mt-2">
            <div>{{ $t('AutomaticCall.INDEX.queue') }}</div>
            <VueMultiselect v-model="queue" :options="queueOption" :placeholder="$t('GENERAL.CHOOSE_MULTISELECT')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>

          <!-- number input  Dialplan-->
          <div v-if="purposeCall.code == 'Dialplan'" class="col-12 col-md-3 mt-2">
            <div>{{ $t('AutomaticCall.INDEX.dialPlan') }}</div>
            <VueNumberInput v-model="dialPlan" controls min="0"></VueNumberInput>
          </div>

          <!-- input retries -->
          <div class="col-12 col-md-3 mt-2">
            <div>{{ $t('AutomaticCall.INDEX.retries') }}</div>
            <VueNumberInput v-model="retries" controls max="9999" min="0"></VueNumberInput>
          </div>
        </div>

        <!-- content date-picker -->
        <div class="row mt-2">
          <div class="col-12 col-md-3 mt-2">
            <div class="mb-2">{{ $t('AutomaticCall.EditAdd.datetime_init') }}</div>

            <date-picker
              color="#5c659c"
              v-model="datetime_init"
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
              @change="setDateSelected()"
            ></date-picker>
          </div>

          <!-- date-picker datetime_end -->
          <div class="col-12 col-md-3 mt-2">
            <div class="mb-2">{{ $t('AutomaticCall.EditAdd.datetime_end') }}</div>
            <date-picker
              color="#5c659c"
              class="mt-2"
              v-model="datetime_end"
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

          <!-- date-picker daytime_init -->
          <div class="col-12 col-md-3 mt-2">
            <div class="mb-2">{{ $t('AutomaticCall.EditAdd.daytime_init') }}</div>
            <date-picker color="#5c659c" v-model="daytime_init" type="time" />
          </div>

          <!-- date-picker daytime_end -->
          <div class="col-12 col-md-3 mt-2">
            <div class="mb-2">{{ $t('AutomaticCall.EditAdd.daytime_end') }}</div>
            <date-picker color="#5c659c" v-model="daytime_end" type="time" />
          </div>
        </div>

        <!-- btn action -->
        <div class="btns row my-5">
          <div class="col-6 col-md-3">
            <button class="btn-submit" @click="submit()">
              <span v-if="!isLoadingSubmit"> {{ $t('GENERAL.btnSave') }}</span>
              <!-- loader -->
              <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoadingSubmit">
                <div class="loader-wait-request" style="width: 20px; height: 20px"></div>
              </div>
            </button>
          </div>
          <div class="col-6 col-md-3">
            <button class="btn-warning" @click="$router.go(-1)">
              <span> {{ $t('GENERAL.btnBack') }}</span>
            </button>
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
import VuePersianDatetimePicker from 'vue3-persian-datetime-picker'

// multi select
import VueMultiselect from 'vue-multiselect'

// import input number 
import VueNumberInput from "@chenfengyuan/vue-number-input";

export default {
  name: "automaticCall_edit_add",
  mixins: [helper],
  data() {
    return {
      isLoading: false,
      isLoadingSubmit: false,

      id: null,
      name: null,
      datetime_end: null,
      datetime_init: null,
      daytime_end: null,
      daytime_init: null,
      trunkOption: [{
        lable: 'By Dialplan',
        code: 'By Dialplan'
      }],
      trunk: {
        lable: 'By Dialplan',
        code: 'By Dialplan'
      },
      max_canales: 0,
      context: "form-internal",
      purposeCallOption: [{
        lable: this.$t('AutomaticCall.INDEX.queue'),
        code: 'Queue'
      },
      {
        lable: this.$t('AutomaticCall.EditAdd.dialPlan'),
        code: 'Dialplan'
      }],
      purposeCall: {
        lable: this.$t('AutomaticCall.EditAdd.dialPlan'),
        code: 'Dialplan'
      },
      dialPlan: null,
      queueOption: [],
      queue: null,
      retries: 0,
      estatusOption: [
        {
          lable: this.$t('AutomaticCall.INDEX.eStatusLabel_I'),
          code: 'I'
        },
        {
          lable: this.$t('AutomaticCall.INDEX.eStatusLabel_A'),
          code: 'A'
        },
        {
          lable: this.$t('AutomaticCall.INDEX.eStatusLabel_T'),
          code: 'T'
        }
      ],
      estatus: {
        lable: this.$t('AutomaticCall.INDEX.eStatusLabel_I'),
        code: 'I'
      }

    }
  },
  methods: {
    // submit edit and create
    async submit() {
      try {

        // validate
        if (!this.estatus || !this.name || !this.context || (this.purposeCall.code == 'Queue' && !this.queue)
          || (this.purposeCall.code == 'Dialplan' && !this.dialPlan)
          || !this.datetime_init || !this.datetime_end || !this.daytime_init || !this.daytime_end) {
          return this.$notify({
            text: this.$t('GENERAL.FeildIsRequired'),
            type: 'warn'
          });
        }

        if (this.isLoadingSubmit) return
        this.isLoadingSubmit = true;
        let trunk = this.trunk.code == 'By Dialplan' ? null : this.trunk.code

        let script = this.purposeCall.code
        let queue = this.queue ? this.queue.code : ""
        if (script == 'Dialplan') {
          //  شماره کاربر[] in /etc/asterisk/queues_post_custom.conf and
          queue = this.dialPlan
        }

        let datetime_init = this.datetime_init
        let datetime_end = this.datetime_end
        if (this.getLocale == 'fa') {
          datetime_init = this.moment(this.datetime_init, 'jYYYY/jMM/jDD', 'YYYY/MM/DD')
          datetime_end = this.moment(this.datetime_end, 'jYYYY/jMM/jDD', 'YYYY/MM/DD')
        }

        await this.$axios({
          url: '/automatic-call/action',
          data: {
            method: 'submitCreateAndUpdate',
            id: this.id,
            name: this.name,
            datetime_init: datetime_init,
            datetime_end: datetime_end,
            daytime_init: this.daytime_init,
            daytime_end: this.daytime_end,
            retries: this.retries,
            trunk: trunk,
            context: this.context,
            queue: queue,
            max_canales: this.max_canales,
            script: script,
            estatus: this.estatus.code
          }
        })

        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });

        this.$router.push({ name: 'automaticCall' });

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
          url: '/automatic-call/action',
          data: {
            method: 'findData',
            id: this.id
          }
        })

        this.name = req.data.data.name;
        this.retries = req.data.data.retries;
        this.max_canales = req.data.data.max_canales;

        if (req.data.data.trunk) {
          this.trunk = {
            lable: req.data.data.trunk,
            code: req.data.data.trunk
          }
        }

        /** fir queue field and  dialPlan feild*/
        let ls = this;
        if (req.data.data.script == 'Dialplan') {
          this.purposeCall = {
            lable: this.$t('AutomaticCall.EditAdd.dialPlan'),
            code: 'Dialplan'
          }
          this.dialPlan = req.data.data.queue
        }
        else {
          this.purposeCall = {
            lable: this.$t('AutomaticCall.INDEX.queue'),
            code: 'Queue'
          }
          this.queueOption.map((item) => {
            if (item.code == req.data.data.queue)
              ls.queue = item;
          })
        }

        this.estatusOption.map((item) => {
          if (item.code == req.data.data.estatus)
            ls.estatus = item;
        })

        /** fit date time */
        this.datetime_init = req.data.data.datetime_init;
        this.datetime_end = req.data.data.datetime_end;
        this.daytime_init = req.data.data.daytime_init;
        this.daytime_end = req.data.data.daytime_end;
        if (this.$i18n.locale == 'fa') {
          this.datetime_init = this.moment(req.data.data.datetime_init, 'YYYY/MM/DD', 'jYYYY/jMM/jDD');
          this.datetime_end = this.moment(req.data.data.datetime_end, 'YYYY/MM/DD', 'jYYYY/jMM/jDD');
        }


      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;

    },
    // get data multiselect trunk
    async getTrunkOption() {
      try {


        /** set defaukt date */
        try {
          let date = new Date()
          let currentDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "/"
          this.datetime_init = currentDate;
          if (this.$i18n.locale == 'fa') this.datetime_init = this.moment(currentDate, 'YYYY/MM/DD', 'jYYYY/jMM/jDD');
        } catch (error) {
          console.error(error);
        }


        let req = await this.$axios({
          url: '/automatic-call/action',
          data: { method: 'getTrunkOption' }
        })
        let ls = this;
        req.data.trunks.map((item) => {
          ls.trunkOption.push({
            lable: `${item.tech}/${item.channelid}`,
            code: `${item.tech}/${item.channelid}`
          })
        })

      } catch (error) {
        console.error(error);
      }
    },
    // get data multiselect queue
    async getQueueOption() {
      try {
        let req = await this.$axios({
          url: '/automatic-call/action',
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
    /** set date time for feild date to if equal null */
    setDateSelected() {
      if (!this.datetime_end)
        this.datetime_end = this.datetime_init
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
    VueMultiselect,
    VueNumberInput
  },
  async mounted() {
    this.id = this.$route.params.id;

    this.isLoading = true;
    await this.getTrunkOption();
    await this.getQueueOption();
    this.isLoading = false;

    if (this.id) this.getData()
  }
}
</script>

<style lang="scss">
#automaticCall_edit_add {
  .input {
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      padding: 0 5px;
    }
  }
}
</style>
