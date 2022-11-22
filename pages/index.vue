<template>
  <div>
    <!-- {{ time }} -->
    <ul>
      <li>
        <NuxtLink to="/swr">swr - cached + new</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/ssr">ssr - client side</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/static">static - full static</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// const { time } = await $fetch('/api/getTime')
// console.log(`🚀 ~ time`, time)

</script>