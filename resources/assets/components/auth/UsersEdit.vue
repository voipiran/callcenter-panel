<template>
  <div id="users_edit">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid">
      <div class="mb-3 d-flex">
        <h3>{{ $t('AUTH.Users.Edit.title') }}</h3>
      </div>

      <div class="table-shadow">
        <div class="d-flex">
          <div class="guide" v-if="$t('AUTH.Users.Edit.GUIDE')">
            <p>{{ $t('AUTH.Users.Edit.GUIDE') }}</p>
          </div>
          <h5 v-if="!id" class="m-0">{{ $t('AUTH.Users.Edit.titleAdd') }}</h5>
          <h5 v-if="id" class="m-0">{{ $t('AUTH.Users.Edit.titleEdit') }}</h5>
        </div>

        <!-- content -->
        <div class="row">
          <!-- full_name -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('AUTH.Users.Index.full_name') }}</div>
            <input type="text" class="form-control" v-model="full_name" />
          </div>

          <!-- user_name -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('AUTH.Users.Index.user_name') }}</div>
            <input type="text" class="form-control" v-model="user_name" />
          </div>

          <!-- multi select roles -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('AUTH.Users.Index.roles') }}</div>
            <VueMultiselect v-model="role" :options="rolesOption" :placeholder="$t('AUTH.Users.Edit.roles')" :showLabels="false" :allow-empty="false" label="name" track-by="id">
              <template v-slot:noResult>
                {{ $t('GENERAL.noResult') }}
              </template>
            </VueMultiselect>
          </div>

          <!-- mobile -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('AUTH.Users.Index.mobile') }}</div>
            <input type="number" class="form-control" v-model="mobile" />
          </div>

          <!-- tel -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('AUTH.Users.Index.tel') }}</div>
            <input type="number" class="form-control" v-model="tel" />
          </div>

          <!-- internal_tel -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('AUTH.Users.Index.internal_tel') }}</div>
            <input type="number" class="form-control" v-model="internal_tel" />
          </div>

          <!-- email -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('AUTH.Users.Index.email') }}</div>
            <input type="text" class="form-control" v-model="email" />
          </div>

          <!-- password -->
          <div class="col-12 col-md-4 mt-2">
            <div>{{ $t('AUTH.Users.Index.password') }}</div>
            <input type="password" class="form-control" v-model="password" />
            <small class="text-danger" v-if="id">{{ $t('AUTH.Users.Edit.guideChangePassword') }}</small>
          </div>

          <!-- repeatPassword -->
          <div class="col-12 col-md-4 mt-2" v-if="password">
            <div>{{ $t('AUTH.Users.Index.repeatPassword') }}</div>
            <input type="password" class="form-control" v-model="repeatPassword" @keyup.enter="submit()" />
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
  </div>
</template>

<script>
import helper from '../../js/helper'

// multi select
import VueMultiselect from 'vue-multiselect'



export default {
  name: "users_edit",
  mixins: [helper],

  data() {
    return {
      isLoading: false,
      isLoadingSubmit: false,

      id: null,
      full_name: null,
      user_name: null,
      mobile: null,
      tel: null,
      internal_tel: null,
      email: null,

      password: null,
      repeatPassword: null,

      rolesOption: [],
      role: null,

    }
  },
  methods: {
    // submit edit and create
    async submit() {
      try {

        // validate
        if (!this.full_name || !this.user_name || !this.role || (!this.password && !this.id)) {
          return this.$notify({
            text: this.$t('GENERAL.FeildIsRequired'),
            type: 'warn'
          });

        }

        if (this.password) {
          if (this.password.length < 8) {
            return this.$notify({
              text: this.$t('AUTH.Users.Edit.ErrorPassword'),
              type: 'warn'
            });
          }
        }

        if (this.password != this.repeatPassword) {
          return this.$notify({
            text: this.$t('AUTH.Users.Edit.errorRepeatPassword'),
            type: 'warn'
          });
        }

        if (this.isLoadingSubmit) return
        this.isLoadingSubmit = true;


        await this.$axios({
          url: '/users/action',
          data: {
            method: 'submitUpdate',
            id: this.id,
            full_name: this.full_name,
            user_name: this.user_name,
            password: this.password,
            role_id: this.role.id,
            mobile: this.mobile,
            tel: this.tel,
            internal_tel: this.internal_tel,
            email: this.email,
          }
        })

        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });

        // this.$router.push({ name: 'users' });

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
          url: '/users/action',
          data: {
            method: 'findData',
            id: this.id
          }
        })

        this.full_name = req.data.data.full_name;
        this.user_name = req.data.data.user_name;
        this.password = req.data.data.password;
        this.mobile = req.data.data.mobile;
        this.tel = req.data.data.tel;
        this.internal_tel = req.data.data.internal_tel;
        this.email = req.data.data.email;

        let ls = this;
        this.rolesOption.map((item) => {

          if (item.id == req.data.data.role_id)
            ls.role = item;
        })

      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;

    },

    // get data multiselect roles
    async getRolesOption() {
      try {
        let req = await this.$axios({
          url: '/users/action',
          data: { method: 'getRolesOption' }
        })
        this.rolesOption = req.data.data;

      } catch (error) {
        console.error(error);
      }
    },

  },

  components: {
    VueMultiselect,
  },
  async mounted() {
    await this.getRolesOption();

    this.id = this.$route.params.id;
    if (this.id) {
      this.getData()
    }
  }
}
</script>

<style lang="scss">
@import '~filepond/dist/filepond.min.css';
#users_edit {
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
