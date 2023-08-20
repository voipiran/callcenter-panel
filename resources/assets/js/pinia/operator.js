import { defineStore } from 'pinia'

export const useOperator = defineStore('operator', {
  state: () => ({
    details: null,
    pause: [],
    agent: [],
    disposition: [],
    report: []
  }),

})