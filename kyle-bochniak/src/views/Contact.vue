<template>
  <div id="container">
    <div id="background">
      <div class="spacer"/>
      <header>
        <router-link to="nav">
          <i class="icono-leftArrow"/>
        </router-link>
        <h1>Contact</h1>
        <div id="cuts">
          <a target="_blank" class="link" href="https://www.facebook.com/kylekillerbeebochniak/">
            <div class="cut">
              <i class="icono-facebook"/>
            </div>
          </a>
          <a
            target="_blank"
            class="link"
            href="https://twitter.com/KyleBochniak?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            <div class="cut">
              <i class="icono-twitter"/>
            </div>
          </a>
          <a target="_blank" class="link" href="http://instagram.com/_u/kylebochniakufc">
            <div class="cut">
              <i class="icono-instagram"/>
            </div>
          </a>
        </div>
      </header>

      <div id="content">
        <h2>Interested in booking a private training session or making a sponsorship inquiry?
          <br>
          <br>
          <br>Email me at KyleBochniak@gmail.com
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
#container {
  height: 100vh;
  width: 100vw;
  background-image: url("https://i.imgur.com/KpKe5cN.jpg");
  background-position-x: 35%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: hidden;
}

#background {
  background-color: rgba(0, 0, 0, 0.651);
  background-size: cover;
  height: 100%;
  width: 100%;
}

header {
  background-image: url("https://i.imgur.com/QTQ7PL4.png");
  display: flex;
  height: 10vh;
  overflow: hidden;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  background-size: 100%;
}

h1 {
  font-family: "Open Sans", sans-serif;
  color: white;
  text-align: left;
  padding: 10px;
  font-size: 2rem;
  margin: 0px;
}

h2 {
  font-family: "Gentium Basic", serif;
  color: white;
  text-shadow: 2px 2px black;
  font-size: 1.7rem;
}

#cuts {
  margin-left: auto;
  width: 40%;
  color: white;
  display: flex;
}

.cut {
  height: 120px;
  width: 45px;
  background-color: rgb(255, 255, 255);
  transform: skew(45deg);
  box-sizing: border-box;
  border: 8px solid black;
  border-top: none;
  border-bottom: none;
}

.spacer {
  height: 5vh;
}

a {
  text-decoration: none;
}

.link {
  margin-left: 10%;
}

.cut i {
  color: black;
  margin-top: 50%;
  transform: skew(-45deg);
  zoom: 0.7;
}

@media (min-width: 321px) {
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }
}

@media (min-width: 768px) {
  h1 {
    font-size: 4rem;
  }
  header {
    height: 11vh;
  }
}

@media (min-width: 1025px) {
  #container {
    background-position: center;
  }

  h2 {
    font-size: 4em;
  }

  .cut {
    width: 60px;
  }

  .cut:hover {
    background-color: rgb(240, 56, 32);
  }
}
</style>