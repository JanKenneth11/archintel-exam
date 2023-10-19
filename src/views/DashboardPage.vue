<template>
    <base-layout>
      <div class="card mb-3 mt-3">
        <div class="card-body">
          <div class="card-title">
            <h1>For Edit</h1>
          </div>
          <div class="card-text">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="items.length > 0">
                  <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item.image }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.link }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.writer }}</td>
                    <td>{{ item.editor }}</td>
                    <td>{{ item.actions }}</td>
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
      </div>
      <div class="card">
        <div class="card-body">
          <div class="card-title">
            <h1>Published</h1>
          </div>
          <div class="card-text">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="items.length > 0">
                  <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item.image }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.link }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.writer }}</td>
                    <td>{{ item.editor }}</td>
                    <td>{{ item.actions }}</td>
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
      </div>
    </base-layout>
</template>
<script setup>
import { ref } from 'vue'
const headers = ref([
  'image',
  'title',
  'link',
  'date',
  'writer name',
  'editor name',
  'actions',
])
const items = ref([])
</script>