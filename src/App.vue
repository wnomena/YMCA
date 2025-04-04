<script setup lang="ts">
import { computed } from 'vue';
</script>

<template>
  <RouterView />
</template>

<style scoped>
  RouterView {
    overflow-x: hidden;
  }
  header.light {
    background-color: white;
  }
  header.dark {
    background-color: black;
  }
  .row .col-3 {
    overflow: hidden;
    border-radius: 10px;
  }
  .row .col-3 option:nth-child(1) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .row .col-3 option:nth-child(2) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
</style>
