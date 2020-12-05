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

    <article class="py-5 d-flex align-items-center" id="about">
      <b-container>
        <b-row>
          <b-col md="3">
            <h2 class="font-weight-light">Carolynn Mai Beauty Studio</h2>
          </b-col>
          <b-col md="9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </article>
    <Services />
  </div>
</template>

<script>
import Services from "@/components/Services.vue";

export default {
  name: "Home",
  components: {
    Services
  }
};
</script>

<style scoped>
.embed-responsive {
  margin-top: -5% !important;
}
</style>
