<template>
  <div>
    Static
    <div v-if="pending">Loading</div>
    <div v-else>
      <br>
      {{ data.date }}
      <br>
      {{ data.dateTime }}
    </div>
  </div>
</template>

<script setup lang="ts">

const { data, pending } = await useFetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam')
</script>