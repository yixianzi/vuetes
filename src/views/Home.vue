<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <About :abc="def"></About>
    <HelloWorld1 msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld1 from '@/components/HelloWorld.vue'
import About from '@/views/About.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld1,
    About
    
  },
  data(){
    return{
      def:["bbg","bbg","bbg"]
    }

  }
}
</script>
