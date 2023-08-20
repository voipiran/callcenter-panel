<template>
  <div id="automaticCall" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!-- content -->
    <div class="container-fluid" v-if="!isLoading">
      <div class="d-flex align-content-center justify-content-between mb-3">
        <!-- title -->
        <h3>{{ $t('AutomaticCall.title') }}</h3>
        <!-- {{-- refresh btn --}} -->
        <div class="refresh-ctn">
          <div @click="getData()" class="refresh"></div>
        </div>
      </div>

      <!-- جزئیات تماس های پاسخ داده نشده -->
      <div class="table-shadow row" id="automaticCall">
        <!-- title -->
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex">
            <div class="guide" v-if="$t('AutomaticCall.INDEX.GUIDE')">
              <p>{{ $t('AutomaticCall.INDEX.GUIDE') }}</p>
            </div>
            <h5 class="m-0">{{ $t('AutomaticCall.INDEX.title') }}</h5>
          </div>
          <!--btn add new -->
          <div>
            <button v-show="setPermission('automatic_calls.add')" class="btn-submit" @click="create()">
              <span> {{ $t('AutomaticCall.INDEX.create') }}</span>
            </button>
          </div>
        </div>

        <!-- vue good table -->
        <div class="automatica-call-table" dir="ltr">
          <vue-good-table :columns="columnsAutomaticCall" :rows="automaticCallData" :search-options="optionsTable" :pagination-options="paginationOptions">
            <!-- customize fields  -->
            <template #table-row="props">
              <span v-if="props.column.field == 'time'">
                <span v-if="$i18n.locale == 'en'">{{ jdate(props.row.time, 'YYYY/MM/DD HH:mm') }}</span>
                <span v-else>{{ jdate(props.row.time, 'jYYYY/jMM/jDD HH:mm') }}</span>
              </span>

              <span v-else-if="props.column.field == 'rangeDate'">
                <div v-if="$i18n.locale == 'en'" class="range-date">
                  <span>{{ jdate(props.row.datetime_init + ' ' + props.row.daytime_init, 'YYYY/MM/DD HH:mm') }}</span>
                  <span>{{ jdate(props.row.datetime_end + ' ' + props.row.daytime_end, 'YYYY/MM/DD HH:mm') }}</span>
                </div>
                <div v-else class="range-date">
                  <span>{{ jdate(props.row.datetime_init + ' ' + props.row.daytime_init, 'jYYYY/jMM/jDD HH:mm') }}</span>
                  <span>{{ jdate(props.row.datetime_end + ' ' + props.row.daytime_end, 'jYYYY/jMM/jDD HH:mm') }}</span>
                </div>
              </span>

              <span v-else-if="props.column.field == 'operate'">
                <div v-if="isLoadingOperate != props.row.id" class="operate">
                  <!-- btn edit -->
                  <button v-show="setPermission('automatic_calls.edit')" class="btn-primary" @click="edit(props.row.id)">
                    <span> {{ $t('GENERAL.btnEdit') }}</span>
                  </button>
                  <!-- remove btn -->
                  <button v-show="setPermission('automatic_calls.remove')" class="btn-warning mx-2" @click="removeConfirm(props.row)">
                    <span> {{ $t('GENERAL.btnRemove') }}</span>
                  </button>
                  <!--btn list call -->
                  <button v-show="setPermission('automatic_calls.showList')" class="btn-submit" @click="listCall(props.row.id)">
                    <span> {{ $t('AutomaticCall.INDEX.listCall') }}</span>
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

              <!-- <span v-else-if="props.column.field == 'estatus'" v-html="showLabaelSstatus(props.row.estatus)"> </span> -->
              <span v-else-if="props.column.field == 'estatus'" :title="showLabaelSstatus(props.row.estatus, true)">
                <Toggle :value="showLabaelSstatus(props.row.estatus)" />
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

import Toggle from "@vueform/toggle";


export default {
  name: 'automaticCall',
  mixins: [helper],
  data() {
    return {
      isLoading: false,
      isLoadingRemove: false,
      isLoadingOperate: false,

      page: 1,
      perPage: 10,
      totalRecords: 0,

      columnsAutomaticCall: [
        {
          label: this.$t('AutomaticCall.INDEX.operate'),
          field: 'operate',
          sortable: false,
        },
        {
          label: this.$t('AutomaticCall.INDEX.estatus'),
          field: 'estatus',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('AutomaticCall.INDEX.retries'),
          field: 'retries',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('AutomaticCall.INDEX.queue'),
          field: 'queue',
          type: 'number',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('AutomaticCall.INDEX.context'),
          field: 'context',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('AutomaticCall.INDEX.max_canales'),
          field: 'max_canales',
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },
        },
        {
          label: this.$t('AutomaticCall.INDEX.trunk'),
          field: 'trunk',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },

        {
          label: this.$t('AutomaticCall.INDEX.rangeDate'),
          field: 'rangeDate',
          type: 'number',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        },
        {
          label: this.$t('AutomaticCall.INDEX.name'),
          field: 'name',
          sortable: false,
          filterOptions: {
            enabled: true, // enable filter for this column
            trigger: 'enter', //only trigger on enter not on keyup 
          },

        }
      ],
      automaticCallData: []
    }
  },

  methods: {
    /** get data from api */
    async getData() {
      try {
        this.isLoading = true;
        let req = await this.$axios({
          url: '/automatic-call/action',
          data: {
            method: 'getData'
          },
        })
        this.automaticCallData = req.data.data;

      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;

    },
    /** show confirm dialog for remove */
    async removeConfirm(row) {
      if (this.isLoadingOperate) return
      this.isLoadingOperate = row.id
    },
    /** remove row */
    async remove() {
      this.isLoadingRemove = true
      try {
        await this.$axios({
          url: '/automatic-call/action',
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
      this.$router.push({ name: 'automatic-call-edit', params: { 'id': id } });
    },
    /** redirect to page list calls */
    listCall(id) {
      this.$router.push({ name: 'automatic-call-list-call', params: { 'id': id } });
    },
    /** create new automatic-call */
    create() {
      this.$router.push({ name: 'automatic-call-add' });
    },
    /** show labale field status */
    showLabaelSstatus(status, hover = false) {
      let label
      if (!hover) {

        switch (status) {
          case 'A':
            label = true
            break;
          case 'I':
            label = false
            break;
          case 'T':
            label = false
            break;
        }
        return label
      }

      /** shoe label status for hover */
      switch (status) {
        case 'A':
          // label = `<span class='badge badge-success p-1'>${this.$t('AutomaticCall.INDEX.eStatusLabel_A')}<span>`
          label = this.$t('AutomaticCall.INDEX.eStatusLabel_A')
          break;
        case 'I':
          // label = `<span class='badge badge-danger p-1'>${this.$t('AutomaticCall.INDEX.eStatusLabel_I')
          label = this.$t('AutomaticCall.INDEX.eStatusLabel_I')
          break;
        case 'T':
          // label = `<span class='badge badge-secondary p-1'>${this.$t('AutomaticCall.INDEX.eStatusLabel_T')}<span>`
          label = this.$t('AutomaticCall.INDEX.eStatusLabel_T')
          break;
      }
      return label
    }
  },

  components: {
    VueGoodTable,
    Toggle
  },

  async mounted() {
    this.getData();
  }
}
</script>

<style lang='scss'>
@import '@vueform/toggle/themes/default.css';

#automaticCall {
  .automatica-call-table {
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