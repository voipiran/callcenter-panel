<template>
  <div id="callrequest">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <h3 class="my-2">{{ $t('CallRequest.Index.title') }}</h3>

      <div class="table-shadow">
        <div class="d-flex justify-content-between">
          <h5 class="m-0">{{ $t('CallRequest.Index.subTitle') }}</h5>
          <button class="btn btn-light" @click="modalGuide = true">
            <i class="guide"></i>
            <small> {{ $t('CallRequest.Index.GUIDE') }}</small>
          </button>
        </div>

        <!-- content -->
        <div class="row">
          <!-- enable -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('CallRequest.Index.enable') }}</div>
            <Toggle v-model="enable" />
          </div>

          <!-- trunk_name -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('CallRequest.Index.trunk_name') }}</div>
            <input type="text" class="form-control" v-model="trunk_name" />
          </div>

          <!-- outbound_prefix -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('CallRequest.Index.outbound_prefix') }}</div>
            <VueNumberInput v-model="outbound_prefix" controls></VueNumberInput>
          </div>

          <!-- callerid_name -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('CallRequest.Index.callerid_name') }}</div>
            <input type="text" class="form-control" v-model="callerid_name" />
          </div>

          <!--  callerid_number -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('CallRequest.Index.callerid_number') }}</div>
            <VueNumberInput v-model="callerid_number" controls></VueNumberInput>
          </div>

          <!--  dial_logging -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('CallRequest.Index.dial_logging') }}</div>
            <Toggle v-model="dial_logging" />
          </div>
        </div>

        <!-- btn action and file pond-->
        <div class="btns row my-5">
          <div class="col-6 col-md-4 mt-5">
            <button class="btn-submit" @click="submit()">
              <span v-if="!isLoadingSubmit"> {{ $t('GENERAL.btnSave') }}</span>
              <!-- loader -->
              <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoadingSubmit">
                <div class="loader-wait-request" style="width: 20px; height: 20px"></div>
              </div>
            </button>
          </div>
          <div class="col-6 col-md-4 mt-5" v-if="false">
            <button class="btn-warning" @click="$router.go(-1)">
              <span> {{ $t('GENERAL.btnBack') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- guide modal -->
    <section class="d-none" :class="{ 'd-block': modalGuide }">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
           
            <div class="modal-body-content" v-html="$t('CallRequest.Index.InstallGuide')"></div>

            <div class="modal-footer-content mt-3">
              <div class="close-dialog" @click="modalGuide = false">
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

    <!-- loader -->
    <loader v-if="isLoading"></loader>
  </div>
</template>

<script>
// import input number 
import VueNumberInput from "@chenfengyuan/vue-number-input";
import Toggle from "@vueform/toggle";


export default {
  name: "callrequest",
  data() {
    return {
      isLoading: false,
      isLoadingSubmit: false,

      enable: null,
      trunk_name: null,
      dial_logging: null,
      outbound_prefix: null,
      callerid_name: null,
      dial_logging: null,
      callerid_number: null,

      modalGuide: false,

    }
  },
  methods: {
    // submit edit and create
    async submit() {
      try {
        // validate
        if (!this.outbound_prefix || !this.trunk_name || !this.callerid_name || !this.callerid_number) {
          return this.$notify({
            text: this.$t('GENERAL.FeildIsRequired'),
            type: 'warn'
          });
        }

        if (this.isLoadingSubmit) return
        this.isLoadingSubmit = true;

        await this.$axios({
          url: '/call-request/action',
          data: {
            method: 'submitUpdate',
            enable: this.enable,
            outbound_prefix: this.outbound_prefix,
            trunk_name: this.trunk_name,
            callerid_name: this.callerid_name,
            dial_logging: this.dial_logging,
            callerid_number: this.callerid_number,
          }
        })

        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });

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
          url: '/call-request/action',
          data: {
            method: 'getData',
          }
        })

        this.enable = req.data.data.enable;
        this.outbound_prefix = req.data.data.outbound_prefix;
        this.trunk_name = req.data.data.trunk_name;
        this.callerid_name = req.data.data.callerid_name;
        this.dial_logging = req.data.data.dial_logging;
        this.callerid_number = req.data.data.callerid_number;


      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;

    },
  },
  components: {
    VueNumberInput,
    Toggle
  },
  async mounted() {
    this.getData();
  }
}
</script>

<style lang="scss">
@import '@vueform/toggle/themes/default.css';

#callrequest {
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
