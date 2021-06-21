<template>
  <div id="home">
    <article class="py-1 d-flex align-items-center bg-light">
      <b-row class="text-center jumbo-cover">
        <b-col xs="6"></b-col>
        <b-col xs="6">
          <p>
            <b-img
              src="https://www.dropbox.com/s/f0wyorwod8ml9ir/cm%20-%20logo%20-%20ff-01b.png?raw=1"
              fluid
              class="small-logo"
            /><br />
            <span class="display-4">START</span> <br />
            <span class="display-4">YOUR BEAUTY JOURNEY</span> <br />
            <span class="display-4">HERE</span>
          </p>
        </b-col>
      </b-row>
    </article>
    <About />
  </div>
</template>

<script>
import About from "@/components/About.vue";

export default {
  name: "Home",
  components: {
    About
  }
};
</script>

<style scoped>
.jumbo-cover {
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(https://www.dropbox.com/s/u8lddr59lrxze4k/face-bg.png?raw=1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.small-logo {
  max-height: 30vh;
}
</style>
