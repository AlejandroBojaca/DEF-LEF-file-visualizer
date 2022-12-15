<script setup lang="ts">
import {useMainStore} from '~/store/store'
const mainStore = useMainStore();

const toggleModal = () => {
  mainStore.toggleShowModal();
}
</script>

<template>
  <button 
    class="main-button focus:outline-none hover:bg-gb8515145 opacity-90 font-bold py-2 px-4 rounded"
    @click="toggleModal()"
  >
    Upload Files 
  </button>  
</template>  

<style scoped>
.main-button{
    border: solid 3px rgb(85 15 145 / 100%);
    color: rgb(85 15 145 / 100%);
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -100%);
    
    /* border-top: solid 50px rgb(85 15 145 / 100%); */
  }

</style>