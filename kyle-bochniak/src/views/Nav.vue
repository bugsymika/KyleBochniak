<template>
  <div id="container">
    <router-link to="about">
      <div class="flex" id="about">
        <p>ABOUT</p>
      </div>
    </router-link>

    <router-link to="gallery">
      <div class="flex" id="gallery">
        <p>GALLERY</p>
      </div>
    </router-link>

    <router-link to="contact">
      <div class="flex" id="contact">
        <p>CONTACT</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Nav.vue"
};
</script>

<style scoped>
#container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.flex {
  width: 100vw;
  height: 33.333vh;
  background-position: center;
  background-size: cover;
  font-family: "Open Sans", sans-serif;
  color: white;
  text-shadow: 1px 1px black;
  filter: grayscale(100%);
  font-size: 4rem;
}

.flex:hover {
  filter: grayscale(0%);
  color: rgb(240, 56, 32);
}

#about {
  background-image: url("https://i.imgur.com/H1JSij0.jpg");
  border: 1vw solid black;
  border-right: none;
  background-position: top;
}

#gallery {
  background-image: url("https://i.imgur.com/SQGnkXl.jpg");
  border: 1vw solid black;
  border-right: none;
  background-position-y: 10%;
}

#contact {
  background-image: url("https://i.imgur.com/3IMJOxo.jpg");
  border: 1vw solid black;
}

p {
  padding-top: 0%;
}

a {
  text-emphasis: none;
  text-decoration: none;
}

@media (min-width: 1025px) {
  #container {
    flex-direction: row;
  }
  .flex {
    width: 32vw;
    height: 96vh;
    font-size: 7.5rem;
  }

  p {
    padding-top: 50%;
  }

  #about {
    background-position: center;
  }

  #gallery {
    background-position: unset;
  }
}
</style>