<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {useMainStore} from '~/store/store'
// import HeaderComponent from '~/components/HeaderComponent.vue';
// import FooterComponent from '~/components/FooterComponent.vue'
// import ModalComponent from '~/components/ModalComponent.vue'
// import MainButton from '~/components/MainButton.vue'

const mainStore = useMainStore();
const { showModal } = storeToRefs(mainStore); 
</script>

<template>
  <div class="main">
    <CanvasComponent/>
    <!-- <HeaderComponent/>
    <FooterComponent/>
    <transition name="fade"> 
      <template v-if="showModal">
          <ModalComponent/>
      </template>
      <template v-else>
        <MainButton/>
      </template>
  </transition> -->

  </div>
</template>

<style scoped>
#main {
  height: 100vh;
}

.fade-enter-active, .fade-leave-active {  
  transition: opacity 0.35s ease;  
}   

.fade-enter, .fade-leave-to {  
  opacity: 0;  
}

/*
#main-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 4rem;
}

.scrollable {
  overflow-y: scroll;
  border: 1px solid transparent;
  height: 750px;
}

.title {
  font-size: 3rem;
  color: forestgreen;
} */

</style>
