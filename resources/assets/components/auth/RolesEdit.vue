<template>
  <div id="roles_edit">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <div class="mb-3 d-flex">
        <h3>{{ $t('AUTH.Roles.Edit.title') }}</h3>
      </div>

      <div class="table-shadow">
        <!-- part title -->
        <div class="part-title d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('AUTH.Roles.Edit.GUIDE')">
              <p>{{ $t('AUTH.Roles.Edit.GUIDE') }}</p>
            </div>
            <h5 v-if="!id" class="m-0">{{ $t('AUTH.Roles.Edit.titleAdd') }}</h5>
            <h5 v-if="id" class="m-0">{{ $t('AUTH.Roles.Edit.titleEdit') }}</h5>
          </div>
        </div>

        <!-- content -->
        <div class="row d-flex align-items-end">
          <!-- name -->
          <div class="col-6 col-md-3 mt-2">
            <div class="label-input">{{ $t('AUTH.Roles.Index.name') }}</div>
            <input type="text" class="form-control" v-model="name" />
          </div>

          <!-- label -->
          <div class="col-6 col-md-3 mt-2" v-if="false">
            <div>{{ $t('AUTH.Roles.Index.label') }}</div>
            <input type="text" class="form-control" v-model="label" />
          </div>
        </div>

        <!-- btn action and file pond-->
        <div class="btns d-flex align-items-center justify-content-end my-3">
          <button class="btn-submit mx-1" @click="submit()">
            <span v-if="!isLoadingSubmit"> {{ $t('GENERAL.btnSave') }}</span>
            <!-- loader -->
            <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoadingSubmit">
              <div class="loader-wait-request" style="width: 20px; height: 20px"></div>
            </div>
          </button>
          <button class="btn-warning mx-1" @click="$router.go(-1)">
            <span> {{ $t('GENERAL.btnBack') }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- loader -->
    <loader v-if="isLoading"></loader>
  </div>
</template>

<script>
import helper from '../../js/helper'

export default {
  name: "roles_edit",
  mixins: [helper],

  data() {
    return {
      isLoading: false,
      isLoadingSubmit: false,
      id: null,
      name: null,
      label: null,
    }
  },
  methods: {
    // submit edit and create
    async submit() {
      try {

        // validate
        if (!this.name) {
          return this.$notify({
            text: this.$t('GENERAL.FeildIsRequired'),
            type: 'warn'
          });
        }

        if (this.isLoadingSubmit) return
        this.isLoadingSubmit = true;

        await this.$axios({
          url: '/roles/action',
          data: {
            method: 'submitUpdate',
            id: this.id,
            name: this.name,
          }
        })

        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });

        // this.$router.push({ name: 'roles' });

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
          url: '/roles/action',
          data: {
            method: 'findData',
            id: this.id
          }
        })

        this.name = req.data.data.name;

      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;

    },


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
#roles_edit {
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

  .part-title {
    margin-bottom: 10px;
    height: 39.5px;
  }
}
</style>
