<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/faq">Faq</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <RouterView class="page" />
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
