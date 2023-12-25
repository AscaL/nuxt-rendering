<script lang="ts" setup>
const links = [
  {
    name: 'GitHub',
    icon: 'i-carbon-logo-github',
    link: 'https://github.com/ascal/',
  },
  // ...
]

const year = new Date().getFullYear()
</script>

<template>
  <div>
    <footer>
      <small> &copy; 2019-{{ year }} Emanuele Orfanelli. Server Comp </small>
      <ul>
        <li v-for="{ link, name, icon } in links" :key="link">
          <a class="h-4 w-4" :href="link" rel="me">
            <div :class="icon" alt="" />
            <span class="sr-only">
              {{ name }}
            </span>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>
