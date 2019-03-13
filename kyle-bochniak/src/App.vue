<template>
  <div id="app">
    <transition appear name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,
html {
  padding: 0px;
  height: 89.5vh;
  width: fit-content;
  margin: 0px;
  overflow: hidden;
}
/* router-view {
  height: 100%;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#app {
  width: 100vw;
  height: 90vh;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@media (min-width: 1025px) {
  #app {
    height: 100vh;
  }

  body,
  html {
    height: 100vh;
  }
}
</style>
