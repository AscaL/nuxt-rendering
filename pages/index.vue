<script setup lang="ts">
const { data, pending } = await useFetch('https://worldtimeapi.org/api/ip')

// const { time } = await $fetch('/api/getTime')
// console.log(`🚀 ~ time`, time)
</script>

<template>
  <div>
    <h3>Index - Static</h3>
    <div v-if="pending">
      Loading
    </div>
    <div v-else>
      {{ useDateFormat(data.datetime, 'YYYY-MM-DD HH:mm:ss') }}
    </div>
  </div>
</template>
