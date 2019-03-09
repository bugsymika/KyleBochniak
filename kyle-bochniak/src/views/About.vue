<template>
  <div id="body">
    <div id="background">
      <div id="container">
        <div class="spacer"/>
        <header>
          <router-link to="nav">
            <i class="icono-leftArrow"/>
          </router-link>
          <h1>About</h1>
        </header>

        <div id="content">
          <p>Kyle Bochniak Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt soluta libero amet ut totam repellat laboriosam qui, atque suscipit optio quae cumque incidunt voluptas aliquid blanditiis! Saepe, facere quae!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias voluptate excepturi odit suscipit, minima necessitatibus ab, sunt, eum laboriosam doloremque porro fugiat. At explicabo, dicta tempore possimus aperiam tempora harum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit facere quibusdam quod veritatis possimus, nesciunt animi, dolorem maxime aperiam vitae earum molestias, facilis ratione excepturi sed ad iure beatae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio dolore omnis. Deleniti hic modi, repudiandae maiores illum repellendus! Nulla adipisci quam fugiat quasi, repudiandae molestias ad consectetur laudantium molestiae.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
#body {
  background-image: url("https://i.imgur.com/X2gitUJ.jpg");
  background-size: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  overflow: hidden;
}
#container {
  min-height: 100vh;
  max-height: fit-content;
  width: 100vw;
}
#background {
  background-color: rgba(0, 0, 0, 0.753);
  background-size: cover;
}

header {
  background-image: url("https://i.imgur.com/QTQ7PL4.png");
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

p {
  font-family: "Gentium Basic", serif;
  font-size: 1.4rem;
  margin-top: 0px;
  color: white;
  text-align: left;
  padding: 6px;
  text-indent: 1em;
}

.spacer {
  height: 5vh;
}

a {
  text-decoration: none;
}

@media (min-width: 321px) {
  h1 {
    font-size: 2.8rem;
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

  #content {
    width: 85vw;
    margin-top: 20px;
  }

  p {
    font-size: 2.8rem;
  }
}
</style>