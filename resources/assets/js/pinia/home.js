import { defineStore } from 'pinia'

export const useHome = defineStore('home', {
  state: () => ({
    queues: [],
    agents: [],
    queuesAvailable: [],
    agentsAvailable: [],
    
    showAllAgent: false,

    timeFilter: null,

    toTime: null,
    fromTime: null,

    toFilter: null,
    fromFilter: null,
    toFilterFaLable: null,
    fromFilterFaLable: null,

  }),
  getters: {
  },
  actions: {

  },
})