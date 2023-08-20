<template>
  <div id="home">
    <notifications position="bottom left" :duration="5000" />

    <!-- content Queue and Agent-->
    <div class="row my-2 app">
      <!-- Queue -->
      <div class="col-12 col-sm-6">
        <div class="select-box p3 my-2">
          <!-- title -->
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.HOME.queueGuide')">
              <p>{{ $t('STATS.HOME.queueGuide') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.HOME.queueTitle') }}</h5>
          </div>
          <hr />
          <!-- content -->
          <div class="d-block d-sm-flex justify-content-center w-100">
            <!-- list of queues Available -->
            <div class="available">
              <span>{{ $t('STATS.HOME.available') }}</span>
              <select multiple="multiple" size="10" style="height: 150px; width: 100%" id="queuesAvailable">
                <option v-for="(item, index) in queuesAvailable" :key="index" :value="item.code">{{ item.title }}</option>
              </select>
            </div>
            <!-- buttons -->
            <div class="btns d-inline d-sm-flex flex-column align-items-center justify-content-center pt-3">
              <!-- move left single -->
              <svg class="svg-single-left" @click="queuesSingle('queuesAvailable')" xmlns="http://www.w3.org/2000/svg" width="25.295" height="25.295" viewBox="0 0 20.295 20.295">
                <path
                  id="circled-left"
                  d="M72.648,62.5A10.148,10.148,0,1,0,82.8,72.648,10.151,10.151,0,0,0,72.648,62.5Zm-.932,10.672L76.4,77.857a.582.582,0,0,1,0,.816l-1.364,1.364a.582.582,0,0,1-.816,0l-6.859-6.866a.558.558,0,0,1,0-.809L74.22,65.5a.582.582,0,0,1,.816,0L76.4,66.861a.582.582,0,0,1,0,.816l-4.685,4.685A.574.574,0,0,0,71.715,73.172Z"
                  transform="translate(-62.5 -62.5)"
                />
              </svg>
              <!-- move right single -->
              <svg class="svg-single-right" @click="queuesSingle('queuesSelected')" xmlns="http://www.w3.org/2000/svg" width="25.295" height="25.295" viewBox="0 0 20.295 20.295">
                <path
                  id="circled-left"
                  d="M72.648,62.5A10.148,10.148,0,1,0,82.8,72.648,10.151,10.151,0,0,0,72.648,62.5Zm-.932,10.672L76.4,77.857a.582.582,0,0,1,0,.816l-1.364,1.364a.582.582,0,0,1-.816,0l-6.859-6.866a.558.558,0,0,1,0-.809L74.22,65.5a.582.582,0,0,1,.816,0L76.4,66.861a.582.582,0,0,1,0,.816l-4.685,4.685A.574.574,0,0,0,71.715,73.172Z"
                  transform="translate(82.795 82.795) rotate(180)"
                />
              </svg>
              <!--move left all -->
              <svg class="svg-all-left" @click="queuesAll('queuesSelected')" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 21 21">
                <g id="Group_1" data-name="Group 1" transform="translate(-155 -336)">
                  <circle id="Ellipse_1" data-name="Ellipse 1" cx="10.5" cy="10.5" r="10.5" transform="translate(155 336)" />
                  <path
                    id="stylish-left"
                    d="M244.488,201.765l-.755-1.2a.321.321,0,0,0-.589,0l-4.153,6.585a.956.956,0,0,0,0,.935l2.819,4.469c.163.258.048.469-.258.469h-.093a1.1,1.1,0,0,1-.84-.471c-.637-1.026-2.164-3.443-2.806-4.464a.956.956,0,0,1,0-.935l2.811-4.451a.956.956,0,0,0,0-.935c-.226-.356-.532-.845-.757-1.2a1.112,1.112,0,0,0-.848-.469h-2.774a1.056,1.056,0,0,0-.812.411l-.261.411-3.925,6.229a.956.956,0,0,0,0,.935l4.15,6.585a.321.321,0,0,0,.589,0l.757-1.2a.956.956,0,0,0,0-.935l-2.809-4.449a.956.956,0,0,1,0-.935l2.811-4.451a1.136,1.136,0,0,1,.848-.481h.085c.306,0,.421.208.258.466l-2.819,4.466a.956.956,0,0,0,0,.935l2.814,4.469.587.938.745,1.184a1.119,1.119,0,0,0,.848.469h2.766a1.112,1.112,0,0,0,.85-.469c.226-.356.534-.845.757-1.2a.956.956,0,0,0,0-.935l-2.8-4.454a.956.956,0,0,1,0-.935l2.806-4.451A.956.956,0,0,0,244.488,201.765Z"
                    transform="translate(-73.107 138.877)"
                    fill="#fff"
                  />
                </g>
              </svg>
              <!--move right all -->
              <svg class="svg-all-right" @click="queuesAll('queuesAvailable')" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 21 21">
                <g id="Group_1" data-name="Group 1" transform="translate(176 357) rotate(180)">
                  <circle id="Ellipse_1" data-name="Ellipse 1" cx="10.5" cy="10.5" r="10.5" transform="translate(155 336)" />
                  <path
                    id="stylish-left"
                    d="M244.488,201.765l-.755-1.2a.321.321,0,0,0-.589,0l-4.153,6.585a.956.956,0,0,0,0,.935l2.819,4.469c.163.258.048.469-.258.469h-.093a1.1,1.1,0,0,1-.84-.471c-.637-1.026-2.164-3.443-2.806-4.464a.956.956,0,0,1,0-.935l2.811-4.451a.956.956,0,0,0,0-.935c-.226-.356-.532-.845-.757-1.2a1.112,1.112,0,0,0-.848-.469h-2.774a1.056,1.056,0,0,0-.812.411l-.261.411-3.925,6.229a.956.956,0,0,0,0,.935l4.15,6.585a.321.321,0,0,0,.589,0l.757-1.2a.956.956,0,0,0,0-.935l-2.809-4.449a.956.956,0,0,1,0-.935l2.811-4.451a1.136,1.136,0,0,1,.848-.481h.085c.306,0,.421.208.258.466l-2.819,4.466a.956.956,0,0,0,0,.935l2.814,4.469.587.938.745,1.184a1.119,1.119,0,0,0,.848.469h2.766a1.112,1.112,0,0,0,.85-.469c.226-.356.534-.845.757-1.2a.956.956,0,0,0,0-.935l-2.8-4.454a.956.956,0,0,1,0-.935l2.806-4.451A.956.956,0,0,0,244.488,201.765Z"
                    transform="translate(-73.107 138.877)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>

            <!-- list of queues Selected -->
            <div class="selected">
              <span>{{ $t('STATS.HOME.selected') }}</span>
              <select multiple="multiple" size="10" style="height: 150px; width: 100%" id="queuesSelected">
                <option v-for="(item, index) in queuesSelected" :key="index" :value="item.code">{{ item.title }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- Agents  -->
      <div class="col-12 col-sm-6">
        <div class="select-box p3 my-2">
          <!-- title -->
          <div class="d-flex">
            <div class="guide" v-if="$t('STATS.HOME.agentGuide')">
              <p>{{ $t('STATS.HOME.agentGuide') }}</p>
            </div>
            <h5 class="m-0">{{ $t('STATS.HOME.agentTitle') }}</h5>
          </div>
          <hr />
          <!-- content -->
          <div class="d-block d-sm-flex justify-content-center w-100">
            <!-- list of queues Available -->
            <div class="available">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ $t('STATS.HOME.available') }}</span>
                <!-- checkbox show all agent -->
                <div class="show-all-agent" v-if="!isLoading && false" @click="getData('show all')">
                  <input class="mx-2" type="checkbox" v-model="showAllAgent" />
                  <span>{{ $t('STATS.HOME.showAllAgent') }}</span>
                </div>
                <!-- loader -->
                <!-- <div class="loader-wait-request mx-2" style="width: 20px; height: 20px" v-if="isLoading"></div> -->
              </div>
              <select multiple="multiple" size="10" style="height: 150px; width: 100%" id="agentsAvailable">
                <option v-for="(item, index) in agentsAvailable" :key="index" :value="item.code">{{ item.title }}</option>
              </select>

              <br />
            </div>

            <!-- buttons -->
            <div class="btns d-inline d-sm-flex flex-column align-items-center justify-content-center pt-3">
              <!-- move left single -->
              <svg class="svg-single-left" @click="agentsSingle('agentsAvailable')" xmlns="http://www.w3.org/2000/svg" width="25.295" height="25.295" viewBox="0 0 20.295 20.295">
                <path
                  id="circled-left"
                  d="M72.648,62.5A10.148,10.148,0,1,0,82.8,72.648,10.151,10.151,0,0,0,72.648,62.5Zm-.932,10.672L76.4,77.857a.582.582,0,0,1,0,.816l-1.364,1.364a.582.582,0,0,1-.816,0l-6.859-6.866a.558.558,0,0,1,0-.809L74.22,65.5a.582.582,0,0,1,.816,0L76.4,66.861a.582.582,0,0,1,0,.816l-4.685,4.685A.574.574,0,0,0,71.715,73.172Z"
                  transform="translate(-62.5 -62.5)"
                />
              </svg>
              <!-- move right single -->
              <svg class="svg-single-right" @click="agentsSingle('agentsSelected')" xmlns="http://www.w3.org/2000/svg" width="25.295" height="25.295" viewBox="0 0 20.295 20.295">
                <path
                  id="circled-left"
                  d="M72.648,62.5A10.148,10.148,0,1,0,82.8,72.648,10.151,10.151,0,0,0,72.648,62.5Zm-.932,10.672L76.4,77.857a.582.582,0,0,1,0,.816l-1.364,1.364a.582.582,0,0,1-.816,0l-6.859-6.866a.558.558,0,0,1,0-.809L74.22,65.5a.582.582,0,0,1,.816,0L76.4,66.861a.582.582,0,0,1,0,.816l-4.685,4.685A.574.574,0,0,0,71.715,73.172Z"
                  transform="translate(82.795 82.795) rotate(180)"
                />
              </svg>
              <!--move left all -->
              <svg class="svg-all-left" @click="agentsAll('agentsSelected')" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 21 21">
                <g id="Group_1" data-name="Group 1" transform="translate(-155 -336)">
                  <circle id="Ellipse_1" data-name="Ellipse 1" cx="10.5" cy="10.5" r="10.5" transform="translate(155 336)" />
                  <path
                    id="stylish-left"
                    d="M244.488,201.765l-.755-1.2a.321.321,0,0,0-.589,0l-4.153,6.585a.956.956,0,0,0,0,.935l2.819,4.469c.163.258.048.469-.258.469h-.093a1.1,1.1,0,0,1-.84-.471c-.637-1.026-2.164-3.443-2.806-4.464a.956.956,0,0,1,0-.935l2.811-4.451a.956.956,0,0,0,0-.935c-.226-.356-.532-.845-.757-1.2a1.112,1.112,0,0,0-.848-.469h-2.774a1.056,1.056,0,0,0-.812.411l-.261.411-3.925,6.229a.956.956,0,0,0,0,.935l4.15,6.585a.321.321,0,0,0,.589,0l.757-1.2a.956.956,0,0,0,0-.935l-2.809-4.449a.956.956,0,0,1,0-.935l2.811-4.451a1.136,1.136,0,0,1,.848-.481h.085c.306,0,.421.208.258.466l-2.819,4.466a.956.956,0,0,0,0,.935l2.814,4.469.587.938.745,1.184a1.119,1.119,0,0,0,.848.469h2.766a1.112,1.112,0,0,0,.85-.469c.226-.356.534-.845.757-1.2a.956.956,0,0,0,0-.935l-2.8-4.454a.956.956,0,0,1,0-.935l2.806-4.451A.956.956,0,0,0,244.488,201.765Z"
                    transform="translate(-73.107 138.877)"
                    fill="#fff"
                  />
                </g>
              </svg>
              <!--move right all -->
              <svg class="svg-all-right" @click="agentsAll('agentsAvailable')" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 21 21">
                <g id="Group_1" data-name="Group 1" transform="translate(176 357) rotate(180)">
                  <circle id="Ellipse_1" data-name="Ellipse 1" cx="10.5" cy="10.5" r="10.5" transform="translate(155 336)" />
                  <path
                    id="stylish-left"
                    d="M244.488,201.765l-.755-1.2a.321.321,0,0,0-.589,0l-4.153,6.585a.956.956,0,0,0,0,.935l2.819,4.469c.163.258.048.469-.258.469h-.093a1.1,1.1,0,0,1-.84-.471c-.637-1.026-2.164-3.443-2.806-4.464a.956.956,0,0,1,0-.935l2.811-4.451a.956.956,0,0,0,0-.935c-.226-.356-.532-.845-.757-1.2a1.112,1.112,0,0,0-.848-.469h-2.774a1.056,1.056,0,0,0-.812.411l-.261.411-3.925,6.229a.956.956,0,0,0,0,.935l4.15,6.585a.321.321,0,0,0,.589,0l.757-1.2a.956.956,0,0,0,0-.935l-2.809-4.449a.956.956,0,0,1,0-.935l2.811-4.451a1.136,1.136,0,0,1,.848-.481h.085c.306,0,.421.208.258.466l-2.819,4.466a.956.956,0,0,0,0,.935l2.814,4.469.587.938.745,1.184a1.119,1.119,0,0,0,.848.469h2.766a1.112,1.112,0,0,0,.85-.469c.226-.356.534-.845.757-1.2a.956.956,0,0,0,0-.935l-2.8-4.454a.956.956,0,0,1,0-.935l2.806-4.451A.956.956,0,0,0,244.488,201.765Z"
                    transform="translate(-73.107 138.877)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>

            <!-- list of agents Selected -->
            <div class="selected">
              <span>{{ $t('STATS.HOME.selected') }}</span>
              <select multiple="multiple" size="10" style="height: 150px; width: 100%" id="agentsSelected">
                <option v-for="(item, index) in agentsSelected" :key="index" :value="item.code">{{ item.title }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- btns filter time report -->
    <div class="p-3">
      <div class="timeFilter row" :class="{ 'loading-Calc-Date': loadingCalcDate }">
        <div class="col-12">
          <h5>{{ $t('STATS.HOME.shortCutTitle') }}</h5>
          <hr />
          <ul style="overflow: auto" class="px-2">
            <li
              :class="{ active: timeFilter == '1' }"
              @click="
                timeFilter == '1' ? (timeFilter = null) : (timeFilter = '1');
                setTimeDatePicker();
              "
            >
              {{ $t('STATS.HOME.today') }}
            </li>
            <li
              :class="{ active: timeFilter == '2' }"
              @click="
                timeFilter == '2' ? (timeFilter = null) : (timeFilter = '2');
                setTimeDatePicker();
              "
            >
              {{ $t('STATS.HOME.yesterday') }}
            </li>
            <li
              :class="{ active: timeFilter == '7' }"
              @click="
                timeFilter == '7' ? (timeFilter = null) : (timeFilter = '7');
                setTimeDatePicker();
              "
            >
              {{ $t('STATS.HOME.currentWeek') }}
            </li>
            <li
              :class="{ active: timeFilter == '14' }"
              @click="
                timeFilter == '14' ? (timeFilter = null) : (timeFilter = '14');
                setTimeDatePicker();
              "
            >
              {{ $t('STATS.HOME.lastWeek') }}
            </li>
            <li
              :class="{ active: timeFilter == '30' }"
              @click="
                timeFilter == '30' ? (timeFilter = null) : (timeFilter = '30');
                setTimeDatePicker();
              "
            >
              {{ $t('STATS.HOME.inMonth') }}
            </li>
            <li
              :class="{ active: timeFilter == '90' }"
              @click="
                timeFilter == '90' ? (timeFilter = null) : (timeFilter = '90');
                setTimeDatePicker();
              "
            >
              {{ $t('STATS.HOME.last3Month') }}
            </li>
          </ul>
        </div>

        <div class="col-12 d-block d-md-flex justify-content-around">
          <!-- date -->
          <div class="date-picker row">
            <!-- from date -->
            <div class="col-12 col-md-6 date-holder">
              <div class="mb-2">{{ $t('STATS.HOME.fromFilter') }}</div>

              <date-picker color="#5c659c"
                v-model="fromFilter"
                :locale="getLocale"
                :locale-config="{
                  fa: {
                    displayFormat: 'jYYYY/jMM/jDD',
                    lang: { label: 'شمسی' }
                  },
                  en: {
                    displayFormat: 'YYYY/MM/DD',
                    lang: { label: 'Gregorian' }
                  }
                }"
                view="year"
                auto-submit
              ></date-picker>
            </div>

            <!-- toFilter -->
            <div class="col-12 col-md-6 date-holder">
              <div class="mb-2">{{ $t('STATS.HOME.toFilter') }}</div>
              <date-picker color="#5c659c"
                class="mt-2"
                v-model="toFilter"
                :locale="getLocale"
                :locale-config="{
                  fa: {
                    displayFormat: 'jYYYY/jMM/jDD',
                    lang: { label: 'شمسی' }
                  },
                  en: {
                    displayFormat: 'YYYY/MM/DD',
                    lang: { label: 'Gregorian' }
                  }
                }"
                view="year"
                auto-submit
              ></date-picker>
            </div>
          </div>
          <!-- time -->
          <div class="date-picker row">
            <!-- from date -->
            <div class="col-12 col-md-6 date-holder">
              <div class="mb-2">{{ $t('STATS.HOME.fromTime') }}</div>

              <date-picker color="#5c659c" v-model="fromTime" type="time" />
            </div>

            <!-- toFilter -->
            <div class="col-12 col-md-6 date-holder">
              <div class="mb-2">{{ $t('STATS.HOME.toTime') }}</div>
              <date-picker color="#5c659c" v-model="toTime" type="time" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- btn submit -->
    <div class="submit mx-3">
      <button class="btn-submit" @click="submit()">
        <span v-if="!isLoading"> {{ $t('STATS.HOME.btnSubmit') }}</span>
        <!-- loader -->
        <div class="loader-ctn d-flex align-items-center justify-content-center" v-if="isLoading">
          <div class="loader-wait-request" style="width: 20px; height: 20px;"></div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>

