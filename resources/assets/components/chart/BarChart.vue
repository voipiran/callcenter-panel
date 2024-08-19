<template>
  <section dir="ltr">
    <DxChart id="chart" :data-source="data" @pointClick="onPointClick">
      <DxCommonSeriesSettings argument-field="lable" type="bar" hover-mode="allArgumentPoints" selection-mode="allArgumentPoints">
        <DxLabel :visible="true" :customizeText="customizeLabel" :rotation-angle="customLabel ? -90 : 0">
          <DxFormat :precision="precision" type="fixedPoint" />
        </DxLabel>
      </DxCommonSeriesSettings>
      <DxSeries v-for="(item, index) in calcColumns(data ? data[0] : null)" :key="index" :value-field="index" :name="index + ''" />
      <DxLegend vertical-alignment="right" horizontal-alignment="right" />
      <DxExport :enabled="true" />
    </DxChart>
  </section>
</template>
<script>
import {
  DxChart,
  DxSeries,
  DxCommonSeriesSettings,
  DxLabel,
  DxFormat,
  DxLegend,
  DxExport,
} from 'devextreme-vue/chart';

export default {
  name: 'barChart',
  props: {
    data: {
      type: Array,
      required: true,
    },
    convertTime: {
      type: Boolean,
      default: 0,
    },
    precision: {
      type: Number,
      default: 0
    },
    customLabel: {
      type: String,
      default: null
    }
  },
  components: {
    DxChart,
    DxSeries,
    DxCommonSeriesSettings,
    DxLabel,
    DxFormat,
    DxLegend,
    DxExport,
  },
  data() {
    return {

    };
  },
  methods: {

    onPointClick({ target }) {
      target.select();
    },

    calcColumns(data) {
      if (!data) return
      const fields = Object.fromEntries(Object.entries(data).filter(([key, value]) => key != 'lable' && key != 'lable2'))
      return fields
    },

    customizeLabel({ argument, valueText }) {
      if (this.convertTime) {
        return this.secondsToDay(valueText);
      }

      if (this.customLabel) {
        return this.getCountSurvey(argument, valueText, this.customLabel);
      }
      return valueText;
    },


    getCountSurvey(label, valueText, customLabel) {
      const item = this.data.find((el) => el.lable === label);
      return item.lable2 ? `${this.$t(customLabel)} ${valueText} ${this.$t("Chart.of")}  ${item.lable2}  ${this.$t("Chart.survey")}` : `${valueText}`;
    },

    /** convert secend to day hours and minute */
    secondsToDay(seconds) {
      seconds = Number(seconds);

      if (!seconds) return this.$t("Chart.avg") + 0 + this.$t("GENERAL.secend");

      var d = Math.floor(seconds / (3600 * 24));
      var h = Math.floor(seconds % (3600 * 24) / 3600);
      var m = Math.floor(seconds % 3600 / 60);
      var s = Math.floor(seconds % 60);

      var dDisplay = d > 0 ? d + (d == 1 ? this.$t("GENERAL.day") : this.$t("GENERAL.day")) : "";
      var hDisplay = h > 0 ? h + (h == 1 ? this.$t("GENERAL.hour") : this.$t("GENERAL.hour")) : "";
      var mDisplay = m > 0 ? m + (m == 1 ? this.$t("GENERAL.minute") : this.$t("GENERAL.minute")) : "";
      var sDisplay = s > 0 ? s + (s == 1 ? this.$t("GENERAL.secend") : this.$t("GENERAL.secend")) : "";

      return this.$t("Chart.avg") + " " + (dDisplay ? dDisplay + '<br>' : '') + (hDisplay ? hDisplay + '<br>' : '') + (mDisplay ? mDisplay + '<br>' : '') + sDisplay;
    },
  },
};
</script>
<style>
#chart {
  height: 350px;
}
</style>