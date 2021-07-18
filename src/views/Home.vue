<template>
  <div id="home">
    <article class="py-1 d-flex align-items-center bg-light">
      <b-row class="text-center jumbo-cover">
        <b-col lg="4"></b-col>
        <b-col lg="8" class="mb-5">
          <p class="pb-5 mb-5">
            <b-img
              src="https://www.dropbox.com/s/f0wyorwod8ml9ir/cm%20-%20logo%20-%20ff-01b.png?raw=1"
              fluid
              class="small-logo"
            /><br />
            <span class="lead">START</span> <br />
            <span class="display-4">YOUR BEAUTY <br />JOURNEY</span> <br />
            <span class="lead">HERE</span>
          </p>
        </b-col>
      </b-row>
    </article>
    <b-container>
      <div class="row text-center" id="banner">
        <div class="col-sm-12 my-auto">
          <h4 class="mt-5">
            Cmai Beauty Studio - "Where Beauty Meets Science"
          </h4>
          <p class="lead">
            At Cmai Beauty Studio, I offer cutting edge permanent make up
            procedure, skin care, lashes extensions, and nails services that
            meet your beauty needs. I will listen to yours concerns and offer
            the individualized; high level of client care you seek. I believe in
            making care accessible, comfortable, quality, valuable, affordable,
            and I will go out of your way to accommodate your visit.
          </p>
        </div>
      </div>
    </b-container>
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
  min-height: 85vh;
  min-width: 100vw;
  background-image: url(https://www.dropbox.com/s/u8lddr59lrxze4k/face-bg.png?raw=1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.small-logo {
  max-height: 40vh;
}
#banner {
  min-height: 50vh;
}
</style>