/**talkhabi datepicker */
import VuePersianDatetimePicker from 'vue3-persian-datetime-picker'

/** import pinia */
import { useHome } from '../../js/pinia/home'
import { useGeneral } from '../../js/pinia/general'
import { useAnswered } from '../../js/pinia/answered'

import helper from '../../js/helper'

var moment = require('moment-jalaali')

export default {
  mixins: [helper],
  data() {
    return {
      loadingCalcDate: false,
      isLoading: false,
      queuesAvailable: [],
      queuesSelected: [],

      agentsAvailable: [],
      agentsSelected: [],
      showAllAgent: true,

      timeFilter: '1',

      toFilter: null,
      fromFilter: null,

      toTime: null,
      fromTime: null,


    }
  },
  methods: {
    /** get data from api */
    async getData(changeShowAllAgent = false) {
      try {
        await this.resetForm();

        if (changeShowAllAgent) {
          this.showAllAgent = !this.showAllAgent;
          this.home.showAllAgent = this.showAllAgent;
        }

        if (this.isLoading) return
        this.isLoading = true;

        this.queuesSelected = this.agentsSelected = []
        let req = await this.$axios({
          url: '/stats/homeActions',
          data: {
            method: 'Home_getData',
            showAllAgent: this.showAllAgent
          }
        })

        // get queue data
        let queue = []
        req.data.queue.map((item) => {
          if (item.descr != 'NONE')
            queue.push({ code: item.extension, title: `${item.descr} (${item.extension})` })
        })
        this.queuesSelected = queue

        // get agent data
        let agent = []
        req.data.agent.map((item) => {
          if (item.name != 'NONE')
            agent.push({ code: item.name, title: item.name })
        })
        this.agentsSelected = agent


        this.setTimeDatePicker();

      } catch (error) {
        console.log(error);
      }

      this.isLoading = false;

    },
    /** submit btn show detail */
    async submit() {

      try {
        if (this.isLoading || this.loadingCalcDate) return
        if (!this.queuesSelected.length || !this.queuesSelected.length)
          return this.$notify({
            text: "حداقل یک مورد اپراتور و صف باید انتخاب شود",
            type: 'error'
          });

        /** set in store home */
        await this.syncHomeStoreViaThis()

        this.isLoading = true

        /** change route and active menu */
        // this.showActiveMenu('/Stats/home')
        this.$router.push({ name: 'stats_distribution' });
        return

      } catch (error) {
        console.error(error);
      }
      this.isLoading = false
    },
    /** use in after select element in select option and click to move
     * @parmas enum [push or pull]
     * @params array of object
     * @params object for pull or push 
     */
    moveElement(type, arrayOfObject, element) {
      try {
        /** start all move */
        if (type == 'all') {
          element.map((item) => {
            arrayOfObject.push(item)
          })
          return arrayOfObject
        }


        /** start single move */
        let arrayChanged
        let elementRemoved
        /** for type pull */
        if (type == 'pull') {
          arrayChanged = arrayOfObject.filter((item) => {
            if (item.code != element)
              return item
            else
              elementRemoved = item
          })
          return [arrayChanged, elementRemoved]
        }
        // for type push
        else if (type == 'push') {
          if (!arrayOfObject.length)
            arrayOfObject = []
          arrayOfObject.unshift(element)

          return arrayOfObject
        }
      } catch (error) {
        console.log(error);

      }
    },
    /** handle btn left or right select option in section Queues for move single element
     * @param enum [queuesAvailable,queuesSelected]
     *  type queuesSelected => move left list  and remove from queuesAvailable
     *  type queuesAvailable => move right list and remove from queuesSelected
    */
    queuesSingle(type) {
      try {
        var select = document.getElementById(type);
        var element = select.options[select.selectedIndex].value;
        if (type == 'queuesAvailable') {
          let req = this.moveElement('pull', this.queuesAvailable, element)
          this.queuesAvailable = req[0]
          this.queuesSelected = this.moveElement('push', this.queuesSelected, req[1])
          return
        }
        /** else */
        let req = this.moveElement('pull', this.queuesSelected, element)
        this.queuesSelected = req[0]
        this.queuesAvailable = this.moveElement('push', this.queuesAvailable, req[1])

      } catch (error) {
        console.log(error);
      }
    },
    /** handle btn left or right select option in section Queues for move All element
     * @param enum [queuesAvailable,queuesSelected]
     *  type queuesSelected => move left list  and remove from queuesAvailable
     *  type queuesAvailable => move right list and remove from queuesSelected
    */
    queuesAll(type) {
      try {

        /** for move all element */
        if (type == 'queuesAvailable') {
          this.queuesAvailable = this.moveElement('all', this.queuesAvailable, this.queuesSelected)
          this.queuesSelected = []
          return
        }
        /** else */
        this.queuesSelected = this.moveElement('all', this.queuesSelected, this.queuesAvailable)
        this.queuesAvailable = []

      } catch (error) {
        console.log(error);
      }
    },
    /** handle btn left or right select option in section Agents for move single element
   * @param enum [agentsAvailable,agentsSelected]
   *  type agentsSelected => move left list  and remove from agentsAvailable
   *  type agentsAvailable => move right list and remove from agentsSelected
  */
    agentsSingle(type) {
      try {
        var select = document.getElementById(type);
        var element = select.options[select.selectedIndex].value;
        if (type == 'agentsAvailable') {
          let req = this.moveElement('pull', this.agentsAvailable, element)
          this.agentsAvailable = req[0]
          this.agentsSelected = this.moveElement('push', this.agentsSelected, req[1])
          return
        }
        /** else */
        let req = this.moveElement('pull', this.agentsSelected, element)
        this.agentsSelected = req[0]
        this.agentsAvailable = this.moveElement('push', this.agentsAvailable, req[1])

      } catch (error) {
        console.log(error);
      }
    },
    /** handle btn left or right select option in section agents for move All element
     * @param enum [agentsAvailable,agentsSelected]
     *  type agentsSelected => move left list  and remove from agentsAvailable
     *  type agentsAvailable => move right list and remove from agentsSelected
    */
    agentsAll(type) {
      try {

        /** for move all element */
        if (type == 'agentsAvailable') {
          this.agentsAvailable = this.moveElement('all', this.agentsAvailable, this.agentsSelected)
          this.agentsSelected = []
          return
        }
        /** else */
        this.agentsSelected = this.moveElement('all', this.agentsSelected, this.agentsAvailable)
        this.agentsAvailable = []

      } catch (error) {
        console.log(error);
      }
    },
    /**clear from and to date filter */
    eraseDate(type) {
      type == 'from' ? this.fromFilter = null : this.toFilter = null
    },
    /** sync this data via pinia home store */
    syncThisViaHomeStore() {
      this.queuesSelected = this.home.queues
      this.agentsSelected = this.home.agents
      this.queuesAvailable = this.home.queuesAvailable
      this.agentsAvailable = this.home.agentsAvailable
      this.toFilter = this.home.toFilter
      this.fromFilter = this.home.fromFilter
      this.toTime = this.home.toTime
      this.fromTime = this.home.fromTime

      let timeFilter
      switch (this.home.timeFilter ? this.home.timeFilter.code : this.home.timeFilter) {
        case 'today':
          /**today */
          timeFilter = '1'
          break;
        case 'yesterday':
          /**yesterday */
          timeFilter = '2'
          break;
        case 'lastWeek':
          /**last week */
          timeFilter = '14'
          break;
        case 'currentWeek':
          /**in week */
          timeFilter = '7'
          break;
        case 'currentMonth':
          /**in month */
          timeFilter = '30'
          break;
        case 'last3Month':
          timeFilter = '90'
          break;
        default:
          timeFilter = null
          break;
      }

      this.timeFilter = timeFilter
    },
    /** sync pinia home store via this data*/
    syncHomeStoreViaThis() {
      let timeFilter = null
      switch (this.timeFilter) {
        case '1':
          /**today */
          timeFilter = { code: 'today', lable: 'امروز' }
          break;
        case '2':
          /**yesterday */
          timeFilter = { code: 'yesterday', lable: 'دیروز' }
          break;
        case '14':
          /**last week */
          timeFilter = { code: 'lastWeek', lable: 'هفته گذشته' }
          break;
        case '7':
          /**in week */
          timeFilter = { code: 'currentWeek', lable: 'هفته جاری' }
          break;
        case '30':
          /**in month */
          timeFilter = { code: 'currentMonth', lable: 'ماه جاری' }
          break;
        case '90':
          timeFilter = { code: 'last3Month', lable: 'سه ماه گذشته' }
          break;
        default:
          timeFilter = null
          break;
      }
      this.home.queuesAvailable = this.queuesAvailable
      this.home.agentsAvailable = this.agentsAvailable
      this.home.queues = this.queuesSelected
      this.home.agents = this.agentsSelected
      this.home.timeFilter = timeFilter
      this.home.toTime = this.toTime
      this.home.fromTime = this.fromTime
      this.home.showAllAgent = this.showAllAgent
      this.home.fromFilterFaLable = this.home.fromFilter = this.fromFilter
      this.home.toFilterFaLable = this.home.toFilter = this.toFilter

      if (this.$i18n.locale == 'en') {
        this.home.fromFilterFaLable = moment(this.home.fromFilterFaLable, 'jYYYY/jM/jD').format('YYYY/MM/DD')
        this.home.toFilterFaLable = moment(this.home.toFilterFaLable, 'jYYYY/jM/jD').format('YYYY/MM/DD')
      }

    },

    /** set time date picker 
 * @param 1 is timeFilter number [1 for todat. 7 for week and etc]
 * */
    async setTimeDatePicker() {
      try {

        if (this.loadingCalcDate) return

        this.loadingCalcDate = true;

        let timeFilter = null
        switch (this.timeFilter) {
          case '1':
            /**today */
            timeFilter = { code: 'today', lable: 'امروز' }
            break;
          case '2':
            /**yesterday */
            timeFilter = { code: 'yesterday', lable: 'دیروز' }
            break;
          case '14':
            /**last week */
            timeFilter = { code: 'lastWeek', lable: 'هفته گذشته' }
            break;
          case '7':
            /**in week */
            timeFilter = { code: 'currentWeek', lable: 'هفته جاری' }
            break;
          case '30':
            /**in month */
            timeFilter = { code: 'currentMonth', lable: 'ماه جاری' }
            break;
          case '90':
            timeFilter = { code: 'last3Month', lable: 'سه ماه گذشته' }
            break;
          default:
            timeFilter = null
            break;
        }

        let req = await this.$axios({
          url: '/stats/homeActions',
          data: {
            'method': 'Home_calcDateTime',
            'timeFilter': timeFilter,
            'toFilter': null,
            'fromFilter': null,
          }
        })

        // set date fa
        this.fromFilter = this.home.fromFilterFaLable = this.jdate(req.data.timeFilter[0], 'jYYYY/jMM/jDD')
        this.toFilter = this.home.toFilterFaLable = this.jdate(req.data.timeFilter[1], 'jYYYY/jMM/jDD')
        // set time 
        this.fromTime = this.jdate(req.data.timeFilter[0], 'HH:mm')
        this.toTime = this.jdate(req.data.timeFilter[1], 'HH:mm')
        // set date en


      } catch (error) {
        console.error(error);
      }

      this.loadingCalcDate = false;

    },

    /** reset all input and etc when refresh page click */
    async resetForm() {
      this.home.queues = this.queues = [];
      this.home.agents = this.agents = [];
      this.home.queuesAvailable = this.queuesAvailable = [];
      this.home.agentsAvailable = this.agentsAvailable = [];

      // this.home.showAllAgent = this.showAllAgent = true;

      this.home.timeFilter = this.timeFilter = null;

      this.home.toTime = this.toTime = null;
      this.home.fromTime = this.fromTime = null;

      this.home.toFilter = this.toFilter = null;
      this.home.fromFilter = this.fromFilter = null;
      this.home.toFilterFaLable = this.toFilterFaLable = null;
      this.home.fromFilterFaLable = this.fromFilterFaLable = null;
    }
  },
  computed: {
    /** get locale for date-picker */
    getLocale() {
      if (this.$i18n.locale == 'en')
        return 'en';
      return 'fa';
    }
  },
  components: {
    datePicker: VuePersianDatetimePicker,
  },
  mounted() {

    if (this.home.queues.length) {
      this.syncThisViaHomeStore();
      this.setTimeDatePicker()
      return
    }
    this.getData()


  },
  setup() {
    const home = useHome()
    const general = useGeneral()
    const answered = useAnswered()
    return {
      home,
      general,
      answered
    }
  }
}
</script>

