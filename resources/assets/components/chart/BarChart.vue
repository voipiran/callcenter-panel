<template>
  <section>
    <DxChart id="chart" :data-source="data" @pointClick="onPointClick">
      <DxCommonSeriesSettings argument-field="lable" type="bar" hover-mode="allArgumentPoints" selection-mode="allArgumentPoints">
        <DxLabel :visible="true">
          <DxFormat :precision="0" type="fixedPoint" />
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
  props: ['data'],
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
      const fields = Object.fromEntries(Object.entries(data).filter(([key, value]) => key != 'lable'))
      return fields
    }
  },
};
</script>
<style>
#chart {
  height: 350px;
}
</style>