<template>
  <div id="automaticCall_listCall">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <h3 class="my-2">{{ $t('AutomaticCall.ListCall.title') }}</h3>

      <div class="table-shadow">
        <div class="d-flex">
          <div class="guide" v-if="$t('AutomaticCall.ListCall.GUIDE')">
            <p>{{ $t('AutomaticCall.ListCall.GUIDE') }}</p>
          </div>
          <h5 class="m-0">{{ $t('AutomaticCall.ListCall.subTitle') }}</h5>
        </div>

        <!-- content -->
        <div class="row">
          <!-- multi select typeFile -->
          <div class="col-12 col-md-6 mt-2">
            <div>{{ $t('AutomaticCall.ListCall.typeFile') }}</div>
            <VueMultiselect v-model="typeFile" :options="typeFileOption" :placeholder="$t('AutomaticCall.ListCall.typeFile')" label="lable" track-by="code" :showLabels="false" :allow-empty="false">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>

          <!-- input custom text-area -->
          <div class="col-12 col-md-6 mt-2" v-if="typeFile.code == 'custom'">
            <div>{{ $t('AutomaticCall.ListCall.listUsersCustome') }}</div>
            <textarea id="w3review" v-model="listUsers" name="w3review" class="form-control" rows="4" cols="50"> </textarea>
            <small class="text-danger">{{ $t('AutomaticCall.ListCall.guidCustomListUset') }}</small>
          </div>

          <!-- file pond -->
          <div class="col-12 col-md-6 mt-2" v-if="typeFile.code == 'csv'">
            <div class="mb-1">{{ $t('AutomaticCall.ListCall.listUsersCsv') }}</div>
            <!-- :instant-upload="false" -->
            <file-pond @error="errorUpload" @processfiles="uploadFile()" :server="server" :acceptedFileTypes="acceptedFileTypes" v-bind:allow-multiple="false" s="text/csv" ref="csvFile" name="csvFile" :label-idle="$t('IROUTING.EDIT_IROUTING.CHOOSE_FILE')" />
            <small class="text-danger">{{ $t('AutomaticCall.ListCall.guidCsvListUset') }}</small>
          </div>
        </div>
        <!-- btn action -->
        <div class="btns row my-5">
          <div class="col-6 col-md-3">
            <button class="btn-submit" @click="submit()" :disabled="typeFile.code == 'csv'">
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

      <!-- loader -->
      <loader v-if="isLoading"></loader>
    </div>
  </div>
</template>

<script>
import helper from '../../js/helper'

// multi select
import VueMultiselect from 'vue-multiselect'

import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
);


export default {
  name: "automaticCall_listCall",
  mixins: [helper],
  data() {
    return {
      isLoading: false,
      isLoadingSubmit: false,

      typeFileOption: [{
        lable: this.$t('AutomaticCall.ListCall.csv'),
        code: 'csv'
      },
      {
        lable: this.$t('AutomaticCall.ListCall.custom'),
        code: 'custom'
      }],
      typeFile: {
        lable: this.$t('AutomaticCall.ListCall.custom'),
        code: 'custom'
      },
      listUsers: null,

      acceptedFileTypes: ["text/csv"],
      server: {
        url: `${API}automatic-call/upload`,
        method: "POST",
        headers: {
          "X-CSRF-TOKEN": $('meta[name="token"]').attr("content"),
        },
        process: {
          ondata: (formdata) => {
            formdata.append("id", this.$route.params.id);
            return formdata;
          },
        },
      }
    }
  },
  methods: {
    // submit edit and create
    async submit() {

      try {

        // validation
        if ((this.typeFile.code == 'custom' && !this.listUsers)) {
          return this.$notify({
            text: this.$t('GENERAL.FeildIsRequired'),
            type: 'warn'
          });
        }
        if (this.isLoadingSubmit) return


        await this.$axios({
          url: '/automatic-call/action',
          data: {
            method: this.typeFile.code == 'custom' ? 'submitListCallTypeCustom' : 'submitListCallTypeCsv',
            listUsers: this.listUsers,
            id: this.$route.params.id
          }
        })

        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });

        this.back();
      } catch (error) {
        console.log(error);

      }

      this.isLoadingSubmit = false;

    },
    /** after uplode file */
    uploadFile() {
      try {
        this.isLoadingSubmit = true;
        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });
        this.back();
      } catch (error) {
        console.log(error);
      }
    },
    /** show error when file pond not uploaded */
    errorUpload() {
      this.$notify({
        text: this.$t('AutomaticCall.ListCall.errorUpload'),
        type: 'warn'
      })
    },
    // back to main parent with delay
    back() {
      let ls = this;
      setTimeout(() => {
        ls.$router.push({ name: 'automaticCall' });
      }, 1000);
    }

  },
  components: {
    VueMultiselect,
    FilePond
  }
}
</script>

<style lang="scss">
@import '~filepond/dist/filepond.min.css';
#automaticCall_listCall {
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
