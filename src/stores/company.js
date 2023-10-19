import { ref } from 'vue'
import { defineStore } from 'pinia'

const useCompanyStore = defineStore('company', () => {
  const companies = ref([
    {
      id: '',
      logo: 'https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg',
      name: 'Test Company',
      status: true // true if published otherwise is for edit
    }
  ])


  return { companies }
})

export default useCompanyStore
