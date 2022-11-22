<template>
  <div>
    SSR
    <div v-if="pending">Loading</div>
    <div v-else>
      <br>
      <!-- {{ time }} -->
      <br>
      {{ data.datetime }}
    </div>
  </div>
</template>

<script setup lang="ts">
// const { time } = await $fetch('/api/getTime')
// console.log(`🚀 ~ time`, time)
const { data, pending } = await useFetch('https://worldtimeapi.org/api/ip')
console.log(`🚀 ~ data`, data)
</script>