<script setup lang="ts">

</script>

<template>
  <div>
    <header>
      <ul>
        <li>
          <NuxtLink to="/">
            index - full static
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/swr">
            swr - cached + new
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/ssr">
            ssr - client side
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/static">
            static - full static
          </NuxtLink>
        </li>
      </ul>
    </header>
    <main>
      <slot />
    </main>
    <br>
    <br>
    <slot name="footer">
      <TheFooter />
    </slot>
    <slot name="footer2">
      <TheFooterC />
    </slot>
  </div>
</template>
