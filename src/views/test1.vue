<template>
  <div>
      <h1 style="color:red">test1</h1>
      <button @click=goback>点我返回</button>
      <div class="t1Wrapper"></div>
  </div>
</template>

<script>
export default {
    methods:{
    goback:function(){
        this.$router.push('/')

    }
}

}


</script>

<style>
    .t1Wrapper{
        width: 100px;
        height: 100px;
        background-image: linear-gradient(to left top, #da45a8, transparent);
        background-size: 20px 20px;
    }
</style>