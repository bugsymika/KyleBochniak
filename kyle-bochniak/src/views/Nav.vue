<template>
  <div id="container">
    <router-link to="about">
      <div class="flex" id="about" v-bind:class="{ hide: isHide }">
        <div class="bottom">
          <p>ABOUT</p>
        </div>
      </div>
    </router-link>

    <router-link to="gallery">
      <div class="flex" id="gallery" v-bind:class="{ hide: isHide }">
        <div class="bottom">
          <p>GALLERY</p>
        </div>
      </div>
    </router-link>

    <router-link to="contact">
      <div class="flex" id="contact" v-bind:class="{ hide: isHide }">
        <div class="bottom">
          <p>CONTACT</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Nav.vue",
  data() {
    return {
      isHide: true
    };
  },

  mounted() {
    setTimeout(() => {
      this.isHide = !this.isHide;
    }, 200);
  }
};
</script>

<style scoped>
.hide {
  display: none;
}
#container {
  height: 91vh;
  width: 100vw;
  overflow: hidden;
  display: inline-block;
}

.flex {
  width: 98vw;
  height: 28vh;
  background-position: center;
  background-size: cover;
  /* font-family: "Open Sans", sans-serif; */
  font-family: "Spectral", serif;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px black;
  filter: grayscale(100%);
  font-size: 10vw;
  float: left;
  margin-top: 1vh;
  font-weight: 900;
}
.bottom {
  margin-top: 32%;
}
#about {
  background-image: url("~@/assets/bochniakIBJJF.jpg");
  border-top: 1vh solid black;
  border-left: 1vw solid black;
  border-right: 1vw solid black;
  background-position: top;
}

#gallery {
  background-image: url("~@/assets/kyleCele.jpg");
  border-left: 1vw solid black;
  border-right: 1vw solid black;
  border-top: 1vh solid black;
  background-position-y: 10%;
}

#contact {
  background-image: url("~@/assets/bochniakCuts.jpg");
  border-left: 1vw solid black;
  border-right: 1vw solid black;
  border-top: 1vh solid black;
  border-bottom: 1vh solid black;
}

p {
  padding: 4px;
  border: 2px solid whitesmoke;
  height: fit-content;
  border-radius: 5px;
  width: fit-content;
  font-size: 1rem;
  text-align: center;
  margin: auto;
  background-color: black;
}

a {
  text-emphasis: none;
  text-decoration: none;
}

@media (min-width: 321px) {
  .bottom {
    margin-top: 32%;
  }
}

@media (min-width: 768px) {
  #contact {
    background-position-y: 20%;
  }
}

@media (min-width: 1025px) {
  #container {
    flex-direction: row;
    overflow: hidden;
    height: 100vh;
  }
  .flex {
    width: 32vw;
    height: 96vh;
    font-size: 6vw;
    box-sizing: content-box;
    margin-top: 0px;
  }

  #about {
    background-position: center;
    border-right: none;
    border-bottom: 1vw solid black;
    border-top: 1vw solid black;
  }

  #gallery {
    background-position: unset;
    border-right: none;
    border-bottom: 1vw solid black;
    border-top: 1vw solid black;
  }

  #contact {
    border-top: 1vw solid black;
  }
  .flex:hover {
    filter: grayscale(0%);
    color: rgb(240, 56, 32);
  }

  p {
    font-size: 2.5rem;
    padding: 6px;
    text-shadow: 4px 4px black;
  }

  .bottom {
    margin-top: 100%;
    padding-top: 10vh;
  }
}
</style>