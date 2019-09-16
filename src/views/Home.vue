<template>
  <div class="home">
    <img src="../assets/logo.png">
    <KomponenBaru/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import KomponenBaru from '@/components/Coba.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    KomponenBaru
  }
}
</script>
