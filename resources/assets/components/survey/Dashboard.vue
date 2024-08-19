<template>
  <div class="container-fluid">
    <OperatorChart source="dashboard" :isAllUsers="false"></OperatorChart>
  </div>
</template>
<script>

import OperatorChart from "./OperatorChart.vue"


export default {
  name: 'survey_dashboard',
  components: {
    OperatorChart
  }
}
</script>
