<template>
  <div class="bg-wine flex items-center justify-between" >
    <div class="flex">
      <img src="~/static/logo.svg" class="logo"/>
      <router-link to="index" class="text-gray font-semibold p-4 "> Home </router-link>
    </div>

    <div>    
      <router-link to="About" class="text-gray font-semibold p-4 lg-px4"> About </router-link> 
    </div>  
  </div>  
</template >

 
<script lang="ts">

</script>

<style scoped lang="css"> 
  .bg-wine{ 
      background: linear-gradient(90deg, rgb(85 15 145 / 100%) 0%, rgb(170 48 209 / 100%) 74%, rgb(152 150 187 / 100%) 100%);
      height: 40px;
      border: none;        
  }  

  .logo{
    height: 40px;
    padding-left: 0.5rem;
  }

  .text-gray {     
      color : #fff;                 

  }  

  /* / Media query for typography on large screens; add padding around link/      */
  @media only screen and ( min-width : 768px ){         
  .lg-px4 {           
     padding : 0 8px;       
    }     
  }     

  .p-4 {
    padding: 0.5rem 1.5rem;
  }     

</style >