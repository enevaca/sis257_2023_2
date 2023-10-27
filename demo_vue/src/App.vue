<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@/assets/js/jquery.min.js'
import '@/assets/js/bootstrap.min.js'
import '@/assets/js/jquery.sticky.js'
import '@/assets/js/click-scroll.js'
import '@/assets/js/custom.js'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <main>
    <MainHeader />
    <RouterView />
  </main>
  <MainFooter />
</template>

<style>
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/bootstrap-icons.css';
@import '@/assets/css/templatemo-festava-live.css';
</style>
