<template>
  <div id="permission" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <!-- title -->
        <h3>{{ $t('AUTH.Permission.Index.title') }}</h3>
        <!-- {{-- refresh btn --}} -->
        <div class="refresh-ctn">
          <div @click="getData()" class="refresh"></div>
        </div>
      </div>

      <!-- content-->
      <div class="table-shadow row" id="permission">
        <!-- title and btn add -->
        <div class="part-title d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('AUTH.Permission.Index.GUIDE')">
              <p>{{ $t('AUTH.Permission.Index.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('AUTH.Permission.Index.title') }}</h5>
          </div>

          <div class="loader-wait-request mx-2" style="width: 20px; height: 20px" v-if="isLoadingExport"></div>
        </div>

        <!-- vue good table -->
        <div class="permission-table w-100" dir="ltr">
          <vue-good-table :columns="columnspermission" :rows="permissionData" :search-options="optionsTable" :pagination-options="paginationOptions">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'created_at'">
                <span v-if="$i18n.locale == 'en'">{{ jdate(props.row.created_at, 'YYYY/MM/DD HH:mm') }}</span>
                <span v-else>{{ jdate(props.row.created_at, 'jYYYY/jMM/jDD HH:mm') }}</span>
              </span>

              <span v-else-if="props.column.field == 'operate'" class="operate">
                <!-- btn edit -->
                <button v-show="setPermission('auth.permission.edit')" class="btn-primary" @click="edit(props.row.id)" :disabled="props.row.id == 1">
                  <span> {{ $t('GENERAL.btnEdit') }}</span>
                </button>
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
  name: 'permission',
  mixins: [helper],
  data() {
    return {
      isLoading: false,
      isLoadingExport: false,

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

      columnspermission: [
        {
          label: this.$t('GENERAL.btnOperation'),
          field: 'operate',
          sortable: false
        },

        {
          label: this.$t('AUTH.Roles.Index.name'),
          field: 'name',

        },

      ],
      permissionData: [],
      rowsExport: [],
    }
  },

  methods: {
    /** get data from api */
    async getData() {
      try {
        this.isLoading = true;
        let req = await this.$axios({
          url: '/permission/action',
          data: {
            method: 'getData'
          },
        })

        this.permissionData = req.data.data
        this.rowsExport = this.permissionData;
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;

    },

    /** redirect for edit row */
    edit(id) {
      this.$router.push({ name: 'permission_edit', params: { 'id': id } });
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
#permission {
  .permission-table {
    overflow: auto;
  }
  .range-date {
    display: flex;
    flex-direction: column;
  }
  .operate {
    display: flex;
  }
  .part-title {
    height: 39.5px;
  }
}
</style>