<template>
  <div id="container">
    <div id="background">
      <div class="spacer"/>
      <header>
        <router-link to="nav">
          <i class="icono-leftArrow"/>
        </router-link>
        <h1>Contact</h1>
      </header>

      <div id="content">
        <div class="h2Box">
          <h2>Want to train with me?</h2>
        </div>
        <p>I offer private or group sessions in Boxing, Kickboxing, Brazilian Jiu-Jitsu, MMA and Strength & Conditioning
          <br>
          <br>$100 per hour / $60 per half hour
        </p>

        <div class="scheduleBox">
          <a
            target="_blank"
            href="https://squareup.com/appointments/book/9B5ZRK5M4DPXK/bochniak-martial-arts-fitness"
          >
            <h3>
              <i class="icono-calendar"/>
              Click here to schedule!
            </h3>
          </a>
        </div>

        <div class="h2Box">
          <h2>Have a business inquiry?</h2>
        </div>
        <p>Email me at KyleBochniak@gmail.com</p>
        <div class="h2Box">
          <h2>Follow me on social media:</h2>
        </div>
        <div class="icons">
          <a target="_blank" class="link" href="http://instagram.com/_u/kylebochniakufc">
            <i class="icono-instagram"/>
          </a>
          
          <a
            target="_blank"
            class="link"
            href="https://twitter.com/KyleBochniak?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            <i class="icono-twitter"/>
          </a>
          <a target="_blank" class="link" href="https://www.facebook.com/kylekillerbeebochniak/">
            <i class="icono-facebook"/>
          </a>
        </div>
        <div class="spacer"/>
        <div class="spacer"/>
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
::-webkit-scrollbar {
  display: none;
}

#container {
  height: 100vh;
  width: 100vw;
  background-image: url("~@/assets/contactBG.jpg");
  background-position-x: 35%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: scroll;
}

#content {
  width: 96vw;
  height: 80vh;
  overflow: scroll;
  margin: auto;
}

#background {
  background-color: rgba(0, 0, 0, 0.651);
  background-size: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

header {
  background-image: url("~@/assets/headerBG.png");
  display: flex;
  height: 10vh;
  overflow: hidden;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  background-size: 100%;
}

h1 {
  font-family: "Spectral", serif;
  color: white;
  text-align: left;
  padding: 10px;
  font-size: 2rem;
  margin: 0px;
}

h2 {
  font-family: "Spectral", serif;
  color: rgb(192, 42, 23);
  text-shadow: 2px 2px black;
  font-size: 1.5rem;
  margin-bottom: 0px;
}

h3 {
  color: white;
  margin: 0px;
  font-size: 1.2em;
  font-family: "Karla", sans-serif;
}

.spacer {
  height: 5vh;
}

a {
  text-decoration: none;
}

p {
  font-family: "Karla", sans-serif;
  font-size: 1.2rem;
  margin-top: 0px;
  color: white;
  padding: 4px;
  text-align: center;
  margin-bottom: 0px;
}

.scheduleBox {
  width: fit-content;
  margin: auto;
  padding-top: 10px;
}

.icons {
  zoom: 1.8;
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding-top: 10px;
}

@media (min-width: 321px) {
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }
  .icono-calendar {
    zoom: 1.2;
  }

  p {
    font-size: 1.5rem;
  }
}

@media (min-width: 768px) {
  h1 {
    font-size: 3.5rem;
  }
  header {
    height: 11vh;
  }
}

@media (min-width: 1025px) {
  #content {
    width: 80vw;
    overflow: hidden;
  }
  #container {
    background-position: center;
  }

  h2 {
    font-size: 3em;
  }

  p {
    font-size: 2rem;
  }
}
</style>