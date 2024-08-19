<template>
  <div id="Permission_edit">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <div class="mb-3 d-flex">
        <h3>{{ $t('AUTH.Permission.Edit.title') }}</h3>
      </div>

      <div class="table-shadow">
        <!-- part title -->
        <div class="part-title d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('AUTH.Permission.Edit.GUIDE')">
              <p>{{ $t('AUTH.Permission.Edit.GUIDE') }}</p>
            </div>
            <h5 class="m-0">
              {{ $t('AUTH.Permission.Edit.titleEdit') }} <small>{{ roleName }}</small>
            </h5>
          </div>
        </div>

        <!-- content -->
        <!-- permissions -->
        <div class="row" v-for="(permissions, index) in allPermission" :key="index">
          <hr style="border-bottom: 2px solid #f8f8f8; width: 100%; margin-top: 20px" />
          <h6 class="col-12">{{ $t(`${permissions.name}`) }}</h6>
          <div class="col-12 col-md-4 mt-2" v-for="(item, index) in permissions.permissions" :key="index">
            <div class="d-flex justify-content-start align-items-baseline">
              <input type="checkbox" v-model="item.selected" />
              <label class="mx-2">{{ $t(`DB.permission.${item.name}`) }}</label>
            </div>
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
  name: "permission_edit",
  mixins: [helper],

  data() {
    return {
      isLoading: false,
      isLoadingSubmit: false,

      id: null,
      roleName: null,
      allPermission: [],

    }
  },
  methods: {
    // submit edit and create
    async submit() {
      try {

        // validate
        if (false) {
          return this.$notify({
            text: this.$t('GENERAL.FeildIsRequired'),
            type: 'warn'
          });
        }

        if (this.isLoadingSubmit) return
        this.isLoadingSubmit = true;

        let data = [];
        this.allPermission.map((item) => {
          item.permissions.map((permission) => {
            if (permission.selected) {
              data.push(permission);
            }
          })
        });

        await this.$axios({
          url: '/permission/action',
          data: {
            method: 'submitUpdate',
            id: this.id,
            permission: data
          }
        })

        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });

        // this.$router.push({ name: 'permission' });

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
          url: '/permission/action',
          data: {
            method: 'getAllPermission',
          }
        })
        this.allPermission = req.data.data.map((item) => {
          item.permissions.map((permission) => {
            permission.selected = false;
            return permission;
          })
          return item;
        });

      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;

    },

    // get currrent permission for current role
    async getCurrentPermission() {
      try {

        let req = await this.$axios({
          url: '/permission/action',
          data: { method: 'getCurrentPermission', id: this.$route.params.id }
        })

        this.roleName = req.data.data.name

        /** set current permission */
        let ls = this;
        req.data.data.permisions.map((currentPermission) => {
          ls.allPermission.map((item, index) => {
            item.permissions.map((permissions, indexChild) => {
              if (permissions.name == currentPermission.name)
                ls.allPermission[index].permissions[indexChild].selected = true;
            })
          })
        })

      } catch (error) {
        console.error(error);
      }
    },
  },
  async mounted() {
    this.id = this.$route.params.id;
    await this.getData()
    await this.getCurrentPermission();
  }
}
</script>

<style lang="scss">
@import '~filepond/dist/filepond.min.css';
#Permission_edit {
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
    height: 39.5px;
    margin-bottom: 10px;
  }
}
</style>
