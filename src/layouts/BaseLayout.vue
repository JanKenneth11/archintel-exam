<template>
  <app-header></app-header>
  <app-content>
    <slot/>
  </app-content>
</template>

<script setup>
import AppContent from '@/components/AppContent.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>