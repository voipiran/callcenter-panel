<template>
  <div id="home" class="app">
    <notifications position="bottom left" :duration="5000" />

    <!--state overview start-->
    <div class="row state-overview">
      <div class="col-lg-3 col-sm-6">
        <section class="card">
          <div class="symbol terques">
            <i class="fa fa-user" style="color: var(--text_gray)"></i>
          </div>
          <div class="value">
            <h1 class="count">{{ operator_count }}</h1>
            <p>{{ $t('DASH.operator') }}</p>
          </div>
        </section>
      </div>
      <div class="col-lg-3 col-sm-6">
        <section class="card">
          <div class="symbol red">
            <i class="fa fa-tags" style="color: var(--text_gray)"></i>
          </div>
          <div class="value">
            <h1 class="count2">{{ queue_count }}</h1>
            <p>{{ $t('DASH.queue') }}</p>
          </div>
        </section>
      </div>
      <div class="col-lg-3 col-sm-6">
        <section class="card">
          <div class="symbol yellow">
            <i class="fa fa-phone" style="color: var(--text_gray)"></i>
          </div>
          <div class="value">
            <h1 class="count3">{{ call_today_count }}</h1>
            <p>{{ $t('DASH.callToDay') }}</p>
          </div>
        </section>
      </div>
      <div class="col-lg-3 col-sm-6">
        <section class="card">
          <div class="symbol blue">
            <i class="fa fa-bar-chart-o" style="color: var(--text_gray)"></i>
          </div>
          <div class="value">
            <h1 class="count4">{{ call_count }}</h1>
            <p>{{ $t('DASH.callAll') }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'answered',
  data() {
    return {
      isLoading: false,
      agents: [],
      queues: [],

      agentHideState: false,

      operator_count: null,
      call_count: null,
      call_today_count: null,
      queue_count: null,

    }
  },
  methods: {
    /** get data from api */
    async getData() {
      try {

        this.isLoading = true

        let req = await this.$axios({
          url: '/allActions',
          data: {
            'method': 'Dashboard_detail'
          }
        })

        this.operator_count = req.data.operator_count;
        this.queue_count = req.data.queue_count;
        this.call_count = req.data.call_count;
        this.call_today_count = req.data.call_today_count;

        /** splite and sort by Queue id */


      } catch (error) {
        console.log(error);
      }
      this.isLoading = false
    },

  },
  /** get locale for date-picker */
  getLocale() {
    if (this.$i18n.locale == 'en')
      return 'en';
    return 'fa';
  },

  mounted() {
    this.getData()

  }
}
</script>

<style lang='scss'>
</style>