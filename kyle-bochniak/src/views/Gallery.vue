<template>
  <div id="container">
    <div class="spacer"/>
    <header>
      <router-link to="nav">
        <i class="icono-leftArrow"/>
      </router-link>
      <h1>Gallery</h1>
    </header>

    <div id="content">
      <h1>Kyle hasn't sent me the gallery images yet :(</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery"
};
</script>

<style scoped>
#container {
  min-height: 100vh;
  max-height: fit-content;
  width: 100vw;
  background-color: black;
}

header {
  background-image: url("~@/assets/headerBG.png");
  display: flex;
  height: 10vh;
  overflow: hidden;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  background-size: 100%;
  width: 100vw;
}

::-webkit-scrollbar {
  display: none;
}

#content {
  width: 96vw;
  height: 80vh;
  overflow: scroll;
  margin: auto;
}

h1 {
  font-family: "Open Sans", sans-serif;
  color: white;
  text-align: left;
  padding: 10px;
  font-size: 2rem;
  margin: 0px;
}

.spacer {
  height: 5vh;
}

a {
  text-decoration: none;
}

@media (min-width: 768px) {
  h1 {
    font-size: 4rem;
    padding: 6px;
  }
  header {
    height: 11vh;
  }
}

@media (min-width: 1025px) {
  h2 {
    font-size: 4em;
  }
}
</style>