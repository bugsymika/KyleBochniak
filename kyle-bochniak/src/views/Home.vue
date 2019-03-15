<template>
  <div id="container" :style="{ backgroundImage: 'url(' + background + ')' }">
    <h1>Kyle
      <br class="mobileBreak">
      <span class="red">"CRASH"</span>
      <br class="mobileBreak">Bochniak
      <br>
      <span class="red">UFC Featherweight</span>
    </h1>
    <router-link to="/nav">
      <div
        v-on:mouseover="switchBackground"
        v-on:mouseout="switchBackground"
        class="letsGo"
      >LET'S GO >></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      background: "https://i.imgur.com/mHBVj4l.jpg",
      backgroundBlur: "https://i.imgur.com/mHBVj4l.jpg",
      backgroundClear: "https://i.imgur.com/XGBMZSU.jpg"
    };
  },
  methods: {
    switchBackground: function() {
      if (this.background == "https://i.imgur.com/mHBVj4l.jpg") {
        this.background = this.backgroundClear;
      } else {
        this.background = this.backgroundBlur;
      }
    }
  }
};
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
  color: rgb(226, 255, 232);
  background-repeat: no-repeat;
  background-position-x: 48%;
  background-color: black;
  background-size: cover;
  transition: background 0.1s linear;
}

.red {
  color: rgb(240, 56, 32);
  font-weight: 800;
}

h1 {
  margin-top: 0px;
  padding-top: 50%;
  text-align: center;
  font-weight: 300;
  text-shadow: 2px 2px #000000;
  font-size: 2.9rem;
  font-family: "Spectral", serif;
  margin-bottom: 0px;
}

h2 {
  width: fit-content;
  margin: auto;
  font-family: "Spectral", serif;
  text-decoration: underline;
}

.letsGo {
  width: 50vw;
  border: 4px solid whitesmoke;
  height: fit-content;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  margin-left: 20%;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  margin-top: 20px;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 6em;
    padding-top: 20%;
    padding-right: 60px;
  }

  .mobileBreak {
    display: none;
  }
  .letsGo {
    width: 20vw;
    border: 4px solid whitesmoke;
    height: fit-content;
    padding: 10px;
    border-radius: 20px;
    font-size: 2rem;
    margin-left: 36%;
  }

  h2:hover {
    color: rgb(240, 56, 32);
    text-shadow: 2px 2px #000000;
    cursor: pointer;
  }
  .letsGo:hover {
    border-color: black;
    color: black;
  }
}

a {
  text-decoration: none;
  color: white;
}
</style>

