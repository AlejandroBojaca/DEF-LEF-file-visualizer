<script setup>
import { storeToRefs } from 'pinia';
  import { useMainStore } from '~/store/store'
  
  const mainStore = useMainStore();
  const { defLefFiles } = storeToRefs(mainStore); 
</script>

<template>
  <div>
    <HeaderComponent/>
    <FooterComponent/>
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

