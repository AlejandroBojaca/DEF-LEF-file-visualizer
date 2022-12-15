import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('main',  () => {
  const showModal = ref<boolean>(false);
 
  function toggleShowModal() {
    showModal.value = !showModal.value;
  }

  return {
    toggleShowModal,
    showModal,
  }
})