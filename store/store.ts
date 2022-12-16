import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('main',  () => {
  const showModal = ref<boolean>(false);
  const defFile = ref(null);
  const lefFile = ref(null);

  function toggleShowModal() {
    showModal.value = !showModal.value;
  }

  function saveFileToStore(file:any, type:string) {
    if (type === 'def-file'){
      defFile.value = file;
    }
    if (type === 'lef-file'){
      lefFile.value = file;
    }
  }

  return {
    defFile,
    lefFile,
    showModal,
    toggleShowModal,
    saveFileToStore,
  }
})