<template>
  <base-layout>
    <div class="card mt-3">
      <div class="card-title d-flex justify-content-between align-items-center p-2">
        <h3 class="m-0">Companies</h3>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#CompanyForm">
          Add new company
        </button>
      </div>
      <div class="card-text table-responsive">
        <table class="table table-striped table-hover m-0">
          <thead>
            <tr>
              <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="items.length > 0">
              <tr v-for="(item, index) in items" :key="index">
                <td>
                  <img 
                    :src="item.logo" 
                    class="rounded img-fluid img-thumbnail" 
                    :alt="item.name"
                    style="width: 25%; max-width: 200px;"
                  >
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.status ? 'Active' : 'Inactive' }}</td>
                <td>
                  <button class="btn btn-warning"><i class="bi bi-pencil-fill"></i></button>
                </td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td :colspan="headers.length" class="text-center">
                  <i class="bi bi-exclamation-triangle-fill" style="font-size: 3.75rem;"></i>
                  <p>No Data Available</p>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <company-form></company-form>
  </base-layout>
  </template>
<script setup>
import { ref, onMounted } from 'vue'
import CompanyForm from '@/components/forms/CompanyForm.vue'
import useCompanyStore from '@/stores/company'

const companyStore = useCompanyStore()
const headers = ref([
'Logo',
'Name',
'Status',
'Actions'
])
const items = ref ([])
onMounted(() => {
  items.value = companyStore.companies
})
</script>