<script setup>
import { storeToRefs } from 'pinia';
  import { useMainStore } from '~/store/store'
  
  const mainStore = useMainStore();
  const { defLefFiles } = storeToRefs(mainStore); 
  console.log(defLefFiles.value)
</script>

<template>
  <div>
    <HeaderComponent/>
    <FooterComponent/>
    <h1 class="text-xl font-bold px-10 my-10">
      CANVAS
    </h1>
    <div  v-if="defLefFiles.defData === null" class="ml-12">
      EMPTY
    </div>
    <template v-else>
      <CanvasComponent/>
    </template>
  </div>
</template>

<style scoped>
.text{
  width: 50vw;
}
</style>

