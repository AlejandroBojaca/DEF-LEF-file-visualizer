<template>
  <div>
    <HeaderComponent/>
    <FooterComponent/>
    
    <div class="content-container">
      <div class="text-container px-8 mt-6">
        <h1 class="text-xl font-bold px-12 my-10">
         About
        </h1>
        <h2 class="text">
          This project aims to create a tool for visualizing DEF files online. This tool will allow users to easily view and analyze data from DEF files, allowing them to make informed decisions about their data needs. The goal of this project is to provide a platform that enables users to quickly and efficiently understand the data in their DEF files and use it to improve the quality of their products. We believe that by creating an easy-to-use graphical interface for visualizing DEF files, users will be able to save time, reduce costs, and empower better decision making based on their knowledge about the data.
        </h2>
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
</style>