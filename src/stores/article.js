import { ref } from 'vue'
import { defineStore } from 'pinia'

const useArticleStore = defineStore('article', () => {
  const articles = ref([
    {
      image: '',
      title: 'Test Article',
      link: '',
      date: '',
      content: 'This is a test content',
      status: 'Published',
      writer: 1,
      editor: 0,
      company: 1,
    }
  ])
  

  return { articles }
})

export default useArticleStore
