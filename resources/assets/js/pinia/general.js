import { defineStore } from 'pinia'

export const useGeneral = defineStore('general', {
  state: () => ({
    route: '/'
  })
})