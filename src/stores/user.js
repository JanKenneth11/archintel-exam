import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
const useUserStore = defineStore('user', () => {
  const user = ref({})
  const users = ref([
    {
      id: '85760295-9868-4459-b354-2affd29b267a',
      first_name: 'John',
      last_name: 'Doe',
      type: 'Writer',
      status: true // true if active otherwise inactive
    },
    {
      id: 'db047ff2-7634-4b46-989d-67b31f52d5bc',
      first_name: 'Jane',
      last_name: 'Doe',
      type: 'Editor',
      status: true
    }
  ])
  
  const login = (payload) => {
    const result = users.value.find(user => user.first_name === payload.first_name && user.last_name === payload.last_name)
    if (result) {
      user.value = result
      localStorage.setItem('user', user.value.id)
      return true
    } else {
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    user.value = {}
  }

  const getAuthUser = (permissions = []) => {
    if(localStorage.getItem('user')) {
      const result = users.value.at(localStorage.getItem('user'))
      user.value = result
      user.value.isPermitted = permissions.includes(user.value.type)
    }
  }
  
  const getUsers = computed(() => users.value.filter(u => u.id !== user.value.id))
  const save = (payload) => {
    payload.id = uuidv4()
    users.value.push(payload)
  }
  
  const update = (payload) => {
    const index = users.value.findIndex(u => u.id === payload.id)
    users.value[index] = { ...payload }
  }

  return {
    user, 
    users,
    login,
    logout,
    getAuthUser,
    getUsers,
    save,
    update
  }
})

export default useUserStore
