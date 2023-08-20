<template>
  <div id="chart-demo">
    <DxChart :data-source="data" palette="Harmony light">
      <DxCommonSeriesSettings type="splinearea" argument-field="lable" />
      <DxSeries v-for="(item, index) in calcColumns(data[0])" :key="index" :value-field="index" :name="index + ''" />
      <DxMargin :bottom="20" />
      <DxArgumentAxis :value-margins-enabled="false" />
      <DxLegend vertical-alignment="right" horizontal-alignment="right" />
      <DxExport :enabled="true" />
    </DxChart>
    <div class="options" v-if="false">
      <div class="caption">Options</div>
      <div class="option">
        <span>Series Type </span>
        <DxSelectBox :data-source="types" v-model:value="type" />
      </div>
    </div>
  </div>
</template>
<script>
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxExport,
  DxLegend,
  DxMargin,
} from 'devextreme-vue/chart';

import DxSelectBox from 'devextreme-vue/select-box';

export default {
  name: 'areaChart',
  props: ['data'],
  components: {
    DxSelectBox,
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxExport,
    DxLegend,
    DxMargin,
  },
  methods: {
    calcColumns(data) {
      const fields = Object.fromEntries(Object.entries(data).filter(([key, value]) => key != 'lable'))
      return fields
    }
  },
  data() {
    const types = ['area', 'stackedarea', 'fullstackedarea'];
    return {
      types,
      type: types[0],
    };
  },
  mounted() {
  }
};
</script>
<style>
.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  margin-top: 20px;
}

.option {
  margin-top: 10px;
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option > span {
  margin-right: 10px;
}

.option > .dx-widget {
  display: inline-block;
  vertical-align: middle;
}
</style>