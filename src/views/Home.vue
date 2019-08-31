<template>
  <div class="home">
    <img alt="Step logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Step"/>
  </div>
</template>

<style>
.home.page {
  text-align: center;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