<style scoped lang='scss'>
#home {
  .btns {
    padding: 0 20px;
    svg {
      fill: dodgerblue;
      margin: 5px;
      border-radius: 50%;
      box-shadow: 0 3px 6px rgb(0 0 0 / 20%);
      padding: 2px;
    }
    .svg-single-right:hover,
    .svg-all-right:hover,
    .svg-single-left:hover,
    .svg-all-left:hover {
      cursor: pointer;
      fill: gray !important;
    }
    @media (max-width: 575.98px) {
      svg {
        transform: rotate(-90deg);
      }
    }
  }
  .select-box {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    padding: 20px;
    min-height: 280px;

    select {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
      border: none;
      padding: 6px;
      margin: 7px 0;
      option {
        margin: 5px 0;
        padding-right: 5px;
      }
    }
    .selected,
    .available {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .timeFilter {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    padding: 20px;
    overflow: auto;
    ul {
      display: flex;
      padding: 0;
      background: #dedfe38a;
      padding: 12px;
      border-radius: 10px;
      li {
        cursor: pointer;
        padding: 5px 7px;
        min-width: 100px;
        text-align: center;
        &:hover {
          font-weight: 700;
        }
      }
      .active {
        background: dodgerblue;
        border-radius: 7px;
        color: white;
      }
    }

    .date-picker {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }

  .show-all-agent {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      span {
        font-weight: bolder;
      }
    }
  }

  .loading-Calc-Date {
    * {
      pointer-events: none !important;
    }
  }
}
</style>