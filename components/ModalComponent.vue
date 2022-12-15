<script setup lang="ts">
import {useMainStore} from '~/store/store'
const mainStore = useMainStore();

const onSubmit = () => {
  mainStore.toggleShowModal();
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center w-screen h-screen fixed top-0 left-0 bg-black opacity-75">
      <div  class="modal-container">
        <div class="main-text mb-8 pb-4">
          <h1 class="text-white text-2xl font-bold ">Select Your File Type</h1>
        </div>
  
        <div class="mt-4 flex flex-row space-x-8 w-24">
          <button type="submit" class="text-white button py-2 px-4">DEF file</button>
          <button type="submit" class="text-white button py-2 px-4">LEF file</button>  
        </div>
  
       <button
        @click="onSubmit()" 
        type="submit"  
        class="text-white button py-2 px-4 mt-4">Submit</button>  
      </div>

    </div>
  </div>
</template>

<style scoped lang="css"> 
  .main-text{
    border-bottom: solid 1px white;

    /* margin-bottom: 20px;
    padding-bottom: 10px; */
  }

  .button{
    min-width: max-content;
    border: solid 1px white;
    border-radius: 10px;
  }

  button:hover {
    transition-duration: 100ms;
    background-color: #D3D3D3;
  }
  
  .modal-container{
    box-shadow: 0 0 8px 0 rgb(100 100 100 / 40%);
    padding: 25px;
    border-radius: 15px;
  }
  

</style>