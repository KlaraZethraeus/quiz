<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'HeaderNav',
    data() {
      return {
        title: 'mindskills'
      }
    }
  }
</script>
