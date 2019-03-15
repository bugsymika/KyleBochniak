<template>
  <div id="container" :style="{ backgroundImage: 'url(' + background + ')' }">
    <!-- <h1>Kyle
      <br class="mobileBreak">
      <span class="red">"CRASH"</span>
      <br class="mobileBreak">Bochniak
      <br>
      <span class="red">UFC Featherweight</span>
    </h1>-->
    <div id="center">
      <router-link to="/nav">
        <div
          v-on:mouseover="switchBackground"
          v-on:mouseout="switchBackground"
          class="letsGo"
        >LET'S GO >></div>
      </router-link>
    </div>
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
#center {
  padding-top: 75%;
}
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
  border-radius: 5px;
  text-align: center;
  margin-left: 20%;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  background-color: black;
}

@media (min-width: 1024px) {
  #center {
    padding-top: 25%;
  }

  .mobileBreak {
    display: none;
  }
  .letsGo {
    width: 10vw;
    border: 4px solid whitesmoke;
    height: fit-content;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5rem;
    margin-left: 41%;
  }

  h2:hover {
    color: rgb(240, 56, 32);
    text-shadow: 2px 2px #000000;
    cursor: pointer;
  }
  .letsGo:hover {
    border-color: black;
    color: black;
    background-color: white;
  }
}

a {
  text-decoration: none;
  color: white;
}
</style>

