<template>
  <div class="bg-gray-200 pt-12 foot">
    <div class="container mx-auto px-4  mb-4">
      <div class="flex flex-col md:flex-row justify-center">
        <div>
          <h3 class="copyright-text">
            © 2022 def file visualizer. All rights reserved.
          </h3>
        </div>

        <router-link to="About" class="text-white text mx-2 text mb-1 center md:mx-4 lg:text lg:mx-6"> About </router-link>              
      </div>   

    </div>               
  </div>         
</template>

<script setup lang="ts">

</script>

<style scoped lang="css"> 
  .bg-wine{ 
      background: linear-gradient(90deg, rgb(85 15 145 / 100%) 0%, rgb(170 48 209 / 100%) 74%, rgb(152 150 187 / 100%) 100%);
      height: 40px;
      border: none;        
  }  

  .copyright-text{
    margin-top: 0.15rem;
    color: #fff;
    font-size: 1rem;
  }

  .foot{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: linear-gradient(90deg, rgb(85 15 145 / 100%) 0%, rgb(170 48 209 / 100%) 74%, rgb(152 150 187 / 100%) 100%);
    z-index: 10;
    
    /* border-top: solid 50px rgb(85 15 145 / 100%); */
  }
</style >