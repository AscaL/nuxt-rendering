<template>
  <div>
    <!-- {{ time }} -->
    <ul>
      <li>
        <a href="/swr">swr - cached + new</a>
      </li>
      <li>
        <a href="/ssr">ssr - client side</a>
      </li>
      <li>
        <a href="/static">static - full static</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// const { time } = await $fetch('/api/getTime')
// console.log(`🚀 ~ time`, time)

</script>