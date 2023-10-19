<template>
  <div id="loginForm" class="border">
    <h3 class="text-center">Archintel Exam</h3>
    <form method="post" @submit.prevent="login">
      <div class="input-group flex-nowrap mb-3">
        <span 
          id="addon-wrapping" 
          class="input-group-text">
            <i class="bi bi-person"></i>
          </span>
        <input
          v-model="firstName"
          id="username" 
          class="form-control" 
          type="text" 
          placeholder="Enter Username"
          >
      </div>
      <div class="input-group flex-nowrap mb-3">
        <span 
          id="addon-wrapping" 
          class="input-group-text">
          <i class="bi bi-key"></i>
        </span>
        <input 
          v-model="lastName"
          id="password" 
          class="form-control" 
          type="password" 
          placeholder="Enter Password"
        >
      </div>
      <div class="input-group mb-3 has-validation" v-show="validation.length">
        <div class="form-floating is-invalid"></div>
        <div class="invalid-feedback">
          {{ validation }}
        </div>
      </div>
      <button 
        class="btn btn-primary" 
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/stores/user'
const router = useRouter()
const userStore = useUserStore()
const firstName = ref('')
const lastName = ref('')
const validation = ref('')

watch([firstName, lastName], ([newFirstName, newLastName]) => {
  if(newFirstName || newLastName) {
    validation.value = ''
  }
})
const login = () => {
  const payload = {
    first_name: firstName.value,
    last_name: lastName.value
  }

  if(userStore.login(payload)) {
    router.push('/dashboard');
  } else {
    validation.value = 'Username or Password does not match'
  }
}
</script>
<style scoped>
#loginForm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  background-color: #f8f8f8;
  border-radius: 0.625rem;
  padding: 1.875rem 0.9375rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

@media (max-width: 991.98px) {
  #loginForm {
    width: 100%;
    margin: 0 15px;
  }
}
</style>