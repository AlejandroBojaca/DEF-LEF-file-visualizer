<script setup lang="ts">
import HeaderComponent from '~/components/HeaderComponent.vue';
import FooterComponent from '~/components/FooterComponent.vue'
</script>

<template>
  <div class="main">
    <HeaderComponent/>
    <FooterComponent/>
    <ModalComponent/>
  </div>
</template>

<style scoped>
.body {
  background: rgb(121 91 131) 74%;;
}

#main {
  height: 100vh;
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
