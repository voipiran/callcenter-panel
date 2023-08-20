<template>
  <div id="licence" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <!-- title -->
        <h3>{{ $t('LICENCE.Index.title') }}</h3>
        <!-- {{-- refresh btn --}} -->
        <div class="refresh-ctn">
          <div @click="getData()" class="refresh"></div>
        </div>
      </div>

      <!-- content-->
      <div class="table-shadow row" id="licence">
        <!-- title and btn add -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('LICENCE.Index.GUIDE')">
              <p>{{ $t('LICENCE.Index.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('LICENCE.Index.title') }}</h5>
          </div>

          <!-- btn add -->
          <div>
            <button v-show="setPermission('licence.add')" class="btn-submit" @click="addLicence()">{{ $t('GENERAL.btnAdd') }}</button>
          </div>

          <div class="export" v-if="!isLoadingExport && false">
            <div class="pdf" @click="tableExport('licenceDetail', 'pdf')" :title="$t('GENERAL.pdfExport')"></div>
            <div class="excel" @click="tableExport('licenceDetail', 'xls')" :title="$t('GENERAL.excelExport')"></div>
            <div class="csv" @click="tableExport('licenceDetail', 'csv')" :title="$t('GENERAL.csvExport')"></div>
          </div>

          <div class="loader-wait-request mx-2" style="width: 20px; height: 20px" v-if="isLoadingExport"></div>
        </div>

        <!-- vue good table -->
        <div class="licence-table w-100" dir="ltr">
          <vue-good-table :columns="columnslicence" :rows="licenceData" :search-options="optionsTable" :pagination-options="paginationOptions">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'created_at'">
                <span v-if="$i18n.locale == 'en'">{{ jdate(props.row.created_at, 'YYYY/MM/DD HH:mm') }}</span>
                <span v-else>{{ jdate(props.row.created_at, 'jYYYY/jMM/jDD HH:mm') }}</span>
              </span>
              <span v-else-if="props.column.field == 'type'">
                <span v-html="showLabelType(props.row.type)"></span>
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

/** use for search date in vue-good-table */
var moment = require('moment-jalaali')


export default {
  name: 'licence',
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

      columnslicence: [
        {
          label: this.$t('LICENCE.Index.created_at'),
          field: 'created_at',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
            filterFn: function (currentDate, filterDate) {
              console.log('currentDate, filterDate :', currentDate, filterDate);
              return moment(filterDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD') == moment(currentDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD') || moment(filterDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD') == moment(currentDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
            }
          },
          sortable: false
        },
        {
          label: this.$t('LICENCE.Index.type'),
          field: 'type',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('LICENCE.Index.app_verions'),
          field: 'app_verions',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
          sortable: false
        },
        {
          label: this.$t('LICENCE.Index.app_name'),
          field: 'app_name',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
      ],
      licenceData: [],
      rowsExport: [],
    }
  },

  methods: {
    /** get data from api */
    async getData() {
      try {
        this.isLoading = true;
        let req = await this.$axios({
          url: '/licence/action',
          data: {
            method: 'getData'
          },
        })

        this.licenceData = req.data.data


        this.rowsExport = this.licenceData;
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;

    },
    /** translate feild type */
    showLabelType(type) {
      let label
      switch (type) {
        case 'full':
          label = `<span class='badge badge-warning p-2'>${this.$t('LICENCE.Index.fullLicence')}</span>`
          break
        case 'lite':
          label = `<span class='badge badge-info p-2'>${this.$t('LICENCE.Index.liteLicence')}</span>`
          break
        case 'trial':
          label = `<span class='badge badge-danger p-2'>${this.$t('LICENCE.Index.trialLicence')}</span>`
          break

      }
      return label
    },
    addLicence() {
      return this.$router.push({ name: 'licence_create' })
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
#licence {
  .licence-table {
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