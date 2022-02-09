<template>
  <div>
      <h1>bbz</h1>
      <div class="123">
          <router-link to="/test1">guo</router-link> |
          <router-link to="/test2">xiaogouer</router-link> 
      </div>
      <div class="lhy">
        <router-view/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .t1Wrapper{
        width: 100px;
        height: 100px;
        background-image: linear-gradient(to left top, #409eff, transparent);
        background-size: 20px 20px;
    }
</style>