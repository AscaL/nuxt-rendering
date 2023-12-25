<script setup lang="ts">
const { data, pending } = await useFetch('https://worldtimeapi.org/api/ip')
</script>

<template>
  <div>
    <h3>SSR False - Only client side</h3>
    <div v-if="pending">
      Loading
    </div>
    <div v-else>
      {{ useDateFormat(data.datetime, 'YYYY-MM-DD HH:mm:ss') }}
    </div>
  </div>
</template>
