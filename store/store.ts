import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('main',  () => {
  const showModal = ref<boolean>(false);
  // const defFile = ref(null);
  // const lefFile = ref(null);
  const defLefFiles = ref({defData: null, lefData: null});

  function toggleShowModal() {
    showModal.value = !showModal.value;
  }

  function saveFileToStore(file:any, type:string) {
    if (type === 'def-file') {
      defLefFiles.value.defData = file;
    }
    if (type === 'lef-file') {
      defLefFiles.value.lefData = file;
    }
  }

  return {
    defLefFiles,
    showModal,
    toggleShowModal,
    saveFileToStore,
  }
})