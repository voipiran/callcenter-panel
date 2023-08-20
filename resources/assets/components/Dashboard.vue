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
            <h1 class="count">2</h1>
            <p>تعداد اپراتور</p>
          </div>
        </section>
      </div>
      <div class="col-lg-3 col-sm-6">
        <section class="card">
          <div class="symbol red">
            <i class="fa fa-tags" style="color: var(--text_gray)"></i>
          </div>
          <div class="value">
            <h1 class="count2">5</h1>
            <p>تعداد صف</p>
          </div>
        </section>
      </div>
      <div class="col-lg-3 col-sm-6">
        <section class="card">
          <div class="symbol yellow">
            <i class="fa fa-phone" style="color: var(--text_gray)"></i>
          </div>
          <div class="value">
            <h1 class="count3">200</h1>
            <p>تماس امروز</p>
          </div>
        </section>
      </div>
      <div class="col-lg-3 col-sm-6">
        <section class="card">
          <div class="symbol blue">
            <i class="fa fa-bar-chart-o" style="color: var(--text_gray)"></i>
          </div>
          <div class="value">
            <h1 class="count4">5005</h1>
            <p>تعداد تماس کل</p>
          </div>
        </section>
      </div>
    </div>
    <!--state overview end-->

    <div id="answered" v-if="false">
      <notifications position="bottom left" :duration="5000" />
      <div class="container-fluid">
        <h3>وضعیت جاری اپراتور</h3>
        <p class="aent-hide-stateg">
          <input type="checkbox" v-model="agentHideState" name="" id="" />
          <span @click="agentHideState = !agentHideState"> مخفی کردن اپراتورهای غیرفعال </span>
        </p>
        <!-- agents table -->
        <div class="table-shadow my-3">
          <h4>وضعیت اپراتور</h4>
          <!-- the page content  -->
          <div v-if="agents.length">
            <table v-for="(table, indexTable) in agents" :key="indexTable" class="my-5">
              <thead>
                <tr>
                  <th>صف</th>
                  <th>نام اپراتور</th>
                  <th>وضعیت</th>
                  <th>مدت زمان</th>
                  <th>CLID</th>
                  <th>زمان آخرین مکالمه</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(td, indexTd) in table" :key="indexTd" v-show="!agentHideState && !td.state">
                  <td>{{ td.queue }}</td>
                  <td>{{ td.agent }}</td>
                  <td>{{ td.state }}</td>
                  <td>{{ numberWithCommas(td.data1) }}</td>
                  <td></td>
                  <td>{{ jdate(td.lastCall) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- no content -->
          <div v-if="!agents.length">
            <span class="px-2">فاقد محتوا</span>
          </div>
        </div>
        <!-- detail of queue -->
        <div class="table-shadow my-3">
          <h4>خلاصه آمار صف</h4>
          <!-- the page content  -->
          <div v-if="queues.length">
            <table v-for="(table, indexTable) in queues" :key="indexTable" class="my-5">
              <thead>
                <tr>
                  <th>صف</th>
                  <th>اپراتور آزاد</th>
                  <th>درحال مکالمه</th>
                  <th>درحال مکالمه</th>
                  <th>افراد منتظر</th>
                  <th>قدیمی ترین فرد منتظر</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(td, indexTd) in table" :key="indexTd">
                  <td>{{ td.queue }}</td>
                  <td>{{ td.agent }}</td>
                  <td></td>
                  <td>{{ td.data1 }}</td>
                  <td></td>
                  <td>{{ jdate(td.lastCall) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- no content -->
          <div v-if="!queues.length">
            <span class="px-2">فاقد محتوا</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


// helper
import helper from '../js/helper'

export default {
  name: 'answered',
  mixins: [helper],
  data() {
    return {
      isLoading: false,
      agents: [],
      queues: [],

      agentHideState: false,
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
            'method': 'Dashboard_getData'
          }
        })

        /** splite and sort by Queue id */
        let ls = this
        req.data.queues.map((queue) => {
          let sortQueue = []
          req.data.agents.map((item) => {
            if (queue.qname_id == item.qname_id)
              sortQueue.push(item)
          })
          if (sortQueue.length)
            ls.agents.push(sortQueue)
        })

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
    // this.getData()

  }
}
</script>

<style lang='scss'>
</style>