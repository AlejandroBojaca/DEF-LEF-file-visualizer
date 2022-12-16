<script setup lang="ts">
import {useMainStore} from '~/store/store'
import { readFile } from '~/composables';
const mainStore = useMainStore();

const onSubmit = () => {
  mainStore.toggleShowModal();
}

const readFiles = (e) =>{
  const file = e.target.files[0]
  const fileRead = readFile(file);

  if (fileRead){
    saveFileToStore(file);
  }
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center w-screen h-screen fixed top-0 left-0 bg-black opacity-75">
      <div  class="modal-container">
        <div class="main-text mb-4 pb-2">
          <h1 class="text-white text-2xl font-bold ">Select Your File Type</h1>
        </div>
        <div class="flex flex-row space-x-8 w-24">
          <input @change="readFiles" type="file" name="file" id="def-file" class="inputfile" />
          <label for="def-file" id="left-button" class="button py-2 px-4 mt-4" >DEF file</label>
          <input type="file" name="file" id="lef-file" class="inputfile" />
          <label for="lef-file" class="button py-2 px-4 mt-4">LEF file</label>  
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

  #left-button{
    margin-left: 0;
  }

  button:hover {
    transition-duration: 100ms;
    background-color: #D3D3D3;
    color: black;
    border: 1px solid black;
  }
  
  .modal-container{
    box-shadow: 0 0 8px 0 rgb(100 100 100 / 40%);
    padding: 25px;
    border-radius: 15px;
  }

  .inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

.inputfile + label {
  color: white;
  display: inline-block;
}

.inputfile:focus + label,
.inputfile + label:hover {
  cursor: pointer;
  transition-duration: 100ms;
  background-color: #D3D3D3;
  color: black;
  border: 1px solid black;
}
  

</style>