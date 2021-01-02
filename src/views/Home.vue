<template>
  <div id="home">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/videoseries?list=PL03FPac2MAc9o1KrzhdnFPl5zS9NXivfA&autoplay=1&mute=1&loop=1&rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <article class="py-5 d-flex align-items-center bg-light">
      <b-container>
        <b-row class="text-center">
          <b-col md="12">
            <p class="h1 font-weight-lighter">
              The website is still in the progress to complete. We are working
              hard on finishing our website for you to continue enjoying it!
            </p>
          </b-col>
        </b-row>
      </b-container>
    </article>
    <Covid />
    <About />
  </div>
</template>

<script>
import Covid from "@/components/Covid.vue";
import About from "@/components/About.vue";

export default {
  name: "Home",
  components: {
    Covid,
    About
  }
};
</script>

<style scoped>
.embed-responsive {
  margin-top: -5% !important;
}
</style>
