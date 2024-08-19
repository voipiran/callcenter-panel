<template>
  <div id="users" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <!-- title -->
        <h3>{{ $t('AUTH.Users.Index.title') }}</h3>
        <!-- {{-- refresh btn --}} -->
        <div class="refresh-ctn">
          <div @click="getData()" class="refresh"></div>
        </div>
      </div>

      <!-- content-->
      <div class="table-shadow row" id="users">
        <!-- title and btn add -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('AUTH.Users.Index.GUIDE')">
              <p>{{ $t('AUTH.Users.Index.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('AUTH.Users.Index.title') }}</h5>
          </div>

          <!-- btn add -->
          <div>
            <button v-show="setPermission('auth.users.add')" class="btn-submit" @click="addUser()">{{ $t('GENERAL.btnAdd') }}</button>
          </div>

          <div class="loader-wait-request mx-2" style="width: 20px; height: 20px" v-if="isLoadingExport"></div>
        </div>

        <!-- vue good table -->
        <div class="users-table w-100" dir="ltr">
          <vue-good-table :columns="columnsusers" :rows="surveyData" :search-options="optionsTable" :pagination-options="paginationOptions">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'created_at'">
                <span v-if="$i18n.locale == 'en'">{{ jdate(props.row.created_at, 'YYYY/MM/DD HH:mm') }}</span>
                <span v-else>{{ jdate(props.row.created_at, 'jYYYY/jMM/jDD HH:mm') }}</span>
              </span>

              <span v-else-if="props.column.field == 'operate'">
                <div v-if="isLoadingOperate != props.row.id" class="operate">
                  <!-- btn edit -->
                  <button v-show="setPermission('auth.users.edit')" class="btn-primary" @click="edit(props.row.id)">
                    <span> {{ $t('GENERAL.btnEdit') }}</span>
                  </button>
                  <!-- remove btn -->
                  <button v-show="setPermission('auth.users.remove')" class="btn-warning mx-2" @click="removeConfirm(props.row)">
                    <span> {{ $t('GENERAL.btnRemove') }}</span>
                  </button>
                </div>
                <!-- confirm remove-->
                <div v-if="isLoadingOperate == props.row.id">
                  <div class="d-flex align-items-center justify-content-center" v-if="!isLoadingRemove">
                    <button class="btn-submit mx-2" @click="remove(props.row)">
                      <span> {{ $t('GENERAL.btnRemove') }}</span>
                    </button>
                    <button class="btn-warning" @click="isLoadingOperate = null">
                      <span> {{ $t('GENERAL.btnCancel') }}</span>
                    </button>
                  </div>
                  <!-- loader -->
                  <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoadingRemove">
                    <div class="loader-wait-request" style="width: 20px; height: 20px"></div>
                  </div>
                </div>
              </span>

              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>
      </div>
    </div>

    <!-- loader -->
    <loader v-if="isLoading"></loader>
  </div>
</template>

<script>

// helper
import helper from '../../js/helper'

// import vue good table
import { VueGoodTable } from 'vue-good-table-next';


export default {
  name: 'users',
  mixins: [helper],
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

      columnsusers: [
        {
          label: this.$t('GENERAL.btnOperation'),
          field: 'operate',
          sortable: false
        },
        {
          label: this.$t('AUTH.Users.Index.created_at'),
          field: 'created_at',

          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
            filterFn: function (currentDate, filterDate) {
              console.log('currentDate, filterDate :', currentDate, filterDate);
              return this.moment(filterDate, 'jYYYY/jMM/jDD', 'YYYY-MM-DD') == this.moment(currentDate, 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD') || this.moment(filterDate, 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD') == this.moment(currentDate, 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD');
            }
          },
          sortable: false
        },
        {
          label: this.$t('AUTH.Users.Index.email'),
          field: 'email',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('AUTH.Users.Index.tel'),
          field: 'tel',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('AUTH.Users.Index.internal_tel'),
          field: 'internal_tel',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('AUTH.Users.Index.mobile'),
          field: 'mobile',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('AUTH.Users.Index.roles'),
          field: 'roles.name',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
          sortable: false
        },
        {
          label: this.$t('AUTH.Users.Index.user_name'),
          field: 'user_name',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('AUTH.Users.Index.full_name'),
          field: 'full_name',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        }

      ],
      surveyData: [],
      rowsExport: [],
    }
  },

  methods: {
    /** get data from api */
    async getData() {
      try {
        this.isLoading = true;
        let req = await this.$axios({
          url: '/users/action',
          data: {
            method: 'getData'
          },
        })

        this.surveyData = req.data.data


        this.rowsExport = this.surveyData;
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;

    },

    /** show swal for confirm remove card */
    async removeConfirm(row) {
      if (this.isLoadingOperate) return
      this.isLoadingOperate = row.id
    },
    /** remove row */
    async remove() {
      this.isLoadingRemove = true
      try {
        await this.$axios({
          url: '/users/action',
          data: {
            method: 'remove',
            id: this.isLoadingOperate
          },
        })

        this.$notify({
          text: this.$t('GENERAL.NotifySubmitSuccess'),
          type: 'success'
        });
        await this.getData();
      } catch (error) {
        console.log(error);
      }
      this.isLoadingRemove = false;
      this.isLoadingOperate = null;
    },
    /** redirect for edit row */
    edit(id) {
      this.$router.push({ name: 'users_edit', params: { 'id': id } });
    },
    addUser() {
      return this.$router.push({ name: 'users_create' })
    }

  },

  components: {
    VueGoodTable
  },

  async mounted() {
    this.getData();
  }
}
</script>

<style lang='scss'>
#users {
  .users-table {
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