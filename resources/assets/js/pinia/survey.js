import { defineStore } from 'pinia'

export const useSurvey = defineStore('survey', {
  state: () => ({
    queuesSelected: [],
    agentsSelected: [],
    allQueues: [],
    allAgents: [],

    timeFilter: null,
    fromFilter: null,
    key: 0,


  }),
})