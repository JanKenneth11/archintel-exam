<template>
  <div class="modal fade" id="UserForm" tabindex="-1" aria-labelledby="title" aria-hidden="true" data-bs-backdrop="static" >
    <div class="modal-dialog">
      <form @submit.prevent="save">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="title">{{temp.id ? 'Edit' : 'Add new' }} User</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input 
              v-model="temp.first_name" 
              type="text" 
              class="form-control" 
              id="firstName"
              required
            >
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input 
              v-model="temp.last_name" 
              type="text" 
              class="form-control" 
              id="lastName"
              required
            >
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">Select type</label>
            <select 
              v-model="temp.type" 
              id="type" 
              class="form-select" 
              aria-label="Type Selection"
              required
            >
              <option value="Editor">Editor</option>
              <option value="Writer">Writer</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="status" class="form-label">Select status</label>
            <select 
              v-model="temp.status" 
              id="status" 
              class="form-select" 
              aria-label="Status Selection"
              required
            >
              <option :value="true">Active</option>
              <option :value="false">Inactive</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close">Close</button>
          <button type="submit" class="btn btn-primary"  :data-bs-dismiss="validForm ? 'modal' : ''">{{temp.id ? 'Update' : 'Save' }} changes</button>
        </div>
      </div>
    </form>

    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  formFields: {
    type: Object,
    default: {
      id: null,
      first_name: '',
      last_name: '',
      type: '',
      status: false
    }
  }
})
const emit = defineEmits(['save','close'])
const temp = ref({})
const validForm = ref(false)
watch(() => props.formFields, (newValue) => {
  temp.value = JSON.parse(JSON.stringify(newValue))
})
const close = () => {
  temp.value = {}
}
const save = async () => {
  validForm.value = true
  emit('save', temp.value)
  temp.value = {}
}
</script>