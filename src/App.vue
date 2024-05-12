<template>
  <div id="app">
    <HeaderNav />
  </div>
  <RouterView />
</template>
<script>
  import HeaderNav from './components/HeaderNav.vue'

  export default {
    components: {
      HeaderNav
    }
  }
</script>
