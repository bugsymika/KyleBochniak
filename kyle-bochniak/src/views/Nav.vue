<template>
  <div id="container">
    <router-link to="about">
      <div class="flex" id="about" v-bind:class="{ hide: isHide }">
        <p>ABOUT</p>
      </div>
    </router-link>

    <router-link to="gallery">
      <div class="flex" id="gallery" v-bind:class="{ hide: isHide }">
        <p>GALLERY</p>
      </div>
    </router-link>

    <router-link to="contact">
      <div class="flex" id="contact" v-bind:class="{ hide: isHide }">
        <p>CONTACT</p>
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
    this.isHide = !this.isHide;
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
  font-family: "Open Sans", sans-serif;
  color: white;
  text-shadow: 1px 1px black;
  filter: grayscale(100%);
  font-size: 4rem;
  float: left;
  margin-top: 1vh;
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
  padding: 0px;
  margin-top: 25%;
}

a {
  text-emphasis: none;
  text-decoration: none;
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
    font-size: 7.5rem;
    color: white;
    box-sizing: content-box;
    margin-top: 0px;
  }

  p {
    padding-top: 50%;
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
}
</style>