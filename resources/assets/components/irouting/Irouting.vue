<template>
  <div class="table-shadow">
    <notifications position="bottom left" :duration="5000" />
    <div class="pb-4">
      <h3>{{ $t('IROUTING.IROUTING.TITLE') }}</h3>
    </div>
    <div>
      <table>
        <thead class="">
          <tr class="text-center">
            <th class="">{{ $t('IROUTING.IROUTING.ROUTE_NAME') }}</th>
            <th class="">{{ $t('IROUTING.IROUTING.INTRODUCTION') }}</th>
            <th class="">{{ $t('IROUTING.IROUTING.TIMESPAN') }}</th>
            <th class="">{{ $t('GENERAL.PLAY_AGENT_NUM') }}</th>
            <th class="">{{ $t('GENERAL.ACCEPT_DIGIT') }}</th>
            <th class="">{{ $t('IROUTING.IROUTING.STATUS') }}</th>
            <th class="">{{ $t('GENERAL.PRIORITY') }}</th>
            <th class="">{{ $t('GENERAL.AGENT_NUM_PERFIX') }}</th>
            <th class="">{{ $t('IROUTING.IROUTING.OPERATIONS') }}</th>
          </tr>
        </thead>
        <tbody class="px-5">
          <tr class="text-center" v-for="(item, index) in dataSetting" :key="index">
            <td class="text-center">{{ item.route_name_title }}</td>
            <td class="text-center">{{ item.route_desc }}</td>
            <td class="text-center">{{ showLableDate(item.timespan) }}</td>
            <td class="text-center">
              <span v-if="item.play_agent_num == 1" class="badge badge-info p-2"> {{ $t('IROUTING.IROUTING.ENABLE') }}</span>
              <span v-else> {{ $t('IROUTING.IROUTING.DISABLE') }}</span>
            </td>
            <td class="text-center">{{ item.accept_digit == 'd' ? $t('IROUTING.IROUTING.All_NUM') : item.accept_digit }}</td>
              <td class="text-center">
              <span v-if="item.enable == 1" class="badge badge-info p-2"> {{ $t('IROUTING.IROUTING.ENABLE') }}</span>
              <span v-else> {{ $t('IROUTING.IROUTING.DISABLE') }}</span>
            </td>
            <td class="text-center">{{ item.priority }}</td>
            <td class="text-center">{{ item.agent_num_prefix ? item.agent_num_prefix : '' }}</td>
            <td>
              <RouterLink v-show="setPermission('iroutings.edit')" tag="Button" :to="{ name: 'irouting_edit', params: { id: item.id } }" class="btn btn-primary">{{ $t('GENERAL.EDIT') }}</RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// helper
import helper from '../../js/helper'
export default {
  mixins: [helper],
  data() {
    return {
      dataSetting: [],
    };
  },
  methods: {
    showLableDate(day) {
      let lable;
      switch (day) {
        case "1":
          lable = this.$t('GENERAL.TODAY');
          break;
        case "2":
          lable = this.$t('GENERAL.YESTERDAY');
          break;
        case "7":
          lable = this.$t('GENERAL.LAST_WEEK');
          break;
        case "31":
          lable = this.$t('GENERAL.LAST_MONTH');
          break;
        case "365":
          lable = this.$t('GENERAL.LAST_YEAR');
          break;
        default:
          lable = `${day} ${this.$t("EDIT_SETTINGS.THE_DAY_BEFORE")}`;
          break;
      }
      return lable;
    }
  },
  async mounted() {
    try {
      let result = await this.$axios({
        method: "post",
        url: `/irouting/action`,
        data: {
          method: "getData",
        },

      });
      this.dataSetting = result.data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang='scss'>
.table-shadow {
  box-shadow: 3px 12px 13px #b9b9b978;
  margin-top: 50px;
  padding: 20px;
  overflow: auto;
}
table {
  border-collapse: collapse !important;
  width: 100%;
  th,
  td {
    // white-space: nowrap;
    text-align: center;
  }
  thead {
    background-color: #dfdfdf;
    th {
      padding: 10px;
    }
  }
  tbody {
    tr:nth-child(odd) {
      background-color: #f6f6f6;
    }
    tr:nth-child(even) {
      background-color: #ededed;
    }
    td {
      padding: 10px;
    }
  }
}

// btn-warning
.btn-warning {
  border-radius: 9px;
  background-color: #ffb115;
  padding: 8px 20px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-direction: row-reverse;
  border: 1px solid #ffb115;
  white-space: nowrap;
  // min-width: 100px;

  &:hover {
    cursor: pointer;
    color: #eea512;
    background-color: #fff8eb;

    svg {
      stroke: #eea512;
      transition: all 0.1s linear !important;
    }
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  @media (max-width: 1400px) {
    font-size: 12px;
    padding: 6px 16px;
  }
}
</style>