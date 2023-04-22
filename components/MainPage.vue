<script setup lang="ts">
import {useMainStore} from '~/store/store'
const mainStore = useMainStore();

const toggleModal = () => {
  mainStore.toggleShowModal();
}
</script>

<template>
  <div>    
    <div class="content-container">
      <div class="button-container text-container px-8 mt-6">
        <button 
          class="main-button focus:outline-none hover:bg-gb8515145 opacity-90 font-bold py-2 px-4 rounded"
          @click="toggleModal()"
        >
        Upload Files 
      </button> 
        <!-- <h1 class="text-xl font-bold px-12 my-10">
         About
        </h1> -->
      </div>
      <div class="image-container">
        <img src="./../extra/circuit.jpg" alt="Circuit" class="image">
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  display: flex;
  height: 100vh;
}

.text-container {
  width: 50%;
}

.text {
  font-size: 1.25rem;
  font-weight: 400;
  margin-left: 3rem;
  line-height: 2rem;
}

.image-container {
  width: 50%;
}

.image {
  object-fit: cover;
  height: 75%;
  margin: auto; 
}

.main-button{
    border: solid 3px rgb(85 15 145 / 100%);
    color: rgb(85 15 145 / 100%);
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(0, -250%);
    border-radius: 10px;
  }

  .main-button:hover{
    transition-duration: 100ms;
    background-color: rgb(170 48 209 / 100%);
    color: #fff;
    border-color: #fff;
  }
</style>