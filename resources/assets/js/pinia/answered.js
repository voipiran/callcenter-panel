import { defineStore } from 'pinia'

export const useAnswered = defineStore('answered', {
  state: () => ({
    answered: [],
    details: [],
    service: [],
    queueAnswered: [],
    hangUp: [],
    answeredByCallLength: null,
    answeredTransfer: null,
    answeredCallsDetail: null
  })
})