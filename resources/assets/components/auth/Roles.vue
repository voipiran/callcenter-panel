<template>
  <div id="roles" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <!-- title -->
        <h3>{{ $t('AUTH.Roles.Index.title') }}</h3>
        <!-- {{-- refresh btn --}} -->
        <div class="refresh-ctn">
          <div @click="getData()" class="refresh"></div>
        </div>
      </div>

      <!-- content-->
      <div class="table-shadow row" id="roles">
        <!-- title and btn add -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('AUTH.Roles.Index.GUIDE')">
              <p>{{ $t('AUTH.Roles.Index.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('AUTH.Roles.Index.title') }}</h5>
          </div>

          <!-- btn add -->
          <div>
            <button v-show="setPermission('auth.roles.add')" class="btn-submit" @click="addRole()">{{ $t('GENERAL.btnAdd') }}</button>
          </div>

          <div class="export" v-if="!isLoadingExport && false">
            <div class="pdf" @click="tableExport('rolesDetail', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('rolesDetail', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('rolesDetail', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>

          <div class="loader-wait-request mx-2" style="width: 20px; height: 20px" v-if="isLoadingExport"></div>
        </div>

        <!-- vue good table -->
        <div class="roles-table w-100" dir="ltr">
          <vue-good-table :columns="columnsroles" :rows="roleData" :search-options="optionsTable" :pagination-options="paginationOptions">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'created_at'">
                <span v-if="$i18n.locale == 'en'">{{ jdate(props.row.created_at, 'YYYY/MM/DD HH:mm') }}</span>
                <span v-else>{{ jdate(props.row.created_at, 'jYYYY/jMM/jDD HH:mm') }}</span>
              </span>

              <span v-else-if="props.column.field == 'operate'">
                <div v-if="isLoadingOperate != props.row.id" class="operate">
                  <!-- btn edit -->
                  <button v-show="setPermission('auth.roles.edit')" class="btn-primary" @click="edit(props.row.id)">
                    <span> {{ $t('GENERAL.btnEdit') }}</span>
                  </button>
                  <!-- remove btn -->
                  <button v-show="setPermission('auth.roles.remove')" class="btn-warning mx-2" @click="removeConfirm(props.row)" v-if="false">
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

        <!-- table for export-->
        <table class="mt-4" id="rolesDetail" v-show="false">
          <thead>
            <tr>
              <th>{{ $t('AUTH.Roles.Index.id') }}</th>
              <th>{{ $t('AUTH.Roles.Index.name') }}</th>
              <th>{{ $t('AUTH.Roles.Index.created_at') }}</th>
            </tr>
          </thead>
          <tbody>
            <!-- content -->
            <tr v-for="(td, index) in rowsExport" :key="index">
              <td>{{ td.id }}</td>
              <td>{{ td.name }}</td>
              <td v-if="$i18n.locale == 'en'">{{ jdate(td.created_at, 'YYYY/MM/DD') }}</td>
              <td v-else>{{ jdate(td.created_at, 'jYYYY/jMM/jDD') }}</td>
            </tr>
          </tbody>
        </table>
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
  name: 'roles',
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

      columnsroles: [
        {
          label: this.$t('GENERAL.btnOperation'),
          field: 'operate',
          sortable: false
        },
        {
          label: this.$t('AUTH.Roles.Index.created_at'),
          field: 'created_at',
          sortable: false
        },
        {
          label: this.$t('AUTH.Roles.Index.name'),
          field: 'name',

        },
        {
          label: this.$t('AUTH.Roles.Index.id'),
          field: 'id',

        }
      ],
      roleData: [],
      rowsExport: [],
    }
  },

  methods: {
    /** get data from api */
    async getData() {
      try {
        this.isLoading = true;
        let req = await this.$axios({
          url: '/roles/action',
          data: {
            method: 'getData'
          },
        })

        this.roleData = req.data.data


        this.rowsExport = this.roleData;
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;

    },

    /** فعلا غیر فعال می باشد export action */
    async exportRequest(type = 'pdf') {

      if (this.isLoadingExport) return

      this.isLoadingExport = true;

      try {
        let req = await this.$axios({
          url: '/roles/action',
          data: {
            method: 'getData'
          },
        })

        this.rowsExport = []
        let ls = this;
        await req.data.max_survey.map((queue) => {
          req.data.data.map((item) => {
            if (item.survey_location == queue.survey_queue) {
              ls.rowsExport.push({
                full_name: item.full_name,
                average_survey: item.average_survey,
                count_survey: item.count_survey,
                date_time: item.date_time,
                survey_location: item.survey_location,
                total_survey: item.total_survey,
                satisfaction_percentage: ((item.average_survey * 100) / 5).toFixed(0)
              })
            }
          })
        })


        this.tableExport('rolesDetail', type);

      } catch (error) {
        console.error(error);
      }
      this.isLoadingExport = false;

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
          url: '/roles/action',
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
      this.$router.push({ name: 'roles_edit', params: { 'id': id } });
    },
    addRole() {
      return this.$router.push({ name: 'roles_create' })
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
#roles {
  .roles-table {
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