<template>
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Archintel Examination</a>
          <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li 
                v-for="(item, index) in navItems" 
                :key="index"
                class="nav-item" 
                v-show="item.permission"
              >
              <router-link 
                class="nav-link" 
                :class="{active : route.path === item.route}" 
                aria-current="page"
                :to="item.route"
              >
                  {{ item.name }}
              </router-link>
              </li>
            </ul>
            <div class="d-flex">
              <button 
                @click="logout" 
                class="btn btn-primary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
</template>

<script setup>
import { useRoute, useRouter} from 'vue-router'
import { ref, onMounted } from 'vue'
import useUserStore from '@/stores/user'
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const navItems = ref([
  {
    route: '/dashboard',
    name: 'Dashboard',
    permission: ['Writer', 'Editor']
  },
  {
    route: '/all-media',
    name: 'All Media',
    permission: ['Writer', 'Editor']
  },
  {
    route: '/user',
    name: 'Users',
    permission: ['Editor']
  },
  {
    route: '/company',
    name: 'Companies',
    permission: ['Editor']
  },
])
onMounted(() => {
  navItems.value.filter(item => item.permission = item.permission.includes(userStore.user.type))
})
const logout = () => {
  userStore.logout()
  router.push('/')
}
</script>