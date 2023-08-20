import { defineStore } from 'pinia'

export const useDistribution = defineStore('distribution', {
  state: () => ({
    details: null,
    waitByDate: null,
    waitByTime: null,
    chartAnswered: null,
    chartTimeAnswered: null,
    chartDelayAnswered: null,
    answeredInWeek: null,
    chartAnsweredWeek: null,
    chartTimeAnsweredWeek: null,
    answeredInMonth: null,

  })
})