import { defineStore } from 'pinia'

export const useUnAnswered = defineStore('unAnswered', {
  state: () => ({
    hangUp: [],
    details: null,
    queueUnAnswered: [],
    unAnsweredCallsDetail: null
  })
})