import { defineStore } from 'pinia'

export const useUnAnswered = defineStore('unAnswered', {
  state: () => ({
    hangUp: [],
    details: null,
    queueUnAnswered: [],
    unAnsweredCallsDetail: null,
    waitByDate: null,
    chartDelayAnswered: null
  })
})