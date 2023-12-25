<script setup lang="ts">
// const { time } = await $fetch('/api/getTime')
// console.log(`🚀 ~ time`, time)
const { data, pending } = await useFetch('https://worldtimeapi.org/api/ip')
</script>

<template>
  <div>
    <h3>Static - generated at build time</h3>
    <div v-if="pending">
      Loading
    </div>
    <div v-else>
      {{ useDateFormat(data.datetime, 'YYYY-MM-DD HH:mm:ss') }}
    </div>
  </div>
</template>
