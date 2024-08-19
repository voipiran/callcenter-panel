<template>
  <section>
    <DxPieChart id="pie" :data-source="data" @point-click="pointClickHandler($event)" @legend-click="legendClickHandler($event)" :palette="backgroundColors">
      <DxSeries argument-field="lable" value-field="value">
        <DxLabel :visible="true" :customizeText="customizeLabel">
          <DxConnector :visible="true" :width="1" />
        </DxLabel>
      </DxSeries>
      <DxSize width="500" />
      <DxExport :enabled="true" />
    </DxPieChart>
  </section>
</template>

<script>

import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport,
} from 'devextreme-vue/pie-chart';

export default {
  name: 'pieChart',
  props: ['data'],
  data() {
    return {
      // Define custom background colors
      backgroundColors: ['red', '#FFA500', '#d9d903', '#03d913', '#008000'],
    }
  },
  components: {
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
    DxExport,
  },
  methods: {
    pointClickHandler(e) {
      this.toggleVisibility(e.target);
    },
    legendClickHandler(e) {
      const arg = e.target;
      const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

      this.toggleVisibility(item);
    },
    toggleVisibility(item) {
      item.isVisible() ? item.hide() : item.show();
    },

    customizeLabel({ argument, valueText }) {

      return valueText + "<br>" + this.$t("Chart.survey");
    },
  },
};
</script>