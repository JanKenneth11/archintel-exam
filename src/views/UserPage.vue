<template>
  <base-layout>
    <div class="card mt-3">
      <div class="card-title d-flex justify-content-between align-items-center p-3">
        <h3 class="m-0">Users</h3>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#UserForm">
          Add new user
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
                <td>{{ item.first_name }}</td>
                <td>{{ item.last_name }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.status ? 'Active' : 'Inactive' }}</td>
                <td>
                  <button 
                    class="btn btn-warning" 
                    @click="edit(item, index)" 
                    data-bs-toggle="modal" 
                    data-bs-target="#UserForm"
                  >
                    <i class="bi bi-pencil-fill"></i>
                  </button>
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
    
    <user-form :formFields="selectedItem" @save="save"></user-form>
  </base-layout>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import UserForm from '@/components/forms/UserForm.vue'
import { storeToRefs } from 'pinia'
import useUserStore from '@/stores/user'
const userStore = useUserStore()
const { getUsers } = storeToRefs(userStore)
const headers = ref([
  'First Name',
  'Last Name',
  'Type',
  'Active',
  'Actions'
])
const items = ref ([])
const selectedItem = ref({})
const edit = (item) => {
  selectedItem.value = item
}
onMounted(() => {
  items.value = getUsers.value
})

const save = (payload) => {
  const { first_name, last_name, type, status } = payload
  if(payload.id) {
    const updatedUser = {
      id: payload.id,
      first_name,
      last_name,
      type,
      status
    }
    userStore.update(updatedUser)
  } else {
    const newUser = {
      first_name,
      last_name,
      type,
      status
    }
    userStore.save(newUser)
  }
  console.log(payload)
  console.log(userStore.users)
  items.value = getUsers.value
  selectedItem.value = {}
}
</script>